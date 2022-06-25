import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">Categories</h3>

      {categories.map((c) => (
        <Link key={c.slug} href={`/category/${c.slug}`}>
          <span className="block pb-3 mb-3 cursor-pointer">{c.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
