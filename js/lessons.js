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
    comingSoon: false,
    content: `
      <section>
        <p class="lead">
          Na Aula 01 você entendeu o que é backend, API e JSON — e publicou o site do curso
          no GitHub. Agora vamos <strong>preparar o ambiente</strong>, entender o que é o
          <strong>Node.js</strong>, o <strong>npm</strong>, o <code>package.json</code>… e
          rodar seu <strong>primeiro servidor HTTP</strong> respondendo <code>Hello World</code>.
        </p>

        <div class="callout callout-tip">
          <strong>Objetivo da aula de hoje</strong>
          <p>Sair da aula com Node instalado, sabendo criar um projeto com <code>npm init</code>, rodar scripts com <code>npm run</code>, e com um servidor Node respondendo no navegador — tudo versionado num commit novo. <a href="#mao-na-massa">Ir para Mão na Massa ↓</a></p>
        </div>
      </section>

      <section>
        <h2>Recapitulando: onde estamos</h2>
        <p>
          Antes de escrever código, lembre onde o Node se encaixa no diagrama que
          vimos na aula passada:
        </p>

        <div class="diagram">
          <div class="flow">
            <div class="flow-box">📱 Frontend<br><small>(navegador)</small></div>
            <span class="flow-arrow">→</span>
            <div class="flow-box">🌐 HTTP<br><small>request</small></div>
            <span class="flow-arrow">→</span>
            <div class="flow-box">🖥️ Node.js<br><small>seu código</small></div>
            <span class="flow-arrow">→</span>
            <div class="flow-box">📦 Resposta<br><small>JSON / texto</small></div>
          </div>
          <p style="margin-top:1rem;font-size:0.85rem;color:var(--text-muted)">
            Hoje você vai construir o quadradinho “Node.js” pela primeira vez.
          </p>
        </div>
      </section>

      <section>
        <h2>O que é o Node.js (de novo, com mais detalhe)</h2>
        <p>
          <strong>Node.js</strong> é um <em>runtime</em>: um programa que executa código
          JavaScript <strong>fora do navegador</strong>. Até então, JS só rodava dentro do
          Chrome, Firefox, etc. Com Node, você pode:
        </p>
        <ul>
          <li>Rodar arquivos <code>.js</code> pelo terminal: <code>node app.js</code></li>
          <li>Criar servidores HTTP, ler/escrever arquivos, acessar banco de dados</li>
          <li>Instalar bibliotecas do <strong>npm</strong> (Express, dotenv, etc.)</li>
        </ul>

        <div class="callout callout-info">
          <strong>Analogia</strong>
          <p>Se o navegador é o “ambiente do frontend”, o Node é o “ambiente do backend”. Mesma linguagem (JavaScript), lugar diferente.</p>
        </div>

        <h3>Versões: LTS vs Current</h3>
        <ul>
          <li><strong>LTS (Long Term Support)</strong> — estável, recomendada para produção e para este curso.</li>
          <li><strong>Current</strong> — última versão, com novidades ainda sendo testadas.</li>
        </ul>
        <p>Sempre que a documentação disser “instale a LTS”, é essa versão que queremos.</p>
      </section>

      <section>
        <h2>Instalando o Node.js</h2>
        <p>
          Existem várias formas de instalar. Escolha <strong>uma</strong> das opções abaixo:
        </p>

        <div class="card-grid">
          <div class="card">
            <div class="card-icon">🟢</div>
            <h4>Site oficial (mais simples)</h4>
            <p>Baixa um instalador clicável para macOS ou Windows.</p>
            <p><a href="https://nodejs.org/pt" target="_blank" rel="noopener">nodejs.org/pt</a> → botão <strong>LTS</strong>.</p>
          </div>
          <div class="card">
            <div class="card-icon">🍺</div>
            <h4>Homebrew (macOS)</h4>
            <p>Se já usa Homebrew, dá um comando só:</p>
            <pre><code>brew install node</code></pre>
          </div>
          <div class="card">
            <div class="card-icon">🔁</div>
            <h4>nvm (avançado)</h4>
            <p>Gerenciador de versões — troca entre Node 18, 20, 22 etc.</p>
            <p><a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener">github.com/nvm-sh/nvm</a></p>
          </div>
        </div>

        <div class="callout callout-tip">
          <strong>Sugestão para o Murilo</strong>
          <p>Comece pelo site oficial (opção mais simples). No futuro, quando trabalhar com vários projetos, o <code>nvm</code> ajuda a trocar de versão sem reinstalar.</p>
        </div>

        <h3>Verificando a instalação</h3>
        <p>Abra o terminal (Terminal do macOS, ou terminal integrado do VS Code / Cursor) e digite:</p>

        <pre><code>node -v      # deve mostrar algo como v20.11.0
npm -v       # deve mostrar algo como 10.2.4</code></pre>

        <p>Se aparecer <em>“command not found”</em>, feche e abra o terminal de novo. Se persistir, reinstale ou peça ajuda ao professor.</p>
      </section>

      <section>
        <h2>Node como “calculadora de JavaScript” (REPL)</h2>
        <p>
          Rode só <code>node</code> no terminal, sem nome de arquivo. Você entra num modo
          interativo chamado <strong>REPL</strong> (Read → Eval → Print → Loop). É como o
          Console do navegador:
        </p>

        <pre><code>$ node
Welcome to Node.js v20.11.0.
> 2 + 3
5
> const nome = "Murilo"
undefined
> \`Olá, \${nome}!\`
'Olá, Murilo!'
> .exit</code></pre>

        <p>Bom para testar snippets pequenos. Para projetos, usamos arquivos <code>.js</code>.</p>

        <h3>Rodando seu primeiro arquivo Node</h3>
        <p>Crie um arquivo <code>ola.js</code> em qualquer pasta com:</p>

        <pre><code>// ola.js
console.log("Olá do Node.js!");
console.log("Versão:", process.version);</code></pre>

        <p>No terminal, na mesma pasta:</p>
        <pre><code>node ola.js</code></pre>

        <p>Você deve ver as duas linhas impressas. Parabéns — você acabou de executar JavaScript fora do navegador.</p>
      </section>

      <section>
        <h2>O que é o npm?</h2>
        <p>
          <strong>npm</strong> (Node Package Manager) já vem junto quando você instala Node.
          Ele faz três coisas principais:
        </p>

        <div class="card-grid">
          <div class="card">
            <div class="card-icon">📦</div>
            <h4>Instalar pacotes</h4>
            <p>Bibliotecas prontas (Express, dotenv, axios…) publicadas em <a href="https://www.npmjs.com" target="_blank" rel="noopener">npmjs.com</a>.</p>
          </div>
          <div class="card">
            <div class="card-icon">📝</div>
            <h4>Gerenciar o projeto</h4>
            <p>Guarda no <code>package.json</code> quais pacotes o projeto usa e em quais versões.</p>
          </div>
          <div class="card">
            <div class="card-icon">▶️</div>
            <h4>Rodar scripts</h4>
            <p>Comandos rápidos: <code>npm run dev</code>, <code>npm start</code>, <code>npm test</code>.</p>
          </div>
        </div>

        <h3>package.json — o “RG” do projeto</h3>
        <p>
          Todo projeto Node tem um <code>package.json</code> na raiz. Ele descreve o
          projeto: nome, versão, autor, dependências e scripts. Sem ele, o projeto
          não é considerado um “projeto npm”.
        </p>

        <pre><code>{
  "name": "hello-node",
  "version": "1.0.0",
  "description": "Meu primeiro projeto Node",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "author": "Murilo",
  "license": "ISC",
  "dependencies": {}
}</code></pre>

        <p>Repare em <strong>scripts</strong>: <code>npm run dev</code> executa o comando à direita. Muito mais fácil que digitar tudo toda vez.</p>

        <div class="callout callout-info">
          <strong>node_modules e package-lock.json</strong>
          <p>Quando você instala um pacote, o npm cria a pasta <code>node_modules/</code> (com o código dos pacotes) e o arquivo <code>package-lock.json</code> (com as versões exatas). <strong>Não versione</strong> <code>node_modules</code> — adicione ao <code>.gitignore</code>.</p>
        </div>

        <h3>Comandos npm que você vai usar sempre</h3>
        <pre><code>npm init -y                    # cria package.json com opções padrão
npm install &lt;pacote&gt;           # instala um pacote (grava em dependencies)
npm install -D &lt;pacote&gt;         # instala como devDependency (só desenvolvimento)
npm install                    # reinstala tudo listado no package.json
npm run &lt;script&gt;                # roda um script definido em "scripts"
npm start                      # atalho para "npm run start"</code></pre>
      </section>

      <section>
        <h2>Módulos: dividindo o código em arquivos</h2>
        <p>
          No Node, cada arquivo é um <strong>módulo</strong>. Para reaproveitar código,
          você exporta de um lado e importa do outro. Há dois sistemas:
        </p>

        <h3>CommonJS (padrão histórico)</h3>
        <pre><code>// somar.js
function somar(a, b) {
  return a + b;
}
module.exports = somar;

// app.js
const somar = require("./somar");
console.log(somar(2, 3));  // 5</code></pre>

        <h3>ES Modules (moderno)</h3>
        <pre><code>// somar.js
export function somar(a, b) {
  return a + b;
}

// app.js
import { somar } from "./somar.js";
console.log(somar(2, 3));  // 5</code></pre>

        <p>Para usar ES Modules, adicione <code>"type": "module"</code> no <code>package.json</code>.</p>

        <div class="callout callout-tip">
          <strong>No curso vamos usar ES Modules</strong>
          <p>É o padrão moderno, igual ao do frontend. Mas você vai ver muito <code>require()</code> em tutoriais antigos — os dois funcionam.</p>
        </div>

        <h3>Módulos internos do Node</h3>
        <p>O Node já vem com módulos prontos, sem precisar instalar. Alguns exemplos:</p>
        <ul>
          <li><code>http</code> — criar servidores web</li>
          <li><code>fs</code> — ler e escrever arquivos</li>
          <li><code>path</code> — trabalhar com caminhos de arquivo</li>
          <li><code>os</code> — informações do sistema</li>
        </ul>
        <p>Hoje vamos usar o <code>http</code> para criar nosso servidor sem nenhum pacote extra.</p>
      </section>

      <section>
        <h2>Seu primeiro servidor HTTP</h2>
        <p>
          Vamos escrever um servidor que responde <code>Hello World</code> quando alguém
          acessa <code>http://localhost:3000</code>. É a versão mais simples possível — sem
          Express, sem framework.
        </p>

        <pre><code>// server.js
import http from "node:http";

const PORT = 3000;

const server = http.createServer((req, res) =&gt; {
  console.log(\`[\${req.method}] \${req.url}\`);

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.statusCode = 200;
  res.end("Hello World do Node.js!");
});

server.listen(PORT, () =&gt; {
  console.log(\`Servidor rodando em http://localhost:\${PORT}\`);
});</code></pre>

        <h3>Traduzindo linha por linha</h3>
        <ul>
          <li><code>import http from "node:http"</code> — carrega o módulo <code>http</code> nativo.</li>
          <li><code>http.createServer((req, res) =&gt; { ... })</code> — cria um servidor. A função é chamada <strong>toda vez que chega uma requisição</strong>.</li>
          <li><code>req</code> (request) — o que o cliente enviou (URL, método, headers).</li>
          <li><code>res</code> (response) — o que o servidor vai devolver.</li>
          <li><code>res.setHeader(...)</code> — define o tipo de conteúdo.</li>
          <li><code>res.statusCode = 200</code> — o famoso “deu certo” da Aula 01.</li>
          <li><code>res.end("...")</code> — envia o corpo da resposta e fecha a conexão.</li>
          <li><code>server.listen(PORT, ...)</code> — “fica ouvindo” na porta 3000.</li>
        </ul>

        <div class="callout callout-info">
          <strong>O que é uma porta?</strong>
          <p>Uma <strong>porta</strong> é o “número da sala” dentro do computador. Um mesmo computador pode ter vários serviços rodando ao mesmo tempo: 3000 para o Node, 5432 para o Postgres, 5500 para o Live Server… A URL <code>http://localhost:3000</code> significa “meu próprio computador, sala 3000”.</p>
        </div>

        <h3>Rodando e testando</h3>
        <pre><code>node server.js</code></pre>

        <p>No terminal você deve ver:</p>
        <pre><code>Servidor rodando em http://localhost:3000</code></pre>

        <p>Abra o navegador em <a href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</a>. Deve aparecer:</p>
        <pre><code>Hello World do Node.js!</code></pre>

        <p>E no terminal, cada vez que você atualiza a página:</p>
        <pre><code>[GET] /
[GET] /favicon.ico</code></pre>

        <p>Para parar o servidor: <code>Ctrl + C</code> no terminal.</p>
      </section>

      <section>
        <h2>Respondendo rotas diferentes</h2>
        <p>
          Um servidor real responde diferente dependendo da URL. Vamos evoluir o
          <code>server.js</code> para ter duas rotas:
        </p>

        <pre><code>import http from "node:http";

const PORT = 3000;

const server = http.createServer((req, res) =&gt; {
  console.log(\`[\${req.method}] \${req.url}\`);
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    return res.end(JSON.stringify({ mensagem: "Olá, backend!" }));
  }

  if (req.url === "/aluno" && req.method === "GET") {
    res.statusCode = 200;
    return res.end(
      JSON.stringify({ nome: "Murilo", curso: "Backend Node.js" })
    );
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));
});

server.listen(PORT, () =&gt; {
  console.log(\`Servidor rodando em http://localhost:\${PORT}\`);
});</code></pre>

        <p>Agora, no navegador ou Postman:</p>
        <ul>
          <li><code>GET http://localhost:3000/</code> → <code>{ "mensagem": "Olá, backend!" }</code></li>
          <li><code>GET http://localhost:3000/aluno</code> → <code>{ "nome": "Murilo", "curso": "Backend Node.js" }</code></li>
          <li><code>GET http://localhost:3000/qualquercoisa</code> → 404 + <code>{ "erro": "Rota não encontrada" }</code></li>
        </ul>

        <div class="callout callout-warn">
          <strong>Isso é o “cru” do Node</strong>
          <p>Fazer roteamento com <code>if</code>/<code>else</code> vira bagunça rápido. Por isso na Aula 03 vamos usar o <strong>Express</strong>, que resolve isso com <code>app.get("/aluno", ...)</code>. Hoje o objetivo é entender o que está por baixo.</p>
        </div>
      </section>

      <section>
        <h2>Watch mode — sem reiniciar o servidor toda vez</h2>
        <p>
          Cada vez que você mudar o <code>server.js</code>, precisa parar (<code>Ctrl+C</code>) e rodar de novo.
          Chato. O Node moderno tem <code>--watch</code>, que reinicia automaticamente:
        </p>

        <pre><code>node --watch server.js</code></pre>

        <p>Guarde isso no <code>package.json</code> como script:</p>

        <pre><code>{
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  }
}</code></pre>

        <p>E rode:</p>
        <pre><code>npm run dev</code></pre>

        <div class="callout callout-tip">
          <strong>Antes existia o nodemon</strong>
          <p>Historicamente usava-se o pacote <code>nodemon</code> pra fazer o mesmo. Se ver em tutoriais antigos, saiba que é a mesma ideia — hoje o Node já faz nativo.</p>
        </div>
      </section>

      <section>
        <h2>Checklist do dia</h2>
        <ul class="checklist">
          <li><input type="checkbox" id="a2-c1" /><label for="a2-c1">Node instalado — <code>node -v</code> mostra versão</label></li>
          <li><input type="checkbox" id="a2-c2" /><label for="a2-c2">npm funcionando — <code>npm -v</code> mostra versão</label></li>
          <li><input type="checkbox" id="a2-c3" /><label for="a2-c3">Rodei um arquivo <code>.js</code> com <code>node arquivo.js</code></label></li>
          <li><input type="checkbox" id="a2-c4" /><label for="a2-c4">Entendo o que é o <code>package.json</code> e os scripts</label></li>
          <li><input type="checkbox" id="a2-c5" /><label for="a2-c5">Sei explicar a diferença entre <code>require</code> e <code>import</code></label></li>
          <li><input type="checkbox" id="a2-c6" /><label for="a2-c6">Subi o servidor Hello World e vi a resposta no navegador</label></li>
          <li><input type="checkbox" id="a2-c7" /><label for="a2-c7">Completei a <strong>Mão na Massa</strong> e fiz commit no GitHub</label></li>
        </ul>
      </section>

      <section>
        <h2>Materiais para estudar hoje</h2>
        <ul class="resource-list">
          <li>
            <span class="resource-tag">Documentação · PT-BR</span>
            <strong>Node.js — Introdução oficial</strong>
            <p>Guia “Getting Started” em português.</p>
            <a href="https://nodejs.org/pt/learn/getting-started/introduction-to-nodejs" target="_blank" rel="noopener">Abrir nodejs.org →</a>
          </li>
          <li>
            <span class="resource-tag">Documentação</span>
            <strong>Node.js — Módulo <code>http</code></strong>
            <p>Referência do módulo que usamos hoje.</p>
            <a href="https://nodejs.org/api/http.html" target="_blank" rel="noopener">Abrir docs.nodejs.org →</a>
          </li>
          <li>
            <span class="resource-tag">Documentação</span>
            <strong>npm — Guia oficial</strong>
            <p>Tudo sobre <code>package.json</code>, scripts e instalação de pacotes.</p>
            <a href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json" target="_blank" rel="noopener">Abrir docs.npmjs.com →</a>
          </li>
          <li>
            <span class="resource-tag">Vídeo · PT-BR</span>
            <strong>O que é Node.js e como instalar — Rocketseat</strong>
            <p>Introdução prática ao Node e npm.</p>
            <a href="https://www.youtube.com/results?search_query=o+que+%C3%A9+node+js+rocketseat" target="_blank" rel="noopener">Buscar no YouTube →</a>
          </li>
          <li>
            <span class="resource-tag">Vídeo · PT-BR</span>
            <strong>Primeiro servidor HTTP com Node puro</strong>
            <p>Sem Express, só o módulo <code>http</code> — reforça o que fizemos hoje.</p>
            <a href="https://www.youtube.com/results?search_query=servidor+http+node+puro" target="_blank" rel="noopener">Buscar no YouTube →</a>
          </li>
          <li>
            <span class="resource-tag">Ferramenta</span>
            <strong>Postman — Testando seu endpoint</strong>
            <p>Se ainda não instalou, aproveite para testar o servidor de hoje.</p>
            <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener">Baixar Postman →</a>
          </li>
        </ul>
      </section>

      <section class="hands-on" id="mao-na-massa">
        <div class="hands-on-header">
          <span class="hands-on-badge">🛠 Mão na Massa</span>
          <h2>Aula 02 — Criar seu primeiro projeto Node e servidor Hello World</h2>
        </div>

        <p>
          Hoje você vai criar uma <strong>pasta separada</strong> para o backend dentro do
          mesmo repositório do curso. No final, faz commit e push — o repositório continua
          o mesmo da Aula 01.
        </p>

        <div class="callout callout-tip">
          <strong>Pré-requisitos</strong>
          <ul>
            <li>Node.js LTS instalado (<code>node -v</code> e <code>npm -v</code> funcionando)</li>
            <li>VS Code ou Cursor abertos na pasta <code>curso-backend-node</code></li>
            <li>Repositório da Aula 01 já no GitHub</li>
          </ul>
        </div>

        <h3>Passo a passo</h3>
        <ol class="steps">
          <li>
            <strong>Atualizar o repositório local</strong>
            <p>No terminal, dentro da pasta do curso:</p>
            <pre><code>cd ~/Documents/Murilo/Curso_node/curso-backend-node
git status              # deve estar limpo (nothing to commit)
git pull                # baixa qualquer atualização, se houver</code></pre>
          </li>
          <li>
            <strong>Criar a pasta do backend</strong>
            <p>Vamos manter o site na raiz e colocar o backend numa pasta própria:</p>
            <pre><code>mkdir backend
cd backend</code></pre>
          </li>
          <li>
            <strong>Iniciar o projeto npm</strong>
            <pre><code>npm init -y</code></pre>
            <p>Isso cria o <code>package.json</code>. Abra o arquivo e adicione <code>"type": "module"</code> para usar <code>import</code>/<code>export</code>:</p>
            <pre><code>{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  }
}</code></pre>
          </li>
          <li>
            <strong>Criar o arquivo <code>server.js</code></strong>
            <p>Dentro de <code>backend/</code>, crie <code>server.js</code> com o código completo (com rotas):</p>
            <pre><code>import http from "node:http";

const PORT = 3000;

const server = http.createServer((req, res) =&gt; {
  console.log(\`[\${req.method}] \${req.url}\`);
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    return res.end(JSON.stringify({ mensagem: "Olá, backend!" }));
  }

  if (req.url === "/aluno" && req.method === "GET") {
    res.statusCode = 200;
    return res.end(
      JSON.stringify({ nome: "Murilo", curso: "Backend Node.js" })
    );
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));
});

server.listen(PORT, () =&gt; {
  console.log(\`Servidor rodando em http://localhost:\${PORT}\`);
});</code></pre>
          </li>
          <li>
            <strong>Rodar em modo watch</strong>
            <pre><code>npm run dev</code></pre>
            <p>Deve aparecer: <code>Servidor rodando em http://localhost:3000</code>. Deixe o terminal aberto.</p>
          </li>
          <li>
            <strong>Testar no navegador</strong>
            <p>Abra em abas separadas:</p>
            <ul>
              <li><a href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</a> → deve mostrar <code>{"mensagem":"Olá, backend!"}</code></li>
              <li><a href="http://localhost:3000/aluno" target="_blank" rel="noopener">http://localhost:3000/aluno</a> → deve mostrar seus dados</li>
              <li><a href="http://localhost:3000/xpto" target="_blank" rel="noopener">http://localhost:3000/xpto</a> → deve mostrar o erro 404</li>
            </ul>
            <p>No terminal, veja os logs <code>[GET] /</code> aparecendo em tempo real.</p>
          </li>
          <li>
            <strong>Testar mudança ao vivo (watch)</strong>
            <p>Ainda com o servidor rodando, mude a mensagem para <code>"Olá, mundo do Murilo!"</code>, salve o arquivo. O terminal reinicia sozinho. Atualize o navegador — a nova mensagem aparece sem parar o servidor.</p>
          </li>
          <li>
            <strong>Testar com Postman (opcional, mas recomendado)</strong>
            <p>Abra o Postman, crie uma nova request:</p>
            <ul>
              <li>Método: <strong>GET</strong></li>
              <li>URL: <code>http://localhost:3000/aluno</code></li>
              <li>Clique em <strong>Send</strong></li>
            </ul>
            <p>Veja o corpo em JSON e o <strong>Status: 200 OK</strong>. Agora tente <code>/inexistente</code> e confirme o <strong>404</strong>.</p>
          </li>
          <li>
            <strong>Ignorar <code>node_modules</code> no Git</strong>
            <p>Na raiz do projeto (<code>curso-backend-node</code>, não dentro do <code>backend</code>), crie ou edite <code>.gitignore</code> e garanta essas linhas:</p>
            <pre><code>node_modules/
.DS_Store
.env</code></pre>
            <p>Isso evita que a pasta pesada de pacotes vá para o GitHub.</p>
          </li>
          <li>
            <strong>Parar o servidor e commitar</strong>
            <p>No terminal com o servidor rodando: <code>Ctrl + C</code>. Depois, na raiz do projeto:</p>
            <pre><code>cd ..
git status
git add .
git commit -m "Aula 02: primeiro servidor Node com Hello World e rota /aluno"
git push</code></pre>
          </li>
          <li>
            <strong>Conferir no GitHub</strong>
            <p>Atualize a página do repositório. Você deve ver a nova pasta <code>backend/</code> com <code>package.json</code> e <code>server.js</code> — e <strong>sem</strong> o <code>node_modules</code>.</p>
          </li>
        </ol>

        <h3>Comandos que você usou hoje</h3>
        <pre><code>node -v / npm -v          → checar instalação
npm init -y               → criar package.json
npm run dev               → rodar o servidor em watch mode
node server.js            → rodar sem watch
Ctrl + C                  → parar o servidor
git add / commit / push   → versionar as mudanças</code></pre>

        <div class="callout callout-tip">
          <strong>Dica do professor</strong>
          <p>Se algo der errado (porta ocupada, erro estranho), leia a mensagem inteira antes de sair mexendo. Erros do Node costumam dizer <em>exatamente</em> o que aconteceu e em qual linha.</p>
        </div>

        <h3>Erros comuns e como resolver</h3>
        <dl class="term-grid">
          <div class="term">
            <dt><code>EADDRINUSE :::3000</code></dt>
            <dd>A porta 3000 já está em uso. Feche o outro processo ou troque a porta no <code>server.js</code> para 3001.</dd>
          </div>
          <div class="term">
            <dt><code>Cannot use import statement outside a module</code></dt>
            <dd>Faltou <code>"type": "module"</code> no <code>package.json</code>.</dd>
          </div>
          <div class="term">
            <dt><code>node: command not found</code></dt>
            <dd>Node não foi instalado ou o terminal precisa ser reaberto.</dd>
          </div>
          <div class="term">
            <dt><code>ENOENT: no such file</code></dt>
            <dd>Você está numa pasta diferente da esperada. Confira com <code>pwd</code> e <code>ls</code>.</dd>
          </div>
        </dl>

        <h3>Checklist da prática</h3>
        <ul class="checklist">
          <li><input type="checkbox" id="a2-p1" /><label for="a2-p1">Pasta <code>backend/</code> criada dentro do repo</label></li>
          <li><input type="checkbox" id="a2-p2" /><label for="a2-p2"><code>package.json</code> gerado com <code>"type": "module"</code> e scripts <code>start</code>/<code>dev</code></label></li>
          <li><input type="checkbox" id="a2-p3" /><label for="a2-p3"><code>server.js</code> respondendo <code>/</code>, <code>/aluno</code> e 404</label></li>
          <li><input type="checkbox" id="a2-p4" /><label for="a2-p4"><code>npm run dev</code> reinicia sozinho ao salvar</label></li>
          <li><input type="checkbox" id="a2-p5" /><label for="a2-p5"><code>.gitignore</code> ignorando <code>node_modules</code></label></li>
          <li><input type="checkbox" id="a2-p6" /><label for="a2-p6">Commit e push feitos — arquivos visíveis no GitHub</label></li>
        </ul>
      </section>

      <section>
        <h2>Próxima aula</h2>
        <p>
          Na <strong>Aula 03</strong> vamos trocar o roteamento manual com <code>if/else</code>
          pelo <strong>Express.js</strong> — o framework mais usado do Node. Você vai criar
          endpoints de verdade (<code>app.get</code>, <code>app.post</code>) e começar a
          desenhar sua primeira API REST.
        </p>
      </section>
    `,
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
