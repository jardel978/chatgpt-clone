/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
"use client"
// por padrão o next13 é server-side, esse 'use client' no inicio indica que ele deve ser client-side
import { useCallback, useEffect, useState } from "react"

import { ChatArea } from "../components/ChatArea/ChatArea"
import { Footer, Header, Sidebar, SidebarChatButton } from "components"

import { Chat } from "@types"
import { v4 as uuidV4 } from "uuid"

export default function Home() {
  const [sidebarOpenend, setSidebarOpenend] = useState(false)
  const [chatList, setChatList] = useState<Chat[]>([])
  const [chatActive, setChatActive] = useState<Chat>()
  const [chatActiveId, setChatActiveId] = useState("")
  const [aiLoading, setAiLoading] = useState(false)

  useEffect(() => {
    setChatActive(chatList.find((item) => item.id === chatActiveId))
  }, [chatActiveId, chatList])

  const getAiResponse = useCallback(() => {
    setTimeout(() => {
      const chatListClone = [...chatList]
      const chatIndex = chatListClone.findIndex(
        (item) => item.id === chatActiveId
      )
      if (chatIndex > -1) {
        chatListClone[chatIndex].messages.push({
          id: uuidV4(),
          author: "ai",
          body: "Aqui vai a resposta da ai :)"
        })
      }
      setChatList(chatListClone)
      setAiLoading(false)
    }, 2000)
  }, [chatActiveId, chatList])

  useEffect(() => {
    if (aiLoading) getAiResponse()
  }, [aiLoading, getAiResponse])

  const openSideBar = () => setSidebarOpenend(true)
  const closeSidebar = () => setSidebarOpenend(false)

  function handleNewChat(): void {
    if (aiLoading) return

    setChatActiveId("")
    closeSidebar()
  }

  function handleClearChats(): void {
    if (aiLoading) return

    setChatActiveId("")
    setChatList([])
  }

  function handleSendMessage(message: string): void {
    if (!chatActiveId) {
      const newChatId = uuidV4()
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: uuidV4(), author: "me", body: message }]
        },
        ...chatList
      ])
      setChatActiveId(newChatId)
    } else {
      const chatListClone = [...chatList]
      const chatIndex = chatListClone.findIndex(
        (item) => item.id === chatActiveId
      )
      chatListClone[chatIndex].messages.push({
        id: uuidV4(),
        author: "me",
        body: message
      })
      setChatList(chatListClone)
    }
    setAiLoading(true)
  }

  function handleSelectChat(id: string) {
    if (aiLoading) return

    const item = chatList.find((item) => item.id === id)
    if (item) setChatActiveId(item.id)
    closeSidebar()
  }

  function handleDeleteChat(id: string) {
    const chatListClone = [...chatList]
    const chatIndex = chatListClone.findIndex((item) => item.id === id)
    chatListClone.splice(chatIndex, 1)
    setChatList(chatListClone)
    setChatActiveId("")
  }

  function handleEditChat(id: string, newTitle: string) {
    if (newTitle) {
      const chatListClone = [...chatList]
      const chatIndex = chatListClone.findIndex((item) => item.id === id)
      chatListClone[chatIndex].title = newTitle
      setChatList(chatListClone)
    }
  }

  return (
    <main
      className={`
      flex min-h-screen bg-gpt-gray
    `}
    >
      <Sidebar
        open={sidebarOpenend}
        onClose={closeSidebar}
        onClear={handleClearChats}
        onNewChat={handleNewChat}
      >
        {chatList.map((item) => {
          return (
            <SidebarChatButton
              key={item.id}
              chatItem={item}
              active={item.id === chatActiveId}
              onClick={handleSelectChat}
              onDelete={handleDeleteChat}
              onEdit={handleEditChat}
            />
          )
        })}
      </Sidebar>
      <section
        className={`
        flex w-full flex-col
      `}
      >
        <Header
          title={chatActive ? chatActive.title : "Nova Conversa"}
          onSidebarClick={openSideBar}
          newChatClick={handleNewChat}
        />
        <ChatArea chatActive={chatActive} loading={aiLoading} />
        <Footer disabled={aiLoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  )
}
