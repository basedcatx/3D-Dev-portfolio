import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Target = ({props, position}) => {
    const {scene} = useGLTF("/models/target-model.gltf")
    const targetRef = useRef()

    useGSAP(() => {
        gsap.to(targetRef.current.position, 
            {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true
            })
    })


    return (
        <mesh {...props} position={position} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
            <primitive object={scene} scale={1.5} />
        </mesh>
    )
}

export default Target