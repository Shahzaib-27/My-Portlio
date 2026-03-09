import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function Header() {

  const navigate = useNavigate();

  const HeaderTitles = [
    { title:"Home" , path:"/"},
    { title:"About" , path:"/aboutpage"},
    { title:"Skills" , path:"/skillspage"},
    { title:"Experience" , path:"/experiencepage"},
    { title:"Projects" , path:"/projectspage"},
    { title:"Contact" , path:"/contactpage"},
  ]

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#0f141d] border-b border-gray-600 transition-all duration-300 ease-in-out">
      <header className="max-w-7xl mx-auto p-4">
        {/* Top bar */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className='flex justify-between items-center cursor-pointer'
          onClick={() => navigate("/")}>
            <img src="/images/portfolio.png" alt="random_img" className='w-10 mr-2' />
            <h1 className="text-white text-xl font-bold">PortFlio</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {HeaderTitles.map((item,index) => (
              <Link
                key={index}
                to={item.path}
                className="text-white text-lg hover:text-cyan-400 transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="text-white lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu size={30}/>
          </button>

        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`lg:hidden mt-4 flex flex-col space-y-4 transition-all duration-500 ease-in-out
            ${open ? "opacity-100 max-h-96 translate-y-0" : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"}`}
        >
          {HeaderTitles.map((item,index) => (
            <Link
              key={index}
              to={item.path}
              onClick={()=>setOpen(false)}
              className="text-white text-lg hover:text-cyan-400 transition-all"
            >
              {item.title}
            </Link>
          ))}
        </div>

      </header>
    </nav>
  )
}