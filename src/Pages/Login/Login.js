import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useAuth from '../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, authError, loginUser, isLoading, signInWithGoogle } = useAuth()
    console.log(user.email);
    const location = useLocation()
    const navigate = useNavigate()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        swal('Your login successfully added')


        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)

    }
    return (

        <div>
            <Header></Header>
            <div className="row d-flex justify-content-center align-items-center mb-5">


                <div className="col-md-6 border border-1">

                    <h1 className="m-3">Please Login</h1>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <input className="w-75" type="email" name="email" required placeholder="Your Email" onBlur={handleOnChange} />
                        <input className="w-75" type="password" name="password" required placeholder="Your Password" onBlur={handleOnChange} />
                        <button className="px-3 py-1 w-25 m-3" type="submit">Login</button>
                        <br />
                        <Link className="" to='/register'>New in here? Please Register</Link>
                    </form>}
                    {isLoading && <Spinner animation="border" variant="info" />}
                    {/* {(user?.email) ? <p className="text-info">Success</p> : <p></p>} */}

                    {(authError) ? <p className="text-danger">{authError}</p> : <p></p>}


                    <button className="px-3 py-1 w-25 mb-3 mt-1" onClick={handleGoogleSignIn}>Google Sign In</button>


                </div>




            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;