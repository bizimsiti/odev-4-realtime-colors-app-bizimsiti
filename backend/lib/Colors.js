const redisClient = require("../redisClient");

class Colors {
  constructor() {
    this.client = redisClient.getClient();
  }

  upsert(color) {
    this.client.set("color-code", color);
  }
  list(cb) {
    this.client.get("color-code", (err, reply) => {
      console.log("reply from redis", reply);
      return cb(reply);
    });
  }
}
module.exports = new Colors();
