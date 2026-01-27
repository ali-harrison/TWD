import ContactForm from "@/components/ContactForm";

// Editable constants
const CONTACT = {
  heading: "Get In Touch",
  intro:
    "Interested in working together? Fill out the form below and we'll get back to you within 24 hours.",
};

export default function Contact() {
  return (
    <div className="w-full px-8 max-w-7xl mx-auto py-16 md:py-24">
      {/* Page heading */}
      <h1 className="text-6xl font-bold mb-8">{CONTACT.heading}</h1>

      {/* Intro text */}
      <p className="text-base max-w-2xl mb-16">{CONTACT.intro}</p>

      {/* Contact form */}
      <ContactForm />
    </div>
  );
}
