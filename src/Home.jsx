import React from "react";
import styles from "./Home.module.css";
// import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Typewriter from "typewriter-effect";
import hand from "./assets/hand.svg";
import "./App.css";

function Home() {
  return (
    <div className={styles.round}>
      <section className={styles.container}>
        <div className={`${styles.content} ss-home-heading`}>
          {/* <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Sign Sense")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Sign Language Interpreter")
                        .start()
                        .callFunction(() => {
                            typewriter.start();
                        });
                }}
            /> */}
          <Typewriter
            options={{
              strings: ["Sign Sense"], // Array of strings to be typed
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter-wrapper",
              cursorClassName: "typewriter-cursor",
            }}
          />
          <p className={styles.subtitle}>
            Your language, our technology: Empowering the deaf community with
            personalized interpretation.
          </p>
          <p className={styles.description}></p>
        </div>
        <img src={hand} alt=" " className={styles.heroImg} />
      </section>
    </div>
  );
}

export default Home;
