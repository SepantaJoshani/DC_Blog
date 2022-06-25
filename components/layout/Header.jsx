import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const categories = [
  { name: "Villans", slug: "react" },
  { name: "Heroes", slug: "villans" },
];

const Header = () => {
  return (
    <header className="container px-10 mx-auto mb-8">
      <nav className="flex items-center w-full py-8 border-b border-white md:justify-between justice">
        <div className="block">
          <Link href="/">
            <div className="relative w-16 h-16 overflow-hidden rounded-lg ">
              <Image
                src="/batman.png"
                layout="fill"
                className="cursor-pointer"
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:block">
          {categories.map(({ name, slug }) => (
            <Link key={slug} href={`/category/${slug}`}>
              <span className="mt-2 ml-4 font-semibold text-white align-middle cursor-pointer">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
