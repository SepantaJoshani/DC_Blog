import React from "react";
import Categories from "./Categories";
import PostWidget from "./PostWidget";

const RightSide = () => {
  return (
    <div className="relative top-8 lg:sticky">
      <PostWidget />
      <Categories />
    </div>
  );
};

export default RightSide;
