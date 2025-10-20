import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../templates/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import TaskDetail from "../pages/TaskDetail";

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="task/:id" element={<TaskDetail />} />
            <Route path="about" element={<About />} />
        </Route>
    </Routes>
);

export default AppRouter;
