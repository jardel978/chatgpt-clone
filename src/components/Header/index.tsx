import { CiMenuKebab } from "react-icons/ci"
import { IoMdAdd } from "react-icons/io"

import { ButtonComponent } from "components/ButtonComponent"

type HeaderProps = {
  title: string
  newChatClick: () => void
  onSidebarClick: () => void
}

export const Header = (props: HeaderProps) => {
  return (
    <div
      className={`
      
    `}
    >
      <header
        className={`
        flex w-full items-center justify-between
        border-b border-b-gray-600 p-2 md:hidden  
        `}
      >
        <ButtonComponent onClick={props.onSidebarClick}>
          <CiMenuKebab size={24} />
        </ButtonComponent>
        <div className={`mx-2 truncate`}>{props.title}</div>
        <ButtonComponent
          onClick={props.newChatClick}
          icon={<IoMdAdd size={24} />}
        />
      </header>
    </div>
  )
}
