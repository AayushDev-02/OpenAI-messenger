'use client';

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { SiFirebase, SiNextdotjs, SiOpenai, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import UseExamples from "./UseExamples";

function Login() {
  return (
    <div className="h-full  bg-primary ">

      <div id="navbar" className="flex justify-between text-white p-5 mx-20 items-center font-poppins ">
        <h3 className="text-2xl underline-offset-8 underline decoration-brand">Open AI</h3>
        <div className="flex space-x-16 text-xs items-center text-secondary_text font-light">
          <Link href='https://github.com/AayushDev-02'><h5 className="hover:underline hover:decoration-brand hover:underline-offset-8 cursor-pointer">Github</h5></Link>
          <Link href='https://www.linkedin.com/in/aayush-yadav-50ab55239/'><h5 className="hover:underline hover:decoration-brand hover:underline-offset-8 cursor-pointer">LinkedIn</h5></Link>
          <Link href='mailto:yadavaayush002@gmail.com'><h5 className="hover:underline hover:decoration-brand hover:underline-offset-8 cursor-pointer">Mail</h5></Link>
          <Link href=''><h5 className="hover:underline hover:decoration-brand hover:underline-offset-8 cursor-pointer">Blog</h5></Link>
        </div>

        <div>
          <button onClick={() => signIn('google')} className="px-4 py-2 bg-brand hover:bg-brand/80 rounded-full ">Sign In</button>
        </div>
      </div>

      <div className="mx-20 p-5 flex mt-20">
        <div id="primary text w-1/5">

          <div className="space-y-10 ">
            <h1 className="w-3/4 text-7xl font-extrabold text-primary_text">Get AI Generated Answers using <span className="text-brand">OpenAI</span> </h1>
            <h5 className="text-secondary_text text-md w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, mollitia necessitatibus! Necessitatibus eos velit eum iure! Ipsam at nihil ipsa.</h5>
            <button onClick={() => signIn('google')} className="bg-secondary_brand border-2 border-primary hover:border-2 hover:border-brand text-brand font-bold px-10 py-4 rounded-full">Sign In to use AI Messenger</button>
          </div>

          <div className="w-1/2 my-10 h-[2px] rounded-full bg-brand"></div>
          <div id="tect used" className="flex bg-secondary w-1/2 justify-between px-5 py-3 text-brand font-extralight text-3xl rounded-2xl">
            <SiReact />
            <SiTypescript />
            <SiTailwindcss />
            <SiNextdotjs />
            <SiOpenai />
            <SiFirebase />
          </div>

        </div>
        <div id="image" className="w-4/5 bg-secondary rounded-2xl flex items-center justify-center -ml-48 ">
          <div className="w-fit">
            <Image src="/images/hero_img1.png" className="rounded-2xl" alt="Profile Picture" height={500} width={600} />
          </div>
        </div>
      </div>

      <div className="w-1/2 my-10 h-[2px] rounded-full bg-tertiary mx-auto mt-20"></div>

      <div className="mt-20 mb-30 ">
        <h2 className="text-5xl font-extrabold text-brand mb-20 mx-auto w-fit">Testimonials</h2>
        <UseExamples/>
      </div>

      <div className="w-1/2  h-[2px] rounded-full bg-tertiary mx-auto mt-20"></div>



    </div>
  )
}

export default Login
