Crie o design completo de uma aplicação **mobile-first de Comunicação Aumentativa e Alternativa (CAA)** voltada principalmente para **pessoas não verbais ou com dificuldades significativas de comunicação oral**.

Nome provisório do projeto:

# API CAA

O projeto deve começar como uma aplicação web responsiva, mas toda a interface deve ser projetada **prioritariamente para smartphones**, considerando que futuramente será transformada em um aplicativo mobile.

A experiência precisa ser extremamente simples, intuitiva, acessível e rápida.

## Objetivo principal

Permitir que o usuário se comunique através de:

* pictogramas;
* imagens;
* palavras;
* frases;
* categorias;
* respostas rápidas;
* construção visual de frases;
* reprodução de voz por texto;
* favoritos;
* comunicação personalizada.

O usuário deve conseguir montar uma frase tocando em cartões visuais e depois reproduzi-la em áudio.

Exemplo:

EU → QUERO → ÁGUA

Ao selecionar os cartões, a frase deve aparecer em uma barra superior ou inferior:

**"Eu quero água."**

E existir um botão grande:

**🔊 Falar**

para reproduzir a frase.

---

# PRINCÍPIOS DE UX

A aplicação será utilizada por pessoas que podem possuir dificuldades motoras, cognitivas, linguísticas ou de atenção.

Portanto:

* evitar interfaces poluídas;
* utilizar botões grandes;
* áreas de toque amplas;
* poucos elementos por tela;
* ícones acompanhados de texto;
* alto contraste;
* navegação previsível;
* feedback visual ao tocar;
* evitar menus complexos;
* evitar textos longos;
* priorizar reconhecimento visual;
* permitir uso com apenas uma mão;
* evitar ações importantes muito próximas umas das outras;
* nunca depender exclusivamente de cores para transmitir informação.

O design deve seguir princípios de acessibilidade WCAG sempre que possível.

---

# IDENTIDADE VISUAL

Criar uma identidade:

* acolhedora;
* moderna;
* tecnológica;
* humana;
* minimalista;
* amigável.

Evitar visual infantilizado demais.

A plataforma poderá ser utilizada por:

* crianças;
* adolescentes;
* adultos;
* idosos.

Portanto a identidade deve ser universal.

Utilizar:

* cantos arredondados;
* sombras suaves;
* cards grandes;
* tipografia altamente legível;
* hierarquia visual clara;
* espaçamento generoso;
* ícones simples.

Criar um Design System reutilizável.

---

# ESTRUTURA PRINCIPAL

Criar uma navegação mobile inferior com aproximadamente cinco áreas:

1. Comunicação
2. Categorias
3. Favoritos
4. Histórico
5. Perfil

Utilizar ícone + texto.

---

# TELA 1 — SPLASH SCREEN

Criar uma splash screen simples.

Elementos:

* logo API CAA;
* símbolo relacionado a comunicação;
* nome do aplicativo;
* pequena animação visual sugerida.

---

# TELA 2 — ONBOARDING

Criar onboarding simples com no máximo 3 etapas.

Exemplo:

### Tela 1

**Comunique-se do seu jeito**

Use imagens, símbolos e palavras para construir mensagens.

### Tela 2

**Monte frases rapidamente**

Selecione os cartões e transforme-os em fala.

### Tela 3

**Personalize sua comunicação**

Crie categorias, palavras e frases importantes para você.

Botões:

* Próximo
* Pular
* Começar

---

# TELA 3 — LOGIN

Criar tela de autenticação simples.

Campos:

* e-mail;
* senha.

Botões:

* Entrar;
* Criar conta;
* Esqueci minha senha.

Adicionar possibilidade futura de:

* login Google;
* login Apple.

---

# TELA 4 — HOME / COMUNICAÇÃO

Essa será a tela principal da plataforma.

Priorizar totalmente a velocidade de comunicação.

Estrutura sugerida:

