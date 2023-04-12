import { orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { db } from "../firebase";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import {  collection } from "firebase/firestore";
import {FaTrashAlt} from "react-icons/fa";
type Props= {
    id:string;
}

function ChatRow({id}: Props) {

    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);

    const [messages] = useCollection(query(
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'  ),
        orderBy('createdAt', 'asc')
    ))
  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center`}>
        <p className="text-white flex-1 hidden md:inline-flex truncate">New Chat</p>
        <FaTrashAlt className="text-white"/>        
    </Link>
  )
}

export default ChatRow
