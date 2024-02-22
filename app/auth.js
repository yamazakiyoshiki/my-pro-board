import { User } from "./lib/models";
import { connectToDB } from "./lib/utils";
import { authConfig } from "./authconfig";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({username: credentials.username});

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");
    return user;
  } catch (err) {
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.username = user.username;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.username = token.username;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
});