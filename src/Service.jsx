import React from "react";
import "./Service.css";
import serve from "./assets/Service-image.png"

function Service() {
  return (
    <div class="responsive-container-block bigContainer service-page">
      <div class="responsive-container-block Container">
        <img
          class="mainImg service-image"
          src={serve}
        ></img>
        <div class="allText aboveText service-text">
          <h3 class="text-blk subHeadingText text-7xl">
            Real-Time Interpreter
          </h3>
          <p class="text-blk description ">
            Experience seamless communication with our revolutionary Real-Time
            Interpreter Model, leveraging deep learning technology to
            effortlessly translate American Sign Language gestures into
            real-time dialogue.
            <br />
            <br />
            Breaking Barriers for a More Connected World: Explore Our
            Interpreter Model- click below!
          </p>
          <button class="explore">Interpreter</button>
        </div>
      </div>
    </div>
  );
}

export default Service;
