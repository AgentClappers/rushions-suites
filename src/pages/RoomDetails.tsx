
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Users, Wifi, Coffee, Tv, Bath, Car, MapPin, Calendar, ArrowLeft, Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RoomDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  // Mock room data - in real app, this would come from your database
  const room = {
    id: parseInt(id || '1'),
    name: "Presidential Suite",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    price: 899,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 127,
    description: "Experience the pinnacle of luxury in our Presidential Suite. This magnificent accommodation features panoramic city views, marble bathrooms, and personal butler service. The suite includes a separate living area, dining space, and a master bedroom with premium linens.",
    maxGuests: 4,
    size: "120 sqm",
    bedrooms: 2,
    bathrooms: 2,
    type: "Presidential Suite",
    amenities: [
      "Free High-Speed WiFi",
      "24/7 Room Service", 
      "Smart TV with Premium Channels",
      "Marble Bathroom with Jacuzzi",
      "Personal Butler Service",
      "Panoramic City View",
      "Separate Living Area",
      "Premium Mini Bar",
      "Work Desk",
      "Safe Box",
      "Air Conditioning",
      "Daily Housekeeping"
    ],
    features: [
      "King Size Bed with Premium Linens",
      "Separate Living and Dining Area",
      "Floor-to-Ceiling Windows",
      "Marble Bathroom with Rain Shower",
      "Walk-in Closet",
      "Complimentary Breakfast"
    ],
    available: true,
    discount: 18,
    location: "Floor 25-30, Premium Tower"
  };

  const relatedRooms = [
    {
      id: 2,
      name: "Executive Ocean View",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 549,
      rating: 4.8
    },
    {
      id: 3,
      name: "Royal Garden Suite",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: 699,
      rating: 4.9
    }
  ];

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 1;
  };

  const totalPrice = room.price * calculateNights();
  const savings = room.originalPrice ? (room.originalPrice - room.price) * calculateNights() : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-emerald-800">Rushion's Suites</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-emerald-700 transition-colors">Home</Link>
              <Link to="/rooms" className="text-gray-700 hover:text-emerald-700 transition-colors">Rooms</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-700 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-700 transition-colors">Contact</Link>
              <Link to="/login" className="text-gray-700 hover:text-emerald-700 transition-colors">Sign In</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <Link to="/rooms" className="hover:text-emerald-700">Rooms</Link>
          <span>/</span>
          <span className="text-emerald-700">{room.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <Link to="/rooms">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Rooms</span>
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-2">{room.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{room.rating}</span>
                <span className="text-gray-500">({room.reviews} reviews)</span>
              </div>
              <Badge className="bg-emerald-100 text-emerald-800">
                <MapPin className="h-3 w-3 mr-1" />
                {room.location}
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4 lg:mt-0">
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
          <div className="lg:col-span-3">
            <img 
              src={room.images[selectedImage]} 
              alt={room.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-1 gap-2">
            {room.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${room.name} view ${index + 1}`}
                className={`w-full h-20 lg:h-24 object-cover rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedImage === index ? 'ring-2 ring-emerald-500' : 'hover:opacity-80'
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Room Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-emerald-800 mb-4">About This Suite</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{room.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-emerald-700 mx-auto mb-2" />
                  <div className="text-sm font-medium">{room.maxGuests} Guests</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-emerald-700 mb-1">{room.bedrooms}</div>
                  <div className="text-sm font-medium">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bath className="h-6 w-6 text-emerald-700 mx-auto mb-2" />
                  <div className="text-sm font-medium">{room.bathrooms} Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-emerald-700 mb-1">{room.size}</div>
                  <div className="text-sm font-medium">Size</div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="text-xl font-serif font-bold text-emerald-800 mb-4">Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-serif font-bold text-emerald-800 mb-4">Premium Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-xl border-2 border-emerald-100">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-emerald-700">${room.price}</span>
                      {room.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">${room.originalPrice}</span>
                      )}
                    </div>
                    {room.discount && (
                      <Badge className="bg-yellow-500 text-white">
                        Save {room.discount}%
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-500">per night</p>
                </div>

                {/* Booking Form */}
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                      <input 
                        type="date" 
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                      <input 
                        type="date" 
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <select 
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {[...Array(room.maxGuests)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Guest{i + 1 > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price Breakdown */}
                {checkIn && checkOut && (
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">${room.price} x {calculateNights()} night{calculateNights() > 1 ? 's' : ''}</span>
                      <span className="font-medium">${room.price * calculateNights()}</span>
                    </div>
                    {savings > 0 && (
                      <div className="flex justify-between items-center mb-2 text-green-600">
                        <span>Discount savings</span>
                        <span>-${savings}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                      <span>Service fee</span>
                      <span>$50</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span>Taxes</span>
                      <span>${Math.round(totalPrice * 0.12)}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between items-center font-bold text-lg">
                      <span>Total</span>
                      <span>${totalPrice + 50 + Math.round(totalPrice * 0.12)}</span>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 text-lg font-semibold"
                  disabled={!checkIn || !checkOut}
                >
                  {checkIn && checkOut ? 'Book Now' : 'Select Dates'}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Free cancellation until 24 hours before check-in
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Rooms */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedRooms.map((relatedRoom) => (
              <Card key={relatedRoom.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="flex">
                  <img 
                    src={relatedRoom.image} 
                    alt={relatedRoom.name}
                    className="w-32 h-32 object-cover rounded-l-lg"
                  />
                  <CardContent className="p-4 flex-1">
                    <h3 className="font-serif font-bold text-emerald-800 mb-2">{relatedRoom.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{relatedRoom.rating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-emerald-700">${relatedRoom.price}/night</span>
                      <Link to={`/room/${relatedRoom.id}`}>
                        <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
