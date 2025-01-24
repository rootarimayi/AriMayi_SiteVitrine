import Link from "next/link";

export default function CostumButton({ text, classes, src }) {
  return (
    <Link
      className={` text-[#F68A67] text-center border border-[#F68A67] rounded-[5px] px-[15px] py-[8px]  font-Opensans inline ${classes}`}
      href={`${src}`}
    >
      {text}
    </Link>
  );
}
