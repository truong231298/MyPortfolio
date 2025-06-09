// src/pages/Projects.jsx
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Arrowai Industries',
        year: '2023',
        image: '/assets/project1.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi. Suspendisse mollis nisl ac aliquet pretium.'
    },
    {
        title: 'Game UI Showcase',
        year: '2023',
        image: '/assets/project2.jpg',
        description:
            'Interactive game-like UI built with React and Canvas, featuring animations and responsive design.'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative min-h-screen flex flex-col text-light overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0">
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
                <div className="absolute top-32 right-6 pointer-events-none select-none">
                    <span className="transform -rotate-90 text-[4rem] md:text-[5rem] font-extrabold text-primary/20">2022 -</span>
                    <span className="transform -rotate-90 text-[4rem] md:text-[5rem] font-extrabold text-primary/20 mt-2">2023</span>
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
                            <img src={p.image} alt={p.title} className="w-full h-60 object-cover rounded-lg shadow-lg mb-4" />
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
