import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES: any = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

const OVERLAY_STYLES: any = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }: any) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div
        className="w-full md:w-[48rem] lg:w-[58rem] h-auto sm:h-[35rem] p-0 sm:p-10 bg-stone-800"
        style={MODAL_STYLES}
      >
        <button
          className="text-white font-bold text-xl absolute top-0 right-2 hidden sm:block"
          onClick={onClose}
        >
          &#10005;
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")!
  );
}
