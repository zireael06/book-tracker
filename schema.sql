CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Unknown Author',
  notes TEXT,
  date_read DATE,
  rating INTEGER,
  cover_url TEXT
);
