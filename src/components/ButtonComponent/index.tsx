import { ReactElement, ReactNode } from "react"
import { IconType } from "react-icons/lib/esm/iconBase"

type ButtonComponentProps = {
  label?: string
  children?: ReactNode
  icon?: ReactElement<IconType>
  onClick: () => void
}

export const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <div
      className={`
      flex cursor-pointer items-center rounded-md
      border border-white/20 p-3 text-sm transition-all duration-200 ease-in-out hover:brightness-50
    `}
      onClick={props.onClick}
    >
      {props.icon && props.icon}
      {props.label && <div className="flex-1 truncate">{props.label}</div>}
      {props.children && props.children}
    </div>
  )
}
