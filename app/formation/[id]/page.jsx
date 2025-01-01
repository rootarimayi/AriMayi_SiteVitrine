import React from "react";
import DetailFormation from "../../components/DetailFormation";
import { specialties } from "../data"; 

export default async function Page({ params }) {
  const { id } = await params; // Access the dynamic parameter (e.g., `id` from the URL)
const formation = specialties.find((item) => item.id.toString() === id);
 
  if (!formation) {
    return <p>Formation not found</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-900 mb-8">
        Formation: {formation.title}
      </h1>

      {/* Pass `formation` data to DetailFormation */}
      <DetailFormation formation={formation} />
    </div>
  );
}
