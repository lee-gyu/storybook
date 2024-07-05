const o = {
  ERROR: 0,
  WARNING: 1,
  DEBUG: 2,
  INFO: 3
}, L = o.ERROR, t = o.WARNING, l = o.DEBUG, E = o.INFO, i = Object.keys(o);
class R {
  constructor(e, s = "ERROR") {
    this.id = e, this._logLevel = o[s];
  }
  get logLevel() {
    return i[this._logLevel];
  }
  set logLevel(e) {
    this._logLevel = o[e];
  }
  error(...e) {
    this._logLevel >= L && console.error(this.id, ...e);
  }
  warn(...e) {
    this._logLevel >= t && console.warn(this.id, ...e);
  }
  debug(...e) {
    this._logLevel >= l && console.debug(this.id, ...e);
  }
  info(...e) {
    this._logLevel >= E && console.info(this.id, ...e);
  }
}
export {
  R as L
};
//# sourceMappingURL=logger-BzjoGhbK.js.map
