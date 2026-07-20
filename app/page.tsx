import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello Sumu!
      <br />
      Go to blog page : <Link href={"/blogs"}> Blogs</Link>
    </div>
  );
}
