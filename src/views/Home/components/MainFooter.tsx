import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaDiscord, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface LinkItem {
    text: string
    path: string
}

interface FooterColumn {
    title: string;
    links: LinkItem[];
}

const footerColumns: FooterColumn[] = [
    {
        title: "Company",
        links: [
            { text: 'About Us', path: '/about' },
            { text: 'Careers', path: '/careers' },
            { text: 'Contact Us', path: '/contact' },
            { text: 'Blog', path: '/blog' },
        ]
    },
    {
        title: "Product",
        links: [
            { text: 'Features', path: '/features' },
            { text: 'Pricing', path: '/pricing' },
            { text: 'Case Studies', path: '/case-studies' },
            { text: 'Testimonials', path: '/testimonials' },
        ]
    },
    {
        title: "Resources",
        links: [
            { text: 'Documentation', path: '/docs' },
            { text: 'Support', path: '/support' },
            { text: 'API Reference', path: '/api-docs' },
            { text: 'Healthcare Glossary', path: '/glossary' },
        ]
    },
    {
        title: "Legal",
        links: [
            { text: 'Privacy Policy', path: '/privacy-policy' },
            { text: 'Terms of Service', path: '/terms-of-service' },
            { text: 'Pricing Policy', path: '/pricing-policy' },
            { text: 'Editor Policy', path: '/editor-policy' },
        ]
    }
];

const MainFooter: React.FC = () => {
    return (
        <footer className="py-20 px-4 md:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 right-[10%] w-[25rem] h-[25rem] bg-blue-900 rounded-full mix-blend-multiply filter blur-[12rem] opacity-20"></div>
                <div className="absolute bottom-0 left-[10%] w-[20rem] h-[20rem] bg-indigo-900 rounded-full mix-blend-multiply filter blur-[10rem] opacity-20"></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white">gogetwell.ai</h2>
                            <p className="mt-3 text-gray-400 text-sm">
                                Revolutionizing healthcare with AI-powered solutions for patient engagement and practice growth.
                            </p>
                        </div>
                        
                        <div className="flex space-x-4 mt-6">
                            <Link
                                to="https://twitter.com/gogetwellai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                            >
                                <FaTwitter size={18} className="text-white" />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/company/gogetwellai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                            >
                                <FaLinkedinIn size={18} className="text-white" />
                            </Link>
                            <Link
                                to="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                            >
                                <FaInstagram size={18} className="text-white" />
                            </Link>
                            <Link
                                to="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                            >
                                <FaFacebookF size={18} className="text-white" />
                            </Link>
                            <Link
                                to="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                            >
                                <FaDiscord size={18} className="text-white" />
                            </Link>
                            <Link
                                to="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                            >
                                <FaGithub size={18} className="text-white" />
                            </Link>
                        </div>
                        
                        {/* Newsletter signup */}
                        <div className="mt-8 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                            <h3 className="text-white text-sm font-semibold mb-2">Subscribe to our newsletter</h3>
                            <p className="text-gray-400 text-xs mb-3">Get the latest updates and resources</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-3 py-2 bg-white/10 text-white rounded-lg text-sm flex-1 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Link Columns */}
                    {footerColumns.map((column, idx) => (
                        <div key={idx}>
                            <h3 className="text-gray-100 font-semibold mb-4">{column.title}</h3>
                            <ul className="space-y-3">
                                {column.links.map((link, i) => (
                                    <li key={i}>
                                        <Link 
                                            to={link.path} 
                                            className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} gogetwell.ai. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-8 mt-4 md:mt-0">
                        <select className="bg-white/10 text-gray-400 text-sm py-1 px-3 rounded-md border border-gray-700">
                            <option>English (US)</option>
                            <option>Español</option>
                            <option>Français</option>
                            <option>Deutsch</option>
                        </select>
                        
                        {/* Add badges for app stores */}
                        <div className="flex gap-3">
                            <div className="py-1 px-3 bg-gray-800 rounded-md flex items-center hover:bg-gray-700 cursor-pointer transition-colors">
                                <svg viewBox="0 0 384 512" width="15" className="text-white mr-1.5">
                                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                                </svg>
                                <div>
                                    <div className="text-xs text-gray-400">Download on the</div>
                                    <div className="text-sm font-semibold text-white">App Store</div>
                                </div>
                            </div>
                            
                            <div className="py-1 px-3 bg-gray-800 rounded-md flex items-center hover:bg-gray-700 cursor-pointer transition-colors">
                                <svg viewBox="0 0 512 512" width="15" className="text-white mr-1.5">
                                    <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                                </svg>
                                <div>
                                    <div className="text-xs text-gray-400">Get it on</div>
                                    <div className="text-sm font-semibold text-white">Google Play</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
