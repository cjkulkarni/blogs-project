import app from "./backend/app";
import { config } from "./backend/config/config";
import connectDB from "./backend/config/db";

const startServer = async() => {
    
    const port = config.port || 3000;
    await connectDB();
    app.listen(port, () => {
        console.log(`server running on port: ${port}`);
    });
};


startServer();