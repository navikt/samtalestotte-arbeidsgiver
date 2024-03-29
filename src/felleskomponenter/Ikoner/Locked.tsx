const Locked = ({className, width="1em", height="1em"}: {className?: string, width?: string, height?: string}) => (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0a5 5 0 015 5v3h1a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2h1V5a5 5 0 015-5zm6 10H6v12h12V10zm-6 3a2 2 0 011.001 3.732L13 20h-2v-3.268A2 2 0 0112 13zm0-11a3 3 0 00-2.995 2.824L9 5v3h6V5a3 3 0 00-2.824-2.995L12 2z"
            fill="currentColor"
        >
        </path>
    </svg>
)

export default Locked