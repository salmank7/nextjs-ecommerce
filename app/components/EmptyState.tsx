import Link from "next/link";
import React from "react";

interface EmptyStateProps {
  label: string;
  actionLabel: string;
  action: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  label,
  actionLabel,
  action,
}) => {
  return (
    <div className="h-[calc(100vh-290px)] w-full flex flex-col gap-6 items-center justify-center">
      <div className="text-2xl font-bold text-center">{label}</div>
      <Link
        href={action}
        className="border-2 px-5 py-3 text-lg rounded-xl hover:text-black hover:bg-white bg-black text-white  hover:border-black"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default EmptyState;
