import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (e.g., email service or backend API)
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div id="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500">Contact Me</h2>

        {/* Call to Action */}
        <p className="mt-4">
          Feel free to reach out to me through this form or connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/jovany-gadelsaid-90bab5255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-2 rounded-md bg-gray-900 border border-gray-600 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-2 rounded-md bg-gray-900 border border-gray-600 focus:outline-none"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="p-2 rounded-md bg-gray-900 border border-gray-600 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="p-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
