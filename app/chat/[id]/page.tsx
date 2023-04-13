import React from 'react'
import Chat from '../../../components/Chat'
import ChatInput from '../../../components/ChatInput'

type Props = {
  params: {
      id:string
  }
}
function page({params: {id}} :Props) {
  // console.log(id);
  return (
    <div>
      <h1 className='flex flex-col h-screen overflow-hidden '>
        {/* chat */}
        <Chat chatId={id}/>
        {/* chat input */}
        <ChatInput chatId={id}/>

      </h1>
    </div>
  )
}

export default page
