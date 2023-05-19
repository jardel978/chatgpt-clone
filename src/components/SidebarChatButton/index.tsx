/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useState, MouseEvent } from "react"
import { BiEditAlt } from "react-icons/bi"
import { BsChatLeft } from "react-icons/bs"
import { GrFormClose } from "react-icons/gr"
import { IoMdCheckmark } from "react-icons/io"
import { MdDelete } from "react-icons/md"

import { Chat } from "@types"

type SidebarChatButtonProps = {
  chatItem: Chat
  active: boolean
  onClick: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, newTitle: string) => void
}

export const SidebarChatButton = (props: SidebarChatButtonProps) => {
  const [deleting, setDeleting] = useState(false)
  const [editing, setEditing] = useState(false)
  const [titleInput, setTitleInput] = useState(props.chatItem.title)

  function handleClickButton(event: MouseEvent<HTMLDivElement>): void {
    if (!deleting || !editing) {
      props.onClick(props.chatItem.id)
    }
  }

  function handleConfirmButton() {
    if (deleting) props.onDelete(props.chatItem.id)
    if (editing && titleInput.trim() !== "")
      props.onEdit(props.chatItem.id, titleInput.trim())

    setDeleting(false)
    setEditing(false)
  }

  function handleCancelButton() {
    setEditing(false)
    setDeleting(false)
  }
  return (
    <div
      className={`
      hover:bg-gray-599/12 flex cursor-pointer items-center rounded-md p-3
      text-sm 
      ${props.active ? "bg-gray-500/20" : "bg-transparent"}
    `}
      onClick={handleClickButton}
    >
      <div className={`mr-3`}>
        {!deleting && <BsChatLeft size={16} />}
        {deleting && <MdDelete size={16} />}
      </div>

      <div className={`flex-1 overflow-x-hidden text-sm`}>
        {editing && (
          <input
            className={`w-full border border-blue-500 bg-transparent text-sm outline-none`}
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        )}
        {!editing && (
          <div className={`truncate border  border-transparent`}>
            {!deleting && props.chatItem.title}
            {deleting && `Delete ${props.chatItem.title}`}
          </div>
        )}
      </div>

      {props.active && !deleting && !editing && (
        <div className={`flex`}>
          <div
            className={`mx-1 cursor-pointer transition-all ease-in-out hover:brightness-90`}
            onClick={() => setEditing(true)}
          >
            <BiEditAlt size={16} />
          </div>
          <div
            className={`mx-1 cursor-pointer transition-all ease-in-out hover:brightness-90`}
            onClick={() => setDeleting(true)}
          >
            <MdDelete size={16} />
          </div>
        </div>
      )}

      {(deleting || editing) && (
        <div className={`flex`}>
          <div
            className={`mx-1 cursor-pointer transition-all ease-in-out hover:brightness-90`}
            onClick={handleConfirmButton}
          >
            <IoMdCheckmark size={16} />
          </div>
          <div
            className={`mx-1 cursor-pointer transition-all ease-in-out hover:brightness-90`}
            onClick={handleCancelButton}
          >
            <GrFormClose size={16} />
          </div>
        </div>
      )}
    </div>
  )
}
