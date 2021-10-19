import { useState } from "react";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import { FilterCategories } from "../types";
import {
  FilterCointainer,
  DropdownSelect,
  FilterHeader,
  OptionsContainer,
  DropdownArrowIcon,
  Option,
} from "./style";

export interface FilterProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  type?: FilterCategories;
}

const Filter = ({ children, type, dropDownOptions }: FilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const toggleFilterOptions = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const options = dropDownOptions?.map((option) => {
    return <Option>{option}</Option>;
  });
  return (
    <FilterCointainer>
      <DropdownSelect onClick={toggleFilterOptions}>
        <FilterHeader>{type}</FilterHeader>
        <DropdownArrowIcon src={DropdownArrow} />
      </DropdownSelect>
      {isFilterOpen && (
        <OptionsContainer>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
        </OptionsContainer>
      )}
    </FilterCointainer>
  );
};

export default Filter;
