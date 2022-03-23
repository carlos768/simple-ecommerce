import { useState } from 'react'
import { post } from "axios"

const SignUp = () =>{

    const [uName, setUName] = useState("")
    const [uEmail, setUEmail] = useState("")
    const [uPass, setUPass] = useState("")

    const registerUser = () =>{
        const name = document.getElementById('username')
        const email = document.getElementById('email')
        const pass = document.getElementById('password')

        try {
            const res = post('http://localhost:3001/api/auth/register', {
                username: uName,
                email: uEmail,
                password: uPass
            })
            console.log(res);
            name.value = ""
            email.value = ""
            pass.value = ""
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="form">
        <input className="form-item" type="text" id="username" name="username" placeholder="username" onChange={(e) =>{setUName(e.target.value)}}/>
        <input className="form-item" type="email" id="email" name="email" placeholder="email" onChange={(e) =>{setUEmail(e.target.value)}}/>
        <input className="form-item" type="password" id="password" name="password" placeholder="password" onChange={(e) =>{setUPass(e.target.value)}}/>
        <button className="btn-reg" onClick={registerUser}>Sign Up</button>
        </div>
    )
}

export default SignUp