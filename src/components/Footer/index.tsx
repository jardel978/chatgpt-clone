import { ChatMessageImput } from "components/ChatArea/components/ChatMessageImput"

type FooterProps = {
  disabled: boolean
  // eslint-disable-next-line no-unused-vars
  onSendMessage: (message: string) => void
}

export const Footer = (props: FooterProps) => {
  return (
    <footer
      className={`
      border-tgray-600 w-full border-t p-2 
    `}
    >
      <div className={`m-auto max-w-4xl`}>
        <ChatMessageImput
          disabled={props.disabled}
          onSend={props.onSendMessage}
        />
      </div>
      <div className={`pt-3 text-center text-xs text-gray-300`}>
        Feito pela CyberCode. Permitida a cópia e uso para fins estudantís
      </div>
    </footer>
  )
}
