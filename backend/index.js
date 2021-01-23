const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("", (req, res) => {
  res.end("server is running");
});
io.on("connection", (socket) => {
  socket.on("new-color", (color) => {
    console.log(color);
    socket.broadcast.emit("recieve-color", color);
  });

  socket.on("disconnect", () => console.log("user disconnected"));
});
http.listen(process.env.PORT || 4000, () => {
  console.log("listening on *:4000");
});
