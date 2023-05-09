import React from "react";
import gsap from "gsap";
import {
  aggreko,
  bayacasal,
  codelco,
  eleseg,
  livent,
  sam,
  sinec,
  transelec,
  ypf,
  ypfluz,
} from "../../assets/logos";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./style.scss";

const Clients = () => {
  return (
    <section className="clientes-section" data-scroll-section id="clients">
      <SectionHeader title="Clientes" />
      <hr className="linea" />
      <div className="marquee">
        <ul className="marquee-content">
          <li>
            <img className="marquee-item" src={aggreko} alt="aggreko" />
          </li>
          <li>
            <img className="marquee-item" src={ypf} alt="ypf" />
          </li>
          <li>
            <img className="marquee-item" src={codelco} alt="codelco" />
          </li>
          <li>
            <img className="marquee-item" src={livent} alt="livent" />
          </li>
          <li>
            <img className="marquee-item" src={eleseg} alt="eleseg" />
          </li>
          <li>
            <img className="marquee-item" src={bayacasal} alt="bayacasal" />
          </li>
          <li>
            <img className="marquee-item" src={ypfluz} alt="ypfluz" />
          </li>
          <li>
            <img className="marquee-item" src={sinec} alt="sinec" />
          </li>
          <li>
            <img className="marquee-item" src={sam} alt="sam" />
          </li>
          <li>
            <img className="marquee-item" src={transelec} alt="transelec" />
          </li>
          <li>
            <img className="marquee-item" src={aggreko} alt="aggreko" />
          </li>
          <li>
            <img className="marquee-item" src={ypf} alt="ypf" />
          </li>
          <li>
            <img className="marquee-item" src={codelco} alt="codelco" />
          </li>
          <li>
            <img className="marquee-item" src={livent} alt="livent" />
          </li>
          <li>
            <img className="marquee-item" src={eleseg} alt="eleseg" />
          </li>
          <li>
            <img className="marquee-item" src={bayacasal} alt="bayacasal" />
          </li>
          <li>
            <img className="marquee-item" src={ypfluz} alt="ypfluz" />
          </li>
          <li>
            <img className="marquee-item" src={sinec} alt="sinec" />
          </li>
          <li>
            <img className="marquee-item" src={sam} alt="sam" />
          </li>
          <li>
            <img className="marquee-item" src={transelec} alt="transelec" />
          </li>
        </ul>
      </div>
      <hr className="linea" />
    </section>
  );
};

export default Clients;
