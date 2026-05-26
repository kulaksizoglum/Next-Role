# Next Role

Next Role is a fun project I built as a full-stack developer to showcase what I can build and the skills I have been developing.

In this project, I brought together the core parts of a full-stack application, including user registration, login, user-specific data management, backend API development, database connection, protected routes, and a modern React interface.

## Live Demo

🔗 [Next Role Live Demo](https://next-role-s6w7.onrender.com/)

## About the Project

Next Role is a simple application where users can create cards related to job applications or their career process. Users can create an account, log in, and manage cards connected to their own account.

The main goal of this project is not to build a commercial product, but to show what I can do as a full-stack developer and to use the technologies I have learned in a practical project.

## Features

- User registration and login system
- JWT-based authentication
- Password hashing with bcrypt
- User-specific card data
- Create, list, update, and delete card operations
- Protected route structure
- Data storage with MongoDB
- Express API structure
- Rate limiting
- Responsive and modern UI
- Toast notifications

## Technologies Used

### Frontend

**React**  
Used to build the interface with a component-based structure. Pages, forms, cards, and the overall user experience were created using React components.

**Vite**  
Used as the frontend development environment. It provides a fast development server and build process.

**React Router**  
Used for page navigation, login/signup redirects, and protected route logic.

**Axios**  
Used to send HTTP requests from the frontend to the backend API.

**Tailwind CSS**  
Used to create fast, flexible, and responsive UI styling.

**DaisyUI**  
Used on top of Tailwind CSS to speed up UI development with ready-to-use component styles.

**Lucide React**  
Used for icons throughout the project.

**React Hot Toast**  
Used to show success and error messages to users.

### Backend

**Node.js**  
Used as the JavaScript runtime for the backend.

**Express.js**  
Used to create API routes, middleware, and the server-side structure.

**MongoDB**  
Used as the NoSQL database to store user and card data.

**Mongoose**  
Used to work with MongoDB in a more structured way through schemas, models, and database operations.

**JWT / JSON Web Token**  
Used to manage the authentication process after a user logs in.

**bcrypt**  
Used to hash user passwords instead of storing them as plain text.

**dotenv**  
Used to manage database connection strings, JWT secrets, and other private environment variables in a `.env` file.

**CORS**  
Used to manage cross-origin requests between the frontend and backend during development.

**validator**  
Used for input validation, such as checking email format during signup.

**Upstash Redis / Rate Limit**  
Used for rate limiting API requests and reducing abuse.

**Nodemon**  
Used during backend development to automatically restart the server when files change.

## Project Structure

```txt
Next-Role/
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── server.js
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       └── main.jsx
│
└── package.json
```

## API Structure

### Auth

```txt
POST /api/user/signup
POST /api/user/login
```

### Cards

These routes require authentication.

```txt
GET    /api/cards
GET    /api/cards/:id
POST   /api/cards
PUT    /api/cards/:id
DELETE /api/cards/:id
```

## Local Setup

To run the project on your local machine:

```bash
git clone https://github.com/kulaksizoglum/Next-Role.git
cd Next-Role
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
NODE_ENV=development
```

Run the backend:

```bash
npm run dev
```

### Frontend Setup

Open a new terminal and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on the Vite development server by default.

## Build

To create a production build from the root directory:

```bash
npm run build
```

To start the backend:

```bash
npm start
```

## Developer Note

This project was built to practice full-stack development and to showcase the technologies I have learned in a single application. It is a personal project where I focused on improving my skills in code structure, authentication, database operations, API design, and frontend state management.
