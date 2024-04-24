import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const user = {
          id: "1",
          email: "marina@gmail.com",
          password: "123456",
          role: "admin",
        };

        const isValidEmail = user.email === credentials?.email;
        const isValidPassword = user.password === credentials?.password;

        if (!isValidEmail || !isValidPassword) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const customUser = user as { id: string; email: string; role: string };

      if (user) {
        return {
          ...token,
          id: customUser.id,
          email: customUser.email,
          role: customUser.role,
        };
      }

      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          email: token.email,
          role: token.role,
        },
      };
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
