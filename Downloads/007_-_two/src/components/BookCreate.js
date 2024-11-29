import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const { count, incrementValue } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <h3>{count}</h3>
      <button onClick={incrementValue}> Click here </button>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
