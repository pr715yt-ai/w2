import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const portfolioSamples = [
    {
      id: 1,
      couple: 'Sarah & Michael',
      location: 'Napa Valley',
      thumbnail: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A romantic vineyard celebration'
    },
    {
      id: 2,
      couple: 'Emma & James',
      location: 'Big Sur',
      thumbnail: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Coastal cliffs and endless love'
    },
    {
      id: 3,
      couple: 'Isabella & David',
      location: 'Tuscany',
      thumbnail: 'https://images.pexels.com/photos/1467557/pexels-photo-1467557.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Italian countryside romance'
    }
  ];

  const testimonials = [
    {
      text: "Our wedding film exceeded every expectation. The way they captured our emotions and the intimate moments was absolutely breathtaking. We watch it every anniversary and cry happy tears every time.",
      author: "Sarah & Michael",
      location: "Napa Valley"
    },
    {
      text: "The cinematography was like something from a Hollywood film. Every frame was perfectly composed, and the storytelling made us fall in love with our own story all over again.",
      author: "Emma & James",
      location: "Big Sur"
    },
    {
      text: "Working with this team was effortless. They captured our day so naturally that we barely noticed the cameras, yet every precious moment was beautifully preserved.",
      author: "Isabella & David",
      location: "Tuscany"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cinematic wedding scene"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-scale-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-cream mb-6 leading-tight">
            Your Story,
            <span className="text-gold block">Unforgettably Told</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif text-gray-200 mb-8 leading-relaxed">
            Cinematic Wedding Films That Capture Feeling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/portfolio"
              className="bg-gold hover:bg-darkGold text-black px-8 py-4 rounded-sm font-serif font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
            >
              <Play className="w-5 h-5" />
              <span>Watch Films</span>
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-sm font-serif font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Floating animation element */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Latest Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-cream mb-6">
              Recent Love Stories
            </h2>
            <p className="text-xl font-serif text-gray-300 max-w-2xl mx-auto">
              Each wedding is a unique chapter in your love story. Here are some of our latest cinematic creations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioSamples.map((sample, index) => (
              <div key={sample.id} className={`group cursor-pointer animate-slide-up transform transition-all duration-300 hover:scale-105`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                  <img 
                    src={sample.thumbnail}
                    alt={`${sample.couple} wedding`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-cream mb-2 group-hover:text-gold transition-colors">
                  {sample.couple}
                </h3>
                <p className="font-serif text-gray-300 mb-1">{sample.description}</p>
                <p className="font-serif text-gold text-sm">{sample.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-semibold text-cream mb-16">
            What Our Couples Say
          </h2>
          
          <div className="relative">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-serif text-gray-200 leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <cite className="text-gold font-display font-semibold text-lg">
              {testimonials[currentTestimonial].author}
              <span className="block text-gray-400 font-serif text-base font-normal">
                {testimonials[currentTestimonial].location}
              </span>
            </cite>

            <div className="flex justify-center space-x-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 text-gold hover:text-cream transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 text-gold hover:text-cream transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Artist Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding videographer at work"
                className="w-full h-96 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="animate-slide-up lg:pl-8" style={{animationDelay: '0.2s'}}>
              <h2 className="text-4xl font-display font-semibold text-cream mb-6">
                Meet the Artist
              </h2>
              <p className="text-lg font-serif text-gray-300 leading-relaxed mb-6">
                Every love story deserves to be told with the artistry and emotion it contains. 
                I believe that wedding films should be more than just documentation—they should be 
                cinematic masterpieces that transport you back to the feeling of your wedding day 
                every time you watch them.
              </p>
              <p className="text-lg font-serif text-gray-300 leading-relaxed mb-8">
                With over a decade of experience crafting wedding films, I combine technical 
                expertise with an artist's eye to create films that are as unique as your love story.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center text-gold hover:text-cream font-serif font-semibold transition-all duration-300 hover:translate-x-2"
              >
                Learn More About My Approach
                <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;