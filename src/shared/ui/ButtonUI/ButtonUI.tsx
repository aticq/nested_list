import React from "react";
import styled, { keyframes, css } from "styled-components";

interface ButtonUIProps {
  onClick?: () => void;
  children: React.ReactNode;
  small?: boolean;
  variant?: "primary" | "secondary";
}

export const ButtonUI: React.FC<ButtonUIProps> = ({
  children,
  onClick,
  small,
  variant,
}) => {
  return (
    <StyledButton onClick={onClick} $small={small} $variant={variant}>
      {children}
    </StyledButton>
  );
};

const createHoverAnimation = (variant?: "primary" | "secondary") => {
  const fromColor = variant === "secondary" ? "#cccccc" : "#ff5c00";
  const toColor = variant === "secondary" ? "#b3b3b3" : "#e04e00";

  return keyframes`
      from {
          background-color: ${fromColor};
      }
      to {
          background-color: ${toColor};
      }
  `;
};

const StyledButton = styled.button<{
  $small?: boolean;
  $variant?: "primary" | "secondary";
}>`
  cursor: pointer;
  background-color: ${({ $variant }) =>
    $variant === "secondary" ? "#cccccc" : "#ff5c00"};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: ${({ $small }) => ($small ? "0.25rem 0.5rem" : "0.75rem 1.5rem")};
  font-size: ${({ $small }) => ($small ? "0.8rem" : "1rem")};
  transition: background-color 0.3s;

  &:hover {
    animation: ${({ $variant }) => css`
      ${createHoverAnimation($variant)} 0.3s forwards
    `};
  }

  &:active {
    transform: scale(0.98);
  }
`;
