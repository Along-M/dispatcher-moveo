import React from "react";
import { MainBodyCointainer } from "./style";

export interface MainBodyContainerProps {
  children: React.ReactChild | React.ReactChild[];
}

const Card = ({ children }: MainBodyContainerProps) => {
  return <MainBodyCointainer>{children}</MainBodyCointainer>;
};

export default Card;
