import Header from "../../components/Header/Header";
import "./Register.css";
import Img from "../../assets/images/paper1.png";
import Navbar from "../../components/Navbar/Navbar";

function Register() {
  return (
    <div className="register-container">
      <Header />
      <Navbar />
      <div className="form-container">
            <p>Here you can create your Username if you don't have it yet, if you have a Username, just log in!</p>
            <form className="form">
                <label htmlFor="createuser">Don't have Username</label>
                <input type="text" id="createuser" name="createuser" placeholder="@Username" autoFocus required></input>
                <button type="submit">Create Username</button>
                <br />
                <label htmlFor="login">I have Username</label>
                <input type="text" id="login" name="login" placeholder="@Username" autoFocus required></input>
                <button type="submit">Login</button>
            </form>
        <img className="img" src={Img} alt="img-paper" />
      </div>
    </div>
  );
}

export default Register;
