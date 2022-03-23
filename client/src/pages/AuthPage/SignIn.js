import { useState } from "react"
import { post } from "axios"

const SignIn = () => {
    const [uEmail, setUEmail] = useState("")
    const [uPass, setUPass] = useState("")

    const loginUser = () =>{
        const email = document.getElementById('email')
        const pass = document.getElementById('password')

        try {
            const res = post('http://localhost:3001/api/auth/login', {
                email: uEmail,
                password: uPass
            })
            console.log(res);
            email.value = ""
            pass.value = ""
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form">
        <input className="form-item" type="email" id="email" name="email" placeholder="email" onChange={(e) =>{setUEmail(e.target.value)}}/>
        <input className="form-item" type="password" id="password" name="password" placeholder="password" onChange={(e) =>{setUPass(e.target.value)}}/>
        <button className="btn-reg" onClick={loginUser}>Login</button>
        </div>
    )
}

export default SignIn