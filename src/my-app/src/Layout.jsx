import React from "react";

class Layout extends React.Component {
    render() {
        const containerStyle = {
            display: "flex",
            height: "100vh",
            fontFamily: "Arial, sans-serif",
        };

        const sidebarStyle = {
            width: "200px",
            backgroundColor: "#f0f0f0",
            padding: "1rem",
        };

        const mainStyle = {
            flex: 1,
            padding: "1rem",
            backgroundColor: "#fff",
        };

        const headerStyle = {
            height: "60px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
            fontSize: "1.2rem",
        };

        return (
            <div>
                {/* Header */}
                <div style={headerStyle}>Header</div>

                {/* Main container */}
                <div style={containerStyle}>
                    {/* Left sidebar */}
                    <div style={sidebarStyle}>
                        <p>Navigation 1</p>
                        <p>Navigation 2</p>
                        <p>Navigation 3</p>
                    </div>

                    {/* Central content */}
                    <div style={mainStyle}>
                        <h2>Main Content</h2>
                        <p>This is the central container. Put whatever you want here!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
