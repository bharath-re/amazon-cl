import { useState, useEffect, useContext } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext, { Provider } from "./context/books";

function App() {
  const [books, setBooks] = useState([]);

  const { count, incrementValue } = useContext(BooksContext);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response);
  };

  useEffect =
    (() => {
      fetchBooks();
    },
    []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.get(`http://localhost:3001/books/${id}`);
    console.log(response);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.get(`http://localhost:3001/books/${id}`, {});
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <div>{count}</div>
      <button onClick={incrementValue}> Click </button>
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
