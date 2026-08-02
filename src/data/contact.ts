import { GithubIcon } from "@dev.icons/react/mono";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import type { ContactButtonPropsType } from "@/types/contact-button";

export const email: ContactButtonPropsType = {
  icon: FiMail,
  name: "hello@angelperez.io",
  rightIcon: FiArrowUpRight,
  url: "mailto:hello@angelperez.io",
};

export const socials: ContactButtonPropsType[] = [
  { icon: VscTwitter, name: "AngelTheMaker", url: "https://x.com/AngelTheMaker" },
  {
    icon: FaLinkedin,
    iconStyle: "text-[#0C65C2]",
    name: "angelprz",
    url: "https://linkedin.com/in/angelprz",
  },
];

export const code: ContactButtonPropsType[] = [
  { icon: GithubIcon, name: "angelprzz", url: "https://github.com/angelprzz" },
];
