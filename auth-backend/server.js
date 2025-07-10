require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const rateLimitMiddleware = require("./middlewares/rateLimit");
const authRoutes = require("./routes/authRoutes");

const app = express();


app.use(cors());
app.use(express.json());
app.use(rateLimitMiddleware);


connectDB();


app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
