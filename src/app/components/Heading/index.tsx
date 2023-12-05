interface SectionTitleProps {
  extraStyles?: string;
  children: React.ReactNode;
}

const SectionTitle = ({ children, extraStyles = "" }: SectionTitleProps) => {
  const titleStyles = "text-2xl md:text-3xl lg:text-4xl font-medium";
  return <h2 className={`${titleStyles} ${extraStyles}`}>{children}</h2>;
};

export default SectionTitle;
