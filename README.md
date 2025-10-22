# Expense Tracker

A simple full-stack web app to track income and expenses.  
Made using **React (frontend)** and **Node.js + Express (backend)** with a **MongoDB** database.

This project was originally based on a YouTube tutorial, but I’ve made a few changes and improvements to the structure, design, and features.

---

## Features

- Add, edit, and delete transactions
- View total income and expenses
- Filter and categorize transactions
- Responsive UI
- MongoDB for data storage
- Environment variables handled using `.env`
- Clean and modular backend structure

---

## Tech Stack

**Frontend:** React, Vite  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Styling:** CSS / Tailwind (optional)

---

## Folder Structure

```text
expense_tracker/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── uploads/
│ ├── .env
│ ├── package.json
│ └── server.js
│
└── frontend/
└── expense-tracker/
├── src/
├── public/
├── vite.config.js
├── package.json
└── index.html
```

---

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/gvraghuveer/expense-tracker.git
cd expense-tracker
```

### 2. Setup backend

```bash
cd backend
npm install
```

Create a .env file inside backend/:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm start
```

### 3. Setup frontend

```bash
cd ../frontend/expense-tracker
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

### Notes

.env and node_modules are ignored using .gitignore

This version includes small improvements compared to the YouTube tutorial (like structure, design, and validations)
