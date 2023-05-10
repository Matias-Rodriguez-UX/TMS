import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import downArrow from "../../assets/downArrow.svg";

import "./style.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  useEffect(() => {
    gsap.to("#header-text", {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  });
  return (
    <section className="header-container" data-scroll-section id="header">
      <Navbar />
      <div className="header-title">
        <h1 id="header-text">
          Ingeniería energética y eficiencia a tu alcance
        </h1>
        <h2 className="header-subtitulo">
          Servicio de asesoría técnica para proyectos de energía, de principio a
          fin
        </h2>
      </div>
    </section>
  );
};

export default Header;
