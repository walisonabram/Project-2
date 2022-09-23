import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import usersApi from '../../api/ironrest.api'
import axios from 'axios';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./UserPageBooks.css";

function UserPageBooks() {
    const [books, setBooks] = useState();
    const changeBook = e =>{
    e.preventDefault();
    alert("book changed for"+ books)
}
    const [userAPI, setUserAPI] = useState({});
    const { _id } = useParams(); 

    useEffect(() => {
        axios
        .get(`https://ironrest.herokuapp.com/MyPersonalLibrary/${_id}`)
        usersApi.getUsers()
        .then((response) => {
          setUserAPI(response.data)
        })
        .catch((error) => window.alert('Error!'))
      }, []); 

    return (
        <div className="userPage">
          <Header />
          <Navbar />
          <h1>MY LIBRARY</h1>
          <div className="lists-container">
            <div className="book-list">
              <h3>READ</h3>
              {userAPI.books && userAPI.books.map((user) => {
            return <li key={user._id}>{user.books}</li>
        })}
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
            </form>
          </div>
        </div>
    );
}
    
    export default UserPageBooks;