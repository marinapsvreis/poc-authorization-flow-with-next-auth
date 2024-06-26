'use client'
import Subtitle from "@/components/typography/subtitle";
import Title from "@/components/typography/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Title>Home</Title>
      <div>
        <Subtitle>This is a simple login page</Subtitle>
        <Subtitle>Click the button below to go to the login page</Subtitle>
      </div>
      <Link href="/login">
        <Button>Go to login page</Button>
      </Link>
    </div>
  );
}
