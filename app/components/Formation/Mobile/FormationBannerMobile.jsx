import React from "react";
import Image from "next/image";
import formationImg from "@/public/assets/adetola.jpg";


export default function FormationBannerMobile({ children }) {
    const styledChildren = React.Children.map(children, (child) => {
      if (!child) return child;
  
      if (child.type === 'h3') {
        return React.cloneElement(child, {
          className: "text-[32px] text-start font-monserrat font-extrabold uppercase text-white bg-clip-text w-full mb-4", // Ajout de margin-bottom
        });
      }
      if (child.type === 'p') {
        return React.cloneElement(child, {
          className: "text-left font-monserrat text-[18px] leading-[32px] text-white w-full mt-4 mb-4", // Ajout de margin-top et margin-bottom
        });
      }
      if (child.type === 'div' && child.props.className?.includes('buttons')) {
        const styledButtons = React.Children.map(child.props.children, (button) => {
          return React.cloneElement(button, {
            classes: button.props.classes.replace('text-[20px]', 'text-[16px]')
          });
        });
        return React.cloneElement(child, {}, styledButtons);
      }
      return child;
    });
  
    return (
        <section className="relative bg-[#F4F2FF] py-16 flex flex-col items-center justify-start min-h-[50vh] md:min-h-[calc(100vh-200px)] w-full overflow-hidden z-10">
            <div className="relative z-10 text-center gradient-title max-w-[90%] mb-8">
            {styledChildren}
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex justify-center items-center -z-10">
                    <img
                    src="/svg/MaskGroupLeftAbout.svg"
                    className="absolute w-[250px]"
                    style={{
                        left: "0%",
                        top: "90%",
                        transform: "translate(-50%, -45%) scale(1.5)",
                        opacity: 0.6
                    }}
                    alt="Left About Mask"
                    />
                    <img
                    src="/svg/MaskGroupLeftAbout.svg"
                    className="absolute w-[250px]"
                    style={{
                        left: "90%",
                        top: "54%",
                        transform: "translate(-50%, -45%) scale(1.5)",
                        opacity: 0.6
                    }}
                    alt="Right About Mask"
                    />
                </div>
                <Image
                    src={formationImg}
                    alt="Team"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg relative z-30"
                />
            </div>
        </section>
    );
  }
  