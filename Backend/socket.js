import { Server } from "socket.io";
import { verifyToken } from "@clerk/backend";
import dotenv from "dotenv";


dotenv.config();
let io = null;
const setupSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: process.env.ORIGIN,
        }
    })

    io.on("connection", async (socket) => {
      const {token, type} = socket.handshake.auth;
      let isConnected = true;
      const decoded = await verifyToken(token, {secretKey: process.env.CLERK_SECRET_KEY});
      const userId = decoded.sub;
      console.log(`User connected: ${userId}, Socket ID: ${socket.id}, Type: ${type}`);

      socket.on("disconnect", async () => {
          isConnected = false;
          console.log(`User disconnected: ${userId}, Socket ID: ${socket.id}`);
    });

   });

}

export { setupSocket, io };