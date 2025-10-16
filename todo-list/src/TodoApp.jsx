import { useState } from "react";

export default function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Вивчити React", done: false },
        { id: 2, text: "Піти на пробіжку", done: true },
    ]);

    const [newTodo, setNewTodo] = useState("");

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const addTodo = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;

        const newTask = {
            id: Date.now(),
            text: newTodo.trim(),
            done: false,
        };

        setTodos([...todos, newTask]);
        setNewTodo("");
    };

    return (
        <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
            <h2>Мій список справ</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            cursor: "pointer",
                            textDecoration: todo.done ? "line-through" : "none",
                            margin: "6px 0",
                        }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>

            <form onSubmit={addTodo} style={{ marginTop: 20 }}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Нова тудушка..."
                    style={{ padding: "8px", width: "70%" }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "8px 12px",
                        marginLeft: "6px",
                        cursor: "pointer",
                    }}
                >
                    Додати
                </button>
            </form>
        </div>
    );
}
