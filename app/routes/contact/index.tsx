import type { Route } from './+types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact Ram Reddy - Hire Web Developer | Get in Touch' },
    {
      name: 'description',
      content:
        'Get in touch with Ram Reddy for web development services, project collaborations, or freelance opportunities. Available for React, Node.js, and full-stack development projects.',
    },
    {
      name: 'keywords',
      content:
        'contact web developer, hire React developer, freelance web developer, web development services, project collaboration, get in touch',
    },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.pixcelcraftedbyram.tech/contact' },
    { property: 'og:title', content: 'Contact Ram Reddy - Web Developer' },
    {
      property: 'og:description',
      content:
        'Get in touch for web development services, project collaborations, or freelance opportunities.',
    },
    {
      property: 'og:image',
      content: 'https://www.pixcelcraftedbyram.tech/images/profile.png',
    },

    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Contact Ram Reddy' },
    {
      name: 'twitter:description',
      content: 'Get in touch for web development services and collaborations.',
    },

    // Additional SEO
    { name: 'robots', content: 'index, follow' },
  ];
}

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get('name') as string;
//   const email = formData.get('email') as string;
//   const subject = formData.get('subject') as string;
//   const message = formData.get('message') as string;

//   const errors: Record<string, string> = {};

//   if (!name) errors.name = 'Name is required';
//   if (!email) {
//     errors.email = 'Email is requried';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     errors.email = 'Invalid email format';
//   }
//   if (!subject) errors.subject = 'Subject is required';
//   if (!message) errors.message = 'Message is required';

//   if (Object.keys(errors).length > 0) {
//     return { errors };
//   }

//   const data = {
//     name,
//     email,
//     subject,
//     message,
//   };

//   return { message: 'Form submitted successfully', data };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <div className="w-full min-h-screen py-16 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-4">
          Have a question or want to work together? Drop me a message!
        </p>
        <div className="flex items-center justify-center gap-2 text-6xl">
          <span className="animate-bounce">📬</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 lg:p-12 shadow-2xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-500">
          <form
            action="https://formsubmit.co/ramreddy2557626@gmail.com"
            method="post"
            className="space-y-6"
          >
            {/* Name Field */}
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500/50"
              />
            </div>

            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500/50"
              />
            </div>

            {/* Subject Field */}
            <div className="group">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500/50"
              />
            </div>

            {/* Message Field */}
            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project or question..."
                className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-500/50 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 text-center group hover:transform hover:-translate-y-2">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Email</h3>
            <p className="text-sm text-gray-400">ramreddy2557626@gmail.com</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 text-center group hover:transform hover:-translate-y-2">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              📍
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              Location
            </h3>
            <p className="text-sm text-gray-400">India</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 text-center group hover:transform hover:-translate-y-2">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              ⏰
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              Response Time
            </h3>
            <p className="text-sm text-gray-400">Within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
