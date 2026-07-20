import Link from "next/link";
import LikeButton from "./ui/LikeButton";

export default function Home() {
  console.log("Server Root")
  return (
    <div>
      Hello Sumu!
      <br />
      Go to blog page : <Link href={"/blogs"}> Blogs</Link>
      <br />
      <LikeButton></LikeButton>
    </div>
  );
}
