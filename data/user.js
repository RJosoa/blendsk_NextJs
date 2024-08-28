import prisma from "@/lib/prisma";

export const getUserByEmail = async (email) => {
  try {
    const user = await prisma.user.finfUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    const user = await prisma.user.finfUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};
