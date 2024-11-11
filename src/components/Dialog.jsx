import { FaCheck } from "react-icons/fa6"

const Dialog = ({message, open}) => {
    return (
        <dialog open={open}>
            <p>{message}</p>
            <form method="dialog">
                <button className="cursor-pointer">
                    <FaCheck />
                </button>
            </form>
        </dialog>
    )
}

export default Dialog