
const Button = ({name, isBeam = false, containerClass, children, onClicked}) => {
    return (
        <button onClick={onClicked} className={`btn ${containerClass}`}>
            {isBeam && (<span className="relative flex h-3 w-3">
                <span className="btn-ping" />
                <span className="btn-ping_dot" />
            </span>)}
            {children}
            {name}
        </button>
    )
}

export default Button