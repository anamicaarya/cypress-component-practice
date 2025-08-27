import React from "react";

interface Props {
  open: boolean;
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ open, title, onClose, children }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const focusable = ref.current?.querySelector<HTMLElement>("[data-autofocus]");
    focusable?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        display: "grid",
        placeItems: "center"
      }}
    >
      <div
        ref={ref}
        style={{ background: "white", padding: 16, minWidth: 280, borderRadius: 8 }}
      >
        <h3 id="modal-title">{title}</h3>
        <div>{children}</div>
        <div style={{ marginTop: 12 }}>
          <button onClick={onClose} data-autofocus>Close</button>
        </div>
      </div>
    </div>
  );
}
