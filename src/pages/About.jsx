import React from 'react'

export default function About() {

const Names = [
{
    title: "About me",
    name: "Shahzaib Shahid",
    role: "Front-End Developer",
    img: "/images/profile.jpg",
    desc: `I'm a passionate front-end developer with hands-on experience in building responsive and interactive web applications.
    I specialize in modern front-end technologies including HTML, CSS, JavaScript, React and Next.js.
    I enjoy leveraging tools like Sass, Tailwind and Framer Motion to build beautiful UI.
    I'm always eager to learn new frameworks and explore modern web technologies.`
}
]

return (
<div>
  <div className='transiton-all duration-300 ease-in-out '>  
      {Names.map((item,index)=>(
      <div key={index} className="flex flex-col items-center mt-20 px-6 mb-22">

          {/* Title Section */}
          <div className="bg-[linear-gradient(100deg,#000000,#131925,#141f58)] w-full flex justify-center p-3 rounded-lg mb-2">
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
            className="w-80 h-80 object-cover rounded-full shadow-lg"
            />

            <div className="text-center md:text-left">

              <h3 className="font-bold text-4xl mb-2 text-center">
              {item.name}
              </h3>

              <h4 className="text-gray-400 mb-4 text-center">
              {item.role}
              </h4>

              <p className="text-gray-300 leading-relaxed mb-4">
              {item.desc}
              </p>

            </div>

          </div>
      </div>
      ))}
  </div>
</div>
)
}