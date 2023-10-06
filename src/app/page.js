import Image from "next/image";
import Link from "next/link";
import About from "./About/page";
import Categories from "./Categories/page";
import Cantact from "./Cantact/page";
import Blog from "./Blog/page";
export default function Home() {
  return (
    <>
      <div
        className="overflow-hidden h-screen items-center flex bg-green-300 bg-opacity-50 bg-center bg-cover   "
        style={{ backgroundImage: "url('/Rectangle 2510.png')" }}
      >
        <div className="bg-green-200 bg-opacity-50 flex items-center w-full h-screen">
          <div className="container  mx-auto h-auto  space-y-10">
            <h1 className="text-4xl lg:6xl xl:text-7xl font-extrabold">
              Lorem Ipsum is simply dummy <br />
              text here.
            </h1>
            <p className="text-xl xl:text-3xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br /> industry. Lorem Ipsum is simply dummy text of the printing
              and
              <br /> typesetting industry.
            </p>
            <div className="flex space-x-5">
              <button className="md:px-8 px-4 py-2 rounded md:py-3 text-white bg-green-900 border border-black">
                Shop Now
              </button>
              <button className="md:px-8 px-4 py-2 rounded md:py-3  border border-black">
                Learn More{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Categories />
      <Blog />
    </>
  );
}
