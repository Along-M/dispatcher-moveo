import styled from "styled-components";


export const FilterCointainer = styled.div`
  width: 175px;
  height: 47px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4rem;
  color: white;
  border-radius: 10px;
  background: #ffff;
  z-index: 1;
  &.nav-bar-filter-container {
    /* height: 3rem; */
    width: 40%;
    /* height: 50px; */
  }
`


export const DropdownSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  border-radius: 10px;
  padding: 0 15px;
  /* &.nav-bar-filter {
    border-radius: 0px 10px 10px 0;
    justify-content: space-evenly;
    margin:0;
    height: 100%;
  } */
`;

export const DropdownArrowIcon = styled.img`
  /* margin-right: 10px; */
  ` 
export const OptionsContainer = styled.div`
    height: 125px;
    background: white;
    border-radius: 5px;
    overflow: scroll;
    margin-top: 5px;
    &::-webkit-scrollbar {
    background: none;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #5A5A89;
  }
  `;

export const Option = styled.option`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1rem;
  letter-spacing: 0.1px;
  color: #5A5A89; 
  padding-left: 23px;
  height: 28px;
  display:flex;
  align-items: center;
  :hover{
    background: rgba(223, 224, 235, 0.41);
  }
  `;

export const FilterHeader = styled.span`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #5A5A89;
`

