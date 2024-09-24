import AuthForm from "../../components/LoginForm";
import Link from "next/link";
export default function Login() {
  return (
    <div>
      This is the login page
      <div>
        <AuthForm />
      </div>
      <button>
        <Link href="/pages/signup">Create new account</Link>
      </button>
    </div>
  );
}
