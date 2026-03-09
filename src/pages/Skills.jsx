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
    <div className="bg-[linear-gradient(100deg,#000000,#131925,#141f58)] m-5 p-6 rounded-lg mt-32 mb-32">

      <div className="text-gray-300 text-center">
        <h1 className="font-medium text-4xl mt-4 mb-4">
          Skills & Technology
        </h1>
        <p className="text-gray-400">
          Here are the technologies and tools I work with to bring ideas to life
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {Names.map((item,index)=>(
            <div key={index}>
              <h1 className="text-2xl cursor-pointer transition-all duration-300 hover:scale-110 hover:text-blue-500">
                {item.title}
              </h1>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}