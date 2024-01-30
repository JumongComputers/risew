import { store } from "@/redux/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default AdminLayout;
