import {
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";

interface UserOptionsProps {
  signOut: () => void;
  imageUrl: string;
  email: string;
  name: string;
}

const UserDropdown = ({ email, imageUrl, name, signOut }: UserOptionsProps) => {
  return (
    <Dropdown placement='bottom-end' className='px-3 bg-darkSecondaryBg'>
      <DropdownTrigger>
        <Avatar
          color='secondary'
          isBordered
          className='border-secondary'
          as='button'
          name={name!}
          src={imageUrl}
          size='md'
        />
      </DropdownTrigger>
      <DropdownMenu aria-label='Profile Actions' variant='flat'>
        <DropdownItem key='profile' className='h-14 gap-2'>
          <p className='font-semibold'>Signed in as</p>
          <p className='font-semibold'>{email}</p>
        </DropdownItem>

        <DropdownItem key='my_workouts'>
          <Link className='w-full hover:text-secondary' href='/myWorkouts'>
            My Workouts
          </Link>
        </DropdownItem>
        <DropdownItem
          key='logout'
          color='danger'
          variant='flat'
          as='button'
          startContent={<CiLogout size={25} />}
          onClick={signOut}
        >
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
