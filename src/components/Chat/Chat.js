import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import app_config from "../../config";
import "./Chat.css";
import { IoSendSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  // backend url
  const url = app_config.back_url;
const navigate =  useNavigate();
  const [msgList, setMsgList] = useState([]);

  //   intialize socket.io-client
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));

  const [text, setText] = useState("");

  useEffect(() => {
    //   connect with the backend
    socket.connect();
  }, []);

  socket.on("recmsg", (data) => {
    console.log(data);

    // to add newly recieved message on screen
    const newList = [...msgList, data];
    setMsgList(newList);
  });

  const sendMessage = () => {
    let obj = { message: text, sent: true };

    // for sending the event on backend
    socket.emit("sendmsg", obj);

    // to add newly sent message on screen
    const newList = [...msgList, obj];
    setMsgList(newList);

    setText("");
  };

  const displayMessages = () => {
    return msgList.map((msgobj) => (
      <div
        className={
          msgobj.sent ? "sent-msg message-body" : "rec-msg message-body"
        }
      >
        <p>{msgobj.message}</p>
      </div>
    ));
  };

  return (
    <div>
      <div className="container-chat ">
        <div className="card  ">
          <h1 className="text-center font-bold mt-2">
            Donor & <span className="text-yellow-400">Ngo Conversation</span>{" "}
            <button className="float-center md:float-right mx-5" onClick={ ()=> {navigate
            ("/ngo")}}>close</button>
          </h1>

          <div className="card-body">
            <div className="msg-area">{displayMessages()}</div>
            <div className="input-group mt-2 ">
              <input
                className="form-control "
                placeholder="Type Your Message Here...."
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <div className="input-group-append">
                <button className="btn btn-success h-100" onClick={sendMessage}>
                  <IoSendSharp />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
