const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const targets = [
  '_posts',
  '_paginas',
  '_layouts',
  'index.html',
  'indice.html',
  'profissoes.html',
];

const assetLikeExtension = /\.[a-z0-9]{1,6}$/i;
const allowedExactPaths = new Set(['/']);
const ignoredPrefixes = ['/assets/', '/#', '//'];

function walk(inputPath) {
  const fullPath = path.join(projectRoot, inputPath);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const stat = fs.statSync(fullPath);

  if (stat.isFile()) {
    return [fullPath];
  }

  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const relativeChild = path.join(inputPath, entry.name);
    if (entry.isDirectory()) {
      return walk(relativeChild);
    }
    return [path.join(projectRoot, relativeChild)];
  });
}

function normalizeCandidate(rawTarget) {
  if (!rawTarget || !rawTarget.startsWith('/')) {
    return null;
  }

  const trimmed = rawTarget.trim();
  if (allowedExactPaths.has(trimmed)) {
    return null;
  }

  if (ignoredPrefixes.some((prefix) => trimmed.startsWith(prefix))) {
    return null;
  }

  if (trimmed.includes('://')) {
    return null;
  }

  const cleanPath = trimmed.split('#')[0].split('?')[0];

  if (!cleanPath || allowedExactPaths.has(cleanPath)) {
    return null;
  }

  if (cleanPath.endsWith('/')) {
    return null;
  }

  if (assetLikeExtension.test(cleanPath)) {
    return null;
  }

  return cleanPath;
}

function getLineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

function collectMatches(filePath, pattern, extractor) {
  const content = fs.readFileSync(filePath, 'utf8');
  const findings = [];

  for (const match of content.matchAll(pattern)) {
    const rawTarget = extractor(match);
    const normalized = normalizeCandidate(rawTarget);

    if (!normalized) {
      continue;
    }

    findings.push({
      file: path.relative(projectRoot, filePath),
      line: getLineNumber(content, match.index ?? 0),
      target: normalized,
      raw: match[0],
    });
  }

  return findings;
}

const markdownLinkPattern = /\[[^\]]*?\]\((\/[^)\s]+)\)/g;
const htmlHrefPattern = /href=(["'])(\/[^"'#? >]+(?:[?#][^"']*)?)\1/g;

const files = targets.flatMap(walk).filter((filePath) => {
  return ['.md', '.html'].includes(path.extname(filePath));
});

const findings = files.flatMap((filePath) => {
  return [
    ...collectMatches(filePath, markdownLinkPattern, (match) => match[1]),
    ...collectMatches(filePath, htmlHrefPattern, (match) => match[2]),
  ];
});

if (findings.length > 0) {
  console.error('Found internal links without trailing slash:');
  findings.forEach((finding) => {
    console.error(`- ${finding.file}:${finding.line} -> ${finding.target}/`);
  });
  process.exit(1);
}

console.log('Internal link check passed.');
