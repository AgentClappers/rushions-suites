
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Users, MapPin, Star, Wifi, Coffee, Car, Waves, Dumbbell, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const featuredRooms = [
    {
      id: 1,
      name: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: 899,
      rating: 4.9,
      description: "Luxurious presidential suite with panoramic city views"
    },
    {
      id: 2,
      name: "Executive Ocean View",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: 549,
      rating: 4.8,
      description: "Elegant room with stunning ocean views and premium amenities"
    },
    {
      id: 3,
      name: "Royal Garden Suite",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: 699,
      rating: 4.9,
      description: "Spacious suite overlooking our private botanical gardens"
    }
  ];

  const amenities = [
    { icon: Wifi, name: "Premium WiFi", description: "High-speed internet throughout" },
    { icon: Coffee, name: "24/7 Room Service", description: "Gourmet dining anytime" },
    { icon: Car, name: "Valet Parking", description: "Complimentary for all guests" },
    { icon: Waves, name: "Infinity Pool", description: "Rooftop pool with city views" },
    { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art equipment" },
    { icon: Utensils, name: "Fine Dining", description: "Michelin-starred restaurant" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely magnificent! The service was impeccable and the suite was beyond our expectations.",
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Rushion's Suites redefined luxury for us. Every detail was perfect.",
      location: "San Francisco, CA"
    },
    {
      name: "Emma Williams",
      rating: 5,
      comment: "The most beautiful hotel experience we've ever had. We'll definitely be back!",
      location: "Los Angeles, CA"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-emerald-800">Rushion's Suites</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-emerald-700 transition-colors">Home</Link>
              <Link to="/rooms" className="text-gray-700 hover:text-emerald-700 transition-colors">Rooms</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-700 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-700 transition-colors">Contact</Link>
              <Link to="/login" className="text-gray-700 hover:text-emerald-700 transition-colors">Sign In</Link>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Book Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-yellow-400">Rushion's Suites</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Experience unparalleled luxury and sophistication in the heart of the city
          </p>
          
          {/* Quick Search Bar */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <CalendarDays className="h-5 w-5 text-emerald-700" />
                <div>
                  <label className="block text-sm font-medium">Check-in</label>
                  <input type="date" className="w-full border-none outline-none bg-transparent" />
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CalendarDays className="h-5 w-5 text-emerald-700" />
                <div>
                  <label className="block text-sm font-medium">Check-out</label>
                  <input type="date" className="w-full border-none outline-none bg-transparent" />
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Users className="h-5 w-5 text-emerald-700" />
                <div>
                  <label className="block text-sm font-medium">Guests</label>
                  <select className="w-full border-none outline-none bg-transparent">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white h-12">
                Check Availability
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg">
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg">
              Explore Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-4">
              Featured Accommodations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after suites, each designed to provide the ultimate in luxury and comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <Card key={room.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{room.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-emerald-700">${room.price}</span>
                      <span className="text-gray-500">/night</span>
                    </div>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/rooms">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every detail has been carefully curated to exceed your expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors">
                  <amenity.icon className="h-10 w-10 text-emerald-700" />
                </div>
                <h3 className="text-xl font-serif font-bold text-emerald-800 mb-2">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-4">
              Guest Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what our distinguished guests say about their experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-emerald-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your stay at Rushion's Suites and indulge in an unforgettable experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Rushion's Suites</h3>
              <p className="text-gray-400">
                Experience luxury redefined in the heart of the city
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/rooms" className="block text-gray-400 hover:text-white transition-colors">Rooms</Link>
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Room Service</p>
                <p className="text-gray-400">Concierge</p>
                <p className="text-gray-400">Valet Parking</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Luxury Avenue</p>
                <p>New York, NY 10001</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rushion's Suites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
