import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import fb from "../../../../assets/facebook.jpg";
import yt from "../../../../assets/yt.jpg";
import insta from "../../../../assets/intragram.jpg";
import ps from "../../../../assets/playstore.webp";
import as from "../../../../assets/appstore.webp";


export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#2d2d2d",
        color: "white",
        width: "100%",
        padding: { xs: "2rem 1rem", md: "3rem 5rem" },
      }}
    >
      {/* Top Section */}
      <Grid container spacing={3}>
        {/* Logo Section */}
        <Grid item xs={12} md={3}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            {/* <img
              src={logo}
              alt="Astronexus"
              style={{ width: 120, marginBottom: 10 }}
            /> */}
             <Typography
              sx={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "#fcf6f6ff",
                width: "90%",
                borderBottom: "3px solid #F39C12",
                fontWeight:'bold'
                 }}
            >About  Astronexus
            </Typography>
          
            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "#fff",
                width: "90%",
              }}
            >
Astronexus is the best astrology website for online Astrology predictions. Talk to Astrologer on call and get answers to all your worries by seeing the future life through Astrology Kundli Predictions from the best Astrologers from India. Get best future predictions related to Marriage, love life, Career or Health over call, chat, query or report. 
            </Typography>
          </Box>
        </Grid>

        {/* Company */}
        <Grid item xs={6} md={2}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              borderBottom: "2px solid #fbc02d",
              display: "inline-block",
              marginBottom: "0.8rem",
            }}
          >
            Company
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <Typography sx={{ cursor: "pointer" }}>About Us</Typography>
            <Typography sx={{ cursor: "pointer" }}>Careers</Typography>
            <Typography sx={{ cursor: "pointer" }}>Blog</Typography>
            <Typography sx={{ cursor: "pointer" }}>Contact</Typography>
          </Box>
        </Grid>

        {/* Services */}
        <Grid item xs={6} md={2}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              borderBottom: "2px solid #fbc02d",
              display: "inline-block",
              marginBottom: "0.8rem",
            }}
          >
            Services
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <Typography sx={{ cursor: "pointer" }}>Kundli</Typography>
            <Typography sx={{ cursor: "pointer" }}>Horoscope</Typography>
            <Typography sx={{ cursor: "pointer" }}>Match Making</Typography>
            <Typography sx={{ cursor: "pointer" }}>Live Chat</Typography>
          </Box>
        </Grid>

        {/* Support */}
        <Grid item xs={6} md={2}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              borderBottom: "2px solid #fbc02d",
              display: "inline-block",
              marginBottom: "0.8rem",
            }}
          >
            Support
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <Typography sx={{ cursor: "pointer" }}>Help Center</Typography>
            <Typography sx={{ cursor: "pointer" }}>Privacy Policy</Typography>
            <Typography sx={{ cursor: "pointer" }}>Terms & Conditions</Typography>
            <Typography sx={{ cursor: "pointer" }}>Refund Policy</Typography>
          </Box>
        </Grid>

        {/* Contact */}
        <Grid item xs={6} md={3}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              borderBottom: "2px solid #fbc02d",
              display: "inline-block",
              marginBottom: "0.8rem",
            }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ color: "#cfcfcf" }}>
            📞 +91 9876543210
          </Typography>
          <Typography sx={{ color: "#cfcfcf" }}>
            ✉️ support@astronexus.in
          </Typography>

          {/* Social icons */}
          <Box sx={{ display: "flex", gap: 1.5, marginTop: "1rem" }}>
            <img src={fb} alt="Facebook" width={28} />
            <img src={insta} alt="Instagram" width={28} />
            <img src={yt} alt="YouTube" width={28} />
          </Box>

          {/* App badges */}
          <Box sx={{ display: "flex", gap: 1, marginTop: "1rem" }}>
            <img src={ps} alt="Play Store" width={110} />
            <img src={as} alt="App Store" width={110} />
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid #555",
          paddingTop: "1rem",
          marginTop: "2rem",
          fontSize: "0.9rem",
          color: "#a1a1a1",
        }}
      >
        © {new Date().getFullYear()} Astronexus. All Rights Reserved.
      </Box>
    </Box>
  );
}
