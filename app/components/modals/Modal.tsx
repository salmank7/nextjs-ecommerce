"use client";

import { useState, useEffect, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;

  title: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) return null;

  return (
    <>
      {/* how to hide this shadow or this whole sections after modal closes  */}
      <div className={`fixed inset-0 h-screen w-full bg-gray-900/80 z-20`}>
        <div className="flex items-end justify-end">
          {/* modal */}
          <div
            className={`h-screen border w-[80%] sm:w-[60%] md:w-[340px] transition translate duration-300
             ${showModal ? "translate-x-0" : "translate-x-full"} ${
              showModal ? "opacity-100" : "opacity-0"
            }
            `}
          >
            <div className="flex flex-col items-center h-full w-full bg-white shadow-md">
              {/* header */}
              <div className="flex items-center justify-between w-full py-[25px] uppercase text-md bg-[#CCCCCC]">
                <div className="flex-1"></div>
                <div>{title}</div>
                <button
                  onClick={handleClose}
                  className="flex-1 flex justify-end"
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>
              {/* body */}
              <div className="relative py-4 px-4 w-full">{body}</div>
              <div className="w-full px-4">
                <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </div>
              {/* footer */}
              <div className="mt-4 w-full px-4">{footer}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
