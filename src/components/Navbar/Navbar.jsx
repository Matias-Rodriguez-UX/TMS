import React from "react";
import "./style.scss";
import logo from "../../assets/TMS_ing_logo.svg";
import { linkedin, twitter, instagram } from "../../assets/logos";

const Navbar = () => {
  const links = document.querySelectorAll(".link a[data-section]");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // evita que se recargue la página al hacer clic en el enlace
      const sectionId = link.dataset.section;
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" }); // hace un scroll suave hasta la sección
    });
  });
  return (
    <div className="navbar" data-scroll-section>
      <div>
        <img
          src={logo}
          alt=""
          style={{ width: "auto", height: "70px", marginTop: "-2rem" }}
        />
      </div>
      <div className="button-nav">
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
  );
};

export default Navbar;
