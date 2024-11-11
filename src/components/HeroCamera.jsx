import { easing } from "maath"
import { useEffect, useRef } from "react"
import { useFrame } from "react-three-fiber"



const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef()

    useFrame((state, change) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, change)

        if (!isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, -state.pointer.x  / 5, 0], 0.25, change)
        }
    })



    return (
        <group ref={groupRef} >
            {children}
        </group>
    )
}

export default HeroCamera