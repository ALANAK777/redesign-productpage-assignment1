import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser, BiMapAlt, BiSupport } from 'react-icons/bi';
import { BsLinkedin, BsTwitter, BsGithub, BsDiscord } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const [formState, setFormState] = useState<{
        fullname: string;
        email: string;
        subject: string;
        message: string
    }>({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsSubmitting(false);
            toast.push(
                <Notification
                    title={'Success'}
                    type={'success'}
                >
                    Your message has been sent successfully!
                </Notification>,
            );
            setFormState({
                fullname: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            setIsSubmitting(false);
            toast.push(
                <Notification
                    title={'Error'}
                    type={'danger'}
                >
                    Something went wrong. Please try again later.
                </Notification>,
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="py-16 px-4 md:px-8 relative" id="contact">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider animate-fade-in-up">CONTACT US</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 animate-fade-in-up animation-delay-100">
                        Get in Touch with Our Team
                    </h2>
                    <p className="text-blue-300/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        Have questions or need assistance? Our dedicated support team is here to help you
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Left Column - Contact Info */}
                    <div className="lg:col-span-2 space-y-8 animate-fade-in-up">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 glass-effect">
                            <h3 className="text-xl font-bold text-white mb-6">We're Here For You</h3>
                            
                            <div className="space-y-6">
                                {/* Contact Details */}
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                                        <BiPhone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm">Call Us</p>
                                        <a href="tel:+919811396858" className="text-white font-medium hover:text-blue-400 transition-colors">
                                            +91 9811 396 858
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                                        <CgMail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm">Email Us</p>
                                        <a href="mailto:hello@gogetwell.ai" className="text-white font-medium hover:text-blue-400 transition-colors">
                                            hello@gogetwell.ai
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                                        <BiMapAlt className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm">Location</p>
                                        <p className="text-white font-medium">
                                            New Delhi, India
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                                        <BiSupport className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm">Support Hours</p>
                                        <p className="text-white font-medium">
                                            24/7 Customer Support
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h3 className="text-white font-medium mb-4">Connect With Us</h3>
                                <div className="flex flex-wrap gap-3">
                                    <Link to="https://twitter.com/gogetwellai" target='_blank' className="bg-blue-500/20 p-3 rounded-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                                        <BsTwitter className="w-5 h-5" />
                                    </Link>
                                    <Link to="https://www.linkedin.com/company/gogetwellai/" target='_blank' className="bg-blue-500/20 p-3 rounded-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                                        <BsLinkedin className="w-5 h-5" />
                                    </Link>
                                    <Link to="#" target='_blank' className="bg-blue-500/20 p-3 rounded-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                                        <BsGithub className="w-5 h-5" />
                                    </Link>
                                    <Link to="#" target='_blank' className="bg-blue-500/20 p-3 rounded-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                                        <BsDiscord className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:col-span-3 animate-fade-in-up animation-delay-200">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full transform translate-x-20 -translate-y-20"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full transform -translate-x-20 translate-y-20"></div>
                            
                            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Send us a Message</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'fullname' || formState.fullname ? 'text-blue-400' : 'text-white/40'
                                            }`}>
                                            <BiUser className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            name="fullname"
                                            placeholder="Full Name"
                                            value={formState.fullname}
                                            onChange={handleChange}
                                            onFocus={() => setFocused('fullname')}
                                            onBlur={() => setFocused('')}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-white placeholder-white/40"
                                            required
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused === 'email' || formState.email ? 'text-blue-400' : 'text-white/40'
                                            }`}>
                                            <CgMail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formState.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocused('email')}
                                            onBlur={() => setFocused('')}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-white placeholder-white/40"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('subject')}
                                        onBlur={() => setFocused('')}
                                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-white placeholder-white/40"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused('')}
                                        rows={5}
                                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-white placeholder-white/40"
                                        required
                                    />
                                </div>

                                <Button
                                    loading={isSubmitting}
                                    type="submit"
                                    variant="solid"
                                    className="w-full py-4 px-6 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20"
                                >
                                    <span>Send Message</span>
                                    <BiSend className="w-5 h-5 ml-2" />
                                </Button>
                                
                                <p className="text-center text-white/50 text-sm">
                                    We'll get back to you within 24 hours
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;