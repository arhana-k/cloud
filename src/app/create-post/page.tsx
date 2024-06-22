import { createPost } from "@/actions/actions";

export default function Page() {
  return (
    <main className="text-center pt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Create Post</h1>
        <form 
          action={createPost}      
        className="h-10 v-8 space-x-2 mt-12">
            <input 
                type="text"
                name="title"
                placeholder="what's the title?"
                className="border rounded px-3 h-full text-zinc-800 "
                required
            />
        <button className="h-full bg-blue-400 px-5 rounded text-white">Submit</button>
        </form>
    </main>
  );
}
