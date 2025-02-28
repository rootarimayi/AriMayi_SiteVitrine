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
        <div>
        <h1>Dashboard Admin</h1>
        <p>Liste des CV récupérés :</p>
        <button
            onClick={async () => {
            await fetch("/api/logout", { method: "POST" });
            router.push("/");
            }}
        >
            Déconnexion
        </button>
        </div>
    );
};

export default AdminDashboard;
