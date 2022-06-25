import React from "react";
import Categories from "./Categories";
import PostWidget from "./PostWidget";

const RightSide = ({ slug, categories }) => {
  return (
    <div className="relative top-8 lg:sticky">
      <PostWidget slug={slug} categories={categories} />
      <Categories />
    </div>
  );
};

export default RightSide;
