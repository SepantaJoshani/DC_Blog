import React from "react";
import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
  RightSide,
} from "../../components";
import { getPosts } from "../../services";


const PostDetails = () => {
  return (
    <div className="container px-10 mx-auto mb-8 ">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 ">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticProps = async ({params}) => {



  return {
    props:{
      data:null
    }
  }
}
