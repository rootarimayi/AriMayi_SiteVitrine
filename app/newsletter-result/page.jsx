'use client';
import React from 'react'
import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function page() {
    const params = useSearchParams();
    const token = params.get('token');
    const isSubscribed = params.get('isSubscribed');

  return (
    <>
    {isSubscribed ? ( <div className="font-monserrat" style={{ minHeight: "100vh", display: "flex", paddingBlock: "10%", justifyContent: "center", alignItems: "center", fontSize: "1.5rem" }}>
        <div style={{ textAlign: "center", background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <h1 style={{ color: "#000", fontSize: "36px" }}>Oups 🙊 ! C&apos;était une erreur ?</h1>
            <div style={{ marginTop: "20px" }}>
                <a href="/" style={{ display: "block", color: '#007BFF', textDecoration: 'underline', fontWeight: 'bold', marginBottom: "10px", fontSize: "28px" }}>
                    Se ré-abonner 😉
                </a>
                <span style={{ fontSize: "24px", margin: "10px 0" }}>ou</span>
                <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter/unsubscribe?token=${token}`} style={{ display: "block", color: '#FF5733', textDecoration: 'underline', fontWeight: 'bold', fontSize: "20px" }}>
                    Je confirme désabonnement 😭
                </a>
            </div>
        </div>
    </div>
):(<div className="font-monserrat" style={{ minHeight: "100vh", display: "flex", paddingBlock:"10%", justifyContent: "center", alignItems: "center",fontSize: "1.5rem" }}>
    <div className="font-monserrat" style={{ minHeight: "100vh", display: "flex", paddingBlock: "10%", justifyContent: "center", alignItems: "center", fontSize: "1.5rem"}}>
        <div style={{ textAlign: "center", background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <h1 style={{ color: "#4CAF50" }}>✅ Désabonnement réussi</h1>
            <p style={{ marginBottom: "20px" }}>Vous avez été désabonné avec succès de notre newsletter.</p>
            <a href="/" style={{ color: '#007BFF', textDecoration: 'underline', fontWeight: 'bold' }}>
                Retour à l&apos;accueil
            </a>
        </div>
    </div>
    </div>)}
    </>
  )
}