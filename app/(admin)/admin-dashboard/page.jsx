"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch("/api/check-auth");
            if (res.ok) {
                setIsAuthorized(true);
            } else {
                router.push("/");
            }
        };
        checkAuth();
    }, []);

    if (!isAuthorized) return null;

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex flex-col justify-center items-center flex-grow">
                <h1 className="text-3xl font-bold mb-4">Dashboard Admin</h1>
                <p className="text-lg mb-4">Liste des CV récupérés :</p>
                {/* Get JSON Data */}
            </div>
            <div className="p-4">
                <button
                onClick={async () => {
                    await fetch("/api/logout", { method: "POST" });
                    router.push("/");
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                Déconnexion
                </button>
            </div>
            </div>
    );
};

export default AdminDashboard;
