'use client'
import { authClient } from '@/lib/auth-client'
import { AlertDialog, Button } from '@heroui/react'
import { redirect } from 'next/navigation'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

const DeleteDestination = ({ destination }) => {
  const handleDelete = async () => {
    const {data:tokenData}= await authClient.token()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${destination._id}`, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${tokenData?.token}`
      },
      
    })

    const data = res.json()
    redirect('/destinations')
    console.log('data after delete', data)
  }
  return (
       <AlertDialog>
       <Button className={'rounded-md border-[#ef4444] text-[#ef4444]  hover:bg-[#ef4444] hover:text-[#f0ebf1] flex gap-2 items-center transition-all'} variant='outline'><RiDeleteBin6Line />Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{ destination.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  )
}

export default DeleteDestination
