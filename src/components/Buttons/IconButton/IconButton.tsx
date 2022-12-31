import React from "react";

import { IconButtonProps } from "components/Buttons/IconButton/IconButton.types";
import style from "components/Buttons/IconButton/style";

export default function IconButton({ icon, onClick }: IconButtonProps) {
  let iconFile = "";
  switch (icon) {
    case "delete":
      iconFile = require("assets/icons/delete.svg").default;
      break;
    case "duplicate":
      iconFile = require("assets/icons/duplicate.svg").default;
      break;
    default:
      console.log("Icon not found");
      break;
  }

  return (
    <>
      {iconFile ? (
        <button onClick={onClick} style={style}>
          <img src={iconFile} alt="icon" style={{ width: "40px" }} />
        </button>
      ) : null}
    </>
  );
}
