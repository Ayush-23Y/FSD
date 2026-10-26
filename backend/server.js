
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));

app.get("/", (req, res) => {
    res.json({ message: "Secure REST API is running" });
});

app.use("/api/problems", require("./routes/problemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(require("./middleware/errorMiddleware"));

io.on("connection", (socket) => {
    console.log("A client connected");

    socket.on("chatMessage", (data) => {
        io.emit("chatMessage", data);
    });

    socket.on("disconnect", () => {
        console.log("A client disconnected");
    });
});

const PORT = process.env.PORT || 5005;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => console.log("MongoDB connection failed:", error.message));
