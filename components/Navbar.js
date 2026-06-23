"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false);

  return (
    <nav className="bg-gray-950 text-white flex justify-between px-4 md:h-16 items-center select-none flex-col md:flex-row">
      <div >
        <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
          <img src="tea.gif" width={44} alt="" className="invertImg relative bottom-[0.3rem]" />
          <span className="text-xl md:text-base my-3 md:my-0">Get Me A Chai!</span>
        </Link>
      </div>
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div className='relative flex justify-center items-center text-xs md:block gap-4 select-none flex-col md:flex-row'>
        {session && <>
          <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
            setTimeout(() => {
              setShowdropdown(false)
            }, 150);
          }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Welcome {session.user.email}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button>
          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[8.30rem] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="p-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 items-center w-full p-2 rounded hover:bg-gray-600 hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 items-center w-full p-2 rounded hover:bg-gray-600 hover:text-white">Your Page</Link>
              </li>

              <li>
                <a onClick={() => signOut()} href="#" className="block px-4 py-2 items-center w-full p-2 rounded hover:bg-gray-600 hover:text-white">Sign out</a>
              </li>
            </ul>
          </div></>}



        {session && <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { signOut() }}>LogOut</button>}

        {!session && <Link href={"/login"}>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar
