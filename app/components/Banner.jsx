
export default function Banner({className,children}) {  
  return (
    <section id="banner" className={` py-[150px] px-[70px] bg-cover bg-top flex items-center justify-center ${className}`}>
      <div className=" bg-black bg-opacity-50 flex flex-col justify-center items-center gap-3 p-[50px] rounded-lg w-[80%]" >
       {children}
     </div>
    </section>   
  );
}



