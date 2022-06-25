import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const CalenderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    />
  </svg>
);

const PostCard = ({ post }) => {
  return (
    <article className="relative p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:px-8">
      <div className="flex items-center gap-x-3">
        <div className="flex justify-center mb-3">
          <div className="relative w-16 h-16 md:w-28 md:h-28 lg:h-36 lg:w-36">
            <Image
              alt={post.author.name}
              src={post.author.photo.url}
              className="rounded-full"
              layout="fill"
            />
          </div>
        </div>
        <p className="text-sm md:text-lg lg:text-2xl">{post.author.name}</p>
      </div>
      <div className="relative mb-6 overflow-hidden shadow-md">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout="responsive"
          width={280}
          height={240}
          className="rounded-lg"
        />
      </div>
      <h1 className="mb-8 text-2xl font-extrabold text-center transition duration-700 cursor-pointer md:text-3xl hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <p className="text-center md:text-xl ">{post.excerpt}</p>

      <div className="flex justify-center mt-10">
        <Link href={`/post/${post.slug}`}>
          <motion.span
            whileHover={{
              scale: 1.1,
            }}
            className="px-4 py-3 text-sm text-white bg-pink-600 rounded-lg cursor-pointer md:text-lg"
          >
            Continue Reading
          </motion.span>
        </Link>
      </div>
      {/* Date Section */}
      <div className="absolute flex items-center bottom-1 gap-x-1 right-3">
        <CalenderIcon />
        <span className="text-sm md:text-lg">
          {moment(post.createdAt).format("MMM DD,YYYY")}
        </span>
      </div>
    </article>
  );
};

export default PostCard;
