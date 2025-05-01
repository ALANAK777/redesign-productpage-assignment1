import React, { useState } from 'react';
import { BiChevronDown, BiQuestionMark } from 'react-icons/bi';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => (
    <div 
        className="border-b border-white/10 last:border-0 animate-fade-in-up"
        style={{ animationDelay: `${0.1 + index * 0.05}s` }}
    >
        <button
            onClick={onClick}
            className="w-full py-5 px-6 flex items-center justify-between text-left transition-all rounded-lg hover:bg-white/5 group"
        >
            <h3 className="text-lg font-medium text-white pr-8 group-hover:text-blue-400 transition-colors">{question}</h3>
            <div className={`flex-shrink-0 ml-2 transition-all duration-300 ${isOpen ? 'rotate-180 bg-blue-500 text-white' : 'bg-white/10 text-white/70'} rounded-full p-2`}>
                <BiChevronDown className="w-5 h-5" />
            </div>
        </button>

        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
            <div className="p-6 pt-2 text-white/70">
                {answer}
            </div>
        </div>
    </div>
);

const HomeFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('general');

    const faqCategories = [
        { id: 'general', label: 'General' },
        { id: 'features', label: 'Features' },
        { id: 'comparison', label: 'Comparison' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'controls', label: 'Controls' },
    ];

    const faqData = [
        {
            que: 'What is gogetwell.ai?',
            ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.',
            category: 'general'
        },
        {
            que: 'What is the AI Front Office for Healthcare Agents?',
            ans: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.',
            category: 'general'
        },
        {
            que: 'How does the AI Agent assist me in my healthcare business?',
            ans: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.',
            category: 'features'
        },
        {
            que: 'Can I customize the website for my healthcare services?',
            ans: 'Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.',
            category: 'features'
        },
        {
            que: 'How does this platform support independent healthcare facilitators like me?',
            ans: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.',
            category: 'comparison'
        },
        {
            que: 'How does the platform help me manage patient leads?',
            ans: 'The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.',
            category: 'features'
        },
        {
            que: 'Is the platform secure and compliant with healthcare regulations?',
            ans: "Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients' data is always protected.",
            category: 'general'
        },
        {
            que: 'How quickly can I get started with the platform?',
            ans: 'Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.',
            category: 'controls'
        },
        {
            que: 'What kind of customer support is available if I need help?',
            ans: 'I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.',
            category: 'controls'
        },
    ];

    const filteredFaqs = activeCategory === 'all' 
        ? faqData 
        : faqData.filter(faq => faq.category === activeCategory);

    return (
        <div className="py-16 px-4 md:px-8 relative">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl opacity-70"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl opacity-70"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider animate-fade-in-up">FAQ</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 animate-fade-in-up animation-delay-100">
                        Frequently Asked Question
                    </h2>
                    <p className="text-blue-300/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        Everything you need to know about our AI-powered healthcare platform
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {faqCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                activeCategory === category.id 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm relative">
                    <div className="absolute -top-10 -left-10 bg-blue-500/20 text-blue-400 p-5 rounded-full hidden md:flex">
                        <BiQuestionMark size={30} />
                    </div>
                    
                    {filteredFaqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            question={faq.que}
                            answer={faq.ans}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
                
                {/* Contact CTA */}
                <div className="mt-12 text-center animate-fade-in-up animation-delay-300">
                    <p className="text-white/70 mb-4">Still have questions?</p>
                    <a href="#contact" className="inline-flex items-center px-6 py-3 border border-blue-500 bg-white/5 text-blue-400 hover:bg-blue-500 hover:text-white font-medium rounded-full transition-colors backdrop-blur-sm">
                        Contact our support team
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeFAQs;