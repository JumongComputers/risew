import { deleteAdmin } from "@/redux/slices/adminSlice";
import React from "react";
import { useDispatch } from "react-redux";

interface DeleteUserModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  id: string;
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({ visible, onClose, children, id }) => {
  const dispatch = useDispatch();

  if (!visible) return null;

  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  const adminDelete = (e: React.MouseEvent) => {
    e.preventDefault();

    dispatch(deleteAdmin(id) as any);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20  flex justify-center items-center" id="container" onClick={handleClose}>
      <div className="w-full max-w-lg">
        <div className="bg-white p-8 rounded-md shadow-lg">
          {children}
          <div className="flex justify-between px-12 pt-20 items-center">
            <button onClick={() => onClose()} className="bg-white border py-3 px-12 border-[#D80D0D] rounded-md">
              <span className="text-[#676869] text-lg">No</span>
            </button>
            <button onClick={adminDelete} className="bg-[#D80D0D] rounded-md py-3 px-12">
              <span className="text-white text-lg">Yes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
