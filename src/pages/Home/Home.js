import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import bookImg from '../../assets/images/png_magic_book_by_moonglowlilly_d5z1pgm-fullview.png'
import './Home.css'

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="information">
        <h1>Welcome</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim consectetur ullamcorper. Sed sollicitudin facilisis nisi, eu fermentum quam sodales ut. Nam id vestibulum augue. Maecenas pretium erat id est interdum fringilla.
        </span>
        <div className="btn">
            <button>Let's Start</button>
        </div>
        <div className="book">
            <img className="img-book" src={bookImg} alt="book-img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
