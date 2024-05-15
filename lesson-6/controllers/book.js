import Book from "../models/book.js";

async function getBooks(req, res, next) {
  try {
    const books = await Book.find({ favorite: true, genre: "Sci-Fi" });

    res.send(books);
  } catch (error) {
    next(error);
  }
}

async function getBook(req, res, next) {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    if (book === null) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.send(book);
  } catch (error) {
    next(error);
  }
}

async function createBook(req, res, next) {
  // Add Joi here
  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
    pages: req.body.pages,
  };

  try {
    const result = await Book.create(book);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
}

async function updateBook(req, res, next) {
  try {
    const { id } = req.params;

    // Add Joi here
    const book = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      year: req.body.year,
      pages: req.body.pages,
    };

    const result = await Book.findByIdAndUpdate(id, book, { new: true });

    if (result === null) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (result === null) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

export default { getBooks, getBook, createBook, updateBook, deleteBook };
