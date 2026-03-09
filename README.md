# Book Tracker

A personal book tracking web app to keep track of the books you've read, your notes, ratings, and cover images. Covers are fetched from the [Open Library API](https://openlibrary.org/dev/docs/api/covers).

## Features
- Add new books with title, notes, rating, and date read
- Edit existing books
- Delete books from your list
- View book covers using Open Library Covers API
- Star rating display for visual feedback
- Responsive and user-friendly interface

## Technologies
- Node.js
- Express.js
- EJS templating
- PostgreSQL
- Axios
- HTML, CSS 

## Database Setup
Before running the app, make sure you have PostgreSQL installed and running.

1. Create a database named `booklist` (or any name you prefer):

```sql
CREATE DATABASE booklist;

-- Connect to the database you created
\c booklist

-- Create the books table
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) DEFAULT 'Unknown Author',
    notes TEXT,
    date_read DATE,
    rating INTEGER,
    cover_url TEXT
);
```

Installation & Running the App
Follow these steps to get the app running locally:

```bash
# Clone the repository
git clone <your-repo-url>
cd <your-project-folder>

# Install dependencies
npm install

# Start the server
nodemon index.js

# Open in browser
http://localhost:3000
```