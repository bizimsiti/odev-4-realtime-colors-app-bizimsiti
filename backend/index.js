const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("", (req, res) => {
  res.end("selamlar");
});
io.on("connection", (socket) => {
  console.log("user connected");
});
http.listen(4000, () => {
  console.log("listening on *:4000");
});
