# Laravel Inertia.js + React + PostgreSQL

This project is a modern web application built with Laravel, Inertia.js, React, and PostgreSQL.

## Tech Stack
- **Laravel 11** – Powerful backend framework
- **Inertia.js** – Seamless server-side rendering with frontend framework flexibility
- **React** – Modern UI library for building interactive interfaces
- **PostgreSQL** – Reliable and scalable relational database

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/fajarhidayad/taskly.git
cd taskly
```

### 2. Install Dependencies
```bash
composer install
npm install
```

### 3. Set Up Environment Variables
Copy the `.env.example` file and update the database configuration:
```bash
cp .env.example .env
```
Update `.env`:
```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=taskly
// add according to what is in the local machine
DB_USERNAME=
DB_PASSWORD=
```

### 4. Generate Application Key
```bash
php artisan key:generate
```

### 4.5 Add Database in Postgres
Add new database in postgres with the name `taskly` 

### 5. Run Migrations
```bash
php artisan migrate
```

### 6. Serve the Application
```bash
composer run dev
```
Visit `http://localhost:8000` in your browser.

## Using Docker

### Set Up Environment Variables
Copy the `.env.example` file and update the database configuration:
```bash
cp .env.example .env
```
Update `.env`:
```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=taskly
// add according to what is in the local machine
DB_USERNAME=
DB_PASSWORD=
```

### Install Dependencies
```bash
npm install
```

### Build the react app
```bash
npm run build
```

### Run docker compose
```bash
docker compose up --build
```

### Run migration in docker
```bash
docker exec laravel_app php artisan migrate
```

Visit `http://localhost:8000` in your browser.
