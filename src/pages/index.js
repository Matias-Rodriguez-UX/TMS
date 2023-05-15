import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";

const loader = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#09152C",
    }}
  >
    <span class="loader"></span>
  </div>
);

//
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"),
  loading: loader,
});

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Index;
