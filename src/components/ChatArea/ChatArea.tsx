import { ChatMessageItem, ChatMessageLoading, ChatPlaceholder } from "./index"

import { Chat } from "@types"

type ChatAreaProps = {
  chatActive: Chat | undefined
  loading: boolean
}

export const ChatArea = (props: ChatAreaProps) => {
  return (
    <section
      className={`
      h-0 flex-auto overflow-y-scroll
      `}
    >
      {!props.chatActive ? (
        <ChatPlaceholder />
      ) : (
        props.chatActive.messages?.map((item) => {
          return <ChatMessageItem key={item.id} item={item} />
        })
      )}
      {props.loading && <ChatMessageLoading />}
    </section>
  )
}
