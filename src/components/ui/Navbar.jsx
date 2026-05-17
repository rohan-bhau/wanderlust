import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from '../shared/NavLink'
import { GoPerson } from 'react-icons/go';

const Navbar = () => {
  return (
   <div className='bg-gray-200 border-b-2 fixed w-full  z-40'>
      <div className="container mx-auto py-5 flex  justify-between items-center">
        {/* logo */}
        <div>
          <Link href={"/"}>
            <Image
              src={"/assets/Wanderlast.png"}
              height={150}
              width={150}
              alt="nav logo"
            />
          </Link>
        </div>

        {/* quick links */}

        <ul className="flex items-center gap-4">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/destinations"}>Destinations</NavLink>
          </li>
          <li>
            <NavLink href={"/booking"}>My Booking</NavLink>
          </li>
          <li>
            <NavLink href={"/admin"}>Admin</NavLink>
          </li>
        </ul>

        {/* signup and signin button */}

        <ul className="flex items-center gap-4">
          <li className="flex gap-2 items-center font-semibold">
            <GoPerson />
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="font-semibold">
            <Link href={"/signup"}>SignUp</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
