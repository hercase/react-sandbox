import { FC } from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "solid";
}

const Button: FC<ButtonProps> = ({ label, variant = "primary", onClick }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
