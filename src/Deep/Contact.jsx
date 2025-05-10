import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _honey: "", // spam trap
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData._honey) return; // bot trap

    const response = await fetch("https://formsubmit.co/ajax/ai.dboyd01@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", _honey: "" });
    } else {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="py-12 px-4 md:px-8 bg-gray-800">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot Field */}
          <input
            type="text"
            name="_honey"
            value={formData._honey}
            onChange={handleChange}
            style={{ display: "none" }}
          />

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 rounded-lg p-3 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 rounded-lg p-3 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 rounded-lg p-3 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
