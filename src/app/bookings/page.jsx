import MyBookingsPage from "@/components/MyBookingsPage";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const Bookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const BOOKINGS = await res.json();
  return <MyBookingsPage BOOKINGS={BOOKINGS} />;
};

export default Bookings;
