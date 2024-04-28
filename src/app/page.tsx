import Link from "next/link";

export default function Home() {
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
      <div className="h-screen flex flex-col pb-5">
        <div className="border p-5 rounded-xl border-blue-800">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">タイトル</h1>
            <div className="space-x-5">
              <button>修正</button>
              <button>削除</button>
            </div>
          </div>
          <h2 className="text-lg">投稿日</h2>
          <p className="pl-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ullam dolores voluptates quisquam sequi harum corrupti hic optio est
            eius enim eveniet reiciendis ex, magnam fugiat. Vitae repellat
            sapiente quibusdam.
          </p>
        </div>
      </div>
    </main>
  );
}
