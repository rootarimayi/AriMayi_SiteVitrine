"use client";
import Image from "next/image";
import contactImg from "@/public/images/contact-img.png";

export default function ContactBannerMobile({ className, children }) {
    return (
        <section
            id="banner"
            className={`py-[100px] flex items-center justify-center ${className} overflow-x-hidden overflow-y-hidden`}
        >
            <div className="container mx-auto px-4 lg:px-16 flex flex-col items-center">
                <div className="text-left flex flex-col gap-6 z-20 mb-6">
                    {children}
                </div>
                <div className="relative w-full flex justify-center"> {/* Conteneur pour l'image et les SVG */}
                    <div className="absolute inset-0 flex justify-center items-center z-10">
                        <img
                            src="/svg/MaskGroupGreyContactcopie.svg"
                            className="w-[200px] md:w-[250px]"
                            style={{
                                position: 'absolute',
                                left: '30%',
                                top: '140%',
                                transform: 'translate(-50%, -50%) scale(4)',
                                opacity: 0.3
                            }}
                            alt="Grey Contact Mask"
                        />
                        <img
                            src="/svg/MaskGroupOrangeContact.svg"
                            className="w-[200px] md:w-[250px]"
                            style={{
                                position: 'absolute',
                                left: '120%',
                                top: '150%',
                                transform: 'translate(-50%, -50%) scale(4)',
                                opacity: 0.6
                            }}
                            alt="Orange Contact Mask"
                        />
                    </div>
                    {/* Image de contact */}
                    <img
                        src={contactImg.src}
                        alt="Contact"
                        className="rounded-lg shadow-lg relative z-20 w-[300px] h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
