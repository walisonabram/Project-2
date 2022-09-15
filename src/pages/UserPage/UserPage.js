import './UserPage.css' 


function UserPage(props) {
    console.log('props',props)
    return (
        <div>
         <p>USERPAGE</p>
         <h1>READ <input type="button"></input></h1>
         <h2><input type="button"></input>READING <input type="button"></input></h2>
         <h3><input type="button"></input>I WANT TO READ </h3>
        </div>
    );
};



export default UserPage;