import Link from "next/link";

export default function Button({text, classes, src}) {
  return (
    <Link className={`bg-[#FFECDF] text-[#F68A67] text-center border border-[#F68A67] rounded-[5px] px-[50px] py-[8px] text-[18px] font-Opensans inline ${classes}`} href={`${src}`}>
      {text}
    </Link>
  );
}