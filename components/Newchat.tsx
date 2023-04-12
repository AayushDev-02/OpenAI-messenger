'use client'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa"
import { db } from "../firebase";



function Newchat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async() => {

    const doc = await addDoc(collection(db ,"users", session?.user?.email!, "chats"), {
      userId: session?.user?.email!,
      createdAt: serverTimestamp()
    })


    router.push(`/chat/${doc.id}`);
    


  }
  return (
    <div onClick={createNewChat} className="text-white border border-white chatRow">
        <FaPlus/>
        <p>New Chat</p>
    </div>
  )
}

export default Newchat
