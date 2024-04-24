"use client";
import Title from "@/components/typography/title";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Denied() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <main className="h-screen w-screen p-3 flex flex-col gap-4">
      <Title>Access Denied! You arent an ADMIN!</Title>
      <Button onClick={handleLogout}>Go to Home</Button>
    </main>
  );
}
