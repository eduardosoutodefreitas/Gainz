import { NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const DesktopNavbar = () => {
  return (
    <NavbarContent className='hidden md:flex gap-8' justify='center'>
      <NavbarItem>
        <Link
          color='foreground'
          className='hover:text-secondary text-lg'
          href='/'
        >
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          color='foreground'
          href='/create-workout'
          className='hover:text-secondary text-lg'
        >
          Create workout
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link
          color='foreground'
          className='hover:text-secondary text-lg'
          href='/about'
        >
          About
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};

export default DesktopNavbar;
