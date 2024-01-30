export interface AdminDashboard {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  roomType: string;
  roomNum: string;
  status: string;
}

export interface AddAdminTypes {
  _id?: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  status?: string;
}
