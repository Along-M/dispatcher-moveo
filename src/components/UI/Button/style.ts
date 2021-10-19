import styled from "styled-components";



export const StyledBtn = styled.button`
  border-radius: 20px;
  width: 242px;
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  align-items: center;
  border: none; 
  height: 36px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: white;
  height: 36px;
  left: 8px;
  top: 79px;
  background: #0058B9;
  align-self: flex-end;
  &:hover {
    opacity: 0.8;
  }
  &.welcome-btn {
    width: 100%;
    border-radius: 10px;
  }
  &.secondary-gray-btn {
    background: #D9DBE9;
    color: #5A5A89;
  }
  &.text-transparent-btn {
    background: none;
    color: #5A5A89;
    &:hover {
    background: rgba(217, 219, 233, 0.3);
  }
  &.primary-blue-btn .icon-primary-btn {
    margin-left: 8px;
  }
}
`;
