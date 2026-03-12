import React from 'react'

export default function Projects() {

  const openProjects = () => {
    window.open("https://vercel.com/shahzaibs-projects-16eb6656", "_blank")
  }

  return (
    <div className="bg-gradient-to-r from-[#000000] via-[#131925] to-[#141f58] p-8 md:p-16 rounded-2xl mt-32 mb-32">
      <div className="text-center max-w-5xl mx-auto">

        {/* Section Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-[linear-gradient(99deg,rgba(216,205,205,0.747),rgb(0,102,255))] bg-clip-text text-transparent">
          Featured Projects
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Here are some of the projects I've worked on that showcase my skills and experience.
        </p>

        {/* Project Card */}
        <div
          className="bg-[#1c2433] p-6 md:p-10 rounded-2xl shadow-xl cursor-pointer hover:scale-[1.03] transition-transform duration-300 max-w-md mx-auto"
          onClick={openProjects}
        >
          <div className="flex flex-col items-center gap-6">

            {/* Project Image */}
            <img
              src="/images/vercel.jpg"
              alt="Vercel Projects"
              className="w-full h-48 md:h-60 object-cover rounded-xl shadow-lg"
            />

            {/* Project Info */}
            <p className="text-gray-200 text-center text-lg md:text-xl leading-relaxed">
              Click below to explore all my projects on Vercel.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              View Projects
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}