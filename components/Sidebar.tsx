'use client'
import { useSession, signOut } from 'next-auth/react'
import Newchat from './Newchat'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from './ChatRow';
import ModalSelection from './ModalSelection';
import { FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {

  const { data: session } = useSession();


  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session.user?.email!, "chats"), orderBy("createdAt", "asc")))



  return (
    <div className=' flex flex-col h-screen bg-primary  rounded-r-2xl font-poppins'>
      {/* <h1>Side bar goes here</h1> */}

      <div className='flex-1'>
        {/* new chat */}
        <div>
          <Newchat />
        </div>
        <div className='p-2 bg-secondary rounded-r-2xl mr-2 mt-5'>

          {/* ModelSelection */}
          <div className='hidden sm:inline'>
            <ModalSelection />
          </div>

          <div className='flex flex-col space-y-2 my-2'>

            {loading && (
              <div className='animate-pulse text-center text-white'>Loading Chats...</div>
            )}

            {/* Map through the chat rows */}
            {chats?.docs.map(chat => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}

          </div>


        </div>
      </div>

      {session &&
        <>
          <div className='flex font-poppins items-center justify-around bg-secondary rounded-r-2xl px-1 py-4 mb-4 mr-2'>
            <div className='flex space-x-3'>
              <img src={session.user?.image! || '/images/aayush.png'} alt="Profile Picture"
                className='rounded-full h-10 w-10'

              />
              <div>
                <h2 className='text-md font-bold text-primary_text'>{session.user?.name! || 'New User'}</h2>
                <p className='text-secondary_text text-xs'>{session.user?.email! || 'example123@email.com'}</p>
              </div>
            </div>
            <div onClick={() => signOut()} className='rounded-xl cursor-pointer p-4 bg-brand text-primary_text hover:bg-secondary_brand hover:border-red-600 hover:text-red-600 border-2 border-secondary'><FaSignOutAlt /></div>
          </div>
        </>
      }



    </div>
  )
}

export default Sidebar
