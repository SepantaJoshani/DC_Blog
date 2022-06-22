import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <article className="p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout="responsive"
          width={280}
          height={240}
        />
      </div>
      <h1 className="mb-8 text-3xl font-semibold text-center transition duration-700 cursor-pointer hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
    </article>
  );
};

export default PostCard;
