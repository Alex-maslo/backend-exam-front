import React from "react";
import { IUser } from "@/interfaces/IUser";
import Card from "@/components/Card";

const UsersPage = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
    cache: "no-store",
  });
  const users: IUser[] = await data.json();

  return (
    <div className="w-full lg:pr-40 lg:pl-40">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
