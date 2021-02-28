
var events = require("events");
var localEvents = new events.EventEmitter();
const config = require("./Config/config");
var arrg = {
    localEvents,
    config
}

var { logger } = require("./logger/index")(arrg);
arrg.logger = logger;
require('./Controller/controllers')(arrg);