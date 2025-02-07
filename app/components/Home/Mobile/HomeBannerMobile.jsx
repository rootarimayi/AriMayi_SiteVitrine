import React from "react";
import Image from "next/image";
import graduationImg from "@/public/assets/bannerr.png";


export default function HomeBannerMobile({ children }) {
    const styledChildren = React.Children.map(children, (child) => {
      if (!child) return child;
  
      if (child.type === 'h3') {
        return React.cloneElement(child, {
          className: "text-[32px] text-start font-monserrat font-extrabold uppercase text-white bg-clip-text w-full mb-4",
        });
      }
      if (child.type === 'p') {
        return React.cloneElement(child, {
          className: "text-left font-monserrat text-[18px] leading-[32px] text-white w-full mt-4 mb-4",
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
      <section
        className="relative py-16 flex items-center justify-center bg-cover bg-center text-white min-h-[calc(100vh-200px)]"
        style={{ backgroundImage: `url(${graduationImg.src})` }}>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 text-center max-w-[90%] mt-40">
          {styledChildren}
        </div>
      </section>
    );
  }
  