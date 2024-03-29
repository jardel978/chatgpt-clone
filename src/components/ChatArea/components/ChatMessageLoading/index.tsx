/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/no-custom-classname */
import { BsRobot } from "react-icons/bs"

export const ChatMessageLoading = () => {
  return (
    <div
      className={`
      bg-gray-500/50 py-5
      `}
    >
      <div
        className={`
        m-auto flex max-w-4xl items-center
       `}
      >
        <div
          className={`
          mx-4 flex h-10 w-10 items-center justify-center rounded bg-green-900
          md:ml-0
        `}
        >
          <BsRobot size={24} />
        </div>
        <div
          className={`
          flex-1 whitespace-pre-wrap text-base
        `}
        >
          <div
            className={`
            h-4 w-2 animate-blink bg-slate-300
        `}
          ></div>
        </div>
      </div>
    </div>
  )
}
