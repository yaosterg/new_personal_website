import Image from "next/image";
import AuthForm from "../components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my new website under construction</h1>
      <h1>NavBar goes here</h1>
      <button>
        <Link href="/auth/login">Login</Link>
      </button>
      <button>
        <Link href="/api/register">Click me</Link>
      </button>
    </div>
  );
}
