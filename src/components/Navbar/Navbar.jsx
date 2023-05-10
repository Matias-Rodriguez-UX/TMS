import React from "react";
import "./style.scss";
import logo from "../../assets/TMS_ing_logo.svg";
import ContactButton from "../Button/ContactButton";

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
        <ContactButton />
      </div>
    </div>
  );
};

export default Navbar;
