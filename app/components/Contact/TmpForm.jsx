import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendInProgress, setSendInProgress] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSendInProgress(true);

        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    message: message,
                }),
            });

            if (res.status === 200) {
                toast.success("📧 Message envoyé avec succès !");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                toast.error("❌ Échec de l'envoi du message !");
            }
        } catch (error) {
            console.error(error);
            toast.error("❌ Une erreur est survenue !");
        } finally {
            setSendInProgress(false);
        }
    };

    return (
        <>
            <h1>Talk To Me</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: (required)
                    <input
                        type="text"
                        required
                        placeholder="bram"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <label>
                    Email: (required)
                    <input
                        type="email"
                        required
                        placeholder="bram@bram.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <label>
                    Message: (required)
                    <textarea
                        required
                        placeholder="What's on your mind?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" disabled={sendInProgress} />
            </form>

            {sendInProgress && <p>Envoi en cours...</p>}
        </>
    );
}
