import MyBookingsPage from "@/components/MyBookingsPage";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const Bookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userId = session?.user?.id;
  const res = await fetch(`http://localhost:4000/booking/${userId}`);
  const BOOKINGS = await res.json();
  return <MyBookingsPage BOOKINGS={BOOKINGS} />;
};

export default Bookings;
