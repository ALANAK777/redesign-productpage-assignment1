import React from 'react';
import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="bg-gradient-to-br from-[#01052f] via-[#0e1d67] to-[#2a1a8f] w-full relative flex flex-col py-2 md:py-0 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[10%] right-[10%] w-[30rem] h-[30rem] bg-blue-500 rounded-full mix-blend-multiply filter blur-[8rem] opacity-20 animate-float"></div>
                <div className="absolute bottom-[10%] left-[10%] w-[25rem] h-[25rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-[8rem] opacity-20 animate-float-delayed"></div>
                <div className="absolute top-[50%] left-[50%] w-[20rem] h-[20rem] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[8rem] opacity-10 animate-pulse"></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px] pointer-events-none"></div>
            
            <div className="header-nav transition-all duration-300 z-20">
                <HomeNavbar
                    scrollToSection={scrollToSection}
                    featuresRef={featuresRef}
                    contactRef={contactRef}
                    aboutRef={aboutRef}
                />
            </div>

            <div className="min-h-[90vh] flex items-center relative z-10">
                {/* Mobile background */}
                <img
                    src={smallBG}
                    alt="background_image"
                    className="md:hidden h-full w-full object-cover absolute top-0 left-0 z-[-10]"
                />

                <div className="relative z-10 text-white w-full max-w-[1538px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Content Section */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 border border-white/10 mb-2 animate-fade-in-up">
                                    🚀 Transforming Healthcare with AI
                                </span>
                            </div>
                            
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">AI Front Office</span> <br />
                                For Healthcare Agents
                            </h1>
                            
                            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
                                Create your <span className="text-primary font-bold">AI Store</span> in just 2 minutes and scale your business with powerful <span className="text-primary font-bold">Digital Marketing</span>.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                                <HcfSignupPopup 
                                    popupButtonStatus 
                                    buttonChildren={
                                        <Button 
                                            block 
                                            variant='solid' 
                                            className='rounded-full text-lg py-3 px-8 shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300'
                                        >
                                            Get Started Free
                                        </Button>
                                    } 
                                />
                                
                                <Button 
                                    onClick={() => scrollToSection(featuresRef)}
                                    variant='plain' 
                                    className='rounded-full text-lg py-3 px-8 border border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300'
                                >
                                    See How It Works
                                </Button>
                            </div>
                            
                            {/* Add Trustpilot-like rating */}
                            <div className="mt-10 hidden sm:block animate-fade-in-up animation-delay-400">
                                <div className="flex items-center justify-center lg:justify-start">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="ml-2 text-white/80 text-sm">
                                        <span className="font-semibold">4.9/5</span> from over 2,500+ reviews
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Section - Now as a card */}
                        <div className="lg:w-5/12 bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 animate-fade-in-up animation-delay-200 hover:transform hover:scale-[1.02] transition-all duration-500">
                            <h3 className="text-xl font-semibold mb-6 text-center">Trusted by Healthcare Professionals</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 mb-2">2100+</h2>
                                    <p className="text-sm uppercase tracking-wider">Qualified Doctors</p>
                                </div>
                                
                                <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 mb-2">1000+</h2>
                                    <p className="text-sm uppercase tracking-wider">Hospitals</p>
                                </div>
                                
                                <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 mb-2">800+</h2>
                                    <p className="text-sm uppercase tracking-wider">Treatment Plans</p>
                                </div>
                            </div>
                            
                            {/* Partner logos */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-center text-sm text-white/60 mb-4">Trusted by leading healthcare providers</p>
                                <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
                                    {/* These would normally be actual logo images */}
                                    <div className="h-8 w-16 bg-white/20 rounded-md"></div>
                                    <div className="h-8 w-20 bg-white/20 rounded-md"></div>
                                    <div className="h-8 w-16 bg-white/20 rounded-md"></div>
                                    <div className="h-8 w-24 bg-white/20 rounded-md"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;