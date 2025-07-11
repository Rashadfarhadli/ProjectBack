const app = require("./app");
const connectDB = require("./src/config/dbConfig");
require('dotenv').config
const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server running on PORT ${PORT}`);
});