### Topo

Mostrar:

* saudação opcional;
* perfil do usuário;
* botão de configurações.

### Barra de frase

Criar uma área onde os cartões selecionados aparecem em sequência.

Exemplo:

[EU] [QUERO] [ÁGUA]

Abaixo ou ao lado:

* botão apagar último;
* botão limpar frase;
* botão reproduzir voz.

O botão **FALAR** deve ter grande destaque.

---

# GRID DE COMUNICAÇÃO

Criar grid com cartões grandes.

Cada cartão deve possuir:

* pictograma ou imagem;
* palavra;
* feedback ao pressionar.

Exemplos:

Eu

Quero

Sim

Não

Água

Comida

Banheiro

Ajuda

Dor

Obrigado

Mais

Parar

Os cartões devem possuir estados:

* normal;
* pressionado;
* selecionado;
* desabilitado.

---

# CATEGORIAS

Adicionar uma área horizontal ou uma seção facilmente acessível com categorias.

Exemplos:

* Pessoas
* Ações
* Comida
* Bebidas
* Lugares
* Sentimentos
* Necessidades
* Saúde
* Escola
* Casa
* Lazer

Cada categoria pode possuir uma identidade visual própria.

---

# TELA — CATEGORIA

Quando o usuário abrir uma categoria, mostrar os cartões relacionados.

Exemplo:

## Bebidas

* Água
* Suco
* Café
* Leite
* Refrigerante
* Chá

Permitir:

* voltar;
* pesquisar;
* adicionar item personalizado.

---

# TELA — RESPOSTAS RÁPIDAS

Criar uma área para frases extremamente frequentes.

Exemplos:

* Sim
* Não
* Talvez
* Não entendi
* Pode repetir?
* Quero ajuda
* Estou com dor
* Quero ir embora
* Estou bem
* Obrigado

Esses botões devem ser maiores que cartões normais.

---

# TELA — SENTIMENTOS

Criar comunicação visual de emoções.

Exemplos:

* Feliz
* Triste
* Bravo
* Ansioso
* Com medo
* Cansado
* Com dor
* Confuso
* Calmo

Utilizar expressões visuais simples e respeitosas.

---

# TELA — DOR / SAÚDE

Criar interface que permita comunicar desconforto.

Exemplo:

**Onde está doendo?**

Mostrar representação simples do corpo humano.

Possibilidade de selecionar:

* cabeça;
* garganta;
* peito;
* barriga;
* braço;
* mão;
* perna;
* pé.

Depois:

**Quanto está doendo?**

Criar escala visual simples de intensidade.

---

# TELA — FAVORITOS

Permitir armazenar:

* palavras favoritas;
* cartões;
* frases completas.

Criar seção:

**Mais utilizados**

e:

**Meus favoritos**

---

# TELA — HISTÓRICO

Mostrar frases utilizadas recentemente.

Exemplo:

Hoje

"Quero beber água."

"Estou com fome."

"Quero ir ao banheiro."

Cada frase deve possuir:

* botão reproduzir novamente;
* favoritar;
* reutilizar.

---

# BUSCA

Criar uma busca extremamente simples.

Placeholder:

**O que você quer dizer?**

Resultados podem retornar:

* palavras;
* pictogramas;
* categorias;
* frases.

---

# CRIAÇÃO DE CARTÃO PERSONALIZADO

Criar fluxo para adicionar um novo cartão.

Campos:

* imagem;
* tirar foto;
* escolher imagem;
* palavra;
* categoria;
* cor opcional.

Botão:

**Adicionar à comunicação**

---

# CRIAÇÃO DE FRASE PERSONALIZADA

Permitir criar frases prontas.

Exemplo:

"Quero falar com minha mãe."

Campos:

* texto;
* imagem opcional;
* categoria;
* favorito.

---

# PERFIL

Criar tela de perfil contendo:

* nome;
* foto;
* idade opcional;
* preferências;
* responsável/cuidador opcional.

