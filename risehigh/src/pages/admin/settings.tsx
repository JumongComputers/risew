import SettingHead from "@/components/AdminDashboard/Settings/SettingHead";
import Settings from "@/components/AdminDashboard/Settings/Settings";
import Layout from "@/components/Layout";

export default function settings() {
  return (
    <Layout>
      <SettingHead />
      <Settings />
    </Layout>
  );
}

settings.getAdmin = function pageLayout(page: React.ReactNode) {
  return <div className="bg-[#F5F5F5] font-outfit w-full h-screen min-h-screen">{page}</div>;
};
