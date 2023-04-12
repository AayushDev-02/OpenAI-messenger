'use client'
import { useSession, signOut } from 'next-auth/react'
import Newchat from './Newchat'
import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from "../firebase";
import {  collection } from "firebase/firestore";
import ChatRow from './ChatRow';

function Sidebar() {

  const { data: session } = useSession();


  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats"),
  )



  return (
    <div  className='p-2 flex flex-col h-screen bg-black'>
      {/* <h1>Side bar goes here</h1> */}

      <div className='flex-1'>
        {/* new chat */}
        <div>
          <Newchat />
          <div>
            {/* ModelSelection */}
            {chats?.docs.map(chat => (
              <ChatRow key={chat.id} id={chat.id}/>
            ))}
          </div>

          {/* Map through the chat rows */}
        </div>
      </div>


      {session && 
        <img src={  session.user?.image! || '/images/aayush.png' } alt="Profile Picture"
          className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'  
          onClick={() => signOut()}
        />
      }
    </div>
  )
}

export default Sidebar
