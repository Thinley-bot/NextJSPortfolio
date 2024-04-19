import React, { useRef } from "react";
import { ImCross } from "react-icons/im";

const ChatBox = ({ onClosechat }: { onClosechat: any }) => {
  const inputRef = useRef<HTMLInputElement>(null); 

  const handleChatMessageClick = (message: string) => {
    if (inputRef.current) {
      inputRef.current.value = message; 
    }
  };

  
  return (
    <div className="bg-[#8FBC8B] bg-opacity-95 h-[500px] w-[100%] flex flex-col rounded-xl gap-5 py-5 px-6 relative">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold">AI Assistant</h1>
        <ImCross onClick={onClosechat} />
      </div>
      <hr></hr>
      <div className="h-auto w-full py-3 px-5 bg-white rounded-xl bg-opacity-90  whitespace-nowrap">
        <p className="inline-block chat-message">
          Kuzuzangpo la, Welcome to Portfolio, How can I help you?
        </p>
      </div>
      <div className="flex flex-row overflow-y-auto absolute bottom-[77px] gap-5 w-[90%]">
        <div className="h-auto py-3 px-5 bg-white rounded-xl bg-opacity-90  whitespace-nowrap">
        <p
            className="inline-block chat-message cursor-pointer"
            onClick={() => handleChatMessageClick("What technologies are you proficient in?")}
          >
            What technologies are you proficient in?
          </p>
        </div>
        <div className="h-auto py-3 px-5 bg-white rounded-xl bg-opacity-90  whitespace-nowrap">
        <p
            className="inline-block chat-message cursor-pointer"
            onClick={() => handleChatMessageClick("What motivates you to keep learning?")}
          >
            What motivates you to keep learning?
          </p>
        </div>

        <div className="h-auto py-3 px-5 bg-white rounded-xl bg-opacity-90  whitespace-nowrap">
        <p
            className="inline-block chat-message cursor-pointer"
            onClick={() => handleChatMessageClick("What are your long-term career goals?")}
          >
            What are your long-term career goals?
          </p>
        </div>
      </div>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message...."
          className="absolute bottom-5 h-10 w-[90%] rounded-xl px-5 outline-none"
        />
      </div>
    </div>
  );
};

export default ChatBox;
