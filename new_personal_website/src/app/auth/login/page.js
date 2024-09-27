import Link from "next/link";
export default function Login() {
  return (
    <div>
      this is the login page
      <button>
        <Link href="/auth/signup">Go to signup</Link>
      </button>
    </div>
  );
}
