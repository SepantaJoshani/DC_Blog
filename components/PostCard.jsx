import React from "react";

const PostCard = ({ title, excerpt }) => {
  return (
    <div className="text-white">
      {title}
      {excerpt}
    </div>
  );
};

export default PostCard;
