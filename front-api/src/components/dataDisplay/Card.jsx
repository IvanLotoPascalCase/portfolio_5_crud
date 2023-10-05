import React from "react";
import { cardStyles } from "../../styles/dataDisplay";

const Card = ({ children }) => {
  return <div className={cardStyles.body}>{children}</div>;
};

export default Card;
