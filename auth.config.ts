import { NextAuthConfig, Session } from "next-auth"
import { NextRequest } from "next/server"

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async authorized({
      auth,
      request,
    }: {
      auth: Session | null
      request: NextRequest
    }) {
      const user = auth?.user
      const isVisitingChatPage = request.nextUrl.pathname.startsWith("/chat")
      const isVisitingAuthPage =
        request.nextUrl.pathname.startsWith("/login") ||
        request.nextUrl.pathname.startsWith("/signup")
      if (!user && isVisitingChatPage) {
        console.log("Vui lòng đăng nhập trước đó")
        return false
      }
      if (user && isVisitingAuthPage) {
        console.log("Chuyển người dùng về lại /chat")
        return Response.redirect(new URL("/chat", request.nextUrl))
      }

      return true
    },
  },
}
