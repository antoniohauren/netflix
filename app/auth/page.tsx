"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Image from "next/image";
import { useState } from "react";

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState<"login" | "register">("login");

  function toggleVariant() {
    setVariant(() => (variant === "login" ? "register" : "login"));
  }

  const isLogin = variant === "login";

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <div className="h-12 w-32 relative">
            <Image
              src="/images/logo.png"
              fill
              className="object-contain"
              alt={`alt`}
            />
          </div>
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h1 className="text-white text-4xl mb-8 font-semibold">
              {isLogin ? "Sign in" : "Register"}
            </h1>

            <div className="flex flex-col gap-4">
              {!isLogin && (
                <Input
                  id="username"
                  label="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                />
              )}

              <Input
                id="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
              />

              <Input
                id="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </div>

            <Button label={isLogin ? "Sign in" : "Sign up"} />

            <p className="text-neutral-500 mt-12">
              {isLogin
                ? "First time using netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {isLogin ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
