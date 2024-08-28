"use server";

import prisma from "@/lib/prisma";

import bcryptjs from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const Register = async (values) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, username, email, password } = validateFields.data;

  const hashedPassword = await bcryptjs.hash(
    password + process.env.SECRET_PEPPER,
    12
  );
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: "Email is already in use!" };
  }

  await prisma.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
    },
  });

  //TODO: sent verification yoken email

  return { success: "User created!" };
};
