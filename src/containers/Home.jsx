import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "../styles/home.scss";
import {
  About,
  Header,
  Services,
  Solutions,
  Clients,
  Footer,
} from "../components/index";
import useLocoScroll from "../hooks/useLocoScroll";
import logo from "../assets/TMS_logo.svg";

const Home = () => {
  const [preLoader, setPreLoader] = useState(true);

  useLocoScroll(!preLoader);

  const [time, setTime] = useState(3);

  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreLoader(false);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (time === 0) {
      clear();
    }
  }, [time]);

  return (
    <>
      {preLoader ? (
        <div className="loader-wrapper absolute">
          <img
            src={logo}
            alt=""
            style={{ width: "100px", height: "auto", marginBottom: "2rem" }}
          />
          <h1>TMS INGENIERIA</h1>
          <h2>Argentina</h2>
        </div>
      ) : (
        <>
          <div
            className="main-container"
            id="main-container"
            data-scroll-container
          >
            <Header />
            <About />
            <Clients />
            <Solutions />
            <Services />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};
export default Home;
