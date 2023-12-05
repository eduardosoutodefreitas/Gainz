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
import LoginButton from "./LoginButton";

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
      <LoginButton />

      <MobileLinks />
    </Navbar>
  );
}
