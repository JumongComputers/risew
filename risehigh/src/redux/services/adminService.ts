import axios from "axios";
import { AddAdminTypes } from "@/types/admin";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const adminService = {
  addAdmin: async (adminData: AddAdminTypes): Promise<AddAdminTypes> => {
    try {
      const response = await axios.post(`${baseApi}/users`, adminData);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to add admin: ${error.message}`);
    }
  },

  getAllAdmin: async (): Promise<any[]> => {
    try {
      const response = await axios.get(`${baseApi}/users`);
      console.log("all admin staffs:", response);
      return response.data.data.data;
    } catch (error: any) {
      throw new Error(`Failed to get all admins: ${error.message}`);
    }
  },

  updateAdmin: async (adminId: string, updatedAdminData: Partial<AddAdminTypes>): Promise<AddAdminTypes> => {
    try {
      const response = await axios.patch(`${baseApi}/users/${adminId}`, updatedAdminData);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to update admin: ${error.message}`);
    }
  },

  deleteAdmin: async (adminId: string): Promise<void> => {
    try {
      const response = await axios.delete(`${baseApi}/users/${adminId}`);
      console.log(`Admin with ID ${adminId} deleted successfully`);
    } catch (error: any) {
      throw new Error(`Failed to delete admin: ${error.message}`);
    }
  },
};

export default adminService;
