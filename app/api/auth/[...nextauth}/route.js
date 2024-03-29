import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/provider/google'

import { connectToDB } from '@utils/database'

const hanlder = NextAuth({
  providers: [
    GoogleProvider({
      clientId: 'process.env.GOOGLE_ID',
      clientSecret: 'process.env.GOOGLE_CLIENT_SECRET',
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDB()

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  },
})

export { handler as GET, handler as POST }
