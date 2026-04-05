# Agent.md

Documento vivo de onboarding para agentes e equipe do projeto **Breno Portfolio**.

Este arquivo existe para reduzir contexto implicito. A expectativa e que qualquer pessoa consiga entender rapidamente:

- o que o sistema faz
- como executar localmente
- quais sao os fluxos principais
- quais contratos publicos existem
- quais decisoes arquiteturais foram tomadas
- quais pontos causam erro recorrente

Quando faltar informacao, registrar explicitamente:

> `Estado atual: nao existe/nao identificado no repositorio`

---

## 1. Visao geral do produto

**Descricao do sistema:**

Portfolio pessoal em frontend unico, construido com Next.js, para apresentar identidade profissional, trajetoria, experiencias, stack tecnica, projetos selecionados e canais de contato do Breno Fernandes. A aplicacao e essencialmente uma landing page com navegacao por secoes, uma pagina dedicada para o projeto "Concurso Facil" e multiplos links externos para curriculo, redes sociais e demonstracao de projeto.

**Objetivo funcional:**

- consolidar apresentacao profissional em um unico site
- comunicar experiencias relevantes de carreira e formacao
- exibir projetos com navegacao entre visao resumida e visao detalhada
- facilitar contato por email, WhatsApp, LinkedIn, GitHub e curriculo em PDF

**Tecnologias principais (resumo):**

- Frontend: Next.js 16.1.6 + React 19.2.3 + TypeScript
- Backend: `Estado atual: nao existe neste repositorio`
- Banco: `Estado atual: nao existe neste repositorio`

**Observacao importante de contexto:**

- o projeto atual **nao esta em Angular**
- caso a intencao futura seja migrar ou recriar em Angular, isso ainda nao aparece no codigo versionado

---

## 2. Stack e componentes

### Frontend

- Framework: Next.js 16.1.6 com App Router
- Linguagem: TypeScript com `strict: true`
- UI: React 19.2.3
- Estilizacao: Tailwind CSS 4 via `@import "tailwindcss"`
- Fontes: `next/font/google` com Geist, Geist Mono e Bebas Neue
- Animacoes: GSAP
- Carrossel: `embla-carousel-react`
- Icones: `react-icons`
- Navegacao: `next/navigation`
- Imagens: `next/image` na maior parte da interface

### Backend

- `Estado atual: nao existe backend proprio neste repositorio`
- `Estado atual: nao existem controllers, services, repositories ou API interna`

### Infraestrutura local

- Banco via Docker: `Estado atual: nao existe`
- Volumes: `Estado atual: nao existe`
- Servicos auxiliares: `Estado atual: nao existem`
- Variaveis de ambiente obrigatorias: `Estado atual: nao identificadas no repositorio`

---

## 3. Estrutura do repositorio

```text
.
|-- app/
|   |-- layout.tsx
|   |-- page.tsx
|   |-- page_bacup.tsx
|   |-- globals.css
|   |-- fonts.ts
|   `-- projetos/
|       `-- concurso-facil/
|           `-- page.tsx
|-- components/
|   |-- About/
|   |-- Contact/
|   |-- Experience/
|   |-- Hero/
|   |-- Navbar/
|   |-- Projects/
|   `-- TechCarousel/
|-- data/
|   `-- projects.ts
|-- public/
|   |-- imagens do portfolio
|   `-- CurriculoBrenoFernandes.pdf
|-- package.json
|-- next.config.ts
|-- tsconfig.json
`-- README.md
```

**Leitura da estrutura:**

- `app/` -> rotas, layout global, estilos e ponto de entrada do App Router
- `components/` -> secoes visuais e componentes reutilizados da landing page
- `data/` -> fonte de dados local dos cards de projeto
- `public/` -> imagens, curriculo PDF e assets estaticos
- `app/projetos/concurso-facil/` -> pagina dedicada do projeto em destaque
- `app/page_bacup.tsx` -> arquivo legado/backup, nao referenciado pela aplicacao atual

---

## 4. Setup local

### Requisitos

- Node.js compativel com Next.js 16
- npm

### Banco de dados

- `Estado atual: nao existe banco local para este projeto`

### Backend

- `Estado atual: nao existe backend para subir`

### Frontend

```bash
npm install
npm run dev
```

**URL:**

- `http://localhost:3000`

**Scripts disponiveis:**

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

**Observacoes importantes:**

- a aplicacao depende de fontes remotas do Google via `next/font/google`
- em ambientes sem acesso externo, `npm run build` pode falhar ao buscar Geist, Geist Mono e Bebas Neue
- nao ha `.env` obrigatorio mapeado no repositorio

---

## 5. Arquitetura em alto nivel

### Resumo

- arquitetura de frontend unico, sem backend acoplado
- conteudo majoritariamente estatico, renderizado a partir de componentes React
- dados dos projetos mantidos localmente em `data/projects.ts`
- navegacao hibrida entre scroll interno na home e rota dedicada para um projeto especifico

### Frontend

