import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://ucarecdn.com/c9210cdf-7f82-47ac-a7b6-15c9875f2dab/ScreenShot20220127at25001PM.png"
        alt="logo"
      ></img>
      <div className="headingTag">It's 5 O'Clock Somewhere!</div>
    </div>
  );
}
