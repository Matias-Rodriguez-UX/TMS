import React, { useEffect, useRef, useState } from "react";
import infoServices from "./infoService";
import Service from "./Service";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cn from "classnames";

import "./style.scss";

const Services = () => {
  const [activeService, setActiveService] = useState(1);
  const ref = useRef(null);
  let anchoVentana = window.innerWidth;

  useEffect(() => {
    if (anchoVentana > 600) {
      setTimeout(() => {
        let sections = gsap.utils.toArray(".gallery-item-wraper");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            start: "top top",
            trigger: ref.current,
            scroller: "#main-container",
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: () => `+=${ref.current.offsetWidth}`,
          },
        });
        ScrollTrigger.refresh();
      });
    }
  }, []);

  const handleUpdateActiveService = (index) => {
    setActiveService(index + 1);
  };

  return (
    <section
      className="section-wrapper gallery-wrap"
      data-scroll-section
      id="services"
    >
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeService}</span>
          <span className="divider" />
          <span>{infoServices.length}</span>
        </div>
        {infoServices.map((service, index) => (
          <Service
            key={index}
            index={index}
            {...service}
            updateActiveService={handleUpdateActiveService}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
