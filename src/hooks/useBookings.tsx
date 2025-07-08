
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from '@/hooks/use-toast';

export interface Booking {
  id: string;
  user_id: string;
  room_id: string;
  check_in: string;
  check_out: string;
  guests: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  created_at: string;
  updated_at: string;
  rooms?: {
    name: string;
    room_type: string;
    images: string[];
  };
}

export const useBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await (supabase as any)
        .from('bookings')
        .select(`
          *,
          rooms (
            name,
            room_type,
            images
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast({
        title: "Error",
        description: "Failed to load bookings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createBooking = async (roomId: string, checkIn: string, checkOut: string, guests: number, totalAmount: number) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to make a booking.",
        variant: "destructive",
      });
      return { error: new Error('User not authenticated') };
    }

    try {
      const { data, error } = await (supabase as any)
        .from('bookings')
        .insert({
          user_id: user.id,
          room_id: roomId,
          check_in: checkIn,
          check_out: checkOut,
          guests,
          total_amount: totalAmount,
          status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Booking Created",
        description: "Your booking has been successfully created and is pending confirmation.",
      });

      fetchBookings(); // Refresh bookings
      return { data, error: null };
    } catch (error: any) {
      console.error('Error creating booking:', error);
      toast({
        title: "Booking Failed",
        description: error.message || "Failed to create booking. Please try again.",
        variant: "destructive",
      });
      return { error };
    }
  };

  useEffect(() => {
    fetchBookings();

    if (user) {
      // Set up real-time subscription for user's bookings
      const subscription = (supabase as any)
        .channel('user-bookings')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'bookings',
          filter: `user_id=eq.${user.id}`
        }, (payload: any) => {
          console.log('Booking changed:', payload);
          fetchBookings(); // Refresh bookings when changes occur
        })
        .subscribe();

      return () => {
        supabase.removeChannel(subscription);
      };
    }
  }, [user]);

  return { bookings, loading, createBooking, refetch: fetchBookings };
};
