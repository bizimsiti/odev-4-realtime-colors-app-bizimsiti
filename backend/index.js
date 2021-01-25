const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const Colors = require("./lib/Colors");

app.get("", (req, res) => {
  res.end("server is local running");
});

io.on("connection", (socket) => {
  Colors.list((data) => {
    socket.emit("color-data", data);
  });

  socket.on("new-color", (color) => {
    socket.broadcast.emit("recieve-color", color);
  });

  socket.on("disconnect", () => console.log("user disconnected"));
});

http.listen(process.env.PORT || 4000, () => {
  console.log("listening on *:4000");
});
