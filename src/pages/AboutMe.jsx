// src/pages/About.jsx
import { motion } from 'framer-motion';
import aboutPhoto from '../assets/myPicture.jpg';
import backgroundImg from "../assets/backgroundImage.jpg"; // đổi thành file ảnh của bạn

export default function AboutMe() {
    return (
        <section id="about" className="relative min-h-screen flex items-center overflow-hidden text-light">
            {/* Background Overlay */}
            <div className="absolute inset-0">
                <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80 mix-blend-overlay" />
            </div>

            <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 py-16">
                {/* Ảnh bên trái */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 w-full flex justify-center mb-10 lg:mb-0"
                >
                    <img
                        src={aboutPhoto}
                        alt="About Me"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-2xl"
                    />
                </motion.div>

                {/* Nội dung bên phải */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 w-full lg:pl-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 text-primary">My Biography</h2>
                    <div className="w-24 h-1 bg-accent mb-6" />

                    <p className="text-gray-200 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi.
                        Suspendisse mollis nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit suscipit, lorem ipsum tempus tortor,
                        suscipit vestibulum velit quam nec nibh.
                    </p>
                    <p className="text-gray-200 mb-8">
                        Aliquam luctus faucibus augue, in porttitor eros imperdiet sit amet. Vivamus vel tortor at risus vestibulum elementum
                        accumsan id ante.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">Skill & Interest</h3>
                    <div className="flex flex-wrap gap-3">
                        {['Social Media', 'Design', 'Reading', 'Data Analysis', 'Photography'].map((tag, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 border border-accent rounded-full text-sm uppercase tracking-wide"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Chân trang ngang giống Home */}
            <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between px-6 text-light">
                <span className="h-px bg-accent flex-grow mr-4" />
                <span className="text-sm uppercase tracking-widest">Portfolio 2025</span>
                <span className="h-px bg-accent flex-grow ml-4" />
            </div>
        </section>
    );
}
