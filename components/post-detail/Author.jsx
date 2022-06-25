import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="relative p-12 mt-20 mb-8 text-center bg-black rounded-lg bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          alt={author.name}
          height={100}
          width={100}
          className="rounded-full "
        />
      </div>
      <h3 className="mt-4 mb-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-white text-ls">{author.bio}</p>
    </div>
  );
};

export default Author;
