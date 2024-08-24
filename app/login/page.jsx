"use client";

import LoginForm from "@/components/forms/LoginForm";
import React, { useState } from "react";

export default function LoginPage() {
  return (
    <div className="absolute">
      <div className="flex bg-red-300 flex w-screen h-screen p-20">
        <h1 className="w-1/2">Login.</h1>
        <LoginForm />
      </div>
    </div>
  );
}
