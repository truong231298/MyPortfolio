// src/pages/Experience.jsx
import { motion } from 'framer-motion';
import backgroundImg from "../assets/17973908.jpg";

const experiences = [
    {
        company: 'GREEN KONOHA',
        role: 'landscaper',
        period: '2020 - 2021',
        description:
        'Carry out the work of managing and maintaining materials (lawn mowers, pruning shears, chainsaws, etc.) Participate in the implementation of the company landscape construction projects (check drawings, make plans for planning, designing, renovating and managing landscapes). Design landscape items and miniature landscapes in areas within the company.',
        link: ''
    },
    {
        company: 'WINCOMMERCE GENERAL TRADING SERVICES JOINT STOCK COMPANY',
        role: 'Salesperson Level 1',
        period: '2022 - 2023',
        description:
            'Maintain image, ensure store hygiene and customer service standards\n' +
            'Perform delivery and receipt of goods according to procedures\n' +
            'Display, arrange, preserve goods, sell, pay, advise, support customers\n' +
            'Filter/destroy poor quality goods, check expiry date...\n' +
            'Use and preserve assets, manage goods\n' +
            'Periodically or suddenly inventory goods/assets according to regulations.\n' +
            'Perform other tasks as required by management',
        link: ''
    },
    {
        company: 'Leetcode',
        role: 'Participant',
        period: '2023 - Now',
        description: 'Practice algorithmic skills and logical thinking through more than 850 exercises from easy to advanced. Focus on topics related to real-world problem solving skills such as:\n' +
            '- Handling arrays, strings, recursion and data structures.\n' +
            '- Improve the ability to write optimal and readable code.',
        link: 'https://leetcode.com/u/truong231298/',
    },
    {
        company: 'Frontend Mentor',
        role: 'Participant',
        period: '2024 - Now',
        description: 'Take on multiple challenges from platforms like Frontend Mentor to practice building real-world interfaces, focusing on:\n' +
            '- Responsive Design with Tailwind CSS\n' +
            '- Implementing company-standard React components\n' +
            '- Ensuring browser compatibility and user experience',
        link: 'https://www.frontendmentor.io/profile/truong231298'
    },
    {
        company: 'Kaggle Projects',
        role: 'Participant',
        period: '2024 - Now',
        description: 'Take exams and notebooks on basic data analysis, using Python & pandas:\n' +
            '- Simple data analysis and visualization of results\n' +
            '- Apply logical thinking to information processing and visualization\n' +
            '- Focus on improving data reading and result presentation skills',
        link: 'https://www.kaggle.com/phanlthanhtrng'
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
                <div className="text-[4rem] md:text-[5rem] font-extrabold text-primary/20 absolute top-10 right-6 pointer-events-none select-none leading-none">
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
                                    <h3 className="text-2xl font-semibold">
                                        {exp.link ? (
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                {exp.company}
                                            </a>
                                        ) : (
                                            exp.company
                                        )}
                                    </h3>
                                    <p className="text-gray-500 italic">{exp.role} | {exp.period}</p>
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
