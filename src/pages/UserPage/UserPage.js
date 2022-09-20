import { useState } from "react";
import Header from "../../components/Header/Header";
import "./UserPage.css";


function UserPage() {
  const [books, setBooks] = useState();
  const trocarLivro = e =>{
    e.preventDefault();
    alert("livro trocado para"+ books)
  }
  return (
    <div className="userPage">
      <Header />
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
          <button type= "submit">CONFIRMAR</button>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