---

# CONFIGURAÇÕES DE ACESSIBILIDADE

Criar uma área muito importante dentro das configurações.

Permitir alterar:

### Interface

* tamanho dos cartões;
* tamanho dos textos;
* quantidade de cartões por linha;
* contraste;
* modo claro;
* modo escuro.

### Comunicação

* voz;
* velocidade da voz;
* volume;
* leitura automática.

### Interação

* tempo de toque;
* confirmação de seleção;
* animações reduzidas.

---

# MODO CUIDADOR / RESPONSÁVEL

Criar uma interface secundária de administração.

O cuidador poderá:

* adicionar cartões;
* remover cartões;
* reorganizar categorias;
* criar frases;
* visualizar palavras mais utilizadas;
* configurar preferências.

Essa área deve ficar protegida para evitar alterações acidentais pelo usuário principal.

---

# PERSONALIZAÇÃO DA HOME

Criar tela onde o responsável possa reorganizar os cartões através de drag-and-drop.

Exemplo:

Arrastar:

Água

Comida

Banheiro

Dor

para posições mais acessíveis.

---

# COMPONENTES DO DESIGN SYSTEM

Criar componentes reutilizáveis:

* CommunicationCard
* CategoryCard
* PhraseChip
* SpeakButton
* BottomNavigation
* SearchBar
* UserAvatar
* QuickAnswerButton
* FavoriteButton
* AddCardButton
* Modal
* BottomSheet
* Toast
* ConfirmationDialog
* Toggle
* Slider
* AccessibilityOption

Criar variantes e estados desses componentes.

---

# RESPONSIVIDADE

Prioridade:

### Mobile

375px / 390px / 430px

Depois adaptar para:

### Tablet

768px

### Desktop

1024px+

No desktop, manter aparência semelhante a um aplicativo centralizado.

Não criar inicialmente uma experiência desktop completamente diferente.

---

# FUTURO APLICATIVO

Estruturar a interface pensando que futuramente será implementada utilizando tecnologias como:

* React Native;
* Expo;
* Flutter;

ou solução semelhante.

Portanto:

* evitar padrões exclusivos de navegador;
* evitar hover como interação essencial;
* priorizar gestos e toque;
* utilizar bottom navigation;
* utilizar modais mobile;
* utilizar bottom sheets;
* utilizar componentes facilmente reproduzíveis em aplicações nativas.

---

# PROTÓTIPO INTERATIVO

Criar protótipo navegável demonstrando o seguinte fluxo:

Splash

→ Onboarding

→ Login

→ Comunicação

→ selecionar "EU"

→ selecionar "QUERO"

→ selecionar "ÁGUA"

→ mostrar:

"Eu quero água."

→ pressionar:

🔊 FALAR

Criar também navegação funcional entre:

* Comunicação
* Categorias
* Favoritos
* Histórico
* Perfil

---

# MICROINTERAÇÕES

Adicionar sugestões de:

* animação ao selecionar cartão;
* feedback de toque;
* animação do botão falar;
* entrada de cartões;
* transição entre categorias;
* feedback ao favoritar.

As animações devem ser leves e rápidas.

A prioridade sempre deve ser **acessibilidade e velocidade de comunicação**, e não efeitos visuais.

---

# ENTREGA DO FIGMA

Organizar o arquivo em páginas:

01 — Foundations

02 — Components

03 — Mobile Screens

04 — Tablet

05 — Desktop

06 — Prototype

07 — Accessibility

08 — User Flows

Criar Auto Layout corretamente.

Utilizar componentes reutilizáveis.

Criar variantes.

Criar estilos de:

* cores;
* tipografia;
* espaçamento;
* bordas;
* sombras.

Todo o projeto deve parecer um produto real preparado para desenvolvimento.

O resultado deve transmitir:

**"Comunicar deve ser simples, rápido e acessível."**
