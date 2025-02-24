// src/app/api/newsletter/subscribe/route.js
import { Resend } from 'resend';
import { prisma } from '@/lib/prisma';

const resend = new Resend('re_xxxx'); // Votre clé API Resend

export async function POST(req) {
  try {
    const { email } = await req.json();
    
    // Vérifier si l'email existe déjà
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email }
    });

    if (existingSubscriber) {
      return Response.json(
        { error: 'Cet email est déjà inscrit' },
        { status: 400 }
      );
    }

    // Créer un nouveau subscriber avec un token unique
    const subscriber = await prisma.subscriber.create({
      data: {
        email,
        token: crypto.randomUUID()
      }
    });

    // Envoyer l'email de confirmation au subscriber
    await resend.emails.send({
      from: 'newsletter@votredomaine.com',
      to: email,
      subject: 'Confirmation d\'inscription à la newsletter',
      html: `
        <h2>Merci de vous être inscrit à notre newsletter !</h2>
        <p>Vous recevrez désormais nos actualités directement dans votre boîte mail.</p>
        <p>Pour vous désabonner, <a href="${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter/unsubscribe?token=${subscriber.token}">cliquez ici</a></p>
      `
    });

    // Envoyer une notification à l'admin
    await resend.emails.send({
      from: 'newsletter@votredomaine.com',
      to: 'votre@email.com', // Votre email personnel
      subject: 'Nouvel abonné à la newsletter',
      html: `
        <p>Nouveau subscriber : ${email}</p>
        <p>Date : ${new Date().toLocaleString()}</p>
      `
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return Response.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    );
  }
}

// src/app/api/newsletter/unsubscribe/route.js
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    const subscriber = await prisma.subscriber.findUnique({
      where: { token }
    });

    if (!subscriber) {
      return new Response('Token invalide', { status: 400 });
    }

    // Supprimer l'abonné
    await prisma.subscriber.delete({
      where: { token }
    });

    // Notifier l'admin
    await resend.emails.send({
      from: 'newsletter@votredomaine.com',
      to: 'votre@email.com',
      subject: 'Désabonnement newsletter',
      html: `
        <p>Désabonnement : ${subscriber.email}</p>
        <p>Date : ${new Date().toLocaleString()}</p>
      `
    });

    return new Response('Vous avez été désabonné avec succès');
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return new Response('Une erreur est survenue', { status: 500 });
  }
}

// schema.prisma
model Subscriber {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  token     String   @unique
  createdAt DateTime @default(now())
}

// src/components/NewsletterForm.jsx
"use client";
import React, { useState } from 'react';
import { IoArrowForward, IoCheckmarkCircle, IoClose } from 'react-icons/io5';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      setShowPopup(true);
      setEmail('');
      setTimeout(() => setShowPopup(false), 5000);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <h3 className="text-xl font-semibold">S&apos;abonner à la newsletter</h3>
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="SAISIR UNE ADRESSE E-MAIL"
          className="flex-grow p-3 text-black rounded-l-lg"
          required
        />
        <button
          type="submit"
          className="bg-[#F48C72] p-3 rounded-r-lg transition-all duration-300 hover:bg-[#e67a5f] disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <IoArrowForward size={20} color="white" />
          )}
        </button>
      </form>

      {error && (
        <p className="mt-2 text-red-500 text-sm">{error}</p>
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-4 relative animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center gap-3">
              <IoCheckmarkCircle className="h-6 w-6 text-green-500" />
              <h4 className="text-lg font-semibold text-black">Inscription réussie !</h4>
            </div>
            <p className="mt-2 text-gray-600 text-black">
              Merci de vous être inscrit à notre newsletter. Vous recevrez bientôt un email de confirmation.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;