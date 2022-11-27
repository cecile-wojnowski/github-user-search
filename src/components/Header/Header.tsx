import React from "react";

import Typography from "components/Typography";

// Use something else than style
export default function Header() {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <Typography content="Github search" />
    </div>
  );
}
