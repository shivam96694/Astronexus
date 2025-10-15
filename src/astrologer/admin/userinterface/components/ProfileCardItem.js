import React from "react";
import { Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ProfileCardItem({ item }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.05)" },
        p: 1,
        mx: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src={item.profilephoto}
          alt={item.name}
          style={{
            objectFit: "cover",
            boxShadow: "1px 0px 10px 1px #dcdcdc",
            width: matches ? "60%" : "60%",
            height: matches ? 60 : 120,
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      </div>

      <div
        style={{
          color: "rgb(54,54,54)",
          fontSize: matches ? "2vw" : "1.2vw",
          fontWeight: matches ? "bold" : 500,
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
          marginTop: 10,
        }}
      >
        {item.name}
      </div>

      <div
        style={{
          color: "rgb(28, 28, 28)",
          fontSize: matches ? "1.5vw" : "0.9vw",
          fontWeight: matches ? "bold" : 400,
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        ₹{item.rate}/Rupees
      </div>
    </Paper>
  );
}
