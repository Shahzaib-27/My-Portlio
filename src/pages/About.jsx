import React from 'react'

export default function About() {

const Names = [
{
    title: "About me",
    name: "Shahzaib Shahid",
    role: "Front-End Developer",
    img: "/images/profile.jpg",
    desc: `I am a Front-End Web Developer who builds modern, responsive, and user-friendly websites. I specialize in creating clean and visually appealing user interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.

    I focus on writing clean, maintainable code and designing interfaces that work seamlessly on all devices, including mobile, tablet, and desktop. My goal is to help clients turn their ideas into fast, functional, and attractive web experiences.

    My core skills include:
      • Responsive Web Design.
      • Front-End Development with React.
      • JavaScript and React Applications.
      • UI Styling with Tailwind CSS.
      • Clean, Organized, and Maintainable Code.

    I am constantly learning new technologies and improving my development skills to deliver high-quality work. I am committed to clear communication, meeting deadlines, and providing solutions that align with client requirements.

    Whether you need a responsive website, a modern frontend interface, or help enhancing your web UI, I am ready to help bring your project to life.`
}
]

return (
<div>
  <div className='transiton-all duration-300 ease-in-out '>  
      {Names.map((item,index)=>(
      <div key={index} className="flex flex-col items-center mt-20 px-6 mb-22">

          {/* Title Section */}
          <div className="bg-[linear-gradient(100deg,#000000,#131925,#141f58)] w-full flex justify-center p-3 rounded-lg  mb-2">
            {/* linear-gradient(100deg,  #000000, #131925, #141f58) */}
            <h1 className="font-bold text-3xl text-white">
            {item.title}
            </h1>
          </div>

          {/* About Content */}
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-8xl bg-[linear-gradient(100deg,#000000,#131925,#141f58)] rounded-lg p-4 ">

            <img
            src={item.img}
            alt="profile"
            className="w-80 h-80 object-cover rounded-[30px] shadow-lg"
            />

            <div className="text-center md:text-left">

              <h3 className="font-bold text-4xl mb-2 text-center bg-[linear-gradient(99deg,rgba(216,205,205,0.747),rgb(0,102,255))] bg-clip-text text-transparent">
              {item.name}
              </h3>

              <h4 className="text-gray-400 mb-4 text-center">
              {item.role}
              </h4>

              <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
              {item.desc}
              </p>
              

            </div>

          </div>
              <div className="flex gap-4 mt-4">
  
              {/* View CV */}
              <a 
                href="/ShahzaibShahid.pdf" 
                target="_blank"
                className="bg-[linear-gradient(130deg,#000000,#131925,#141f58)] text-white p-4 rounded-lg transition-all duration-200 ease-in-out leading-relaxed hover:scale-110"
              >
                View CV
              </a>

              {/* Download CV */}
              <a 
                href="/ShahzaibShahid.pdf" 
                download
                className="bg-[linear-gradient(100deg,#000000,#131925,#141f58)] text-white p-4 rounded-lg transition-all duration-200 ease-in-out leading-relaxed hover:scale-110"
              >
                Download CV
              </a>

</div>
      </div>
      ))}
  </div>
</div>
)
}