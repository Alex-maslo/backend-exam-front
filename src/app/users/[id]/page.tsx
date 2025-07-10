import React from "react";
import { IUser } from "@/interfaces/IUser";
import Card from "@/components/Card";

const UserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return <p className="p-4 text-center">Користувача не знайдено</p>;
  }

  const user: IUser = await response.json();

  return (
    <div>
      <Card user={user} />
    </div>
  );
};

export default UserPage;
