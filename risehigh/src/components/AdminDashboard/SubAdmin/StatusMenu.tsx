import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import DeclineStatusModal from "../Modals/DeclineStatusModal";
import VerifyStatusModal from "../Modals/VerifyStatusModal";
import { ChevronDown } from "lucide-react";

interface StatusMenuProps {
  id: string;
}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

const StatusMenu: React.FC<StatusMenuProps> = ({ id }) => {
  const [showModel, setShowModel] = useState(false);
  const [showVerify, setShowVerify] = useState(false);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="text-[#001F1D]">
            <ChevronDown className="w-5 h-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -left-16 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 text-center">
              <Menu.Item>
                <button
                  onClick={() => setShowVerify(true)}
                  className={classNames("block px-6 py-1 text-lg text-[#0D60D8] font-[DM Sans] font-bold  ")}
                >
                  Verified
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setShowModel(true)}
                  className={classNames("block px-6 py-1 text-lg text-[#FF0000] font-[DM Sans] font-bold  ")}
                >
                  Declined
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <DeclineStatusModal id={id} visible={showModel} onClose={() => setShowModel(false)}>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-[#19202C] font-bold text-3xl ">Account Verification</h1>
          <p className="text-[#676869] font-normal text-2xl ">Are you sure you want to decline this account?</p>
        </div>
      </DeclineStatusModal>
      <VerifyStatusModal id={id} isVisible={showVerify} onClose={() => setShowVerify(false)}>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-[#19202C] font-bold text-3xl ">Account Verification</h1>
          <p className="text-[#676869] font-normal text-2xl ">Are you sure you want to verify this account?</p>
        </div>
      </VerifyStatusModal>
    </>
  );
};

export default StatusMenu;
