import React from "react";
import "./style.scss";
import logo from "../../assets/TMS_logo_negativo.svg";

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
          style={{ width: "80px", height: "auto", marginTop: "-2rem" }}
        />
      </div>
      <div className="link">
        <a href="" data-section="about">
          Simulador
        </a>
      </div>
    </div>
  );
};

export default Navbar;
