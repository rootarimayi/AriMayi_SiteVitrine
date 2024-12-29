export default function Banner({ className, children }) {
  return (
    <section
      id="banner"
      className={` py-[350px]  bg-cover bg-top flex items-start justify-start ${className}`}
    >
      <div className="  container flex flex-col justify-start items-start gap-4 py-[10px] rounded-lg ">
        {children}
      </div>
    </section>
  );
}
