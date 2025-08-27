import React from "react";

interface Props {
  onSearch: (value: string) => void;
  debounceMs?: number;
}

export default function TextInput({ onSearch, debounceMs = 300 }: Props) {
  const [value, setValue] = React.useState("");
  const timer = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      onSearch(v);
    }, debounceMs);
  };

  const clear = () => {
    setValue("");
    if (timer.current) window.clearTimeout(timer.current);
    onSearch("");
  };

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        value={value}
        onChange={onChange}
        style={{ marginLeft: 8 }}
        aria-label="Search"
      />
      {value && (
        <button onClick={clear} aria-label="Clear">
          ×
        </button>
      )}
    </div>
  );
}
