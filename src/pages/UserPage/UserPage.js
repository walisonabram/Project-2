import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./UserPage.css";

function UserPage() {
  return (
    <div className="userPage">
      <Header />
      <Navbar />
        <h1>USERPAGE</h1>
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
          <select>
              <option value='read'> livro que eu li</option>
              <option value='reading'> livro que estou lendo</option>
              <option value='want-to-read'> livro que eu quero ler</option>
          </select>

      </div>
    </div>
  );
}

export default UserPage;
