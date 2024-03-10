import { auth } from "@/auth"
import { getUserForSideBar } from "@/lib/data"
import React from "react"
import Chat from "./Chat"
import { resolve } from "path"

const Chats = async () => {
  const session = await auth()
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  // console.log(session)
  const chats = session?.user ? await getUserForSideBar(session.user._id) : []
  // console.log(`chats for: ${session?.user.name}`, chats)
  return (
    <nav className="flex-1 overflow-y-auto">
      <ul>
        {chats.map((chat) => (
          <Chat key={chat._id} chat={chat} />
        ))}
      </ul>
    </nav>
  )
}

export default Chats
