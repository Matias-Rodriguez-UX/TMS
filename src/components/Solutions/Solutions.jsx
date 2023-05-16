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
    <section
      data-scroll-section
      className={cn("solution-section")}
      id="solutions"
    >
      <div className="solution-info">
        <div className="solution-text">
          <SectionHeader title="Soluciones para cada necesidad y para cada cliente" />
          <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
            Brindamos soluciones innovadoras y eficientes que cumplen con las
            necesidades específicas de cada proyecto y aseguran su éxito a largo
            plazo. Con nuestro profesionalismo y experiencia, puede confiar en
            que su proyecto estará en buenas manos.
          </p>
        </div>
        <div className="contenedor-imagen-solucion">
          <div className="image-form"></div>
          <div className="image-solution"></div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
