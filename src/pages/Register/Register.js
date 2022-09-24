import Header from "../../components/Header/Header";
import "./Register.css";
import Img from "../../assets/images/paper1.png";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const body = {
            name: name,
            username: user,
            books: [],
            booksReading: [],
            booksWant: []
        }

        axios
            .post('https://ironrest.herokuapp.com/MyPersonalLibrary', body)
            .then(() => {
                setName('');
                setUser('');

                navigate('/register')
            })
            .catch((error) => window.alert('Error!'))
    };

  return (
    <div className="register-container">
      <Header />
      <Navbar />
      <div className="form-container">
            <p>Here you can create your Username if you don't have it yet, if you have a Username, just log in!</p>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="createuser">Don't have Username</label>
                <input
                  type="text"
                  placeholder="Name"
                  autoFocus
                  required
                  onChange={(event) => setName(event.target.value)}
                  value={name}>
                </input>
                <input
                  type="text"
                  placeholder="@Username"
                  autoFocus
                  required
                  onChange={(event) => setUser(event.target.value)}
                  value={user}>
                </input>
                <button type="submit">Create Username</button><br />
                <label htmlFor="login">Have Username</label>
                <Link to='/user-page'>
                  <button>Login</button>
                </Link>

            </form>
        <img className="img" src={Img} alt="img-paper" />
      </div>
    </div>
  );
}

export default Register;
