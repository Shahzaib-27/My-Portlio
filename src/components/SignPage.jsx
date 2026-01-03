import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignPage.css'

export default function Signup() {

  const [name, setname] = useState('');
  const [passw, setpassw] = useState('');
  const [error, seterror] = useState('');

  const navigate = useNavigate();

  const handle_SIgn_up_info = (e) => {
    e.preventDefault();

    localStorage.setItem("username", name);
    localStorage.setItem("password", passw);


    const savedName = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");


    if (name === savedName && passw === savedPass) {
      navigate('/loginpage');
    } else {
      seterror("INVALID USERNAME OR PASSWORD");
      navigate('/')
    }
  };

  return (
    <header className='move_outer_section_signup'>
      <div className='outer_section_signup'>
        <div className='login_box_signup'>
          <div className='contaoner_link'>
            <form onSubmit={handle_SIgn_up_info}>

              <h2>Sign UP</h2>

              <input
                type="text"
                placeholder='Username'
                required
                onChange={(e) => setname(e.target.value)}
              />

              <input
                type="password"
                placeholder='Password'
                required
                onChange={(e) => setpassw(e.target.value)}
              />

              <h3>Sign In To Proceed</h3>
              <button>Sign Up</button>

              <p style={{ color: "red" }}>{error}</p>

            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
