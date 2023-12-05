import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

const MobileNav = () => {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <NavbarMenu className='bg-black pt-5'>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className='w-full hover:text-secondary hover:bg-default-50 py-1 pl-3 rounded-md'
            color='foreground'
            href='#'
            size='lg'
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default MobileNav;
