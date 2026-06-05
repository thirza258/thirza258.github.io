import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmissionStatus('Contact form is not configured yet.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey);
      setSubmissionStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (_) {
      setSubmissionStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-white">
      <h2 className="text-center font-header text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-primary">
        Here's a contact form
      </h2>
      <h4 className="pt-6 text-center font-header text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800">
        Have Any Questions?
      </h4>
      <div className="mx-auto w-full pt-5 text-center sm:w-2/3">
        <p className="font-body text-gray-600">
          As an Information Systems student at the University of Indonesia, I'm on a quest to unravel the mysteries of code and design. My passion for programming ignites my creativity, and I'm determined to craft elegant solutions to complex problems. Seeking a software engineering position, I'm ready to dive into the world of algorithms, databases, and user interfaces – all while sipping on a cup of virtual coffee. You can contact me here...
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto w-full pt-10 sm:w-3/4">
        <div className="flex flex-col md:flex-row">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mr-3 w-full md:w-1/2 lg:mr-5 rounded border-2 border-black px-4 py-3 font-body text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Name"
            type="text"
            id="name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-6 md:mt-0 md:ml-3 w-full md:w-1/2 lg:ml-5 rounded border-2 border-black px-4 py-3 font-body text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Email"
            type="email"
            id="email"
            required
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-6 w-full rounded border-2 border-black px-4 py-3 font-body text-gray-800 md:mt-8 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Message"
          id="message"
          required
        ></textarea>
        <button
          type="submit"
          className={`mt-6 flex items-center justify-center rounded border-2 border-black bg-white px-8 py-3 font-header text-lg font-bold uppercase text-black hover:bg-black hover:text-white transition-colors duration-300 ${isSubmitting ? 'cursor-wait opacity-75' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
          <i className="bx bx-chevron-right relative right-2 text-3xl"></i>
        </button>
        {submissionStatus && (
          <p className={`mt-4 text-center ${submissionStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {submissionStatus}
          </p>
        )}
      </form>
      <div className="flex flex-col pt-16 lg:flex-row">
        <div className="w-full lg:w-1/2 border-2 border-black px-6 py-6 sm:py-8">
          <div className="flex items-center">
            <i className="bx bx-phone text-2xl text-gray-500"></i>
            <p className="pl-2 font-body font-bold uppercase text-gray-600 lg:text-lg">
              My Phone
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-black lg:text-lg">
            (+62) 812-9076-5711
          </p>
        </div>
        <div className="w-full lg:w-1/2 border-2 border-black px-6 py-6 sm:py-8 mt-6 lg:mt-0 lg:border-l-0 lg:border-t lg:border-r">
          <div className="flex items-center">
            <i className="bx bx-envelope text-2xl text-gray-500"></i>
            <p className="pl-2 font-body font-bold uppercase text-gray-600 lg:text-lg">
              My Email
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-black lg:text-lg">
            thirzahmad@gmail.com
          </p>

        </div>
      </div>
    </div>

  )
}

export default ContactForm;
