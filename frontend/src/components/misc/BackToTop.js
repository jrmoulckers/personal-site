import React from "react";
import "./BackToTop.scss";
import { MdArrowUpward } from "react-icons/md";

function BackToTop(props) {
  return (
    <div
      className={`top-button-container circle flex 
      ${props.visible ? "visible" : "hidden"}
      `}
    >
      <MdArrowUpward className="top-arrow" />
    </div>
  );
}

export default BackToTop;
