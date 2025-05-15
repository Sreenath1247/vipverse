import React from "react";
import xboxIcon from "../assets/images/xbox.png";
import ytIcon from "../assets/images/youtube.png";
import logo from "../assets/images/logo.png";

const About = () => {
  return (
    <div className="text-white w-full h-full text-center">
      <div className="flex flex-col items-center justify-center">
        <p>About VIPverse</p>
        <p className="my-5 text-5xl">Let's play games.</p>
        <p>A pure gamer aiming to play all games possible.</p>
        <div className="h-25">
          <a
            className="flex justify-center items-center"
            href="https://www.youtube.com/@vipverse"
            target="_blank"
          >
            <img className="w-30 h-25" src={ytIcon} />
            <img className="rounded-full w-15 h-15" src={logo} />
          </a>
        </div>
        <p>
          The Gamer's Multiverse. We do game movies, walkthroughs and complete
          series.
        </p>
      </div>
      <div className="fixed">
        <img src={xboxIcon} />
      </div>
    </div>
  );
};

export default About;