- `app/page.tsx` compoe a home a partir de secoes independentes
- `Navbar` usa `useRouter` e `usePathname` para decidir entre scroll local e navegacao com hash
- a propria `app/page.tsx` escuta hash da URL e faz `scrollIntoView` apos render para suportar retorno a home
- `ProjectsGrid` controla modal de projeto por estado local (`selectedProject`)
- `ProjectModal` bloqueia scroll do `body` enquanto o modal esta aberto
- `TechCarousel` usa Embla para navegacao lateral de tecnologias
- secoes `Hero`, `EngNet` e `Serpro` usam GSAP + `IntersectionObserver` para efeitos de entrada e enfase

**Consequencias:**

- estado e todo em memoria do cliente
- refresh fecha modal e reseta interacoes como "Saiba mais"
- nao existe CMS, painel administrativo ou persistencia
- inclusao de novos projetos depende de alteracao manual no codigo

### Backend

- `Estado atual: nao existe`

### Integracoes externas

- GitHub
- LinkedIn
- Instagram
- WhatsApp (`wa.me`)
- PDF de curriculo hospedado em `public/`
- demo externa do projeto Concurso Facil em Vercel
- repositorios externos do ecossistema Concurso Facil
- Google Fonts via `next/font/google`

---

## 6. Fluxos principais

### Fluxo 1 - Acesso a home e navegacao por secoes

1. usuario acessa `/`
2. `app/page.tsx` renderiza `Navbar`, `Hero`, `About`, experiencias, tecnologias, projetos e contato
3. clique na navbar tenta localizar a secao na mesma pagina
4. se o usuario estiver fora da home, a navbar redireciona para `/#id`
5. apos a navegacao, `app/page.tsx` le o hash e executa scroll suave para o elemento alvo

### Fluxo 2 - Exploracao de projeto na grade

1. usuario navega ate a secao `Projetos`
2. `ProjectsGrid` lista cards com base em `data/projects.ts`
3. clique em um card abre `ProjectModal`
4. o modal exibe descricao, stack e CTA para GitHub e/ou pagina dedicada
5. fechar modal restaura o scroll do corpo da pagina

### Fluxo 3 - Pagina detalhada do Concurso Facil

1. usuario chega a rota `/projetos/concurso-facil`
2. a pagina renderiza hero proprio, metricas, descricao, arquitetura, links de repositorio e CTA de demonstracao
3. clique em "Acessar demonstracao" abre modal explicativo
4. usuario pode seguir para a demo externa hospedada na Vercel

### Fluxo 4 - Contato

1. usuario navega ate a secao `contato`
2. escolhe um dos canais disponiveis
3. a acao redireciona para `mailto:`, `wa.me`, rede social externa ou curriculo PDF

---

## 7. Frontend - rotas e comportamento

### Rotas publicas

- `/` -> landing page principal
- `/projetos/concurso-facil` -> pagina dedicada do projeto Concurso Facil

### Ancoras da home

- `#home`
- `#sobre`
- `#tecnologias`
- `#projetos`
- `#contato`

### Regras de navegacao

- na home, a navbar usa scroll suave para secoes existentes
- fora da home, a navbar redireciona para `/#id` usando `router.push(..., { scroll: false })`
- a secao de contato tem tratamento especial para tentar scroll direto antes do fallback
- o item "Projetos" na navbar possui dropdown com atalho para a rota dedicada do Concurso Facil

### Comportamentos importantes

- header muda visualmente apos scroll vertical acima de 50px
- `EngNet` e `Serpro` expandem conteudo com botao "Saiba mais"
- `ProjectsGrid` abre modal de projeto em overlay
- pagina de `Concurso Facil` possui segundo modal para aviso da demonstracao
- existe um arquivo `app/page_bacup.tsx`, mas ele nao faz parte do fluxo atual de navegacao

---

## 8. Backend - contratos publicos

### Endpoints principais

- `Estado atual: nao existem endpoints HTTP internos neste repositorio`

### Contratos publicos efetivos deste frontend

- `GET /` -> entrega a landing page do portfolio
- `GET /projetos/concurso-facil` -> entrega a pagina dedicada do projeto
- `GET /CurriculoBrenoFernandes.pdf` -> disponibiliza download ou abertura do curriculo
- `GET /<assets em public>` -> imagens estaticas do portfolio

### Exemplo de contrato de dados interno

Estrutura usada em `data/projects.ts`:

```ts
type Project = {
  id: number
  name: string
  image: string
  description: string
  tech: string[]
  github?: string
  hasPage?: boolean
  href?: string
}
```

### Exemplo de payload usado pela home

```json
{
  "id": 2,
  "name": "Concurso Facil",
  "image": "/concursofacil.png",
  "description": "Plataforma desenvolvida para auxiliar candidatos na organizacao e preparacao para concursos publicos.",
  "tech": ["Laravel", "Vue", "MySQL"],
  "hasPage": true,
  "href": "/projetos/concurso-facil"
}
```

### Erros comuns

- abrir links externos depende de disponibilidade do destino
- `build` depende de acesso as fontes remotas do Google
- ausencia de projeto em `data/projects.ts` impede renderizacao na grade

