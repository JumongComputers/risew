import { ReactNode } from "react";
import { useRouter } from "next/router";

interface LogoutModelProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const LogoutModel: React.FC<LogoutModelProps> = ({ visible, onClose, children }) => {
  const router = useRouter();

  if (!visible) return null;

  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  const logout = async () => {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("role");
    router.push("/");
  };

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center" id="container" onClick={handleClose}>
      <div className="w-full max-w-lg   ">
        <div className="bg-white p-8 rounded-md shadow-lg  ">
          {children}
          <div className="flex justify-between px-12 pt-20 items-center">
            <button onClick={() => onClose()} className="bg-white border py-3 px-12 border-[#0D60D8] rounded-md ">
              <span className="text-[#676869]  ">No</span>
            </button>
            <button onClick={logout} className="bg-[#0D60D8] rounded-md py-3 px-12 text-white">
              <span className="text-white">Yes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModel;
