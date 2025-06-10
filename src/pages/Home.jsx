import { motion } from 'framer-motion';
import myPicture from "../assets/myPicture.jpg";
import backgroundImg from "../assets/17973908.jpg";

export default function Home(){
    return(
        <section id="home" className="relative h-screen flex items-center justify-center text-light overflow-hidden">
            {/* Background + Overlay */}
            <div className="absolute inset-0">
                <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80 mix-blend-overlay" />
            </div>

            {/* Nội dung chính */}
            <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6">
                {/* Text bên trái */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <p className="text-accent uppercase tracking-widest mb-2 text-blue-500">Hello !!!</p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black">
                        I’m <span className="text-accent">Truong Phan</span>
                    </h1>
                    <p className="uppercase text-sm text-accent tracking-wide mb-6 bg-blue-500 rounded-md p-1">
                        Frontend Developer & Game UI Enthusiast
                    </p>
                    <p className="text-gray-500 max-w-md mb-8">
                        I specialize in building responsive and interactive web interfaces with clean code and intuitive user experiences. I'm passionate about frontend technologies, game-inspired design, and continuous learning.
                    </p>
                    <a
                        href="/projects"
                        className="inline-block border border-accent text-accent uppercase tracking-wide px-6 py-3 rounded-full hover:bg-accent hover:text-primary transition"
                    >
                        View Portfolio
                    </a>
                </motion.div>

                {/* Ảnh profile bên phải */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
                >
                    <img
                        src={myPicture}
                        alt="Profile"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* Dòng chân trang ngang */}
            <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between px-6">
                <span className="h-px bg-accent flex-grow mr-4" />
                <span className="text-sm uppercase tracking-widest">Portfolio 2025</span>
                <span className="h-px bg-accent flex-grow ml-4" />
            </div>
        </section>
    );
}