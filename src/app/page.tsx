import Link from "next/link";
import { PostType } from "./types";
import { formatDate } from "@/features/utils/myDate";

async function fetchAllBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store", //SSR
  });
  const data = await res.json();
  return data.posts;
}

export default async function Home() {
  const posts = await fetchAllBlogs();
  //console.log(posts);

  return (
    <main className="flex flex-col justify-center items-center p-5">
      <h1 className="text-5xl fonnt-bold">Hello</h1>
      <p className="py-5 px-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat
        assumenda perspiciatis. Ut laborum laudantium quo natus quisquam cum
        voluptates magni quas ratione, vitae quam, expedita quibusdam corporis
        laboriosam ad?
      </p>
      <Link href="/blog" className="pb-5">
        Blog投稿
      </Link>

      <div className="w-full h-screen flex flex-col">
        {posts.map((post: PostType) => (
          <div key={post.id} className="w-full flex flex-col pb-5">
            <div className="border p-5 rounded-xl border-gray-500">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <div className="space-x-5">
                  <Link href={`/blog/edit/${post.id}`}>修正</Link>
                  <Link href={`/blog/delete/${post.id}`}>削除</Link>
                </div>
              </div>
              <h2 className="text-lg">
                {formatDate(new Date(post.updatedAt))}
              </h2>
              <p className="pl-5">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
