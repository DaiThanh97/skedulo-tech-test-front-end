import React from "react";

import "./styles.css";

const Card: React.FC<any> = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export default Card;
