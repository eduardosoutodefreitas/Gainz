"use client";
import { NavbarContent, NavbarItem, Button } from "@nextui-org/react";

import { CiLogin } from "react-icons/ci";
import { signIn, signOut, useSession } from "next-auth/react";
import UserDropdown from "./UserDropdown";

const LoginButton = () => {
  const { status, data } = useSession();
  const handleLoginClick = () => {
    signIn("google");
  };
  const handleLogoutClick = () => {
    signOut();
  };
  return (
    <NavbarContent justify='end'>
      <NavbarItem>
        {status === "unauthenticated" && (
          <Button
            startContent={<CiLogin size={25} />}
            className='xs:text-base text-sm'
            color='secondary'
            href='#'
            variant='shadow'
            radius='sm'
            onClick={handleLoginClick}
          >
            Login
          </Button>
        )}
        {status === "authenticated" && data.user && (
          <UserDropdown
            name={data.user.name!}
            email={data.user.email!}
            imageUrl={data.user.image!}
            signOut={handleLogoutClick}
          />
        )}
      </NavbarItem>
    </NavbarContent>
  );
};

export default LoginButton;
