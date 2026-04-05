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

Portfolio pessoal em frontend unico, construido com Next.js, para apresentar identidade profissional, trajetoria, experiencias, stack tecnica, projetos selecionados e canais de contato do Breno Fernandes. A aplicacao e composta por uma landing page com navegacao por secoes, uma pagina dedicada para o projeto "Concurso Facil" e links externos para curriculo, redes sociais e demonstracao.

**Objetivo funcional:**

- consolidar apresentacao profissional em um unico site
- comunicar experiencias relevantes de carreira e formacao
- exibir projetos com visao resumida na home e visao detalhada em pagina dedicada
- facilitar contato por email, WhatsApp, LinkedIn, GitHub e curriculo em PDF

**Tecnologias principais (resumo):**

- Frontend: Next.js 16.1.6 + React 19.2.3 + TypeScript
- Backend: `Estado atual: nao existe neste repositorio`
- Banco: `Estado atual: nao existe neste repositorio`

---

## 2. Stack e componentes

### Frontend

- Framework: Next.js 16.1.6 com App Router
- Linguagem: TypeScript
- UI: React 19.2.3
- Estilizacao: Tailwind CSS 4
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
|-- src/
|   |-- app/
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   |-- globals.css
|   |   |-- fonts.ts
|   |   `-- projetos/
|   |       `-- concurso-facil/
|   |           `-- page.tsx
|   |-- components/
|   |   |-- home/
|   |   |   |-- About/
|   |   |   |-- Experience/
|   |   |   |-- Hero/
|   |   |   |-- Projects/
|   |   |   `-- TechCarousel/
|   |   |-- layout/
|   |   |   |-- FooterContact.tsx
|   |   |   `-- Navbar.tsx
|   |   |-- project/
|   |   |   |-- ProjectHero.tsx
|   |   |   |-- ProjectLinks.tsx
|   |   |   `-- ProjectOverview.tsx
|   |   `-- shared/
|   |       |-- SectionTitle.tsx
|   |       `-- Tag.tsx
|   |-- data/
|   |   `-- Estado atual: existe a pasta, mas nao ha arquivos ativos identificados
|   |-- lib/
|   |-- types/
|   `-- components/animations/
|-- data/
|   `-- projects.ts
|-- public/
|   |-- images/
|   |-- icons/
|   |-- CurriculoBrenoFernandes.pdf
|   `-- imagens principais ainda na raiz de public/
|-- legacy/
|   `-- page_bacup.tsx
|-- next.config.ts
|-- package.json
|-- tsconfig.json
|-- README.md
`-- agent.md
```

**Leitura da estrutura:**

- `src/app/` -> camada ativa de rotas, layout global, estilos e ponto de entrada do App Router
- `src/components/home/` -> secoes exclusivas da landing page principal
- `src/components/layout/` -> estrutura global compartilhada, hoje com `Navbar` e `FooterContact`
- `src/components/project/` -> blocos reutilizaveis de paginas detalhadas de projeto
- `src/components/shared/` -> componentes visuais reutilizaveis de baixo acoplamento
- `data/projects.ts` -> fonte de dados ativa da grade de projetos da home
- `src/data/` -> pasta reservada para futura consolidacao de conteudo, mas ainda nao e a fonte principal ativa
- `public/` -> assets estaticos, PDF do curriculo e imagens do portfolio
- `legacy/page_bacup.tsx` -> arquivo legado/backup, fora da app ativa, mas ainda versionado

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

- a aplicacao ativa esta em `src/app`, nao mais em `app/`
- `npm run dev` deve servir a home normalmente em `/`
- a aplicacao depende de fontes remotas do Google via `next/font/google`
- em ambientes sem acesso externo, `npm run build` pode falhar ao buscar Geist, Geist Mono e Bebas Neue
- nao ha `.env` obrigatorio mapeado no repositorio

---

## 5. Arquitetura em alto nivel

### Resumo

- arquitetura de frontend unico, sem backend acoplado
- conteudo majoritariamente estatico, renderizado a partir de componentes React
- home e pagina dedicada compartilham moldura global via `src/app/layout.tsx`
- navegacao hibrida entre scroll interno na home e rota dedicada para um projeto especifico
- a arquitetura esta em transicao: estrutura visual migrou para `src/`, mas parte do conteudo ainda permanece fora de `src/data`

### Frontend

- `src/app/layout.tsx` concentra a moldura global da aplicacao e renderiza `Navbar`, `{children}` e `FooterContact`
- `src/app/page.tsx` compoe a home a partir de `Hero`, `About`, experiencias, tecnologias e projetos
- `src/app/page.tsx` escuta hash da URL e faz `scrollIntoView` apos render para suportar retorno a secoes da home
- `src/components/layout/Navbar.tsx` usa `useRouter` e `usePathname` para decidir entre scroll local e navegacao com hash
- `src/components/home/Projects/ProjectsGrid.tsx` controla modal de projeto por estado local (`selectedProject`)
- `src/components/home/Projects/ProjectModal.tsx` bloqueia scroll do `body` enquanto o modal esta aberto
- `src/components/project/` ja comecou a quebrar a pagina do Concurso Facil em blocos menores (`ProjectHero`, `ProjectOverview`, `ProjectLinks`)
- `src/components/shared/SectionTitle.tsx` e `src/components/shared/Tag.tsx` representam a primeira camada de reutilizacao visual

**Consequencias:**

- estado de interface e mantido em memoria no cliente
- refresh fecha modal e reseta interacoes locais
- nao existe CMS, painel administrativo ou persistencia
- inclusao de novos projetos ainda depende de alteracao manual no codigo
- parte do conteudo ainda esta hardcoded em componentes ou na propria pagina dedicada

### Backend

- `Estado atual: nao existe`

### Integracoes externas

- GitHub
- LinkedIn
- Instagram
- WhatsApp (`wa.me`)
- PDF de curriculo hospedado em `public/`
- demo externa do projeto Concurso Facil
- Google Fonts via `next/font/google`

---

## 6. Fluxos principais

### Fluxo 1 - Acesso a home e navegacao por secoes

1. usuario acessa `/`
2. `src/app/layout.tsx` renderiza `Navbar`, conteudo da rota e `FooterContact`
3. `src/app/page.tsx` renderiza `Hero`, `About`, experiencias, tecnologias e projetos
4. clique na navbar tenta localizar a secao na mesma pagina
5. se o usuario estiver fora da home, a navbar redireciona para `/#id`
6. apos a navegacao, `src/app/page.tsx` le o hash e executa scroll suave para o elemento alvo

