import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router-dom";
import {
  Container,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import styles from "../headerLayout/header.module.css";

const drawerWidth = 600;
const navItems = [
  { name: "Home", to: "/" },
  { name: "Cosmetics", to: "/cosmetics" },
];

function HeaderContainer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className={styles.drawerWrapper}>
      {/* MOBILE */}
      <Typography variant="h6" className={styles.headerBannerMobile}>
        Fortnite
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <NavLink
                to={item.to}
                key={index}
                className={styles.navlinkMobile}
              >
                {item.name}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className={styles.wrapperDesktop}>
      {/* DESKTOP */}
      <AppBar component="nav">
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                textAlign: "left",
              }}
            >
              <Typography className={styles.banner} variant="h6">
                Fortnite
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <NavLink to={item.to} key={index} className={styles.navlink}>
                  {item.name}
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Container component="main" className={styles.contentContainer}>
        <Toolbar />

        {/* Main content*/}
        <Outlet />
      </Container>
    </Box>
  );
}
export default HeaderContainer;
