# Book Tracker

A full-stack book tracking application built with **Node.js, Express, PostgreSQL, EJS, and the OpenLibrary API**.

Book Tracker allows users to create and manage a personal reading list. When adding a book, the application automatically retrieves the author and cover image from the OpenLibrary API and stores the information in a PostgreSQL database.

## Live Demo

🚀 Try the application here:

https://book-tracker-d6k8.onrender.com

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
* HTML5
* CSS3

### API Integration

* OpenLibrary API – used to retrieve book information and cover images

## Database

The application uses a PostgreSQL database.

**Database table:**

```text
books