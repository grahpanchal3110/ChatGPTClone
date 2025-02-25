import "./App.css";
import { useState } from "react";
import gptLogo from "../src/assets/chatgpt.svg";
import gptImgLogo from "../src/assets/chatgptlogo.svg";
import addBtn from "./assets/add-30.png";
import query from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import pro from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/userpng.png";
import { sendMsgOpenAI } from "./openai";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello, how are you?",
      isBot: true,
    },
  ]);
  const handleSend = async () => {
    const text = input;
    setInput("");

    // Add the user's message to the chat
    setMessages((prevMessages) => [...prevMessages, { text, isBot: false }]);

    // Get the response from OpenAI
    const response = await sendMsgOpenAI(text);
    console.log(response);

    // Add the bot's response to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: response, isBot: true },
    ]);
  };

  return (
    <>
      <div className="App">
        <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop">
              <img src={gptLogo} alt="Logo" className="logo" />
              <span className="brand">ChatGPT</span>
              <button className="midBtn">
                <img src={addBtn} alt="" className="addBtn" />
                New Chat
              </button>
              <div className="upperSideBottom">
                <button className="query">
                  <img src={query} alt="" />
                  What is Programming ?
                </button>
                <button className="query">
                  <img src={query} alt="" />
                  How To Use An API ?
                </button>
              </div>
            </div>
          </div>
          <div className="lowerside">
            <div className="listItems">
              <img src={home} alt="" className="listItemsImg" />
              Home
            </div>
            <div className="listItems">
              <img src={saved} alt="" className="listItemsImg" />
              Saved
            </div>
            <div className="listItems">
              <img src={pro} alt="" className="listItemsImg" />
              Upgrade to Pro
            </div>
          </div>
        </div>
        <div className="main">
          <div className="chats">
            <div className="chat">
              <img src={userIcon} alt="" className="chatImg" />
              <p className="txt">Hii</p>
            </div>
            {messages.map((message, index) => (
              <div key={index} className={`chat ${message.isBot ? "bot" : ""}`}>
                <img
                  src={message.isBot ? gptImgLogo : userIcon}
                  alt=""
                  className="chatImg"
                />
                <p className="txt">{message.text}</p>
              </div>
            ))}
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input
                type="text"
                placeholder="Send a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="send">
                <img src={sendBtn} alt="" onClick={handleSend} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
