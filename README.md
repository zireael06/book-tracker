# Book Tracker

A full-stack book tracking application built with **Node.js, Express, PostgreSQL, EJS, and the OpenLibrary API**.

Book Tracker allows users to create and manage a personal reading list. When adding a book, the application automatically retrieves the author and cover image from the OpenLibrary API and stores the information in PostgreSQL.

## Live Demo

🚀 [Try the application](https://book-tracker-d6k8.onrender.com)

> **Demo note:** The application is hosted on Render's free tier, so the first visit may take around a minute while the service wakes.

## Features

- Add books to a personal reading list
- Automatically fetch book authors and cover images
- Store book data in PostgreSQL
- View all saved books
- Edit book notes, ratings, and reading dates
- Delete books from the reading list
- Responsive web interface
- Server-side rendering with EJS templates
- Full CRUD functionality

## Engineering Highlights

- Uses parameterized PostgreSQL queries for CRUD operations
- Keeps database configuration outside the source code using environment variables
- Returns explicit 404 and 500 responses for missing records and database or API failures

## Screenshots

### Homepage

![Book Tracker Homepage](screenshots/homepage.png)

### Edit Book Page

![Book Tracker Edit Page](screenshots/edit-book.png)

## Tech Stack

### Backend

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- Axios
- dotenv

### Frontend

- EJS templates
- HTML5
- CSS3

### API Integration

- OpenLibrary API for book information and cover images

## Local Setup

1. Clone the repository.
2. Run `npm install`.
3. Create a PostgreSQL database.
4. Run `schema.sql` against the database.
5. Copy `.env.example` to `.env` and update `DATABASE_URL`.
6. Run `npm run dev`.

## Database

The application uses a PostgreSQL `books` table. Its structure is included in `schema.sql`.
