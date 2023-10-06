"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <SideBar />}

      <div className="bg-green-200 bg-opacity-60 main py-2 px-10 ">
        <div
          className="overflow-hidden  bg-center bg-cover  bg-opacity-50 bg-green-200    "
          style={{ backgroundImage: "url('')" }}
        >
          <div className="container mx-auto items-center justify-between flex  ">
            <img className="w-28 md:w-40 lg:w-48" src="/Plantero.png" alt="" />
            <div className=" " onClick={() => setIsOpen(!isOpen)}>
              <img className="w-5 h-5 md:hidden" src="/iii.png" alt="" />
            </div>
            <div className="  text-xs lg:text-sm hidden md:flex space-x-10 ">
              <div>
                <Link className=" hover:underline " href="/">
                  Home
                </Link>
              </div>
              <div>
                <Link className=" hover:underline flex " href="/Categories">
                  Categories
                  <img
                    className="w-1  px-1 hover:underline "
                    src="/akar-icons_chevron-down (1).png"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link className=" hover:underline " href="/About">
                  About Us
                </Link>
              </div>
              <div>
                <Link className=" hover:underline " href="/Blog">
                  Blogs
                </Link>
              </div>
              <div>
                <Link className=" hover:underline" href="/Cantact">
                  Cantact Us
                </Link>
              </div>
            </div>
            <div className=" ml-[250px] hidden xl:flex space-x-7">
              <div>
                <img className="w-5" src="/Vector (4).png" alt="" />
              </div>
              <div>
                <img className="w-5" src="/Vector (3).png" alt="" />
              </div>
              <div>
                <img className="w-10" src="/Frame 1.png" alt="" />
              </div>
              <div>
                <img className="w-5" src="/Vector (1).png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const SideBar = () => {
  return (
    <div className="w-64 h-screen container mx-auto flex justify-between bg-green-500 absolute">
      <div className="  text-2xl mt-3  space-y-5 ">
        <div>
          <Link className=" hover:underline " href="/">
            Home
          </Link>
        </div>
        <div>
          <Link className=" hover:underline flex " href="/Categories">
            Categories
            <img
              className="w-1  px-1 hover:underline "
              src="/akar-icons_chevron-down (1).png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link className=" hover:underline " href="/About">
            About Us
          </Link>
        </div>
        <div>
          <Link className=" hover:underline " href="/Blog">
            Blogs
          </Link>
        </div>
        <div>
          <Link className=" hover:underline" href="/Cantact">
            Cantact Us
          </Link>
        </div>
      </div>
      <div className=" space-y-10 mt-5 ">
        <div>
          <img className="w-5" src="/Vector (4).png" alt="" />
        </div>
        <div>
          <img className="w-5" src="/Vector (3).png" alt="" />
        </div>
        <div>
          <img className="w-10" src="/Frame 1.png" alt="" />
        </div>
        <div>
          <img className="w-5" src="/Vector (1).png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
