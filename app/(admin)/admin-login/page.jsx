"use client";
import { useState } from 'react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/admin-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();
    setMessage(data.message);

    if (response.ok) {
      window.location.href = '/admin-dashboard';
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Connexion Admin</h1>
      <form 
        onSubmit={handleLogin} 
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Entrez votre mot de passe"
          required
          className="border border-gray-300 rounded w-full py-2 px-3 mb-4"
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Se connecter
        </button>
      </form>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}