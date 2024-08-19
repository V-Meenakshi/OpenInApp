import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [activeButton, setActiveButton] = useState("Dashboard");
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        { name: "Dashboard", icon: "icon-dashboard", path: "/" },
        { name: "Upload", icon: "icon-attendance", path: "/Upload" },
        { name: "Invoice", icon: "icon-marks", path: "/Invoice" },
        { name: "Schedule", icon: "icon-upload", path: "/Schedule" },
        { name: "Calendar", icon: "icon-assignment", path: "/Calendar" },
        { name: "Notification", icon: "icon-chat", path: "/Notification" },
        { name: "Settings", icon: "icon-leave", path: "/Settings" }
    ];

    const username = "Base";

    return (
        <div style={{ display: "flex" }}>
            {/* Hamburger Icon */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    cursor: "pointer",
                    padding: "10px",
                    backgroundColor: "black",
                    color: "white",
                }}
            >
                {/* Replace with an actual hamburger icon or a FontAwesome icon */}
                <i className="icon-hamburger" style={{ fontSize: "24px" }}>&#9776;</i>
            </div>

            {/* Sidebar */}
            <div
                style={{
                    width: isOpen ? "250px" : "0",
                    overflow: "hidden",
                    transition: "width 0.3s ease",
                    backgroundColor: "black",
                    padding: isOpen ? "20px" : "0",
                    color: "white",
                }}
            >
                {/* User Info Section */}
                {isOpen && (
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
                        <img
                            src="/base.jpg" // Replace with the actual path to the avatar image
                            alt="User Avatar"
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                marginRight: "15px",
                            }}
                        />
                        <h2 style={{ fontSize: "1.2rem", margin: 0 }}>{username}</h2>
                    </div>
                )}

                {/* Menu Items */}
                {isOpen && menuItems.map(item => (
                    <Link to={item.path} key={item.name} style={{ textDecoration: 'none' }}>
                        <button
                            onClick={() => setActiveButton(item.name)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 15px",
                                marginBottom: "10px",
                                backgroundColor: activeButton === item.name ? "#8e44ad" : "transparent",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                                width: "100%",
                                textAlign: "left"
                            }}
                        >
                            <i className={item.icon} style={{ marginRight: "10px" }}></i>
                            {item.name}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
