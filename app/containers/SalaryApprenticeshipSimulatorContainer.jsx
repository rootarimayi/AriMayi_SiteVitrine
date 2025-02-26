"use client";
import SalaryApprenticeshipSimulator from "../components/Apprenants/SalaryApprenticeshipSimulator";

export default function SalaryApprenticeshipSimulatorContainer() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", paddingBlock:"10%" ,  justifyContent: "center", alignItems: "center" }}>
            <SalaryApprenticeshipSimulator />
        </main>
        
    )
}