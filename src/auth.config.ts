import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { LoginSchema } from "@/schemas/login-schema";
import { getUserByEmail } from "./utils/user";
 
export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }

          const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (isPasswordMatch) {
            return user;
          }
        }

        return null;
      }
    })
  ]
} satisfies NextAuthConfig;