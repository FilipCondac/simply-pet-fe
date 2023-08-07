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
          `${process.env.BASE_API_URL}/verifyUser` as string,
          {
            method: "POST",
            body: credentials ? JSON.stringify({ credentials }) : null,
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();

        if (res.status === 200) {
          console.log("user", user);
          return user;
        } else {
          console.log("Invalid credentials");
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
