"use client";
import Link from "next/link";

export default function CostumButton({ text, classes = "", src = "/" }) {
  return (
    <Link
      className={`text-[#F68A67] text-center border border-[#F68A67] rounded-[8px] px-[15px] py-[8px] font-montserrat inline-block transition-all duration-300 ease-in-out hover:bg-[#F68A67] hover:text-white ${classes}`}
      href={src}
    >
      {text}
    </Link>
  );
}