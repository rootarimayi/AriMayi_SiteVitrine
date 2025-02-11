"use client";
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { toast } from 'sonner';
// import { sendMail } from '@/app/api/email/route';

// const contactFormSchema = z.object({
//   name: z.string().min(2, { message: 'Please Enter Your Name' }),
//   email: z.string().email({ message: 'Please Enter a Valid Email Address' }),
//   message: z.string().min(10, { message: 'Please make sure your message is at least 10 characters long.' })
// });

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset
//   } = useForm({
//     resolver: zodResolver(contactFormSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       message: '',
//     },
//   });

//   const onSubmit = async (values) => {
//     try {
//       const mailText = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
      
//       const response = await sendMail({
//         email: values.email,
//         subject: 'New Contact Form Submission',
//         text: mailText,
//       });

//       if (response?.messageId) {
//         toast.success('Message sent successfully!');
//         reset();
//       } else {
//         toast.error('Failed to send message.');
//       }
//     } catch (error) {
//       console.error('Form submission error:', error);
//       toast.error('An error occurred while sending the message.');
//     }
//   };

//   return (
//     <form 
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full max-w-2xl mx-auto space-y-6 p-4 lg:p-6"
//     >
//       <div className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-lg font-medium mb-2">
//             Enter Your Name:
//           </label>
//           <input
//             {...register('name')}
//             type="text"
//             id="name"
//             placeholder="John Doe"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//           />
//           {errors.name && (
//             <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-lg font-medium mb-2">
//             Enter Your Email Address:
//           </label>
//           <input
//             {...register('email')}
//             type="email"
//             id="email"
//             placeholder="john@example.com"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//           />
//           {errors.email && (
//             <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-lg font-medium mb-2">
//             Enter Your Message:
//           </label>
//           <textarea
//             {...register('message')}
//             id="message"
//             placeholder="What would you like to say?"
//             rows="4"
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//           />
//           {errors.message && (
//             <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
//           )}
//         </div>

//         <button 
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full py-2 px-4 rounded-lg text-white font-medium transition
//             ${isSubmitting 
//               ? 'bg-gray-400 cursor-not-allowed' 
//               : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
//             }`}
//         >
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//         </button>
//       </div>
//     </form>
//   );
// }

import { useState } from "react";
import { toast } from 'react-hot-toast';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendInProgress, setSendInProgress] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendInProgress(true);

    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success('📧 Message envoyé ! Je vous répondrai bientôt.', {
            duration: 4000,
            position: 'top-center',
          });
        } else {
          toast.error('📧 Le message n\'a pas pu être envoyé !', {
            duration: 4000,
            position: 'top-center',
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('📧 Le message n\'a pas pu être envoyé !', {
          duration: 4000,
          position: 'top-center',
        });
      })
      .finally(() => {
        setSendInProgress(false);
      });
  };

  return (
    <>
      <h1>Talk To Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Name: (required)
          <input
            type="text"
            required
            placeholder="bram"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full"
          />
        </label>

        <label className="block">
          Email: (required)
          <input
            type="email"
            required
            placeholder="bram@bram.com"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full"
          />
        </label>

        <label className="block">
          Message: (required)
          <textarea
            required
            placeholder="What's on your mind?"
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full"
          />
        </label>

        <button
          type="submit"
          disabled={sendInProgress}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {sendInProgress ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </>
  );
}