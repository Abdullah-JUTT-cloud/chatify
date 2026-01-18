# Real-Time Chat Application (MERN + Socket.IO)
URL:https://chatify-v8u2.onrender.com/login

A **production-oriented real-time chat application** built to deeply understand how authentication, state, and event-driven systems behave in real-world conditions — not a UI demo.

This project combines **REST APIs and WebSockets correctly**, focuses on **secure authentication**, and handles **socket lifecycle and client state synchronization** without shortcuts.

---

## Why This Project Exists

Most chat apps online are shallow demos. This one was built to answer harder questions:

* How do you authenticate sockets securely?
* How do you avoid duplicate connections and memory leaks?
* How do you synchronize server events with client state?
* How do REST and WebSockets coexist without stepping on each other?
* How do you track online users without polling?

This project is about **engineering decisions**, not UI polish.

---

## Core Features

* User authentication with **JWT + HTTP-only cookies**
* Secure socket authentication using existing session cookies
* One-to-one real-time messaging
* Online/offline user presence (event-driven, no polling)
* Message persistence in MongoDB
* Automatic socket cleanup on disconnect
* Client-side state management for messages and users
* REST for data, WebSockets for events (clear separation of concerns)

---

## Tech Stack

### Frontend

* React
* Zustand (global state management)
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB + Mongoose

### Architecture

* REST APIs for authentication and data fetching
* WebSockets for real-time events only
* Cookie-based authentication shared between HTTP and sockets

---

## Authentication Flow (High Level)

1. User logs in via REST API
2. Server issues JWT in **HTTP-only cookie**
3. Socket connection automatically sends cookies
4. Socket middleware validates JWT
5. Socket joins user-specific room

No tokens stored in localStorage. No insecure hacks.

---

## Socket Lifecycle Handling

* Prevents multiple socket connections per user
* Cleans up listeners on disconnect
* Handles reconnections safely
* Emits presence updates on connect/disconnect

This avoids the most common Socket.IO beginner mistakes.

---

## Folder Structure

```
client/
  ├── src/
  │   ├── components/
  │   ├── store/
  │   ├── services/
  │   └── socket/

server/
  ├── controllers/
  ├── routes/
  ├── models/
  ├── middleware/
  └── socket/
```

---

## Getting Started

### Prerequisites

* Node.js
* MongoDB

### Clone Repository

```
git clone <repository-url>
cd realtime-chat-app
```

### Backend Setup

```
cd server
npm install
npm run dev
```

### Frontend Setup

```
cd client
npm install
npm run dev
```

---

## Environment Variables

### Server

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLIENT_URL=http://localhost:5173
```

---

## Key Engineering Takeaways

* Real-time apps fail because of **state mismanagement**, not sockets
* WebSockets should handle events, not replace REST
* Authentication must be shared, not duplicated
* Socket cleanup is not optional

---

## Planned Improvements

* Message delivery acknowledgments
* Read receipts and typing indicators
* Redis adapter for horizontal scaling
* Rate limiting and abuse protection
* Group chats

---

## Status

Actively evolving. Built with scalability and correctness in mind.

---

## Author

**Abdullah Jutt**
Software Engineering Student | Full-Stack Developer

---

If you're learning real-time systems and avoiding WebSockets, you're postponing an essential skill.
