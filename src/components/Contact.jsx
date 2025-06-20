import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //  Validate Email Format
  const isValidEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //  Verify Email Deliverability using AbstractAPI
  const verifyEmailDeliverability = async (email) => {
    const apiKey = "	676f7e907a28421cb3163c787cf3bff6";
    const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Verification API response:", data);
      return data.deliverability === "DELIVERABLE";
    } catch (error) {
      console.error("Email verification failed:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check email format first
    if (!isValidEmailFormat(form.email)) {
      alert("Please enter a valid email address format.");
      setLoading(false);
      return;
    }

    // Check deliverability via API
    const isDeliverable = await verifyEmailDeliverability(form.email);

    if (!isDeliverable) {
      alert(
        "This email address doesn't seem to exist or isn't deliverable. Please enter a valid, active email."
      );
      setLoading(false);
      return;
    }

    const currentTime = new Date().toLocaleString();

    emailjs
      .send(
        "service_hh306n5",
        "template_1qkqhtv",
        {
          title: "Portfolio message",
          name: form.name,
          time: currentTime,
          message: form.message,
          to_name: "Akshay mani tripathi",
          from_name: form.name,
          from_email: form.email,
          email: form.email,
        },
        "RV9XlTDRPn4FnS-ON"
      )
      .then(
        (result) => {
          setLoading(false);
          console.log("SUCCESS!", result.status, result.text);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            title: "",
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("FAILED...", error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg"
      >
        <p className={`${styles.sectionSubText} text-gray-400`}>Get in touch</p>
        <h3 className="text-[40px] font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-500 text-transparent bg-clip-text">
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-black/30 backdrop-blur-sm py-4 px-6 text-white placeholder-gray-400 rounded-lg outline-none border border-white/10"
              required
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-black/30 backdrop-blur-sm py-4 px-6 text-white placeholder-gray-400 rounded-lg outline-none border border-white/10"
              required
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-black/30 backdrop-blur-sm py-4 px-6 text-white placeholder-gray-400 rounded-lg outline-none border border-white/10"
              required
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-purple-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:shadow-purple-500/50 transition"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
