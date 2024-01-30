import { BookingTypes, OverviewTypes, RoomPrice } from "@/types/booking";
import axios from "axios";
import { toast } from "react-toastify";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const bookingService = {
  createBooking: async (bookingData: BookingTypes): Promise<BookingTypes> => {
    const response = await axios.post(`${baseApi}/booking`, bookingData);
    return response.data;
  },

  verifyPayment: async (referenceNum: string): Promise<any> => {
    try {
      const response = await axios.get(`${baseApi}/booking/verify-payment/${referenceNum}`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to verify payment: ${error.message}`);
    }
  },

  getAllBookings: async (): Promise<BookingTypes> => {
    const response = await axios.get(`${baseApi}/booking`);
    console.log("server response:", response);
    return response.data;
  },

  getOverview: async (): Promise<OverviewTypes> => {
    const response = await axios.get(`${baseApi}/booking/analytics`);
    console.log("overview response:", response);
    return response.data.data.data;
  },

  deleteBooking: async (bookingId: string): Promise<void> => {
    try {
      const response = await axios.delete(`${baseApi}/booking/${bookingId}`);
    } catch (error: any) {
      throw new Error(`Failed to delete booking: ${error.message}`);
    }
  },

  updateBookingStatus: async (bookingId: string, bookingData: BookingTypes): Promise<void> => {
    try {
      const response = await axios.patch(`${baseApi}/booking/${bookingId}/status`, bookingData);
      toast.success(response.data.message);
      console.log(response, "bookstatus");
    } catch (error: any) {
      console.log('Faled to update booking');
      throw new Error(`Failed to delete booking: ${error.message}`);
      
    }
  },

  setRoomPrice: async (data: RoomPrice): Promise<RoomPrice> => {
    try {
      const response = await axios.post(`${baseApi}/booking/room-prices`, data);
      toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to set room price: ${error.message}`);
    }
  },

  updateRoomPrice: async (data: RoomPrice): Promise<RoomPrice> => {
    try {
      const response = await axios.patch(`${baseApi}/booking/room-prices/luxury`, data);
      console.log("updatePrice:", response);
      toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to update room price: ${error.message}`);
    }
  },
};

export default bookingService;
