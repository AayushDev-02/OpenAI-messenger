'use client'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { db } from '../firebase'
import toast from 'react-hot-toast';

type Props = {
    chatId: string
}



function ChatInput({chatId}: Props) {
    const { data: session } = useSession();
    const [prompt, setPrompt] = useState("");

    //useSWR to get the model
    const model = "text-davinci-003";

    const sendMessage = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!prompt){
            return;
        }

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text:input, 
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        }

        await addDoc(collection(db,"users", session?.user?.email!, "chats", chatId, "messages"), message)

        // toast notification to say loading
        const notification = toast.loading('Open AI is Thinking...');

        //fetch
        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(() => {
            //toast notification to say successfull
            toast.success("Response Generated", {
              id:notification,
            });
        })
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
