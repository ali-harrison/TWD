"use client";

import { FormEvent, useState } from "react";

// Editable constants
const PROJECT_TYPES = ["Landing Page", "E-commerce", "Custom"];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
      {/* Name field */}
      <div>
        <label htmlFor="name" className="block text-base font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-white bg-black text-white focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block text-base font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-white bg-black text-white focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
      </div>

      {/* Project Type field */}
      <div>
        <label htmlFor="projectType" className="block text-base font-bold mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full px-4 py-3 border border-white bg-black text-white focus:outline-none focus:ring-2 focus:ring-white"
          required
        >
          <option value="">Select a project type</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message field */}
      <div>
        <label htmlFor="message" className="block text-base font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 border border-white bg-black text-white focus:outline-none focus:ring-2 focus:ring-white resize-none"
          required
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="px-8 py-4 bg-white text-black font-bold hover:bg-gray transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
