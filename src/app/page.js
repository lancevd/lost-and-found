import PostCard from "@/components/home/PostCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="contain">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section>
    </main>
  );
}
