interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div
      className="flex items-center justify-center
 gap-x-8 py-10"
    >
      <div className="w-[100px] h-[4px] bg-black"></div>
      <div className="font-bold text-2xl uppercase">{title}</div>
      <div className="w-[100px] h-[4px] bg-black"></div>
    </div>
  );
};

export default SectionTitle;
