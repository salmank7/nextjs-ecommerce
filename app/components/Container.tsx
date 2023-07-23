"use client";

interface ContainerProps {
  children: React.ReactNode;
  small?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, small }) => {
  return (
    <div
      className={`max-w-[2520px] mx-auto ${small ? "px-4 md:px-40" : "px-4"}`}
    >
      {children}
    </div>
  );
};

export default Container;
