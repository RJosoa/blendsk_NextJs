"use client";

import React, { useState, useTransition } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { Register } from "@/actions/Register";

export default function RegisterForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { name: "", username: "", email: "", password: "" },
  });

  const onSubmit = (values) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      Register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4 w-full">
        <div className="flex flex-col w-1/2">
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            type="text"
            name="name"
            disabled={isPending}
          />
          {errors.name && <span className="text-red-500" >{errors.name.message}</span>}
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="username">Username</label>
          <input
            {...register("username")}
            type="text"
            name="username"
            disabled={isPending}
          />
          {errors.username && <span className="text-red-500" >{errors.username.message}</span>}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="email"
          name="email"
          disabled={isPending}
        />
        {errors.email && <span className="text-red-500" >{errors.email.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="password"
          name="password"
          placeholder="6+ characters"
          disabled={isPending}
        />
        {errors.password && <span className="text-red-500" >{errors.password.message}</span>}
      </div>

      <FormError message={error} />
      <FormSuccess message={success} />

      <button
        className="gap-4 p-4 rounded-full border bg-slate-950 text-slate-200 font-medium"
        type="submit"
        disabled={isPending}
      >
        Sign up
      </button>
    </form>
  );
}
