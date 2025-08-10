import { useRef } from "react";

function ChatForm({chatHistory,setChatHistory,generateBotResponse}) {

const inputRef=useRef()
    function handleFormSubmit(e){
        e.preventDefault();
        const userMessage=inputRef.current.value.trim();
        if(!userMessage)return;
        inputRef.current.value="";

        // updt chat
        setChatHistory(history=>[...history,{role:"user",text:userMessage}]);    
        // model
                setTimeout(()=>{
                    setChatHistory(history=>[...history,{role:"model",text:"thinking..."}])
                    
                generateBotResponse([...chatHistory,{role:"user",text:userMessage}]);

                },600);
    }
        // model
    return ( 
         <form action="#" onSubmit={handleFormSubmit}>
          <input ref={inputRef} type="text" className="message-input"  placeholder="message..." required/>
<button  type="submit" className="material-symbols-outlined">arrow_upward</button>
        </form>
     );
}

export default ChatForm;