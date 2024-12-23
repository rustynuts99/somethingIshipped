import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Add any sign-in validation here
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  },
  // Forward to your error page
  pages: {
    error: '/auth/error',
    signIn: '/',  // Using home page for sign in
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata)
    },
    warn(code) {
      console.warn(code)
    },
    debug(code, metadata) {
      console.debug(code, metadata)
    }
  }
})

export { handler as GET, handler as POST }