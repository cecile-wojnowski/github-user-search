import React from "react";

export default function IconButton({ icon, onClick }: any) {
  const deleteIcon = require("assets/icons/delete.svg").default;
  const duplicateIcon = require("assets/icons/duplicate.svg").default;

  // TODO : must be improved
  return (
    <>
      <button
        onClick={onClick}
        style={{ border: "none", backgroundColor: "white" }}
      >
        <img
          src={icon === "delete" ? deleteIcon : duplicateIcon}
          alt="icon"
          style={{ width: "40px" }}
        />
      </button>
    </>
  );
}
