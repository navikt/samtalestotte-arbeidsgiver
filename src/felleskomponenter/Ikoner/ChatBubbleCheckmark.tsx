const ChatBubbleCheckmark = ({className, width="1em", height="1em"}: {className?: string, width?: string, height?: string}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M25.8333 0C28.6003 0 30.8593 2.17513 30.9937 4.9088L31 5.16667V19.375C31 22.142 28.8249 24.401 26.0912 24.5353L25.8333 24.5417H9.04167L0 31V5.16667C0 2.39966 2.17513 0.14069 4.9088 0.0063231L5.16667 0H25.8333ZM25.8333 2.58333L4.97387 2.59042C3.70401 2.68411 2.68942 3.69575 2.59114 4.96433L2.58333 5.16667V25.8333L7.75 21.9583H25.8333C27.1064 21.8644 28.2977 20.8415 28.4083 19.5678L28.4167 19.375L28.4096 4.97387C28.3159 3.70401 27.3043 2.68942 26.0357 2.59114L25.8333 2.58333ZM22.0184 6.45833L23.8256 8.30438L12.552 19.1529L7.75 14.6566L9.55208 12.8056L12.5467 15.5417L22.0184 6.45833Z" fill="#0067C5"/>
    </svg>
)

export default ChatBubbleCheckmark;