import React from "react";
import { IUser } from "@/interfaces/IUser";
import Card from "@/components/Card";

const Users = async () => {
  const data = await fetch(`${process.env.BACKEND_URL}/users`, {
    cache: "no-store",
  });
  const users: IUser[] = await data.json();

  return (
    <div className="w-full pr-40 pl-40">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
