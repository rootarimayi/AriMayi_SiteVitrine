export default function Banner({ className, children }) {
  return (
    <section
      id="banner"
      className={` py-[150px]  bg-cover bg-top flex items-start justify-start ${className}`}
    >
      <div className="  container mx-auto max-w-[1850px] w-[95%] flex flex-col justify-start items-start gap-7 py-[50px] rounded-lg ">
        {children}
      </div>
    </section>
  );
}
