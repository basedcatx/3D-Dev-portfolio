import { Canvas } from "react-three-fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense, useEffect, useRef } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import { PerspectiveCamera, Ring } from "@react-three/drei"
import Target from "../components/Target"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube"
import Rings from "../components/Ring"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"
import SplitType from "split-type"
import gsap from "gsap"

const Hero = () => {
//     const controls = useControls('HackerRoom', 
// { scale: {
//         value: 0.03,
//         min: 0.01,
//         max: 0.05
//     }, rotationX: {
//         value: 0,
//         min: -Math.PI,
//         max: Math.PI
//     }, rotationY: {
//         value: Math.PI,
//         min: -Math.PI,
//         max: Math.PI
//     }, rotationZ: {
//         value: 0,
//         min: -Math.PI,
//         max: Math.PI
//     }, positionX: {
//         value: 0,
//         min: -10,
//         max: 10
//     }, positionY: {
//         value: 0,
//         min: -10,
//         max: 10
//     }, positionZ: {
//         value: 0,
//         min: -10,
//         max: 10
//     }
// })

const isMobile = useMediaQuery({maxWidth: 768})
const isSmall = useMediaQuery({maxWidth: 440})
const isTablet = useMediaQuery({maxWidth: 1024})

const sizes = calculateSizes(isSmall, isMobile, isTablet)
    const textNameRef = useRef()

    useEffect(() => {
        const text = new SplitType(textNameRef.current, {
            types : 'words,chars',
            tagName:'span'
        })

        let characters = text.chars

        characters.map((char) => {
            gsap.to(char, {
                duration: 1.2,
                ease: "power1.out",
                stagger: 0.05,
                delay: 0.02,
                y: -5
            }, 0.25)  
        })

        return () => text.revert()
    })


    return (
       <section className="min-h-screen w-full h-full flex-col relative" id="home" >
            <div className="w-full flex-col sm:mt-36 h-full mt-20 gap-3 p-0 m-0">
                <p ref={textNameRef} className="sm:text-4xl p-0 m-0 text-xl font-medium text-white text-center font-generalsans" style={{clipPath : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                    Hi, I am Captain BaseDCaTx <span className="waving-hand">XD</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Just making stuff for fun!
                </p>
                <div className="w-full h-screen inset-0">
                    <Canvas className="w-full h-screen mb-20">
                        <Suspense fallback={<CanvasLoader />}>

                            <HeroCamera>
                                <HackerRoom position={sizes.deskPosition}
                                    scale={sizes.deskScale}
                                    rotation={[0, Math.PI, 0.00]}   />
                            </HeroCamera>

                                <group>
                                    <Target position={sizes.targetPosition} />
                                    <ReactLogo position={sizes.reactLogoPosition} />
                                    <Cube position={sizes.cubePosition}/>
                                    <Rings position={sizes.ringPosition} />
                                </group>

                            <ambientLight intensity={1} />

                            <PerspectiveCamera makeDefault={true} position={[0, 0, 20]}/>
                      
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                        
                            </Suspense>
                    </Canvas> 
                </div>

                <div className="mt-0 w-full z-10 c-space">
                    <a href="#about" className="w-full c-space">
                        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                    </a>
                </div>

            </div>

       </section>
    )
}

export default Hero