import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import usersApi from '../../api/ironrest.api'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./UserPage.css";


function UserPage() {
  const [books, setBooks] = useState();
  const trocarLivro = e =>{
    e.preventDefault();
    alert("book added in "+ books)
  }
  const [username, setUsername] = useState("");
  const [usersList, setUsersList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    usersApi.getUsers()
    .then((response) => {
      setUsersList(response.data)
    })
    .catch((error) => window.alert('Error!'))
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const findUser = usersList.find((user) => user.username === username)

    findUser ? navigate(`/user-page/${findUser._id}`) : window.alert("User not found");   
  };

  return (
    <div className="userPage">
      <Header />
      <Navbar />
      <div className="form-container">
        <form className="form-login" onSubmit={handleSubmit}>
          <label>I have Username: </label>
          <input
          type="text"
          placeholder="@Username"
          autoFocus
          required
          onChange={(event) => setUsername(event.target.value)}
          value={username}>
          </input>
          <button type="submit">Login</button>
        </form>
      </div>
      <h2>MY LIBRARY</h2>
      <h3>READ</h3>
      <div className="book-list"></div>
      <h3>READING</h3>
      <div className="book-list"></div>
      <h3>WANT TO READ</h3>
      <div className="book-list"></div>
      <div>
        <form onSubmit={trocarLivro}>
          <label>
            <em>BOOKS: </em>
          </label>
          <select name="Book" value={books} onChange= {texto => setBooks(texto.target.value)}>
            <option value="">Selecione</option>
            <option value="1">livro que eu li</option>
            <option value="2"> livro que estou lendo</option>
            <option value="3">livro que eu quero ler</option>
          </select>
          <button type= "submit">CONFIRM</button>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
