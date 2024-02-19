import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "317177919758-9c48dg5rqnsnfbr36ud6ohm7vsutc99s.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret:process.env.SECRET
});

export { handler as GET, handler as POST };