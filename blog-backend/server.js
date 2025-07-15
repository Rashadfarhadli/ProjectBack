const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); 

const categoryRoutes = require("./routes/category.routes");
const userRoutes = require("./routes/User.routes");  
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();


app.use(cors());


app.use(express.json());


app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB bağlantısı uğurlu"))
  .catch((err) => console.error("Mongo xətası:", err.message));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT}-də işləyir`));
