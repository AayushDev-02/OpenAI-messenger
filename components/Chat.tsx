'use client';

import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { FaArrowCircleDown } from "react-icons/fa";
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
            <p className="mt-10 text-2xl text-center text-white">Type a prompt in below to get started!</p>
            <FaArrowCircleDown className="h-10 w-10 mx-auto mt-10 text-white animate-bounce"/>
          </>
        )}
        {messages?.docs.map((message) => (
          <Message key={message.id} message={message.data()} />
        ))}
      
    </div>
  )
}

export default Chat;
