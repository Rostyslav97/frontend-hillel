import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    const saveTasks = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    const addTask = () => {
        if (!title) return;
        const newTask = {
            id: Date.now(),
            title,
            description,
            status: "active",
            createdAt: new Date().toISOString()
        };
        saveTasks([newTask, ...tasks]);
        setTitle("");
        setDescription("");
    };

    const toggleStatus = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id
                ? { ...task, status: task.status === "active" ? "completed" : "active" }
                : task
        );
        saveTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        saveTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Todo Manager</h1>
            <div style={{ marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>

            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{ marginBottom: "0.5rem" }}>
                        <strong>{task.title}</strong> - {task.status} <br />
                        <button onClick={() => toggleStatus(task.id)}>
                            {task.status === "active" ? "Mark Completed" : "Mark Active"}
                        </button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                        <Link to={`/task/${task.id}`} style={{ marginLeft: "1rem" }}>
                            Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
