"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../images/logo-black.png";
import useAuthStore from "../../../../store/useAuthStore.js";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading, error, user } = useAuthStore();
  const router = useRouter();
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "❌ Passwords do not match",
      });
      return;
    }

    await signup(formData.fullname, formData.email, formData.password);
  };

  // ✅ Redirect immediately once user is created
  useEffect(() => {
    if (user) {
      toast({
        title: "✅ Account created successfully",
        description: "Redirecting to login page...",
      });

      router.push("/admin/Login"); // no timer, instant redirect
    }
  }, [user, router, toast]);

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
              <h1 className="text-2xl font-bold text-gray-800">Join Stramco</h1>
              <p className="text-gray-500 text-sm">
                Signup to get started with Stramco
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="fullname"
                type="text"
                placeholder="Your full Name"
                className="rounded-xl"
                required
                value={formData.fullname}
                onChange={handleChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                className="rounded-xl"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="rounded-xl pr-10"
                  required
                  value={formData.password}
                  onChange={handleChange}
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
              <div className="relative">
                <Input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="rounded-xl pr-10"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {/* Show backend error */}
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl mt-2"
              >
                {loading ? "Signing up..." : "Sign Up"}
              </Button>
            </form>

            {/* Login link */}
            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/admin/Login"
                className="text-gray-950 font-medium hover:underline"
              >
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default SignupPage;
