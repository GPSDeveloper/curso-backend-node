const LESSONS = [
  // Cada aula deve terminar com uma seção:
  // <section class="hands-on" id="mao-na-massa"> ... </section>
  // Use hands-on-badge, steps, checklist e resource-list dentro dela.
  {
    id: "01-introducao",
    number: "01",
    module: "Fundamentos",
    title: "Introdução ao Backend",
    subtitle: "Conceitos, Git e primeiro repo",
    comingSoon: false,
    content: `
      <section>
        <p class="lead">
          Bem-vindo ao curso! Hoje vamos entender <strong>o que é backend</strong>,
          como ele se comunica com o frontend (app ou site) e quais ferramentas
          você vai usar ao longo das próximas aulas.
        </p>

        <div class="callout callout-tip">
          <strong>Objetivo da aula de hoje</strong>
          <p>Sair da aula sabendo explicar backend, API, endpoint, JSON e HTTP — e com este site publicado no seu GitHub usando Git. <a href="#mao-na-massa">Ir para Mão na Massa ↓</a></p>
        </div>
      </section>

      <section>
        <h2>O que é Backend?</h2>
        <p>
          Quando você usa um app (como o Minha Claro, Instagram ou iFood), existem
          duas partes principais trabalhando juntas:
        </p>

        <div class="card-grid">
          <div class="card">
            <div class="card-icon">📱</div>
            <h4>Frontend</h4>
            <p>O que o usuário vê e toca: telas, botões, formulários. Roda no celular ou no navegador.</p>
          </div>
          <div class="card">
            <div class="card-icon">⚙️</div>
            <h4>Backend</h4>
            <p>A "cozinha" do sistema: processa regras, acessa banco de dados, valida login, calcula valores.</p>
          </div>
        </div>

        <p>
          O <strong>backend</strong> roda em um <strong>servidor</strong> — um computador
          sempre ligado na internet — e responde pedidos do frontend. Ele não mostra
          telas bonitas; ele <em>entrega dados e executa ações</em>.
        </p>

        <div class="diagram">
          <div class="flow">
            <div class="flow-box">📱 App / Site<br><small>(Frontend)</small></div>
            <span class="flow-arrow">→</span>
            <div class="flow-box">🌐 Internet<br><small>(HTTP)</small></div>
            <span class="flow-arrow">→</span>
            <div class="flow-box">🖥️ Servidor<br><small>(Backend Node.js)</small></div>
            <span class="flow-arrow">→</span>
            <div class="flow-box">🗄️ Banco de Dados</div>
          </div>
          <p style="margin-top:1rem;font-size:0.85rem;color:var(--text-muted)">
            Exemplo: você toca "Ver fatura" → o app pede os dados ao backend → o backend busca no banco → devolve a fatura em JSON.
          </p>
        </div>
      </section>

      <section>
        <h2>API — a "porta de entrada" do backend</h2>
        <p>
          <strong>API</strong> (Application Programming Interface) é o conjunto de
          regras e caminhos que o backend expõe para ser consumido. Pense como o
          <em>cardápio</em> de um restaurante: o frontend escolhe o que pedir,
          e o backend prepara e entrega.
        </p>

        <h3>O que é um Endpoint?</h3>
        <p>
          Um <strong>endpoint</strong> é um endereço específico da API — uma URL
          combinada com um método HTTP. Cada endpoint faz uma coisa:
        </p>

        <pre><code>GET    /usuarios          → lista usuários
GET    /usuarios/42       → busca o usuário de id 42
POST   /usuarios          → cria um novo usuário
PUT    /usuarios/42       → atualiza o usuário 42
DELETE /usuarios/42       → remove o usuário 42</code></pre>

        <p>
          A URL completa fica algo como:
          <code>https://api.exemplo.com/usuarios</code>
        </p>

        <h3>Métodos HTTP (verbos)</h3>
        <ul>
          <li><strong>GET</strong> — buscar/ler dados (não altera nada)</li>
          <li><strong>POST</strong> — criar algo novo</li>
          <li><strong>PUT / PATCH</strong> — atualizar algo existente</li>
          <li><strong>DELETE</strong> — remover algo</li>
        </ul>

        <div class="callout callout-info">
          <strong>Analogia rápida</strong>
          <p>Endpoint = endereço + ação. <code>GET /faturas</code> é "me dê a lista de faturas". <code>POST /login</code> é "tente autenticar com estes dados".</p>
        </div>
      </section>

      <section>
        <h2>O que é JSON?</h2>
        <p>
          <strong>JSON</strong> (JavaScript Object Notation) é o formato mais usado
          para trocar dados entre frontend e backend. É texto legível, parecido com
          objetos do JavaScript.
        </p>

        <pre><code>{
  "id": 42,
  "nome": "Murilo",
  "email": "murilo@email.com",
  "ativo": true,
  "planos": ["internet", "tv"]
}</code></pre>

        <p>Regras básicas do JSON:</p>
        <ul>
          <li>Chaves sempre entre aspas duplas: <code>"nome"</code></li>
          <li>Texto entre aspas duplas: <code>"Murilo"</code></li>
          <li>Números sem aspas: <code>42</code></li>
          <li>Booleanos: <code>true</code> ou <code>false</code></li>
          <li>Listas com colchetes: <code>[ ]</code></li>
          <li>Objetos com chaves: <code>{ }</code></li>
        </ul>

        <h3>Request vs Response</h3>
        <p>Em toda chamada à API existem duas partes:</p>
        <ul>
          <li><strong>Request (requisição)</strong> — o que o frontend envia (URL, método, headers, body em JSON)</li>
          <li><strong>Response (resposta)</strong> — o que o backend devolve (status code + body em JSON)</li>
        </ul>

        <pre><code>// Exemplo de resposta de sucesso
HTTP 200 OK
{
  "sucesso": true,
  "mensagem": "Login realizado",
  "token": "abc123..."
}

// Exemplo de erro
HTTP 404 Not Found
{
  "sucesso": false,
  "mensagem": "Usuário não encontrado"
}</code></pre>

        <h3>Códigos de status HTTP (os mais comuns)</h3>
        <ul>
          <li><strong>200</strong> — deu certo</li>
          <li><strong>201</strong> — criado com sucesso</li>
          <li><strong>400</strong> — dados inválidos enviados pelo cliente</li>
          <li><strong>401</strong> — não autenticado (precisa fazer login)</li>
          <li><strong>403</strong> — sem permissão</li>
          <li><strong>404</strong> — recurso não encontrado</li>
          <li><strong>500</strong> — erro interno no servidor</li>
        </ul>
      </section>

      <section>
        <h2>Por que Node.js?</h2>
        <p>
          <strong>Node.js</strong> permite escrever backend usando JavaScript — a mesma
          linguagem usada em muitos frontends. Isso facilita a transição e é muito
          usado no mercado (startups, fintechs, apps mobile com React Native, etc.).
        </p>
        <ul>
          <li>Rápido para prototipar APIs</li>
          <li>Ecossistema enorme (npm — repositório de pacotes)</li>
          <li>Ótimo para APIs REST e tempo real (WebSockets)</li>
          <li>Muitas vagas no mercado brasileiro</li>
        </ul>
      </section>

      <section>
        <h2>Ferramentas que vamos usar</h2>
        <div class="card-grid">
          <div class="card">
            <div class="card-icon">🟢</div>
            <h4>Node.js</h4>
            <p>Runtime que executa JavaScript fora do navegador. É o motor do nosso backend.</p>
          </div>
          <div class="card">
            <div class="card-icon">📦</div>
            <h4>npm</h4>
            <p>Gerenciador de pacotes. Instala bibliotecas como Express, validadores, etc.</p>
          </div>
          <div class="card">
            <div class="card-icon">💻</div>
            <h4>VS Code / Cursor</h4>
            <p>Editor de código onde escrevemos e debugamos o projeto.</p>
          </div>
          <div class="card">
            <div class="card-icon">🌐</div>
            <h4>Postman ou Insomnia</h4>
            <p>Testam endpoints manualmente, sem precisar de um app pronto.</p>
          </div>
          <div class="card">
            <div class="card-icon">⌨️</div>
            <h4>Terminal</h4>
            <p>Roda comandos: <code>node</code>, <code>npm install</code>, <code>npm run dev</code>.</p>
          </div>
          <div class="card">
            <div class="card-icon">🔧</div>
            <h4>Git</h4>
            <p>Controle de versão — salva histórico do código e facilita trabalho em equipe.</p>
          </div>
        </div>

        <div class="callout callout-warn">
          <strong>Para instalar antes da próxima aula</strong>
          <p>Node.js LTS (site oficial), VS Code ou Cursor, e Postman ou Insomnia. Na próxima aula já vamos criar o primeiro "Hello World" em Node.</p>
        </div>
      </section>

      <section>
        <h2>Checklist do dia</h2>
        <ul class="checklist">
          <li><input type="checkbox" id="c1" /><label for="c1">Consigo explicar a diferença entre frontend e backend</label></li>
          <li><input type="checkbox" id="c2" /><label for="c2">Sei o que é um endpoint e os métodos GET e POST</label></li>
          <li><input type="checkbox" id="c3" /><label for="c3">Entendo o que é JSON e já li um exemplo</label></li>
          <li><input type="checkbox" id="c3b" /><label for="c3b">Entendo o diagrama Git: local, staging, commit e push para o GitHub</label></li>
          <li><input type="checkbox" id="c4" /><label for="c4">Instalei Node.js e testei <code>node -v</code> no terminal</label></li>
          <li><input type="checkbox" id="c5" /><label for="c5">Instalei Postman ou Insomnia</label></li>
          <li><input type="checkbox" id="c6" /><label for="c6">Assisti ou li pelo menos 1 material da lista abaixo</label></li>
          <li><input type="checkbox" id="c7" /><label for="c7">Completei a seção <strong>Mão na Massa</strong> e subi o projeto no GitHub</label></li>
        </ul>
      </section>

      <section>
        <h2>Materiais para estudar hoje</h2>
        <p>Use estes links para reforçar o que vimos na aula. Priorize vídeos curtos e documentação oficial.</p>

        <ul class="resource-list">
          <li>
            <span class="resource-tag">Vídeo · PT-BR</span>
            <strong>O que é Backend? — Curso em Vídeo (Gustavo Guanabara)</strong>
            <p>Introdução clara e em português sobre backend e frontend.</p>
            <a href="https://www.youtube.com/watch?v=Ukg_U3CnJWI" target="_blank" rel="noopener">Assistir no YouTube →</a>
          </li>
          <li>
            <span class="resource-tag">Vídeo · PT-BR</span>
            <strong>APIs REST em 6 minutos — Código Fonte TV</strong>
            <p>Explicação rápida de API REST, endpoints e métodos HTTP.</p>
            <a href="https://www.youtube.com/watch?v=SBmSRk3nsPE" target="_blank" rel="noopener">Assistir no YouTube →</a>
          </li>
          <li>
            <span class="resource-tag">Documentação</span>
            <strong>MDN — O que é uma API?</strong>
            <p>Referência confiável, em português, sobre APIs web.</p>
            <a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" target="_blank" rel="noopener">Abrir MDN →</a>
          </li>
          <li>
            <span class="resource-tag">Documentação</span>
            <strong>MDN — Trabalhando com JSON</strong>
            <p>Como JSON funciona, com exemplos práticos.</p>
            <a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON" target="_blank" rel="noopener">Abrir MDN →</a>
          </li>
          <li>
            <span class="resource-tag">Documentação</span>
            <strong>MDN — Códigos de status HTTP</strong>
            <p>Lista completa dos status codes e quando cada um aparece.</p>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status" target="_blank" rel="noopener">Abrir MDN →</a>
          </li>
          <li>
            <span class="resource-tag">Curso · PT-BR</span>
            <strong>Rocketseat — Discover (trilha gratuita)</strong>
            <p>Trilha introdutória com Node.js, boa para continuidade do curso.</p>
            <a href="https://www.rocketseat.com.br/discover" target="_blank" rel="noopener">Acessar Rocketseat →</a>
          </li>
          <li>
            <span class="resource-tag">Curso · EN (legendas)</span>
            <strong>freeCodeCamp — Backend Development and APIs</strong>
            <p>Curso completo e gratuito focado em APIs com Node.js.</p>
            <a href="https://www.freecodecamp.org/learn/back-end-development-and-apis/" target="_blank" rel="noopener">Acessar freeCodeCamp →</a>
          </li>
          <li>
            <span class="resource-tag">Curso · PT-BR</span>
            <strong>Node.js — Documentação oficial</strong>
            <p>Guia "Getting Started" para instalar e entender o runtime.</p>
            <a href="https://nodejs.org/pt/learn/getting-started/introduction-to-nodejs" target="_blank" rel="noopener">Abrir nodejs.org →</a>
          </li>
          <li>
            <span class="resource-tag">Ferramenta</span>
            <strong>Postman Learning Center</strong>
            <p>Tutoriais oficiais para testar APIs (útil quando formos usar Postman).</p>
            <a href="https://learning.postman.com/docs/introduction/overview/" target="_blank" rel="noopener">Abrir Postman Learning →</a>
          </li>
          <li>
            <span class="resource-tag">Prática</span>
            <strong>JSON Formatter & Validator</strong>
            <p>Cole um JSON e veja se está válido — bom para treinar leitura.</p>
            <a href="https://jsonformatter.org/" target="_blank" rel="noopener">Abrir JSON Formatter →</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>O que é Git?</h2>
        <p>
          <strong>Git</strong> é um sistema de controle de versão: ele guarda o histórico
          de cada alteração no código, permite voltar no tempo e sincronizar seu trabalho
          com outras pessoas (ou com outro computador) via um repositório na nuvem.
        </p>

        <div class="callout callout-info">
          <strong>Git vs GitHub</strong>
          <p><strong>Git</strong> é a ferramenta no seu computador (terminal). <strong>GitHub</strong> é o site que hospeda o repositório remoto — como um “Google Drive” do código, com histórico completo.</p>
        </div>

        <h3>Como funciona: local ↔ remoto</h3>
        <p>No seu computador existem três “camadas”. Na nuvem, o GitHub guarda a cópia remota. Os comandos movem o código entre essas áreas:</p>

        <div class="git-diagram">
          <div class="git-side git-local">
            <div class="git-side-title">💻 Repositório local <span>seu computador</span></div>

            <div class="git-layer git-layer-working">
              <div class="git-layer-name">Working Directory</div>
              <div class="git-layer-desc">Arquivos que você edita (<code>index.html</code>, <code>server.js</code>…)</div>
              <div class="git-files">
                <span class="git-file modified">index.html</span>
                <span class="git-file">styles.css</span>
                <span class="git-file new">server.js</span>
              </div>
            </div>

            <div class="git-arrow-down">
              <span class="git-cmd-label">git add .</span>
              <span class="git-arrow-icon">↓</span>
              <span class="git-cmd-hint">prepara alterações</span>
            </div>

            <div class="git-layer git-layer-staging">
              <div class="git-layer-name">Staging Area</div>
              <div class="git-layer-desc">Arquivos prontos para virar commit</div>
              <div class="git-files">
                <span class="git-file staged">index.html</span>
                <span class="git-file staged">server.js</span>
              </div>
            </div>

            <div class="git-arrow-down">
              <span class="git-cmd-label">git commit -m "..."</span>
              <span class="git-arrow-icon">↓</span>
              <span class="git-cmd-hint">salva uma versão</span>
            </div>

            <div class="git-layer git-layer-history">
              <div class="git-layer-name">Histórico local (.git)</div>
              <div class="git-commits">
                <div class="git-commit"><span class="git-commit-dot"></span><code>a1b2c3d</code> Aula 01: intro</div>
                <div class="git-commit"><span class="git-commit-dot"></span><code>d4e5f6g</code> Aula 02: hello world</div>
                <div class="git-commit current"><span class="git-commit-dot"></span><code>h7i8j9k</code> Aula 03: express <em>← HEAD</em></div>
              </div>
            </div>
          </div>

          <div class="git-sync">
            <div class="git-sync-cmd push">
              <span class="git-sync-arrow">→</span>
              <code>git push</code>
              <small>envia commits</small>
            </div>
            <div class="git-sync-line"></div>
            <div class="git-sync-cmd pull">
              <span class="git-sync-arrow">←</span>
              <code>git pull</code>
              <small>baixa atualizações</small>
            </div>
            <div class="git-sync-cmd clone">
              <span class="git-sync-arrow">⇣</span>
              <code>git clone</code>
              <small>1ª cópia do remoto</small>
            </div>
          </div>

          <div class="git-side git-remote">
            <div class="git-side-title">☁️ Repositório remoto <span>GitHub</span></div>

            <div class="git-layer git-layer-remote">
              <div class="git-layer-name">origin / main</div>
              <div class="git-layer-desc">github.com/você/curso-backend-node</div>
              <div class="git-commits">
                <div class="git-commit synced"><span class="git-commit-dot remote"></span><code>a1b2c3d</code> Aula 01: intro</div>
                <div class="git-commit synced"><span class="git-commit-dot remote"></span><code>d4e5f6g</code> Aula 02: hello world</div>
                <div class="git-commit synced current"><span class="git-commit-dot remote"></span><code>h7i8j9k</code> Aula 03: express</div>
              </div>
            </div>

            <div class="git-remote-note">
              Depois do <code>git remote add origin URL</code>, seu local sabe para onde enviar o código.
            </div>
          </div>
        </div>

        <h3>Comandos no dia a day — o que cada um faz</h3>
        <div class="git-commands-grid">
          <div class="git-command-card">
            <code>git init</code>
            <p>Cria o repositório Git na pasta. Primeiro passo — liga o “gravador de histórico”.</p>
            <div class="git-command-visual">📁 pasta → 📁 + <span class="git-dot-small"></span> .git</div>
          </div>
          <div class="git-command-card">
            <code>git status</code>
            <p>Mostra o que mudou: arquivos novos, modificados ou prontos para commit.</p>
            <div class="git-command-visual">🔍 "2 arquivos modificados, 1 untracked"</div>
          </div>
          <div class="git-command-card">
            <code>git add .</code>
            <p>Envia todas as alterações da pasta para a staging area.</p>
            <div class="git-command-visual">working <span class="git-mini-arrow">→</span> staging</div>
          </div>
          <div class="git-command-card">
            <code>git commit -m ""</code>
            <p>Grava uma “foto” permanente do código com uma mensagem descritiva.</p>
            <div class="git-command-visual">staging <span class="git-mini-arrow">→</span> histórico ●</div>
          </div>
          <div class="git-command-card">
            <code>git push</code>
            <p>Copia seus commits locais para o GitHub. Outros passam a ver suas mudanças.</p>
            <div class="git-command-visual">local ●●● <span class="git-mini-arrow">→</span> GitHub ●●●</div>
          </div>
          <div class="git-command-card">
            <code>git pull</code>
            <p>Baixa commits do GitHub e mescla no seu código local. Use antes de começar a trabalhar.</p>
            <div class="git-command-visual">GitHub ●●● <span class="git-mini-arrow">→</span> local ●●●</div>
          </div>
        </div>

        <h3>Fluxo que usaremos em cada aula</h3>
        <div class="diagram">
          <div class="flow git-flow">
            <div class="flow-box">Editar código</div>
            <span class="flow-arrow">→</span>
            <div class="flow-box"><code>git add .</code></div>
            <span class="flow-arrow">→</span>
            <div class="flow-box"><code>git commit</code></div>
            <span class="flow-arrow">→</span>
            <div class="flow-box"><code>git push</code></div>
            <span class="flow-arrow">→</span>
            <div class="flow-box">GitHub atualizado</div>
          </div>
        </div>

        <dl class="term-grid">
          <div class="term"><dt>Repositório (repo)</dt><dd>Pasta do projeto + histórico Git</dd></div>
          <div class="term"><dt>Commit</dt><dd>“Foto” do código em um momento</dd></div>
          <div class="term"><dt>Branch (main)</dt><dd>Linha do tempo — usamos <code>main</code> por padrão</dd></div>
          <div class="term"><dt>Remote (origin)</dt><dd>Apelido do repositório no GitHub</dd></div>
          <div class="term"><dt>Clone</dt><dd>Copiar um repo remoto para sua máquina</dd></div>
          <div class="term"><dt>HEAD</dt><dd>Ponteiro para o commit atual em que você está</dd></div>
        </dl>
      </section>

      <section class="hands-on" id="mao-na-massa">
        <div class="hands-on-header">
          <span class="hands-on-badge">🛠 Mão na Massa</span>
          <h2>Aula 01 — Git, GitHub e seu primeiro repositório</h2>
        </div>

        <p>
          A partir de agora, <strong>cada aula terá uma prática aqui no final</strong>.
          Usaremos este site como projeto vivo do curso: hoje vamos versioná-lo com Git
          e publicá-lo no GitHub. Nas próximas aulas, você continuará alterando este
          mesmo repositório.
        </p>

        <div class="callout callout-tip">
          <strong>Revise o diagrama acima</strong>
          <p>Se ainda não ficou claro, volte na seção <strong>O que é Git?</strong> e acompanhe o desenho local ↔ remoto enquanto executa os comandos abaixo.</p>
        </div>

        <h3>Pré-requisitos</h3>
        <ul>
          <li>Conta no <a href="https://github.com/signup" target="_blank" rel="noopener">GitHub</a></li>
          <li>Git instalado — teste no terminal: <code>git --version</code></li>
          <li>Esta pasta do curso no seu computador (ex.: <code>Curso_node</code>)</li>
        </ul>

        <p>Se o Git não estiver instalado:</p>
        <ul>
          <li><strong>macOS:</strong> <code>xcode-select --install</code> ou baixe em <a href="https://git-scm.com/downloads" target="_blank" rel="noopener">git-scm.com</a></li>
          <li><strong>Windows:</strong> <a href="https://git-scm.com/downloads" target="_blank" rel="noopener">git-scm.com</a> (use Git Bash ou terminal do VS Code)</li>
        </ul>

        <h3>Passo a passo</h3>
        <ol class="steps">
          <li>
            <strong>Criar o repositório no GitHub</strong>
            <p>Acesse <a href="https://github.com/new" target="_blank" rel="noopener">github.com/new</a> e preencha:</p>
            <ul>
              <li><strong>Repository name:</strong> <code>curso-backend-node</code> (ou outro nome)</li>
              <li><strong>Description:</strong> Material e exercícios do curso de Backend com Node.js</li>
              <li><strong>Public</strong> ou Private — como preferir</li>
              <li><strong>Não</strong> marque “Add a README” (já temos arquivos locais)</li>
            </ul>
            <p>Clique em <strong>Create repository</strong> e deixe a página aberta — vamos usar a URL dela.</p>
          </li>
          <li>
            <strong>Abrir o terminal na pasta do projeto</strong>
            <p>No VS Code/Cursor: <em>Terminal → New Terminal</em>. Confirme que está na pasta certa:</p>
            <pre><code>cd ~/Documents/Murilo/Curso_node   # ajuste o caminho se necessário
ls                                 # deve listar index.html, css/, js/</code></pre>
          </li>
          <li>
            <strong>Inicializar o Git e fazer o primeiro commit</strong>
            <pre><code>git init
git add .
git status                         # arquivos em verde = prontos para commit
git commit -m "Aula 01: site do curso com introdução ao backend"</code></pre>
            <p>O <code>git add .</code> inclui todos os arquivos da pasta (o <code>.gitignore</code> já evita lixo como <code>.DS_Store</code>).</p>
          </li>
          <li>
            <strong>Configurar nome e e-mail (só na primeira vez)</strong>
            <pre><code>git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"</code></pre>
            <p>Use o mesmo e-mail da conta GitHub.</p>
          </li>
          <li>
            <strong>Conectar ao GitHub e enviar o código</strong>
            <p>Substitua <code>SEU-USUARIO</code> pelo seu usuário do GitHub:</p>
            <pre><code>git branch -M main
git remote add origin https://github.com/SEU-USUARIO/curso-backend-node.git
git push -u origin main</code></pre>
            <p>O GitHub pode pedir login. Se usar autenticação, prefira <strong>Personal Access Token</strong> em vez de senha — veja: <a href="https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noopener">criar token no GitHub</a>.</p>
          </li>
          <li>
            <strong>Conferir no navegador</strong>
            <p>Atualize a página do repositório no GitHub. Você deve ver:</p>
            <ul>
              <li><code>index.html</code>, pasta <code>css/</code>, pasta <code>js/</code></li>
              <li>Mensagem do commit: “Aula 01: site do curso…”</li>
            </ul>
            <p>Parabéns — seu primeiro repositório está no ar!</p>
          </li>
        </ol>

        <h3>Comandos que você usou hoje</h3>
        <pre><code>git init          → transforma a pasta em repositório Git
git add .         → prepara arquivos para commit
git commit -m ""  → salva uma versão com mensagem
git remote add    → aponta para o repo no GitHub
git push          → envia commits para a nuvem</code></pre>

        <h3>Como será nas próximas aulas</h3>
        <p>Sempre que alterarmos este site (novas aulas, exemplos de código), o fluxo será:</p>
        <pre><code>git add .
git commit -m "Aula 02: descreva o que mudou"
git push</code></pre>

        <div class="callout callout-tip">
          <strong>Dica do professor</strong>
          <p>Commits com mensagens claras contam a história do seu aprendizado. Ex.: “Aula 03: adiciona rotas Express” é melhor que “update”.</p>
        </div>

        <h3>Checklist da prática</h3>
        <ul class="checklist">
          <li><input type="checkbox" id="p1" /><label for="p1"><code>git --version</code> funcionou no terminal</label></li>
          <li><input type="checkbox" id="p2" /><label for="p2">Repositório criado no GitHub (vazio, sem README automático)</label></li>
          <li><input type="checkbox" id="p3" /><label for="p3"><code>git init</code> + <code>git add .</code> + primeiro <code>commit</code> feitos</label></li>
          <li><input type="checkbox" id="p4" /><label for="p4"><code>git push</code> concluído sem erro</label></li>
          <li><input type="checkbox" id="p5" /><label for="p5">Arquivos do curso visíveis na página do GitHub</label></li>
        </ul>

        <h3>Material extra — Git</h3>
        <ul class="resource-list">
          <li>
            <span class="resource-tag">Vídeo · PT-BR</span>
            <strong>Git e GitHub para iniciantes — Curso em Vídeo</strong>
            <p>Playlist completa do Gustavo Guanabara sobre Git.</p>
            <a href="https://www.youtube.com/playlist?list=PLHz_ArkHmC4dmHyFiF5g7TlYJLa_hA6-m" target="_blank" rel="noopener">Assistir playlist →</a>
          </li>
          <li>
            <span class="resource-tag">Documentação</span>
            <strong>GitHub Docs — Início rápido</strong>
            <p>Guia oficial para criar repo e fazer push.</p>
            <a href="https://docs.github.com/pt/get-started/quickstart/create-a-repo" target="_blank" rel="noopener">Abrir documentação →</a>
          </li>
          <li>
            <span class="resource-tag">Referência</span>
            <strong>Git Cheat Sheet</strong>
            <p>Cola de comandos Git mais usados no dia a day.</p>
            <a href="https://education.github.com/git-cheat-sheet-education.pdf" target="_blank" rel="noopener">Baixar PDF →</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Próxima aula</h2>
        <p>
          Vamos instalar o ambiente Node.js, criar o primeiro servidor e fazer
          um endpoint <code>Hello World</code> — e registrar tudo com um novo commit no mesmo repositório!
        </p>
      </section>
    `,
  },
  {
    id: "02-ambiente",
    number: "02",
    module: "Fundamentos",
    title: "Ambiente e primeiro servidor",
    subtitle: "Node, npm e Hello World",
    comingSoon: true,
    content: "",
  },
  {
    id: "03-express",
    number: "03",
    module: "Fundamentos",
    title: "Express.js e rotas",
    subtitle: "Criando endpoints de verdade",
    comingSoon: true,
    content: "",
  },
  {
    id: "04-middleware",
    number: "04",
    module: "Fundamentos",
    title: "Middleware e validação",
    subtitle: "Processando requisições",
    comingSoon: true,
    content: "",
  },
  {
    id: "05-ia-desenvolvimento",
    number: "05",
    module: "IA & Prática",
    title: "IA no desenvolvimento",
    subtitle: "Conceitos, ferramentas e nova arquitetura",
    comingSoon: false,
    content: `
      <section>
        <p class="lead">
          A partir desta aula, o curso muda de marcha: <strong>IA deixa de ser “extra”
          e vira parte do fluxo normal</strong> de quem desenvolve backend. Hoje você
          entende os conceitos — agents, skills, MCPs — e usa IA para refatorar
          este projeto em uma API Node.js com frontend separado.
        </p>

        <div class="callout callout-tip">
          <strong>Objetivo da aula de hoje</strong>
          <p>Entender como IA acelera o desenvolvimento com responsabilidade, e transformar o site estático do curso em <strong>backend + frontend</strong> consumindo uma API REST. <a href="#mao-na-massa">Ir para Mão na Massa ↓</a></p>
        </div>
      </section>

      <section>
        <h2>Por que IA agora é o “normal”?</h2>
        <p>
          Desenvolvedores passaram a usar IA como parceiro diário: gerar boilerplate,
          explicar erros, revisar código, criar testes e explorar APIs desconhecidas.
          Isso <em>não substitui</em> entender backend — amplifica quem já sabe o básico
          (HTTP, JSON, endpoints) e quer ir mais rápido com qualidade.
        </p>

        <div class="card-grid">
          <div class="card">
            <div class="card-icon">⚡</div>
            <h4>Velocidade</h4>
            <p>Menos tempo em código repetitivo; mais tempo em regra de negócio e arquitetura.</p>
          </div>
          <div class="card">
            <div class="card-icon">🔍</div>
            <h4>Aprendizado</h4>
            <p>Pede explicações, compare respostas, peça exemplos menores antes de integrar.</p>
          </div>
          <div class="card">
            <div class="card-icon">⚠️</div>
            <h4>Responsabilidade</h4>
            <p>Todo código gerado precisa ser lido, testado e entendido — você assina o commit.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Conceitos essenciais</h2>

        <h3>LLM (Large Language Model)</h3>
        <p>
          Modelo de linguagem treinado em texto/code (GPT, Claude, Gemini…). Recebe
          um <strong>prompt</strong> (instrução + contexto) e devolve texto — muitas vezes código.
          No dev, usamos via chat (Cursor, ChatGPT) ou API.
        </p>

        <h3>Prompt e contexto</h3>
        <p>
          <strong>Prompt</strong> = o que você pede. <strong>Contexto</strong> = arquivos abertos,
          estrutura do projeto, erros do terminal. Quanto mais claro o pedido, melhor o resultado.
        </p>

        <pre><code>❌ Ruim:  "faz uma API"
✅ Bom:   "Crie um servidor Express na pasta backend/ com GET /api/lessons
          que retorna o array de aulas em JSON. Use porta 3001 e CORS liberado
          para localhost. Não altere o frontend ainda."</code></pre>

        <h3>Agent (agente)</h3>
        <p>
          Um <strong>agent</strong> é a IA com autonomia para <em>agir</em>: ler arquivos,
          editar código, rodar comandos no terminal e iterar até concluir a tarefa.
          No Cursor, o modo Agent é isso — diferente de só “responder no chat”.
        </p>

        <ul>
          <li><strong>Chat</strong> — pergunta/resposta, você copia e aplica</li>
          <li><strong>Agent</strong> — delega a tarefa; a IA executa passos no projeto</li>
        </ul>

        <h3>Skills</h3>
        <p>
          <strong>Skills</strong> são instruções persistentes que guiam a IA em tarefas
          específicas (ex.: “como rodar ESLint neste monorepo”, “padrão de commit”).
          Funcionam como receitas: quando a skill é relevante, o agent segue aquelas regras.
        </p>

        <div class="callout callout-info">
          <strong>Analogia</strong>
          <p>Agent = estagiário autônomo. Skill = manual interno da empresa. MCP = ferramentas conectadas (Jira, banco, APIs externas).</p>
        </div>

        <h3>MCP (Model Context Protocol)</h3>
        <p>
          <strong>MCP</strong> padroniza como a IA se conecta a ferramentas externas:
          GitHub, Slack, Figma, banco de dados, documentação interna. Em vez de copiar
          dados manualmente para o chat, o agent <strong>consulta a ferramenta direto</strong>.
        </p>

        <pre><code>Sem MCP:  você cola o erro do Jira no chat
Com MCP:    "resume o ticket PROJ-123" → IA busca no Jira e responde</code></pre>

        <p>Exemplos úteis no dia a day de backend:</p>
        <ul>
          <li>Consultar issue / MR no GitLab ou GitHub</li>
          <li>Buscar schema ou query em documentação interna</li>
          <li>Postman/Insomnia integrado para testar endpoints</li>
        </ul>
      </section>

      <section>
        <h2>IA no fluxo de desenvolvimento backend</h2>

        <h3>Onde usar (com critério)</h3>
        <ul>
          <li><strong>Boilerplate</strong> — <code>package.json</code>, servidor Express, CORS, estrutura de pastas</li>
          <li><strong>Debug</strong> — colar stack trace e pedir causa + correção mínima</li>
          <li><strong>Testes</strong> — gerar casos a partir do endpoint e do contrato JSON</li>
          <li><strong>Refatoração</strong> — extrair rotas, separar camadas (routes → service → repository)</li>
          <li><strong>Documentação</strong> — OpenAPI/Swagger a partir das rotas existentes</li>
        </ul>

        <h3>Onde ter cuidado</h3>
        <ul>
          <li>Segredos (.env, tokens) — nunca colar em prompts públicos</li>
          <li>Código que você não leu — pode ter bugs, dependências desnecessárias ou falhas de segurança</li>
          <li>“Alucinação” — APIs ou métodos que não existem; sempre valide na documentação oficial</li>
          <li>Diff grande demais — prefira tarefas pequenas e commits incrementais</li>
        </ul>

        <div class="callout callout-warn">
          <strong>Regra de ouro do curso</strong>
          <p>IA escreve; <strong>você revisa, roda, testa e commita</strong>. Se não souber explicar o que o código faz, ainda não está pronto para merge.</p>
        </div>
      </section>

      <section>
        <h2>O que vamos construir hoje</h2>
        <p>
          Hoje o curso é um site estático: HTML + JS com as aulas em <code>lessons.js</code>.
          Na prática, vamos separar em duas aplicações — o padrão real de produto:
        </p>

        <div class="arch-grid">
          <div class="arch-box">
            <h4>🖥️ Backend (Node + Express)</h4>
            <ul>
              <li><code>GET /api/lessons</code></li>
              <li><code>GET /api/lessons/:id</code></li>
              <li>Dados em JSON</li>
              <li>Porta 3001</li>
            </ul>
          </div>
          <span class="flow-arrow">⇄ JSON / HTTP</span>
          <div class="arch-box">
            <h4>📱 Frontend (app separada)</h4>
            <ul>
              <li>HTML/CSS/JS</li>
              <li><code>fetch()</code> na API</li>
              <li>Renderiza menu e conteúdo</li>
              <li>Porta 5500 ou static</li>
            </ul>
          </div>
        </div>

        <p>
          Isso demonstra na prática o que você aprendeu na Aula 01: frontend consome
          endpoints; backend entrega JSON. A IA ajuda a fazer a migração rápido —
          mas você valida cada endpoint no Postman antes de integrar o front.
        </p>

        <h3>Estrutura alvo do repositório</h3>
        <pre><code>curso-backend-node/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── data/
│       └── lessons.json      ← conteúdo das aulas
├── frontend/
│   ├── index.html
│   ├── css/
│   └── js/
│       └── app.js            ← fetch na API
├── .gitignore
└── README.md</code></pre>
      </section>

      <section>
        <h2>Checklist do dia</h2>
        <ul class="checklist">
          <li><input type="checkbox" id="ia-c1" /><label for="ia-c1">Sei explicar diferença entre chat, agent e MCP</label></li>
          <li><input type="checkbox" id="ia-c2" /><label for="ia-c2">Entendo o que é uma Skill e quando usar prompts específicos</label></li>
          <li><input type="checkbox" id="ia-c3" /><label for="ia-c3">Testei <code>GET /api/lessons</code> no Postman ou navegador</label></li>
          <li><input type="checkbox" id="ia-c4" /><label for="ia-c4">Frontend consome a API e lista as aulas</label></li>
          <li><input type="checkbox" id="ia-c5" /><label for="ia-c5">Completei a seção <strong>Mão na Massa</strong> e fiz commit no GitHub</label></li>
        </ul>
      </section>

      <section>
        <h2>Materiais para estudar</h2>
        <ul class="resource-list">
          <li>
            <span class="resource-tag">Documentação</span>
            <strong>Cursor — Documentação oficial</strong>
            <p>Como usar Agent, regras e integrações no editor.</p>
            <a href="https://docs.cursor.com" target="_blank" rel="noopener">Abrir docs.cursor.com →</a>
          </li>
          <li>
            <span class="resource-tag">Protocolo</span>
            <strong>Model Context Protocol (MCP)</strong>
            <p>Especificação e conceito de conectar ferramentas à IA.</p>
            <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener">Abrir modelcontextprotocol.io →</a>
          </li>
          <li>
            <span class="resource-tag">Artigo</span>
            <strong>GitHub — Copilot em equipe</strong>
            <p>Boas práticas de IA assistida em código (vale para qualquer ferramenta).</p>
            <a href="https://docs.github.com/pt/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-chat-in-your-ide" target="_blank" rel="noopener">Abrir GitHub Docs →</a>
          </li>
          <li>
            <span class="resource-tag">Vídeo · PT-BR</span>
            <strong>APIs REST — consumindo com fetch</strong>
            <p>Revisão de como o frontend chama backend (MDN).</p>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noopener">MDN Using Fetch →</a>
          </li>
        </ul>
      </section>

      <section class="hands-on" id="mao-na-massa">
        <div class="hands-on-header">
          <span class="hands-on-badge">🛠 Mão na Massa</span>
          <h2>Aula 05 — Com IA: site estático → API Node + frontend consumidor</h2>
        </div>

        <p>
          Nesta prática você usa um <strong>agent de IA</strong> (Cursor, Copilot ou similar)
          para refatorar o projeto do curso. Faça em etapas — não peça tudo de uma vez.
          Revise cada diff antes de aceitar.
        </p>

        <div class="callout callout-warn">
          <strong>Antes de começar</strong>
          <p>Commits das aulas 02–04 já no GitHub (servidor básico, Express, middleware). Se estiver atrasado, dá para fazer só esta refatoração a partir do projeto atual — o backend será o foco.</p>
        </div>

        <h3>Etapa 1 — Preparar dados para a API</h3>
        <p>Peça à IA para extrair o array <code>LESSONS</code> para JSON puro, sem HTML gigante inline se possível — ou mantenha o HTML no campo <code>content</code> por enquanto.</p>

        <div class="prompt-box">
          <div class="prompt-box-header">
            <span class="prompt-label">Prompt · copie e adapte</span>
          </div>
          <pre><code>No repositório curso-backend-node, crie a pasta backend/data/ e o arquivo lessons.json
com o conteúdo do array LESSONS de js/lessons.js (id, number, module, title, subtitle,
comingSoon e content). Mantenha o JSON válido. Não apague lessons.js ainda.</code></pre>
        </div>

        <h3>Etapa 2 — Criar o servidor Express</h3>

        <div class="prompt-box">
          <div class="prompt-box-header">
            <span class="prompt-label">Prompt · backend</span>
          </div>
          <pre><code>Crie backend/package.json e backend/server.js com Express:
- GET /api/lessons → retorna todas as aulas (array JSON)
- GET /api/lessons/:id → retorna uma aula ou 404 { "error": "Aula não encontrada" }
- Leia backend/data/lessons.json
- Use cors habilitado para desenvolvimento
- Porta 3001
- Script npm "dev" com node --watch server.js
Instale dependências com npm install na pasta backend.</code></pre>
        </div>

        <p>Teste manualmente antes de seguir:</p>
        <pre><code>cd backend
npm install
npm run dev

# Em outro terminal ou no Postman:
curl http://localhost:3001/api/lessons
curl http://localhost:3001/api/lessons/01-introducao</code></pre>

        <h3>Etapa 3 — Mover frontend para pasta separada</h3>

        <div class="prompt-box">
          <div class="prompt-box-header">
            <span class="prompt-label">Prompt · frontend</span>
          </div>
          <pre><code>Reorganize o projeto:
- Mova index.html, css/ e js/app.js para frontend/
- Remova js/lessons.js do frontend (dados virão da API)
- Atualize app.js para:
  1) fetch('http://localhost:3001/api/lessons') ao carregar
  2) Montar o menu lateral com id, title, subtitle, comingSoon
  3) Ao clicar numa aula, fetch /api/lessons/:id e renderizar content no #content
  4) Tratar loading e erro (mensagem amigável se API offline)
- Mantenha o visual atual (styles.css)</code></pre>
        </div>

        <h3>Etapa 4 — Validar integração ponta a ponta</h3>
        <ol class="steps">
          <li>
            <strong>Subir o backend</strong>
            <p><code>cd backend && npm run dev</code> — deve aparecer “listening on 3001”.</p>
          </li>
          <li>
            <strong>Abrir o frontend</strong>
            <p>Live Server no VS Code, ou <code>npx serve frontend</code>. Abra o index no navegador.</p>
          </li>
          <li>
            <strong>DevTools → Network</strong>
            <p>Confirme requisições para <code>localhost:3001/api/lessons</code> com status 200 e JSON.</p>
          </li>
          <li>
            <strong>Navegar entre aulas</strong>
            <p>Menu e conteúdo devem funcionar como antes — mas agora via API.</p>
          </li>
          <li>
            <strong>Simular erro</strong>
            <p>Pare o backend e recarregue o front. A mensagem de erro deve aparecer (não tela branca).</p>
          </li>
        </ol>

        <h3>Etapa 5 — README e Git</h3>

        <div class="prompt-box">
          <div class="prompt-box-header">
            <span class="prompt-label">Prompt · documentação</span>
          </div>
          <pre><code>Crie README.md na raiz explicando:
- Estrutura backend/ e frontend/
- Como rodar backend (npm install, npm run dev)
- Como abrir frontend
- Endpoints disponíveis
- Que o curso usa IA a partir da aula 5</code></pre>
        </div>

        <pre><code>git add .
git commit -m "Aula 05: separa backend API e frontend consumidor com IA"
git push</code></pre>

        <h3>O que você aprendeu com este exercício</h3>
        <ul>
          <li>Separar responsabilidades: API vs interface</li>
          <li>Contrato JSON entre front e back (<code>/api/lessons</code>)</li>
          <li>Usar IA em tarefas incrementais com revisão humana</li>
          <li>Testar API isolada (curl/Postman) antes de integrar</li>
          <li>Base para próximas aulas: novos endpoints, auth, banco de dados</li>
        </ul>

        <div class="callout callout-tip">
          <strong>Desafio extra (opcional)</strong>
          <p>Peça à IA: “Adicione POST /api/lessons/:id/progress com body { completed: true } em memória”. Você terá criado seu primeiro endpoint de escrita — tema da Aula 06.</p>
        </div>

        <h3>Checklist da prática</h3>
        <ul class="checklist">
          <li><input type="checkbox" id="ia-p1" /><label for="ia-p1"><code>backend/data/lessons.json</code> criado</label></li>
          <li><input type="checkbox" id="ia-p2" /><label for="ia-p2">Express responde <code>GET /api/lessons</code> e <code>GET /api/lessons/:id</code></label></li>
          <li><input type="checkbox" id="ia-p3" /><label for="ia-p3">Frontend em <code>frontend/</code> consome a API com <code>fetch</code></label></li>
          <li><input type="checkbox" id="ia-p4" /><label for="ia-p4">Testei com backend ligado e desligado</label></li>
          <li><input type="checkbox" id="ia-p5" /><label for="ia-p5">README + commit + push no GitHub</label></li>
        </ul>
      </section>

      <section>
        <h2>Próxima aula</h2>
        <p>
          Com backend e frontend separados, seguimos evoluindo a API — persistência
          com banco de dados, novos endpoints e uso contínuo de IA no fluxo de desenvolvimento.
        </p>
      </section>
    `,
  },
  {
    id: "06-banco-dados",
    number: "06",
    module: "Persistência",
    title: "Banco de dados",
    subtitle: "Salvando e buscando dados",
    comingSoon: true,
    content: "",
  },
];
