const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

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

const PORT = process.env.PORT || 5005;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => console.log("MongoDB connection failed:", error.message));