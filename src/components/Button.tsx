// import React from "react";

// type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

// export default function Button({ children, ...rest }: Props) {
//   return (
//     <button
//       {...rest}
//       style={{
//         padding: "8px 12px",
//         borderRadius: 6,
//         border: "1px solid #ccc",
//         background: rest.disabled ? "#eee" : "#fafafa",
//         cursor: rest.disabled ? "not-allowed" : "pointer"
//       }}
//     >
//       {children}
//     </button>
//   );
// }

import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  ...rest
}: ButtonProps) {
  const pad = { sm: "4px 8px", md: "8px 12px", lg: "10px 26px" }[size];
  const bg = variant === "primary" ? "#bc0c0cff" : "#e5e7eb";
  const color = variant === "primary" ? "white" : "black";

  return (
    <button
      {...rest}
      style={{ padding: pad, background: bg, color, borderRadius: 6 }}
    >
      {children}
    </button>
  );
}
