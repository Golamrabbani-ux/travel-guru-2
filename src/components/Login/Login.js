import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { LoggeInuserContext } from '../../App';
import Header from '../Header/Header';
import {handleSignOut, createUserWithEmailAndPassword, initializedFramework, signInWithEmailAndPassword, signInWithFacebookPopup, signInWithGooglePopup } from './AuthManager';
import './Login.css';

const Login = () => {
    const [user, setUser] = useState({
        success: false,
        firstName: "",
        lastName: "",
        name: "",
        error: "",
        email: "",
        password: "",
        displayName: '',

    })
    const [newUser, setNewUser ] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(LoggeInuserContext)
    const { register, errors, watch, handleSubmit } = useForm();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    initializedFramework();

    const onSubmit = data => {
        if(newUser && data.email && data.password){
            createUserWithEmailAndPassword(data.firstName, data.lastName, data.email, data.password)
            .then(res =>{
                setUser(res);
                setLoggedInUser(res);
                history.replace(from)
            })
        }
        if(!newUser && data.email && data.password){
            signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from)
            })
        }
    };

    //handle google signIn
    const googleSignIn = () =>{
        signInWithGooglePopup()
        .then(res => {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from)
        })
    }

    //handle facebook signIn
    const fbSignIn = () =>{
        signInWithFacebookPopup()
        .then(res => {
            setUser(res);
            setLoggedInUser(res);
            if(res.user){
                history.replace(from)
            }
        })
    }

    let errorMessage;
    if(user.error){
        errorMessage = user.error;
    }
    console.log(errorMessage);

    return (
        <section className="login-sec justify-content-center">
            <Header/>
            <center>
            <div className='main-login-area border px-5 py-3 mt-5' >
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    {newUser && <input ref={register({required: true})} type="text" name="firstName" id="firstName" className="form-control my-2" placeholder='First Name'/>}
                    {errors.firstName && <span>First Name is required</span>}

                    {newUser && <input ref={register({required: true})} type="text" name="lastName" id="lastName" className='form-control my-2' placeholder="Last Name"/>}
                    {errors.lastName && <span>Last Name is required</span>}

                    <input ref={register({required: true, pattern: /\S+@\S+\.\S+/})} type="email" name="email" id="email" className='form-control my-2' placeholder="Email"/>
                    {errors.email && <span>Email is required</span>}

                    <input ref={register({ required: true })} type="password" name="password" id="password" className='form-control my-2' placeholder="Password"/>
                    {errors.password && <span>Password is required</span>}

                    {newUser && <input ref={register({ validate: (value) => value === watch('password')})} type="password" name="confirmPassword" id="confirmPassword" className='form-control' placeholder='confirm password'/>}
                    {errors.confirmPassword && <span>Password don't match</span>}

                    <input type="submit" value={newUser ? 'create an account' : 'Login'} className='w-100 button my-3'/>
                </form>

                <p>
                    <br/>
                    {newUser ? 'Already have an account?' :"Don't have any account"} 
                    <span className='mt-2' onClick={()=> setNewUser(!newUser)} className='toggle'> {newUser ? 'Login' : 'create an account'}</span>
                </p>
            </div>

            <div className="social-sign-area px-5 py-3 text-dark">
                <button onClick={googleSignIn} className="loginBtn loginBtn--google">
                    Login with Google
                </button>
                <button onClick={fbSignIn} className="loginBtn loginBtn--facebook">
                    Login with Facebook
                </button>
            </div>



            <div className="error text-danger">
                <p>{errorMessage}</p>
            </div>
            </center>
        </section>
    );
};

export default Login;