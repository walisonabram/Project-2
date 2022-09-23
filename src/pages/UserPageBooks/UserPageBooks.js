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
    alert("book added in "+ books)
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
      console.log(userAPI)
    return (
        <div className="userPage">
          <Header />
          <Navbar />
          <h1>MY LIBRARY</h1>
          <div className="lists-container">
            <div className="book-list">
              <h3>READ</h3>
              {userAPI.books && userAPI.books.map((user) => {
                return <li key={user._id}>Livro:{user.books}</li>
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
          <form className="form-select" onSubmit={changeBook}>
              <label>
                <em>ADD BOOK: </em>
              </label>
              <input type='text' placeholder="Book Tittle"/>
              <select name="Book" value={books} onChange= {texto => setBooks(texto.target.value)}>
                <option value="">Select</option>
                <option value="Read Books">Read Books</option>
                <option value="Books I'm Reading">Books I'm Reading</option>
                <option value="Books I Want to Read">Books I Want to Read</option>
              </select>
              <button type= "submit">ADD</button>
            </form>
          </div>
        </div>
    );
}
    
    export default UserPageBooks;