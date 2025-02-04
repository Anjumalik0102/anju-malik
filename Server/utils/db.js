const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connection successful!");
    } catch (error) {
        console.log("Connection failed:", error.message);
        process.exit(1); // Exit with failure code
    }
};

module.exports = connectDb;
