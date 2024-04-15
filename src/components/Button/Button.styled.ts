import { css, styled } from "styled-components";
import { ButtonProps } from ".";

export const StyledButton = styled.button<Pick<ButtonProps, "variant">>`
  position: relative;
  width: 10.4375rem;
  height: 3.9375rem;
  border-radius: 1.96875rem;
  border: none;
  color: #fff;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 1.96875rem;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    &::before {
      opacity: 0.4;
    }
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: linear-gradient(180deg, #ff6f48 0.04%, #f02aa6 100%);
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: linear-gradient(180deg, #4851ff 0%, #f02aa6 99.92%);
    `}


  @media (max-width: 768px) {
    width: 8.75rem;
    height: 3rem;
    border-radius: 1.75rem;
    font-size: 1rem;
  }
`;
