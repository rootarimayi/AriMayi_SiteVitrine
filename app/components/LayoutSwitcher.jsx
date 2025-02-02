"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PartnerHeader from "./PartnerHeader";
import PartnerFooter from "./PartnerFooter";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutSwitcher() {
  const pathname = usePathname();
  const [isPartnerRoute, setIsPartnerRoute] = useState(false);

  useEffect(() => {
    setIsPartnerRoute(["/partenaires", "/apprenants"].includes(pathname));
  }, [pathname]);

  return (
    <>
      {isPartnerRoute ? <PartnerHeader /> : <Header />}
      {isPartnerRoute ? <PartnerFooter /> : <Footer />}
    </>
  );
}
