import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await emailjs.send(
                'service_tqcy0jc', 
                'template_f4bj7at', 
                {
                    from_name: form.name,
                    to_name: "BaseDCaTx",
                    from_email: form.email,
                    to_email:"basedcatx@gmail.com",
                    message: form.message
                },
                'io568rzt5PZalm_92'
            )
            setLoading(false)
            alert("Your message has been sent successfully!")
            setForm({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            alert("Message sending was unsucessfull!")
            setLoading(false)
        }
   
    }

    return (
        <section className="c-space my-15 mb-10" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <div className="contact-container grid-container">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you're looking to build something new, improve existing projects, or bring a unique project to life. I'am here to help</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full name</span>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required
                            className="field-input" placeholder="John Doe"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required
                            className="field-input" placeholder="example@gmail.com"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea name="message" value={form.message} onChange={handleChange} required
                            className="field-input" placeholder="Hi, i am interested in..."
                            rows={5}/>
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send message"}
                            <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn-arrow w-3" />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )   
}

export default Contact
