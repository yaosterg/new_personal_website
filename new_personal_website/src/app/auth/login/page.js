import Link from "next/link";
export default function Login() {
  return (
    <div>
      this is the login page
      <p> ***Sign in form goes here***</p>
      <button>
        <Link href="/auth/signup">Go to signup</Link>
      </button>
    </div>
  );
}
