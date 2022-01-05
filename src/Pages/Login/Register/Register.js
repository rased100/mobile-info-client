import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location);

    const { user, authError, registerUser, isLoading } = useAuth()
    console.log(user.email);
    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            swal('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, navigate)

        swal("Your Register Successfully Added");
        e.preventDefault()
    }
    return (
        <div>
            <Header></Header>
            <div className="row mb-5 d-flex justify-content-center align-items-center  mt-5">
                <div className="col-md-6 border border-1">
                    <h3 className="m-3">Please Register</h3>
                    {!isLoading && <form onSubmit={handleLoginSubmit} >
                        <input className="w-75 mb-1" type="text" name="name" placeholder="Your Name" onBlur={handleOnChange} />
                        <input className="w-75 mb-1" type="email" name="email" placeholder="Your Email" onBlur={handleOnChange} />
                        <input className="w-75 mb-1" type="password" name="password" placeholder="Your Password" onBlur={handleOnChange} />
                        <input className="w-75" type="password" name="password2" placeholder="ReType Your Password" onBlur={handleOnChange} />
                        <br />
                        <button className="px-3 py-1 w-25 mb-3 mt-1" type="submit">Register</button>
                        <br />
                        <Link to='/login'>Already have an Account ? Please login</Link>
                    </form>}
                    {isLoading && <Spinner animation="border" variant="info" />}
                    {/* {(user?.email) ? <p className="text-primary">success</p> : <p></p>} */}

                    {(authError) ? <p className=" text-danger">{authError}</p> : <p></p>}
                </div>



            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;