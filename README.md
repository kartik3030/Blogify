# Blogify

A full‑stack blog application enabling users to create, edit, publish, and manage blog content with clean frontend–backend integration using JSON-based data storage.

---

## Table of Contents

* Overview
* Project Summary
* Features
* Tech Stack
* Architecture
* Data Handling
* API Endpoints
* Environment Variables
* Getting Started
* Project Structure
* Security
* Deployment
* Roadmap
* Screenshots
* LinkedIn Post
* Author
* License

---

## Overview

Blogify provides blog publishing capabilities with RESTful APIs and a responsive client interface.

---

## Project Summary

Full‑Stack Blog Application | Node & Express

Built and deployed a full‑stack blog application with a clean frontend–backend integration.

### Highlights

* RESTful API design using Express.js
* Structured backend routing and controllers
* Smooth data flow between frontend and backend
* Production deployment on Render

### Tech Stack

HTML, CSS, Tailwind CSS, JavaScript, Node.js, Express.js, EJS

Focused on real‑world backend logic, API design, and deployment.

---

## Features

* Create / Edit / Delete Blog Post
* View All Blogs
* View Single Blog
* Structured Routing
* Clean Frontend–Backend Integration
* Responsive UI

---

## Tech Stack

Frontend

* HTML
* CSS
* Tailwind CSS
* JavaScript
* EJS

Backend

* Node.js
* Express.js

Database

* JSON File‑based Storage

---

## Architecture

Client → REST API → Controller Layer → JSON Files

---

## Data Handling

Application uses local JSON files for persistent data storage and retrieval through structured backend controllers.

---

## API Endpoints

### Blog Routes

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | /api/blogs       | Fetch all blogs   |
| GET    | /api/blog/:id    | Fetch single blog |
| POST   | /api/blog/create | Create blog       |
| PUT    | /api/blog/:id    | Update blog       |
| DELETE | /api/blog/:id    | Delete blog       |

---

## Environment Variables

Create a `.env` file in the backend root directory:

```
PORT=
CLIENT_URL=
```

---

## Getting Started

### Clone Repository

```
git clone <REPO_URL>
```

### Backend Setup

```
cd BACKEND
npm install
npm run dev
```

### Frontend Setup

```
cd FRONTEND
npm install
npm start
```

---

## Project Structure

```
Blogify/
│
├── BACKEND/
│   ├── database/
│   │   ├── images/
│   │   ├── 01_broadcast.json
│   │   ├── 02_subscribeEmail.json
│   │   ├── 03_newBlog.json
│   │   ├── 04_createAcc.json
│   │   └── 01_homePage.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── FRONTEND/
│   ├── navbarRoutes/
│   │   ├── nav02_podcast.html
│   │   ├── nav03_upload.html
│   │   ├── nav04_chat.html
│   │   ├── nav05_signin.html
│   │   ├── nav06_CreateAcc.html
│   │   └── *.js
│   ├── views/
│   │   ├── nav01_article.ejs
│   │   ├── nav03_be_writer.ejs
│   │   └── page.ejs
│   ├── index.html
│   ├── 01_main.js
│   ├── 01_style.css
│   ├── input.css
│   └── output.css
│
├── node_modules/
├── package.json
└── README.md
```

---

## Security

* Input validation
* Controlled file read/write operations

---

## Deployment

Frontend: Render
Backend: Render

---

## Roadmap

* Rich Text Editor
* Image Upload Support
* Pagination
* Search & Filters

---

## LinkedIn Post

[https://www.linkedin.com/feed/update/urn:li:activity:7356705986419605504/](https://www.linkedin.com/feed/update/urn:li:activity:7356705986419605504/)

---

## Author

Kartik

---

## License

MIT License
