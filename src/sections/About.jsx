import Globe from "react-globe.gl"
import Button from "../components/Button"
import CanvasLoader from "../components/CanvasLoader"
import { Suspense, useState } from "react"
import { TechStack } from "../constants"

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText("faithsenz12@gmail.com")
        setHasCopied(hasCopied => true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    

    return (
      <section className="c-space my-10" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-fit w-full">

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full h-[210px] object-contain" />
                    <div>
                        <p className="grid-headtext">Hi, i'm BaseDCaTx</p>
                        <p className="grid-subtext">With more than one year of experience, I have honed my general programming skills, with a passion in animated graphics!</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/android.svg" alt="grid-2" className="w-full h-[100px] object-contain"/>
                    <p className="justify-center my-auto">
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I don't really have any speciality, more of a jack of all, because why not?. But i strived to put in my best in all, and it always results to a mastery!</p>
                    </p>
                </div>
            </div>


            {
                TechStack.map((item, id) => (
                    <div className="xl:col-span-1 xl:row-span-3 flex justify-center items-center" key={id}>
                        <div className="grid-container">
                            <img src={`/assets/techres/${id}.svg`} id={id} alt="0" className="w-full h-[100px] object-contain"/>
                            {/* <div className="w-full h-fit flex justify-center items-center">
                           
                            </div> */}
                            <p className="grid-headtext">{item.title}</p>
                            <p className="grid-subtext text-pretty">{item.desc}</p>
                        </div>
                    </div>
                ))
            }


<div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <Suspense fallback={<CanvasLoader />}>
                        <div className="rounded-3xl w-full flex justify-center items-center">
                            <Globe 
                                width={326}
                                height={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                globeImageUrl="https://unpkg.com/three-globe@2.34.4/example/img/earth-day.jpg"
                                labelsData={[{
                                    lng: 12.32,
                                    lat: 7.37, 
                                    text: "I am located here!",
                                    size: 20,
                                    color: 'white'
                                }]}
                                bumpImageUrl="https://unpkg.com/three-globe@2.34.4/example/img/earth-topology.png"/>
                        </div> 
                        <p className="grid-headtext">I work remotely across most timezones</p>
                        <p className="grid-subtext">I am based in Cameroon, remote work available!</p>
                        <a href="#contact">
                            <Button isBeam name={"Contact me"} containerClass="w-full mt-10"/>
                        </a>
                    </Suspense>
                </div>
            </div>


            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">My passion for coding</p>
                        <p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my carrier choice, it is my passion!</p>
                    </div>
                </div>
            </div>

        
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[150px] sm:h-[276px] h-fit object-contain sm:object-top"/>
                    <p className="lg:text-3xl md:text-xl font-medium text-gray_gradient text-white items-center justify-center px-3 text-center">My contact email</p>
                    <div className="space-y-2">
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">{hasCopied ? 'Copied to clipboard' : 'Click to copy'}</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

       
      </section>
    )
}

export default About