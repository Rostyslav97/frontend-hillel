import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const MainLayout = () => (
    <div>
        <NavigationBar />
        <main style={{ padding: "1rem" }}>
            <Outlet />
        </main>
    </div>
);

export default MainLayout;
