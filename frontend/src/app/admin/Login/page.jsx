"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../images/logo-black.png";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl rounded-2xl border-none">
          <CardContent className="p-6">
            {/* Logo */}
            <div className="flex flex-col items-center mb-6">
              <Image
                src={logo}
                alt="Stramco Logo"
                width={80}
                height={80}
                className="mb-2"
              />
              <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
              <p className="text-gray-500 text-sm">
                Login to manage your account at Stramco Solutions!
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Email Address"
                className="rounded-xl"
                required
              />

              {/* Password with eye toggle */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="rounded-xl pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <Button className="w-full rounded-xl mt-2">
                <Link
                  href="/admin/Dashboard"
                  className="text-gray-200 font-medium hover:underline"
                >
                  Login
                </Link>
              </Button>
            </form>

            {/* Signup link */}
            <div className="text-center mt-4 text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/admin/Signup"
                className="text-gray-950 font-medium hover:underline"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default LoginPage;
