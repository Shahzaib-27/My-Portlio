import React from 'react'

const Names = [
  { title:"HTML" },
  { title:"CSS" },
  { title:"JavaScript" },
  { title:"TypeScript" },
  { title:"React" },
  { title:"GitHub" },
  { title:"Tailwind" },
]

export default function Skills() {
  return (
    <div className="bg-[linear-gradient(100deg,#000000,#131925,#141f58)] p-8 md:p-16 rounded-2xl mt-32 mb-32 shadow-lg">
      <div className="text-center text-gray-300 max-w-5xl mx-auto">

        <h1 className="font-bold text-4xl md:text-5xl mb-4 bg-[linear-gradient(99deg,rgba(216,205,205,0.747),rgb(0,102,255))] bg-clip-text text-transparent">
          Skills & Technology
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12">
          Here are the technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {Names.map((item,index)=>(
            <div
              key={index}
              className="bg-[#1c2433] hover:bg-blue-600 text-white p-4 rounded-xl shadow-md  transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <h1 className="text-2xl font-semibold text-center">
                {item.title}
              </h1>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}