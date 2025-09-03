import React, { useState } from 'react';
import { Mail, Phone, Instagram, PlayCircle, Calendar, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    weddingDate: '',
    venue: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend or email service
  };

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-cream mb-6">
            Let's Create Something
            <span className="text-gold block">Beautiful Together</span>
          </h1>
          <p className="text-xl font-serif text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'd love to hear about your love story and learn how I can help capture your wedding day. 
            Every inquiry receives my personal attention, and I typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-display font-semibold text-cream mb-8">
                Tell Me About Your Day
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gold font-serif font-semibold mb-2">
                      Names *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sarah & Michael"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-sm text-cream font-serif focus:border-gold focus:outline-none transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gold font-serif font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@email.com"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-sm text-cream font-serif focus:border-gold focus:outline-none transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="weddingDate" className="block text-gold font-serif font-semibold mb-2">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      id="weddingDate"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-sm text-cream font-serif focus:border-gold focus:outline-none transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div>
                    <label htmlFor="venue" className="block text-gold font-serif font-semibold mb-2">
                      Venue / Location
                    </label>
                    <input
                      type="text"
                      id="venue"
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="Napa Valley, CA"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-sm text-cream font-serif focus:border-gold focus:outline-none transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gold font-serif font-semibold mb-2">
                    Tell Me About Your Vision
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd love to hear about your wedding style, any special moments you want captured, your story as a couple, or any questions you have about my services..."
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-sm text-cream font-serif focus:border-gold focus:outline-none transition-all duration-300 focus:scale-105 resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-darkGold text-black py-4 px-8 rounded-sm font-serif font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Send My Message
                </button>

                <p className="text-sm font-serif text-gray-400 text-center">
                  I personally read and respond to every inquiry within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right lg:pl-8">
              <h2 className="text-3xl font-display font-semibold text-cream mb-8">
                Let's Connect
              </h2>
              
              <div className="space-y-8">
                {/* Direct Contact */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-gold mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="mailto:hello@businessname.com" 
                      className="flex items-center space-x-3 text-gray-300 hover:text-cream font-serif transition-all duration-300 hover:translate-x-2"
                    >
                      <Mail className="w-5 h-5 text-gold" />
                      <span>hello@businessname.com</span>
                    </a>
                    <a 
                      href="tel:+1234567890" 
                      className="flex items-center space-x-3 text-gray-300 hover:text-cream font-serif transition-all duration-300 hover:translate-x-2"
                    >
                      <Phone className="w-5 h-5 text-gold" />
                      <span>+1 (234) 567-8900</span>
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-gold mb-4">
                    Follow the Journey
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/businessname" 
                      className="flex items-center space-x-2 text-gray-300 hover:text-cream font-serif transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-gold" />
                      <span>@businessname</span>
                    </a>
                    <a 
                      href="https://vimeo.com/businessname" 
                      className="flex items-center space-x-2 text-gray-300 hover:text-cream font-serif transition-colors"
                    >
                      <PlayCircle className="w-5 h-5 text-gold" />
                      <span>Vimeo Portfolio</span>
                    </a>
                  </div>
                  <p className="font-serif text-gray-400 mt-2 text-sm">
                    See behind-the-scenes moments and recent work
                  </p>
                </div>

                {/* Response Time */}
                <div className="bg-black/50 border border-gold/30 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <h3 className="text-lg font-display font-semibold text-gold">
                      Response Time
                    </h3>
                  </div>
                  <p className="font-serif text-gray-300 leading-relaxed">
                    I personally respond to every inquiry within 24 hours. For urgent requests or 
                    last-minute availability, feel free to call directly.
                  </p>
                </div>

                {/* Consultation Info */}
                <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <h3 className="text-lg font-display font-semibold text-cream">
                      Complimentary Consultation
                    </h3>
                  </div>
                  <p className="font-serif text-gray-300 leading-relaxed mb-3">
                    I offer complimentary 30-minute consultations to discuss your vision, 
                    answer questions, and ensure we're the perfect fit.
                  </p>
                  <p className="font-serif text-gold text-sm">
                    Available via phone, video call, or in-person (Bay Area)
                  </p>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <h3 className="text-lg font-display font-semibold text-cream">
                      Based in San Francisco Bay Area
                    </h3>
                  </div>
                  <p className="font-serif text-gray-300 leading-relaxed">
                    Available for weddings worldwide. Travel fees apply for destinations outside 
                    of Northern California. Destination wedding packages available upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-semibold text-cream mb-6">
            Ready to Preserve Your Story?
          </h2>
          <p className="text-xl font-serif text-gray-300 leading-relaxed mb-8">
            Your wedding day will pass in the blink of an eye, but your film will let you 
            relive those precious moments forever. Let's create something beautiful together.
          </p>
          <div className="text-gold font-serif text-lg">
            <p>I can't wait to hear from you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;