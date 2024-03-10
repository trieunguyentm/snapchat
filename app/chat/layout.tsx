import ChatSideBar from "@/components/chat/ChatSideBar"

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex h-screen">
      <ChatSideBar />
      {children}
    </main>
  )
}
export default Layout
