import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

const MobileNav = () => {
  const linkStyles =
    "w-full hover:text-secondary hover:bg-default-50 py-1 pl-3 rounded-md";
  return (
    <NavbarMenu className='bg-black pt-5 h-[101vh]'>
      <NavbarMenuItem>
        <Link className={linkStyles} color='foreground' href='/' size='lg'>
          Home
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link
          className={linkStyles}
          color='foreground'
          href='/create-workout'
          size='lg'
        >
          Create Workout
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link
          className={linkStyles}
          color='foreground'
          href='/contact'
          size='lg'
        >
          Contact
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
};

export default MobileNav;
