import styled from "styled-components";
// import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";



// export const FilterCointainer = styled.div`
//   width: 175px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around; 
//   align-items: center;
//   height: 47px;
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.4rem;
//   color: white;
//   border-radius: 10px;
//   background: #ffff;
//   justify-content: end;
// `


export const DropdownSelect = styled.div`
  width: 175px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4rem;
  color: white;
  border-radius: 10px;
  background: #ffff;
  margin-bottom: 6.5px;
`;

export const DropdownArrowIcon = styled.img`
  margin-right: 10px;
  `
  
  
export const OptionsContainer = styled.div`
    display:flex;
    flex-direction: column;
    height: 125px;
    width:175px;
    background: white;
    border-radius: 10px;
    overflow: scroll;
    &::-webkit-scrollbar {
    background: none;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #5A5A89;
  }
  `;

export const Option = styled.div`
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
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #5A5A89;
    margin-left: 23px;
`

