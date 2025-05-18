import { WebSocketServer } from "ws";
import { IncomingMessage, Server, ServerResponse } from "http";

export default class SocketServer {
  private wss: WebSocketServer;
  private static _instance: SocketServer;

  private constructor(
    server: Server<typeof IncomingMessage, typeof ServerResponse>
  ) {
    this.wss = new WebSocketServer({ server });
    this.handleConnection();
  }

  public static getInstance(
    server: Server<typeof IncomingMessage, typeof ServerResponse>
  ) {
    if (!this._instance) {
      this._instance = new SocketServer(server);
    }

    return this._instance;
  }

  private handleConnection() {
    this.wss.on("connection", (ws, req) => {
      console.log("connection established!");
    });
  }
}
