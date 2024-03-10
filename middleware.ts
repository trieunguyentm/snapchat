import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

export default NextAuth(authConfig).auth

// thêm một quy tắc (cấu hình) bổ sung nhỏ nói rằng xác thực sẽ áp dụng cho hầu hết các đường dẫn, nhưng không áp dụng cho các đường dẫn bao gồm "api," "_next/static," "_next/image" hoặc có phần mở rộng tệp là " .png."
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
