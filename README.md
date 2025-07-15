# Women's Clothing MERN Stack Project

This is a full-stack MERN (MongoDB, Express, React/Next.js, Node.js) application for a women's clothing website.

## 🔧 Stack
- Frontend: Next.js + Tailwind CSS
- Backend: Node.js + Express + MongoDB (Mongoose)

## 📁 Structure
```
/
├── server/           # Backend API
├── client/           # (Optional React client)
├── components/, app/ # Frontend (Next.js)
```

## 🚀 Setup

### 1. Backend
```bash
cd server
cp .env.example .env
npm install
npm run dev
```

### 2. Frontend
```bash
cp .env.example .env
pnpm install
pnpm dev
```

## 🌐 Environment Variables

- `NEXT_PUBLIC_API_URL` - URL to backend API (e.g., http://localhost:5000/api)
- `MONGO_URI` - MongoDB connection string (in server/.env)

## 📦 Deployment
- Ready for deployment on platforms like Heroku, Vercel (frontend), or Docker.

