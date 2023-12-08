import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import socials from "@/constants/Socials";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <footer className='p-5'>
      <div className='w-full container mx-auto flex flex-col items-center gap-5 sm:flex-row justify-center sm:justify-between'>
        <Logo size='small' />
        <div className='w-full sm:w-4/6 max-w-xl flex justify-between items-center gap-5 xs:gap-0'>
          <Link
            className='pb-1 border-b font-medium hover:text-secondary hover:border-secondary transition-all duration-150'
            href='/'
          >
            Home
          </Link>
          <Link
            className='pb-1 border-b font-medium hover:text-secondary text-center hover:border-secondary transition-all duration-150'
            href='/create-workout'
          >
            Create workout
          </Link>
          <Link
            className='pb-1 border-b font-medium hover:text-secondary hover:border-secondary transition-all duration-150'
            href='/about'
          >
            About
          </Link>
        </div>
        <div className='w-full xs:w-[300px] flex justify-between items-center'>
          {socials.map((social) => (
            <Social key={social.name} icon={social.icon} link={social.link} />
          ))}
        </div>
      </div>
      <div className='w-full container mx-auto h-[1px] bg-default my-5' />
      <div className='text-center'>
        Desenvolvido por{" "}
        <span className='font-medium text-secondary'>Eduardo</span> | Confira
        meu trabalho no{" "}
        <a
          href={"https://github.com/eduardosoutodefreitas"}
          className='font-medium text-secondary'
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
