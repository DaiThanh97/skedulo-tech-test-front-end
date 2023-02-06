import React from "react";

import { ExtendedGenericType, Properties } from "./types";

interface Props<T> {
  item: T;
  properties: Properties;
}

function Row<T extends ExtendedGenericType>({ item, properties }: Props<T>) {
  return (
    <tr>
      {properties.map((property) => (
        <td key={String(property.key)}>{item[property.key]}</td>
      ))}
    </tr>
  );
}

export default Row;
