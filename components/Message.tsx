import { DocumentData } from "firebase/firestore"

type Props = {
    message: DocumentData,

}


function Message({ message }: Props) {

    const isChatGPT = message.user.name === "OpenAI";

    return (

        <div className={`py-5 text-white ${isChatGPT && "bg-gray-700"}`}>
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
                <img src={message.user.avatar} alt="image" className="w-8 h-8 " />
                <p className="pt-1 text-sm">
                    {message.text}
                </p>
            </div>
            {/* Message */}
        </div>
    )
}

export default Message;
