import React, { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string; // Thêm prop className là một chuỗi tùy chọn
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`px-16 w-full ${className || ""}`}>{children}</div>;
};

export default Container;
