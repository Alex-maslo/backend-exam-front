"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center  navbar bg-primary text-primary-content">
        <Link href={"/users"} className="btn btn-ghost text-xl">
          Users
        </Link>
      </div>
    </>
  );
};

export default Navbar;
