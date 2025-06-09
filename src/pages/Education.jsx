// src/pages/Education.jsx
import { motion } from 'framer-motion';
import backgroundImg from "../assets/backgroundImage.jpg";

const educationItems = [
    {
        title: 'Senior Vocational High School',
        institution: 'School Of Art',
        year: '2012'
    },
    {
        title: 'Bachelor Degree',
        institution: 'Borcelle Art University | Graphic Design Bachelor',
        year: '2017'
    },
    {
        title: 'Master Degree',
        institution: 'Borcelle Art University | Master of Communication',
        year: '2019'
    }
];

export default function Education() {
    return (
        <section id="education" className="relative min-h-screen flex items-center overflow-hidden text-light">
            {/* Background overlay */}
            <div className="absolute inset-0">
                <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80 mix-blend-overlay" />
            </div>

            <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-start px-6 py-16">
                {/* Left: Title & Description */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 w-full lg:pr-12 mb-12 lg:mb-0"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 text-primary">Education</h2>
                    <div className="w-24 h-1 bg-accent mb-6" />
                    <p className="text-gray-200 max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi.
                        Suspendisse mollis nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam nec nibh.
                    </p>
                </motion.div>

                {/* Right: Timeline & Items */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 w-full"
                >
                    {/* Year large text */}
                    <div className="text-[8rem] md:text-[10rem] font-extrabold text-primary/20 top-16 right-6 pointer-events-none select-none leading-none">
                        2012 - 2019
                    </div>
                    {/* List */}
                    <div className="relative space-y-8">
                        {educationItems.map((item, i) => (
                            <div key={i} className="pl-4 border-l-2 border-accent">
                                <h3 className="text-2xl font-semibold text-light">{item.title}</h3>
                                <p className="text-gray-300">{item.institution}</p>
                                <span className="text-sm text-gray-400">{item.year}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer line */}
            <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between px-6 text-light">
                <span className="h-px bg-accent flex-grow mr-4" />
                <span className="text-sm uppercase tracking-widest">Portfolio 2025</span>
                <span className="h-px bg-accent flex-grow ml-4" />
            </div>
        </section>
    );
}
