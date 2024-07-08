import React from "react";
import { List, ListItem, ListItemText, Avatar } from "@mui/material";

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <List>
      {chats.map((chat) => (
        <ListItem key={chat.id} button onClick={() => onSelectChat(chat.id)}>
          <Avatar src={chat.creator.avatar} alt={chat.creator.name} />
          <ListItemText
            primary={chat.creator.name || `Chat ${chat.id}`}
            secondary={`Created by: ${chat.creator.name || chat.creator.email}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
