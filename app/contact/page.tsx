'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    interest: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        interest: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-gradient mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team to discuss how we can help you revolutionize 
              your trading and betting strategies with our cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-8 md:py-16 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-400">
                    <p>Your message has been sent successfully! We'll get back to you shortly.</p>
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-400">
                    <p>There was an error sending your message. Please try again later.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm mb-2">Your Name*</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                                 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm mb-2">Email Address*</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                                 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 text-sm mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                                 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-300 text-sm mb-2">Company</label>
                      <input 
                        type="text" 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                                 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="interest" className="block text-gray-300 text-sm mb-2">I'm interested in*</label>
                    <select 
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                               text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="trading">Trading Strategies</option>
                      <option value="betting">Betting Applications</option>
                      <option value="financial">Financial Analysis</option>
                      <option value="custom">Custom Software</option>
                      <option value="api">API Integration</option>
                      <option value="data">Data Analytics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-300 text-sm mb-2">Subject*</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                               text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 text-sm mb-2">Message*</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-gray-700 rounded-lg px-4 py-3
                               text-white focus:outline-none focus:ring-2 focus:ring-purple-500
                               min-h-[150px]"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
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
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center 
                                  bg-gradient-to-r from-purple-600 to-pink-500 mr-4">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Email</h3>
                      <a href="mailto:info@TanatradingLabs.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                        info@TanatradingLabs.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center 
                                  bg-gradient-to-r from-cyan-500 to-blue-500 mr-4">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        +254 746 828 741
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center 
                                  bg-gradient-to-r from-emerald-500 to-green-500 mr-4">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Office Location</h3>
                      <p className="text-gray-300">
                        TanatradingLabs HQ<br />
                        Muugi Road, Waiyaki way<br />
                        Westlands<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center 
                                  bg-gradient-to-r from-amber-500 to-orange-500 mr-4">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="card p-4 overflow-hidden">
                <div className="w-full h-[300px] rounded-lg overflow-hidden relative">
                  {/* Placeholder for map - in a real application you would use Google Maps or similar */}
                  <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={48} className="text-purple-500 mx-auto mb-4" />
                      <p className="text-gray-300">Map Placeholder</p>
                      <p className="text-gray-400 text-sm">(Google Maps integration would go here)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 relative bg-slate-900/50">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gradient mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-300">
              Find answers to common questions about our services and how we can help you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">What types of trading strategies do you offer?</h3>
                <p className="text-gray-300">
                  We offer a wide range of trading strategies, including algorithmic trading systems, 
                  risk management protocols, market analysis tools, custom indicators, and backtesting frameworks. 
                  Our strategies are customized based on your specific needs and market focus.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">How do your betting applications work?</h3>
                <p className="text-gray-300">
                  Our betting applications leverage advanced algorithms and machine learning to analyze 
                  historical data, identify patterns, and calculate optimal odds. We provide odds optimization 
                  engines, real-time market data integration, statistical analysis models, and risk calculation systems.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Can your solutions integrate with my existing systems?</h3>
                <p className="text-gray-300">
                  Yes, our solutions are designed for seamless integration with existing systems. We specialize 
                  in API integration, connecting to financial data sources, payment gateways, authentication systems, 
                  and cloud services. We can also develop custom APIs tailored to your specific requirements.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">How long does implementation typically take?</h3>
                <p className="text-gray-300">
                  Implementation timelines vary based on the complexity of your requirements. Simple integrations 
                  can be completed in a few weeks, while more complex custom solutions may take several months. 
                  We provide detailed project timelines during our initial consultation.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer ongoing support and maintenance?</h3>
                <p className="text-gray-300">
                  Yes, we offer comprehensive support and maintenance packages for all our solutions. This includes 
                  regular updates, performance optimization, bug fixes, and technical support. We also provide 
                  training and documentation to ensure your team can effectively use our systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}