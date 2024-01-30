import React, { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="bg-white font-roboto">
      <Provider store={store}>
        <Header />
        {children}
        <Footer />
      </Provider>
    </div>
  );
};

export default LayoutWrapper;
