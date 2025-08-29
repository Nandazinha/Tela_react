import React from "react";
import TwitterCard from "./components/TwitterCard";
import InstagramCard from "./components/InstagramCard";
import YoutubeCard from "./components/YoutubeCard";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <TwitterCard />
      <InstagramCard />
      <YoutubeCard />
    </div>
  );
}
