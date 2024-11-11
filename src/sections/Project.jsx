import { Suspense, useRef, useState } from "react";
import { myProjects } from "../constants"
import { Canvas, useFrame } from "react-three-fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { easing } from "maath";
import ComputerCamera from "../components/ComputerCamera";
import Dialog from "../components/Dialog";

const projectCount = myProjects.length;

const Project = ({dialogRef}) => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    
    const processUrl = (url) => {
        if (url.toLowerCase() != "false") {
            window.open(url, '_blank', 'noopener,noreferrer')
        } else {
            if (dialogRef?.current) {
                dialogRef.current.showModal()
            }
        }
    }

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1 
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }

    const currentProject = myProjects[selectedProjectIndex];

    return (
       <section className="c-space my-10" id="stuff">
            <p className="head-text">My Work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">

                <div className="flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full z-0 h-96 rounded-xl" />
                    </div>
                    <div className="p-3 backdrop:filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" /> 
                    </div>
                    <div className="flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((value, index) => (<div key={index} className="tech-logo">
                                <img src={value.path} alt={value.name} />
                            </div>))}
                        </div>
                        <a className="flex items-center gap-2 z-10 cursor-pointer text-white-600" onClick={() => processUrl(currentProject.href)}>
                            <p>Check live site</p>
                            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
                        </a>

                        <div className="w-full gap-5 justify-between flex-wrap items-center flex mt-7 z-1">
                            
                            <button className="flex items-center gap-2 cursor-pointer z-10" onClick={() => handleNavigation('previous')}>
                                <img src="/assets/left-arrow.png" alt="left-arrow" className="h-5 w-5"/>
                            </button>

                            <button className="flex items-center gap-2 cursor-pointer z-10" onClick={() => handleNavigation('next')}>
                                <img src="/assets/right-arrow.png" alt="left-arrow" className="h-5 w-5"/>
                            </button>

                          
                        </div>
                    </div>
                </div>

                <div className="border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={8} />
                        <directionalLight position={[10, 10, 10]} intensity={20}/>
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <ComputerCamera index={selectedProjectIndex}>
                                    <DemoComputer projectID={selectedProjectIndex}/>
                                </ComputerCamera>
                            </Suspense>
                        </Center>
                        <OrbitControls enableDamping enablePan enableZoom={false} maxPolarAngle={Math.PI / 2}/>
                    </Canvas>
                </div>
            </div>
       </section>
    )
}

export default Project