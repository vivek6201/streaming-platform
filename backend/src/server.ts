import "dotenv/config";
import express from "express"
import cors from "cors"
import {createServer} from "http";
import SocketServer from "./services/socket-server";
import routes from "./routes"

const app = express();
const httpServer = createServer(app);
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/v1", routes);

SocketServer.getInstance(httpServer);

httpServer.listen(port, () => {
    console.log("server is up at:", port);
})