### Fluxo 2 - Exploracao de projeto na grade

1. usuario navega ate a secao `Projetos`
2. `ProjectsGrid` lista cards com base em `data/projects.ts`
3. clique em um card abre `ProjectModal`
4. o modal exibe descricao, stack e CTA para GitHub e/ou pagina dedicada
5. fechar modal restaura o scroll do corpo da pagina

### Fluxo 3 - Pagina detalhada do Concurso Facil

1. usuario chega a rota `/projetos/concurso-facil`
2. a pagina compoe `ProjectHero`, `ProjectOverview` e `ProjectLinks`
3. a propria pagina ainda controla um modal local para a demonstracao
4. usuario pode seguir para a demo externa hospedada fora do portfolio

### Fluxo 4 - Contato

1. usuario navega ate a secao `contato`
2. `FooterContact` exibe os canais disponiveis
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
- a secao de contato ainda tem tratamento especial na logica da navbar
- o item "Projetos" na navbar possui dropdown com atalho para a rota dedicada do Concurso Facil

### Comportamentos importantes

- header muda visualmente apos scroll vertical acima de 50px
- `EngNet` e `Serpro` expandem conteudo com botao "Saiba mais"
- `ProjectsGrid` abre modal de projeto em overlay
- pagina de `Concurso Facil` possui modal proprio para aviso da demonstracao
- existe um arquivo `legacy/page_bacup.tsx`, mas ele nao faz parte do fluxo atual de navegacao

---

## 8. Backend - contratos publicos

### Endpoints principais

- `Estado atual: nao existem endpoints HTTP internos neste repositorio`

### Contratos publicos efetivos deste frontend

- `GET /` -> entrega a landing page do portfolio
- `GET /projetos/concurso-facil` -> entrega a pagina dedicada do projeto
- `GET /CurriculoBrenoFernandes.pdf` -> disponibiliza download ou abertura do curriculo
- `GET /<assets em public>` -> imagens e arquivos estaticos do portfolio

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
- o dropdown da navbar para projetos ainda esta hardcoded

---

## 10. Dados iniciais

- projetos: definidos manualmente em `data/projects.ts`
- midias: armazenadas em `public/`
- curriculo: `public/CurriculoBrenoFernandes.pdf`
- tecnologias do carrossel: `Estado atual: ainda definidas inline em src/components/home/TechCarousel/TechCarousel.tsx`
- textos institucionais e experiencias: `Estado atual: ainda definidos majoritariamente nos componentes`
- `src/data/`: `Estado atual: estrutura preparada, mas ainda nao consolidada como fonte ativa do projeto`

