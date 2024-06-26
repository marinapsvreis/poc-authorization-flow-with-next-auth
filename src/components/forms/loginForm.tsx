"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Title from "../typography/title";
import Subtitle from "../typography/subtitle";
import InputBox from "./inputBox";
import ButtonWithLoading from "./buttonWithLoading";

const schema = z.object({
  email: z
    .string()
    .min(1, "This field is required")
    .email("This field must be an valid email"),
  password: z.string().min(1, "This field is required"),
});

interface LoginFormProps {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: LoginFormProps) => {
    setIsLoading(true);

    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      setTimeout(async () => {
        if (response?.ok) {
          router.push("/dashboard");
        } else {
          setError("Invalid credentials");
        }
      }, 2000);
    } catch (error) {
      setError("Invalid credentials");
      setIsLoading(false);
    }

    setTimeout(async () => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      className="flex flex-col gap-4"
    >
      <div>
        <Title>Login</Title>
        <Subtitle>Type your credentials to log in</Subtitle>
      </div>
      <div className="flex flex-col gap-4">
        <InputBox
          register={() => register("email")}
          errors={errors}
          label={"E-mail"}
          name={"email"}
          type={"email"}
        />
        <InputBox
          register={() => register("password")}
          errors={errors}
          label={"Password"}
          name={"password"}
          type={"password"}
        />
      </div>
      <ButtonWithLoading isLoading={isLoading}>Log in</ButtonWithLoading>
      {error && (
        <p className="text-red-500 text-sm -mt-2 w-full text-center">{error}</p>
      )}
    </form>
  );
}
