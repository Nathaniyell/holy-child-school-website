"use client";

import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

import LinkRoute from "./LinkRoute";
import HamburgerMenu from "../MobileView/Hamburger";
import Image from "next/image";
import Logo from "../../../../public/HCLogo.png";

import styles from "./header.module.css";

export default function Header() {
  const isMobileView = useMediaQuery("(max-width:1000px)");

  // const [anchorElNav, setAnchorElNav] = useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <Box position="static" sx={{ boxShadow: "none", width: "100%" }}>
      <Container
        // maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "50%", md: "10%" },
            display: "flex",
            justifyContent: { xs: "space-between", md: "space-between" },
            alignItems: "center",
          }}
        >
          {!isMobileView ? null : <HamburgerMenu />}

          <Image src={Logo} alt="logo" className={styles.logo} />
        </Box>

        <Box sx={{width: "60%"}}>
          <Box
            sx={{
              // flexGrow: 1,
              // width: "100%",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              gap: "30px",
              

            }}
          >
            <LinkRoute />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// export default Navbar;
