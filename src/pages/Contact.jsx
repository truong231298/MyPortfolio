import { motion } from 'framer-motion';
import { AiOutlinePhone, AiOutlineMail, AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import backgroundImg from "../assets/81310.jpg";

const contacts = [
    {
        icon: <AiOutlinePhone size={32} className="text-accent mb-2" />,
        title: 'Phone & Mobile',
        lines: [
            <a key="phone" href="tel:0354418585" className="hover:underline">0354418585</a>
        ]
    },
    {
        icon: <AiOutlineMail size={32} className="text-accent mb-2" />,
        title: 'Email',
        lines: [
            <a key="email" href="mailto:phanlethanhtruong@gmail.com" className="hover:underline">phanlethanhtruong@gmail.com</a>
        ]
    },
    {
        icon: <AiFillHome size={32} className="text-accent mb-2" />,
        title: 'Address',
        lines: ['C21/4 449 Le Van Viet Street, Tang Nhon Phu A District, Thu Duc, HCM City']
    },
    {
        icon: <AiOutlineHeart size={32} className="text-accent mb-2" />,
        title: 'Social Media',
        lines: [
            <a key="social" href="https://www.linkedin.com/in/phan-truong-6b9a83134/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn: @phantruong</a>,
            <a key="social" href="https://www.facebook.com/phanlethanhtruong/" target="_blank" rel="noopener noreferrer" className="hover:underline">fb: @truongphan</a>
        ]
    }
];

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-screen flex flex-col items-center text-light overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0">
                <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80 mix-blend-overlay" />
            </div>

            <div className="relative max-w-6xl w-full px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h2>
                    <p className="text-accent italic mt-2">Let&apos;s Work Together</p>
                </motion.div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center mb-16">
                    {contacts.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            {c.icon}
                            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                            {c.lines.map((line, idx) => (
                                <p key={idx} className="text-gray-400 text-sm">{line}</p>
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-4 space-y-4 max-w-2xl mx-auto"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Thank you! Message sent.');
                        e.target.reset();
                    }}
                >
                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-dark text-light placeholder-gray-500" required />
                    <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-dark text-light placeholder-gray-500" required />
                    <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded bg-dark text-light placeholder-gray-500" required />
                    <button type="submit" className="px-6 py-3 bg-accent text-dark font-semibold rounded hover:opacity-80 transition">
                        Send Message
                    </button>
                </motion.form>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mt-10">
                    <a href="https://facebook.com/truongphan" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={28} className="text-accent hover:text-light transition" />
                    </a>
                    <a href="https://linkedin.com/in/truongphan" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={28} className="text-accent hover:text-light transition" />
                    </a>
                    <a href="https://github.com/truong231298" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={28} className="text-accent hover:text-light transition" />
                    </a>
                </div>

                {/* Large Name Display */}
                <div className="text-[4rem] md:text-[5rem] font-extrabold text-primary/20 text-center leading-none mb-8 select-none">
                    TRUONG PHAN
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center px-6 text-light">
                <span className="h-px bg-accent w-full" />
                <span className="text-sm uppercase tracking-widest my-4">Portfolio 2025</span>
                <span className="h-px bg-accent w-full" />
            </div>
        </section>
    );
}
