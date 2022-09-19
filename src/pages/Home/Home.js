import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import bookImg from '../../assets/images/logo-home2.png'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <div className="information">
        <h1>Welcome to My Personal Library</h1>
        <span>
          Hello Reader! I know how hard it is to get organized when you're a book lover, here you'll be able to add books you've read, books you're reading and books you'd like to read!
        </span>
        <div className="book">
            <img className="img-book" src={bookImg} alt="book-img" />
        </div>
        <div className="btn">
            <Link to='/register'>
              <button>Let's Start</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
