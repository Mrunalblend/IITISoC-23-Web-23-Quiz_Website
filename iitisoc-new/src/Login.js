
import React, {useState} from "react";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [code, setCode] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        
    }

    return (
        <div className="auth-form-container">
            <h2> Login  </h2>
     <form className="login-form"  onSubmit={handleSubmit} action="/empdata" method="POST">
        <label htmlFor="email"> email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
        <label htmlFor="password">If you are an Admin, please enter your code</label>
        <input value={code} onChange={(e) => setCode(e.target.value)} type="password" placeholder="Admin_number#XXX" id="pass" name="pass" />
        <button type="submit"> Log In</button>
     </form>
     <button className="link-btn" onClick={() => props.onFormSwitch('Register')}> Don't have an account yet? Register here. Its free!</button>
     </div>
    )
  }