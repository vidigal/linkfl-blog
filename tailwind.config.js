/** @type {import('tailwindcss').Config} */
// Mesma configuração que vivia inline em _layouts/default.html (era o Play CDN).
// Compilado via `npm run build:css` para assets/css/tailwind.css.
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './_paginas/**/*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Hanken Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['monospace'],
      },
      colors: {
        // Primary Indigo Digital colors mapped to blue-50..900 keys to style existing blue classes automatically
        blue: {
          50: '#EFF2FE',        // surface-indigo-soft (Brisa Índigo)
          100: '#Dbe2fc',
          200: '#Bccaf9',
          300: '#9cb1f7',
          400: '#6c8cfb',
          500: '#3B59FA',        // primary (Indigo Digital)
          600: '#3B59FA',        // primary (Indigo Digital / Main CTAs)
          700: '#2541DC',        // primary-hover
          800: '#1931B8',        // primary-active
          900: '#0F172A',        // secondary (Obsidiana)
        },
        // Slate scale defined in design.md
        slate: {
          50: '#FCFCFD',        // Branco Estelar (Fundo Geral)
          100: '#F1F5F9',       // Slate Light (Inputs desativados)
          200: '#E2E8F0',       // Bordas padrão
          300: '#CBD5E1',       // Bordas focadas
          400: '#94A3B8',       // Placeholders / Ícones inativos
          500: '#64748B',       // Legendas e textos de apoio
          600: '#475569',       // Textos de leitura e benefícios
          700: '#334155',       // Textos de alto contraste
          800: '#1E293B',       // Quase-preto suave
          900: '#0F172A',       // Títulos principais (Obsidiana)
          950: '#090D16',       // Fundo do Modo Escuro profundo
        },
        // Map gray to slate to unify neutrals scale
        gray: {
          50: '#FCFCFD',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#090D16',
        },
        brand: {
          DEFAULT: '#3B59FA',
          dark: '#2541DC',
          light: '#EFF2FE',
        },
        accent: {
          DEFAULT: '#F59E0B',    // Âmbar Dourado (Premium)
          hover: '#D97706',
        },
        success: {
          DEFAULT: '#10B981',    // Verde Esmeralda
          soft: '#EFFDF5',
          text: '#065F46',
        },
        error: {
          DEFAULT: '#EF4444',    // Vermelho Destrutivo
          soft: '#FEF2F2',
          text: '#991B1B',
        },
        warning: {
          DEFAULT: '#D97706',    // Alerta de Sistema
          soft: '#FFFBEB',
          text: '#92400E',
        },
        info: {
          DEFAULT: '#0EA5E9',     // Informação / Ajuda
          soft: '#F0F9FF',
          text: '#075985',
        }
      },
      boxShadow: {
        overlay: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        sm: '0.25rem',           // 4px
        DEFAULT: '0.5rem',       // 8px
        md: '0.75rem',           // 12px
        lg: '1rem',              // 16px
        xl: '1.5rem',            // 24px
        full: '9999px',
      }
    }
  },
  plugins: [],
};
