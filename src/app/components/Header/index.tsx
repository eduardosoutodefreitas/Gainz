"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import DesktopNavbar from "./DesktopNavLinks";
import MobileLinks from "./MobileNavLinks";
import Logo from "../Logo/Logo";
import LoginButton from "../LoginButton/LoginButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Navbar
      maxWidth='2xl'
      onMenuOpenChange={setIsMenuOpen}
      className='py-2 px-0 xs:px-[1.5rem]'
    >
      {/* Hamburguer and Logo */}
      <NavbarContent className='gap-2 xs:gap-4'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='md:hidden'
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <DesktopNavbar />

      {/* Sign and Sign Up */}
      <LoginButton />
      <MobileLinks />
    </Navbar>
  );
}
