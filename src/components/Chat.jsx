
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export default function Chat() {
    const socketRef = useRef(null);
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const socket = io("https://codearc-backend.onrender.com");
        socketRef.current = socket;

        socket.on("connect", () => setConnected(true));
        socket.on("disconnect", () => setConnected(false));
        socket.on("chatMessage", data => {
            setMessages(previous => [...previous, data]);
        });

        return () => socket.disconnect();
    }, []);

    const sendMessage = event => {
        event.preventDefault();

        if (!username.trim() || !message.trim()) return;

        socketRef.current.emit("chatMessage", {
            username: username.trim(),
            message: message.trim()
        });

        setMessage("");
    };

    const inputStyle = {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "15px",
        width: "100%",
        boxSizing: "border-box"
    };

    const buttonStyle = {
        padding: "10px 18px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    };

    return (
        <div style={{
            maxWidth: "600px",
            margin: "40px auto",
            padding: "25px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px #ddd",
            fontFamily: "Arial, sans-serif"
        }}>
            <h2 style={{ textAlign: "center" }}>
                Real-Time Chat Application
            </h2>

            <p style={{
                textAlign: "center",
                color: connected ? "green" : "red"
            }}>
                {connected ? "Connected" : "Connecting..."}
            </p>

            <input
                style={inputStyle}
                placeholder="Enter your name"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <div style={{
                height: "300px",
                overflowY: "auto",
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "10px",
                margin: "15px 0"
            }}>
                {messages.map((item, index) => (
                    <p key={index}>
                        <strong>{item.username}:</strong> {item.message}
                    </p>
                ))}
            </div>

            <form
                onSubmit={sendMessage}
                style={{ display: "flex", gap: "10px" }}
            >
                <input
                    style={inputStyle}
                    placeholder="Type a message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button style={buttonStyle} type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}
