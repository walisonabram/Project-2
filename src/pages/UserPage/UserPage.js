import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import usersApi from '../../api/ironrest.api'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./UserPage.css";


function UserPage() {
  
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
          <button type="submit">Login</button><br />
          <label>Don't have Username</label>
          <Link to='/register'>
           <button>Register</button>
          </Link>
        </form>
      </div>
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
    </div>
  );
}

export default UserPage;
