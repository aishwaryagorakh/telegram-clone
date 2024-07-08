import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Box,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import ChatList from "./components/ChatList";
import ChatThread from "./components/ChatThread";
import MessageInput from "./components/MessageInput";
import Profile from "./components/Profile";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const App = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          "https://devapi.beyondchats.com/api/get_all_chats?page=1"
        );
        setChats(response.data.data.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  const handleChatSelect = async (chatId) => {
    setSelectedChat(chatId);
    try {
      const response = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
      );
      setMessages(response.data.data);
      if (isMobile) {
        navigate(`/chats/${chatId}`);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileClick = () => {
    setDrawerOpen(false);
    navigate("/profile");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <h4 className={`h1 ${darkMode ? "title-dark" : ""}`}>Telegram</h4>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="toggle dark mode"
            onClick={toggleDarkMode}
          >
            {darkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={handleProfileClick}>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Drawer>

      <Routes>
        <Route
          path="/"
          element={
            <Container maxWidth="lg" className="container">
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box
                    height="calc(100vh - 64px)"
                    overflow="auto"
                    borderRight="1px solid #ddd"
                  >
                    <ChatList chats={chats} onSelectChat={handleChatSelect} />
                  </Box>
                </Grid>
                {!isMobile && (
                  <Grid item xs={12} md={8}>
                    <Box
                      height="calc(100vh - 64px)"
                      display="flex"
                      flexDirection="column"
                      overflow="auto"
                    >
                      <ChatThread messages={messages} />
                      {selectedChat && <MessageInput chatId={selectedChat} />}
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Container>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/chats/:id"
          element={
            <Box
              height="calc(100vh - 64px)"
              display="flex"
              flexDirection="column"
              overflow="auto"
            >
              <ChatThread messages={messages} />
              {selectedChat && <MessageInput chatId={selectedChat} />}
            </Box>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
