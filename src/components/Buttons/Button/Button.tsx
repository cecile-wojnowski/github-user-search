import React from "react";
import Typography from "components/Typography";

// Create a common type ?
type ButtonProps = { content: string };

export default function Button({ content }: ButtonProps) {
  return (
    <button>
      <Typography content={content} />
    </button>
  );
}
