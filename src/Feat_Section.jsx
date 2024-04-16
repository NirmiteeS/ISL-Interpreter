import React from "react";
import Image2 from "./assets/img1.jpg";
import Image1 from "./assets/img2.jpg";
import Image3 from "./assets/img3.jpg";
import Cards from "./cards";
import style from "./Feat_Section.module.css";

function Feat_Section() {
  return (
    <div className={style.feature}>
      <div className={style.wrapper}>
        <Cards
          head="Deep Learning Image Recognition"
          image={Image1}
          para="Our Sign Language Interpreter Web Application employs state-of-the-art deep learning algorithms for precise interpretation of sign language gestures. "
        />
        <Cards
          head="Multilingual Support"
          image={Image2}
          para="Experience the freedom to communicate in your preferred spoken language with our Multilingual Support feature. Our application allows users to choose languages "
        />
        <Cards
          head="Real Time Interpretation"
          image={Image3}
          para="Say goodbye to communication barriers with our Real-Time Interpretation feature. Enjoy instant translation of sign language gestures into spoken language."
        />
      </div>
    </div>
  );
}

export default Feat_Section;
