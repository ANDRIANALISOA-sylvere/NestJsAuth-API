# NestAuth-API :rocket:

A complete authentication API built with **NestJS** , **Postgresql** , **Prisma**, and **Typescript**.
Supports **email/password authentication** and **Google OAuth 2.0**.

## 📌 Features

- **User authentication (Register & Login)**
- **JWT-based authentication**
- **Role-based access control RBAC (ADMIN,USER)**
- **Get current user & list all users**
- **Google OAuth 2.0 authentication**
- **Prisma ORM for database management**
- **Environment variable support with `.env`**

## :rocket: Getting Started

### :one: Clone the repository

```sh
git clone https://github.com/ANDRIANALISOA-sylvere/NestJsAuth-API.git
cd NestJsAuth-API
```

### :two: Install dependencies
```sh
npm install
```

### :three: Set up environment variables
Create a `.env` file at the root of the project and add the following :

```sh
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=your_google_callback_url
```

### :four: Run database migrations
```sh
npx prisma migrate dev --name init
```

### :five: Start the server
```sh
npm run start:dev
```

The API will run at http://localhost:8000

## :key: Authentication Endpoints

### Register a new user

**POST** */api/auth/register*

**Request:**
```json
{
    "name":"John Doe",
    "email":"john@example.com",
    "password":"securepassword (must be longer than or equal to 6 characters)",
    "role":"USER"
}
```

**Response:**
```json
{
  "id": "7ecc75b6-867c-4745-8c70-29235ac09c29",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "USER",
  "createdAt": "2025-03-21T15:04:41.438Z",
  "updatedAt": "2025-03-21T15:04:41.438Z"
}
```

### Login

**POST** */api/auth/login*

**Request:**
```json
{
    "email":"john@example.com",
    "password":"securepassword",
}
```

**Response:**
```json
{
    "access_token":"your_jwt_token"
}
```
### Get Current User

**Get** */api/auth/me*

- Requires **Authorization** : Bearer *your_jwt_token*

**Response:**
```json
{
  "id": "7ecc75b6-867c-4745-8c70-29235ac09c29",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "USER",
  "createdAt": "2025-03-21T15:04:41.438Z",
  "updatedAt": "2025-03-21T15:04:41.438Z"
}
```
### Get all users (Admin only)

**Get** */api/users*

- Requires **ADMIN role**
- Requires **Authorization** : Bearer *your_jwt_token*

**Response:**
```json
[{
    "id": "1621ebad-a9fd-44e1-b71c-01a8e40ab78d",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "USER",
    "createdAt": "2025-03-21T13:11:51.355Z",
    "updatedAt": "2025-03-21T13:11:51.355Z"
},{
    "id": "bd59082b-88eb-4e50-a300-10d7e82c2a6c",
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "ADMIN",
    "createdAt": "2025-03-21T13:11:51.355Z",
    "updatedAt": "2025-03-21T13:11:51.355Z"
}]
```

## Google OAuth 2.0 Authentication

### :one: Redirect to Google login

**Get** */api/auth/google*

### :two: Google callback (Handled by API)

**Get** */api/auth/google/callback*

- After the authentication, the API will return a JWT token

## Technologies Used

- **NestJS** - Framework
- **PostgreSQL** - Database
- **Prisma** - ORM for database
- **Typescript** - Static typing
- **JWT** - Authentication
- **Google OAuth 2.0** - Social authentication

**Contributions are welcome!** Feel free to open source issues or submit pull request. Made with :heart: by [Joséphin Sylvère](https://josephin-sylvere.vercel.app)



