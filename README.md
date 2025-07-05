# 🚀 Job Portal - MERN Stack Project

A full-stack **Job Portal Web Application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** — perfect for placement projects or portfolio building.

This app allows users to:
- 🔐 Register and Login
- 👥 View available jobs
- ✍️ Apply for jobs
- 📋 Admins can add/edit/delete jobs

---

## 💻 Technologies Used

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Axios, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT (JSON Web Tokens) |
| Styling | CSS / Inline Styles |
| Dev Tools | React Developer Tools |

---

## 🧩 Features

### User Features
- Register / Sign Up
- Login / Sign In
- View all jobs
- Apply for jobs

### Admin Features
- Add new jobs
- Future scope: Edit/Delete jobs

### App Features
- Role-based access control
- Responsive design
- Clean UI with navigation bar
- Protected routes (login required)

---

## 📁 Folder Structure
job-portal/
│
├── backend/             # Node.js + Express server
│   ├── controllers/     # Auth, Job, Application logic
│   ├── models/          # MongoDB Models
│   ├── middleware/      # JWT auth middleware
│   ├── routes/          # API routes
│   ├── config/          # DB connection
│   ├── .env.example
│   └── server.js        # Entry point
│
├── frontend/            # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── context/     # Auth state management
│   │   ├── services/    # API calls
│   │   ├── App.js       # Routing setup
│   │   └── index.js     # Entry point
│   └── package.json
│
├── README.md
├── LICENSE
└── .gitignore


---

## 🛠️ Setup Instructions

### 📦 Prerequisites

- [Node.js](https://nodejs.org/ ) and npm installed
- MongoDB Atlas account (or local MongoDB)
- Git installed

---

### 📝 Step-by-Step Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/chaitu-169/job-portal.git 
cd job-portal


### Contact
sriramchaitu383@gmail.comgit commit -m "first commit"
