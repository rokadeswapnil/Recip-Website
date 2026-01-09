import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.log(error);
          setStatus("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">
        Contact <span className="text-yellow-700">Us</span>
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Have a question, suggestion, or feedback about recipes?
        Fill out the form below and we’ll get back to you.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="shadow-md rounded-xl p-6 space-y-5"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-800 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-sm text-gray-600 mt-2">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
