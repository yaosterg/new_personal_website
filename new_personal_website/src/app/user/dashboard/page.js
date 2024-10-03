import Link from "next/link";
export default function Dashboard() {
  return (
    <>
      <div>This is the user Dashboard</div>
      <div>this is the buttons going to the different areas</div>
      <button>
        <Link href="/user/calendar">Calendar Application</Link>
      </button>
      <button>
        <Link href="/user/stocks">Stock Application</Link>
      </button>
      <button>
        <Link href="/user/docgenerator">Stock Application</Link>
      </button>
      <button>
        <Link href="/">Home</Link>
      </button>
    </>
  );
}
