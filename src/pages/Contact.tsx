
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, Car, Coffee, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Luxury Avenue", "New York, NY 10001", "United States"],
      color: "text-emerald-700"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@rushionssuites.com", "reservations@rushionssuites.com"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["24/7 Front Desk", "Concierge: 6 AM - 11 PM"],
      color: "text-yellow-600"
    }
  ];

  const services = [
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary valet service for all guests"
    },
    {
      icon: Coffee,
      title: "24/7 Room Service",
      description: "Gourmet dining available around the clock"
    },
    {
      icon: Wifi,
      title: "Premium WiFi",
      description: "High-speed internet throughout the property"
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
              <Link to="/about" className="text-gray-700 hover:text-emerald-700 transition-colors">About</Link>
              <Link to="/contact" className="text-emerald-700 font-medium">Contact</Link>
              <Link to="/login" className="text-gray-700 hover:text-emerald-700 transition-colors">Sign In</Link>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Book Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            We're here to assist you 24/7. Reach out to our dedicated team for reservations, 
            inquiries, or any assistance you may need.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full"
                    placeholder="Please provide details about your inquiry..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 text-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-4">
                  Visit Us
                </h2>
                <p className="text-gray-600 text-lg">
                  Located in the heart of Manhattan, Rushion's Suites offers easy access to the city's finest attractions.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-emerald-700 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Luxury Avenue, New York, NY</p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-6">
                  Additional Services
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <service.icon className="h-6 w-6 text-emerald-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-1">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">
            Emergency Contact
          </h2>
          <p className="text-lg text-red-700 mb-6">
            For urgent matters or emergencies, please contact our 24/7 emergency hotline:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-6 w-6 text-red-600" />
              <span className="text-2xl font-bold text-red-800">+1 (555) 911-HELP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-6 w-6 text-red-600" />
              <span className="text-lg text-red-700">emergency@rushionssuites.com</span>
            </div>
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
            Don't wait - book your stay at Rushion's Suites today and discover what makes us special
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg">
              Call Us: +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
