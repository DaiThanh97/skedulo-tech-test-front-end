import React from "react";
import Circle from "../components/circle/Circle";

const LeftSideBar = () => {
  return (
    <div className="container">
      <div className="top">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </div>
      <Circle />
    </div>
  );
};

export default LeftSideBar;
