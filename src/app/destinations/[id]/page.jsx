import BookingCard from '@/components/shared/BookingCard';
import DeleteDestination from '@/components/shared/DeleteDestination';
import EditDestination from '@/components/shared/EditDestination';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { IoMdArrowRoundBack, IoMdCheckmark } from 'react-icons/io';
import { PiCalendarBold, PiMapPinLineBold } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DetailPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
                authorization: `Bearer ${token}`
            }
        })
    const destination = await res.json()
    // console.log(destination)
        const {_id,destinationName,country,category,price,duration,departureDate,imageUrl,description}=destination

  return (
      <div className='mt-25 mb-10 container mx-auto'>
          <div className='flex justify-between items-center mb-5'>
              <Link href={'/destinations'} className='flex gap-2 items-center text-[#6C696D] hover:text-[#da0b0bf8]'><IoMdArrowRoundBack />Back to Destination</Link>
              <div className='flex gap-3'>
                  <EditDestination destination={destination} />
                  <DeleteDestination destination={destination} />
              </div>
          </div>
          <Image src={imageUrl} width={600} height={300} alt={destinationName} className='w-full h-[400px] object-cover pb-10 border-b border-[#eeeeee]' />
          
          <div className='grid grid-cols-3 pt-10 gap-5'>
              <div className='col-span-2'>
                  <div className="flex items-center gap-2 text-[#6C696D] font-semibold mb-2">
                            <PiMapPinLineBold /> {country}
                  </div>
                  
                  <p className="font-bold text-2xl transition-colors duration-300 group-hover:text-[#15a1bf]">
            {destinationName}
                  </p>
                        <div className="flex items-center gap-2 text-[#6c606d] font-semibold mb-5">
                            <PiCalendarBold /> <span>{duration}</span>
                          </div>

                  <h2 className='text-3xl font-bold mb-2'>Overview</h2>
                  <p className='text-[#6C696D] text-xl mb-5'>{description}</p>
                  
                  <h2 className='text-3xl font-bold mb-2'>Highlights</h2>
                  <div>
                      <ul className='grid grid-cols-2'>
                          <li className='flex gap-2 items-center'><IoMdCheckmark className='text-[#1E9E35]' />Luxury beachfront accommodation </li>
                          <li className='flex gap-2 items-center'><IoMdCheckmark className='text-[#1E9E35]' /> Visit Uluwatu Temple at sunset</li>
                          <li className='flex gap-2 items-center'><IoMdCheckmark className='text-[#1E9E35]' /> Traditional Balinese spa treatment</li>
                          <li className='flex gap-2 items-center'><IoMdCheckmark className='text-[#1E9E35]' /> Sunrise trek to Mount Batur</li>
                          <li className='flex gap-2 items-center'><IoMdCheckmark className='text-[#1E9E35]' /> Private beach dinner experience</li>
                      </ul>
                  </div>
        </div>
        
        {/* booking card */}
        <BookingCard destination={ destination} />
          </div>
    </div>
  )
}

export default DetailPage
