import React from "react";
import "./AstroCard.css";

const actions = [
  {
    label: "Chat with Astrologer",
    icon: "💬",
    bgColor: "#f472b6", // pink
  },
  {
    label: "Talk to Astrologer",
    icon: "📞",
    bgColor: "#2dd4bf", // teal
  },
  {
    label: "Astromall Shop",
    icon: "🛒",
    bgColor: "#60a5fa", // blue
  },
  {
    label: "Book A Pooja",
    icon: "🪔",
    bgColor: "#fb923c", // orange
  },
];

export default function AstroCard() {
  return (
    <div className="astro-container">
      {actions.map((action, index) => (
        <div key={index} className="astro-card">
          <div
            className="astro-icon"
            style={{ backgroundColor: action.bgColor }}
          >
            <span className="astro-emoji">{action.icon}</span>
          </div>
          <p className="astro-label">{action.label}</p>
        </div>
      ))}
    </div>
  );
}
