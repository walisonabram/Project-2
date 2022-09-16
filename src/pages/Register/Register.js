import Header from '../../components/Header/Header';
import './Register.css';
import Img from '../../assets/images/paper1.png'

function Register() {
    return(
        <div className='register-container'>
            <Header />
            <div className='form-container'>
                <div className='form'>

                <label htmlFor='createuser'>Don't have Username</label>
                <input type='text' id='createuser' name='createuser'></input>
                <button>Create User</button><br />
                <label htmlFor='login'>I have Username</label>
                <input type='text' id='login' name='login'></input>
                <button>Login</button>
                </div>
                
                    <img className='img' src={Img} alt='img-paper' />
                
            </div>
        </div>
    )
}

export default Register;