import * as React from "react";
import { CardListContainer } from "./style";
import DataCard from "../Data-Card/DataCard";

export interface DataCardListProps {
  children?: React.ReactChild | React.ReactChild[];
}

const DataCardList = ({ children }: DataCardListProps) => {
  return <CardListContainer></CardListContainer>;
};

export default DataCardList;
