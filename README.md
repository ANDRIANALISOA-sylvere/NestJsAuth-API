# NestAuth-API :rocket:

A complete authentication API built with **NestJS** , **Prisma**, and **Typescript**.
Supports **email/password** authentication** and **Google OAuth 2.0\*\*.

## 📌 Features

- **User authentication (Register & Login)**
- **JWT-based authentication**
- **Role-based access control RBAC (ADMIN,USER)**
- **Get current user & list all users**
- **Google OAuth 2.0 authentication**
- **Prisma ORM for database management**
- **Environment variable support with `.env`**

## 🚀 Getting Started

### :one: Clone the repository

```sh
git clone https://github.com/ANDRIANALISOA-sylvere/NestAuth-API.git
cd NestAuth-API
```

### :two: Install dependencies

Create a .env file at the root of the project and add the following :

```sh
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=your_google_callback_url
```
