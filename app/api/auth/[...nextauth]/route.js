import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],

  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.userName = profile.preferred_username;
      }
      return token;
    },
    async session({ session, token }) {
      session.userName = token.userName;
      return session;
    }
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

