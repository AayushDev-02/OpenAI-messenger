import React from 'react'

function Panel() {
  return (
    <div className="p-12 space-y-7 w-3/4 flex flex-col items-center justify-center mt-10 text-white">

      <div className=" grid grid-cols-3 gap-2 ">


        <div className="relative group  ">
          <div className="card-border"></div>
          <p className=" relative p-12 rounded-lg cursor-pointer h-full  bg-black">"Got any creative ideas for a 10 year old’s birthday?"</p>
        </div>
        <div className="relative group  ">
          <div className="card-border"></div>
          <p className=" relative p-12 rounded-lg cursor-pointer h-full bg-black">"How do I make an HTTP request in Javascript?"</p>
        </div>
        <div className="relative group  ">
          <div className="card-border"></div>
          <p className=" relative p-12 rounded-lg cursor-pointer h-full bg-black">"Explain quantum computing in simple terms"</p>
        </div>


      </div>

      <div className=" grid sm:grid-col-1 md:grid-cols-3 gap-2 ">


        <div className="relative group flex ">
          <div className="card-border"></div>
          <p className=" relative p-12 rounded-lg cursor-pointer h-full bg-black">"Remembers what user said earlier in the conversation"</p>
        </div>
        <div className="relative group   ">
          <div className="card-border"></div>
          <p className=" relative p-12 rounded-lg cursor-pointer h-full  bg-black">"Allows user to provide follow-up corrections"</p>
        </div>
        <div className="relative group  ">
          <div className="card-border"></div>
          <p className=" relative p-12 rounded-lg cursor-pointer h-full  bg-black">"Trained to decline inappropriate requests"</p>
        </div>


      </div>
      <div className=" grid grid-cols-3 gap-2">


        <div className="relative group  ">
          <div className="card-border"></div>
          <p className=" relative p-12 rounded-lg cursor-pointer h-full bg-black">"May occasionally generate incorrect information"</p>
        </div>
        <div className="relative group  ">
          <div className="card-border"></div>
          <p className=" relative p-12 rounded-lg cursor-pointer h-full  bg-black">"May occasionally produce harmful instructions or biased content"</p>
        </div>
        <div className="relative group  ">
          <div className="card-border"></div>
          <p className=" relative p-12 rounded-lg cursor-pointer h-full bg-black">"Limited knowledge of world and events after 2021"</p>
        </div>


      </div>


    </div>
  )
}

export default Panel
