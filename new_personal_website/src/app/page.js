import Image from "next/image";
import AuthForm from "./auth/components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my new website under construction</h1>
      <h1>NavBar goes here</h1>
      <p>This is the main page</p>
      <button>
        <Link href="/auth/login">Login</Link>
      </button>
    </div>
  );
}
