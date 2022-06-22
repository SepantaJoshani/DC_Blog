import Head from "next/head";

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
      <div className="container bg-gray-400 px-10 mb-8">
        <div className="grid grid-cols-1 lg:first-letter:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map(({ title, excerpt, id }, i) => (
              <div key={id}>
                <h1>{title}</h1>
                <h3>{excerpt}</h3>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="relative top-8 lg:sticky"></div>
          </div>
        </div>
      </div>
    </>
  );
}
