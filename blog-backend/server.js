const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const categoryRoutes = require("./routes/category.routes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/categories", categoryRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB bağlantısı uğurlu"))
  .catch((err) => console.error("Mongo xətası:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT}-də işləyir`));
