import { ReactNode } from "react"
import { GrFormClose } from "react-icons/gr"
import { IoMdAdd } from "react-icons/io"
import { MdDelete } from "react-icons/md"

import { ButtonComponent } from "components/ButtonComponent"

type SidebarProps = {
  children: ReactNode
  open: boolean
  onClose: () => void
  onClear: () => void
  onNewChat: () => void
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <section
      className={`
      fixed bottom-0 left-0 top-0 text-white
      ${props.open ? "w-screen bg-gray-600/75" : "w-0"}
      md:static md:w-64 
    `}
    >
      <div
        className={`
        flex h-screen ${props.open ? "ml-0" : "-ml-96"} 
        transition-all duration-200 
        md:ml-0
      `}
      >
        <div
          className={`
          flex w-64 flex-col bg-gray-900 p-2
        `}
        >
          <ButtonComponent
            label="Nova conversa"
            onClick={props.onNewChat}
            icon={<IoMdAdd size={16} className="mr-3 text-white" />}
          />
          <nav
            className={`
            mt-1 flex-1 overflow-y-auto pt-2
          `}
          >
            {/* content */}
            {props.children}
          </nav>
          <div
            className={`
            border-t border-gray-700 pt-2
          `}
          >
            <ButtonComponent
              label="Limpar todas as conversas"
              onClick={props.onClear}
              icon={<MdDelete size={16} />}
            />
          </div>
        </div>
        <div
          className={`
          flex h-10 w-10 cursor-pointer 
          items-center justify-center
          md:hidden
        `}
          onClick={props.onClose}
        >
          <GrFormClose size="24px" />
        </div>
      </div>
    </section>
  )
}
