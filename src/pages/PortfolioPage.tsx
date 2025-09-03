import React, { useState } from 'react';
import { Play, X, Filter } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const portfolioFilms = [
    {
      id: 1,
      couple: 'Sarah & Michael',
      location: 'Napa Valley, CA',
      description: 'A romantic vineyard celebration filled with golden hour magic',
      thumbnail: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'vineyard',
      season: 'fall'
    },
    {
      id: 2,
      couple: 'Emma & James',
      location: 'Big Sur, CA',
      description: 'Coastal cliffs and endless love overlooking the Pacific',
      thumbnail: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'coastal',
      season: 'summer'
    },
    {
      id: 3,
      couple: 'Isabella & David',
      location: 'Tuscany, Italy',
      description: 'Italian countryside romance with timeless elegance',
      thumbnail: 'https://images.pexels.com/photos/1467557/pexels-photo-1467557.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'destination',
      season: 'spring'
    },
    {
      id: 4,
      couple: 'Maya & Alex',
      location: 'Aspen, CO',
      description: 'Mountain peaks and winter wonderland romance',
      thumbnail: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mountain',
      season: 'winter'
    },
    {
      id: 5,
      couple: 'Sophia & Ryan',
      location: 'Charleston, SC',
      description: 'Southern charm meets modern elegance in historic gardens',
      thumbnail: 'https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'garden',
      season: 'spring'
    },
    {
      id: 6,
      couple: 'Lily & Marcus',
      location: 'Maui, Hawaii',
      description: 'Tropical paradise and barefoot beach vows at sunset',
      thumbnail: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'beach',
      season: 'summer'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Films' },
    { value: 'vineyard', label: 'Vineyard' },
    { value: 'coastal', label: 'Coastal' },
    { value: 'destination', label: 'Destination' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'garden', label: 'Garden' },
    { value: 'beach', label: 'Beach' }
  ];

  const filteredFilms = filter === 'all' 
    ? portfolioFilms 
    : portfolioFilms.filter(film => film.category === filter);

  const openModal = (id: number) => {
    setSelectedVideo(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-cream mb-6">
            Wedding Films
          </h1>
          <p className="text-xl font-serif text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Each film is a unique cinematic journey, carefully crafted to capture the essence of your love story. 
            From intimate moments to grand celebrations, every frame tells a part of your unforgettable day.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-gold mb-4">
              <Filter className="w-5 h-5" />
              <span className="font-serif">Filter by Style:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  className={`px-4 py-2 rounded-full font-serif transition-all duration-300 transform hover:scale-105 ${
                    filter === option.value
                      ? 'bg-gold text-black'
                      : 'border border-gray-600 text-gray-300 hover:border-gold hover:text-gold'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFilms.map((film, index) => (
              <div 
                key={film.id} 
                className="group cursor-pointer animate-fade-in transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(film.id)}
              >
                <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                  <img 
                    src={film.thumbnail}
                    alt={`${film.couple} wedding film`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-gold/90 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <Play className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-semibold text-cream group-hover:text-gold transition-colors">
                    {film.couple}
                  </h3>
                  <p className="font-serif text-gray-300 leading-relaxed">
                    {film.description}
                  </p>
                  <p className="font-serif text-gold text-sm font-semibold">
                    {film.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-fade-in">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-all duration-300 hover:scale-110"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center animate-scale-in">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 text-gold" />
                <p className="font-serif text-lg">Video Player Placeholder</p>
                <p className="font-serif text-sm text-gray-400 mt-2">
                  Replace with actual video player implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;