import React from "react";
import { List, ListItem, Box, Typography } from "@mui/material";

const ChatThread = ({ messages }) => {
  return (
    <Box flexGrow={1} overflow="auto" display="flex" flexDirection="column">
      <List>
        {messages.map((message) => (
          <ListItem
            key={message.id}
            style={{
              display: "flex",
              justifyContent:
                message.sender_id === 1 ? "flex-start" : "flex-end",
            }}
          >
            <Box
              className={
                message.sender_id === 1 ? "message-left" : "message-right"
              }
            >
              <Typography variant="body2" component="p">
                {message.sender.name}
              </Typography>
              <Typography variant="body1" component="p">
                {message.message}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatThread;
