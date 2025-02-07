"use client";
import Link from "next/link";

export default function CustomButton({ text, classes, src }) {
    return (
      <Link
        className={`text-[#FFF] text-center rounded-[8px] px-[15px] py-[8px] font-Opensans inline-block transition-all duration-300 ease-in-out hover:bg-[#FFF] hover:text-black hover:border-white ${classes}`}
        href={src}
        style={{ background: 'linear-gradient(130.45deg, #54E0E9 5.48%, #816CFF 60.63%, #B163FF 104.96%)' }}
      >
        {text}
      </Link>
    );
}