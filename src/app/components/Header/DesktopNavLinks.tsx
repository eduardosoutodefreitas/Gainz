import { NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const DesktopNavbar = () => {
  return (
    <NavbarContent className='hidden sm:flex gap-4' justify='center'>
      <NavbarItem>
        <Link color='foreground' href='#'>
          Features
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href='#' aria-current='page'>
          Customers
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color='foreground' href='#'>
          Integrations
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};

export default DesktopNavbar;
