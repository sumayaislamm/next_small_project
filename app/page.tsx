import Link from "next/link";
import LikeButton from "./ui/LikeButton";
import { Suspense } from "react";

export default function Home() {
  console.log("Server Root")
  return (
    <div>
      Hello Sumu!
      <br />
       <Suspense fallback={<p>Loading blogs...</p>}>
       Go to blog page : <Link href={"/blogs"}> Blogs</Link>
      </Suspense>
      
      <br />
      <LikeButton></LikeButton>
    </div>
  );
}
