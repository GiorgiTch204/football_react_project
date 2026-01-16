import React from "react";
import { useState } from "react";
import "../LoginForm/LoginForm.css";

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleLogin(e) {
        e.preventDefault();
    
        if(!email || !password){
            alert("Please fill in all fields");
            return
        }
    }

    return(
        <div className="main-container">
            <form className="login-form">
                <p className="mainHeader">Log In</p>

                <input 
                    type="email" 
                    value={email} 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="logBtn" type="submit" onClick={handleLogin}>Log In</button>
            </form>
        </div>
    )
}