import styled from "styled-components";

export const MainBodyCointainer = styled.section`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  margin: 0 auto;
  max-width: 80%;
`;

export const FiltersContainer = styled.section`
  display: flex;
  max-width: 100%;
  gap: 1.25rem;
`;


export const CardsContainer = styled.section`
  display: flex;
  max-width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  background: #FFFFFF;
  border: 1px solid #D9DBE9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  height: 15rem;
  max-width: 90%;
  &.data-card {
    width: 412px;
    height: 355px;
    flex-direction: column;
    align-items: baseline;
    padding: 1.6rem;
  }
`;
export const HeaderContainer = styled.section`
  display: flex;
  /* align-items: center; */
  background: #262146;
  height: 4.6rem;
  justify-content: space-between;
`;