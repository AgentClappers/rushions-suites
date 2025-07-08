
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Calendar, CreditCard, Settings, Bell, MapPin, Star, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const [user] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    memberSince: "March 2022",
    loyaltyLevel: "Gold Member",
    points: 2850
  });

  const upcomingBookings = [
    {
      id: "RS-2024-001",
      roomName: "Presidential Suite",
      roomImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      checkIn: "2024-08-15",
      checkOut: "2024-08-18",
      nights: 3,
      guests: 2,
      totalAmount: 2697,
      status: "Confirmed"
    },
    {
      id: "RS-2024-002",
      roomName: "Ocean View Deluxe",
      roomImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      checkIn: "2024-09-20",
      checkOut: "2024-09-22",
      nights: 2,
      guests: 2,
      totalAmount: 1098,
      status: "Confirmed"
    }
  ];

  const pastBookings = [
    {
      id: "RS-2023-045",
      roomName: "Royal Garden Suite",
      roomImage: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      checkIn: "2023-12-20",
      checkOut: "2023-12-23",
      nights: 3,
      guests: 3,
      totalAmount: 2097,
      status: "Completed",
      rating: 5
    },
    {
      id: "RS-2023-032",
      roomName: "Executive Suite",
      roomImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      checkIn: "2023-08-10",
      checkOut: "2023-08-12",
      nights: 2,
      guests: 2,
      totalAmount: 1198,
      status: "Completed",
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Check-in':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
              <Link to="/rooms" className="text-gray-700 hover:text-emerald-700 transition-colors">Rooms</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-700 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-700 transition-colors">Contact</Link>
              <Link to="/dashboard" className="text-emerald-700 font-medium">Dashboard</Link>
              <Button variant="outline" size="sm">Sign Out</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Header */}
      <section className="bg-emerald-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-2">Welcome back, {user.name}</h1>
              <p className="text-xl opacity-90">Manage your reservations and account settings</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <Badge className="bg-yellow-500 text-emerald-800 text-lg px-4 py-2 mb-2">
                {user.loyaltyLevel}
              </Badge>
              <p className="text-sm opacity-75">Member since {user.memberSince}</p>
              <p className="text-sm opacity-75">{user.points} loyalty points</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="bookings" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Bookings</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span>Payments</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-emerald-700 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-800">{upcomingBookings.length}</div>
                  <div className="text-sm text-gray-600">Upcoming Stays</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-800">{pastBookings.length}</div>
                  <div className="text-sm text-gray-600">Past Stays</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-800">{user.points}</div>
                  <div className="text-sm text-gray-600">Loyalty Points</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <User className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-800">{user.loyaltyLevel.split(' ')[0]}</div>
                  <div className="text-sm text-gray-600">Member Level</div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Bookings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Reservations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row gap-4">
                          <img 
                            src={booking.roomImage} 
                            alt={booking.roomName}
                            className="w-full md:w-32 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-bold text-emerald-800 text-lg">{booking.roomName}</h3>
                                <p className="text-gray-600">Booking ID: {booking.id}</p>
                              </div>
                              <Badge className={getStatusColor(booking.status)}>
                                {booking.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">Check-in</p>
                                <p className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Check-out</p>
                                <p className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Guests</p>
                                <p className="font-medium">{booking.guests} guest{booking.guests > 1 ? 's' : ''}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Total</p>
                                <p className="font-bold text-emerald-700">${booking.totalAmount}</p>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button size="sm" variant="outline">View Details</Button>
                              <Button size="sm" variant="outline">Modify</Button>
                              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">Cancel</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No upcoming reservations</p>
                    <Link to="/rooms">
                      <Button className="mt-4 bg-emerald-700 hover:bg-emerald-800 text-white">
                        Book Your Stay
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Past Bookings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Past Stays</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img 
                          src={booking.roomImage} 
                          alt={booking.roomName}
                          className="w-full md:w-32 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-emerald-800 text-lg">{booking.roomName}</h3>
                              <p className="text-gray-600">Booking ID: {booking.id}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={getStatusColor(booking.status)}>
                                {booking.status}
                              </Badge>
                              {booking.rating && (
                                <div className="flex items-center">
                                  {[...Array(booking.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Check-in</p>
                              <p className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Check-out</p>
                              <p className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Guests</p>
                              <p className="font-medium">{booking.guests} guest{booking.guests > 1 ? 's' : ''}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Total</p>
                              <p className="font-bold text-emerald-700">${booking.totalAmount}</p>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" variant="outline">View Receipt</Button>
                            <Button size="sm" variant="outline">Book Again</Button>
                            {!booking.rating && (
                              <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                                Rate Stay
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={user.name}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <input 
                        type="email" 
                        value={user.email}
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                        readOnly
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <input 
                        type="tel" 
                        value={user.phone}
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                        readOnly
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Loyalty Program</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-800">{user.loyaltyLevel}</h3>
                    <p className="text-gray-600">Member since {user.memberSince}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Current Points</span>
                      <span className="font-bold text-emerald-700">{user.points}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Next Level</span>
                      <span className="font-medium">Platinum (5,000 pts)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-600 h-2 rounded-full" 
                        style={{ width: `${(user.points / 5000) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500">
                      {5000 - user.points} points to reach Platinum level
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-emerald-800 mb-2">Gold Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 15% discount on all bookings</li>
                      <li>• Priority room upgrades</li>
                      <li>• Free breakfast</li>
                      <li>• Late checkout</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Methods</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-2 rounded">
                        <CreditCard className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/25</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Primary</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    Add New Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">Presidential Suite - 3 nights</p>
                      <p className="text-sm text-gray-500">Dec 20-23, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">$2,097</p>
                      <p className="text-sm text-green-600">Paid</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">Executive Suite - 2 nights</p>
                      <p className="text-sm text-gray-500">Aug 10-12, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">$1,198</p>
                      <p className="text-sm text-green-600">Paid</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">Booking confirmations and updates</p>
                    </div>
                    <input type="checkbox" className="rounded" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-gray-500">Check-in reminders and alerts</p>
                    </div>
                    <input type="checkbox" className="rounded" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Emails</p>
                      <p className="text-sm text-gray-500">Special offers and promotions</p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Download My Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
