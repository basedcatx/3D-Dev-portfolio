import { SocialLinks } from "../constants"

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
           
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a className="w-1/2 h-1/2 cursor-pointer" href={SocialLinks.github}   target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.svg" alt="github"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a className="w-1/2 h-1/2 cursor-pointer" href={SocialLinks.instagram}  target="_blank" rel="noopener noreferrer">
                        <img src="/assets/instagram.svg" alt="instagram"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a className="w-1/2 h-1/2 cursor-pointer" href={SocialLinks.twitter}  target="_blank" rel="noopener noreferrer">
                        <img src="/assets/twitter.svg" alt="twitter"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a className="w-1/2 h-1/2 cursor-pointer" href={SocialLinks.telegram}  target="_blank" rel="noopener noreferrer">
                        <img src="/assets/telegram.svg" alt="telegram"/>
                    </a>
                </div>
            </div>  
            <div>
                <p className="text-white-500">&copy; {new Date().getFullYear()} BaseDTecH. All rights reserved</p>
                <p className="text-white-500">Special thanks to @JSMASTERY</p>
                <p className="text-white-500">Special thanks to Sir Phil Tabo</p>
            </div>
           
        </section>
    )
}

export default Footer