import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div className=" container  py-16 justify-between h-auto mx-auto md:space-y-0 space-y-10 items-center md:flex">
      <div className="w-full md:w-[50%] space-y-5 md:space-y-1 lg:space-y-2 xl:space-y-4 2xl:space-y-10">
        <h1 className="text-2xl md:text-xl lg:text-3xl xl:text-4xl">
          About Company
        </h1>
        <p className="text-xs  lg:text-sm xl:text-xl 2xl:text-2xl  ">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`}
        </p>
        <button className="text-xs px-4 py-2  2xl:text-lg rounded-md text-white bg-green-800 md:px-5  lg:px-8 md:py-2 border border-black">
          Learn More
        </button>
      </div>
      <div className="bg-green-500 rounded w-full md:w-[40%] ">
        <img className=" " src="/Rectangle 2497.png" alt="" />
      </div>
    </div>
  );
};

export default About;
