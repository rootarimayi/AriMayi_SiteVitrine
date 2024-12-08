"use client"
import { useState } from 'react';
import Image from 'next/image';
import downIcon from '@/public/assets/down.svg';

export default function Collapse({ title, content }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
    <div className="dropdown w-[70%] m-2">
      <div
        className="dropdown-title bg-[#FEF9F5] flex justify-between items-center p-8 rounded-t-md cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen((current) => !current)}
      >
        <p className="text-gray-800 font-semibold">{title}</p>
        <Image
          src={downIcon}
          alt="down-icon"
          style={{
            transform: isOpen ? "rotate(180deg)" : null,
          }}
          className="down-icon transition-transform duration-300 ease-in-out"
        />
      </div>

      <div
        className={`dropdown-content bg-[#FEF9F5] bg-opacity-50 p-8 rounded-b-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}