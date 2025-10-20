import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("active");

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const found = tasks.find(t => t.id === Number(id));
        if (found) {
            setTask(found);
            setTitle(found.title);
            setDescription(found.description);
            setStatus(found.status);
        }
    }, [id]);

    const saveChanges = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.map(t =>
            t.id === task.id ? { ...t, title, description, status } : t
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        navigate("/");
    };

    if (!task) return <div>Task not found</div>;

    return (
        <div>
            <h1>Task Details</h1>
            <div>
                <label>
                    Title: <input value={title} onChange={e => setTitle(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Description: <input value={description} onChange={e => setDescription(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Status:
                    <select value={status} onChange={e => setStatus(e.target.value)}>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </label>
            </div>
            <div>Created At: {new Date(task.createdAt).toLocaleString()}</div>
            <button onClick={saveChanges}>Save</button>
            <button onClick={() => navigate("/")}>Back to list</button>
        </div>
    );
};

export default TaskDetail;
