import React from "react";
import { Container, Typography, Box, useTheme } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupIcon from "@mui/icons-material/Group";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TryIcon from "@mui/icons-material/Try";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import "./Profile.css";

const Profile = () => {
  const theme = useTheme();

  return (
    <Container className="profile">
      <Box p={2}>
        <Typography variant="h4">MY Profile</Typography>
        <Typography variant="body1">Name: Aishwarya Shinde</Typography>
        <Typography variant="body1">
          Email: aishwaryagorakhshinde@gmail.com &nbsp;&nbsp;
          <ArrowDropDownCircleIcon />
        </Typography>
        <br />
        <ul className="profile-list">
          <Typography variant="body1">
            <AccountCircleIcon /> &nbsp;&nbsp;My Profile
          </Typography>
          <br />
          <Typography variant="body1">
            <GroupIcon /> &nbsp;&nbsp;New Group
          </Typography>
          <br />
          <Typography variant="body1">
            <ContactPhoneIcon /> &nbsp;&nbsp;Contacts
          </Typography>
          <br />
          <Typography variant="body1">
            <AddIcCallIcon /> &nbsp;&nbsp;Calls
          </Typography>
          <br />
          <Typography variant="body1">
            <PeopleAltIcon /> &nbsp;&nbsp;People Nearby
          </Typography>
          <br />
          <Typography variant="body1">
            <TryIcon /> &nbsp;&nbsp;Saved Messages
          </Typography>
          <br />
          <Typography variant="body1">
            <SettingsIcon /> &nbsp;&nbsp;Settings
          </Typography>
          <br />
          <Typography variant="body1">
            <Diversity3Icon /> &nbsp;&nbsp;Invite Friends
          </Typography>
        </ul>
      </Box>
    </Container>
  );
};

export default Profile;
