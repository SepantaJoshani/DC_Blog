import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components/index";
import { getPosts } from "../services/index";
// const posts = [
//   {
//     title: "Every Superhero shouldnt exsit!",
//     excerpt: "I Hate Aquaman",
//     id: 1,
//   },
//   {
//     title: "Lets know more about Batman!",
//     excerpt: "This guy doesn't have any superpower !!!",
//     id: 2,
//   },
// ];

export default function Home({ posts }) {
  if (!posts) return <p>loading ...</p>;
  console.log(posts);
  return (
    <>
      <Head>
        <title>DC BLOG</title>
        <link rel="icon" href="/batman.png"></link>
      </Head>

      <div className="container px-10 mb-8 ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map(({ title, excerpt, id }, i) => (
              <PostCard key={id} title={title} excerpt={excerpt} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
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

export const getStaticProps = async (ctx) => {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
};
