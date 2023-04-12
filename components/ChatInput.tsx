'use client'

import { serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

type Props = {
    chatId: string
}



function ChatInput({chatId}: Props) {
    const { data: session } = useSession();
    const [prompt, setPrompt] = useState("");

    const sendMessage = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!prompt){
            return;
        }

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text:input, 
            createAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                _name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        }
    };


    

  return (
    <div className='bg-gray-700/50 text-gray-400 text-sm outline-none rounded-lg'>
      <form onSubmit={e => sendMessage} className='p-5 space-x-5 flex' >
        <input disabled={!session} className='focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300' value={prompt} onChange={e => setPrompt(e.target.value)} type="text" placeholder='Type your message here...'/>

        <button disabled={!prompt || !session}  type="submit" className='text-white bg-green-500 px-4 py-3 disabled:bg-gray-300 disabled:cursor-not-allowed font-bold rounded'><FaPaperPlane/></button>
      </form>

      <div>
        {/* Modal Selection */}
      </div>
    </div>
  )
}

export default ChatInput
