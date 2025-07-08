
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Wifi, Coffee, Tv, Bath, Car, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Rooms = () => {
  const [priceRange, setPriceRange] = useState('all');
  const [roomType, setRoomType] = useState('all');
  const [amenityFilter, setAmenityFilter] = useState('all');

  const rooms = [
    {
      id: 1,
      name: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: 899,
      originalPrice: 1099,
      rating: 4.9,
      reviews: 127,
      description: "The epitome of luxury with panoramic city views, marble bathrooms, and personal butler service.",
      maxGuests: 4,
      size: "120 sqm",
      type: "suite",
      amenities: ["Free WiFi", "Room Service", "Smart TV", "Marble Bathroom", "Butler Service", "City View"],
      available: true,
      discount: 18
    },
    {
      id: 2,
      name: "Executive Ocean View",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: 549,
      originalPrice: 649,
      rating: 4.8,
      reviews: 89,
      description: "Elegant room with stunning ocean views and premium amenities for the discerning traveler.",
      maxGuests: 2,
      size: "75 sqm",
      type: "deluxe",
      amenities: ["Free WiFi", "Ocean View", "Smart TV", "Premium Bathroom", "Mini Bar"],
      available: true,
      discount: 15
    },
    {
      id: 3,
      name: "Royal Garden Suite",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: 699,
      originalPrice: 799,
      rating: 4.9,
      reviews: 156,
      description: "Spacious suite overlooking our private botanical gardens with separate living area.",
      maxGuests: 3,
      size: "95 sqm",
      type: "suite",
      amenities: ["Free WiFi", "Garden View", "Smart TV", "Separate Living Area", "Premium Bathroom"],
      available: true,
      discount: 12
    },
    {
      id: 4,
      name: "Classic Luxury Room",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: 399,
      originalPrice: 449,
      rating: 4.7,
      reviews: 203,
      description: "Comfortable and elegant accommodation with modern amenities and classic design.",
      maxGuests: 2,
      size: "50 sqm",
      type: "standard",
      amenities: ["Free WiFi", "Smart TV", "Modern Bathroom", "Work Desk"],
      available: true,
      discount: 11
    },
    {
      id: 5,
      name: "Penthouse Paradise",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: 1299,
      originalPrice: 1499,
      rating: 5.0,
      reviews: 45,
      description: "Ultimate luxury penthouse with private terrace, jacuzzi, and 360-degree city views.",
      maxGuests: 6,
      size: "200 sqm",
      type: "penthouse",
      amenities: ["Free WiFi", "Private Terrace", "Jacuzzi", "360° Views", "Full Kitchen", "Butler Service"],
      available: false,
      discount: 13
    },
    {
      id: 6,
      name: "Business Executive",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: 459,
      originalPrice: 529,
      rating: 4.6,
      reviews: 134,
      description: "Perfect for business travelers with dedicated workspace and premium business amenities.",
      maxGuests: 2,
      size: "60 sqm",
      type: "business",
      amenities: ["Free WiFi", "Work Desk", "Business Center Access", "Smart TV", "Coffee Machine"],
      available: true,
      discount: 13
    }
  ];

  const filteredRooms = rooms.filter(room => {
    if (priceRange !== 'all') {
      if (priceRange === 'under500' && room.price >= 500) return false;
      if (priceRange === '500-800' && (room.price < 500 || room.price > 800)) return false;
      if (priceRange === 'over800' && room.price <= 800) return false;
    }
    if (roomType !== 'all' && room.type !== roomType) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-emerald-800">Rushion's Suites</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-emerald-700 transition-colors">Home</Link>
              <Link to="/rooms" className="text-emerald-700 font-medium">Rooms</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-700 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-700 transition-colors">Contact</Link>
              <Link to="/login" className="text-gray-700 hover:text-emerald-700 transition-colors">Sign In</Link>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Book Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Luxury Accommodations</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Choose from our carefully curated selection of premium rooms and suites
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-emerald-700" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-600">Price Range:</label>
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Prices</option>
                <option value="under500">Under $500</option>
                <option value="500-800">$500 - $800</option>
                <option value="over800">Over $800</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-600">Room Type:</label>
              <select 
                value={roomType} 
                onChange={(e) => setRoomType(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Types</option>
                <option value="standard">Standard</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
                <option value="penthouse">Penthouse</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div className="ml-auto">
              <span className="text-sm text-gray-600">
                {filteredRooms.length} room{filteredRooms.length !== 1 ? 's' : ''} available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Availability Badge */}
                  <div className="absolute top-4 left-4">
                    {room.available ? (
                      <Badge className="bg-green-500 text-white">Available</Badge>
                    ) : (
                      <Badge className="bg-red-500 text-white">Booked</Badge>
                    )}
                  </div>

                  {/* Discount Badge */}
                  {room.discount && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                      -{room.discount}%
                    </div>
                  )}

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{room.rating}</span>
                      <span className="text-xs text-gray-500">({room.reviews})</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-emerald-800">{room.name}</h3>
                    <div className="flex items-center text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">{room.maxGuests}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <span>{room.size}</span>
                    <span>•</span>
                    <span className="capitalize">{room.type}</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{room.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-emerald-700">${room.price}</span>
                        {room.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">${room.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-gray-500 text-sm">per night</span>
                    </div>
                    <Link to={`/room/${room.id}`}>
                      <Button 
                        className={`${
                          room.available 
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!room.available}
                      >
                        {room.available ? 'View Details' : 'Unavailable'}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRooms.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-serif font-bold text-gray-600 mb-4">No rooms match your criteria</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters to see more options</p>
              <Button 
                onClick={() => {
                  setPriceRange('all');
                  setRoomType('all');
                  setAmenityFilter('all');
                }}
                className="bg-emerald-700 hover:bg-emerald-800 text-white"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Our concierge team is here to help you find the perfect accommodation
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4">
            Contact Concierge
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
