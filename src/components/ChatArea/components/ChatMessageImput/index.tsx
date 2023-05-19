/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { useState, KeyboardEvent, useRef, useEffect } from "react"
import { FiSend } from "react-icons/fi"

type ChatMessageImputProps = {
  disabled: boolean
  // eslint-disable-next-line no-unused-vars
  onSend: (message: string) => void
}

export const ChatMessageImput = (props: ChatMessageImputProps) => {
  const [text, setText] = useState("")
  const textEl = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    // para ajustar o tamanho do textarea ao tamanho do texto dentro dele
    if (textEl.current) {
      textEl.current.style.height = "0px"
      const scrollHeight = textEl.current.scrollHeight
      textEl.current.style.height = `${scrollHeight}px`
    }
  }, [text, textEl])

  function handleSendMessage(): void {
    if (!props.disabled && text.trim() !== "") {
      props.onSend(text)
      setText("")
    }
  }

  function handleTextKeyUp(event: KeyboardEvent<HTMLTextAreaElement>): void {
    if (event.code.toLocaleLowerCase() === "enter" && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div
      className={`
       bg-gpt-lightgray flex rounded-md border border-gray-800/50 p-2
       ${props.disabled && "opacity-50"}
      `}
    >
      <textarea
        ref={textEl}
        value={text}
        className={`
        h-6 max-h-48 flex-1 resize-none overflow-y-auto border-0 bg-transparent outline-none
      `}
        placeholder="Digite uma mensagem"
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleTextKeyUp}
        disabled={props.disabled}
      ></textarea>
      <div
        className={`
        cursor-pointer self-end rounded p-1
        ${text.length ? "opacity-100 hover:bg-black/20" : "opacity-20"}
        `}
        onClick={handleSendMessage}
      >
        <FiSend size={14} />
      </div>
    </div>
  )
}
