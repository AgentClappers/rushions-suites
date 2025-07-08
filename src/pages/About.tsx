
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Award, Clock, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Clock },
    { number: "500+", label: "Happy Guests Monthly", icon: Users },
    { number: "25", label: "Awards Won", icon: Award },
    { number: "4.9", label: "Average Rating", icon: Star }
  ];

  const team = [
    {
      name: "Victoria Rushion",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Visionary leader with over 20 years in luxury hospitality"
    },
    {
      name: "James Morrison",
      role: "General Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert in premium guest services and hotel operations"
    },
    {
      name: "Sophie Chen",
      role: "Head of Concierge",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Dedicated to creating unforgettable guest experiences"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passionate Service",
      description: "Every team member is committed to exceeding your expectations with genuine care and attention."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your safety and privacy are our top priorities, with 24/7 security and comprehensive safety protocols."
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "We maintain the highest standards in every aspect of our service, from housekeeping to dining."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-emerald-800">Rushion's Suites</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-emerald-700 transition-colors">Home</Link>
              <Link to="/rooms" className="text-gray-700 hover:text-emerald-700 transition-colors">Rooms</Link>
              <Link to="/about" className="text-emerald-700 font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-700 transition-colors">Contact</Link>
              <Link to="/login" className="text-gray-700 hover:text-emerald-700 transition-colors">Sign In</Link>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Book Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-emerald-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Story of <span className="text-yellow-400">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            For over 15 years, Rushion's Suites has been synonymous with unparalleled luxury, 
            exceptional service, and unforgettable experiences in the heart of the city.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-emerald-700" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-6">
                The Rushion Legacy
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009 by Victoria Rushion, Rushion's Suites began as a vision to redefine 
                  luxury hospitality. What started as a boutique hotel with just 20 rooms has grown 
                  into one of the city's most prestigious destinations.
                </p>
                <p>
                  Our commitment to excellence is reflected in every detail, from our meticulously 
                  designed interiors to our world-class amenities. We believe that true luxury lies 
                  not just in opulent surroundings, but in the warmth of genuine hospitality and 
                  the creation of lasting memories.
                </p>
                <p>
                  Today, Rushion's Suites stands as a testament to our unwavering dedication to 
                  providing guests with an extraordinary experience that exceeds expectations at 
                  every turn.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Rushion's Suites lobby"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-emerald-800 p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape every guest experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-emerald-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind the Rushion's Suites experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold text-emerald-800 mb-1">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-emerald-800 mb-2">Best Luxury Hotel 2023</h3>
              <p className="text-gray-600 text-sm">Travel Excellence Awards</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-emerald-800 mb-2">5-Star Service Rating</h3>
              <p className="text-gray-600 text-sm">Hospitality Standards Board</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <Heart className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-emerald-800 mb-2">Guest Favorite 2023</h3>
              <p className="text-gray-600 text-sm">Travelers' Choice Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Experience the Rushion Difference
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied guests who have made Rushion's Suites their home away from home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg">
              Book Your Stay
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
