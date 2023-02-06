import React from "react";

import "./styles.css";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const SearchBox: React.FC<Props> = ({ ...rest }) => {
  return (
    <div className="search-input">
      <input
        className="input"
        aria-label="search-input"
        type="search"
        {...rest}
      />
    </div>
  );
};

export default SearchBox;
