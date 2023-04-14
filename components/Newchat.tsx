'use client'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa"
import { db } from "../firebase";



function Newchat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {

    const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"), {
      userId: session?.user?.email!,
      createdAt: serverTimestamp()
    })


    router.push(`/chat/${doc.id}`);



  }

  const arr = ['robot1.png', 'robot2.png', 'robot3.png', 'robot4.png'];
  const index = Math.floor(Math.random() * arr.length);
  
  return (
    <div className=" space-y-5 py-5 rounded-r-2xl bg-secondary mr-2">
      <div className="flex justify-center items-center ">
        <Image className="rounded-2xl shadow-xl" src={`/images/${arr[index]}`} alt="robot" width={200} height={100} />
      </div>
      <div onClick={createNewChat} className="text-primary_text border-2 mx-4 border-secondary hover:bg-brand/20 hover:text-brand bg-brand cursor-pointer hover:brand/20 hover:border-2 hover:border-brand transition-all duration-200 ease-out flex text-sm font-bold px-5 py-3 rounded-full items-center justify-center space-x-2">
        <FaPlus />
        <p>New Chat</p>
      </div>
    </div>
  )
}

export default Newchat
