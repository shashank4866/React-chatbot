import ChatButton from "./ChatButton";
function ChatMessage({chat}) {
   
    return ( 
        <div className={`message ${chat.role==="model"?"bot":"user"}-message`}>
            {chat.role==="model"&& <ChatButton/>}
          <p className="message-text">
            {chat.text}          
        </p>
        </div>
     );
}

export default ChatMessage;