import React from "react";
import "./style.scss";

function ContactButton() {
  const handleClick = () => {
    window.location.href = "mailto:comercial@tmsingenieria.com.ar";
  };

  return (
    <button className="button-contact" onClick={handleClick}>
      Contactar
    </button>
  );
}

export default ContactButton;
