import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/verifyUser`,
          {
            method: "POST",
            body: JSON.stringify({ credentials }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();
        if (res.status === 200) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // pages: {
  //   // newUser: "/auth/newUser",
  //   signIn: "/signin",
  // },
};
