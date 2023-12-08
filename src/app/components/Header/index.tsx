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
import LoginButton from "./LoginButton";
import Logo from "../Logo/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Navbar maxWidth='2xl' onMenuOpenChange={setIsMenuOpen} className='py-2'>
      {/* Hamburguer and Logo */}
      <NavbarContent>
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
