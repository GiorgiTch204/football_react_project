import React from "react";
import { useState } from "react";
import "../RegisterForm/RegisterForm.css";

export default function Register(){
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword] = useState("");

    function handleRegister(e){
        e.preventDefault();

        if(!firstName || !lastName || !email || !password){
            alert("Please fill all fields!");
        }
    }

    return(
        <div className="register-container">
            
        </div>
    )

}