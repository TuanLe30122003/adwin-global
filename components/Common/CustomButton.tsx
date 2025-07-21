"use client";

import React from "react";
import styled from "styled-components";
// Nếu bạn muốn dùng thư viện `classnames` để kết hợp nhiều class một cách có điều kiện:
// import cn from 'classnames'; // Cài đặt: npm install classnames hoặc yarn add classnames

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string; // Thêm prop `className`
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    // Truyền prop `className` xuống StyledButton
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  align-items: center;
  letter-spacing: 0.8px;
  clip-path: polygon(
    0px 0px,
    calc(100% - 20px) 0px,
    100% 20px,
    100% 100%,
    20px 100%,
    0px calc(100% - 20px)
  );
`;
