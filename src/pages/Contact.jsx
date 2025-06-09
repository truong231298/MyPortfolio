// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { AiOutlinePhone, AiOutlineMail, AiFillHome, AiOutlineHeart } from 'react-icons/ai';

const contacts = [
    {
        icon: <AiOutlinePhone size={32} className="text-accent mb-2" />,
        title: 'Phone & Mobile',
        lines: ['0354418585', '0354418585']
    },
    {
        icon: <AiOutlineMail size={32} className="text-accent mb-2" />,
        title: 'Email & Website',
        lines: ['phanlethanhtruong@gmail.com', "xxx"]
    },
    {
        icon: <AiFillHome size={32} className="text-accent mb-2" />,
        title: 'Address',
        lines: ['C21/4 449 Le Van Viet Street, Tang Nhon Phu A District, Thu Duc, HCM City']
    },
    {
        icon: <AiOutlineHeart size={32} className="text-accent mb-2" />,
        title: 'Social Media',
        lines: ['@truongphan']
    }
];

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-screen flex flex-col items-center text-light overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0">
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

                {/* Large outlined name */}
                <div className="text-[4rem] md:text-[5rem] font-extrabold text-primary/20 text-center leading-none mb-8 select-none">
                    TRUONG PHAN
                </div>
            </div>

            {/* Footer lines */}
            <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center px-6 text-light">
                <span className="h-px bg-accent w-full" />
                <span className="text-sm uppercase tracking-widest my-4">Portfolio 2025</span>
                <span className="h-px bg-accent w-full" />
            </div>
        </section>
    );
}
