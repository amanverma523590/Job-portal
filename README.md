# 💼 Job Portal (MERN Stack)

A full-stack **Job Portal Web Application** built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to search and apply for jobs, while recruiters can post and manage job listings.

---

## 🚀 Features

### 👤 User (Job Seeker)

* Register & Login
* Browse available jobs
* Apply for jobs
* View applied jobs
* Update profile

### 🏢 Recruiter

* Register & Login
* Post new jobs
* Update/Delete job listings
* View applicants

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS / CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Token)
* **Other Tools:** Axios, Cookie Parser, bcryptjs

---

## 📁 Project Structure

```
/client     → React frontend
/server     → Node + Express backend
/models     → Mongoose schemas
/controllers→ Logic for routes
/routes     → API routes
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

### 2️⃣ Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in `/server`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_secret_key
```

---

### 4️⃣ Run the project

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
npm start
```

---

## 🔐 Authentication

* Secure login/signup using JWT
* Password hashing using bcrypt
* Cookies used for session management

---

## 📌 Future Improvements

* Resume upload feature
* Job filtering & search
* Admin dashboard
* Notifications system

---

## 👨‍💻 Author

Aman Verma
MERN Stack Developer

---

## ⭐ Note

This project is built for learning and showcasing full-stack development skills.
