'use client';

import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-10 ">
        <Image src='/images/aayush.png' width={200} height={200} alt='image'/>
        <h1 className="text-7xl">Sign up</h1>
        <button onClick={ () => signIn('google')} className="px-3 py-2 border-2 border-black hover:bg-gray-600">Sign In to use AI Messenger</button>
    </div>
  )
}

export default Login
