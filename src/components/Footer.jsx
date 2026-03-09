import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="bg-white text-black font-medium text-[20px] p-4 text-center ">
          <p >
              @ {new Date().getFullYear()} Shahzaib Shahid. All rights reserved.
          </p>
      </div>
    </footer>
  )
}