---

## 11. Hurdles (armadilhas do projeto)

1. O projeto nao esta em Angular. Se alguem entrar assumindo Angular, vai perder tempo ate perceber que a base atual e Next.js + React.
2. O layout ativo esta em `src/app/layout.tsx`, mas os metadados ainda usam valores padrao de `create-next-app` (`Create Next App`), o que nao reflete a identidade do portfolio.
3. A pagina `src/app/projetos/concurso-facil/page.tsx` ainda merece revisao textual e pode concentrar hardcodes especificos do projeto.
4. `legacy/page_bacup.tsx` continua versionado e tende a aparecer em lint/warnings mesmo sem participar da aplicacao principal.
5. `build` depende de acesso a Google Fonts; em ambientes restritos ou CI sem saida para internet, a compilacao pode falhar.
6. Alguns comportamentos de navegacao continuam hardcoded, como o dropdown de projetos e o tratamento especial da secao de contato.
7. A arquitetura visual ja migrou para `src/`, mas a camada de dados ainda esta parcialmente fora dela, o que cria um estado intermediario de transicao.
8. Assets principais ainda estao na raiz de `public/`, apesar de ja existirem diretorios `public/images/` e `public/icons`.
9. Nao ha testes automatizados, entao regressos visuais e de navegacao dependem de validacao manual.

---

## 12. Testes

### Frontend

- `Estado atual: nao existem testes automatizados`
- validacao disponivel hoje:
  - `npm run lint`
  - execucao manual em `npm run dev`

**Estado observado nesta analise:**

- `npm run dev` iniciou normalmente depois da remocao da pasta `app/` da raiz
- `npm run lint`: `Estado atual: nao reexecutado nesta revisao do documento`
- `npm run build`: pode falhar em ambientes sem acesso externo por dependencia de `next/font/google`

### Backend

- `Estado atual: nao existe backend`

---

## 13. Estado operacional atual

### Dev server

- status: deve responder em `http://localhost:3000`
- observacao: a aplicacao ativa e servida a partir de `src/app`

### Lint

- status: `Estado atual: nao revalidado nesta revisao`
- observacao: historicamente o principal ruido vinha do arquivo legado `page_bacup.tsx`

### Build

- status: instavel em ambientes sem internet
- causa observada: falha ao buscar fontes Google via `next/font/google`
- inferencia segura: o projeto ainda possui dependencia externa de rede para compilar como esta

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
- tema configuravel: `Estado atual: nao existe`
- acessibilidade formal/documentada: `Estado atual: nao identificada politica ou suite de validacao`
- consolidacao completa em `src/data/`: `Estado atual: nao concluida`
- Angular: `Estado atual: nao existe neste repositorio`

---

## 15. Checklist de manutencao

Atualizar este documento quando mudar:

- rotas do App Router
- estrutura de `data/projects.ts`
- eventual ativacao real de `src/data/`
- links publicos de contato
- assets relevantes em `public/`
- fontes e estrategia de build
- navegacao da navbar
- projetos com pagina dedicada
- stack principal do frontend

---

## 16. Ponto de partida para novos desenvolvedores/agentes

Ordem recomendada:

1. ler este `agent.md`
2. ler `README.md`
3. revisar `src/app/page.tsx`
4. revisar `src/app/layout.tsx`
5. revisar `src/components/layout/Navbar.tsx`
6. revisar `src/components/home/Projects/ProjectsGrid.tsx`
7. revisar `data/projects.ts`
8. revisar `src/app/projetos/concurso-facil/page.tsx`

**Heuristica:**

- problema de navegacao/scroll -> `src/components/layout/Navbar.tsx` + `src/app/page.tsx`
- problema em projetos/modais -> `src/components/home/Projects/`
- problema em pagina dedicada -> `src/app/projetos/concurso-facil/page.tsx` + `src/components/project/`
- problema em conteudo textual -> componentes de secao ou `data/projects.ts`
- problema de build -> `src/app/layout.tsx`, `src/app/fonts.ts` e dependencia de `next/font/google`
- problema de identidade/SEO -> `src/app/layout.tsx`

---

## 17. Politica do documento

Este documento deve evoluir com o projeto.

Sempre registrar:

- novas rotas
- mudancas de conteudo relevante
- mudancas no contrato de `data/projects.ts`
- passos concluidos da migracao arquitetural para `src/`
- decisoes arquiteturais
- riscos tecnicos conhecidos
- problemas recorrentes observados em `dev`, `lint`, `build` ou navegacao
