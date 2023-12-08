import { Button } from "@nextui-org/react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const Cta = () => {
  return (
    <section className='flex flex-col text-center items-center justify-center px-5 py-20 lg:py-36'>
      <div className='max-w-3xl'>
        <h2 className='font-bold xl:text-6xl md:text-5xl text-4xl'>
          Start your fitness journey today
        </h2>
        <p className='xs:text-lg mt-2 mb-5'>
          <Balancer>
            Get fit, maintain a healthy lifestyle and achieve your fitness goals
            with Gainz, the ultimate fitness app offering a wide range of tools
            to keep the journey exciting
          </Balancer>
        </p>
      </div>
      <Link href='/create-workout'>
        <Button
          className='my-3'
          size='lg'
          radius='sm'
          variant='shadow'
          color='secondary'
        >
          Start creating customized workouts
        </Button>
      </Link>
    </section>
  );
};

export default Cta;
