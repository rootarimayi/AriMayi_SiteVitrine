"use client"
import { useState } from 'react';
import Image from 'next/image';
import downIcon from '@/public/assets/down.svg';

export default function Collapse({ title, content }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="dropdown w-[70%] m-2 ">
			<div className="dropdown-title bg-[#F68A67] flex justify-between items-center p-3 rounded-t-md ">
				<p>{title}</p>
				<Image src={downIcon} alt='down-icon'  style={{ 
          transform: isOpen ? 'rotate(180deg)' : null}} onClick={() => setIsOpen((curent) => !curent)} className="down-icon"
        />
			</div>

			{isOpen && <div className='dropdown-content bg-[#FFECDF] bg-opacity-50 p-4 rounded-b-md'>{content}</div>}
		</div>
	);
}