import { useState } from "react";
import Filter from "../Filter/Filter";
import { FilterCategories } from "../types";
import {
  SearchContainer,
  SearchInput,
  Icon,
  LogoIcon,
  SearchInputContainer,
  Divider,
} from "./style";
import searchIcon from "../../../assets/icons/search.svg";
import dividerLine from "../../../assets/icons/Line.svg";

export interface SearchProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  type?: FilterCategories;
}

const Search = ({ children, type, dropDownOptions }: SearchProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  return (
    <SearchContainer>
      <SearchInputContainer>
        <LogoIcon src={searchIcon}></LogoIcon>
        <SearchInput placeholder="Search"></SearchInput>
        {/* <Icon src={dividerLine}></Icon> */}
        <Divider />
        <Filter
          type={FilterCategories.TOP_HEADLINES}
          variant="nav-bar-filter"
        ></Filter>
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default Search;
