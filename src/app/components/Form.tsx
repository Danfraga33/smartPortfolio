"use client";
import React, { MutableRefObject, useRef } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { H1 } from "./ui/H1";
import { H3 } from "./ui/H3";
import { useForm } from "react-hook-form";
import Link from "next/link";

export function SignupForm() {
  const currentForm = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const email = "dan.fraga33@gmail.com";
  return (
    <>
      <div
        className="col-span-5 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
        id="contact"
      >
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contact Information
        </h2>
        <Link
          href={`mailto:${email}`}
          className="font-medium text-sm hover:text-purple-400"
        >
          {email}
        </Link>
        <p className="text-neutral-600 text-sm max-w-lg mt-2 dark:text-neutral-300">
          Feel free to get in touch if you have questions, opportunities, or
          ideas to discuss. Your messages are important to me, and I&apos;ll
          respond promptly. Let&apos;s connect!
        </p>

        <form
          ref={currentForm}
          className="my-8"
          action="https://getform.io/f/53e1b6e5-d388-49e3-b0b6-935c380b3dde"
          method="POST"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="first-name" aria-required>
                First Name
              </Label>
              <Input
                id="first-name"
                placeholder="Danny"
                type="text"
                {...register("firstName", { required: true })}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="DeVito"
                type="text"
                {...register("lastName", { required: true })}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="tiny_titan@mciMail.com"
              type="email"
              {...register("email", {
                required: true,
              })}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="subject">Subject</Label>
            <Input
              required
              id="subject"
              placeholder="Finally! I am getting taller!"
              type="text"
              {...register("subject", { required: true })}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <textarea
              required
              id="message"
              rows={4}
              cols={50}
              {...register("message", { required: true })}
              className="p-4 font-medium text-black dark:text-white leading-none text-sm rounded-lg transition duration-300 group/input "
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message <span className="ml-1"> &rarr;</span>
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
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
