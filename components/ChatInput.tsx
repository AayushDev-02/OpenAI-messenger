'use client'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { db } from '../firebase'
import toast from 'react-hot-toast';
import ModalSelection from './ModalSelection'
import useSWR from 'swr'

type Props = {
  chatId: string
}



function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //useSWR to get the model
  const { data: model } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  });



  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) {
      return;
    }

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      }
    }

    await addDoc(collection(db, "users", session?.user?.email!, "chats", chatId, "messages"), message)

    // toast notification to say loading
    const notification = toast.loading('Open AI is Thinking...');

    //fetch
    await fetch('/api/askQuestion', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input, chatId, model, session
      }),
    }).then(() => {
      //toast notification to say successfull
      toast.success("Response Generated", {
        id: notification,
      });
    });
  };




  return (
    <div className='bg-secondary mb-5 text-primary_text text-sm outline-none rounded-2xl mx-5 mr-7'>
      <form onSubmit={e => sendMessage(e)} className='flex' >
        <div className=' flex-1'>
          <input disabled={!session} className='focus:outline-none bg-transparent w-full px-5 py-3 disabled:cursor-not-allowed disabled:text-gray-300' value={prompt} onChange={e => setPrompt(e.target.value)} type="text" placeholder='Type your message here...' />
        </div>
        
          <button disabled={!prompt || !session} type='submit' className='text-white bg-brand px-12 py-4 disabled:bg-tertiary disabled:cursor-not-allowed font-bold rounded-r-2xl'><FaPaperPlane /></button>
        
      </form>

      <div className='md:hidden'>
        {/* Modal Selection */}
        <ModalSelection />
      </div>
    </div>
  )
}

export default ChatInput
