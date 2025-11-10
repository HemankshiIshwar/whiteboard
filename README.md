# Whiteboard Collaboration App

A real-time collaborative whiteboard built with **Angular**, **Node.js**, and **WebSocket**.  
Multiple users can draw, chat, and collaborate on the same canvas simultaneously.

---

## Features

- Draw freehand, lines, rectangles, circles, and ellipses
- Real-time chat between connected users
- Clear board for everyone
- Real-time updates via WebSocket
- Angular + Node.js + Express + WebSocket architecture

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Angular 17 |
| Backend | Node.js + Express |
| Real-time | WebSocket (ws) |
| Deployment | Azure App Service |

---

## Local Setup

### 1️. Clone the repo
```bash
git clone https://github.com/<your-username>/whiteboard-collab.git
cd whiteboard-collab

```

### 2️. Install dependencies
```bash
Frontend:
Copy code
cd whiteboard-frontend
npm install

Backend:
Copy code
cd ../whiteboard-backend
npm install
```
```
```
### 3. Build frontend
```bash
Copy code
cd ../whiteboard-frontend
ng build --configuration production
```
```
```
### 4️. Run backend (serves the built frontend)
```bash
Copy code
cd ../whiteboard-backend
node server.js
Visit  http://localhost:3000
```
Deployment on Azure
Build the frontend (ng build --configuration production)

Ensure the build is copied to whiteboard-backend/dist/whiteboard-frontend/browser

Deploy the backend folder (whiteboard-backend) to your Azure App Service.

Project Structure
pgsql
Copy code
whiteboard-collab/
│
├── whiteboard-frontend/     # Angular app
│   ├── src/
│   └── dist/
│
├── whiteboard-backend/      # Node.js + WebSocket server
│   ├── server.js
│   ├── package.json
│
└── README.md

Author:
Developed by Hemankshi Ishwar
🔗 GitHub: @HemankshiIshwar

Preview:
<img width="1913" height="911" alt="Whiteboard Preview" src="https://github.com/user-attachments/assets/df970d7c-0952-4c9c-8897-976172fe34a2" />


```markdown
![Whiteboard Preview](./screenshot.png)
(Add a screenshot in your repo root)
