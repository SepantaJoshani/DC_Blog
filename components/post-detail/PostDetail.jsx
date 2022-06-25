import moment from "moment";
import Image from "next/image";
import React from "react";
import { CalenderIcon } from "../PostCard";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="mb-4 font-semibold text-md">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="relative px-3 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8 ">
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
          width={280}
          height={240}
          src={post.featuredImage.url}
          alt={post.title}
          layout="responsive"
          className="rounded-t-lg"
        />
      </div>
      <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
      {/* Date Section */}
      <div className="absolute flex items-center bottom-1 gap-x-1 right-3">
        <CalenderIcon />
        <span className="text-sm md:text-lg">
          {moment(post.createdAt).format("MMM DD,YYYY")}
        </span>
      </div>
    </div>
  );
};

export default PostDetail;
