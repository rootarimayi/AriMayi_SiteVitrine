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
      // Rediriger vers le tableau de bord admin
      window.location.href = '/(admin)/admin-dashboard';
    }
  };

  return (
    <div>
      <h1>Connexion Admin</h1>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Entrez votre mot de passe"
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}