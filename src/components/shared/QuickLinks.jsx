'use client'
import { authClient } from '@/lib/auth-client'
import { Avatar, Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { GoPerson } from 'react-icons/go'

const QuickLinks = () => {
      const { data: session } =  authClient.useSession()
  const user = session?.user
  console.log(user)
    return (
        <div>
            {user ? <div className='flex items-center gap-3'>
                <Link href={'/profile'}>
                    <Avatar>
                                <Avatar.Image alt="John Doe" src={user?.image} />

        <Avatar.Fallback className="border-none bg-gradient-to-br from-pink-500 to-purple-500 text-white">
          {user.name.slice(0,2).toLocaleUpperCase()}
        </Avatar.Fallback>
                </Avatar>
                </Link>
                
                <Button variant='danger' className={'rounded-none'} onClick={async()=>await authClient.signOut()}>LogOut</Button>

        </div>: <ul className="flex items-center gap-4">
                <li className="flex gap-2 items-center font-semibold">
            <GoPerson />
            <Link href={"/signin"}>Login</Link>
          </li>
          <li className="font-semibold">
            <Link href={"/signup"}>SignUp</Link>
          </li>
        </ul>}
  </div>


  )
}

export default QuickLinks
