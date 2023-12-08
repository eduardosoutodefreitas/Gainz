import Link from "next/link";

interface SocialProps {
  icon: React.ReactNode;
  link: string;
}
const Social = ({ icon, link }: SocialProps) => {
  return (
    <Link
      className='p-2 rounded-md border border-white hover:border-secondary hover:text-secondary hover:-translate-y-1 transition-all duration-150'
      href={link}
    >
      {icon}
    </Link>
  );
};

export default Social;
