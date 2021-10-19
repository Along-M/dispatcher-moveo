import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #D9DBE9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  overflow: hidden;
  height: 15rem;
  max-width: 90%;
  &.data-card {
    width: 412px;
    height: 355px;
    flex-direction: column;
    align-items: baseline;
    padding: 1.6rem;

    /* left: 0px;
    top: 402px;
    order: 1; */
  }
`;