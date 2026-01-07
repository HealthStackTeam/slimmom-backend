# 🥗 Slimmom Backend API

Welcome to the **Slimmom Backend API**! This project powers the backend of the Slimmom application, providing robust endpoints for user authentication, calorie tracking, product management, and daily diary features.

---

## 🚀 Features

- 🔐 **User Authentication & Authorization**
- 🥑 **Product & Calorie Database**
- 📅 **Daily Food Diary**
- 📊 **Personalized Calorie Calculator**
- 🩸 **Blood Type-based Recommendations**
- 📝 **Comprehensive API Documentation (Swagger & Redoc)**

---

## 📚 Technologies Used

- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) Node.js
- ![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white) Express.js
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) MongoDB & Mongoose
- ![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white) JWT Authentication
- ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black) Swagger & Redoc for API Docs
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) ESLint

---

## 📦 Main Libraries

- express
- mongoose
- jsonwebtoken
- bcryptjs
- joi
- dotenv
- cors
- morgan

---

## 📑 API Endpoints

### 🧑‍💻 Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — User login
- `POST /api/auth/logout` — User logout
- `POST /api/auth/refresh` — Refresh session token

### 🥗 Calorie

- `POST /api/calorie/public` — Calculate calories (public)
- `POST /api/calorie/private` — Calculate calories (private, for logged-in users)

### 📅 Diary

- `GET /api/diary` — Get diary entries
- `POST /api/diary` — Add diary entry
- `DELETE /api/diary` — Delete diary entry

### 🥑 Products

- `GET /api/products` — List all products

---

## 📖 API Documentation

- [Swagger UI](https://slimmom-backend-h150.onrender.com/api-docs/) — Interactive API docs
- [OpenAPI Spec](./docs/openapi.yaml)
- [Redocly](./redocly.yaml)

---

## 🛠️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HealthStackTeam/slimmom-backend.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your values.
4. **Run the server:**
   ```bash
   npm start
   ```

---

## 👨‍💻 Developers

| Name                 | GitHub Profile                                            |
| -------------------- | --------------------------------------------------------- |
| Burak Ezer           | [burakezer92](https://github.com/burakezer92)             |
| Ozan Can Cuyar       | [ozncncyr](https://github.com/ozncncyr)                   |
| İlker Şelimen        | [ilkerthedev](https://github.com/ilkerthedev)             |
| Miraç Şengül         | [miracsengul](https://github.com/miracsengul)             |
| Çağla Karabudak Akın | [caglaakin](https://github.com/caglaakin)                 |
| Lütfi Çağlayan Usta  | [lutficaglayanusta](https://github.com/lutficaglayanusta) |
| Abdullah Furkan Toy  | [okazaki55](https://github.com/okazaki55)                 |
| Fatih Genç           | [gencoflu61](https://github.com/gencoflu61)               |
| Yeşim Bozkurt        | [yesimbozkurt](https://github.com/yesimbozkurt)           |

---

## 🌟 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

> Made with ❤️ by the HealthStack Team
