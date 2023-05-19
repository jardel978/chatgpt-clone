import { BsRobot } from "react-icons/bs"
import { ImUser } from "react-icons/im"

import { ChatMessage } from "@types"

type ChatMessageItemProps = {
  item: ChatMessage
}

export const ChatMessageItem = (props: ChatMessageItemProps) => {
  return (
    <div
      className={`
      py-5
      ${props.item.author === "ai" && "bg-gray-600/50"}
    `}
    >
      <div className={`m-auto flex max-w-4xl`}>
        <div
          className={`mx-4 flex h-10 w-10 items-center justify-center rounded
          ${props.item.author === "ai" ? "bg-green-900" : "bg-blue-900"}
          md:ml-0`}
        >
          {props.item.author === "me" ? (
            <ImUser size={24} />
          ) : (
            <BsRobot size={24} />
          )}
        </div>
        <div className={`flex-1 whitespace-pre-wrap text-base`}>
          {props.item?.body}
        </div>
      </div>
    </div>
  )
}
