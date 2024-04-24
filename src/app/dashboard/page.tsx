"use client";

import Card from "@/components/card";
import ButtonWithLoading from "@/components/forms/buttonWithLoading";
import Subtitle from "@/components/typography/subtitle";
import Title from "@/components/typography/title";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await signOut();
    setTimeout(() => {
      router.push("/");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Card>
        <Title>Welcome {session && <span>{session?.user?.email}!</span>}</Title>
        <Subtitle>You are logged in</Subtitle>
        <Subtitle>This is your session data:</Subtitle>
        {session && (
          <pre className="bg-slate-900 text-slate-50 p-4 rounded-md">
            {JSON.stringify(session, null, 2)}
          </pre>
        )}
        <ButtonWithLoading isLoading={isLoading} action={handleLogout}>
          Log out
        </ButtonWithLoading>
      </Card>
    </div>
  );
}
