import Link from "next/link";

export default function HomeButton({ text, classes = "", src = "/" }) {
    return (
        <Link
            href={src}
            className={`
                inline-block px-6 py-2 font-semibold font-montserrat 
                border-2 relative
                transition-all duration-300 ease-in-out
                hover:text-white
                ${classes}
            `}
            style={{
                borderImage: "linear-gradient(130.45deg, #54E0E9 5.48%, #816CFF 60.63%, #B163FF 104.96%) 1",
                backgroundImage: "linear-gradient(130.45deg, #54E0E9 5.48%, #816CFF 60.63%, #B163FF 104.96%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                borderRadius: "8px"
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundClip = "border-box";
                e.currentTarget.style.WebkitBackgroundClip = "border-box";
                e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundClip = "text";
                e.currentTarget.style.WebkitBackgroundClip = "text";
                e.currentTarget.style.color = "transparent";
            }}
        >
            {text}
        </Link>
    );
}