---

## 9. Regras de negocio

- o portfolio e centrado em conteudo manual, sem gerenciamento dinamico
- apenas projetos cadastrados em `data/projects.ts` aparecem na grade principal
- apenas projetos com `hasPage` e `href` exibem CTA para pagina dedicada no modal
- contato e feito exclusivamente por redirecionamento para servicos externos
- o item de dropdown da navbar para "Concurso Facil" esta hardcoded

---

## 10. Dados iniciais

- projetos: definidos manualmente em `data/projects.ts`
- midias: armazenadas em `public/`
- curriculo: `public/CurriculoBrenoFernandes.pdf`
- tecnologias do carrossel: definidas inline em `components/TechCarousel/TechCarousel.tsx`
- textos institucionais e experiencias: definidos inline nos componentes

---

## 11. Hurdles (armadilhas do projeto)

1. O projeto nao esta em Angular. Se alguem entrar assumindo Angular, vai perder tempo ate perceber que a base atual e Next.js + React.
2. `app/layout.tsx` ainda usa metadados padrao de `create-next-app` (`Create Next App`), o que nao reflete a identidade do portfolio.
3. `app/projetos/concurso-facil/page.tsx` apresenta texto com problema de encoding (`FÃ¡cil`, `organizaÃ§Ã£o`), impactando percepcao de qualidade.
4. `app/page_bacup.tsx` continua versionado e entra no `eslint`, gerando warnings em arquivo que aparenta ser legado.
5. `next.config.ts` usa `images.domains`, configuracao ja marcada como deprecated pelo Next 16.
6. O `build` depende de acesso a Google Fonts; em ambientes restritos ou CI sem saida para internet, a compilacao falha.
7. Alguns comportamentos de navegacao sao hardcoded, como o dropdown de projetos e o tratamento especial da secao de contato.
8. Nao ha testes automatizados, entao regressos visuais e de navegacao dependem de validacao manual.

---

## 12. Testes

### Frontend

- `Estado atual: nao existem testes automatizados`
- validacao disponivel hoje:
  - `npm run lint`
  - execucao manual em `npm run dev`

**Estado observado nesta analise:**

- `npm run lint` executou com sucesso, mas com 8 warnings
- os warnings estao concentrados em `app/page_bacup.tsx`

### Backend

- `Estado atual: nao existe backend`

---

## 13. Estado operacional atual

### Lint

- status: executa com sucesso
- observacao: ha warnings em arquivo de backup nao usado pela aplicacao principal

### Build

- status: nao concluido no ambiente desta analise
- causa observada: falha ao buscar fontes Google via `next/font/google`
- inferencia segura: o projeto possui dependencia externa de rede para compilar como esta

---

## 14. Ausencias relevantes

- autenticacao: `Estado atual: nao existe`
- autorizacao/perfis: `Estado atual: nao existe`
- backend interno: `Estado atual: nao existe`
- banco de dados: `Estado atual: nao existe`
- API propria: `Estado atual: nao existe`
- observabilidade: `Estado atual: nao identificada instrumentacao de logs, tracing ou metricas`
- mensageria: `Estado atual: nao existe`
- testes automatizados: `Estado atual: nao existem`
- CI/CD versionado no repositorio: `Estado atual: nao identificado`
- CMS/painel administrativo: `Estado atual: nao existe`
- internacionalizacao: `Estado atual: nao existe`
- tema configuravel: `Estado atual: nao existe, apesar de estilos citarem dark colors em alguns trechos`
- acessibilidade formal/documentada: `Estado atual: nao identificada politica ou suite de validacao`
- Angular: `Estado atual: nao existe neste repositorio`

---

## 15. Checklist de manutencao

Atualizar este documento quando mudar:

- rotas do App Router
- estrutura de `data/projects.ts`
- links publicos de contato
- assets relevantes em `public/`
- fontes e estrategia de build
- navegacao da navbar
- projetos com pagina dedicada
- stack principal do frontend

---

## 16. Ponto de partida para novos desenvolvedores/agentes

Ordem recomendada:

1. ler este `Agent.md`
2. ler `README.md`
3. revisar `app/page.tsx`
4. revisar `components/Navbar/Navbar.tsx`
5. revisar `data/projects.ts`
6. revisar `app/projetos/concurso-facil/page.tsx`

**Heuristica:**

- problema de navegacao/scroll -> `Navbar` + `app/page.tsx`
- problema em projetos/modais -> `components/Projects/`
- problema em conteudo textual -> componentes de secao ou `data/projects.ts`
- problema de build -> `app/layout.tsx`, `app/fonts.ts` e dependencia de `next/font/google`
- problema de identidade/SEO -> `app/layout.tsx`

---

## 17. Politica do documento

Este documento deve evoluir com o projeto.

Sempre registrar:

- novas rotas
- mudancas de conteudo relevante
- mudancas no contrato de `data/projects.ts`
- decisoes arquiteturais
- riscos tecnicos conhecidos
- problemas recorrentes observados em lint, build ou navegacao
