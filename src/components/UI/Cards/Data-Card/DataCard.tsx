import * as React from "react";
// import CardContainer from "../Card-Container/CardContainer";
import { CardContainer } from "../../containers";
import { CardTypes } from "../../types";
import { DataCardTitle, DataCardDivider } from "./style";

export interface DataCardProps {
  children?: React.ReactChild | React.ReactChild[];
  title: string;
}

const DataCard = ({ children, title }: DataCardProps) => {
  return (
    <CardContainer className="data-card">
      <DataCardTitle>{title}</DataCardTitle>
      <DataCardDivider />
    </CardContainer>
  );
};

export default DataCard;
