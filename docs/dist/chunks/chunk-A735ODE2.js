// src/utils/logger.ts
var LOG_LEVEL_MAP = {
  ERROR: 0,
  WARNING: 1,
  DEBUG: 2,
  INFO: 3
};
var LEVEL_ERROR = LOG_LEVEL_MAP.ERROR;
var LEVEL_WARN = LOG_LEVEL_MAP.WARNING;
var LEVEL_DEBUG = LOG_LEVEL_MAP.DEBUG;
var LEVEL_INFO = LOG_LEVEL_MAP.INFO;
var LOG_LEVEL_LABEL = Object.keys(LOG_LEVEL_MAP);
var Logger = class {
  constructor(id, logLevel = "ERROR") {
    this.id = id;
    this._logLevel = LOG_LEVEL_MAP[logLevel];
  }
  get logLevel() {
    return LOG_LEVEL_LABEL[this._logLevel];
  }
  set logLevel(logLevel) {
    this._logLevel = LOG_LEVEL_MAP[logLevel];
  }
  error(...data) {
    this._logLevel >= LEVEL_ERROR && console.error(this.id, ...data);
  }
  warn(...data) {
    this._logLevel >= LEVEL_WARN && console.warn(this.id, ...data);
  }
  debug(...data) {
    this._logLevel >= LEVEL_DEBUG && console.debug(this.id, ...data);
  }
  info(...data) {
    this._logLevel >= LEVEL_INFO && console.info(this.id, ...data);
  }
};

export {
  Logger
};
//# sourceMappingURL=chunk-A735ODE2.js.map
