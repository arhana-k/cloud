import Link from "next/link";

export default async function Page() {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json();

  return (
  <main className="flex min-h-screen flex-col items-center justify-center p-4">
     <h1 className="text-3xl md:text-4xl font-bold mb-8">All posts</h1>

     <ul>
      {
        data.posts.map(post => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))
      }
     </ul>
  </main>
  );
}
