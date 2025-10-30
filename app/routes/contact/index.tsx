import type { Route } from './+types';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loader from '~/components/Loader';

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get('name') as string;
//   const email = formData.get('email') as string;
//   const subject = formData.get('subject') as string;
//   const message = formData.get('message') as string;

//   const errors: Record<string, string> = {};
//   if (!name) errors.name = 'Name is required';
//   if (!email) {
//     errors.email = 'Email is required';
//   } else {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email.toString())) {
//       errors.email = 'Invalid email address';
//     }
//   }
//   if (!subject) errors.subject = 'Subject is required';
//   if (!message) errors.message = 'Message is required';

//   if (Object.keys(errors).length > 0) {
//     return { errors };
//   }

//   const Data = {
//     name,
//     email,
//     subject,
//     message,
//   };
//   return { message: 'Message sent successfully', data: Data };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg relative">
        <img
          src="/images/mail-effect.svg"
          alt="Mail Illustration"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 opacity-70 text-gray-400 pointer-events-none animate-bounce"
        />
        <img
          src="/images/chat-bubble.svg"
          alt="Chat Bubble Illustration"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 opacity-70 text-gray-400 pointer-events-none animate-bounce"
        />
        <motion.h1
          className="text-3xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          📬 Contact Me
        </motion.h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>

        <form
          action="https://formsubmit.co/ramreddy2557626@gmail.com"
          method="post"
          onFocus={(event) => {
            if (typeof document !== 'undefined') {
              const illustrations = document.querySelectorAll(
                '.animate-bounce, .animate-spin'
              );
              illustrations.forEach((illustration) => {
                (illustration as HTMLElement).style.display = 'none';
              });
            }
          }}
          onBlur={(event) => {
            if (typeof document !== 'undefined') {
              const illustration = document.querySelector(
                '.animate-bounce'
              ) as HTMLElement;
              if (illustration) {
                illustration.style.display = 'none';
              }
            }
          }}
        >
          <motion.div
            className="mb-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div
            className="mb-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div
            className="mb-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div
            className="mb-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Message:
            </label>
            <textarea
              rows={5}
              id="message"
              name="message"
              className="block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.button
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </>
  );
};
export default ContactPage;
