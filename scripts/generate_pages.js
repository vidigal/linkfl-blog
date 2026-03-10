const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Paths
const dataDir = path.join(__dirname, '../_data');
const outputDir = path.join(__dirname, '../_paginas');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Read Data
const profissoes = yaml.load(fs.readFileSync(path.join(dataDir, 'profissoes.yml'), 'utf8'));
const cidades = yaml.load(fs.readFileSync(path.join(dataDir, 'cidades.yml'), 'utf8'));

let generatedCount = 0;

// Helper to create markdown content
function createMarkdown(frontmatter) {
    let content = '---\n';
    for (const [key, value] of Object.entries(frontmatter)) {
        content += `${key}: "${value}"\n`;
    }
    content += '---\n';
    return content;
}

// 1. Generate pages for each Profession (without city)
profissoes.forEach(prof => {
    const slug = `site-para-${prof.slug}`;
    const filePath = path.join(outputDir, `${slug}.md`);
    
    const frontmatter = {
        layout: 'programmatic',
        title: `Como criar um site para ${prof.nome}`,
        description: `Descubra como criar um site profissional para ${prof.nome.toLowerCase()}, atrair clientes no Google e aumentar sua visibilidade online com o Linkfl.`,
        profissao_nome: prof.nome,
        profissao_slug: prof.slug
    };

    fs.writeFileSync(filePath, createMarkdown(frontmatter));
    generatedCount++;
});

// 2. Generate pages for each Profession + City combination
profissoes.forEach(prof => {
    cidades.forEach(cid => {
        const slug = `site-para-${prof.slug}-em-${cid.slug}`;
        const filePath = path.join(outputDir, `${slug}.md`);
        
        const frontmatter = {
            layout: 'programmatic',
            title: `Como criar um site para ${prof.nome} em ${cid.nome}`,
            description: `Guia completo: como criar um site profissional para ${prof.nome.toLowerCase()} em ${cid.nome}. Apareça no Google e atraia clientes da sua região.`,
            profissao_nome: prof.nome,
            profissao_slug: prof.slug,
            cidade_nome: cid.nome,
            cidade_slug: cid.slug
        };

        fs.writeFileSync(filePath, createMarkdown(frontmatter));
        generatedCount++;
    });
});

console.log(`Successfully generated ${generatedCount} programmatic SEO pages in _paginas/`);
