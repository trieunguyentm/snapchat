import { IUserDocument } from "@/models/userModel"
import { Avatar, AvatarImage } from "../ui/avatar"

type UserCardProps = {
  user: IUserDocument
  handleSelectUser: (user: IUserDocument) => void
  selectedUser: IUserDocument | null
}

const UserCard = ({ user, handleSelectUser, selectedUser }: UserCardProps) => {
  const isSelected = selectedUser?._id === user._id

  return (
    <div
      onClick={() => handleSelectUser(user)}
      className={`flex items-center gap-2 border-b border-b-sigColorBgBorder p-1 hover:bg-sigBackgroundFeedHover cursor-pointer 
      ${isSelected ? "bg-sigBackgroundFeedHover" : ""}

			`}
    >
      <Avatar className="cursor-pointer hover:bg-sigBackgroundSecondaryHover">
        <AvatarImage
          src={
            user.avatar ||
            "https://questhowth.ie/wp-content/uploads/2018/04/user-placeholder.png"
          }
        />
      </Avatar>
      <span>{user.fullname}</span>
    </div>
  )
}
export default UserCard
