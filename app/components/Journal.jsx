import React from "react";
import Image from "next/image";
import slide2 from "@/public/assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg";

export default function Journal() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
      }}
    >
      {/*  */}
      <Image
        src={slide2}
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      {/* Overlay content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds transparency
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>
          Inscrivez-vous dès aujourd&apos;hui
        </h1>
        <p style={{ marginBottom: "20px" }}>
          Faites votre premier pas vers une carrière dans l&apos;IT avec AriMayi
        </p>
        <form
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Nom"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
}
