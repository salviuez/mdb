const os = require("os");

console.log("Free memory in GB: ", os.freemem() / 1024 / 1024 / 1024);
console.log("Total memory in GB:", os.totalmem() / 1024 / 1024 / 1024)
console.log("version os OS:", os.version());
console.log("CPU:", os.cpus());