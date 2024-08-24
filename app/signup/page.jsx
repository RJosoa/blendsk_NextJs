"use client";

import SignupForm from "@/components/forms/SignupForm";
import React, { useState } from "react";

export default function SignupPage() {

  return (
    <div className="absolute">
      <div className="flex bg-red-300 flex w-screen h-screen p-20">
        <h1 className="w-1/2">Sign up.</h1>
        <SignupForm/>
      </div>
    </div>
  );
}
