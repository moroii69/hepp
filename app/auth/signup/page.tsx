"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Heart } from "lucide-react";
import Link from "next/link";
import { useSignUp } from "@clerk/nextjs";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    condition: "",
    terms: false,
  });

  const { isLoaded, signUp, isCreating } = useSignUp();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isCheckbox = (e.target as HTMLInputElement).type === "checkbox";
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prevData) => ({
      ...prevData,
      [name]: isCheckbox ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);

      if (isLoaded) {
        const user = await signUp.create({
          emailAddress: formData.email,
          password: formData.password,
          firstName: formData.name,
          metadata: {
            age: formData.age,
            condition: formData.condition,
          },
        });

        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Sign-up failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <Heart className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">HealthPredict</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6 justify-center">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">Features</Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/how-it-works">How It Works</Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about-us">About Us</Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">Contact</Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/auth/signup">Signup</Link>
          </nav>
        </div>
      </header>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/signin" className="font-medium text-blue-600 hover:text-blue-500">Sign in</Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pr-10"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters long</p>
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  required
                  className="mt-1"
                  placeholder="30"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="condition">Chronic Condition</Label>
                <Select
                  name="condition"
                  required
                  value={formData.condition}
                  onChange={handleChange}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diabetes">Diabetes</SelectItem>
                    <SelectItem value="asthma">Asthma</SelectItem>
                    <SelectItem value="hypertension">Hypertension</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="terms"
                name="terms"
                required
                checked={formData.terms}
                onChange={handleChange}
              />
              <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <Link href="/terms" className="font-medium text-blue-600 hover:text-blue-500">Terms of Service</Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">Privacy Policy</Link>
              </Label>
            </div>

            <div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
