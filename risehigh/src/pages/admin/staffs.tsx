import StaffDetails from "@/components/AdminDashboard/Staffs/StaffDetails";
import StaffHead from "@/components/AdminDashboard/Staffs/StaffHead";
import Layout from "@/components/Layout";
import { getAllAdmin } from "@/redux/slices/adminSlice";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Staffs() {
  const dispatch = useDispatch();
  const staffs = useSelector((state: RootState) => state.admin.admins);
  const loading = useSelector((state: RootState) => state.admin.loading);

  console.log("all staffs:", staffs);

  useEffect(() => {
    dispatch(getAllAdmin() as any);
  }, [dispatch]);
  return (
    <Layout customClass="px-6">
      <StaffHead />
      <StaffDetails staffs={staffs} />
    </Layout>
  );
}

Staffs.getAdmin = function pageLayout(page: React.ReactNode) {
  return <div className="bg-[#F5F5F5] font-outfit w-full h-screen min-h-screen">{page}</div>;
};
