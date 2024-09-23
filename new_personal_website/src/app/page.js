import Image from "next/image";
import AuthForm from "./components/AuthForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my new website under construction</h1>
      <h1>NavBar goes here</h1>
      <button>
        <Link href="/login">Login</Link>
      </button>
    </div>
  );
}
