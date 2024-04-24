"use client";

import Card from "@/components/card";
import Subtitle from "@/components/typography/subtitle";
import Title from "@/components/typography/title";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <main className="h-screen w-screen p-3 flex flex-col gap-4">
      <Card>
        <Title>
          Welcome {session && <span>{session?.user?.email}!</span>}
        </Title>
        <Subtitle>This is your session data:</Subtitle>
        {session && (
          <pre className="bg-slate-900 text-slate-50 p-10 rounded-md">
            {JSON.stringify(session, null, 2)}
          </pre>
        )}
        <Button onClick={handleLogout}>Log out</Button>
      </Card>
    </main>
  );
}
