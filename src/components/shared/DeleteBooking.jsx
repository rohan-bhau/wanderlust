'use client'
import { authClient } from '@/lib/auth-client'
import { AlertDialog, Button } from '@heroui/react'
import React from 'react'
import toast from 'react-hot-toast'
import { FaRegTrashAlt } from 'react-icons/fa'

const DeleteBooking = ({d}) => {
  const handleDelete = async () => {
      const {data:tokenData}=await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${d._id}`, {
            method: "DELETE",
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${tokenData?.token}`
            },
        })
        const data = await res.json()
        toast.error('Booking Cancelled')
        window.location.reload()
    }
  return (
           <AlertDialog>
<Button variant='outline' className={' text-[#EF4444] border-[#EF4444] rounded-none transition-all duration-300 hover:bg-[#EF4444] hover:text-white hover:-translate-y-1 hover:shadow-lg'}><FaRegTrashAlt />Cancel</Button>          <AlertDialog.Backdrop>
            <AlertDialog.Container>
              <AlertDialog.Dialog className="sm:max-w-[400px]">
                <AlertDialog.CloseTrigger />
                <AlertDialog.Header>
                  <AlertDialog.Icon status="danger" />
                  <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
                </AlertDialog.Header>
                <AlertDialog.Body>
                  <p>
                    This will permanently Cancel <strong>{ d.destinationName}</strong> and all of its
                    data. This action cannot be undone.
                  </p>
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button slot="close" variant="tertiary">
                    Cancel
                  </Button>
                  <Button onClick={handleDelete} slot="close" variant="danger">
                    Delete Booking
                  </Button>
                </AlertDialog.Footer>
              </AlertDialog.Dialog>
            </AlertDialog.Container>
          </AlertDialog.Backdrop>
        </AlertDialog>
  )
}

export default DeleteBooking
