import { Button, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useSession, signOut, signIn } from "next-auth/react";
import React from "react";
import { CiLogin } from "react-icons/ci";
import UserDropdown from "../Header/UserDropdown";

const LoginButton = () => {
  const { data } = useSession();
  const handleLoginClick = () => {
    signIn("google");
  };
  const handleLogoutClick = () => {
    signOut();
  };
  return (
    <NavbarContent justify='end'>
      <NavbarItem>
        {data?.user ? (
          <UserDropdown
            name={data.user.name!}
            email={data.user.email!}
            imageUrl={data.user.image!}
            signOut={handleLogoutClick}
          />
        ) : (
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
      </NavbarItem>
    </NavbarContent>
  );
};

export default LoginButton;
