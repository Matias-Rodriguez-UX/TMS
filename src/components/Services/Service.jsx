import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";
import "./style.scss";

const Service = ({ src, title, services, updateActiveService, index }) => {
  const ref = useRef();
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveService(index);
    }
  }, [index, onScreen]);

  return (
    <div
      className={cn("gallery-item-wraper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          {services.map((service, index) => (
            <div key={index}>
              <p className="gallery-info-category">{service}</p>
              <br />
            </div>
          ))}
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
