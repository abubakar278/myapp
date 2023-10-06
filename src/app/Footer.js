'use client'

import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className=" ">
        <div className=" relative z-1">
          <img src="/Rectangle 2518.png" alt="" />
          <div className="absolute z-[2] inset-0 m-auto flex items-center justify-center w-full ">
            {" "}
            <p className="text-4xl md:text-7xl font-Pattaya_Regular">
              Garden from our heart
            </p>
          </div>
          <div className="absolute top-0 left-0 text-white text-5xl sm:text-[80px] z-[3] w-full h-full bg-gradient from-black via-red-900 to-white flex items-center justify-center">
            <AiOutlinePlayCircle className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#1D6148] w-full  h-auto">
        <div className="container mx-auto space-y-10 md:space-y-0 justify-between text-white flex-wrap md:flex py-20">
          <div className=" ">
            <h1 className="text-3xl font-extrabold"> PLANTERO</h1>
            <p className="line-clamp-3 mt-5">
              Lorem Ipsum is simply dummy
              <br /> text of the printing and <br /> typesetting industry.{" "}
            </p>
            <div className="flex mt-10 space-x-3">
              <div className="w-8 h-8 border rounded flex items-center justify-center ">
                <img className="w-4 h-4" src="/img (4).png" alt="" />
              </div>
              <div className="w-8 h-8 border rounded flex items-center justify-center ">
                <img className="w-4 h-4" src="/img (3).png" alt="" />
              </div>
              <div className="w-8 h-8 border rounded flex items-center justify-center ">
                <img className="w-4 h-4" src="/img (2).png" alt="" />
              </div>
              <div className="w-8 h-8 border rounded flex items-center justify-center ">
                <img className="w-4 h-4" src="/img (1).png" alt="" />
              </div>
            </div>
          </div>
          <div className=" flex-col space-y-5">
            <h2 className="text-2xl font-bold">pages</h2>

            <p>Home</p>
            <p>Categories</p>
            <p>About Us</p>
            <p>Blogs</p>
            <p>Contact Us</p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-xl mt-5 font-semibold">Email Us</p>
            <p> aliahmer1225@gmail.com</p>
            <p className="text-xl mt-3 font-semibold">Contact Us</p>
            <p>+23467859867654</p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold">Follow us</h2>
            <p className="mt-5">instagram</p>
            <p className="mt-3">twitter</p>
            <p className="mt-3">facebook</p>
            <p className="mt-3">youtube</p>
          </div>
          <div className="">
            <h2 className="text-2xl mb-5 font-bold">join our mailing list</h2>
            <p className="mb-2">
              subscribe our news letter for
              <br /> latest updates
            </p>
            <div>
              {" "}
              <input className="text-2xl rounded border " type="text" />
            </div>
            <button className="px-5 py-2 mt-5 rounded bg-[#318063]">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
