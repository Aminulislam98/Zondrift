"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Input,
  Label,
  TextField,
  Description,
  FieldError,
  Form,
} from "@heroui/react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const inputClass =
  "w-full h-11 px-3.5 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors placeholder:text-[#bbb]";
const labelClass =
  "text-[13px] font-medium text-black tracking-[-0.01em] mb-1.5 block";
const errorClass = "text-[12px] text-red-500 tracking-[-0.01em] mt-1 block";
const descClass = "text-[12px] text-[#bbb] tracking-[-0.01em] mt-1 block";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("register:", data);
    // TODO: connect to auth
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-5">
      <div className="w-full max-w-[340px] flex flex-col gap-7 py-14">
        {/* Header */}
        <div className="flex flex-col items-center justify-center py-2">
          <h1 className="text-[26px] font-medium tracking-[-0.04em] text-black mb-1">
            Create account
          </h1>
          <p className="text-[13.5px] text-[#999] tracking-[-0.01em]">
            Start planning your next adventure today
          </p>
        </div>

        {/* Form */}
        <Form
          onSubmit={handleSubmit}
          validationBehavior="native"
          className="flex flex-col gap-4"
        >
          {/* Full name */}
          <TextField name="name" isRequired className="w-full">
            <Label className={labelClass}>Full name</Label>
            <div className="relative">
              <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#ccc] pointer-events-none" />
              <Input
                placeholder="Aminul Islam"
                className={`${inputClass} pl-10`}
              />
            </div>
            <FieldError className={errorClass} />
          </TextField>

          {/* Email */}
          <TextField name="email" isRequired className="w-full">
            <Label className={labelClass}>Email address</Label>
            <div className="relative">
              <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#ccc] pointer-events-none" />
              <Input
                type="email"
                placeholder="you@example.com"
                className={`${inputClass} pl-10`}
              />
            </div>
            <FieldError className={errorClass} />
          </TextField>

          {/* Password */}
          <TextField name="password" isRequired className="w-full">
            <Label className={labelClass}>Password</Label>
            <div className="relative">
              <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#ccc] pointer-events-none" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                className={`${inputClass} pl-10 pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#ccc] hover:text-black transition-colors"
              >
                {showPassword ? (
                  <FiEyeOff className="w-3.5 h-3.5" />
                ) : (
                  <FiEye className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <Description className={descClass}>
              At least 8 characters
            </Description>
            <FieldError className={errorClass} />
          </TextField>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-black text-white text-[13.5px] font-medium tracking-[-0.01em] hover:bg-black/80 transition-colors disabled:opacity-50 flex items-center justify-center mt-1"
          >
            {loading ? (
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.25"
                />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              "Create account"
            )}
          </button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-black/[0.07]" />
          <span className="text-[11.5px] text-[#ccc] tracking-[-0.01em]">
            or continue with
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        {/* Google */}
        <button
          onClick={() => console.log("google")}
          className="w-full flex items-center justify-center gap-3 h-11 border border-black/[0.12] text-[13.5px] text-black tracking-[-0.01em] hover:border-black/25 hover:bg-black/[0.02] transition-all"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </button>

        {/* Terms */}
        <p className="text-center text-[11.5px] text-[#bbb] tracking-[-0.01em] leading-relaxed -mt-3">
          By signing up you agree to our{" "}
          <Link
            href="/terms"
            className="text-[#888] hover:text-black transition-colors"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-[#888] hover:text-black transition-colors"
          >
            Privacy Policy
          </Link>
        </p>

        {/* Login link */}
        <p className="text-center text-[13px] text-[#999] tracking-[-0.01em]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-black font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
