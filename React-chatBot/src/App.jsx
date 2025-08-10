import { useState } from "react";
import ChatButton from "./componets/ChatButton";
import ChatMessage from "./componets/ChatMessage";
import ChatForm from "./componets/ChatForm";

function App() {


  const [chatHistory,setChatHistory]=useState([]);
   async function generateBotResponse(history) {
  // helper update history
  let updateHistory = (text) => {
    setChatHistory(prev => [
      ...prev.filter(msg => msg.text !== "thinking..."),
      { role: "model", text }
    ]);
  };

  history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: history })
  };

  try {
    const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message || "something wrong");

    const apiResponseText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text.replace(/\*/g, "").trim();

    updateHistory(apiResponseText);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}


  return ( 
    <div className="container">
    <div className="chatbot-popup">
      {/* chatbot header */}
      <div className="chat-header">
        <div className="header-info">
          <ChatButton/>
          <h2 className="logo-text">chat bot</h2>
        </div>
        <button className="material-symbols-outlined">
keyboard_arrow_down</button>
      </div>
      {/* chatbot body */}
      <div className="chat-body">
        <div className="message bot-message">
          <ChatButton/>
          <p className="message-text">
            hey there 🙏 <br /> how can i help you today?
          </p>
        </div>

        {/* rendenring chat dynamically */}
        {chatHistory.map((chat,index)=>{
          return(
          <ChatMessage key={index} chat={chat}/>
          )
        })}
        
      </div>
      {/* chat footer */}
      <div className="chat-footer">
       <ChatForm chatHistory={chatHistory}  setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
      </div>
    </div>
    </div>
   );
}

export default App;