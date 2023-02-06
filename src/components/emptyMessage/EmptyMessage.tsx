import React from "react";

import './styles.css'

interface Props {
  message?: string;
}

const EmptyMessage: React.FC<Props> = ({ message = 'No Data Available' }) => {
  return <div className="empty-message">{message}</div>;
};

export default EmptyMessage;
