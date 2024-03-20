import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div
          className="backdrop-blur h-screen w-screen top-0 absolute z-40 grid place-items-center"
        >
          <div className="min-h-[200px] min-w-[50%] p-4 bg-white z-50 relative m-auto">
            <div className="flex justify-end ">
              <AiOutlineClose
                onClick={onClose}
                className="text-2xl cursor-pointer"
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
