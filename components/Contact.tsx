import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import emailjs from 'emailjs-com';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, GithubIcon } from './Icons';


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        message: '' 
    });
    const [status, setStatus] = useState({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus({
                message: 'Thank you! Your message has been sent.',
                type: 'success'
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({
                message: 'Failed to send message. Please try again.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatedSection className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900" id="contact">
            <div className="container mx-auto px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-100">
                    Let's <span className="text-sky-500">Connect</span>
                </h2>
                <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 mb-12"></div>
                
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="lg:w-1/3 space-y-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                                Contact Information
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <MailIcon className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</h4>
                                        <a href="mailto:vasanlennin4114@gmail.com" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-500 transition-colors">
                                            vasanlennin4114@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <PhoneIcon className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</h4>
                                        <a href="tel:+919176326102" className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-500 transition-colors">
                                            +91 9176326102
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <MapPinIcon className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</h4>
                                        <p className="text-slate-700 dark:text-slate-300">Chennai, Tamil Nadu, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                                Connect With Me
                            </h3>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/vasanlennin/" target="_blank" rel="noopener noreferrer" 
                                   className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-sky-900/50 hover:text-sky-600 dark:hover:text-sky-500 transition-colors">
                                    <LinkedInIcon className="w-5 h-5" />
                                </a>
                                <a href="https://github.com/vlen4114" target="_blank" rel="noopener noreferrer" 
                                   className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-sky-900/50 hover:text-sky-600 dark:hover:text-sky-500 transition-colors">
                                    <GithubIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="lg:w-2/3">
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Your Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        required 
                                        value={formData.name} 
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 dark:text-slate-100 transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        required 
                                        value={formData.email} 
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 dark:text-slate-100 transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Your Message
                                    </label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        rows={5} 
                                        required 
                                        value={formData.message} 
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 dark:text-slate-100 transition-all"
                                        placeholder="How can I help you?"
                                    ></textarea>
                                </div>
                                
                                <div className="pt-2">
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-bold transition-all ${
                                            isSubmitting 
                                                ? 'bg-sky-400 dark:bg-sky-600 cursor-not-allowed' 
                                                : 'bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700'
                                        } text-white`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                                
                                {status.message && (
                                    <div className={`mt-4 p-4 rounded-lg ${
                                        status.type === 'success' 
                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                                            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                                    }`}>
                                        {status.message}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;