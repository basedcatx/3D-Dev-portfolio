import { useRef } from "react"
import { FaClosedCaptioning, FaX } from "react-icons/fa6"
import { FcCancel } from "react-icons/fc"
import { TbFlagCancel } from "react-icons/tb"
import Button from "./Button"

const NotFoundDialog = ({dialogref}) => {

    return (
        <dialog ref={dialogref} className="relative mt-8 top-10 xl:h-[200px] h-fit rounded-2xl">
            <div className="grid-container relative h-full p-10 w-fit justify-between gap-5 items-center flex-col">
                <div>
                    <p className="text-white font-generalsans font-medium" >This project is currently under-development and isn't live yet!</p>
                </div> 
                <div className="w-full c-space"> 
                    <Button name="Understood" onClicked={() => dialogref.current.close()} containerClass="sm:w-fit w-full sm:min-w-96">
                        <FaX color="red"/>
                    </Button>
                </div>
            </div>
        </dialog>
    )
}

export default NotFoundDialog