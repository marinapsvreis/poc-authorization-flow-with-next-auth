"use client";

import { Button } from "../ui/button";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  action?: () => void;
}

export default function buttonWithLoading({
  isLoading,
  children,
  action = () => {},
}: LoadingButtonProps) {
  return (
    <>
      {isLoading ? (
        <Button type="button" variant='loading'>
          <AiOutlineLoading3Quarters className='mr-2 h-4 w-4 animate-spin' />
          Loading
        </Button>
      ) : (
          <Button type="submit" onClick={() => action()}>
          {children}
        </Button>
      )}
    </>
  );
}
