import React from "react";
import Image from "next/image";
import Img from "@/public/assets/comming-soon.png";

function page() {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg">
      <h1 className="mt-96 font-semibold">En cours de développement</h1>
      <Image
        src={Img}
        alt="Woman with a glasses"
        className="rounded-lg shadow-lg xl:w-1/5 w-2/3  mt-14 mb-96"
      />
    </div>
  );
}

export default page;
