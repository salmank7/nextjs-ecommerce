"use client";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-[#757575]  text-xl w-full py-12 text-center text-white">
      {title}
    </div>
  );
};

export default Header;
