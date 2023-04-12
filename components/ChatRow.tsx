import Link from "next/link";
import {FaTrashAlt} from "react-icons/fa";
type Props= {
    id:string;
}

function ChatRow({id}: Props) {
  return (
    <Link href={`/chat/${id}`}>
        <p className="text-white">New Chat</p>
        <FaTrashAlt className="text-white"/>        
    </Link>
  )
}

export default ChatRow
