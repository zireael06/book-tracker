# Book Tracker

A full-stack book tracking application built with **Node.js, Express, PostgreSQL, EJS, and the OpenLibrary API**.

Book Tracker allows users to create and manage a personal reading list. When adding a book, the application automatically retrieves the author and cover image using the OpenLibrary API, then stores the information in a PostgreSQL database.

## Features

* Add books to a personal reading list
* Automatically fetch book authors and cover images
* Store book data in PostgreSQL
* View all saved books
* Edit book notes, ratings, and reading dates
* Delete books from the reading list
* Responsive web interface
* Server-side rendering with EJS templates
* Full CRUD functionality (Create, Read, Update, Delete)

## Screenshots

### Homepage

![Book Tracker Homepage](screenshots/homepage.png)

### Edit Book Page

![Book Tracker Edit Page](screenshots/edit-book.png)

## Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* pg (node-postgres)
* Axios
* dotenv

### Frontend

* EJS templates
* HTML
* CSS

### API Integration

* OpenLibrary API — used to retrieve book information and cover images

## Database

The application uses PostgreSQL.

Database:

```
booklist
```

Main table:

```
books
```

Table fields:

```
id
title
author
rating
notes
date_read
cover_url
```

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project folder:

```bash
cd book-tracker
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=booklist
DB_PASSWORD=your_password
DB_PORT=5432
```

Replace `your_password` with your PostgreSQL password.

## Running the Application

Start the server:

```bash
npm start
```

For development with automatic restarting:

```bash
npm run dev
```

The application will run at:

```
http://localhost:3000
```

## Project Structure

```
book-tracker
│
├── server.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
│
├── public
│   ├── assets
│   │   └── default-cover.jpg
│   └── styles
│       └── main.css
│
└── views
    ├── index.ejs
    ├── edit.ejs
    └── partials
        ├── header.ejs
        └── footer.ejs
```

## Future Improvements

* User authentication and personal accounts
* Search and filtering functionality
* Reading progress tracking
* Book categories and genres
* Cloud deployment
* Improved mobile experience

## Author

**Tim Baker**

Built as a full-stack development project to practise working with:

* REST APIs
* Server-side rendering
* PostgreSQL databases
* CRUD operations
* Environment configuration
