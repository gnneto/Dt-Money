# DT Money

DT Money é uma aplicação de controle financeiro desenvolvida em React, TypeScript e Vite. O objetivo do projeto é permitir o gerenciamento de transações financeiras, possibilitando o cadastro, listagem e busca de entradas e saídas.

## Funcionalidades

- Listagem de transações (entradas e saídas)
- Busca de transações por descrição
- Cálculo automático de saldo, entradas e saídas
- Cadastro de novas transações via modal
- Interface responsiva e moderna

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog)
- [JSON Server](https://github.com/typicode/json-server) (fake API)

## Como rodar o projeto

1. **Clone o repositório**
   ```bash
    git clone https://github.com/gnneto/Dt-Money.git
    cd Dt-Money
    ```
2. **Instale as dependências**
   ```bash
    npm install
   ```
3. **Inicie o servidor de desenvolvimento**
    ```bash
    npm run dev:server
    ```
    O servidor estará disponível em `http://localhost:3333`.
   
5. **Inicie a aplicação:**
```bash
npm run dev
```
## Observações

- O projeto utiliza o JSON Server apenas para simular uma API REST.
- As transações são salvas em `/server.json`.
- O layout é inspirado em aplicações modernas de controle financeiro.
