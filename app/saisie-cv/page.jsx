"use client";
import ResumeContainer from "../containers/ResumeContainer";

export default function ResumePage() {
    return(
        <main style={{ minHeight: "100vh", display: "flex", paddingBlock:"10%" ,  justifyContent: "center", alignItems: "center" }}>
            <ResumeContainer />
        </main>
    )
}
