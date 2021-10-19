import styled from "styled-components";





export const IconContainer = styled.div`
  display: flex;
  `;
export const RightIconsContainer = styled(IconContainer)`
      align-items: center;
    width: 11rem;
    justify-content: space-evenly;
  `;

export const Icon = styled.img`
    &.settings-icon {
        width: 26px;
        height: 26px;
    }
    &.notification-icon{
        width: 26px;
        height: 26px;

    }
    &.user-avatar-icon{
        width: 47px;
        height: 47px;
    }
    `
  



