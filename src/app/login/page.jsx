"use client";

import { useState } from "react";
import Link from "next/link";
import { Input, Label, TextField, FieldError, Form } from "@heroui/react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { object } from "better-auth";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const inputClass =
  "w-full h-11 px-3.5 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors placeholder:text-[#bbb]";
const labelClass =
  "text-[13px] font-medium text-black tracking-[-0.01em] mb-1.5 block";
const errorClass = "text-[12px] text-red-500 tracking-[-0.01em] mt-1 block";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries());
      const { data, error } = await authClient.signIn.email({
        email: user?.email,
        password: user?.password,
      });
      if (error) {
        toast.error(error.message || "Something went wrong");
        console.log(error.message, error);
        return;
      }
      router.push("/");
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Unexpected error occurred");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-5">
      <div className="w-full max-w-85 flex flex-col gap-7">
        {/* Header */}
        <div>
          <h1 className="text-[26px] font-medium tracking-[-0.04em] text-black mb-1">
            Sign in
          </h1>
          <p className="text-[13.5px] text-[#999] tracking-[-0.01em]">
            Welcome back good to see you again
          </p>
        </div>

        {/* Form */}
        <Form
          onSubmit={handleSubmit}
          validationBehavior="native"
          className="flex flex-col gap-4"
        >
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
            <div className="flex items-center justify-between mb-1.5">
              <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-[12px] text-[#999] hover:text-black transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#ccc] pointer-events-none" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
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
              "Sign in"
            )}
          </button>
        </Form>

        {/* Register link */}
        <p className="text-center text-[13px] text-[#999] tracking-[-0.01em]">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-black font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
