import React from 'react'
import { Mail } from 'lucide-react'

export default function HeroScetion() {
  return (
    <div className="flex justify-center items-center text-center mt-32 px-6 mb-20">
      <div>

        <h1 className="font-medium text-6xl bg-[linear-gradient(99deg,rgba(216,205,205,0.747),rgb(0,102,255))] bg-clip-text text-transparent mb-10">
          Shahzaib Shahid
        </h1>

        <h5 className="mb-6 text-2xl text-gray-300">
          Front-End Developer
        </h5>

        <p className="mb-10 text-lg text-gray-400">
          Passionate Front-End Developer dedicated to <br />
          building scalable, efficient and creative solutions
        </p>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 mx-auto ease-in-out cursor-pointer hover:scale-110 mb-20">
            <Mail size={20}/>
          Hire Me
        </button>

      </div>

    </div>
  )
}