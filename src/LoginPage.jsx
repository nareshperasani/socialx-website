import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import {useHistory} from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
      },[]);

    const signIn = (e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message));
    };

    const register = (e)=>{
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            
            if(auth){
                history.push("/")
            }
        })
        .catch((error)=>alert(error.message));
    };

    return (
        <div className="loginPage">
            <Link to="/">
                <img className="loginPage_logo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="loginPage_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type="text" ref={inputRef} value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

                    <button className="signIn_button" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="create_button" type="submit" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default LoginPage;
