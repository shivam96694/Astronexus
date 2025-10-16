// import React, { useState } from "react";
// import { Paper } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import ChatIcon from "@mui/icons-material/Chat";
// import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
// export default function AstrologerInfo() {
//   const [getScale, setScale] = useState(null);

//   // 🧩 Local JSON data (no backend)
//   const data = [
//     {
//       id: 1,
//       name: "Astro Aadrika",
//       language: "Hindi",
//       experience: "2 Years",
//       expertise: "Vedic",
//       rating: 4.95,
//       reviews: 1944,
//       price: 20,
//       status: "online", // or "offline"
//       image:
//         "https://via.placeholder.com/80", // Replace with actual astrologer image
//     },
//     {
//       id: 2,
//       name: "Astro Karan",
//       language: "English",
//       experience: "5 Years",
//       expertise: "Lal Kitab",
//       rating: 4.87,
//       reviews: 1150,
//       price: 25,
//       status: "offline",
//       image: "https://via.placeholder.com/80",
//     },
//   ];

//   // 🪄 Hover animation
//   const handleMouseOver = (index) => setScale(index);
//   const handleMouseLeave = () => setScale(null);

//   // 🧱 Card UI
//   const showAstrologers = () =>
//     data.map((item, index) => (
//       <Paper
//         key={index}
//         elevation={getScale === index ? 20 : 10}
//         onMouseOver={() => handleMouseOver(index)}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           transition: "transform 0.3s, box-shadow 0.3s",
//           transform: getScale === index ? "scale(1.05)" : "scale(1)",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           width: 330,
//           padding: 16,
//           margin: 15,
//           display: "flex",
//           flexDirection: "column",
//           borderRadius: 10,
//           cursor: "pointer",
//         }}
//       >
//         {/* Top section */}
//         <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
//           <div style={{ position: "relative" }}>
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{
//                 width: 80,
//                 height: 80,
//                 borderRadius: "50%",
//                 objectFit: "cover",
//               }}
//             />
//             {item.status === "online" && (
//               <span
//                 style={{
//                   position: "absolute",
//                   top: 3,
//                   right: 3,
//                   width: 10,
//                   height: 10,
//                   borderRadius: "50%",
//                   background: "green",
//                   border: "2px solid white",
//                 }}
//               ></span>
//             )}
//           </div>

//           <div style={{ flex: 1 }}>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "flex-start",
//               }}
//             >
//               <div style={{ fontWeight: "bold", fontSize: 16 }}>
//                 {item.name}
//               </div>
//               <button
//                 style={{
//                   border: "1px solid gray",
//                   borderRadius: 15,
//                   fontSize: 12,
//                   padding: "2px 8px",
//                   background: "transparent",
//                   cursor: "pointer",
//                 }}
//               >
//                 + Follow
//               </button>
//             </div>

//             <div
//               style={{
//                 fontSize: 13,
//                 color: "gray",
//                 display: "flex",
//                 flexDirection: "column",
//                 marginTop: 4,
//               }}
//             >
//               <span>🗣️ {item.language}</span>
//               <span>🎓 {item.experience}</span>
//               <span>🔮 {item.expertise}</span>
//             </div>

//             <div style={{ display: "flex", alignItems: "center", marginTop: 4 }}>
//               <Star
//                 size={14}
//                 style={{ color: "#f1c40f", fill: "#f1c40f", marginRight: 4 }}
//               />
//               <span style={{ fontWeight: 500, fontSize: 13 }}>
//                 {item.rating}
//               </span>
//               <span style={{ fontSize: 13, color: "gray", marginLeft: 4 }}>
//                 | {item.reviews}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Price & Buttons */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             borderTop: "1px solid #ddd",
//             marginTop: 10,
//             paddingTop: 10,
//           }}
//         >
//           <div style={{ fontWeight: "bold", color: "#000" }}>
//             ₹{item.price}/Min
//           </div>

//           <div style={{ display: "flex", gap: 6 }}>
//             <button
//               style={{
//                 backgroundColor:
//                   item.status === "online" ? "#2ecc71" : "#ccc",
//                 color: "white",
//                 border: "none",
//                 borderRadius: 20,
//                 padding: "4px 10px",
//                 fontSize: 12,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 4,
//                 cursor: item.status === "online" ? "pointer" : "not-allowed",
//               }}
//             >
//               <MessageCircle size={14} />
//               CHAT
//             </button>

//             <button
//               style={{
//                 backgroundColor:
//                   item.status === "offline" ? "#ccc" : "#e0e0e0",
//                 color: "#555",
//                 border: "none",
//                 borderRadius: 20,
//                 padding: "4px 10px",
//                 fontSize: 12,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 4,
//                 cursor: "not-allowed",
//               }}
//             >
//               <PhoneOff size={14} />
//               OFFLINE
//             </button>
//           </div>
//         </div>
//       </Paper>
//     ));

//   return (
//     <div
//       style={{
//         width: "100%",
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "center",
//       }}
//     >
//       {showAstrologers()}
//     </div>
//   );
// }

import React, { useState } from "react";
import { Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ChatIcon from "@mui/icons-material/Chat";
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
import AddCallIcon from '@mui/icons-material/AddCall';
import pp1 from "../../../../assets/pp1.jpeg";
import pp2 from "../../../../assets/pp2.jpeg";
import pp3 from "../../../../assets/pp3.jpeg";
import pp4 from "../../../../assets/pp4.jpeg";
import pp5 from "../../../../assets/pp5.jpeg";
import pp6 from "../../../../assets/pp6.jpeg";
import pp7 from "../../../../assets/pp7.jpeg";
import pp8 from "../../../../assets/pp8.jpeg";
import pp9 from "../../../../assets/pp9.jpeg";
export default function AstrologerInfo() {
  const [getScale, setScale] = useState(null);

  const data = [
    {
      id: 1,
      name: "Astro Aadrika",
      language: "Hindi",
      experience: "2 Years",
      expertise: "Vedic",
      rating: 4.95,
      reviews: 1944,
      price: 20,
      status: "online",
      image: pp1,
    },
    {
      id: 2,
      name: "Astro Karan",
      language: "English,Tamil",
      experience: "5 Years",
      expertise: "Lal Kitab",
      rating: 4.87,
      reviews: 1150,
      price: 25,
      status: "offline",
      image: pp2,
    },
    {
      id: 3,
      name: "Astro Aadrika",
      language: "Hindi",
      experience: "2 Years",
      expertise: "Vedic",
      rating: 4.95,
      reviews: 1944,
      price: 20,
      status: "online",
      image: pp3,
    },
    {
      id: 4,
      name: "shahil",
      language: "English,Tamil",
      experience: "5 Years",
      expertise: "Lal Kitab",
      rating: 4.87,
      reviews: 1150,
      price: 25,
      status: "offline",
      image: pp4,
    },{
      id: 5,
      name: "shivam",
      language: "Hindi",
      experience: "2 Years",
      expertise: "Vedic",
      rating: 4.95,
      reviews: 1944,
      price: 20,
      status: "online",
      image: pp5,
    },
    {
      id: 6,
      name: "Astro shiv",
      language: "English,Tamil",
      experience: "5 Years",
      expertise: "Lal Kitab",
      rating: 4.87,
      reviews: 1150,
      price: 25,
      status: "offline",
      image: pp6,
    },{
      id: 7,
      name: "Astro Aadrika",
      language: "Hindi",
      experience: "2 Years",
      expertise: "Vedic",
      rating: 4.5,
      reviews: 1944,
      price: 12,
      status: "offline",
      image: pp7,
    },
    {
      id: 8,
      name: "Astro Karan",
      language: "English,Tamil",
      experience: "5 Years",
      expertise: "Lal Kitab",
      rating: 4.87,
      reviews: 1150,
      price: 12,
      status: "online",
      image: pp8,
    },
      {
      id: 9,
      name: "Astro Guru",
      language: "English,Tamil,Hindi",
      experience: "3 Years",
      expertise: "Lal Kitab",
      rating: 4.77,
      reviews: 1250,
      price: 15,
      status: "online",
      image: pp9,
    },

  ];

  const handleMouseOver = (index) => setScale(index);
  const handleMouseLeave = () => setScale(null);

  const showAstrologers = () =>
    data.map((item, index) => (
      <Paper
        key={index}
        elevation={getScale === index ? 20 : 10}
        onMouseOver={() => handleMouseOver(index)}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: "transform 0.3s, box-shadow 0.3s",
          transform: getScale === index ? "scale(1.05)" : "scale(1)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: 330,
          padding: 16,
          margin: 15,
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          cursor: "pointer",
        }}
      >
        {/* Top section */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{ position: "relative" }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            {item.status === "online" && (
              <span
                style={{
                  position: "absolute",
                  top: 3,
                  right: 3,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "green",
                  border: "2px solid white",
                }}
              ></span>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: 16 }}>
                {item.name}
              </div>
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: 15,
                  fontSize: 12,
                  padding: "2px 8px",
                  background: "#2ecc71",
                  cursor: "pointer",
                }}
              >
               ✔ Verified
              </div>
            </div>

            <div
              style={{
                fontSize: 13,
                color: "gray",
                display: "flex",
                flexDirection: "column",
                marginTop: 4,
              }}
            >
              <span>🗣️ {item.language}</span>
              <span>🎓 {item.experience}</span>
              <span>🔮 {item.expertise}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", marginTop: 4 }}>
              <StarIcon
                style={{ color: "#f1c40f", fontSize: 16, marginRight: 4 }}
              />
              <span style={{ fontWeight: 500, fontSize: 13 }}>
                {item.rating}
              </span>
              <span style={{ fontSize: 13, color: "gray", marginLeft: 4 }}>
                | {item.reviews}
              </span>
            </div>
          </div>
        </div>

        {/* Price & Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #ddd",
            marginTop: 10,
            paddingTop: 10,
          }}
        >
          <div style={{ fontWeight: "bold", color: "#000" }}>
            ₹{item.price}/Min
          </div>

          <div style={{ display: "flex", gap: 6 }}>
            <button
              style={{
                backgroundColor:  "#2ecc71",
                color: "white",
                border: "none",
                borderRadius: 20,
                padding: "4px 10px",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 4,
                cursor:  "pointer" ,
              }}
            >
              <ChatIcon style={{ fontSize: 14 }} />
              CHAT
            </button>


<button
              style={{
                backgroundColor:
                  item.status === "online" ? "#2ecc71" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: 20,
                padding: "4px 10px",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 4,
                cursor: item.status === "online" ? "pointer" : "not-allowed",
              }}
            >
              <VideoCameraBackIcon style={{ fontSize: 14 }} />
              videocall
            </button>



            <button
              style={{
                backgroundColor:
                  item.status === "online" ? "#2ecc71" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: 20,
                padding: "4px 10px",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 4,
                cursor: item.status === "online" ? "pointer" : "not-allowed",

              }}
            >
              <AddCallIcon style={{ fontSize: 14 }} />
             call
            </button>
          </div>
        </div>
      </Paper>
    ));

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {showAstrologers()}
    </div>
  );
}

