import Head from "next/head";
import { PostCard, RightSide } from "../components/index";
import FeaturedPosts from "../components/post-detail/FeaturedPosts";

import { getPosts } from "../services/index";

export default function Home({ posts }) {
  if (!posts) return <p>loading ...</p>;

  return (
    <>
      <Head>
        <title>DC BLOG</title>
        <link rel="icon" href="/batman.png"></link>
      </Head>

      <div className="container px-10 mb-8 ">
        <FeaturedPosts />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, i) => (
              <PostCard key={post.node.title} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <RightSide />
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
