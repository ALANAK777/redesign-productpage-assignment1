import React from 'react';

type Testimonial = {
    name: string;
    role: string;
    company: string;
    quote: string;
    image: string;
    stars: number;
};

const testimonials: Testimonial[] = [
    {
        name: "Dr. Sarah Johnson",
        role: "Chief Medical Officer",
        company: "Memorial Healthcare",
        quote: "The AI front office solution has completely transformed how we interact with patients. We've seen a 40% increase in appointments and significantly higher patient satisfaction rates.",
        image: "/img/testimonials/avatar1.png", // Would normally be a real image
        stars: 5
    },
    {
        name: "Michael Chen",
        role: "Practice Manager",
        company: "Pacific Medical Group",
        quote: "I was skeptical at first, but the results speak for themselves. Our patient acquisition costs dropped by 35% while conversions doubled. The ROI has been incredible.",
        image: "/img/testimonials/avatar2.png",
        stars: 5
    },
    {
        name: "Dr. James Wilson",
        role: "Cardiologist",
        company: "Heart & Vascular Institute",
        quote: "What impressed me most was how quickly patients adapted to the AI interface. The personalized care pathways have helped us provide better care while reducing administrative burden.",
        image: "/img/testimonials/avatar3.png",
        stars: 4
    },
    {
        name: "Amanda Torres",
        role: "Director of Operations",
        company: "Wellness Medical Center",
        quote: "The integration was seamless and the support team was exceptional. Within weeks, we saw improvements in our workflow efficiency and patient communication.",
        image: "/img/testimonials/avatar4.png",
        stars: 5
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <div className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm uppercase tracking-wider animate-fade-in-up">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 animate-fade-in-up animation-delay-100">
                        Trusted by Healthcare Professionals
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        See what healthcare providers are saying about our AI-powered solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative card-hover animate-fade-in-up"
                            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                        >
                            {/* Quote icon */}
                            <div className="absolute -top-5 -left-2 text-primary/10 text-7xl font-serif">"</div>
                            
                            {/* Stars */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg 
                                        key={i} 
                                        className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'}`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                            </div>
                            
                            {/* Quote */}
                            <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
                            
                            {/* Author Info */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                                    {/* Would normally be an actual image */}
                                    <div className="w-full h-full bg-gradient-to-br from-primary/80 to-blue-600/80"></div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Logo cloud */}
                <div className="mt-20">
                    <p className="text-center text-gray-500 mb-8">Trusted by leading healthcare institutions</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {/* These would normally be actual hospital/healthcare logos */}
                        <div className="w-32 h-12 bg-gray-200 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                        <div className="w-32 h-12 bg-gray-200 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                        <div className="w-32 h-12 bg-gray-200 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                        <div className="w-32 h-12 bg-gray-200 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                        <div className="w-32 h-12 bg-gray-200 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection; 