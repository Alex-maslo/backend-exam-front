import React from "react";
import Navbar from "@/components/Navbar";

const Page = async () => {
  const data = await fetch("https://backend-exam-kk3i.onrender.com/users");
  const users = await data.json();
  console.log(users);

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center">
        <h2>Hello amigo</h2>
      </div>
    </div>
  );
};

export default Page;
