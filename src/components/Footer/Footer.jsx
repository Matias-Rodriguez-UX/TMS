import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import SectionHeader from "../SectionHeader/SectionHeader";
import useOnScreen from "../../hooks/useOnScreen.js";
import cn from "classnames";
import "./style.scss";
import ContactButton from "../Button/ContactButton";
import logo from "../../assets/TMS_logo.svg";
import { instagram, linkedin, twitter } from "../../assets/logos";

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
    <footer class="footer-distributed" data-scroll-section>
      <div class="footer-left">
        <div className="logo-arg">
          <img
            src={logo}
            alt=""
            style={{ width: "auto", height: "70px", marginTop: "-2rem" }}
          />
          <div className="logo-text">
            <h1>TMS INGENIERIA</h1>
          </div>
        </div>

        <p class="footer-links">
          <a href="#">Inicio</a>

          <a href="#">Nosotros </a>

          <a href="#">Clientes </a>

          <a href="#">Servicios </a>
        </p>

        <p class="footer-company-name">Company Name © 2015</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>Dardo Rocha 160</span> Martinez, San isidro
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+54 9 2262-607630</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:comercial@tmsingenieria.com.ar">
              comercial@tmsingenieria.com.ar
            </a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <div className="sector-boton">
          <ContactButton />
        </div>
        <div class="footer-icons">
          <a
            href="https://www.linkedin.com/company/tmsingenieria"
            target="_blank"
          >
            <img
              src={linkedin}
              alt=""
              style={{
                cursor: "pointer",
                marginRight: "2rem",
                marginTop: "1rem",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/tmsingenieria"
            target="_blank"
          >
            <img
              src={instagram}
              alt=""
              style={{
                cursor: "pointer",
                marginRight: "2rem",
                marginTop: "1rem",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/tmsingenieria"
            target="_blank"
          >
            <img
              src={twitter}
              alt=""
              style={{
                cursor: "pointer",
                marginRight: "2rem",
                marginTop: "1rem",
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
