"use client";

import React from "react";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  userId: number;
};

export default function DeleteButton({ userId }: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Ви дійсно хочете видалити користувача?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Помилка: ${errorData.message || res.statusText}`);
        return;
      }

      // alert("Користувача видалено");
      router.push("/users");
    } catch (error) {
      alert("Сталася помилка при видаленні");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="p-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Видалити
    </button>
  );
}
