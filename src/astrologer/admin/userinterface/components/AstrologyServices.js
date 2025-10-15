import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import AstrologyCard from "./AstrologyCard";

import horoscopeIcon from "../../../../assets/horoscope.png";
import kundliIcon from "../../../../assets/scroll.png";
import compatibilityIcon from "../../../../assets/couple.png";
import marriageIcon from "../../../../assets/wedding-ring.png";

export default function AstrologyServices() {

  const data = [
    { id: 1, icon: horoscopeIcon, title: "Today's Horoscope", desc: "Unsure about how your day will unfold? Get free Aries horoscope online prediction from top astrologer. Read your Aries Zodiac Sign Horoscope today!" },
    { id: 2, icon: kundliIcon, title: "Free Kundli", desc: "Generate your free online kundli report from Astrotalk. Our Kundli software can help you predict the future for yourself by reading the birth chart." },
    { id: 3, icon: compatibilityIcon, title: "Compatibility", desc: "Confused by love? Remove the doubts & find the sparks! Check the compatibility with your partner using our tool and ignite a love that lasts forever." },
    { id: 4, icon: marriageIcon, title: "Kundli Matching", desc: "Check Love Compatibility and Marriage Prediction online at Astrotalk. Get the best Horoscope and kundli matching predictions today!" },
    { id: 5, icon: horoscopeIcon, title: "Today's Horoscope", desc: "Unsure about how your day will unfold? Get free Aries horoscope online prediction from top astrologer. Read your Aries Zodiac Sign Horoscope today!" },
    { id: 6, icon: kundliIcon, title: "Free Kundli", desc: "Generate your free online kundli report from Astrotalk. Our Kundli software can help you predict the future for yourself by reading the birth chart." },
    { id: 7, icon: compatibilityIcon, title: "Compatibility", desc: "Confused by love? Remove the doubts & find the sparks! Check the compatibility with your partner using our tool and ignite a love that lasts forever." },
    { id: 8, icon: marriageIcon, title: "Kundli Matching", desc: "Check Love Compatibility and Marriage Prediction online at Astrotalk. Get the best Horoscope and kundli matching predictions today!" }
  ];

  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  const handleLeft = () => sliderRef.current.slickPrev();
  const handleRight = () => sliderRef.current.slickNext();

  return (
    <Box sx={{ width: "100%", background: "#F39C12", py: 5 }}>
      {/* Inner Box — content centered & 80% width */}
      <Box sx={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          COMPLIMENTARY ASTROLOGY SERVICES
        </Typography>

        <Box sx={{ position: "relative" }}>
          {window.innerWidth >= 600 && (
            <Box
              onClick={handleLeft}
              sx={{
                position: "absolute",
                left: -40,
                top: "45%",
                zIndex: 2,
                cursor: "pointer",
                background: "#fff",
                borderRadius: "50%",
                width: 34,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              <KeyboardArrowLeftIcon />
            </Box>
          )}

          <Slider {...settings} ref={sliderRef}>
            {data.map((item) => (
              <AstrologyCard key={item.id} item={item} />
            ))}
          </Slider>

          {window.innerWidth >= 600 && (
            <Box
              onClick={handleRight}
              sx={{
                position: "absolute",
                left: '98.7%',
                top: "45%",
                zIndex: 2,
                cursor: "pointer",
                background: "#fff",
                borderRadius: "50%",
                width: 34,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              <KeyboardArrowRightIcon />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
