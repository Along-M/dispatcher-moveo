import styled from "styled-components";



export const StyledBtn = styled.button`
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;
  padding: 0px 16px;
  position: absolute;
  border: none; 
  height: 36px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: white;
  position: absolute;
  width: 118px; 
  height: 36px;
  left: 8px;
  top: 79px;
  background: #0058B9;
  &:hover {
    opacity: 0.8;
  }
  &.welcome-btn {
    width: 750px;
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

// export const PrimaryButton = styled(StyledButton)`
//   color: white;
//   position: absolute;
//   width: 118px; 
//   height: 36px;
//   left: 8px;
//   top: 79px;
//   background: #0058B9;
//   &:hover {
//     opacity: 0.8;
//   }
// `


// export const WelcomeButton = styled(PrimaryButton)`
//   width: 780px;
//   border-radius: 0;
//   &:hover {
//     opacity: 0.8;
//   }
//   /* width: ${(props:any):any => props.width ? props.width + 'px' : '118px'}; */
// `

// export const SeconderyButton = styled(StyledBtn)`
//   background: #D9DBE9;
//   height: 36px;
//   color: #5A5A89;
//   &:hover {
//     opacity: 0.8;
//   }
//   width: ${(props:any):any => props.width ? props.width + 'px' : '115px'};
// `;

// export const TextButton = styled(StyledBtn)`
//   background: none;
//   height: 36px;
//   color: #5A5A89;
//   &:hover {
//     background: rgba(217, 219, 233, 0.3);
//   }
//   width: ${(props:any):any => props.width ? props.width + 'px' : '115px'};
// `;
