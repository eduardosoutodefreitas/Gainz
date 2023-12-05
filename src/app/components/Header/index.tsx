"use client";
import { IoIosLogIn } from "react-icons/io";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Logo from "./Logo";
import { useState } from "react";
import DesktopNavbar from "./DesktopNavLinks";
import MobileLinks from "./MobileNavLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='py-2'>
      {/* Hamburguer and Logo */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <DesktopNavbar />

      {/* Sign and Sign Up */}
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            startContent={<IoIosLogIn size={25} />}
            as={Link}
            className='text-base px-5'
            color='secondary'
            href='#'
            variant='shadow'
            radius='sm'
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <MobileLinks />
    </Navbar>
  );
}
