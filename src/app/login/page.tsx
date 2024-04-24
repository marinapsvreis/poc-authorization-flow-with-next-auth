import Card from "@/components/card";
import LoginForm from "@/components/forms/loginForm";

export default function Login() {
  return (
    <main className="h-screen w-screen p-3">
      <Card>
        <LoginForm />
      </Card>
    </main>
  );
}
