"use client";
import React, { useRef, useState } from "react";
import { Label } from "../Aceternity/Form/label";
import { Input, Textarea } from "../Aceternity/Form/input";
import { cn } from "@/utils/cn";
import { BackgroundBeams } from "@/Aceternity/background-beams";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  useScroll,
  useTransform,
  m,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import emailjs from "@emailjs/browser";
import CustomButton from "@/Aceternity/customButton";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error message for the current field
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully");
      if (form.current) {
        const templateParams = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          message: formData.message,
          phone: formData.phone,
          email: formData.email,
        };
        emailjs
          .sendForm("service_g18g046", "template_5z61cis", form.current, {
            publicKey: "1ZGlS7KusT4rXNX_k",
            ...templateParams,
          })
          .then(
            () => {
              console.log("SUCCESS!");
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                phone: "",
              });
              toast.success("Form submitted successfully");
            },
            (error) => {
              console.log("FAILED...", error.text);
              toast.error("Form submission failed");
            }
          );
      } else {
        console.log("Form reference is null");
      }
    } else {
      console.log("Form validation failed");
      toast.error("Form validation failed");
    }
  };

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const firstNameError = !nameRegex.test(formData.firstName.trim())
      ? "First name must contain only letters"
      : "";
    const lastNameError = !nameRegex.test(formData.lastName.trim())
      ? "Last name must contain only letters"
      : "";
    const phoneError = !phoneRegex.test(formData.phone.trim())
      ? "Phone number must be 10 digits"
      : "";
    const emailError = !emailRegex.test(formData.email.trim())
      ? "Invalid email address"
      : "";
    const messageError =
      formData.message.trim() === "" ? "Message is required" : "";

    // Update error state for each field
    setFormErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      phone: phoneError,
      message: messageError,
    });

    // Form is valid if all error messages are empty
    return !(
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneError ||
      messageError
    );
  };

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Define opacity transformation based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ opacity }}
          ref={ref}
          className="relative"
        >
          <div className="h-[40rem] w-full rounded-md dark:bg-customblack relative flex flex-col items-center justify-center antialiased translate-y-20">
            <div className="text-center text-gradientDark dark:text-gradient font-semibold text-4xl sm:text-6xl">
              Contact
            </div>
            <div className="max-w-2xl mx-auto p-4 relative z-30 bg-white dark:bg-black shadow-input rounded-none md:rounded-2xl">
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Get in touch with me for any queries or collaboration.
              </p>
              <form className="my-8" ref={form} onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  {/* First Name */}
                  <LabelInputContainer>
                    <Label htmlFor="firstname">First name</Label>
                    <Input
                      id="firstname"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Tyler"
                      type="text"
                      autoComplete="given-name"
                    />
                    {formErrors.firstName && (
                      <span className="text-red-400 text-xs">
                        {formErrors.firstName}
                      </span>
                    )}
                  </LabelInputContainer>
                  {/* Last Name */}
                  <LabelInputContainer>
                    <Label htmlFor="lastname">Last name</Label>
                    <Input
                      id="lastname"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Durden"
                      type="text"
                      autoComplete="family-name"
                    />
                    {formErrors.lastName && (
                      <span className="text-red-400 text-xs">
                        {formErrors.lastName}
                      </span>
                    )}
                  </LabelInputContainer>
                </div>
                {/* Email */}
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="projectmayhem@fc.com"
                    type="email"
                    autoComplete="email"
                  />
                  {formErrors.email && (
                    <span className="text-red-400 text-xs">
                      {formErrors.email}
                    </span>
                  )}
                </LabelInputContainer>
                {/* Phone */}
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 xxxxxxxx98"
                    type="tel"
                    autoComplete="tel"
                  />
                  {formErrors.phone && (
                    <span className="text-red-400 text-xs">
                      {formErrors.phone}
                    </span>
                  )}
                </LabelInputContainer>
                {/* Message */}
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                  />
                  {formErrors.message && (
                    <span className="text-red-400 text-xs">
                      {formErrors.message}
                    </span>
                  )}
                </LabelInputContainer>
                <CustomButton />
              </form>
            </div>
            <BackgroundBeams />
          </div>
        </m.div>
      </LazyMotion>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
