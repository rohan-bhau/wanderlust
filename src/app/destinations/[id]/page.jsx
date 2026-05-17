import DeleteDestination from '@/components/shared/DeleteDestination';
import EditDestination from '@/components/shared/EditDestination';
import { Button } from '@heroui/react';
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
        const res = await fetch(`http://localhost:5000/destination/${id}`)
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
             <div
  className="
    border border-[#eeeeee]/93
    p-4
    shadow-lg
    rounded-none
    bg-white
    transition-all
    duration-500
    ease-out
    hover:-translate-y-2
    hover:shadow-2xl
    hover:border-[#15a1bf]/40
    hover:bg-gradient-to-b
    hover:from-white
    hover:to-[#f4fcff]
    group
    cursor-pointer
  "
>
  <p className='font-xl text-[#6c695d] transition-colors duration-300 group-hover:text-[#15a1bf]'>
    Starting from
  </p>

  <h2
    className="
      font-bold
      text-3xl
      text-[#15a1bf]
      transition-all
      duration-300
      group-hover:scale-105
    "
  >
    ${price}
  </h2>

  <p className='font-xl text-[#6c695d] mb-5'>
    Per Person
  </p>

  <p
    className="
      border
      p-2
      bg-[#eeeeee]/95
      rounded-lg
      mb-5
      transition-all
      duration-300
      group-hover:bg-[#15a1bf]
      group-hover:text-white
    "
  >
    {departureDate}
  </p>

  <div className='pt-5 border-t-2 mb-5'>
    <Button
      className="
        w-full
        bg-[#15a1bf]
        rounded-lg
        flex
        gap-2
        items-center
        justify-center
        transition-all
        duration-300
        hover:bg-[#0f89a2]
        hover:scale-[1.03]
        hover:shadow-lg
      "
    >
      Book Now
      <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
    </Button>
  </div>

  <ul className='space-y-3'>
    <li className='flex gap-2 items-center text-gray-700 transition-all duration-300 group-hover:translate-x-1'>
      <IoMdCheckmark className='text-[#1E9E35]' />
      Free cancellation up to 7 days
    </li>

    <li className='flex gap-2 items-center text-gray-700 transition-all duration-300 group-hover:translate-x-1'>
      <IoMdCheckmark className='text-[#1E9E35]' />
      Travel insurance included
    </li>

    <li className='flex gap-2 items-center text-gray-700 transition-all duration-300 group-hover:translate-x-1'>
      <IoMdCheckmark className='text-[#1E9E35]' />
      24/7 customer support
    </li>
  </ul>
</div>
          </div>
    </div>
  )
}

export default DetailPage
