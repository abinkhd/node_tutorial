const EventEmitter = require("events");
const customEmitter = new EventEmitter();
customEmitter.on("getData", () => {
  console.log("Getting data");
});

customEmitter.on("response", () => {
  console.log("Response");
});
customEmitter.emit("getData");
