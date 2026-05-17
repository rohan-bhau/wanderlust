'use client'
import { authClient } from '@/lib/auth-client'
import { Envelope, Eye, EyeSlash } from '@gravity-ui/icons'
import { Button, Card, Form, InputGroup, Label, TextField } from '@heroui/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { CiLock } from 'react-icons/ci'
import { FcGoogle } from 'react-icons/fc'
import { GoPerson } from 'react-icons/go'

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = async(e) => {
          e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())


        const { data, error } = await authClient.signIn.email({
        email:user.email, 
        password:user.password,
    })
        if (data) {
            alert("Login Successfull")
            redirect('/')
        }
        if (error) {
            alert(`Error message: ${error.message}`)
        }
        console.log({data, error})
    }

  return (
    <div className='mt-25 mb-15 max-w-7xl mx-auto'>
          <h2 className='text-center text-3xl font-bold mb-2'>Welcome Back</h2>
          <p className='text-center mb-4 text-[#6C696D]'>Resume your adventure with Wanderlust</p>
          <Card className=' border
    w-md
    rounded-none
    p-6
    bg-white
    transition-all
    duration-500
    ease-out
    hover:-translate-y-2
    hover:border-[#15a1bf]/40
    group'>
              <Form onSubmit={handleSubmit} className='space-y-2'>  
                  {/* email */}
                  <TextField className="w-full" type='email' name="email" isRequired>
      <Label>Email address</Label>
                      <InputGroup  className="
    border
    border-gray-200
    transition-all
    duration-300
    focus-within:border-[#15a1bf]
    focus-within:shadow-[0_0_0_4px_rgba(21,161,191,0.12)]
    hover:border-[#15a1bf]/60
    rounded-none
  ">
                          
        <InputGroup.Prefix>
          <Envelope className="size-4 text-muted" />
        </InputGroup.Prefix>
        <InputGroup.Input className="w-full" placeholder="name@email.com" />
      </InputGroup>
                  </TextField>
                  
                  {/* password */}
                      <TextField className="w-full " name="password" isRequired>
      <Label>Password</Label>
                      <InputGroup  className="
    border
    border-gray-200
    transition-all
    duration-300
    focus-within:border-[#15a1bf]
    focus-within:shadow-[0_0_0_4px_rgba(21,161,191,0.12)]
    hover:border-[#15a1bf]/60
    rounded-none
  ">
                          <InputGroup.Prefix>
          <CiLock  className="size-4 text-muted" />
        </InputGroup.Prefix>
        <InputGroup.Input
          className="w-full "
          type={isVisible ? "text" : "password"}
         placeholder='Create a Password'
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup >
                  </TextField>

                  <Button  className="
    w-full
    rounded-none
    bg-[#15a1bf]
    text-white
    transition-all
    duration-300
    hover:bg-[#1188a1]
    hover:shadow-[0_10px_30px_rgba(21,161,191,0.35)]
    hover:-translate-y-1
    active:scale-[0.98]
  " type='submit'>Sign in</Button>

                  <div className='grid grid-cols-3 mb-4'>
                      <span className='border-t mt-3'></span>
                  <span className='text-center text-[#6C696D]'>    Or sign up with</span>
                      <span className='border-t mt-3'></span>
                  </div>
                  <Button variant='outline'   className="
    rounded-none
    w-full
    mb-4
    transition-all
    duration-300
    hover:border-[#15a1bf]
    hover:text-[#15a1bf]
    hover:bg-[#f4fcff]
    hover:-translate-y-1
  "><FcGoogle />SignUp with Google</Button>

                  <p className='text-center font-semibold'><span className='text-[#6C696D]'>Don't have an account? </span><Link href={'/signup'}   className=' text-[#15a1bf] relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#15a1bf] after:transition-all after:duration-300 hover:after:w-full'>Sign Up</Link></p>
              </Form>
          </Card>
    </div>
  )
}

export default LoginPage
