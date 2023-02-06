import React, { PropsWithChildren } from "react";

import { ExtendedGenericType, Properties } from "./types";
import Head from "./Head";
import Row from "./Row";

import "./styles.css";

interface Props<T> {
  items: T[];
  properties: Properties;
}

function Table<T extends ExtendedGenericType>({
  items,
  properties,
}: PropsWithChildren<Props<T>>) {
  return (
    <table className="styled-table">
      <Head properties={properties} />
      <tbody>
        {items.map((item) => (
          <Row key={item.id} item={item} properties={properties} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
