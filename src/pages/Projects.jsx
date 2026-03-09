import React from 'react'

export default function Projects() {

const openProjects = () => {
  window.open("https://vercel.com/shahzaibs-projects-16eb6656", "_blank")
}

return (

<div className="bg-[linear-gradient(100deg,#000000,#131925,#141f58)] p-6 m-4 mt-10 mb-10 rounded-lg mt-20 mb-50">
  <div className="text-center">
    
    <h1 className="text-4xl font-bold mb-4">
    Featured Projects
    </h1>
    <p className="text-gray-300 max-w-2xl mx-auto">
    Here are some of the projects I've worked on that showcase my skills and experience.
    </p>

    <div
    className="mt-10 bg-[linear-gradient(260deg,#000000,#131925,#141f58)] max-w-md mx-auto rounded-lg p-8 cursor-pointer hover:scale-105 transition duration-300 "
    onClick={openProjects}
    >
        <div className="flex flex-col items-center gap-4">
          <img
          src="/images/vercel.jpg"
          alt="Vercel"
          className="w-40 rounded-lg"
          />

          <p className="text-lg text-gray-200">
          Vercel link to see all my Projects:
          </p>
        </div>
    </div>
  </div>
</div>

)
}