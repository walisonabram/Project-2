import "./UserPage.css";

function UserPage() {
  return (
    <div className="userPage">
      <h1>USERPAGE</h1>
      <h3>READ</h3>
      <div className="book-list">

      </div>
      <h3>READING</h3>
      <div className="book-list">

      </div>
      <h3>WANT TO READ</h3>
      <div className="book-list">

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
