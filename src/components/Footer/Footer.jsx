import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import SectionHeader from "../SectionHeader/SectionHeader";
import useOnScreen from "../../hooks/useOnScreen.js";
import cn from "classnames";
import "./style.scss";

const Footer = () => {
  const ref = useRef();
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  useEffect(() => {
    const split = new SplitText("#location-text", {
      type: "lines",
    });
    gsap.fromTo(
      split.lines,
      { opacity: 0 },
      {
        duration: 2,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      }
    );
  }, [reveal]);

  return (
    <section className="footer" data-scroll-section id="footer">
      <h1
        ref={ref}
        id="location-text"
        className={cn("location", { "is-reveal": reveal })}
      >
        Por consultas escribinos a:
      </h1>
      <p className="email">comercial@tmsingenieria.com.ar</p>
    </section>
  );
};

export default Footer;
