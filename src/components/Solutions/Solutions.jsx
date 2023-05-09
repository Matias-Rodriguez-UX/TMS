import React from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import useOnScreen from "../../hooks/useOnScreen.js";
import cn from "classnames";

const Solutions = () => {
  const ref = useRef();

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
      });
      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  return (
    <section data-scroll-section className={cn("about-section")} id="solutions">
      <SectionHeader title="Soluciones" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Nos comprometemos a brindar soluciones innovadoras y eficientes que
        cumplan con las necesidades específicas de cada proyecto y aseguren su
        éxito a largo plazo. Con nuestro profesionalismo y experiencia, puede
        confiar en que su proyecto estará en buenas manos.
      </p>
    </section>
  );
};

export default Solutions;
