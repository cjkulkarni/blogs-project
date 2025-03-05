import app from "./server/app";
import { config } from "./server/config/config";
import connectDB from "./server/config/db";

const startServer = async() => {
    
    const port = config.port || 3000;
    await connectDB();
    app.listen(port, () => {
        console.log(`server running on port: ${port}`);
    });
};


startServer();