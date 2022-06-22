import Head from "next/head";
import { PostCard, PostWidget, Categories, } from "../components/index";

const posts = [
  {
    title: "Every Superhero shouldnt exsit!",
    excerpt: "I Hate Aquaman",
    id: 1,
  },
  {
    title: "Lets know more about Batman!",
    excerpt: "This guy doesn't have any superpower !!!",
    id: 2,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>DC BLOG</title>
        <link rel="icon" href="/batman.png"></link>
      </Head>
     
      <div className="container  px-10 mb-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map(({ title, excerpt, id }, i) => (
              <PostCard key={id} title={title} excerpt={excerpt} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
