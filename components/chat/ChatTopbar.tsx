import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "../ui/button"
import ChatUserInfo from "./ChatUserInfo"
import DeleteMessagesButton from "./DeleteMessagesButton"
import { getUserProfile } from "@/lib/data"

const ChatTopbar = async ({ params }: { params: { id: string } }) => {
  const userData = await getUserProfile(params.id)

  return (
    <div className="mt-4 flex justify-between items-center w-full">
      <div className="flex gap-2">
        <Button
          asChild
          className="bg-sigButtonSecondary hover:bg-sigButtonSecondaryHover w-11 h-11 rounded-full "
        >
          <Link href={"/chat"}>
            <ChevronLeft className="min-w-7" />
          </Link>
        </Button>
        <ChatUserInfo userData={userData} />
      </div>
      {/* right */}
      <DeleteMessagesButton />
    </div>
  )
}
export default ChatTopbar
