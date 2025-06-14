import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all ${
            scrolled ? 'bg-primary shadow-md' : 'bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-accent font-bold text-xl bg-blue-500 p-2 rounded-2xl">MyPortfolio</Link>
                <div className="space-x-6 text-light text-black p-2">
                    {['/', '/about', '/education','/experience','/projects', '/contact'].map((path, i) => (
                        <Link
                            key={i}
                            to={path}
                            className={pathname === path ? 'text-accent' : 'hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 p-2 rounded-md'}
                        >
                            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
