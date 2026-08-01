import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();
console.log(process.env.DB_NAME);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const result = await db.query(
          "SELECT * FROM books ORDER BY date_read DESC"
        );
        res.render("index.ejs",{
          listTitle: "My reading list",
        listItems: result.rows,
        });

      } catch (err) {
        console.error(err)
        res.status(500).send("Database error")
      }        
});

app.post("/add", async (req, res) => {

  try {
    const title = req.body.title.trim();
    const rating = parseInt(req.body.rating, 10);
    const notes = req.body.notes.trim();
    const date_read = req.body.date_read;

    let author = "Unknown Author";
    let cover_url = null;

    const bookInfo = await axios.get(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
    );


    if (bookInfo.data.docs.length > 0) {
      const book = bookInfo.data.docs[0];
      author = book.author_name?.[0] || author;
      cover_url = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null;
    }


    const result = await db.query(
      "INSERT INTO books (title, author, notes, date_read, rating, cover_url) VALUES ($1,$2, $3, $4, $5, $6)",
      [title, author, notes, date_read, rating, cover_url]
    );
    
    res.redirect("/");    
  } catch (err) {
    console.error(err)
    res.status(500).send("Failed to add book")    
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id, 10)

    const result = await db.query("SELECT * FROM books WHERE id = $1", [bookId]);
    if (result.rows.length === 0) {
      return res.status(404).send("Book not found");
    }

    res.render("edit.ejs", {
      book: result.rows[0]
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch book details");
  }
});


app.post("/edit", async (req, res) => {
  try {
    const bookId = parseInt(req.body.id, 10);
    const notesUpdated = req.body.notes.trim();
    const ratingUpdated = parseInt(req.body.rating, 10) || null;
    const dateUpdated = req.body.date_read || null;

    if (!bookId) {
      return res.redirect("/");
    }

    const result = await db.query(
      "UPDATE books SET notes = $1, rating = $2, date_read = $3 WHERE id = $4",
      [notesUpdated, ratingUpdated, dateUpdated, bookId]
    ); 

    if (result.rowCount === 0) {
      return res.status(404).send("Book not found");
    }

    res.redirect("/");
  } catch (err) {
      console.error(err);
      res.status(500).send("Failed to edit book");    
  }
});



app.post("/delete", async (req, res) => {
  try {
    const bookId = parseInt(req.body.deleteItemId);
    const result = await db.query("DELETE FROM books WHERE id = $1", [bookId]);

    if (result.rowCount === 0) {
      return res.status(404).send("Error item not found.");
    }

    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting item from database.");
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
