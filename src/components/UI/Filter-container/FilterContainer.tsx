import React from "react";
import { FilterContainer } from "./style";

export interface MainBodyContainerProps {
  children: React.ReactChild | React.ReactChild[];
}

const Card = ({ children }: MainBodyContainerProps) => {
  return <FilterContainer>{children}</FilterContainer>;
};

export default Card;
