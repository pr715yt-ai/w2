import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Camera, Award, Coffee } from 'lucide-react';

const AboutPage = () => {
  const funFacts = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Coffee Enthusiast",
      description: "I've filmed in over 15 countries and still think the best coffee is from the local café near my studio."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Hopeless Romantic",
      description: "I cry at every wedding—not just from behind the camera, but watching the films afterward too."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Detail Obsessed",
      description: "I once spent three hours perfecting a 5-second sunset sequence because the light wasn't quite right."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winner",
      description: "My work has been featured in top wedding publications, but my favorite reviews are handwritten thank-you notes."
    }
  ];

  const testimonials = [
    {
      text: "From our first consultation to the final delivery, working with this incredible artist was seamless. They captured our personalities perfectly and created a film that truly represents who we are as a couple.",
      author: "Jennifer & Thomas",
      location: "Martha's Vineyard",
      image: "https://images.pexels.com/photos/1124724/pexels-photo-1124724.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      text: "The attention to detail was extraordinary. Every meaningful glance, every tear of joy, every burst of laughter was captured with such artistry. Our families still talk about how beautiful our wedding film is.",
      author: "Priya & Daniel",
      location: "Sonoma County",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding videographer in action"
               className="w-full h-96 lg:h-[500px] object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
           <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-cream mb-6">
                The Artist Behind
                <span className="text-gold block">The Lens</span>
              </h1>
              <p className="text-xl font-serif text-gray-300 leading-relaxed mb-8">
                I believe that every wedding is a masterpiece waiting to be captured, and every couple has a unique story that deserves to be told with cinematic artistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-semibold text-cream mb-8">
            My Approach to Your Story
          </h2>
          <div className="space-y-6 text-lg font-serif text-gray-300 leading-relaxed">
            <p>
              For over a decade, I've had the privilege of documenting love stories around the world. 
              What started as a passion for storytelling has evolved into a deep commitment to creating 
              wedding films that are as unique and beautiful as the couples I work with.
            </p>
            <p>
              My approach is rooted in authenticity and artistry. I don't just document your wedding day—I 
              craft a cinematic experience that captures the emotions, the details, and the magical moments 
              that make your story uniquely yours. Every film is hand-edited with meticulous attention to 
              detail, ensuring that your wedding film becomes a treasured heirloom.
            </p>
            <p>
              I believe in being unobtrusive yet present, capturing candid moments while also creating 
              beautifully composed scenes. My goal is for you to feel completely comfortable and natural, 
              allowing your genuine emotions and personalities to shine through in every frame.
            </p>
            <p>
              When you watch your wedding film, I want you to be transported back to that day—to feel 
              the same butterflies, hear the same laughter, and experience the same overwhelming joy. 
              That's the power of cinematic storytelling, and that's what I bring to every wedding I film.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-semibold text-cream text-center mb-16">
            Getting to Know Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {funFacts.map((fact, index) => (
              <div 
                key={index}
                className="bg-black/50 p-8 rounded-lg border border-gray-800 animate-slide-up transform transition-all duration-300 hover:scale-105 hover:border-gold/30"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    {fact.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-cream mb-3">
                      {fact.title}
                    </h3>
                    <p className="font-serif text-gray-300 leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-semibold text-cream text-center mb-16">
            Words from Wonderful Couples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-slide-up transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="bg-charcoal p-8 rounded-lg border border-transparent hover:border-gold/20 transition-colors duration-300">
                  <blockquote className="text-lg font-serif text-gray-300 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <cite className="text-gold font-display font-semibold">
                        {testimonial.author}
                      </cite>
                      <p className="text-gray-400 font-serif text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-semibold text-cream mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl font-serif text-gray-300 mb-8 leading-relaxed">
            I'd love to learn about your wedding and discuss how we can create a cinematic 
            masterpiece that captures the essence of your love story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gold hover:bg-darkGold text-black px-8 py-4 rounded-sm font-serif font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start the Conversation
            </Link>
            <Link 
              to="/portfolio"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-sm font-serif font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
            >
              <span>View My Work</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;