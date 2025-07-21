import React, { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string; // Thêm prop className là một chuỗi tùy chọn
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`lg:px-16 md:px-10 min-[400px]:px-10 px-4 w-full ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
