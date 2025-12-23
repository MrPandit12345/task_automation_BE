# Task Manager Backend with n8n Automation

This is the **backend service** for a Task Manager application built using **Node.js, Express.js, and MongoDB Atlas**.  
It integrates with a **self-hosted n8n workflow** to send **email notifications** when a task is marked as completed.

---

## 🚀 Features

- User authentication (JWT-based)
- Task CRUD operations (Create, Read, Update, Delete)
- MongoDB Atlas integration using Mongoose
- n8n Webhook integration for automation
- Email notification triggered when a task status changes to `completed`
- Secure environment variable configuration

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Axios
- n8n (Self-hosted)
- Zoho SMTP (via n8n)

---

---

## ⚙️ Environment Variables

Create a `.env` file in the backend root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
N8N_WEBHOOK_URL=http://localhost:5678/webhook/task-completed


