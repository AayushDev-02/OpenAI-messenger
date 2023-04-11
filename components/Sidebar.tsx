import React from 'react'
import Newchat from './Newchat'

function Sidebar() {
  return (
    <div className='p-2 flex flex-col h-screen w-1/5 bg-black'>
      {/* <h1>Side bar goes here</h1> */}

      <div className='flex-1'>
          {/* new chat */}
          <Newchat/>
        <div>
          {/* ModelSelection */}
        </div>

          {/* Map through the chat rows */}
      </div>
    </div>
  )
}

export default Sidebar
