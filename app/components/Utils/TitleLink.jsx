import React from "react";
import Link from "next/link";
import { ArrowBigLeft, ArrowDown, ArrowRightCircle, ChevronsDown } from "lucide-react";

const TitleLink = ({ balise, name, href, style }) => {
  const Tag = balise;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Tag
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 900,
          background:
            "linear-gradient(252.28deg, #B163FF 0%, #816CFF 38.02%, #54E0E9 100%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "48px",
          textAlign: "center",
          ...style,
        }}
      >
        {name}
      </Tag>
      {/* {href && (
        <Link href={href} passHref>
        <div style={{ display: "flex", gap: "8px", color: "inherit", textDecoration: "none", textAlign: "center", cursor: "pointer" }}>
            <span style={{ color: "#F68A67", fontSize: "28px", fontWeight: "600" }}>Simuler</span>
            <ArrowRightCircle size={40} color="#F68A67" />
        </div>
      </Link>
      )} */}
    </div>
  );
};

export default TitleLink;