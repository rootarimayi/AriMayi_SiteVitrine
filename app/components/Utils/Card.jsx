"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Card ({image, titre, content, className}){
  const [isClicked, setisClicked] = useState(false);
  const togglereadMore= ()=>{
    setisClicked(!isClicked)
  }


  return(
    <figure className={`card w-[300px] p-2 m-2 rounded-md  hover:scale-105 hover:m-2 bg-[#FFECDF] flex flex-col justify-between border-2 hover:bg-[#FEF9F5] ${className}`} >
      <div>
        <Image src={image} alt="carte-image" className="rounded-md mb-4 "/>
        <figcaption className=" flex flex-col justify-between gap-3 min-h-[40%]">
          
          <h2 className="card-title font-monserrat text-[16px] font-light ">
            {titre} 
          </h2>
          <p className={`card-content font-Opensans text-[16px] ${isClicked ? "readMoreClicked" :"readMore"}`}> 
            {content} 
          </p> 
        </figcaption> 
      </div>    
      <span className="text-red-600 cursor-pointer block" onClick={togglereadMore}> 
        Lire la suite  
      </span>
    </figure>
  );
};