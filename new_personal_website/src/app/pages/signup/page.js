import AuthForm from "../../components/LoginForm";
import Link from "next/link";
export default function SignUp() {
  return (
    <div>
      This is the login page
      <div>
        <AuthForm />
      </div>
      <button>
        <Link href="/pages/login">Login</Link>
      </button>
    </div>
  );
}
