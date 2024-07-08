// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Chat = () => {
//   const { id } = useParams();
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.example.com/chats/${id}/messages`
//         );
//         setMessages(response.data.data);
//       } catch (error) {
//         console.error(`Error fetching messages for chat ${id}:`, error);
//         // Optionally, you can set an empty array or handle error state here
//       }
//     };

//     // Fetch messages only if id changes
//     fetchMessages();
//   }, [id]); // Include id in the dependency array

//   // Handle loading state or messages being empty
//   if (messages.length === 0) {
//     return <p>Loading messages...</p>; // Optional loading indicator
//   }

//   return (
//     <div>
//       <h2>Chat {id}</h2>
//       <div>
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`message-${message.sender === "me" ? "right" : "left"}`}
//           >
//             {message.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTheme } from "@mui/material/styles";

const Chat = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `https://api.example.com/chats/${id}/messages`
        );
        setMessages(response.data.data);
      } catch (error) {
        console.error(`Error fetching messages for chat ${id}:`, error);
      }
    };

    fetchMessages();
  }, [id]);

  if (messages.length === 0) {
    return <p>Loading messages...</p>;
  }

  return (
    <div>
      <h2>Chat {id}</h2>
      <div>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              textAlign: message.sender === "me" ? "right" : "left",
              maxWidth: "50%",
              backgroundColor:
                message.sender === "me"
                  ? theme.palette.primary.main
                  : theme.palette.background.default,
              color:
                message.sender === "me"
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              borderRadius: "10px",
              marginBottom: "10px",
              padding: "10px",
              marginLeft: message.sender === "me" ? "auto" : "unset",
            }}
          >
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
