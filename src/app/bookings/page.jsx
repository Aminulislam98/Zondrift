import MyBookingsPage from "@/components/MyBookingsPage";
import React from "react";

const Bookings = async () => {
  const res = await fetch("http://localhost:4000/booking");
  const BOOKINGS = await res.json();
  return <MyBookingsPage BOOKINGS={BOOKINGS} />;
};

export default Bookings;
