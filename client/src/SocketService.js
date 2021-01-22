import { io } from "socket.io-client";

let socket;

export const initSocket = () => {
  socket = io("http://localhost:4000", {
    transports: ["websocket"],
  });
  console.log("connecting...");
  socket.on("connect", () => console.log("connected"));
};

export const disconnectSocket = () => {
  console.log("disconnecting...");
  if (socket) socket.disconnect();
};

export const sendColor = (color) => {
  if (socket) socket.emit("new-color", color);
};
export const recieveColor = (cb) => {
  if (!socket) return true;
  socket.on("recieve-color", (color) => {
    console.log("backenden gelen color", color);
    cb(color);
  });
};
