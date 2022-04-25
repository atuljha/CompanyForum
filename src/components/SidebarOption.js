import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon,onClick }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2 onClick={onClick}>{text}</h2>
    </div>
  );
}

export default SidebarOption;
