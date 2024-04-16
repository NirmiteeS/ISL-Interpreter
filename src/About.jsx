import React from "react";
import "./About.css";
import upimage from "./assets/image1.png";
import downimage from "./assets/image2.png";


function About() {
  return (
    <>
      <div class="text-center p-8 ss-about">
        <div class="flex flex-wrap items-center mt-20 text-left text-center">
          <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src={upimage}
              alt="gem"
              class="inline-block rounded shadow-lg  border-merino-400 ss-image1"
            ></img>
          </div>
          <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 ss-text1">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-7xl">
              Comprehensive ASL Gesture Database
            </h3>
            <p class="sm:text-3xl mt-6">
              Our Sign Language Interpreter Web Application utilizes a
              comprehensive database of American Sign Language (ASL) gestures.
              This extensive collection ensures accurate and reliable
              translation of ASL gestures into spoken language output.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center mt-20 text-left text-center">
          <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src={downimage}
              alt="project members"
              class="inline-block rounded shadow-lg border-merino-400 ss-image2"
            ></img>
          </div>
          <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12 ss-text2">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-7xl">
              Cutting-Edge Deep Learning Algorithms
            </h3>
            <p class="sm:text-3xl mt-6">
              We employ cutting-edge deep learning algorithms to power our Sign
              Language Interpreter Web Application. These advanced algorithms
              enable real-time interpretation of ASL gestures, providing
              seamless communication experiences for users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
