import { deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { FaTrashAlt } from "react-icons/fa";
type Props = {
    id: string;
}

function ChatRow({ id }: Props) {

    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);

    const [messages] = useCollection(
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
    );

    useEffect(() => {
        if (!pathname) return;

        setActive(pathname.includes(id));
    }, [pathname]);

    const removeChat = async () =>{
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
        router.replace('/');
    }

    return (
        <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && 'bg-secondary_brand'}`}>
            <p className="text-secondary_text flex-1 hidden md:inline-flex truncate">
                {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
            </p>
            <FaTrashAlt onClick={removeChat} className="text-red-600 hover:text-red-700" />
        </Link>
    )
}

export default ChatRow
