import React from "react";
import Image from "next/image";
import Img from "@/public/assets/comming-soon.png";

function page() {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg">
      <h1 className="mt-96">En cours de construction</h1>
      <Image
        src={Img}
        alt="Woman with a glasses"
        className="rounded-lg shadow-lg xl:w-1/5 w-2/3  mt-10 mb-96"
      />
    </div>
  );
}

export default page;
