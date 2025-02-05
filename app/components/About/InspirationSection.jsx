"use client";
import React from "react";
import Image from "next/image";

export default function InspirationSection({ className, children }) {
    const extractTitleAndContent = (children) => {
      const childrenArray = React.Children.toArray(children);
      const title = childrenArray.find(child =>
        React.isValidElement(child) &&
        child.props.className?.includes('text-[32px]')
      );
      const content = childrenArray.filter(child => child !== title);
      return {
        title: title || null,
        content: content.length ? content : null
      };
    };
    
    const { title, content } = extractTitleAndContent(children);
    
    return (
      <section className={`relative min-h-screen flex items-center ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="text-left mb-12 md:mb-16">
              {title}
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="flex flex-col w-[250px] sm:w-[300px] md:w-[400px] flex-shrink-0">
                <img src="/svg/logo-arimayi.svg" className="w-full h-auto" alt="Arimayi Logo" />
              </div>
              <div className="max-w-2xl md:w-1/2 mt-12 md:mt-0 md:ml-16 lg:ml-24">
                {Array.isArray(content) ? content : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }