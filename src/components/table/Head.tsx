import React from "react";

import { Properties } from "./types";

interface Props {
  properties: Properties;
}

const Head: React.FC<Props> = ({ properties }) => {
  return (
    <thead>
      <tr>
        {properties.map((property) => (
          <th key={String(property.key)}>{property.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Head;
