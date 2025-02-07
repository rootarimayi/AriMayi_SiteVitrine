"use client";
import React from "react";
import Image from "next/image";

// export default function InspirationSection({ className, children }) {
//     const extractTitleAndContent = (children) => {
//       const childrenArray = React.Children.toArray(children);
//       const title = childrenArray.find(child =>
//         React.isValidElement(child) &&
//         child.props.className?.includes('text-[32px]')
//       );
//       const content = childrenArray.filter(child => child !== title);
//       return {
//         title: title || null,
//         content: content.length ? content : null
//       };
//     };
    
//     const { title, content } = extractTitleAndContent(children);
    
//     return (
//       <section className={`py-[50px] flex items-center ${className}`}>
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col">
//             <div className="text-left mb-12 md:mb-16">
//               {title}
//             </div>
//             <div className="flex flex-col md:flex-row items-start justify-between">
//               <div className="flex flex-col w-[250px] sm:w-[300px] md:w-[400px] flex-shrink-0">
//                 <img src="/svg/logo-arimayi.svg" className="w-full h-auto" alt="Arimayi Logo" />
//               </div>
//               <div className="max-w-2xl md:w-1/2 mt-12 md:mt-0 md:ml-16 lg:ml-24">
//                 {Array.isArray(content) ? content : null}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
export default function InspirationSection({ className, children }) {
    const extractTitleAndContent = (children) => {
        const childrenArray = React.Children.toArray(children);

        const title = childrenArray.find(child =>
            React.isValidElement(child) &&
            child.props.className?.includes('text-[32px]')
        );

        const content = childrenArray.filter(child => child !== title);

        const firstParagraph = content.find(child =>
            React.isValidElement(child) && child.type === 'p'
        );

        const otherContent = content.filter(child => child !== firstParagraph);

        return { title, firstParagraph, otherContent };
    };

    const { title, firstParagraph, otherContent } = extractTitleAndContent(children);

    return (
        <section className={`py-[50px] flex items-center ${className}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-2 gap-y-6 items-start">
                    {/* Ligne 1 : Titre + Premier paragraphe */}
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                            {title}
                        </div>
                    </div>
                    <div className="flex items-center">
                        {firstParagraph}
                    </div>
                    
                    {/* Ligne 2 : SVG Logo */}
                    <div className="flex justify-center items-center w-[250px] sm:w-[300px] md:w-[400px] mx-auto">
                        <img src="/svg/logo-arimayi.svg" className="w-full h-auto" alt="Arimayi Logo" style={{ transform: "scale(0.9)" }} />
                    </div>

                    {/* Ligne 3 : Sous-titre + Second paragraphe (superposés) */}
                    <div className="flex flex-col items-start">
                        {otherContent} 
                    </div>
                </div>
            </div>
        </section>
    );
}

