const o = {
  ERROR: 0,
  WARNING: 1,
  DEBUG: 2,
  INFO: 3
}, L = o.ERROR, l = o.WARNING, t = o.DEBUG, i = o.INFO, E = Object.keys(o);
class _ {
  id;
  // error = 0, warning = 1, debug = 2, info = 3
  _logLevel;
  constructor(e, s = "ERROR") {
    this.id = e, this._logLevel = o[s];
  }
  get logLevel() {
    return E[this._logLevel];
  }
  set logLevel(e) {
    this._logLevel = o[e];
  }
  error(...e) {
    this._logLevel >= L && console.error(this.id, ...e);
  }
  warn(...e) {
    this._logLevel >= l && console.warn(this.id, ...e);
  }
  debug(...e) {
    this._logLevel >= t && console.debug(this.id, ...e);
  }
  info(...e) {
    this._logLevel >= i && console.info(this.id, ...e);
  }
}
export {
  _ as L
};
//# sourceMappingURL=logger-C1WxLZjH.js.map
