import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./LoginPage.css"

export default function LoginPage() {

  const [user, setusername] = useState('');
  const [pass, setPassword] = useState('');
  const [error, seterror] = useState('');

  const navigate = useNavigate();

  const handleinfo = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (user === savedUser && pass === savedPass) {
      navigate("/Portflio");

      
    } else {
      seterror("Invalid Username or Password");
      navigate('/')
    }
  };

  return (
    <header className='move_outer_section'>
      <div className='outer_section'>
        <div className='login_box'>
          <div className='contaoner_link'>
            <form onSubmit={handleinfo} >

              <h2>Login Page</h2>

              <input
                type="text"
                placeholder='Username'
                required
                onChange={(e) => setusername(e.target.value)}
              />

              <input
                type="password"
                placeholder='Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* <h3>Don't have an account? Sign up first</h3> */}
              <button > Login </button>

            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
