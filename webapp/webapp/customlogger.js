var log4js = require("log4js");

log4js.configure({
    appenders: { monitor: {type:"file", filename: "/home/ubuntu/webapp/webapp/webapp/monitor.log"}},
    categories:{default: {appenders: ["monitor"], level:"info"}}
});

const logger = log4js.getLogger("monitor");
module.exports = logger;
