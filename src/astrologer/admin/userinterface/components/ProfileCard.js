import React, { useRef } from "react";
import Slider from "react-slick";
import { Box, Paper, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCardItem from "./ProfileCardItem"; // child component

export default function ProfileCard({ data }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  const handleLeft = () => sliderRef.current.slickPrev();
  const handleRight = () => sliderRef.current.slickNext();

  return (
    <Paper
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
        background:'#ecf0f1'
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: "rgb(28,28,28)",
          fontSize: matches ? "4vw" : "2vw",
          fontWeight: 600,
          mb: 4,
          width: "80%",
        }}
      >
        Astrologer Profile ✅
      </Typography>

      {/* Left Arrow */}
      {!matches && (
        <Box
          onClick={handleLeft}
          sx={{
            cursor: "pointer",
            left: "6%",
            top: "55%",
            position: "absolute",
            boxShadow: "2px 2px 6px grey",
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <KeyboardArrowLeftIcon />
        </Box>
      )}

      {/* Slider */}
      <Box sx={{ width: "80%" }}>
        <Slider {...settings} ref={sliderRef}>
          {data.map((item) => (
            <ProfileCardItem key={item.id} item={item} />
          ))}
        </Slider>
      </Box>

      {/* Right Arrow */}
      {!matches && (
        <Box
          onClick={handleRight}
          sx={{
            cursor: "pointer",
            right: "6%",
            top: "55%",
            position: "absolute",
            boxShadow: "2px 2px 6px grey",
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <KeyboardArrowRightIcon />
        </Box>
      )}
    </Paper>
  );
}
