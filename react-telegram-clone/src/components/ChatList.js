import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <List>
      {chats.map((chat) => (
        <ListItem key={chat.id} button onClick={() => onSelectChat(chat.id)}>
          <ListItemAvatar>
            <Avatar
              alt={chat.creator.name}
              src={chat.creator.profilePictureUrl}
            />
          </ListItemAvatar>
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
