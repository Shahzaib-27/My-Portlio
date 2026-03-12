import React from 'react'

export default function Experience() {

  const experiences = [
    {
      title: "React Frontend Developer | Self-Employed",
      period: `May 2024 - ${new Date().getFullYear()}`,
      desc: `
        • Built responsive websites using React, Tailwind CSS, and JavaScript.
        • Developed modern UI components using React.
        • Styled web pages with Tailwind CSS for consistency and scalability.
        • Applied component-based architecture and responsive design.
        • Used GitHub for version control and collaboration.`
    },

  ]

  return (
    <div className="bg-gradient-to-r from-[#000000] via-[#131925] to-[#141f58] mt-32 p-6 md:p-16 rounded-2xl mb-32 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Experience Header */}
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h1>
        <p className="text-center text-gray-400 text-lg md:text-xl mb-12">
          My professional journey and the experiences that have shaped my career
        </p>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c2433] p-6 md:p-10 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {item.title}
              </h2>

              <span className="text-blue-400 font-medium">{item.period}</span>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4 whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}