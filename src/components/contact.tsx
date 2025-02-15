import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const ContactComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Success/Failure status message
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("❌ Please fill out all fields.");
      return;
    }

    try {
      await emailjs.send(
        "service_4xyraul",
        "template_voidsdp",
        { name, email, message },
        "dDXpkQpC8ax0U7ETO"
      );

      setStatus("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      alert("Thank you! Your message has been sent successfully. I will get back to you as soon as possible.");
      setTimeout(() => navigate("/"), 2000);

    } catch (error) {
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700">
        
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-green-400 mb-6">
          📩 Contact Me
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Have a question, project idea, need a skilled full-stack developer or just want to say hello? Drop me a message below!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            className="w-full p-4 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="w-full p-4 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            className="w-full p-4 h-36 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            placeholder="Your Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Send Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-green-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-600 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && <p className="text-center text-2xl font-bold mt-4 text-orange-600">{status}</p>}

        {/* Decorative Element */}
        <div className="mt-8 flex justify-center">
          <span className="text-gray-500 text-sm">
            📬 I'll get back to you as soon as possible!
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
