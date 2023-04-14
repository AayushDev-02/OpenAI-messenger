import { DocumentData } from "firebase/firestore"
import { SetStateAction, useState } from "react";

type Props = {
    message: DocumentData,

}


function Message({ message }: Props) {

    const isChatGPT = message.user.name === "OpenAI";

    const copyText = () =>{
        const msg = message.text;
        navigator.clipboard.writeText(msg);
    }

    return (

        <div className={` py-5 text-primary_text md:mx-40 `}>
            <div className={`flex space-x-5 px-10 max-w-2xl  w-fit ${isChatGPT? 'mr-auto' : "ml-auto"}`}>
                <img src={message.user.avatar} alt="image" className="w-8 h-8 " />
                <div className={`pt-1 flex flex-col text-sm  px-5 py-5 space-y-3 items-start justify-center  rounded-2xl ${isChatGPT? "bg-brand" : "bg-secondary" }`}>
                    <div className="flex justify-between w-full">
                        <h5 className="text-lg font-bold">{message.user.name}</h5>
                        <h6 onClick={() => copyText()} className="text-md hover:underline hover:underline-offset-4 hover:text-secondary_brand font-bold cursor-pointer p-2 rounded-full">Copy</h6>
                    </div>
                    <p>{message.text}</p>
                </div>
            </div>
            {/* Message */}
        </div>
    )
}

export default Message;
