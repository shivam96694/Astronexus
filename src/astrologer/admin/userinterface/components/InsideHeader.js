// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const Header = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       elevation={0}
//       sx={{
//         backgroundColor: "white",
//         color: "black",
//         borderBottom: "1px solid #eee",
//         px: 15,
//       }}
//     >
//       <Toolbar sx={{ justifyContent: "space-between" }}>
//         {/* Left Section: Logo */}
//         <Box display="flex" alignItems="center" gap={1}>
//           <Box
//             sx={{
//               width: 35,
//               height: 35,
//               borderRadius: "50%",
//               backgroundColor: "#fce34d",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: 18,
//             }}
//           >
//             ☀️
//           </Box>
//           <Typography
//             variant="h6"
//             sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
//           >
//             AstroNexus
//           </Typography>
//         </Box>

//         {/* Middle Section: Navigation Links */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: 0,
//             px:5,
         
//             marginLeft:15,
//             flexWrap: "wrap",
//           }}
//         >
//           {[
//             "Free Kundli",
//             "Kundli Matching",
//             "Compatibility",
//             "Calculators",
//             "Horoscopes",
//             "Eng",
//             "Best Astrologers",
//             "Chat with Astrologer",
//             "Talk to Astrologer",
//             "Astromall",
//             "AstroNexus Store",
//             "Blogs",
//           ].map((item, index) => (
//             <Button
//               key={index}
//               endIcon={
//                 ["Calculators", "Horoscopes", "Eng", "Best Astrologers", "Blogs"].includes(
//                   item
//                 ) ? (
//                   <ArrowDropDownIcon />
//                 ) : null
//               }
//               sx={{
              
//                 textTransform: "none",
//                 fontWeight: 500,
//                color:' #4c4c4c',
//               marginLeft: 0,
//                fontSize:'16px',
//                whiteSpace: 'nowrap',
//                padding: "6px 12px",
                
//                 "&:hover": { color: "#d4aa00" },
//               }}
//               onClick={
//                 ["Calculators", "Horoscopes", "Eng", "Best Astrologers", "Blogs"].includes(
//                   item
//                 )
//                   ? handleMenuOpen
//                   : undefined
//               }
//             >
//               {item}
//             </Button>
//           ))}
//         </Box>

//         {/* Right Section: Login Button */}
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#fce34d",

//             textTransform: "none",
//             borderRadius: "20px",
//             px: 2,
//             width:"13%",

//             display: 'flex',

//     alignItems: 'center',

//   color: '#000',
//   textDecoration: 'none',
//   textTransform: 'capitalize',
//   fontSize: '16px',
//   cursor: 'pointer',
//   lineHeight: 'normal',
//             "&:hover": { backgroundColor: "#ffd700" },
//           }}
//           startIcon={<AccountCircleIcon />}
//         >
//           Login
//         </Button>
//       </Toolbar>

//       {/* Dropdown Menu Example */}
//       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//         <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
//         <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
//       </Menu>
//     </AppBar>
//   );
// };

// export default Header;

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css"; 
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/astrology.png";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "black",
        borderBottom: "1px solid #eee",
        px: 6,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: 70 }}>
        {/* Left: Logo + Brand Name */}
        <Box display="flex" alignItems="center" gap={1.5} sx={{ minWidth: 220 }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              objectFit: "cover",
              mr: 0.7,
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: "1.27rem", letterSpacing: 0.5 }}
          >
            AstroNexus
          </Typography>
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 0,
            ml: 9,
            flexGrow: 1,
          }}
        >
          <a href="/freekundli" className="nav-link" style={navLinkStyle}>
            Free Kundli
          </a>
          <a href="/kundli-matching" className="nav-link" style={navLinkStyle}>
            Kundli Matching
          </a>
          <a href="/compatibility" className="nav-link" style={navLinkStyle}>
            Compatibility
          </a>

          {/* Not links but open dropdown on hover */}
          <Box
            component="span"
            onMouseEnter={handleMenuOpen}
            sx={{ ...navLinkStyle,className:"nav-link",cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            Calculators <ArrowDropDownIcon style={{ fontSize: 18, verticalAlign: "middle" }} />
          </Box>
          <Box
            component="span"
            onMouseEnter={handleMenuOpen}
            sx={{ ...navLinkStyle,className:"nav-link", cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            Horoscopes <ArrowDropDownIcon style={{ fontSize: 18, verticalAlign: "middle" }} />
          </Box>
          <Box
            component="span"
            onMouseEnter={handleMenuOpen}
            sx={{ ...navLinkStyle, className:"nav-link",cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            Eng <ArrowDropDownIcon style={{ fontSize: 18, verticalAlign: "middle" }} />
          </Box>
        
          <Box
           
            onMouseEnter={handleMenuOpen}
            sx={{ ...navLinkStyle, cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            Best Astrologers <ArrowDropDownIcon style={{ fontSize: 18, verticalAlign: "middle" }} />
          </Box>
             {/* Login Button */}
           <Button
          variant="contained"
          sx={{
            backgroundColor: "#fce34d",
            borderRadius: "20px",
            px: 2,
            minWidth: 120,
            color: "#000",
            boxShadow: "none",
            fontSize: "16px",
            fontWeight: 500,
             mt:1,
            display: "flex",
            alignItems: "center",
            textTransform: "none",
            "&:hover": { backgroundColor: "#ffd700", boxShadow: "none" },
          }}
          startIcon={<AccountCircleIcon />}
        >
          Login
        </Button>

          <a href="/chat-with-astrologer"  className="nav-link" style={navLinkStyle}>
            Chat with Astrologer
          </a>
          <a href="/talk-to-astrologer" className="nav-link" style={navLinkStyle}>
            Talk to Astrologer
          </a>
          <a href="/astromall" className="nav-link" style={navLinkStyle}>
            Astromall
          </a>
          <a href="/astrotalk-store"  className="nav-link" style={navLinkStyle}>
            Astrotalk Store
          </a>

          <a href="/blogs" className="nav-link" style={navLinkStyle} onMouseEnter={handleMenuOpen}>
            Blogs <ArrowDropDownIcon style={{ fontSize: 18, verticalAlign: "middle" }} />
          </a>
        </Box>

       
       
      </Toolbar>

      {/* Dropdown menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
      </Menu>
    </AppBar>
  );
};



const navLinkStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#4c4c4c",
  fontWeight: 500,
  fontSize: "16px",
  padding: "6px 14px",
  borderRadius: "6px",
  marginLeft: 0,
  marginRight: 0,
  lineHeight: 1.7,
  whiteSpace: "nowrap",
  transition: "color 0.2s",
  cursor: "pointer",
  outline: "none",
  "&:hover": {
     color: "#ffd700",  
    backgroundColor: "#d4aa00",
    textDecoration: "none",
  },
};

export default Header;
