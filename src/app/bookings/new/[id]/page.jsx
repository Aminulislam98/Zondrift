import BookingForm from "@/components/BookingForm";
import React from "react";

const BookingPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/destination/${id}`);
  const dest = await res.json();
  return <BookingForm dest={dest} />;
};

export default BookingPage;
