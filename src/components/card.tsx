import React, { ReactNode } from 'react';

interface LoginFormProps {
  children: ReactNode;
}

export default function CardProps({ children }: LoginFormProps) {
  return (
    <div className="flex flex-col justify-center gap-10 border rounded-md p-10 max-w-[1120px]">{children}</div>
  );
}