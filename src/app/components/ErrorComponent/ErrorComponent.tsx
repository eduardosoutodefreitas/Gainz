import { Button } from "@nextui-org/react";
import { IoMdArrowRoundBack } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";

interface ErrorComponentProps {
  helpMessage: string;
  hasBackButton?: boolean;
}
const ErrorComponent = ({
  helpMessage,
  hasBackButton = false,
}: ErrorComponentProps) => {
  return (
    <div className='flex container mx-auto flex-col text-center items-center absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      {hasBackButton && (
        <Link href={"/myWorkouts"} className='self-start group'>
          <Button
            size='lg'
            variant='light'
            startContent={
              <IoMdArrowRoundBack
                className='group-hover:-translate-x-1 transition-all duration-300'
                size={35}
              />
            }
          >
            Back to workouts
          </Button>
        </Link>
      )}
      <div className='relative min-w-[270px] w-1/3 aspect-square h-auto'>
        <Image
          src={"/assets/images/gainzillustration.png"}
          alt='illustration'
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h2 className='text-3xl font-semibold mb-3'>
        Ops, there is nothing here
      </h2>
      <p className='text-xl'>{helpMessage}</p>
    </div>
  );
};

export default ErrorComponent;
