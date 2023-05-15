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

const About = () => {
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
    <section data-scroll-section className={cn("about-section")} id="about">
      <div className="about-info">
        <div className="about-text">
          <div style={{ marginLeft: "-3rem" }}>
            <SectionHeader title="Ingenieros al servicio de tu empresa" />
          </div>

          <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
            Somos un equipo de ingenieros altamente capacitados y especializados
            en el desarrollo y ejecución de proyectos de energía. Que ofrece un
            servicio integral de asistencia técnica en todas las etapas del
            proyecto, desde la concepción y análisis del negocio hasta el
            soporte en las actividades de construcción y operación.
          </p>
        </div>
        <div className="about-image-container">
          <div className="image-about"></div>
          <div className="form-about"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
