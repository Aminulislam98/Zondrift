import BookingForm from "@/components/BookingForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const BookingPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:4000/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const dest = await res.json();
  return <BookingForm dest={dest} />;
};

export default BookingPage;
