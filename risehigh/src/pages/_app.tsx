import AdminSidebar from "@/components/AdminDashboard/AdminSidebar/AdminSidebar";
import AdminLayout from "@/components/Layouts/AdminLayout";
import LayoutWrapper from "@/components/Layouts/LayoutWrapper";
import "@/styles/globals.css";
import axios from "axios";
import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define a type that extends NextComponentType
type ExtendedNextComponentType<P = {}> = NextComponentType & {
  getAdmin?: (page: P) => React.ReactNode;
  authAdmin?: (page: P) => React.ReactNode;
};
export default function App({ Component, pageProps }: AppProps) {
  // Check if the component is an admin page
  const isAdmin = (Component as ExtendedNextComponentType).getAdmin;

  // Check if the component is an auth page
  const isAdminAuth = (Component as ExtendedNextComponentType).authAdmin;

  let accessToken: any;
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("accessToken");
  }

  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  // toast("This is a custom toast Notification!", {
  //   position: toast.POSITION.TOP_CENTER,
  //   className: "toast-message",
  // });

  return (
    <div>
      {isAdmin ? (
        <AdminLayout>
          <AdminSidebar>
            <div className="bg-gray-100 min-h-screen">
              <Component {...pageProps} />
              <ToastContainer />
            </div>
          </AdminSidebar>
        </AdminLayout>
      ) : isAdminAuth ? (
        <AdminLayout>
          <div className="lg:bg-[#0D60D8]  h-screen">
            <Component {...pageProps} />
            <ToastContainer />
          </div>
        </AdminLayout>
      ) : (
        <LayoutWrapper>
          <Component {...pageProps} />
          <ToastContainer />
        </LayoutWrapper>
      )}
    </div>
  );
}
