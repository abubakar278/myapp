import React from "react";
import Link from "next/link";
const Blog = () => {
  return (
    <div className="container my-10">
      <div className="flex justify-between">
        <h1 className="text-2xl md:text-4xl font-semibold">Latest Blogs</h1>

        <div className="flex gap-3">
          <img className="w-7 md:w-10" src="/Group 157.png" alt="" />
          <img className="w-7 md:w-10" src="/Group 156.png" alt="" />
        </div>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-2     ">
        <div>
          <div>
            <img className="w-full" src="/Rectangle 2528 (1).png" alt="" />
          </div>
          <div className="space-y-5 my-4">
            <p className="text-xl sm:text-xl font-extrabold">
              How to improve pot plants
            </p>
            <div className="flex gap-20 sm:gap-28 ">
              <div className="flex items-center space-x-1">
                <img src="/Ellipse 20.png" alt="" />
                <p className="text-lg font-bold">laura</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/ic_outline-access-time.png" alt="" />
                <p className="text-gray-300">7 hour ago</p>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <div className="flex gap-10 ">
              <div className="flex items-center space-x-1">
                <img src="/bxs_like.png" alt="" />
                <p className="text-gray-300">5 likes</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/material-symbols_comment-rounded.png" alt="" />
                <p className="text-gray-300">8 comments</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className="w-full" src="/Rectangle 2528 (1).png" alt="" />
          </div>
          <div className="space-y-5 my-4">
            <p className="text-xl sm:text-xl font-extrabold">
              How to improve pot plants
            </p>
            <div className="flex gap-20 sm:gap-28 ">
              <div className="flex items-center space-x-1">
                <img src="/Ellipse 20.png" alt="" />
                <p className="text-lg font-bold">laura</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/ic_outline-access-time.png" alt="" />
                <p className="text-gray-300">7 hour ago</p>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <div className="flex gap-10 ">
              <div className="flex items-center space-x-1">
                <img src="/bxs_like.png" alt="" />
                <p className="text-gray-300">5 likes</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/material-symbols_comment-rounded.png" alt="" />
                <p className="text-gray-300">8 comments</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className="w-full" src="/Rectangle 2528 (1).png" alt="" />
          </div>
          <div className="space-y-5 my-4">
            <p className="text-xl sm:text-xl font-extrabold">
              How to improve pot plants
            </p>
            <div className="flex gap-20 sm:gap-28 ">
              <div className="flex items-center space-x-1">
                <img src="/Ellipse 20.png" alt="" />
                <p className="text-lg font-bold">laura</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/ic_outline-access-time.png" alt="" />
                <p className="text-gray-300">7 hour ago</p>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <div className="flex gap-10 ">
              <div className="flex items-center space-x-1">
                <img src="/bxs_like.png" alt="" />
                <p className="text-gray-300">5 likes</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/material-symbols_comment-rounded.png" alt="" />
                <p className="text-gray-300">8 comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
