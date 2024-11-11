import { easing } from "maath"
import { useEffect, useRef, useState } from "react"
import { useFrame } from "react-three-fiber"

const ComputerCamera = ({children, index}) => {
    const groupRef = useRef()
    if (groupRef.current)
        groupRef.current.rotation.y = 0
    useFrame((state, change) => {
        easing.dampE(groupRef.current.rotation, [0, Math.PI, 0], 0.25, change)
    })

    return (
        <group ref={groupRef} scale={3.5} position={[0, -0.7, 0]} rotation={[0, 0, 0]} >
            {children}
        </group>
    )
}

export default ComputerCamera