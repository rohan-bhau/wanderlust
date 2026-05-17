'use client'
import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import React from 'react'
import toast from 'react-hot-toast'
import { FaArrowRight } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'

const BookingCard = ({ destination }) => {
     const {_id,destinationName,country,category,price,duration,departureDate,imageUrl,description}=destination
 const { data: session } =  authClient.useSession()
  const user = session?.user
//   console.log(user)
    // const date = new Date("MM/dd/yyyy")
    // console.log(date)

    const handleBooking = async() => {
          if (!user) {
    alert("Please login first");
    return;
  }
        const bookingData = {
             userId: user?.id,
  userName: user?.name,
  userEmail: user?.email,
  destinationId: _id,
  destinationName,
  country,
  price,
  departureDate,
  imageUrl,
          bookingDate: new Date(),

        }
        // console.log(bookingData)

        const res = await fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json()
        toast.success("Booking Successfull")
        console.log('data after booking', data)
    }
    
  return (
        <div
  className="border border-[#eeeeee]/93 p-4 shadow-lg rounded-none bg-white  transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-[#15a1bf]/40 hover:bg-gradient-to-b   hover:from-white  hover:to-[#f4fcff]  group cursor-pointer"
>
  <p className='font-xl text-[#6c695d] transition-colors duration-300 group-hover:text-[#15a1bf]'>
    Starting from
  </p>

  <h2
    className="font-bold text-3xl  text-[#15a1bf]  transition-all  duration-300  group-hover:scale-105"
  >
    ${price}
  </h2>

  <p className='font-xl text-[#6c695d] mb-5'>
    Per Person
          </p>
          
          <p className='font-xl text-[#6c695d] transition-colors duration-300 group-hover:text-[#15a1bf] mb-2'>Departure Date:</p>

  <p
    className=" border  p-2  bg-[#eeeeee]/95  rounded-lg  mb-5  transition-all  duration-300  group-hover:bg-[#15a1bf]  group-hover:text-white"
  >
    {departureDate}
  </p>

  <div className='pt-5 border-t-2 mb-5'>
              <Button
                  onClick={handleBooking}
      className=" w-full bg-[#15a1bf] rounded-lg flex gap-2 items-center justify-center transition-all duration-300 hover:bg-[#0f89a2] hover:scale-[1.03] hover:shadow-lg"
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
  )
}

export default BookingCard
