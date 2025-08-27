import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: Props) {
  return (
    <button
      {...rest}
      style={{
        padding: "8px 12px",
        borderRadius: 6,
        border: "1px solid #ccc",
        background: rest.disabled ? "#eee" : "#fafafa",
        cursor: rest.disabled ? "not-allowed" : "pointer"
      }}
    >
      {children}
    </button>
  );
}
