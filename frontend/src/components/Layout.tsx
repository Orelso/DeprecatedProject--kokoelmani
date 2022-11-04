import { makeStyles } from "@mui/styles";
import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import {useNavigate} from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import SavingsIcon from "@mui/icons-material/Savings";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FormatListNumberedRtlOutlinedIcon from "@mui/icons-material/FormatListNumberedRtlOutlined";
import { pink } from "@mui/material/colors";

const useStyles = makeStyles((theme) => {
  return {
    /* toolbar: theme.mixins.toolbar, */
    appbar: {
      marginTop: -15,
      
    },
  };
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  // const location = useLocation();

  const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon color='secondary' />,
      path: "/",
    },
    {
      text: "Create Collection",
      icon: <AddIcon color='secondary' />,
      path: "/Createcollection",
    },
    {
      text: "Collection",
      icon: <ShoppingBagOutlinedIcon color='secondary' />,
      path: "/Collections",
    },
    {
      text: "Wallet",
      icon: <SavingsIcon color='secondary' />,
      path: "/Wallet",
    },
    {
      text: "Lists",
      icon: <FormatListNumberedRtlOutlinedIcon color='secondary' />,
      path: "/Lists",
    },
    {
      text: "Other",
      icon: <MoreHorizOutlinedIcon color='secondary' />,
      path: "/Other",
    },
  ];

  return (
      <AppBar className={classes.appbar}>
        <Toolbar>
          {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
          ))}
        </Toolbar>
      </AppBar>
  );
};

export default Layout;
