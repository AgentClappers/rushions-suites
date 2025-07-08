
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useBookings } from '@/hooks/useBookings';
import BookingCard from '@/components/BookingCard';
import ProtectedRoute from '@/components/ProtectedRoute';
import { LogOut, Home, Calendar, User } from 'lucide-react';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { bookings, loading } = useBookings();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <Link to="/" className="flex items-center space-x-2">
                  <Home className="h-6 w-6 text-emerald-700" />
                  <h1 className="text-2xl font-serif font-bold text-emerald-800">
                    Rushion's Suites
                  </h1>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {user?.email}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Welcome back!
            </h2>
            <p className="text-gray-600">
              Manage your bookings and explore our luxury accommodations.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Link to="/rooms" className="block">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-full">
                      <Calendar className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Book a Room</h3>
                      <p className="text-sm text-gray-600">Explore available rooms</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <User className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Profile</h3>
                    <p className="text-sm text-gray-600">Manage your account</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Link to="/contact" className="block">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Home className="h-6 w-6 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Support</h3>
                      <p className="text-sm text-gray-600">Get help when needed</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Bookings Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                Your Bookings
              </h3>
              <Link to="/rooms">
                <Button className="bg-emerald-700 hover:bg-emerald-800">
                  New Booking
                </Button>
              </Link>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <CardHeader>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32 bg-gray-200 rounded mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : bookings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    No bookings yet
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Start exploring our luxury rooms and make your first reservation.
                  </p>
                  <Link to="/rooms">
                    <Button className="bg-emerald-700 hover:bg-emerald-800">
                      Browse Rooms
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
