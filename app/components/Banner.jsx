
export default function Banner({className,children}) {  
  return (
    <section id="banner" className={`py-[100px] px-[70px] bg-cover bg-top flex items-center justify-center ${className}`}>
      <div className="w-[70%] bg-black bg-opacity-50 flex flex-col justify-center items-center gap-3 p-[50px] rounded-lg" >
       {children}
     </div>
    </section>   
  );
}

