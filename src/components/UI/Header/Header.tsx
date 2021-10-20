import * as React from "react";
import { HeaderContainer } from "../containers";
import { Icon, IconContainer, RightIconsContainer } from "./style";
import logoIcon from "../../../assets/icons/LOGO.svg";
import userAvataIcon from "../../../assets/icons/UserAvatar.svg";
import settingsIcon from "../../../assets/icons/settings.svg";
import notificationIcon from "../../../assets/icons/notifications.svg";
import Search from "../Serach/Search";

export interface HeaderProps {
  children?: React.ReactChild | React.ReactChild[];
}

const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderContainer>
      <IconContainer>
        <Icon src={logoIcon} />
      </IconContainer>
      <Search></Search>
      <RightIconsContainer>
        <Icon src={settingsIcon} className="settings-icon" />
        <Icon src={notificationIcon} className="notification-icon" />
        <Icon src={userAvataIcon} className="user-avatar-icon" />
      </RightIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
