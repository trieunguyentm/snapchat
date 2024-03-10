import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToMongoDB } from "./lib/db"
import User from "./models/userModel"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session }) {
      try {
        await connectToMongoDB()
        if (session.user) {
          const user = await User.findOne({ email: session.user.email })
          if (user) {
            session.user._id = user._id
            return session
          } else {
            throw new Error("No user found")
          }
        } else {
          throw new Error("No user found")
        }
      } catch (error) {
        console.log(error)
        throw new Error("Invalid session")
      }
    },
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("user:", user)
      // console.log("account:", account)
      // console.log("profile:", profile)
      // console.log("email:", email)
      // console.log("credentials:", credentials)
      if (account?.provider === "github") {
        await connectToMongoDB()

        try {
          const user = await User.findOne({ email: profile?.email })
          // Signup if user not found
          // console.log(profile)
          if (!user) {
            const newUser = await User.create({
              username: profile?.login,
              email: profile?.email,
              fullname: profile?.name || profile?.login,
              avatar: profile?.avatar_url,
            })
            await newUser.save()
          }
          return true
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return false
    },
  },
})
