import { auth } from '@/lib/auth'
import { Button, Card } from '@heroui/react'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegClock, FaRegEye, FaRegTrashAlt } from 'react-icons/fa'
import { GrSchedule } from 'react-icons/gr'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { PiMapPinLineLight } from 'react-icons/pi'

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
    })

    const user = session?.user
    console.log(user)
    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`)
    const data = await res.json()
    console.log(data)

    if (!data || data.length === 0) {
        return (
            
             <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
      <h2 className="text-xl font-semibold mb-2">No data found</h2>
      <p className="text-gray-500 mb-6">You haven't booked any travel package. Please go to the Destinations page and book a travel package first</p>
      <Link href={'/destinations'}><button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer font-semibold">
        Book Travel
      </button></Link>
    </div>
        )
    }
  return (
      <div className='mt-25 mb-15 container mx-auto'>
          {/* 
          
          */}
          <h2 className='text-4xl font-bold mb-3'>My bookings</h2>
          <p className='text-lg text-[#6c696d] mb-10'>Manage and view your upcoming travels</p>

          <div>
              {
                  data.map(d => <div key={d._id}>
                      <Card className='border p-4 rounded-none mb-4 grid grid-cols-3 gap-5 bg-white transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-[#15a1bf]/40 hover:bg-gradient-to-r hover:from-white hover:to-[#f4fcff] group overflow-hidden'>
                          <div className='w-100 h-50'>                             
                          <Image src={d.imageUrl} width={400} height={200} alt={d.destinationName} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'></Image>
                          </div>
                          <div className='col-span-2'>
                              <h2 className='text-2xl font-bold mb-3  transition-colors duration-300 group-hover:text-[#15a1bf]'>{d.destinationName}</h2>
                              <p className='flex gap-1 items-center font-semibold text-[#6c696d] mb-2'><GrSchedule />Departure:{new Date(d.departureDate).toLocaleString("en-BD", {
    dateStyle: "medium",
  })}</p>
                              <p className='flex gap-1 items-center font-semibold text-[#6c696d] mb-2'> <FaRegClock />Booked on:{" "}
  {new Date(d.bookingDate).toLocaleString("en-BD", {
    dateStyle: "medium",
    timeStyle: "short",
  })}</p>
                              <p className='flex gap-1 items-center font-semibold text-[#6c696d] mb-2'> <PiMapPinLineLight />Location: {d.country}</p>
                              <div className='flex justify-between'>
                                  <p className='text-3xl font-bold text-[#15a1bf]     transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(21,161,191,0.45)]'>${d.price}</p>
                                  <div className='flex gap-3 items-center'>
                                      <Button variant='outline' className={' text-[#EF4444] border-[#EF4444] rounded-none transition-all duration-300 hover:bg-[#EF4444] hover:text-white hover:-translate-y-1 hover:shadow-lg'}><FaRegTrashAlt />Cancel</Button>
                                    <Link href={`/destinations/${d.destinationId}`}>  <Button className={'bg-[#15a1bf] rounded-none transition-all duration-300 hover:bg-[#1188a1] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(21,161,191,0.35)]'}><FaRegEye />View</Button></Link>
                                  </div>
                              </div>
                          </div>
                      </Card>
                  </div>)
              }
          </div>
    </div>
  )
}

export default MyBookingPage
