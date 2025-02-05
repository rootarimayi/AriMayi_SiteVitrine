"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header";
import Footer from "../Footer";
import PartnerHeader from "../Partner/PartnerHeader";
import PartnerFooter from "../Partner/PartnerFooter";

export default function DynamicLayout({ children }) {
    const pathname = usePathname();
    const [isPartnerRoute, setIsPartnerRoute] = useState(false);

    useEffect(() => {
        // Vérifie si on est sur une page "partenaire"
        setIsPartnerRoute(pathname.startsWith("/partenaires"));
    }, [pathname]);

    return (
        <>
        {/* {isPartnerRoute ? <PartnerHeader /> : <Header />}
        <main>{children}</main>
        {isPartnerRoute ? <PartnerFooter /> : <Footer />} */}
        <Header />{children}
        <Footer />
        </>
    );
}
