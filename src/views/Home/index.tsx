import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';
import TestimonialsSection from './components/TestimonialsSection';
import ClaimLandingSection from './components/ClaimLandingSection';

const Home: React.FC = () => {
	const contactRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const featuresRef = useRef<HTMLDivElement>(null);
	const faqRef = useRef<HTMLDivElement>(null);
	const testimonialsRef = useRef<HTMLDivElement>(null);
	const pricingRef = useRef<HTMLDivElement>(null);
	
	const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		let lastScrollTop = 0;

		const handleScroll = () => {
			const header = document.querySelector(".header-nav");
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollTop > 100) {
				if (header) {
					header.classList.add("header-scrolled");
				}
			} else {
				if (header) {
					header.classList.remove("header-scrolled");
				}
			}

			lastScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleScroll);
		
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	
	// Add a document class to ensure full-width display
	useEffect(() => {
		document.body.classList.add('full-width-layout');
		document.body.classList.add('dark-theme'); // Add dark theme class
		
		return () => {
			document.body.classList.remove('full-width-layout');
			document.body.classList.remove('dark-theme');
		};
	}, []);
	
	// Scroll reveal animation for sections
	useEffect(() => {
		const revealSections = () => {
			const sections = document.querySelectorAll('.section-container');
			
			sections.forEach((section) => {
				const sectionTop = section.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;
				
				if (sectionTop < windowHeight * 0.85) {
					section.classList.add('section-revealed');
				}
			});
		};
		
		window.addEventListener('scroll', revealSections);
		// Initial check
		revealSections();
		
		return () => {
			window.removeEventListener('scroll', revealSections);
		};
	}, []);
	
	return (
		<div className="modern-home-container bg-[#01052f] text-white">
			{/* Background patterns */}
			<div className="fixed inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] pointer-events-none"></div>
			<div className="fixed top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
			<div className="fixed bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-blue-600/20 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
			
			{/* Hero Section */}
			<div className="relative z-10">
				<HeroSection
					scrollToSection={scrollToSection}
					featuresRef={featuresRef}
					contactRef={contactRef}
					aboutRef={aboutRef}
				/>
			</div>
			
			{/* Trusted By Logos */}
			<div className="relative z-10 py-8 border-t border-white/10 bg-[#010424] bg-opacity-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
						<div className="text-center text-sm text-white/60 font-medium">TRUSTED BY</div>
						<img src="https://via.placeholder.com/120x40" alt="Workflow" className="h-8" />
						<img src="https://via.placeholder.com/120x40" alt="Coder" className="h-7" />
						<img src="https://via.placeholder.com/120x40" alt="OpenAI" className="h-8" />
						<img src="https://via.placeholder.com/120x40" alt="Hubspot" className="h-6" />
						<img src="https://via.placeholder.com/120x40" alt="Deepset" className="h-5" />
						<img src="https://via.placeholder.com/120x40" alt="Framer" className="h-6" />
					</div>
				</div>
			</div>
			
			{/* Main Features Section */}
			<div className="section-container relative z-10 opacity-0 transition-all duration-1000 ease-out transform translate-y-10 bg-[#010424]" ref={featuresRef}>
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16 pb-4">
						<h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">Unleash Your Dev Power With AI Precision</h2>
						<p className="text-blue-300/80 max-w-2xl mx-auto">Put the power of AI to work in your development workflow</p>
					</div>
					<FeaturesGrid />
				</div>
			</div>
			
			{/* Tech Stack Section */}
			<div className="section-container relative z-10 opacity-0 transition-all duration-1000 ease-out transform translate-y-10 py-16 bg-[#010424]/50" ref={aboutRef}>
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">Along with your favorite Tech Stack</h2>
						<p className="text-blue-300/80 max-w-2xl mx-auto">Easily integrate with the tools you already use and love</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-6 gap-4 justify-items-center items-center">
						{[...Array(12)].map((_, i) => (
							<div key={i} className="bg-white/5 hover:bg-white/10 backdrop-blur-lg p-4 rounded-xl flex items-center justify-center transition-all duration-300">
								<div className="w-10 h-10 bg-white/10 rounded"></div>
							</div>
						))}
					</div>
					<div className="flex justify-center mt-10">
						<button className="rounded-full bg-white/10 hover:bg-white/20 text-white px-5 py-2 text-sm font-medium border border-white/10 transition-all duration-300">View all our integrations</button>
					</div>
				</div>
			</div>
			
			{/* Prompting Section */}
			<div className="section-container relative z-10 opacity-0 transition-all duration-1000 ease-out transform translate-y-10 py-20 bg-[#010424]">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider">NEW</span>
						<h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-white">More powerful with <span className="text-blue-400">Prompting</span></h2>
						<p className="text-blue-300/80 max-w-2xl mx-auto">Craft perfect prompts with our intelligent AI assistant</p>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
						<div className="space-y-6">
							<div className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10">
								<div className="bg-blue-500/20 text-blue-400 w-8 h-8 flex items-center justify-center rounded-full font-semibold">1</div>
								<div>
									<div className="text-white font-medium">Add the task</div>
									<div className="text-white/60 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.</div>
								</div>
							</div>
							<div className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10">
								<div className="bg-blue-500/20 text-blue-400 w-8 h-8 flex items-center justify-center rounded-full font-semibold">2</div>
								<div>
									<div className="text-white font-medium">Specify your design needs</div>
									<div className="text-white/60 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.</div>
								</div>
							</div>
							<div className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10">
								<div className="bg-blue-500/20 text-blue-400 w-8 h-8 flex items-center justify-center rounded-full font-semibold">3</div>
								<div>
									<div className="text-white font-medium">Watch the magic happen</div>
									<div className="text-white/60 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.</div>
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
							<div className="bg-[#010424]/60 rounded-xl p-4 border border-white/10">
								<div className="flex items-center space-x-3 mb-4">
									<div className="w-3 h-3 rounded-full bg-red-400"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
									<div className="w-3 h-3 rounded-full bg-green-400"></div>
								</div>
								<div className="space-y-3">
									<div className="space-y-1">
										<div className="text-white/60 text-xs">Prompt</div>
										<div className="bg-white/5 text-white rounded p-2 text-sm">Create a responsive header with logo</div>
									</div>
									<div className="space-y-1">
										<div className="text-white/60 text-xs">Result</div>
										<div className="bg-white/5 text-white rounded p-2 text-sm overflow-y-auto h-44">
											<pre className="text-xs text-blue-300/80">{`<header className="flex justify-between items-center p-4 bg-dark">
  <div className="logo">
    <img src="/logo.svg" alt="Logo" />
  </div>
  <nav className="hidden md:block">
    {/* Navigation items */}
  </nav>
  <button className="md:hidden">
    {/* Mobile menu */}
  </button>
</header>`}</pre>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Testimonials Section */}
			<div className="section-container relative z-10 opacity-0 transition-all duration-1000 ease-out transform translate-y-10 py-20 bg-[#010321]" ref={testimonialsRef}>
				<div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:16px_16px]"></div>
				<div className="relative z-10">
					<TestimonialsSection />
				</div>
			</div>
			
			{/* Pricing Section */}
			<div className="section-container relative z-10 opacity-0 transition-all duration-1000 ease-out transform translate-y-10 py-20 bg-[#010424]" ref={pricingRef}>
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">Find your perfect plan</h2>
						<p className="text-blue-300/80 max-w-2xl mx-auto">Choose the plan that works best for your needs</p>
						
						<div className="inline-flex bg-white/5 p-1 rounded-full mt-6 border border-white/10">
							<button className="px-4 py-2 rounded-full bg-transparent text-white font-medium text-sm">Monthly</button>
							<button className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium text-sm">Annual</button>
						</div>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						{/* Free Plan */}
						<div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl hover:shadow-blue-500/10">
							<div className="p-8">
								<div className="text-xl font-semibold text-white mb-2">For personal</div>
								<div className="flex items-baseline mb-6">
									<span className="text-5xl font-bold text-white mr-2">$0</span>
									<span className="text-white/60">/month</span>
								</div>
								
								<ul className="space-y-4 mb-8">
									{['5 projects', 'Basic analytics', 'Up to 10k visits per month', '1 team member', 'Email support'].map((feature, i) => (
										<li key={i} className="flex items-start text-white">
											<svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
											<span className="text-white/80">{feature}</span>
										</li>
									))}
								</ul>
								
								<button className="w-full py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300">Try for free</button>
							</div>
						</div>
						
						{/* Pro Plan */}
						<div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl overflow-hidden border border-white/20 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl hover:shadow-blue-500/20">
							<div className="p-8">
								<div className="text-xl font-semibold text-white mb-2">For professionals</div>
								<div className="flex items-baseline mb-6">
									<span className="text-5xl font-bold text-white mr-2">$12</span>
									<span className="text-white/60">/month</span>
								</div>
								
								<ul className="space-y-4 mb-8">
									{['Unlimited projects', 'Advanced analytics', 'Up to 100k visits per month', 'Up to 5 team members', 'Priority support', 'Custom domains', 'No gogetwell branding'].map((feature, i) => (
										<li key={i} className="flex items-start text-white">
											<svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
											<span className="text-white/80">{feature}</span>
										</li>
									))}
								</ul>
								
								<button className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300">Subscribe now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* FAQ Section */}
			<div className="section-container relative z-10 opacity-0 transition-all duration-1000 ease-out transform translate-y-10 py-20 bg-[#010321]" ref={faqRef}>
				<div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:16px_16px]"></div>
				<div className="relative z-10">
					<HomeFAQs />
				</div>
			</div>
			
			{/* CTA Section */}
			<div className="section-container relative z-10 opacity-0 transition-all duration-1000 ease-out transform translate-y-10 py-24 bg-[#010424]">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Take the Shortcut way to Production</h2>
					<p className="text-blue-300/80 max-w-2xl mx-auto mb-10">Join 5.5k developers to start building production-ready interfaces today</p>
					
					<div className="flex flex-wrap justify-center gap-4">
						<button className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/20">Get Started</button>
						<button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 transition-all duration-300">See Overview</button>
					</div>
				</div>
			</div>
			
			{/* Contact Section */}
			<div className="section-container relative z-10 opacity-0 transition-all duration-1000 ease-out transform translate-y-10 bg-[#010424]" ref={contactRef}>
				<ContactForm />
			</div>
			
			{/* Footer */}
			<div className="bg-[#01031a] text-white relative z-10">
				<div className="relative z-10">
					<MainFooter />
				</div>
			</div>
		</div>
	);
};

export default Home;