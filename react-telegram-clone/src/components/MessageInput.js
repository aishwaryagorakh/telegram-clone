import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";

const MessageInput = ({ chatId }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    try {
      await axios.post(`https://devapi.beyondchats.com/api/send_message`, {
        chat_id: chatId,
        message: message.trim(),
      });

      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Box display="flex" p={1} borderTop="1px solid #ddd">
      <TextField
        fullWidth
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
