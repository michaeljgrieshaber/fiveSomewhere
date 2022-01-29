import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <div>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/BPCjC543llU"
        title="video"
      ></iframe>
    </div>
  );
}
