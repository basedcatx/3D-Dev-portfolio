import { Canvas } from "@react-three/fiber"
import { workExperiences } from "../constants"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useState } from "react"
import CanvasLoader from "../components/CanvasLoader"
import Developer from "../components/Developer"
import { EffectComposer } from "three/examples/jsm/Addons.js"
import { Bloom, SSAO } from "@react-three/postprocessing"

const Experience = () => {
    const [animationName, setAninmationName] = useState()
    return (
        <section className="c-space mw-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">My Experience</h3>
                <div className="work-container"> 
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={0.5}/>
                            <spotLight position={[0, -5, 10]} angle={0.1} penumbra={1} intensity={3} castShadow/>
                            <directionalLight position={[10, 10, 10]} intensity={2} castShadow/>
                            <PerspectiveCamera makeDefault={true} position={[10, 0, 0]}/>
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer scale={4.5} position={[0, -4.2, 0]}/>
                            </Suspense>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} enableDamping/>
                        </Canvas>
            
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.">
                            {
                                workExperiences.map(({name, pos, duration, title, animation, id, icon}) => (
                                    <div key={id} className="work-content_container group" 
                                        onClick={() => setAninmationName(animation.toLowerCase())}
                                        onPointerOver={() => setAninmationName(animation.toLowerCase())}
                                        onPointerOut={() => setAninmationName('idle')}
                                        >

                                        <div className="flex flex-col h-full justify-start items-center py-2">
                                            <div className="work-content_logo">
                                                <img src={icon} alt="logo" className="w-full h-full"/>
                                            </div>
                                            <div className="work-content_bar"/>

                                        </div>

                                        <div className="sm:p-5 px-2.5 py-5">
                                            <p className="font-bold text-white-800">{name}</p>
                                            <p className="text-sm mb-5">{pos} -- {duration}</p>
                                            <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                                        </div>
                                        
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
          
        </section>
    )
}

export default Experience