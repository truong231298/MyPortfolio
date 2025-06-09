// src/pages/Experience.jsx
import { motion } from 'framer-motion';
import backgroundImg from "../assets/backgroundImage.jpg";

const experiences = [
    {
        company: 'Arrowai Industries',
        role: 'Head Content Creator',
        period: '2022 - 2023',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi. Suspendisse mollis nisl ac aliquet pretium.'
    },
    {
        company: 'Borcelle',
        role: 'Junior Content Creator',
        period: '2021 - 2022',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi. Suspendisse mollis nisl ac aliquet pretium.'
    },
    {
        company: 'Borcelle',
        role: 'Junior Content Creator',
        period: '2020 - 2021',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi. Suspendisse mollis nisl ac aliquet pretium.'
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative min-h-screen flex flex-col text-light overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0">
                <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80 mix-blend-overlay" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 py-16">
                {/* Title + underline */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">Experience</h2>
                    <div className="w-24 h-1 bg-accent mt-2" />
                </motion.div>

                {/* Big year range in background */}
                <div className="text-[8rem] md:text-[5rem] font-extrabold text-primary/20 absolute top-10 right-6 pointer-events-none select-none leading-none">
                    2020 - 2023
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left column: list of titles */}
                    <div className="lg:w-1/2 space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="flex items-start"
                            >
                                <div className="text-accent mt-1 mr-4 text-2xl">»»</div>
                                <div>
                                    <h3 className="text-2xl font-semibold">{exp.company}</h3>
                                    <p className="text-gray-300 italic">{exp.role} | {exp.period}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right column: descriptions */}
                    <div className="lg:w-1/2 space-y-12 text-gray-400">
                        {experiences.map((exp, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                            >
                                {exp.description}
                            </motion.p>
                        ))}
                    </div>
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
