import EditForm from "@/components/EditForm";
import React from "react";

const EditDestinationPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/destination/${id}`);
  const existingData = await res.json();
  return (
    <div>
      <EditForm existingData={existingData}></EditForm>
    </div>
  );
};

export default EditDestinationPage;
