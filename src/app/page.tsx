import React from "react";

const Page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.text();

  return (
    <div className="flex justify-center items-center w-full p-20">
      <h2 className="text-4xl">{data}</h2>
    </div>
  );
};

export default Page;
