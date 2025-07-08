
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export interface Room {
  id: string;
  name: string;
  description: string;
  price_per_night: number;
  max_guests: number;
  room_type: string;
  amenities: string[];
  images: string[];
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

export const useRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRooms = async () => {
    try {
      const { data, error } = await supabase
        .from('rooms')
        .select('*')
        .eq('is_available', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRooms(data || []);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      toast({
        title: "Error",
        description: "Failed to load rooms. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();

    // Set up real-time subscription for room availability
    const subscription = supabase
      .channel('rooms-changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'rooms'
      }, (payload) => {
        console.log('Room availability changed:', payload);
        fetchRooms(); // Refresh rooms when changes occur
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return { rooms, loading, refetch: fetchRooms };
};
