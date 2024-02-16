interface SectionTitleProps {
  extraStyles?: string;
  children: React.ReactNode;
}

const SectionTitle = ({ children, extraStyles = "" }: SectionTitleProps) => {
  const titleStyles = "text-2xl lg:text-3xl capitalize font-medium";
  return <h2 className={`${titleStyles} ${extraStyles}`}>{children}</h2>;
};

export default SectionTitle;
