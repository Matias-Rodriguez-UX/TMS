import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import downArrow from "../../assets/downArrow.svg";

import "./style.scss";

const Header = () => {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText("#header-parent", {
      type: "lines",
      linesClass: "lineParent",
    });
    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  });
  return (
    <section className="header-container" data-scroll-section id="header">
      <h1 id="header-text">TMS ingeniería</h1>
      <img
        src={downArrow}
        alt=""
        style={{
          width: "80px",
          height: "auto",
          position: "absolute",
          left: "45%",
        }}
        className="arrows"
      />
    </section>
  );
};

export default Header;
