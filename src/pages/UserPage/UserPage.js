import { useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./UserPage.css";


function UserPage() {
  const [books, setBooks] = useState();
  const changeBook = e =>{
    e.preventDefault();
    alert("book changed for"+ books)
  }
  return (
    <div className="userPage">
      <Header />
      <Navbar />
      <h1>MY LIBRARY</h1>
      <div className="lists-container">
        <div className="book-list">
          <h3>READ</h3>
        </div>

        <div className="book-list">
          <h3>READING</h3>
        </div>

        <div className="book-list">
          <h3>WANT TO READ</h3>
        </div>
      </div>

      <div>
      <form onSubmit={changeBook}>
          <label>
            <em>BOOKS: </em>
          </label>
          <select name="Book" value={books} onChange= {texto => setBooks(texto.target.value)}>
            <option value="">Select</option>
            <option value="1">Read Books</option>
            <option value="2">Books I'm Reading</option>
            <option value="3">Books I Want to Read</option>
          </select>
          <button type= "submit">CONFIRM</button>
          <alert>Book Selected</alert>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
