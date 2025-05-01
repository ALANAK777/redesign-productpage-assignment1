import React from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase, BsArrowRight } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt size={28} />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "from-blue-500 to-blue-600",
    link: "#"
  },
  {
    icon: <FaUserSecret size={28} />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "from-purple-500 to-purple-600",
    link: "#"
  },
  {
    icon: <BiMessageSquare size={28} />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "from-green-500 to-green-600",
    link: "#"
  },
  {
    icon: <FiFileText size={28} />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "from-orange-500 to-orange-600",
    link: "#"
  },
  {
    icon: <BiTrendingUp size={28} />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "from-pink-500 to-pink-600",
    link: "#"
  },
  {
    icon: <BsDatabase size={28} />,
    title: "Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "from-indigo-500 to-indigo-600",
    link: "#"
  },
  {
    icon: <LuLanguages size={28} />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "from-red-500 to-red-600",
    link: "#"
  },
  {
    icon: <BiCreditCard size={28} />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "from-teal-500 to-teal-600",
    link: "#"
  },
  {
    icon: <BiSearch size={28} />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "from-cyan-500 to-cyan-600",
    link: "#"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <div className="py-20 px-4 md:px-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-30 filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-100 rounded-full opacity-30 filter blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-wider animate-fade-in-up">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 animate-fade-in-up animation-delay-100">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Our AI-powered platform offers everything healthcare providers need to improve patient engagement, 
            streamline operations, and grow their practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl border border-gray-100 group card-hover animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="p-8">
                  <div className={`bg-gradient-to-r ${solution.color} inline-flex p-4 rounded-xl text-white mb-5 transform transition-transform group-hover:scale-110 duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <a 
                    href={solution.link} 
                    className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn more <BsArrowRight className="ml-2" />
                  </a>
                </div>
                <div className={`h-1 w-full bg-gradient-to-r ${solution.color}`}></div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-white opacity-5">
            <div className="bg-grid-white absolute inset-0"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Ready to transform your healthcare practice?</h3>
              <p className="text-white/80 text-lg">Get started today and see the difference AI can make.</p>
            </div>
            <a 
              href="#" 
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;