# 🎰 JAYAWINBET – Casino Platform (Production Architecture)

A full-stack **casino & betting platform** built with modern, scalable technologies.  
Designed for **real-time performance, security, and VPS deployment**.

---

## 🚀 Tech Stack

### 🎨 Frontend (Player Site)
- Next.js / React
- TypeScript
- Tailwind CSS
- Zustand / Redux
- WebSocket (real-time games & bets)

### 🛠 Admin Panel
- Next.js (Admin Dashboard)
- User Management
- Wallet & Transaction Control
- Game & Report Monitoring
- Charts & Analytics

### ⚙️ Backend (Microservices)
- Node.js / Express / NestJS
- JWT Authentication
- Wallet Service
- Betting / Game Engine
- WebSocket Service (real-time betting)
- Payment Integration ready

### 🧱 Infrastructure
- Docker & Docker Compose
- NGINX (Reverse Proxy)
- PostgreSQL
- Redis
- VPS / Cloud Server (Production)

---

## 📁 Project Structure

```txt
JAYAWINBET/
│
├── apps/
│   ├── frontend/              # Player website
│   └── admin-panel/           # Admin dashboard
│
├── services/
│   ├── api-gateway/
│   ├── auth-service/
│   ├── wallet-service/
│   ├── game-engine/
│   └── websocket-service/
│
├── shared/
│   └── across.apps.js         # Shared configs & constants
│
├── infra/
│   ├── nginx/                 # NGINX configs
│   ├── docker/                # Docker base files
│   └── kubernetes/            # Optional K8s setup
│
├── database/
│   ├── migrations/
│   └── schema.sql
│
├── scripts/
│   ├── deploy.sh
│   └── backup.sh
│
├── docker-compose.yml
├── .env.example
└── README.md
