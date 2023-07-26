interface HeadingProps {
  label: string;
}

const Heading: React.FC<HeadingProps> = ({ label }) => {
  return (
    <div className="text-center py-6 md:py-14 bg-[#757575] text-white text-xl font-semibold">
      {label}
    </div>
  );
};

export default Heading;
