import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <FiChevronLeft />
    </div>
  );
};

export const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <FiChevronRight />
    </div>
  );
};
