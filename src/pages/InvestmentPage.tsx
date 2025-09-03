import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Heart, Star, Crown } from 'lucide-react';

const InvestmentPage = () => {
  const packages = [
    {
      name: "The Heirloom Collection",
      icon: <Heart className="w-8 h-8" />,
      price: "Starting at $2,500",
      description: "Perfect for intimate celebrations and elopements",
      features: [
        "4 hours of wedding day coverage",
        "Professionally edited 3-4 minute highlight film",
        "Online private gallery for viewing and sharing",
        "High-resolution digital delivery",
        "Personal consultation and planning session"
      ],
      popular: false
    },
    {
      name: "The Legacy Film",
      icon: <Star className="w-8 h-8" />,
      price: "Starting at $4,200",
      description: "Our most popular package for full-day celebrations",
      features: [
        "8 hours of comprehensive wedding coverage",
        "Cinematic 4-6 minute highlight film",
        "15-20 minute ceremony edit with full vows",
        "Online private gallery with mobile app",
        "USB drive with all edited content",
        "Two rounds of revisions included",
        "Engagement session (optional add-on)"
      ],
      popular: true
    },
    {
      name: "The Timeless Story",
      icon: <Crown className="w-8 h-8" />,
      price: "Starting at $6,800",
      description: "Ultimate luxury experience with complete coverage",
      features: [
        "12 hours of unlimited wedding coverage",
        "Feature-length 45-60 minute documentary film",
        "Cinematic 5-7 minute highlight reel",
        "Full ceremony and reception coverage",
        "Same-day preview teaser (24-hour delivery)",
        "Custom USB in elegant packaging",
        "Online gallery with unlimited downloads",
        "Complimentary engagement session",
        "Optional drone footage (where permitted)"
      ],
      popular: false
    }
  ];

  const addOns = [
    "Engagement Session - $650",
    "Additional Hour of Coverage - $350/hour",
    "Drone Footage - $450",
    "Same-Day Edit Preview - $750",
    "Raw Footage Archive - $450",
    "Rush Delivery (2 weeks) - $650"
  ];

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-cream mb-6">
            Investment in Your
            <span className="text-gold block">Love Story</span>
          </h1>
          <p className="text-xl font-serif text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Every package is thoughtfully crafted to preserve your wedding day with cinematic artistry. 
            Your investment includes not just filming, but a complete storytelling experience tailored to your unique celebration.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
               className={`relative bg-black/50 border rounded-lg p-8 animate-slide-up transform transition-all duration-300 hover:scale-105 ${
                  pkg.popular 
                   ? 'border-gold shadow-gold/20 shadow-lg hover:shadow-gold/30' 
                   : 'border-gray-800 hover:border-gold/30'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-black px-6 py-2 rounded-full font-serif font-semibold text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="text-gold mb-4 flex justify-center">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-cream mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-display font-bold text-gold mb-2">
                    {pkg.price}
                  </p>
                  <p className="font-serif text-gray-400">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-serif text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact"
                 className={`block w-full text-center py-3 px-6 rounded-sm font-serif font-semibold transition-all duration-300 hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gold hover:bg-darkGold text-black'
                      : 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  Let's Discuss This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-semibold text-cream text-center mb-8">
            Enhance Your Experience
          </h2>
          <p className="text-xl font-serif text-gray-300 text-center mb-12 leading-relaxed">
            Customize your package with these additional services to create the perfect wedding film experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addOn, index) => (
              <div 
                key={index}
               className="bg-charcoal p-6 rounded-lg border border-gray-800 flex items-center space-x-4 animate-fade-in transform transition-all duration-300 hover:scale-105 hover:border-gold/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-serif text-gray-300">
                  {addOn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-semibold text-cream mb-6">
            Every Wedding is Unique
          </h2>
          <p className="text-xl font-serif text-gray-300 leading-relaxed mb-8">
            These packages are starting points for our conversation. I believe every wedding deserves a 
            customized approach, and I'm happy to create a bespoke package that perfectly fits your vision, 
            timeline, and budget. Multi-day celebrations, destination weddings, and unique venue requirements 
            are all welcome.
          </p>
          
          <div className="bg-black/50 border border-gold/30 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-display font-semibold text-gold mb-4">
              What's Always Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-serif text-gray-300">Pre-wedding consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-serif text-gray-300">Timeline planning assistance</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-serif text-gray-300">Professional color grading</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-serif text-gray-300">Custom music licensing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-serif text-gray-300">Online viewing gallery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-serif text-gray-300">Lifetime cloud storage</span>
              </div>
            </div>
          </div>

          <Link 
            to="/contact"
           className="bg-gold hover:bg-darkGold text-black px-8 py-4 rounded-sm font-serif font-semibold transition-all duration-300 inline-block hover:scale-105 hover:shadow-lg"
          >
            Let's Discuss Your Perfect Package
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-semibold text-cream mb-8">
            Questions? I'm Here to Help
          </h2>
          <p className="text-lg font-serif text-gray-300 leading-relaxed mb-8">
            Every couple has unique needs and questions about their wedding film investment. 
            I'm happy to discuss payment plans, timeline expectations, travel requirements, 
            and any special requests you might have.
          </p>
          <div className="text-gold font-serif">
            <p className="mb-2">Typical response time: Within 24 hours</p>
            <p>Complimentary consultations available via phone, video call, or in-person</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentPage;