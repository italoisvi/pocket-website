# Pocket - Website Oficial

Site oficial do aplicativo Pocket de finanças pessoais.

## Sobre o Projeto

Este é o website institucional do Pocket, um aplicativo de gerenciamento de finanças pessoais com recursos de IA para categorização automática de gastos, análise financeira e insights personalizados.

## Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **next-themes** - Suporte a tema claro/escuro
- **Cormorant Garamond** - Fonte elegante do Google Fonts

## Estrutura do Site

- **Home** (`/`) - Página inicial com apresentação do app
- **Recursos** (`/recursos`) - Detalhamento de funcionalidades
- **Sobre** (`/sobre`) - Sobre o projeto e tecnologias
- **Privacidade** (`/privacidade`) - Política de privacidade completa
- **Termos** (`/termos`) - Termos de uso do serviço

## Design System

O site segue o mesmo design system do aplicativo mobile:

### Cores

**Tema Claro:**
- Background: `#ffffff`
- Foreground: `#000000`
- Surface: `#ffffff`
- Border: `#f0f0f0`
- Text Secondary: `#666666`

**Tema Escuro:**
- Background: `#000000`
- Foreground: `#ffffff`
- Surface: `#1c1c1e`
- Border: `#2c2c2e`
- Text Secondary: `#a0a0a0`

### Tipografia

- Fonte principal: **Cormorant Garamond**
- Pesos: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Estilo: Serif elegante e minimalista

### Categorias (cores do app)

- 🏠 Moradia: `#FF6B6B`
- 🍕 Alimentação: `#4ECDC4`
- 🚗 Transporte: `#FFD93D`
- 💊 Saúde: `#FCBAD3`
- 📚 Educação: `#95E1D3`
- 🎮 Lazer: `#A8D8EA`
- E mais...

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar produção localmente
npm start
```

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento em http://localhost:3000
- `npm run build` - Cria build otimizado para produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa o linter do Next.js

## Deploy

Este projeto está pronto para deploy em plataformas como:

- **Vercel** (recomendado, criadores do Next.js)
- **Netlify**
- **GitHub Pages** (com next export)
- Qualquer servidor Node.js

### Deploy na Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Estrutura de Diretórios

```
pocket-website/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout root com tema
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── recursos/          # Página de recursos
│   ├── sobre/             # Página sobre
│   ├── privacidade/       # Política de privacidade
│   └── termos/            # Termos de uso
├── components/            # Componentes React
│   ├── Header.tsx        # Cabeçalho com navegação
│   ├── Footer.tsx        # Rodapé
│   └── ThemeProvider.tsx # Provider de tema
├── public/               # Arquivos estáticos
├── package.json          # Dependências
├── tailwind.config.ts    # Configuração Tailwind
├── tsconfig.json         # Configuração TypeScript
└── next.config.ts        # Configuração Next.js
```

## Customização

### Alterando Cores

Edite o arquivo `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  /* ... outras cores */
}

.dark {
  --background: #000000;
  --foreground: #ffffff;
  /* ... outras cores */
}
```

### Alterando Conteúdo

- **Textos das páginas:** Edite os arquivos `.tsx` em `app/`
- **Navegação:** Edite `components/Header.tsx`
- **Rodapé:** Edite `components/Footer.tsx`
- **Metadados SEO:** Edite `app/layout.tsx`

## SEO

O site já inclui:

- Meta tags otimizadas
- Open Graph tags para compartilhamento
- Títulos e descrições personalizados
- Estrutura semântica HTML5

## Acessibilidade

- Suporte completo a temas (claro/escuro/sistema)
- Estrutura semântica
- Contraste adequado de cores
- Navegação por teclado

## Licença

© 2024 Pocket. Todos os direitos reservados.

## Contato

Para questões sobre o projeto:
- Email: suporte@pocket-app.com
- Website: Em breve

---

Desenvolvido com ❤️ para o Pocket
