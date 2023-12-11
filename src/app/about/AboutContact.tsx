import socials from "@/constants/Socials";
import Social from "../components/Social/Social";

const AboutContact = () => {
  return (
    <div className='flex items-center justify-center gap-8 mt-8 scale'>
      {socials.map((social) => (
        <Social
          key={social.name}
          extraStyles='scale-150'
          icon={social.icon}
          link={social.link}
        />
      ))}
    </div>
  );
};

export default AboutContact;
