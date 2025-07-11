"use server";

import { redirect } from "next/navigation";

export const registerUser = async (formData: FormData) => {
  console.log("Email:", formData.get("email"));
  console.log("Password:", formData.get("password"));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    },
  );

  const data = await res.json();

  if (res.status === 409) {
    // redirect(`/errors?message=ffff`);
    return data;
  }

  redirect("/users");
};
