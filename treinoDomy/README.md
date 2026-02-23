# 🚀 Projeto React + TypeScript com Autenticação

Este projeto é uma aplicação básica utilizando:

-   React
-   TypeScript
-   React Router
-   Context API para autenticação

O projeto possui:

-   ✅ Tela de Login
-   ✅ Autenticação simulada
-   ✅ Rotas protegidas
-   ✅ Dashboard
-   ✅ Logout
-   ✅ Estrutura organizada

------------------------------------------------------------------------

# 📦 Tecnologias Utilizadas

-   React
-   TypeScript
-   Vite
-   React Router DOM

------------------------------------------------------------------------

# 🛠️ Como Criar o Projeto

``` bash
npm create vite@latest treinoDomy
```

Selecione: - React - TypeScript

Depois:

``` bash
cd  treinoDomy
npm install
npm install react-router-dom
npm run dev
```

------------------------------------------------------------------------

# 📁 Estrutura do Projeto

    src/
     ├── pages/
     │    ├── Login.tsx
     │    └── Dashboard.tsx
     ├── routes/
     │    └── PrivateRoute.tsx
     ├── context/
     │    └── AuthContext.tsx
     ├── App.tsx
     └── main.tsx

------------------------------------------------------------------------

# 🔐 Funcionamento da Autenticação

A autenticação é feita via Context API.

Credenciais mock:

Email:

    admin@email.com

Senha:

    123456

Se as credenciais estiverem corretas: - O usuário é autenticado - É
redirecionado para `/dashboard`

Se estiverem incorretas: - Exibe alerta de erro

------------------------------------------------------------------------

# 🔒 Rota Privada

O componente `PrivateRoute` verifica:

    isAuthenticated === true

Caso contrário, redireciona para:

    /

------------------------------------------------------------------------

# 🏗 Melhorias Futuras

-   Implementar JWT real
-   Persistência com localStorage
-   Integração com backend
-   Testes automatizados
-   Layout com Tailwind

------------------------------------------------------------------------

# 👨‍💻 Autor

Projeto base para estudos de autenticação em React + TypeScript.
