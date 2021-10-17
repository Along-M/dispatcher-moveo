import ArrowRightIcon from "../../../assets/icons/Arrow-Right.svg";
import { ButtonTypes } from "../types";
import { StyledBtn } from "./style";

export interface ButtonProps {
  variant: ButtonTypes;
  // content?: string;
  children: React.ReactChild | React.ReactChild[];
  withIcon: boolean;
  onClick?: () => void;
}

const Button = ({ variant, onClick, withIcon, children }: ButtonProps) => {
  const btnVarient = variant ? variant : "primary-blue-btn";
  return (
    <div onClick={onClick}>
      <StyledBtn className={btnVarient}>
        {children}
        {withIcon && <img src={ArrowRightIcon} className="icon-primary-btn" />}
      </StyledBtn>
    </div>
  );
};

export default Button;
