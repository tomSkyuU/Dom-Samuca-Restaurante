Dom Samuca — Site Institucional
Site institucional do Restaurante Dom Samuca, desenvolvido com HTML, CSS e JavaScript puros, sem frameworks ou dependências de build. Design luxuoso focado nas cores dourado e branco, com foco em experiência visual e responsividade.

📁 Estrutura de Arquivos
dom-samuca/
├── index.html        # Página principal
├── cardapio.html     # Página completa do cardápio
├── style.css         # Estilos base compartilhados
├── index.css         # Estilos da página principal
├── cardapio.css      # Estilos da página de cardápio
├── utils.js          # Funções utilitárias compartilhadas
├── index.js          # Lógica da página principal
└── cardapio.js       # Lógica da página de cardápio

🚀 Como Usar
Sem instalação necessária. Basta clonar o repositório e abrir o index.html no navegador:
bashgit clone https://github.com/TomSkyuU/Dom-Samuca-Restaurante.git
cd dom-samuca
Ou se preferir usar um servidor local:
bash# Com Python
python -m http.server 8000

# Com Node.js (npx)
npx serve .
Acesse http://localhost:8000 no navegador.

✨ Funcionalidades

Cursor personalizado animado em dourado
Navegação sticky com efeito de blur ao rolar
Hero animado com anéis ornamentais pulsantes e entradas em sequência
Cardápio com abas — 5 categorias na home, 7 na página dedicada
Galeria de fotos com efeito de zoom e borda dourada no hover
Formulário de reserva com validação e toast de confirmação
Scroll reveal — elementos animam ao entrar na viewport
Menu degustação com sidebar de preços fixa (sticky)
Layout editorial com cards fotográficos, grid de itens e lista estilo carta
Menu mobile com hamburger animado
100% responsivo — mobile, tablet e desktop


🎨 Design
ElementoValorCor principal#C9A84C (Dourado)Cor de destaque#E8C97A (Dourado claro)Fundo#1A1208 (Marrom escuro quase preto)Fonte displayCinzel (títulos e logo)Fonte editorialCormorant Garamond (descrições e textos longos)Fonte UIRaleway (navegação, botões e labels)

📄 Páginas
index.html — Página Principal
Seções: Hero · Sobre · Cardápio (resumo) · Prato em Destaque · Ambiente · Reservas · Footer
cardapio.html — Cardápio Completo
Categorias: Entradas · Pratos Principais · Frutos do Mar · Massas Frescas · Menu Degustação · Sobremesas · Bebidas

🛠 Tecnologias

HTML5 semântico
CSS3 (variáveis, grid, flexbox, clip-path, animações)
JavaScript vanilla (ES6+, IntersectionObserver, requestAnimationFrame)
Google Fonts (Cinzel, Cormorant Garamond, Raleway)
Imagens via Unsplash


📱 Responsividade
BreakpointComportamento> 1024pxLayout completo, cursor customizado ativo768px – 1024pxGrid de 1 coluna, sidebar do tasting inline< 768pxMenu hamburger, galeria em 2 colunas, cursor nativo< 480pxLayout totalmente empilhado, galeria em 1 coluna

📌 Observações

As imagens são carregadas via CDN do Unsplash — substituir por fotos reais do restaurante para produção
O formulário de reserva é apenas visual (frontend); integrar com backend ou serviço de e-mail para produção
Fontes carregadas via Google Fonts — considerar hospedar localmente para melhor performance em produção


Desenvolvido com HTML, CSS e JS puros — sem frameworks, sem build, sem complicação.
