import { GithubIcon } from "@dev.icons/react";
import { FiArrowUpRight, FiFileText, FiMail } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import type { ContactButtonPropsType } from "@/types/contact-button";

export const email: ContactButtonPropsType = {
  icon: FiMail,
  name: "angelpxrz@gmail.com",
  rightIcon: FiArrowUpRight,
  url: "mailto:angelpxrz@gmail.com",
};

export const socials: ContactButtonPropsType[] = [
  { icon: VscTwitter, name: "AngelTheMaker", url: "https://x.com/AngelTheMaker" },
  { icon: GithubIcon, name: "angelprzz", url: "https://github.com/angelprzz" },
  { icon: LinkedinIcon, name: "angelprz", url: "https://linkedin.com/in/angelprz" },
];

export const others: ContactButtonPropsType[] = [{ icon: FiFileText, name: "Download CV", url: "/cv.pdf" }];
