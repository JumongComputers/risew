import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../services/adminService";
import { AddAdminTypes } from "@/types/admin";
import { toast } from "react-toastify";

interface AdminState {
  admins: AddAdminTypes[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AdminState = {
  admins: [],
  loading: "idle",
  error: null,
};

// Async thunk for adding a new admin
export const addAdmin = createAsyncThunk("admin/addAdmin", async (adminData: AddAdminTypes, thunkAPI) => {
  try {
    const response = await adminService.addAdmin(adminData);
    return response;
  } catch (error) {
    console.error("Error adding admin:", error);
    throw error;
  }
});

// Async thunk for getting all admins
export const getAllAdmin = createAsyncThunk("admin/getAllAdmin", async (_, thunkAPI) => {
  try {
    const response = await adminService.getAllAdmin();
    return response;
  } catch (error) {
    console.error("Error getting all admins:", error);
    throw error;
  }
});

// Async thunk for updating an admin
export const updateAdmin = createAsyncThunk(
  "admin/updateAdmin",
  async ({ adminId, updatedAdminData }: { adminId: string; updatedAdminData: Partial<AddAdminTypes> }, thunkAPI) => {
    try {
      const response = await adminService.updateAdmin(adminId, updatedAdminData);
      return response;
    } catch (error) {
      console.error("Error updating admin:", error);
      throw error;
    }
  }
);

// Async thunk for deleting an admin
export const deleteAdmin = createAsyncThunk("admin/deleteAdmin", async (adminId: string, thunkAPI) => {
  try {
    await adminService.deleteAdmin(adminId);
    return adminId; // Return the adminId so you can remove it from the state
  } catch (error) {
    console.error("Error deleting admin:", error);
    throw error;
  }
});

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addAdmin.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.admins = [action.payload];
        toast.success("Staff added");
      })
      .addCase(addAdmin.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
        toast.error("Failed to add staff");
      })

      .addCase(getAllAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllAdmin.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.admins = action.payload;
      })
      .addCase(getAllAdmin.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
      })

      .addCase(updateAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateAdmin.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const updatedAdmin = action.payload;
        // Update the state with the updated admin
        state.admins = state.admins.map((admin) => (admin._id === updatedAdmin._id ? { ...admin, ...updatedAdmin } : admin));
        toast.success("User Updated");
      })
      .addCase(updateAdmin.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
        toast.error("Failed to Update User");
      })

      .addCase(deleteAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteAdmin.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const deletedAdminId = action.payload;
        // Remove the deleted admin from the state
        state.admins = state.admins.filter((admin) => admin._id !== deletedAdminId);
        toast.success("User Deleted");
      })
      .addCase(deleteAdmin.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
        toast.error("Failed to Delete User");
      });
  },
});

export default adminSlice.reducer;
