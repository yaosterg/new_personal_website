import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div>
      this is the login page
      <LoginForm />
      <button>
        <Link href="/auth/signup">Go to signup</Link>
      </button>
    </div>
  );
}
