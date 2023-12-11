import Link from "next/link";

interface SocialProps {
  icon: React.ReactNode;
  link: string;
  extraStyles?: string;
}
const Social = ({ icon, link, extraStyles = "" }: SocialProps) => {
  return (
    <Link
      className={`hover:text-secondary hover:-translate-y-1 transition-all duration-150 ${extraStyles}`}
      href={link}
    >
      {icon}
    </Link>
  );
};

export default Social;
