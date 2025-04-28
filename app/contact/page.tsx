"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "devmodi2415@gmail.com",
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.6 },
    },
  };

  const buttonHoverVariants = {
    hover: { scale: 1.08 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight"
        >
          Get In Touch
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-6"
              >
                <CheckCircle className="w-20 h-20 text-green-500" />
                <h3 className="text-3xl font-bold">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Thank you for reaching out. I'll reply shortly.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Send Me a Message
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-sm mb-2 font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-sm mb-2 font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="subject"
                    className="text-sm mb-2 font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm mb-2 font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover="hover"
                  variants={buttonHoverVariants}
                  className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info and Office Hours */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-6"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Contact Links</h3>
              <motion.a
                href="mailto:devmodi2415@gmail.com"
                whileHover="hover"
                variants={buttonHoverVariants}
                className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>devmodi2415@gmail.com</span>
              </motion.a>

              <motion.a
                href="https://github.com/NightFury2415"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                variants={buttonHoverVariants}
                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/20 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/40 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Profile</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/dev-modi-111557235"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                variants={buttonHoverVariants}
                className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </motion.a>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold">Office Hours</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">By Appointment</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
