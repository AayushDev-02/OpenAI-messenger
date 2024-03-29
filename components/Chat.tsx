'use client';

import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { FaArrowCircleDown, FaArrowDown } from "react-icons/fa";
import { db } from "../firebase";
import Message from "./Message";

type Props = {
    chatId: string
}

function Chat({chatId} :Props) {

  const {data: session} = useSession();

  const [messages] = useCollection(session && query(
    collection(db,"users", session?.user?.email!, "chats", chatId, "messages"),
    orderBy("createdAt", "asc")
  ))

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-brand scrollbar-track-primary scrollbar-thumb-rounded-full">
        {messages?.empty && (
          <>
            <div className="mx-auto w-fit mt-40 flex flex-col items-center justify-center space-y-10">
              <Image className="rounded-2xl shadow-2xl " src='/images/robot2.png' alt="image" height={300} width={300}/>
              <h1 className="text-5xl font-bold text-brand">Type a prompt to get started!</h1>
              <FaArrowDown className="animate-bounce text-brand text-7xl"/>
            </div>
          </>
        )}
        {messages?.docs.map((message) => (
          <Message key={message.id} message={message.data()} />
        ))}
      
    </div>
  )
}

export default Chat;
