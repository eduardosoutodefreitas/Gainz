import { Social } from "@/types/SocialTypes";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";

const socials: Social[] = [
  {
    icon: <FaLinkedin size={20} />,
    name: "Linkedin",
    link: "https://linkedin.com/in/eduardo-souto",
  },
  {
    icon: <FaDiscord size={20} />,
    name: "Discord",
    link: "https://discordapp.com/users/dev_freitas",
  },
  {
    icon: <FaGithub size={20} />,
    name: "Github",
    link: "https://github.com/eduardosoutodefreitas",
  },
];

export default socials;
