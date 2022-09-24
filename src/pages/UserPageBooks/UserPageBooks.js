import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import usersApi from "../../api/ironrest.api";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./UserPageBooks.css";

function UserPageBooks() {
  const [readBooks, setReadBooks] = useState();
  const [readingBooks, setReadingBooks] = useState();
  const [wantReadBooks, setWantReadBooks] = useState();
  const [listName, setListName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const { _id } = useParams();
  
  useEffect(() => {
    usersApi
      .getUser(_id)
      .then((response) => {
          setReadBooks(response.data.books);
      })
      .catch((error) => window.alert("Error!"));
    usersApi
      .getUser(_id)
      .then((response) => {
          setReadingBooks(response.data.booksReading);
      })
      .catch((error) => window.alert("Error!"));
    usersApi
      .getUser(_id)
      .then((response) => {
          setWantReadBooks(response.data.booksWant);
      })
      .catch((error) => window.alert("Error!"));
  }, [_id]);

  const changeBook = (e) => {
    e.preventDefault();
    if (listName === 'Read') {
      usersApi.addReadBook(bookTitle, _id)
          .then(() => {
              setReadBooks([...readBooks, bookTitle])
              setBookTitle('')
          })
          .catch((error) => console.log("Error!", error));
    } else if (listName === 'Reading') {
      usersApi.addReadingBook(bookTitle, _id)
          .then(() => {
              setReadingBooks([...readingBooks, bookTitle])
              setBookTitle('')
          })
          .catch((error) => console.log("Error!", error));
    } else if (listName === 'Want') {
      usersApi.addWantBook(bookTitle, _id)
          .then(() => {
              setWantReadBooks([...wantReadBooks, bookTitle])
              setBookTitle('')
              console.log(wantReadBooks)
          })
          .catch((error) => console.log("Error!", error));
    }
  };
  
  return (
    <div className="userPage">
      <Header />
      <Navbar />
      <h1>MY LIBRARY</h1>
      <div className="lists-container">
        <div className="book-list">
          <h3>READ</h3>
          {readBooks &&
            readBooks.map((book) => {
              return <li key={book}>{book}</li>;
            })}
        </div>

        <div className="book-list">
          <h3>READING</h3>
          {readingBooks &&
            readingBooks.map((book) => {
              return <li key={book}>{book}</li>;
            })}
        </div>

        <div className="book-list">
          <h3>WANT TO READ</h3>
          {wantReadBooks &&
            wantReadBooks.map((book) => {
              return <li key={book}>{book}</li>;
            })}
        </div>
      </div>

      <div>
        <form className="form-select" onSubmit={changeBook}>
          <label>
            <em>ADD BOOK: </em>
          </label>
          <input value={bookTitle} onChange={(event) => setBookTitle(event.target.value)} type="text" placeholder="Book Title" />
          <select
            name="Book"
            value={listName}
            onChange={(texto) => setListName(texto.target.value)}
          >
            <option value="">Select</option>
            <option value="Read">Read Books</option>
            <option value="Reading">Books I'm Reading</option>
            <option value="Want">Books I Want to Read</option>
          </select>
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  );
}

export default UserPageBooks;
