# Exercicio-back-front

Este projeto é composto por um backend em Node.js/Express e um frontend em Angular para gerenciar uma lista de jogos.

## Estrutura
- **backend**: API REST para operações CRUD de jogos.
- **frontend**: Aplicação Angular para interface do usuário.

## Como rodar o projeto

### Backend
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   node server.js
   ```
   O backend estará disponível em `http://localhost:3000`.

### Frontend
1. Acesse a pasta `frontend`:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor Angular:
   ```bash
   ng serve --host 0.0.0.0 --port 4200
   ```
   O frontend estará disponível em `http://localhost:4200`.

## Rotas principais
- `/` - Lista de jogos
- `/novo` - Adicionar novo jogo
- `/editar/:id` - Editar jogo

## Observações
- Certifique-se de que o backend esteja rodando antes de usar o frontend.
- Ajuste as URLs da API no frontend se necessário.

## Autor
Projeto de exemplo para estudo de integração Angular + Node.js.
