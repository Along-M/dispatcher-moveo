import * as React from "react";
import { CardListContainer } from "./style";
import DataCard from "../Data-Card/DataCard";

type data = {
  grpah: string;
};

export interface DataCardListProps {
  children?: React.ReactChild | React.ReactChild[];
  data?: data;
}

const DataCardList = ({ children, data }: DataCardListProps) => {
  return (
    <CardListContainer>
      <DataCard title={"Sources"}></DataCard>
      <DataCard title={"Dates"}></DataCard>
      <DataCard title={"Tags"}></DataCard>
    </CardListContainer>
  );
};

export default DataCardList;
