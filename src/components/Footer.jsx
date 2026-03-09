import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/aboutpage" },
    { title: "Skills", path: "/skillspage" },
    { title: "Experience", path: "/experiencepage" },
    { title: "Projects", path: "/projectspage" },
    { title: "Contact", path: "/contactpage" },
  ];

   const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/shahzaibs_10/" },
    { name: "Linkedin", href: "https://www.linkedin.com/in/shahzaib-shahid-a010163a1/" },
    // { name: "Discord", href: "#" },
    // { name: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Brand */}
        <div onClick = { () => scrollTo({ top:0, behavior:"smooth" })} > 
          <span 
           onClick={() => navigate("/")} 
          className="flex cursor-pointer">
          <img src="/images/portfolio.png" alt="random_img" className='w-10 h-10 mr-2' />
          <h1 className="text-2xl font-bold text-white">PortFlio</h1>
          </span>
        </div>


        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-2xl mb-4 text-white">Quick Links:</h2>
          <ul className="space-y-2">
            {navLinks.map((item, index) => (
              <li key={index}>

                <Link
                  to={item.path}
                  className="hover:text-blue-400 transition-All duration-200 ease-in-out"
                  onClick = { () => scrollTo({ top:0, behavior:"smooth" })}
                >
                  
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="font-semibold text-2xl  mb-4 text-white">Follow Me:</h2>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
       <p className="mt-2 text-gray-400">@ {new Date().getFullYear()} Shahzaib Shahid. All rights reserved.</p>
      </div>
    </footer>
  );
}