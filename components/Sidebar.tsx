'use client'
import { useSession, signOut } from 'next-auth/react'
import Newchat from './Newchat'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from './ChatRow';
import ModalSelection from './ModalSelection';

function Sidebar() {

  const { data: session } = useSession();


  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session.user?.email!, "chats"), orderBy("createdAt", "asc")))



  return (
    <div className='p-2 flex flex-col h-screen bg-black'>
      {/* <h1>Side bar goes here</h1> */}

      <div className='flex-1'>
        {/* new chat */}
        <div>
          <Newchat />

          {/* ModelSelection */}
          <div className='hidden sm:inline'>
            <ModalSelection />
          </div>

          {/* Map through the chat rows */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}

        </div>
      </div>


      {session &&
        <img src={session.user?.image! || '/images/aayush.png'} alt="Profile Picture"
          className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
          onClick={() => signOut()}
        />
      }
    </div>
  )
}

export default Sidebar
