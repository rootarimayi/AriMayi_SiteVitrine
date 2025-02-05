"use client";
import Link from "next/link";

export default function CustomButton({ text, classes, src }) {
  return (
    <Link
      className={`text-[#FFF] text-center border border-[#FFF] rounded-[8px] px-[15px] py-[8px] font-Opensans inline-block transition-all duration-300 ease-in-out hover:bg-[#FFF] hover:text-black hover:border-white ${classes}`}
      href={src}
    >
      {text}
    </Link>
  );
}
