"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around navbar bg-primary text-primary-content">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Home
        </Link>

        <Link href={"/users"} className="btn btn-ghost text-xl">
          Users
        </Link>

        <Link href={"/auth"} className="btn btn-ghost text-xl">
          Register User
        </Link>
      </div>
    </>
  );
};

export default Navbar;
