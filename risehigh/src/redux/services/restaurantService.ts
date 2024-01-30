import { RestaurantTypes } from "@/types/restaurant";
import axios from "axios";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const restaurantService = {
  createRestaurantBooking: async (bookingData: RestaurantTypes): Promise<RestaurantTypes> => {
    try {
      const response = await axios.post(`${baseApi}/booking/restaurant`, bookingData);
      console.log("Booking response:", response.data);
      return response.data;
    } catch (error:any) {
      console.error("Failed to book restaurant:", error.message);
      throw new Error(`Failed to book restaurant: ${error.message}`);
    }
  },

  getRestaurant: async (): Promise<RestaurantTypes[]> => {
    try {
      const response = await axios.get(`${baseApi}/booking/restaurant`);
      console.log("All restaurants:", response.data);
      return response.data.data.data.booking;
    } catch (error:any) {
      console.error("Failed to get all restaurants:", error.message);
      throw new Error(`Failed to get all restaurants: ${error.message}`);
    }
  },
};

// export default restaurantService;

export default restaurantService;
