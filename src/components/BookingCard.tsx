
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, CreditCard } from 'lucide-react';
import { Booking } from '@/hooks/useBookings';

interface BookingCardProps {
  booking: Booking;
}

const BookingCard = ({ booking }: BookingCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-serif text-emerald-800">
              {booking.rooms?.name || 'Room'}
            </CardTitle>
            <p className="text-sm text-gray-600 capitalize">
              {booking.rooms?.room_type || 'Standard Room'}
            </p>
          </div>
          <Badge className={getStatusColor(booking.status)}>
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {booking.rooms?.images && booking.rooms.images.length > 0 && (
          <img
            src={booking.rooms.images[0]}
            alt={booking.rooms.name}
            className="w-full h-32 object-cover rounded-lg"
          />
        )}

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-emerald-600" />
            <div>
              <p className="font-medium">Check-in</p>
              <p className="text-gray-600">{formatDate(booking.check_in)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-emerald-600" />
            <div>
              <p className="font-medium">Check-out</p>
              <p className="text-gray-600">{formatDate(booking.check_out)}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-emerald-600" />
            <span className="text-sm">{booking.guests} guest{booking.guests !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4 text-emerald-600" />
            <span className="font-semibold text-emerald-800">${booking.total_amount}</span>
          </div>
        </div>

        {booking.status === 'pending' && (
          <div className="pt-2">
            <Button variant="outline" className="w-full">
              Cancel Booking
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingCard;
