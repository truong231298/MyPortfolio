// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import backgroundImg from "../assets/17973908.jpg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
    {
        title: "HTML/CSS Website – Course Project",
        period: "2023 - Học kỳ 1",
        tech: ["HTML", "CSS", "SCSS"],
        description: "Design a simple static website to introduce a service company. Include pages like About, Services, Contact. Focus on layout, responsiveness and basic aesthetics.",
        github: "https://github.com/truong231298/Eproject_01.git",
        demo:"https://danglinh1315.github.io/Eproject_01/homepage.html",
        image: project1
    },
    {
        title: "Laravel Website – Course Project",
        period: "2024 - Học kỳ 2",
        tech: ["Laravel", "Blade Template", "MySQL", "Bootstrap"],
        description: "Develop a web application selling clothes using Laravel. Including functions:\n" +
            "\n" +
            "User Login/Logout (Authentication)\n" +
            "\n" +
            "Student CRUD (Create, Read, Update, Delete)\n" +
            "\n" +
            "Interface using Blade + Bootstrap\n" +
            "\n" +
            "Database management with Eloquent ORM",
        github: "https://github.com/truong231298/project-group-5.git",
        demo: "https://surfsidemedia.github.io/Laravel-11-E-Commerce-Project/Website/",
        image: project2
    },
    {
        title: "Research on detecting and analyzing scam bots on YouTube Vietnam",
        period: "2025",
        tech: ["Google Colab", "Python", "Pytorch", "TensorFlow"],
        description: "Research and build a model to detect fake bot comments on YouTube Vietnam, which often appear in the form of \"Congratulations on winning\", \"Contact Telegram to receive gifts\", etc.",
        github: "https://github.com/truong231298/youtube-scam-bot-research.git",
        demo: "https://www.notion.so/K-ho-ch-nghi-n-c-u-ph-t-hi-n-v-ph-n-t-ch-comment-bot-l-a-o-tr-n-YouTube-Vi-t-Nam-1f361007b61c80ec92cfdb716cdd3ee8?p=1f461007b61c80e6a3f2c5f5f1fc6420&pm=s",
        image: project3
    },
    {
        title: 'TacticsAutoRoller App',
        period: '2025',
        tech: ["Python", "OpenCV", "pytesseract", "pyautogui", "Pillow"],
        description: 'TFT Auto Roll is a tool that automates the process of rolling heroes in the game Teamfight Tactics by using optical character recognition (OCR) technology and automatic keyboard control. This project helps TFT players save time and optimize the process of finding their favorite heroes in the game store.',
        github: 'https://github.com/truong231298/TFT_atuo_roll.git',
        demo: 'https://www.notion.so/TacticsAutoRoller-1f261007b61c81ecb8ffcfa7a302ba28',
        image: project4
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative min-h-screen flex flex-col text-light overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0">
                <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80 mix-blend-overlay" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 py-16">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">Selected Project</h2>
                    <div className="w-24 h-1 bg-accent mt-2" />
                </motion.div>

                {/* Decorative dots */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-2 mb-8 lg:mb-12">
                    {Array.from({ length: 12 }).map((_, idx) => (
                        <span key={idx} className="block w-2 h-2 bg-accent rounded-full" />
                    ))}
                </div>

                {/* Big year vertical */}
                <div className="absolute top-10 md:top-32 right-6 pointer-events-none select-none">
                    <span className="transform -rotate-90 text-[2rem] md:text-[5rem] font-extrabold text-primary/20">2022 -</span>
                    <span className="transform -rotate-90 text-[2rem] md:text-[5rem] font-extrabold text-primary/20 mt-2">2023</span>
                </div>

                {/* Grid projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.3 }}
                            className="flex flex-col"
                        >
                            <a href={p.demo}><img src={p.image} alt={p.title} className="w-full h-60 object-cover rounded-lg shadow-lg mb-4" /></a>
                            <h3 className="text-2xl font-semibold text-light">
                                {p.title} | {p.year}
                            </h3>
                            <p className="text-gray-400 mt-2 max-w-xl">{p.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer line */}
            <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between px-6">
                <span className="h-px bg-accent flex-grow mr-4" />
                <span className="text-sm uppercase tracking-widest">Portfolio 2025</span>
                <span className="h-px bg-accent flex-grow ml-4" />
            </div>
        </section>
    );
}
