# Mastering Node.js Backend Development — Summary & Project Notes

This repository contains complete learning journey, notes, and implementations.

The covers a full backend development roadmap — from fundamentals to production-level topics including MVC architecture, REST API design, authentication, error handling, security, and deployment.

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/Node-20.x-green.svg)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/Express-4.x-lightgrey.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/)
[![Backend-Node.js](https://img.shields.io/badge/Backend-Node.js-yellowgreen.svg)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![VS Code](https://img.shields.io/badge/IDE-VS%20Code-blue.svg)](https://code.visualstudio.com/)

---
 <img width="1137" height="639" alt="image" src="https://github.com/user-attachments/assets/ac418ca1-d369-4702-b883-c33a2061f9b7" />

---

## 📚 What Learned

### **✔ Core Backend Foundations**
- Node.js architecture, event loop, NPM ecosystem  
- Express.js framework fundamentals  
- Environment configuration with `.env`  
- Developer setup, VS Code, Postman, MongoDB Atlas  

### **✔ Professional MVC Folder Structure**


### **✔ REST API Design Principles**
- Proper use of HTTP methods  
- Clean URL structures  
- Structured JSON responses  
- Correct status codes  
- Pagination, sorting, filtering  

### **✔ MongoDB & Mongoose Mastery**
- Schema design  
- Data validation  
- Virtual fields  
- Custom instance & static methods  
- CRUD operations  
- Relationship modeling  

### **✔ API Features I Implemented**
- Create, Read, Update, Delete endpoints  
- Advanced search and query filtering  
- Pagination & sorting  
- Global error handling with `AppError`  
- Custom middleware (logging, validation, etc.)  

### **✔ Authentication & Authorization**
- User registration and login  
- JWT token handling  
- Secure cookie-based sessions  
- Role-based access (Admin, User)  
- Protected routes  

### **✔ Production Readiness**
- Security middlewares: Helmet, rate-limit, XSS-clean  
- CORS setup  
- Deployment structure  
- Env variable management  
- API versioning patterns  

---

## 🛠 Tech Stack Used

| Technology | Purpose |
|-----------|----------|
| **Node.js** | Server runtime |
| **Express.js** | Web framework |
| **MongoDB (Atlas)** | Database |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Authentication |
| **Bcrypt.js** | Password hashing |
| **Morgan** | Logging |
| **Helmet, CORS, XSS-Clean** | Security |
| **Postman** | API testing |

---

## 📁 Project Structure (Industry Standard)

```bash
.
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── middleware/
│   ├── errorHandler.js
│   └── authMiddleware.js
├── utils/
│   └── appError.js
├── app.js
├── server.js
├── .env
└── package.json

# .env
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

``
Running the Server
npm run dev

Production Mode
npm start
``

