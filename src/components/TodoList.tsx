import React from "react";

type Todo = { id: number; text: string; completed: boolean };

export default function TodoList() {
  const [todos, setTodos] = React.useState<Todo[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const controller = React.useRef<AbortController | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    controller.current?.abort();
    controller.current = new AbortController();
    try {
      const res = await fetch("/api/todos", { signal: controller.current.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Todo[] = await res.json();
      setTodos(data);
    } catch (e: any) {
      setError(e.message || "Failed");
      setTodos(null);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => { load(); }, []);

  if (loading && !todos) return <div aria-live="polite">Loading…</div>;
  if (error) {
    return (
      <div role="alert">
        Failed to load. <button onClick={load}>Retry</button>
      </div>
    );
  }
  if (!todos || todos.length === 0) {
    return (
      <div>
        <div>No todos</div>
        <button onClick={load}>Refresh</button>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} readOnly /> {t.text}
          </li>
        ))}
      </ul>
      <button onClick={load}>Refresh</button>
    </div>
  );
}
