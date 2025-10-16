import "./chunks/_init-DbWaCNow.js";
import { aa as On, ab as vo, J as ko, ac as Io, L as Eo, M as An, ad as Mo, ae as Dn, m as To, o as Lo, v as Ho, n as zo, s as Oo, l as Ao, af as Do, p as Fo, q as Wo, u as Po, r as No, G as $o, ag as Bo, H as Fn, I as bt, ah as Go, ai as Vo, P as ne, aj as jo, ak as Uo, al as Ko, am as qo, an as Xo, ao as Yo, a5 as Zo, ap as Jo, aq as Qo, ar as es, as as ts, at as ns, au as os, av as ss, aw as rs, ax as Wn, ay as Mt, az as is, aA as ls, a as Ve, aB as _e, aC as as, R as cs, aD as ds, aE as Pn, aF as us, aG as hs, aH as fs, aI as gs, aJ as Pe, aK as ms, aL as ps, aM as Cs, _ as ws, aN as _s, aO as Rs, aP as xs, aQ as Ss, aR as bs, aS as ys, aT as W, aU as qt, V as Xt, aV as vs, aW as ks, aX as Is, aY as Es, aZ as Ms, a_ as Ts, a$ as Ls, b0 as Hs, b1 as zs, b2 as Os, b3 as As, b4 as Ds, b5 as Fs, b6 as Ws, b7 as Ps, b8 as Nn, b9 as $n, ba as le, bb as Ns, bc as $s, t as Bs, bd as Gs, be as Vs, bf as js, bg as Us, bh as Ks, bi as qs, bj as Xs, bk as Yt, bl as Ys, bm as Zs, bn as Js, bo as Zt, bp as Jt, bq as Qs, br as er, bs as tr, a1 as nr } from "./chunks/css-CjgUAAH1.js";
import { r as P, e as he, f as or, b as sr, g as rr, I as ir, d as lr } from "./chunks/command-manager-Blh-h0ql.js";
import { c as Re } from "./chunks/asserts-CpwDJsre.js";
import { $ as be, l as ar, n as Qt, o as yt, f as fe, m as ot, p as He, q as cr, v as ze, e as Tt, t as q, a as $, i as G, b as J, w as dr, s as xe, c as O, u as ge, F as Lt, r as Bn, x as Ht, S as me, h as ur, y as hr, j as fr, k as zt, M as ue, g as gr, z as mr } from "./chunks/web-DZ7STt1e.js";
import { o as pr, h as Cr, g as pe, a as Ot, e as je, c as wr, R as At, C as _r, f as Rr } from "./chunks/rx-state-CSpLghs6.js";
import { d as Gn, a as Dt, g as Me, e as st, c as xr, o as Sr, f as br, s as yr } from "./chunks/floating-CuQzApa0.js";
import { i as X, d as ce } from "./chunks/index-Bmt0z1bM.js";
import { d as K, e as ct, a as vr } from "./chunks/tooltip-container-BnLoeWzv.js";
import { c as Ue } from "./chunks/clsx-OuTLNxxd.js";
import { c as Vn } from "./chunks/outside-DA89_Rlc.js";
import { c as dt, r as kr } from "./chunks/dom-6gXSYTzY.js";
import { c as Ir } from "./chunks/hook-flow-h5XBPdBp.js";
import { p as Er } from "./chunks/pick-BLZiDVxr.js";
import { b as Se, c as ae } from "./chunks/dom-BFx2fdL6.js";
import { i as jn, c as Mr, r as Tr, w as en } from "./chunks/in-memory-clipboard-DGTN1iKi.js";
import { I as Lr } from "./chunks/index-DB46QZ1i.js";
import { v as Hr } from "./chunks/v4-BysszJq8.js";
class zr {
  /* 커맨드 실행 인자 */
  _args;
  /* 실행을 위한 컴포넌트 인스턴스 */
  _instance;
  /* 되돌리기 위해 필요한 데이터 context */
  _undoContext;
  constructor(e, t) {
    this._args = t, this._instance = e, this._undoContext = this._getUndoContext();
  }
  /* 커맨드 실행 전, 되돌이기 위한 Context 정보를 저장 */
  _getUndoContext() {
    throw new Error("Not implemented");
  }
  /**
   * Redo 시 재실행
   * */
  _execute() {
    throw new Error("Not implemented");
  }
  /**
   * Undo 되돌리기
   * */
  _undo() {
    throw new Error("Not implemented");
  }
  /**
   * 현재 undo 가능한 상태인가?
   */
  get canUndo() {
    throw new Error("Not implemented");
  }
  /**
   * 현재 다시 되돌릴 수 있는 상태인가?
   */
  get canExecute() {
    throw new Error("Not implemented");
  }
  execute() {
    if (!this.canExecute)
      throw new Error("Can't execute command");
    this._execute(), this.onExecute();
  }
  undo() {
    if (!this.canUndo)
      throw new Error("Can't undo command");
    this._undo(), this.onUndo();
  }
  /**
   * Undo 이후 부가적인 이벤트 호출 필요 시 콜백 구현
   */
  onUndo() {
  }
  /**
   * 되돌리기 후 부가적인 이벤트 호출 필요 시 콜백 구현
   */
  onExecute() {
  }
}
function ut(s, e) {
  return pr(function(t, n) {
    var o = 0;
    t.subscribe(Cr(n, function(r) {
      n.next(s.call(e, r, o++));
    }));
  });
}
function Or(s, e) {
  const t = {};
  for (let n = 0; n < s.length; n++) {
    const o = s[n], r = e(o);
    Object.hasOwn(t, r) || (t[r] = []), t[r].push(o);
  }
  return t;
}
function Ar(s) {
  return [...new Set(s)];
}
function tn(s, e, t) {
  return Un(s, t) && Kn(e, t);
}
function se(s) {
  const e = parseInt(s.getAttribute("data-row") || "-1", 10), t = parseInt(s.getAttribute("data-col") || "-1", 10);
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function Un(s, e) {
  return s >= e.top && s <= e.bottom;
}
function Kn(s, e) {
  return s >= e.left && s <= e.right;
}
function Dr(s, e) {
  let t = s.firstChild, n = e;
  for (; t; ) {
    let o = t.firstChild;
    for (; o; )
      o instanceof HTMLElement && o.isConnected && o.dataset.ignoreAutoSize === void 0 && (n = Math.max(o.offsetHeight, n)), o = o.nextSibling;
    t = t.nextSibling;
  }
  return n;
}
function Fr(s) {
  let e = s.target, t = s.offsetX, n = s.offsetY;
  for (; e !== s.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR") {
      n += e.offsetTop;
      break;
    }
    if (n += e.offsetTop, t += e.offsetLeft, e.closest(`.${On}`)) break;
    e = e.parentElement;
  }
  return { x: t, y: n };
}
function Wr(s) {
  const e = Object.keys(s);
  if (e.length === 0) return !1;
  if (e.length === 1) return !0;
  const [t, ...n] = Object.values(s), o = new Set(t.map((r) => r.col));
  for (const r of n)
    if (r.length !== t.length || r.some((i) => !o.has(i.col))) return !1;
  return !0;
}
const Pr = 20, Nr = 5;
class Q {
  render(e, t, n) {
    throw new Error("Not implemented");
  }
  getHorizontalCellPadding({ paddingLeft: e, paddingRight: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingLeft")) + (t ?? n.getThemeValue("grid.paddingRight"));
  }
  getVerticalCellPadding({ paddingTop: e, paddingBottom: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingTop")) + (t ?? n.getThemeValue("grid.paddingBottom"));
  }
  getCellInnerWidth(e, t, n) {
    const o = pe(e, t), r = [n.icon, n.sortOrder].reduce((d, c) => c ? d + 1 : d, 0) * (Pr + Nr), i = `${this.getDisplayText(n)}`.split(`
`), a = r + o.calculateWidth(i[0] ?? "");
    return this.getHorizontalCellPadding(n) + P(1, i.length).reduce(
      (d, c) => Math.max(d, o.calculateWidth(i[c])),
      a
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    return this.getVerticalCellPadding(t) + Dr(
      e,
      t.gridStore.getThemeValue("grid.emptyDefaultHeight")
    );
  }
  /**
   * 현재 셀 렌더러가 cell props를 write하여 변경이 일어났을 때 호출.
   * Undo / Redo 등의 작업, 또는 setCell 등의 작업에서 호출 됨.
   * 단, DOM click 등의 렌더러 내부에서 직접 access한 경우는 호출되지 않음.
   * @version ^2.18.0
   * @experimental 실험적 기능
   */
  onUpdateCell(e, t, n) {
  }
  getDisplayText(e) {
    return e.text ?? "";
  }
  get renderType() {
    return "unknown";
  }
  get editable() {
    return !0;
  }
  get canBeClear() {
    return !0;
  }
}
class V extends zr {
}
class ie extends V {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args, o = this._instance.getCellMetaInfo(e, t), r = new Set(Object.keys(o));
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: Er(
        o,
        n
      ),
      removeKeys: Object.keys(n).filter((i) => !r.has(i))
    };
  }
  _undo() {
    this._instance.setCell(
      this._args[0],
      this._args[1],
      {
        ...this._undoContext.beforeValue,
        ...Object.fromEntries(this._undoContext.removeKeys.map((e) => [e, void 0]))
      }
    );
  }
  get canExecute() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
  get canUndo() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
}
const Ne = {
  checkbox: ko,
  checkboxWrapper: Eo,
  checkboxText: Dn,
  checkboxInput: An,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, $r = 16, vt = 6, Br = vt * 2, Gr = 20;
class qn extends Q {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const o = document.createElement("div"), r = document.createElement("label"), i = document.createElement("input");
    if (o.setAttribute("data-has-px", ""), o.setAttribute("data-has-py", ""), o.classList.add(vo, Ne.checkbox), r.classList.add(Io, Ne.checkboxWrapper), i.type = "checkbox", i.className = Ne.checkboxInput, r.appendChild(i), n.icon && r.appendChild(Ot(je(n.icon))), n.label) {
      const a = document.createElement("span");
      a.className = `${Mo} ${Ne.checkboxText}`, a.innerText = n.label, r.appendChild(a);
    }
    return n.horizontalAlign && o.classList.add(Ne[`horizontal_${n.horizontalAlign}`]), o.appendChild(r), i.checked = n.text === "true", i.onclick = (a) => a.__IGNORE_CELL_CLICK__ = !0, r.onkeydown = (a) => a.preventDefault(), i.onchange = () => {
      const a = i.checked, d = a ? "true" : "false", { commandManager: c } = n.gridStore, l = new ie(n.gridStore.commandContext, [e, t, { text: d }]);
      l.onUndo = () => {
        this.onCheckboxClick(e, t, !a);
      }, l.onExecute = () => {
        this.onCheckboxClick(e, t, a);
      }, c.pushCommandBlock(new he(
        "Change checkbox",
        l
      )), n.text = d, this.onCheckboxClick(e, t, a);
    }, o;
  }
  getCellInnerWidth(e, t, n) {
    const o = pe(e, t), r = n.label ? vt + o.calculateWidth(n.label) : 0, i = n.icon ? vt + Gr : 0;
    return $r + Br + r + i + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "checkbox";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
function Ec(s) {
  const e = new qn(s ?? {});
  return () => e;
}
function ve(s, e, t) {
  let n = t.initialDeps ?? [], o;
  function r() {
    var i, a, d, c;
    let l;
    t.key && ((i = t.debug) != null && i.call(t)) && (l = Date.now());
    const h = s();
    if (!(h.length !== n.length || h.some((g, R) => n[R] !== g)))
      return o;
    n = h;
    let f;
    if (t.key && ((a = t.debug) != null && a.call(t)) && (f = Date.now()), o = e(...h), t.key && ((d = t.debug) != null && d.call(t))) {
      const g = Math.round((Date.now() - l) * 100) / 100, R = Math.round((Date.now() - f) * 100) / 100, T = R / 16, x = (H, L) => {
        for (H = String(H); H.length < L; )
          H = " " + H;
        return H;
      };
      console.info(
        `%c⏱ ${x(R, 5)} /${x(g, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * T, 120)
        )}deg 100% 31%);`,
        t?.key
      );
    }
    return (c = t?.onChange) == null || c.call(t, o), o;
  }
  return r.updateDeps = (i) => {
    n = i;
  }, r;
}
function nn(s, e) {
  if (s === void 0)
    throw new Error("Unexpected undefined");
  return s;
}
const Vr = (s, e) => Math.abs(s - e) < 1.01, jr = (s, e, t) => {
  let n;
  return function(...o) {
    s.clearTimeout(n), n = s.setTimeout(() => e.apply(this, o), t);
  };
}, on = (s) => {
  const { offsetWidth: e, offsetHeight: t } = s;
  return { width: e, height: t };
}, Ur = (s) => s, Kr = (s) => {
  const e = Math.max(s.startIndex - s.overscan, 0), t = Math.min(s.endIndex + s.overscan, s.count - 1), n = [];
  for (let o = e; o <= t; o++)
    n.push(o);
  return n;
}, qr = (s, e) => {
  const t = s.scrollElement;
  if (!t)
    return;
  const n = s.targetWindow;
  if (!n)
    return;
  const o = (i) => {
    const { width: a, height: d } = i;
    e({ width: Math.round(a), height: Math.round(d) });
  };
  if (o(on(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((i) => {
    const a = () => {
      const d = i[0];
      if (d?.borderBoxSize) {
        const c = d.borderBoxSize[0];
        if (c) {
          o({ width: c.inlineSize, height: c.blockSize });
          return;
        }
      }
      o(on(t));
    };
    s.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, sn = {
  passive: !0
}, rn = typeof window > "u" ? !0 : "onscrollend" in window, Xr = (s, e) => {
  const t = s.scrollElement;
  if (!t)
    return;
  const n = s.targetWindow;
  if (!n)
    return;
  let o = 0;
  const r = s.options.useScrollendEvent && rn ? () => {
  } : jr(
    n,
    () => {
      e(o, !1);
    },
    s.options.isScrollingResetDelay
  ), i = (l) => () => {
    const { horizontal: h, isRtl: u } = s.options;
    o = h ? t.scrollLeft * (u && -1 || 1) : t.scrollTop, r(), e(o, l);
  }, a = i(!0), d = i(!1);
  d(), t.addEventListener("scroll", a, sn);
  const c = s.options.useScrollendEvent && rn;
  return c && t.addEventListener("scrollend", d, sn), () => {
    t.removeEventListener("scroll", a), c && t.removeEventListener("scrollend", d);
  };
}, Yr = (s, e, t) => {
  if (e?.borderBoxSize) {
    const n = e.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return s[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Zr = (s, {
  adjustments: e = 0,
  behavior: t
}, n) => {
  var o, r;
  const i = s + e;
  (r = (o = n.scrollElement) == null ? void 0 : o.scrollTo) == null || r.call(o, {
    [n.options.horizontal ? "left" : "top"]: i,
    behavior: t
  });
};
class Jr {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((r) => {
          const i = () => {
            this._measureElement(r.target, r);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = n()) == null || o.disconnect(), t = null;
        },
        observe: (o) => {
          var r;
          return (r = n()) == null ? void 0 : r.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var r;
          return (r = n()) == null ? void 0 : r.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([n, o]) => {
        typeof o > "u" && delete t[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Ur,
        rangeExtractor: Kr,
        onChange: () => {
        },
        measureElement: Yr,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...t
      };
    }, this.notify = (t) => {
      var n, o;
      (o = (n = this.options).onChange) == null || o.call(n, this, t);
    }, this.maybeNotify = ve(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, r) => {
            this.scrollAdjustments = 0, this.scrollDirection = r ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = r, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, n) => {
      const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (let i = n - 1; i >= 0; i--) {
        const a = t[i];
        if (o.has(a.lane))
          continue;
        const d = r.get(
          a.lane
        );
        if (d == null || a.end > d.end ? r.set(a.lane, a) : a.end < d.end && o.set(a.lane, !0), o.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((i, a) => i.end === a.end ? i.index - a.index : i.end - a.end)[0] : void 0;
    }, this.getMeasurementOptions = ve(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, n, o, r, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: n,
        scrollMargin: o,
        getItemKey: r,
        enabled: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = ve(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: o, getItemKey: r, enabled: i }, a) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((l) => {
          this.itemSizeCache.set(l.key, l.size);
        }));
        const d = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, d);
        for (let l = d; l < t; l++) {
          const h = r(l), u = this.options.lanes === 1 ? c[l - 1] : this.getFurthestMeasurement(c, l), f = u ? u.end + this.options.gap : n + o, g = a.get(h), R = typeof g == "number" ? g : this.options.estimateSize(l), T = f + R, x = u ? u.lane : l % this.options.lanes;
          c[l] = {
            index: l,
            start: f,
            size: R,
            end: T,
            key: h,
            lane: x
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = ve(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, o, r) => this.range = t.length > 0 && n > 0 ? Qr({
        measurements: t,
        outerSize: n,
        scrollOffset: o,
        lanes: r
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = ve(
      () => {
        let t = null, n = null;
        const o = this.calculateRange();
        return o && (t = o.startIndex, n = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, o, r, i) => r === null || i === null ? [] : t({
        startIndex: r,
        endIndex: i,
        overscan: n,
        count: o
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, o = t.getAttribute(n);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, n) => {
      const o = this.indexFromElement(t), r = this.measurementsCache[o];
      if (!r)
        return;
      const i = r.key, a = this.elementsCache.get(i);
      a !== t && (a && this.observer.unobserve(a), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(o, this.options.measureElement(t, n, this));
    }, this.resizeItem = (t, n) => {
      const o = this.measurementsCache[t];
      if (!o)
        return;
      const r = this.itemSizeCache.get(o.key) ?? o.size, i = n - r;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, i, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, n)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((n, o) => {
          n.isConnected || (this.observer.unobserve(n), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = ve(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const o = [];
        for (let r = 0, i = t.length; r < i; r++) {
          const a = t[r], d = n[a];
          o.push(d);
        }
        return o;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return nn(
          n[Xn(
            0,
            n.length - 1,
            (o) => nn(n[o]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, o = 0) => {
      const r = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + r ? "end" : "start"), n === "center" ? t += (o - r) / 2 : n === "end" && (t -= r);
      const a = this.getTotalSize() + this.options.scrollMargin - r;
      return Math.max(Math.min(a, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const o = this.measurementsCache[t];
      if (!o)
        return;
      const r = this.getSize(), i = this.getScrollOffset();
      if (n === "auto")
        if (o.end >= i + r - this.options.scrollPaddingEnd)
          n = "end";
        else if (o.start <= i + this.options.scrollPaddingStart)
          n = "start";
        else
          return [i, n];
      const a = n === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(a, n, o.size),
        n
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (t, { align: n = "start", behavior: o } = {}) => {
      o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, n), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (t, { align: n = "auto", behavior: o } = {}) => {
      o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), t = Math.max(0, Math.min(t, this.options.count - 1));
      let r = 0;
      const i = 10, a = (c) => {
        if (!this.targetWindow) return;
        const l = this.getOffsetForIndex(t, c);
        if (!l) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [h, u] = l;
        this._scrollToOffset(h, { adjustments: void 0, behavior: o }), this.targetWindow.requestAnimationFrame(() => {
          const f = this.getScrollOffset(), g = this.getOffsetForIndex(t, u);
          if (!g) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Vr(g[0], f) || d(u);
        });
      }, d = (c) => {
        this.targetWindow && (r++, r < i ? this.targetWindow.requestAnimationFrame(() => a(c)) : console.warn(
          `Failed to scroll to index ${t} after ${i} attempts.`
        ));
      };
      a(n);
    }, this.scrollBy = (t, { behavior: n } = {}) => {
      n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var t;
      const n = this.getMeasurements();
      let o;
      if (n.length === 0)
        o = this.options.paddingStart;
      else if (this.options.lanes === 1)
        o = ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const r = Array(this.options.lanes).fill(null);
        let i = n.length - 1;
        for (; i >= 0 && r.some((a) => a === null); ) {
          const a = n[i];
          r[a.lane] === null && (r[a.lane] = a.end), i--;
        }
        o = Math.max(...r.filter((a) => a !== null));
      }
      return Math.max(
        o - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: n,
      behavior: o
    }) => {
      this.options.scrollToFn(t, { behavior: o, adjustments: n }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(e);
  }
}
const Xn = (s, e, t, n) => {
  for (; s <= e; ) {
    const o = (s + e) / 2 | 0, r = t(o);
    if (r < n)
      s = o + 1;
    else if (r > n)
      e = o - 1;
    else
      return o;
  }
  return s > 0 ? s - 1 : 0;
};
function Qr({
  measurements: s,
  outerSize: e,
  scrollOffset: t,
  lanes: n
}) {
  const o = s.length - 1, r = (d) => s[d].start;
  if (s.length <= n)
    return {
      startIndex: 0,
      endIndex: o
    };
  let i = Xn(
    0,
    o,
    r,
    t
  ), a = i;
  if (n === 1)
    for (; a < o && s[a].end < t + e; )
      a++;
  else if (n > 1) {
    const d = Array(n).fill(0);
    for (; a < o && d.some((l) => l < t + e); ) {
      const l = s[a];
      d[l.lane] = l.end, a++;
    }
    const c = Array(n).fill(t + e);
    for (; i >= 0 && c.some((l) => l >= t); ) {
      const l = s[i];
      c[l.lane] = l.start, i--;
    }
    i = Math.max(0, i - i % n), a = Math.min(o, a + (n - 1 - a % n));
  }
  return { startIndex: i, endIndex: a };
}
const kt = Symbol("store-raw"), Ee = Symbol("store-node"), re = Symbol("store-has"), Yn = Symbol("store-self");
function Zn(s) {
  let e = s[be];
  if (!e && (Object.defineProperty(s, be, {
    value: e = new Proxy(s, ni)
  }), !Array.isArray(s))) {
    const t = Object.keys(s), n = Object.getOwnPropertyDescriptors(s);
    for (let o = 0, r = t.length; o < r; o++) {
      const i = t[o];
      n[i].get && Object.defineProperty(s, i, {
        enumerable: n[i].enumerable,
        get: n[i].get.bind(e)
      });
    }
  }
  return e;
}
function Ce(s) {
  let e;
  return s != null && typeof s == "object" && (s[be] || !(e = Object.getPrototypeOf(s)) || e === Object.prototype || Array.isArray(s));
}
function Te(s, e = /* @__PURE__ */ new Set()) {
  let t, n, o, r;
  if (t = s != null && s[kt]) return t;
  if (!Ce(s) || e.has(s)) return s;
  if (Array.isArray(s)) {
    Object.isFrozen(s) ? s = s.slice(0) : e.add(s);
    for (let i = 0, a = s.length; i < a; i++)
      o = s[i], (n = Te(o, e)) !== o && (s[i] = n);
  } else {
    Object.isFrozen(s) ? s = Object.assign({}, s) : e.add(s);
    const i = Object.keys(s), a = Object.getOwnPropertyDescriptors(s);
    for (let d = 0, c = i.length; d < c; d++)
      r = i[d], !a[r].get && (o = s[r], (n = Te(o, e)) !== o && (s[r] = n));
  }
  return s;
}
function rt(s, e) {
  let t = s[e];
  return t || Object.defineProperty(s, e, {
    value: t = /* @__PURE__ */ Object.create(null)
  }), t;
}
function Ke(s, e, t) {
  if (s[e]) return s[e];
  const [n, o] = fe(t, {
    equals: !1,
    internal: !0
  });
  return n.$ = o, s[e] = n;
}
function ei(s, e) {
  const t = Reflect.getOwnPropertyDescriptor(s, e);
  return !t || t.get || !t.configurable || e === be || e === Ee || (delete t.value, delete t.writable, t.get = () => s[be][e]), t;
}
function Jn(s) {
  yt() && Ke(rt(s, Ee), Yn)();
}
function ti(s) {
  return Jn(s), Reflect.ownKeys(s);
}
const ni = {
  get(s, e, t) {
    if (e === kt) return s;
    if (e === be) return t;
    if (e === Qt)
      return Jn(s), t;
    const n = rt(s, Ee), o = n[e];
    let r = o ? o() : s[e];
    if (e === Ee || e === re || e === "__proto__") return r;
    if (!o) {
      const i = Object.getOwnPropertyDescriptor(s, e);
      yt() && (typeof r != "function" || s.hasOwnProperty(e)) && !(i && i.get) && (r = Ke(n, e, r)());
    }
    return Ce(r) ? Zn(r) : r;
  },
  has(s, e) {
    return e === kt || e === be || e === Qt || e === Ee || e === re || e === "__proto__" ? !0 : (yt() && Ke(rt(s, re), e)(), e in s);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: ti,
  getOwnPropertyDescriptor: ei
};
function te(s, e, t, n = !1) {
  if (!n && s[e] === t) return;
  const o = s[e], r = s.length;
  t === void 0 ? (delete s[e], s[re] && s[re][e] && o !== void 0 && s[re][e].$()) : (s[e] = t, s[re] && s[re][e] && o === void 0 && s[re][e].$());
  let i = rt(s, Ee), a;
  if ((a = Ke(i, e, o)) && a.$(() => t), Array.isArray(s) && s.length !== r) {
    for (let d = s.length; d < r; d++) (a = i[d]) && a.$();
    (a = Ke(i, "length", r)) && a.$(s.length);
  }
  (a = i[Yn]) && a.$();
}
function Qn(s, e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n += 1) {
    const o = t[n];
    te(s, o, e[o]);
  }
}
function oi(s, e) {
  if (typeof e == "function" && (e = e(s)), e = Te(e), Array.isArray(e)) {
    if (s === e) return;
    let t = 0, n = e.length;
    for (; t < n; t++) {
      const o = e[t];
      s[t] !== o && te(s, t, o);
    }
    te(s, "length", n);
  } else Qn(s, e);
}
function Be(s, e, t = []) {
  let n, o = s;
  if (e.length > 1) {
    n = e.shift();
    const i = typeof n, a = Array.isArray(s);
    if (Array.isArray(n)) {
      for (let d = 0; d < n.length; d++)
        Be(s, [n[d]].concat(e), t);
      return;
    } else if (a && i === "function") {
      for (let d = 0; d < s.length; d++)
        n(s[d], d) && Be(s, [d].concat(e), t);
      return;
    } else if (a && i === "object") {
      const {
        from: d = 0,
        to: c = s.length - 1,
        by: l = 1
      } = n;
      for (let h = d; h <= c; h += l)
        Be(s, [h].concat(e), t);
      return;
    } else if (e.length > 1) {
      Be(s[n], e, [n].concat(t));
      return;
    }
    o = s[n], t = [n].concat(t);
  }
  let r = e[0];
  typeof r == "function" && (r = r(o, t), r === o) || n === void 0 && r == null || (r = Te(r), n === void 0 || Ce(o) && Ce(r) && !Array.isArray(r) ? Qn(o, r) : te(s, n, r));
}
function si(...[s, e]) {
  const t = Te(s || {}), n = Array.isArray(t), o = Zn(t);
  function r(...i) {
    ar(() => {
      n && i.length === 1 ? oi(t, i[0]) : Be(t, i);
    });
  }
  return [o, r];
}
const It = Symbol("store-root");
function Ie(s, e, t, n, o) {
  const r = e[t];
  if (s === r) return;
  const i = Array.isArray(s);
  if (t !== It && (!Ce(s) || !Ce(r) || i !== Array.isArray(r) || o && s[o] !== r[o])) {
    te(e, t, s);
    return;
  }
  if (i) {
    if (s.length && r.length && (!n || o && s[0] && s[0][o] != null)) {
      let c, l, h, u, f, g, R, T;
      for (h = 0, u = Math.min(r.length, s.length); h < u && (r[h] === s[h] || o && r[h] && s[h] && r[h][o] && r[h][o] === s[h][o]); h++)
        Ie(s[h], r, h, n, o);
      const x = new Array(s.length), H = /* @__PURE__ */ new Map();
      for (u = r.length - 1, f = s.length - 1; u >= h && f >= h && (r[u] === s[f] || o && r[u] && s[f] && r[u][o] && r[u][o] === s[f][o]); u--, f--)
        x[f] = r[u];
      if (h > f || h > u) {
        for (l = h; l <= f; l++) te(r, l, s[l]);
        for (; l < s.length; l++)
          te(r, l, x[l]), Ie(s[l], r, l, n, o);
        r.length > s.length && te(r, "length", s.length);
        return;
      }
      for (R = new Array(f + 1), l = f; l >= h; l--)
        g = s[l], T = o && g ? g[o] : g, c = H.get(T), R[l] = c === void 0 ? -1 : c, H.set(T, l);
      for (c = h; c <= u; c++)
        g = r[c], T = o && g ? g[o] : g, l = H.get(T), l !== void 0 && l !== -1 && (x[l] = r[c], l = R[l], H.set(T, l));
      for (l = h; l < s.length; l++)
        l in x ? (te(r, l, x[l]), Ie(s[l], r, l, n, o)) : te(r, l, s[l]);
    } else
      for (let c = 0, l = s.length; c < l; c++)
        Ie(s[c], r, c, n, o);
    r.length > s.length && te(r, "length", s.length);
    return;
  }
  const a = Object.keys(s);
  for (let c = 0, l = a.length; c < l; c++)
    Ie(s[a[c]], r, a[c], n, o);
  const d = Object.keys(r);
  for (let c = 0, l = d.length; c < l; c++)
    s[d[c]] === void 0 && te(r, d[c], void 0);
}
function ri(s, e = {}) {
  const {
    merge: t,
    key: n = "id"
  } = e, o = Te(s);
  return (r) => {
    if (!Ce(r) || !Ce(o)) return o;
    const i = Ie(o, {
      [It]: r
    }, It, t, n);
    return i === void 0 ? r : i;
  };
}
function ii(s) {
  const e = ot(s), t = new Jr(e), [n, o] = si(t.getVirtualItems()), [r, i] = fe(t.getTotalSize()), a = {
    get(c, l) {
      switch (l) {
        case "getVirtualItems":
          return () => n;
        case "getTotalSize":
          return () => r();
        default:
          return Reflect.get(c, l);
      }
    }
  }, d = new Proxy(t, a);
  return d.setOptions(e), He(() => {
    const c = d._didMount();
    d._willUpdate(), ze(c);
  }), cr(() => {
    d.setOptions(ot(e, s, {
      onChange: (c, l) => {
        var h;
        c._willUpdate(), o(ri(c.getVirtualItems(), {
          key: "index"
        })), i(c.getTotalSize()), (h = s.onChange) == null || h.call(s, c, l);
      }
    })), d.measure();
  }), d;
}
function eo(s) {
  return ii(ot({
    observeElementRect: qr,
    observeElementOffset: Xr,
    scrollToFn: Zr
  }, s));
}
var li = /* @__PURE__ */ q("<div><button type=button><i></i><span>");
const ai = `${Lo} ir-icon ir-icon--check`;
function ci(s) {
  return (() => {
    var e = li(), t = e.firstChild, n = t.firstChild, o = n.nextSibling;
    return e.style.setProperty("position", "absolute"), e.style.setProperty("width", "100%"), t.$$click = s.onClick, t.$$clickData = s.row, $(t, To), $(n, ai), G(o, () => s.text), J((r) => {
      var i = {
        [zo]: !0,
        [Ho]: s.isSelected
      }, a = s.row, d = s.value, c = `${s.top}px`, l = s.text;
      return r.e = dr(e, i, r.e), a !== r.t && xe(e, "data-row", r.t = a), d !== r.a && xe(e, "data-value", r.a = d), c !== r.o && ((r.o = c) != null ? e.style.setProperty("top", c) : e.style.removeProperty("top")), l !== r.i && xe(t, "title", r.i = l), r;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0
    }), e;
  })();
}
Tt(["click"]);
var di = /* @__PURE__ */ q("<div><div>");
const ui = `${Oo} ${wr.zIndex.popover} is-expanded`, hi = 26;
function fi(s) {
  const {
    items: e,
    selectedItem: t
  } = s;
  let n;
  const o = eo({
    count: s.items.length,
    getScrollElement: () => n,
    estimateSize: () => hi,
    overscan: 4
  }), r = s.refElement.offsetWidth, i = Math.max(r, s.breakWidth), a = Math.max(s.contentWidth, r);
  return He(() => {
    const d = Gn(s.refElement, n, "bottom-start");
    s.ref?.({
      divElement: n
    }), t && o.scrollToIndex(e.indexOf(t), {
      align: "center"
    }), ze(() => {
      d(), s.ref?.(null);
    });
  }), (() => {
    var d = di(), c = d.firstChild, l = n;
    return typeof l == "function" ? ge(l, d) : n = d, $(d, ui), `${a}px` != null ? d.style.setProperty("width", `${a}px`) : d.style.removeProperty("width"), `${i}px` != null ? d.style.setProperty("max-width", `${i}px`) : d.style.removeProperty("max-width"), $(c, Ao), c.style.setProperty("position", "relative"), G(c, O(Lt, {
      get each() {
        return o.getVirtualItems();
      },
      children: (h) => O(ci, {
        onClick: (u) => s.onItemClick?.(s.items[u]),
        get row() {
          return h.index;
        },
        get top() {
          return h.start;
        },
        get isSelected() {
          return s.selectedItem === s.items[h.index];
        },
        get text() {
          return s.items[h.index].text;
        },
        get value() {
          return s.items[h.index].value;
        }
      })
    })), J((h) => {
      var u = s.row, f = s.col, g = `${o.getTotalSize()}px`;
      return u !== h.e && xe(d, "data-row", h.e = u), f !== h.t && xe(d, "data-col", h.t = f), g !== h.a && ((h.a = g) != null ? c.style.setProperty("height", g) : c.style.removeProperty("height")), h;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), d;
  })();
}
const Ze = { select: Fo, selectInput: Wo, selectInputNative: No, selectInputIcon: Po }, ln = /* @__PURE__ */ new WeakMap(), gi = 20, mi = 4, an = gi + mi, pi = 18;
class Ci extends Q {
  _itemTextMap;
  _allowCustomText;
  _allowEdit;
  _showErrorIfCustomText;
  _lazyItems;
  _customDisplayTextFunc;
  _items;
  _allowClear;
  _itemWidth = null;
  _isExpanded = !1;
  _beforeValue;
  _beforeText;
  _isInitItems = !1;
  _mappingType;
  constructor({
    items: e,
    onChange: t,
    allowClear: n,
    customDisplayTextFunc: o,
    lazyItems: r,
    allowCustomText: i = !1,
    showErrorIfCustomText: a = !1,
    allowEdit: d = !1,
    mappingType: c = "text"
  }) {
    super(), this._allowClear = n ?? !1, this._mappingType = c, this._items = e ?? [], this._lazyItems = r ?? null, this._itemTextMap = /* @__PURE__ */ new Map(), this._allowCustomText = i, this._allowEdit = d, d && (this._allowCustomText = !0), o ? this._customDisplayTextFunc = o : this._customDisplayTextFunc = c === "text" ? this._defaultTextCustomDisplayTextFunc.bind(this) : this._defaultValueCustomDisplayTextFunc.bind(this), this._showErrorIfCustomText = a, t && (this.onChange = t.bind(this));
  }
  _loadItems() {
    if (!this._isInitItems) {
      this._isInitItems = !0, this._lazyItems && (this._items = this._lazyItems());
      for (const e of this._items)
        this._itemTextMap.set(e[this._mappingType], e);
    }
  }
  _defaultTextCustomDisplayTextFunc(e, t, n) {
    return t ?? "";
  }
  _defaultValueCustomDisplayTextFunc(e, t, n) {
    const o = t ?? "";
    return this._itemTextMap.get(o)?.text ?? o;
  }
  _getSelectedItemOrNull(e) {
    for (const t of this._items)
      if (t[this._mappingType] === e) return t;
    return null;
  }
  render(e, t, n) {
    const {
      _allowCustomText: o,
      _allowEdit: r,
      _showErrorIfCustomText: i,
      _customDisplayTextFunc: a
    } = this, { element: d } = dt({ tag: "div", className: Ue(Do, Ze.select, Ze.selectInput) }), { element: c } = dt({ tag: "span", className: Ze.selectInputNative }), { element: l } = dt({ tag: "i", className: Ue(Ze.selectInputIcon, "ir-icon", "ir-icon--chevron-down") });
    this._loadItems(), d.setAttribute("data-has-px", ""), l.setAttribute("data-ignore-auto-size", "");
    const h = n.text === "" || n.text === null || n.text === void 0;
    r && d.classList.add("is-editable");
    let u = this._getSelectedItemOrNull(n.text);
    const f = u !== null;
    u ? (c.textContent = a(u.value, u.text, !1), n.value = u.value) : o ? (c.textContent = a(n.value, n.text, !0), n.value = n.text) : (c.textContent = "", n.value = ""), // error 상태 표시 지정 시, error 속성 추가
    o && i && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !h && !f && (d.dataset.error = "true");
    let g = () => {
    }, R = [];
    const T = Vn({
      eventElements: [d],
      clickOutsideFunc: () => x.hide(),
      getEventElements: () => R
    }), x = {
      show: () => {
        this._isExpanded = !0, H.create(), T.create(), this._beforeValue = n.value, this._beforeText = n.text, d.classList.add("is-expanded");
        const { breakWidth: I, contentWidth: b } = this._getCellWidthInfo(n);
        g = Bn(
          () => fi({
            ref: (C) => R = C ? [C.divElement] : [],
            row: e,
            col: t,
            contentWidth: b,
            breakWidth: I,
            selectedItem: u,
            items: this._items,
            refElement: d,
            onItemClick: (C) => {
              const { value: w, text: E } = C, p = new ie(n.gridStore.commandContext, [e, t, { text: E, value: w }]);
              p.onUndo = () => this.onChange(e, t, this._beforeValue, this._beforeText, w, E), p.onExecute = () => this.onChange(e, t, w, E, this._beforeValue, this._beforeText), n.gridStore.commandManager.pushCommandBlock(new he(
                "Change select menu",
                p
              )), u = C, n.text = C[this._mappingType], n.value = w, c.textContent = a(w, E, !1), d.dataset.error && delete d.dataset.error, n.gridStore.gridTextarea.focus(), this.onChange(e, t, w, E, this._beforeValue, this._beforeText), x.hide();
            }
          }),
          Me("popover")
        );
      },
      hide: () => {
        this._isExpanded = !1, d.classList.remove("is-expanded"), H.destroy(), T.destroy(), g();
      }
    }, H = Dt(x), L = () => {
      d.classList.contains("is-expanded") ? x.hide() : x.show();
    };
    return d.onclick = (I) => {
      r && I.target !== l || L();
    }, d.appendChild(c), d.appendChild(l), d;
  }
  onChange(e, t, n, o, r, i) {
  }
  getCellInnerWidth(e, t, n) {
    if (!n.text) return 0;
    const o = pe(e, t), r = this._itemTextMap.has(n.text), i = this._customDisplayTextFunc(n.value, n.text, !r), a = o.calculateWidth(i);
    return an + a + this.getHorizontalCellPadding(n);
  }
  _getDropdownWidth(e, t, n) {
    const o = pe(e, t), r = this._items.reduce((i, a) => Math.max(i, o.calculateWidth(a.text)), 0);
    return an + r + this.getHorizontalCellPadding(n);
  }
  getRendererInnerWidth(e, t, n) {
    const o = ln.get(this);
    if (o) return o;
    const r = this._getDropdownWidth(e, t, n);
    return ln.set(this, r), r;
  }
  _getCellWidthInfo(e) {
    return {
      contentWidth: this.getItemWidth(e.fontSize || "13px", e.fontFamily || "Pretendard", e),
      breakWidth: e.gridStore.getThemeValue("grid.defaultDropdownWidth")
    };
  }
  getItemWidth(e, t, n) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, t, n)), this._itemWidth + pi;
  }
  get renderType() {
    return "select";
  }
  get editable() {
    return this._allowEdit && !this._isExpanded;
  }
  get canBeClear() {
    return this._allowClear;
  }
}
const Mc = (s) => {
  const e = new Ci(s);
  return () => e;
}, ht = { input: $o, inputNative: Fn, inputSuffix: bt }, wi = 28, ke = /* @__PURE__ */ new WeakMap();
class _i extends Q {
  _format;
  _minDate;
  _maxDate;
  _allowedEmptyString;
  constructor({
    onDateClick: e,
    format: t = X.t("datePicker.dateFormat"),
    minDate: n = st().getStoreValue("datePicker.minDate"),
    maxDate: o = st().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: r = !0
  }) {
    super(), this._format = t, this._minDate = n, this._maxDate = o, this._allowedEmptyString = r, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, t, n, o) {
  }
  getCellInnerWidth(e, t, n) {
    return pe(e, t).calculateWidth(n.text || this._format) + wi + this.getHorizontalCellPadding(n);
  }
  render(e, t, n) {
    const o = document.createElement("div"), r = document.createElement("input"), i = document.createElement("button"), a = document.createElement("i"), {
      _minDate: d,
      _maxDate: c,
      _format: l,
      _allowedEmptyString: h
    } = this;
    if (r.readOnly = !0, r.maxLength = l.length, o.setAttribute("data-has-px", ""), o.classList.add(ht.input, Bo), r.classList.add(ht.inputNative, "tnum-adj"), i.classList.add(ht.inputSuffix), a.classList.add("ir-icon", "ir-icon--calendar"), r.type = "text", r.placeholder = l, n.text !== "") {
      const f = l.replace(/-/g, "");
      let g = ce(n.text, l, !0);
      g.isValid() || (g = ce(n.text, f, !0), n.text = g.format(l)), g.isValid() || (n.text = ke.get(n)), (g.isBefore(d) || g.isAfter(c)) && (n.text = ke.get(n));
    }
    !h && (n.text === "" || n.text === void 0) && (n.text = ke.has(n) ? ke.get(n) : ce().format(l)), r.value = n.text || "", ke.set(n, n.text ?? ""), i.appendChild(a), o.appendChild(r), o.appendChild(i);
    const u = or({
      uuid: Hr(),
      refElement: o,
      minDate: d,
      maxDate: c,
      onClick: (f) => {
        const g = n.text ?? "", R = ce(f).format(l), T = new ie(n.gridStore.commandContext, [e, t, { text: R }]);
        T.onUndo = () => {
          this.onDateClick(e, t, g, R);
        }, T.onExecute = () => {
          this.onDateClick(e, t, R, g);
        }, n.gridStore.commandManager.pushCommandBlock(new he("Change datePicker", T)), r.value = R, n.text = R, ke.set(n, R), n.gridStore.gridTextarea.focus(), this.onDateClick(e, t, R, g), u.hide();
      }
    });
    return i.onclick = () => {
      if (!u.visible) {
        const f = ce(n.text, l, !0);
        f.isValid() ? u.update(f.toDate(), f.toDate()) : u.update(/* @__PURE__ */ new Date(), null), u.show();
      }
    }, o;
  }
  get renderType() {
    return "datePicker";
  }
}
const Tc = (s) => {
  const e = new _i(s);
  return () => e;
}, Je = {
  progress: Vo,
  progressVariants: jo
}, Ri = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, xi = 100, Si = 100;
class bi extends Q {
  _min;
  _max;
  _defaultIntent;
  _afterDecimalLen;
  constructor({ min: e = 0, max: t = 100, defaultIntent: n, afterDecimalLen: o = 2 }) {
    super(), this._min = e, this._max = t, this._defaultIntent = n, this._afterDecimalLen = o;
  }
  render(e, t, n) {
    const {
      _min: o,
      _max: r,
      _afterDecimalLen: i,
      _defaultIntent: a
    } = this, d = document.createElement("div"), c = document.createElement("div");
    d.setAttribute("data-has-px", ""), d.className = Go, c.className = Je.progress;
    const l = n.intent ?? a;
    l && c.classList.add(`${Je.progress}--${l}`);
    const u = (K(parseFloat(n.text || "0"), o, r) - o) / (r - o) * xi;
    return ne(c, {
      [Je.progressVariants.progressPercent]: `${u}%`,
      [Je.progressVariants.progressText]: `'${u.toFixed(i)}%'`
    }), d.appendChild(c), d;
  }
  getCellInnerWidth(e, t, n) {
    return Si + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "progress";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const Lc = (s = Ri) => {
  const e = new bi(s);
  return () => e;
}, yi = 20, vi = 4, ki = 24, Ii = 24, Ei = 29, cn = {
  primary: Zo,
  secondary: Yo,
  tertiary: Xo,
  transparent: qo,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class Mi extends Q {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = Ei : e.outlineStyle ? this._extraWidth = Ii : this._extraWidth = 0;
  }
  _extraWidth;
  onClick(e, t, n) {
  }
  render(e, t, n) {
    const {
      iconDividerStyle: o,
      outlineStyle: r,
      defaultColor: i,
      defaultIcon: a,
      defaultLabel: d
    } = this.args, c = document.createElement("div"), l = document.createElement("button");
    c.className = Uo, l.classList.add(Ko, "button"), l.dataset.ignoreAutoSize = "";
    const h = n.intent ?? i;
    h && l.classList.add(cn[h]), r ? (c.setAttribute("data-has-px", ""), c.classList.add(Jo)) : o && c.classList.add(Qo), !this.args.iconDividerStyle && n.horizontalAlign && l.classList.add(cn[n.horizontalAlign]), l.onclick = (g) => this.onClick(g, e, t);
    const u = n.icon ?? a, f = o ? n.text ?? "" : n.label ?? d ?? "";
    if (u) {
      const g = document.createElement("i");
      g.className = `${es} ir-icon ${je(u)}`, l.appendChild(g);
    }
    if (f) {
      const g = Se("span");
      if (g.innerText = f, o) {
        const R = document.createElement("div");
        g.classList.add("text--multi-ellipsis"), R.setAttribute("data-has-px", ""), n.lineClamp === void 0 ? g.style.removeProperty("-webkit-line-clamp") : g.style.setProperty("-webkit-line-clamp", n.lineClamp), R.appendChild(g), c.insertAdjacentElement("afterbegin", R);
      } else
        g.classList.add("text--ellipsis"), l.appendChild(g);
    }
    return c.appendChild(l), c;
  }
  getCellLabel(e) {
    return this.args.iconDividerStyle ? e.text || "" : e.label || this.args.defaultLabel || "";
  }
  getExtraWidth(e) {
    const t = e.icon || this.args.defaultIcon;
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : t ? yi + vi : 0;
  }
  getCellInnerWidth(e, t, n) {
    const o = pe(e, t);
    return this.getHorizontalCellPadding(n) + o.calculateWidth(this.getCellLabel(n)) + this.getExtraWidth(n);
  }
  getCellInnerHeight(e, t) {
    if (this.args.iconDividerStyle) {
      const n = e.querySelector(".text--multi-ellipsis");
      if (n)
        return this.getVerticalCellPadding(t) + n.offsetHeight;
    }
    return ki;
  }
  get renderType() {
    return "button";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const Hc = (s) => {
  const e = new Mi(s ?? {});
  return () => e;
}, Qe = { radio: ns, radioWrapper: os, radioInput: ss, radioText: rs }, Ti = 16, to = 6, Li = to * 2;
class no extends Q {
  _radioItemStack = [];
  constructor({ onRadioClick: e }) {
    super(), e && (this.onRadioClick = e.bind(this));
  }
  stackClickedRadio(e) {
    const t = this._radioItemStack.pop();
    t && t.data !== e.data && (t.radio.checked = !1, t.data.text = "false"), this._radioItemStack.push(e);
  }
  get lastClickedRadio() {
    return this._radioItemStack[this._radioItemStack.length - 1] ?? null;
  }
  render(e, t, n) {
    const o = document.createElement("div"), r = document.createElement("label"), i = document.createElement("input");
    if (o.setAttribute("data-has-px", ""), o.className = `${ts} ${Qe.radio}`, r.className = Qe.radioWrapper, i.type = "radio", i.className = Qe.radioInput, r.appendChild(i), n.label) {
      const a = document.createElement("span");
      a.className = Qe.radioText, a.innerText = n.label, r.appendChild(a);
    }
    return o.appendChild(r), i.checked = n.text === "true", i.checked === !0 && this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), r.onkeydown = (a) => a.preventDefault(), i.onclick = () => {
      const a = n.gridStore.commandContext, d = new ie(a, [e, t, { text: "true" }]), c = this._radioItemStack[this._radioItemStack.length - 1];
      d.onUndo = () => {
        c && (a.setCell(c.row, c.col, { text: "true" }), this.onRadioClick(c.row, c.col));
      }, d.onExecute = () => {
        this.onRadioClick(e, t);
      }, a.commandManager.pushCommandBlock(new he("Click radioButton", d)), this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, o;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const o = pe(e, t), r = n.label ? to + o.calculateWidth(n.label) : 0;
    return Ti + Li + r + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "radio";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const zc = ({ onRadioClick: s }) => {
  const e = new no({ onRadioClick: s });
  return () => e;
};
function oo(s) {
  const e = document.createElement("div");
  if (e.setAttribute("data-has-px", ""), e.setAttribute("data-has-py", ""), e.className = Mt, s.sortOrder !== void 0) {
    const t = document.createElement("i");
    t.className = `ir-icon ${je(s.sortOrder === "ASC" ? "sort-ascending" : "sort-descending")}`, e.appendChild(t);
  }
  if (s.icon) {
    const t = document.createElement("i");
    t.className = `ir-icon ${je(s.icon)}`, s.iconColor && t.style.setProperty("--ir-icon-foreground-color", s.iconColor), e.appendChild(t);
  }
  if (s.text) {
    const t = document.createElement("span");
    t.innerText = s.formatter ? s.formatter(s.text) : s.text, e.appendChild(t);
  }
  return e;
}
function Hi(s, e, t, n) {
  const o = document.createElement("div");
  if (o.setAttribute("data-has-px", ""), o.setAttribute("data-has-py", ""), o.className = Mt, t.icon) {
    const r = document.createElement("button"), i = document.createElement("i");
    r.setAttribute("type", "button"), r.classList.add("icon-button", is), n && (r.onclick = (a) => n(a, s, e)), i.className = `ir-icon ${je(t.icon)}`, t.iconColor && i.style.setProperty("--ir-icon-foreground-color", t.iconColor), r.appendChild(i), o.appendChild(r);
  }
  if (t.text) {
    const r = document.createElement("span");
    r.innerText = t.text, o.appendChild(r);
  }
  return o;
}
class Ft extends Q {
  constructor(e = {}) {
    super(), this._args = e;
  }
  getDisplayText(e) {
    return e.formatter ? e.formatter(e.text ?? "") : e.text ?? "";
  }
  render(e, t, n) {
    const o = oo(n), {
      ellipsis: r = !0,
      whiteSpace: i
    } = this._args;
    return r && o.classList.add(Wn), i && (o.style.whiteSpace = i), o;
  }
  get renderType() {
    return "default";
  }
}
class zi extends Q {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return Hi(e, t, n, (o, r, i) => this.onClick(o, r, i));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class Oi extends Q {
  _fixedRowCount;
  _captionList;
  _prefix = "";
  constructor(e, ...t) {
    super(), this._fixedRowCount = e, this._captionList = t;
  }
  get prefix() {
    return this._prefix;
  }
  get renderType() {
    return "rowNo";
  }
  get editable() {
    return !1;
  }
  set prefix(e) {
    this._prefix = e;
  }
  render(e, t, n) {
    const o = document.createElement("div"), r = document.createElement("span"), i = e - this._fixedRowCount;
    o.setAttribute("data-has-px", ""), o.setAttribute("data-has-py", ""), o.className = Mt;
    const a = i < this._captionList.length ? this._captionList[i] : `${this._prefix}${1 + i - this._captionList.length}`;
    return r.innerText = a, n.text = a, o.appendChild(r), o;
  }
}
const Oc = () => {
  const s = new Ft();
  return () => s;
};
function Ac({ onClick: s }) {
  const e = new zi({ onClick: s });
  return () => e;
}
function Dc(s, ...e) {
  const t = new Oi(s, ...e);
  return () => t;
}
const dn = /* @__PURE__ */ new WeakMap();
class so extends Ft {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function Fc(s) {
  const e = dn.get(s);
  if (e)
    return e;
  const t = new so(s);
  return dn.set(s, t), t;
}
var Ai = /* @__PURE__ */ q("<button type=button><span>"), Di = /* @__PURE__ */ q("<i>");
function Fi(s) {
  const {
    label: e,
    icon: t,
    onClick: n
  } = s;
  return (() => {
    var o = Ai(), r = o.firstChild;
    return Ht(o, "click", n, !0), $(o, ls), G(o, O(me, {
      when: t,
      children: (i) => (() => {
        var a = Di();
        return J(() => $(a, `ir-icon ir-icon-text ${i()}`)), a;
      })()
    }), r), G(r, e), o;
  })();
}
Tt(["click"]);
const ro = ur({}), Wi = ro.Provider;
function Oe() {
  return hr(ro);
}
var Pi = /* @__PURE__ */ q("<div><span>"), Ni = /* @__PURE__ */ q("<label><input type=checkbox><span>"), $i = /* @__PURE__ */ q("<i>"), un = /* @__PURE__ */ q("<div>"), Bi = /* @__PURE__ */ q("<div><div>");
const Gi = `${Ve.display.flex} ${Ve.alignCenter}`, Vi = `${Dn} ${Ve.textEllipsis} ${Ve.flex110}`;
function hn(s) {
  const e = s.filter((n) => n.checked).length, t = s.length === e;
  return {
    subChecked: e > 0 && !t,
    checkedAll: t
  };
}
function ji() {
  return (() => {
    var s = Pi(), e = s.firstChild;
    return $(s, Gi), `${_e}px` != null ? s.style.setProperty("height", `${_e}px`) : s.style.removeProperty("height"), G(e, () => X.t("rowFilter.list.no-result")), J(() => $(e, Ve.truncate)), s;
  })();
}
function fn(s) {
  return (() => {
    var e = Ni(), t = e.firstChild, n = t.nextSibling;
    return $(e, ds), $(t, An), $(n, Vi), G(n, O(me, {
      get fallback() {
        return s.text;
      },
      get when() {
        return s.icon;
      },
      children: (o) => (() => {
        var r = $i();
        return J(() => $(r, `ir-icon ir-icon-text ${o()}`)), r;
      })()
    })), J(() => xe(t, "data-state", s.subChecked ? "sub-checked" : "")), J(() => t.checked = s.checked), e;
  })();
}
function io(s) {
  const {
    makeCheckAll: e
  } = s;
  let t, n;
  const o = hn(s.rowItems), [r, i] = fe(o.subChecked), [a, d] = fe(o.checkedAll), c = fr(() => eo({
    getScrollElement: () => t,
    estimateSize: () => _e,
    count: s.rowItems.length,
    overscan: 4
  }));
  return s.ref?.({
    checkAll(f) {
      d(f), i(!1);
    }
  }), [O(me, {
    get when() {
      return s.rowItems.length === 0;
    },
    get children() {
      return O(ji, {});
    }
  }), (() => {
    var f = Bi(), g = f.firstChild, R = t;
    return typeof R == "function" ? ge(R, f) : t = f, f.style.setProperty("overflow", "auto"), f.style.setProperty("flex", "1 1 auto"), G(f, O(me, {
      when: e,
      get children() {
        var T = un();
        return T.addEventListener("change", h), `${_e}px` != null ? T.style.setProperty("height", `${_e}px`) : T.style.removeProperty("height"), G(T, O(fn, {
          get text() {
            return `(${X.t("rowFilter.list.select-all")})`;
          },
          get checked() {
            return a();
          },
          get subChecked() {
            return r();
          }
        })), T;
      }
    }), g), $(g, as), g.style.setProperty("position", "relative"), G(g, O(Lt, {
      get each() {
        return c().getVirtualItems();
      },
      children: (T) => (() => {
        var x = un();
        x.addEventListener("change", (L) => l(T.index, L));
        var H = n;
        return typeof H == "function" ? ge(H, x) : n = x, x.style.setProperty("position", "absolute"), `${_e}px` != null ? x.style.setProperty("height", `${_e}px`) : x.style.removeProperty("height"), x.style.setProperty("width", "100%"), G(x, O(fn, {
          get text() {
            return s.rowItems[T.index].text || `(${X.t("rowFilter.list.blanks")})`;
          },
          get checked() {
            return s.rowItems[T.index].checked;
          },
          get icon() {
            return s.rowItems[T.index].icon;
          }
        })), J((L) => (L = `${T.start}px`) != null ? x.style.setProperty("top", L) : x.style.removeProperty("top")), x;
      })()
    })), J((T) => {
      var x = s.rowItems.length === 0 ? "none" : "block", H = `calc(-1 * ${cs.sm})`, L = `${c().getTotalSize()}px`;
      return x !== T.e && ((T.e = x) != null ? f.style.setProperty("display", x) : f.style.removeProperty("display")), H !== T.t && ((T.t = H) != null ? f.style.setProperty("margin-right", H) : f.style.removeProperty("margin-right")), L !== T.a && ((T.a = L) != null ? g.style.setProperty("height", L) : g.style.removeProperty("height")), T;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), f;
  })()];
  function l(f, g) {
    if (!(g.target instanceof HTMLInputElement)) return;
    const R = s.rowItems[f], T = g.target.checked;
    R.checked = T, u(), s.onChangeCheck?.(R, T);
  }
  function h(f) {
    if (!(f.target instanceof HTMLInputElement)) return;
    const g = f.target.checked;
    s.rowItems.forEach((T) => T.checked = g), u(), s.onChangeCheck?.(null, g);
  }
  function u() {
    const f = s.rowItems, {
      checkedAll: g,
      subChecked: R
    } = hn(f);
    i(R), d(g);
  }
}
function Ui() {
  const {
    pluginAPI: s,
    columnId: e,
    operandsSignal: t,
    updateOperandsHandler: n
  } = Oe(), o = a(), [r, i] = fe(o);
  return O(io, {
    makeCheckAll: !0,
    get rowItems() {
      return r();
    },
    onChangeCheck: d
  });
  function a() {
    const c = s.getFilterOptionByCol(e) !== null, [l] = t, h = new Set(l().map((u) => u === "true"));
    return [{
      key: "true",
      text: "",
      checked: c && h.has(!0),
      icon: "ir-icon--check-all-rectangle"
    }, {
      key: "false",
      text: "",
      checked: c && h.has(!1),
      icon: "ir-icon--uncheck-all-rectangle"
    }];
  }
  function d(c, l) {
    c === null && i(o.map((h) => (h.checked = l, h))), n(o.filter((h) => h.checked).map((h) => h.key));
  }
}
var Ki = /* @__PURE__ */ q("<div>");
function ft(s) {
  const {
    defaultValue: e = "",
    format: t,
    onChange: n,
    placeholder: o
  } = s, {
    addOutSideElements: r
  } = Oe();
  let i;
  return He(() => {
    const a = new sr({
      div: i,
      defaultDate: e,
      format: t,
      onChange: n,
      placeholder: o
    }), d = a.input, c = a.button;
    r(rr().datePicker), d.oninput = () => n(a.textValue), c.onkeydown = (h) => {
      h.key === "Enter" && a.hide();
    }, d.addEventListener("blur", l, {
      capture: !0
    }), s.inputRef?.(d);
    function l(h) {
      h.relatedTarget instanceof HTMLElement && h.relatedTarget.closest(`.${Pn}`) && h.relatedTarget.textContent === X.t("rowFilter.ok") && h.stopPropagation();
    }
    ze(() => {
      d.removeEventListener("blur", l), a.destroy();
    });
  }), (() => {
    var a = Ki(), d = i;
    return typeof d == "function" ? ge(d, a) : i = a, a;
  })();
}
var qi = /* @__PURE__ */ q("<select>");
function Wt(s) {
  const {
    defaultKey: e,
    options: t,
    onChange: n
  } = s, {
    addOutSideElements: o
  } = Oe();
  let r;
  return He(() => {
    const i = new ir({
      contextElement: r
    });
    t.forEach(({
      key: a,
      text: d
    }) => i.addItem(a, X.t(d))), i.onChange = (a, d) => n(d.value), i.value = e, o(i.divDropDown), ze(() => i.destroy());
  }), (() => {
    var i = qi(), a = r;
    return typeof a == "function" ? ge(a, i) : r = i, i;
  })();
}
const it = [
  { key: "equals", text: "rowFilter.op.equals" },
  { key: "not-equals", text: "rowFilter.op.not-equals" },
  { key: "less-than", text: "rowFilter.op.less" },
  { key: "less-than-or-equal", text: "rowFilter.op.less-eq" },
  { key: "greater-than", text: "rowFilter.op.greater" },
  { key: "greater-than-or-equal", text: "rowFilter.op.greater-eq" },
  { key: "in-range", text: "rowFilter.number.select.between" },
  { key: "blank", text: "rowFilter.number.select.blank" }
], Xi = [
  { key: "equals", text: "rowFilter.op.equals" },
  { key: "not-equals", text: "rowFilter.op.not-equals" },
  { key: "contains", text: "rowFilter.op.like" },
  { key: "not-contains", text: "rowFilter.op.not-like" },
  { key: "starts-with", text: "rowFilter.op.starts-with" },
  { key: "ends-with", text: "rowFilter.op.ends-with" }
];
function Pt(s = !0) {
  let e = null;
  return {
    focus: () => e?.focus({ preventScroll: !0 }),
    setFocusRef(n) {
      e = n, s && n.focus({ preventScroll: !0 });
    }
  };
}
function Yi() {
  const {
    pluginAPI: s,
    columnId: e,
    operatorSignal: t,
    operandsSignal: n,
    updateOperandHandler: o
  } = Oe(), {
    format: r = X.t("datePicker.dateFormat")
  } = s.getColumnMetaInfo(e), [i, a] = t, [d, c] = n, l = i() ?? it[0].key, h = Pt();
  return [O(Wt, {
    defaultKey: l,
    options: it,
    onChange: f
  }), O(zt, {
    get children() {
      return [O(ue, {
        get when() {
          return i() === "in-range";
        },
        get children() {
          return [O(ft, {
            get inputRef() {
              return h.setFocusRef;
            },
            get defaultValue() {
              return d()[0] ?? "";
            },
            format: r,
            get placeholder() {
              return u("rowFilter.date.between.from");
            },
            get onChange() {
              return o(0);
            }
          }), O(ft, {
            get defaultValue() {
              return d()[1] ?? "";
            },
            format: r,
            get placeholder() {
              return u("rowFilter.date.between.to");
            },
            get onChange() {
              return o(1);
            }
          })];
        }
      }), O(ue, {
        get when() {
          return i() !== "blank";
        },
        get children() {
          return O(ft, {
            get inputRef() {
              return h.setFocusRef;
            },
            get defaultValue() {
              return d()[0] ?? "";
            },
            format: r,
            get placeholder() {
              return u("rowFilter.date.input.placeholder");
            },
            get onChange() {
              return o(0);
            }
          });
        }
      })];
    }
  })];
  function u(g) {
    return `${X.t(g)} (${r})`;
  }
  function f(g) {
    g === "equals" && c(d().slice(0, 1)), a(g), h.focus();
  }
}
var Zi = /* @__PURE__ */ q("<button type=button><i>"), Ji = /* @__PURE__ */ q("<button aria-label=search type=submit><i>"), Qi = /* @__PURE__ */ q("<div><input>");
function tt(s) {
  const e = () => s.class, t = () => s.suffixButtonIcon && s.matchCaseToggle ? "padding-right: 44px" : "";
  return (() => {
    var o = Qi(), r = o.firstChild;
    return gr(r, ot(s, {
      get class() {
        return Ue(Fn, e());
      },
      get style() {
        return t();
      }
    }), !1, !1), G(o, O(me, {
      get when() {
        return s.matchCaseToggle;
      },
      get children() {
        var i = Zi(), a = i.firstChild;
        return Ht(i, "click", n), $(i, bt), i.style.setProperty("right", "24px"), J(() => $(a, Ue("ir-icon ir-icon--lowercase", s.matchCase && "ir-icon--rounded"))), i;
      }
    }), null), G(o, O(me, {
      get when() {
        return s.suffixButtonIcon;
      },
      get children() {
        var i = Ji(), a = i.firstChild;
        return $(i, bt), J(() => $(a, `ir-icon ${s.suffixButtonIcon}`)), i;
      }
    }), null), J(() => $(o, s.wrapperClass)), o;
  })();
  function n() {
    s.onToggleMatchCase?.(!s.matchCase);
  }
}
function el() {
  const {
    operatorSignal: s,
    operandsSignal: e,
    onInputUpdateHandler: t
  } = Oe(), n = Pt(), [o, r] = s, [i, a] = e, d = o() ?? it[0].key;
  return [O(Wt, {
    defaultKey: d,
    options: it,
    onChange: c
  }), O(zt, {
    get children() {
      return [O(ue, {
        get when() {
          return o() === "in-range";
        },
        get children() {
          return [O(tt, {
            ref(l) {
              var h = n.setFocusRef;
              typeof h == "function" ? h(l) : n.setFocusRef = l;
            },
            get value() {
              return i()[0] ?? "";
            },
            get placeholder() {
              return X.t("rowFilter.number.between.from");
            },
            get onInput() {
              return t(0);
            }
          }), O(tt, {
            get value() {
              return i()[1] ?? "";
            },
            get placeholder() {
              return X.t("rowFilter.number.between.to");
            },
            get onInput() {
              return t(1);
            }
          })];
        }
      }), O(ue, {
        get when() {
          return o() !== "blank";
        },
        get children() {
          return O(tt, {
            ref(l) {
              var h = n.setFocusRef;
              typeof h == "function" ? h(l) : n.setFocusRef = l;
            },
            get value() {
              return i()[0] ?? "";
            },
            get placeholder() {
              return X.t("rowFilter.number.input.placeholder");
            },
            get onInput() {
              return t(0);
            }
          });
        }
      })];
    }
  })];
  function c(l) {
    l === "equals" && a(i().slice(0, 1)), r(l), n.focus();
  }
}
const tl = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function gn(s) {
  return s === "" ? !0 : tl.test(s);
}
function mn(s) {
  return s === "" ? Number.NEGATIVE_INFINITY : parseFloat(s);
}
function Nt(s, e) {
  if (s === e) return 0;
  const t = gn(s), n = gn(e);
  return t && n ? mn(s) < mn(e) ? -1 : 1 : !t && !n ? s < e ? -1 : 1 : t ? -1 : 1;
}
const nl = (s) => (e, t) => Nt(e.getCell(s).text, t.getCell(s).text), Wc = ({
  grid: s
}) => ({
  sortColumn(e, t, n, o) {
    s.sort(nl(e), t, n, o);
  }
});
var ol = /* @__PURE__ */ q("<form>");
function sl() {
  const s = Pt(), {
    pluginAPI: e,
    columnId: t,
    operatorSignal: n,
    operandsSignal: o,
    stringFilterOptions: r,
    ignoreCase: i
  } = Oe(), [a, d] = n, [c, l] = o, h = a();
  let u, f = [], g, R = "";
  const T = e.getFilterOptionByCol(t), x = new Set(o[0]()), H = e.getFilteredTextListForCol(t).sort((y, M) => Nt(y, M)).map((y) => ({
    text: y,
    key: y,
    // filterOptions이 있는 경우, 체크된 항목을 표시
    checked: T ? x.has(y) : !1
  })), [L, I] = fe(H.filter(E())), b = h !== "equals" ? c()[0] : "";
  return [O(Wt, {
    defaultKey: h,
    options: Xi,
    onChange: p
  }), (() => {
    var y = ol();
    y.addEventListener("submit", w);
    var M = u;
    return typeof M == "function" ? ge(M, y) : u = y, y.style.setProperty("display", "contents"), G(y, O(tt, {
      ref(m) {
        var S = s.setFocusRef;
        typeof S == "function" ? S(m) : s.setFocusRef = m;
      },
      name: "search-text",
      autocomplete: "off",
      value: b,
      wrapperClass: us,
      get suffixButtonIcon() {
        return a() === "equals" ? "ir-icon--search" : void 0;
      },
      get placeholder() {
        return X.t("rowFilter.string.input.placeholder");
      },
      "on:input": C
    })), y;
  })(), O(me, {
    get when() {
      return a() === "equals";
    },
    get children() {
      return O(io, {
        ref: (y) => g = y,
        makeCheckAll: !0,
        get rowItems() {
          return L();
        },
        onChangeCheck: v
      });
    }
  })];
  function C() {
    a() !== "equals" && l([u["search-text"].value]);
  }
  function w(y) {
    y.preventDefault();
    const M = u["search-text"].value, m = a() !== "equals", _ = m || M === R;
    if (m && l([M]), _) {
      if (a() === "equals" && f.length === 0) return;
      u.parentElement?.closest("form")?.requestSubmit();
      return;
    }
    R = M, f = H.filter(E()), R === "" ? (I(f.map((k) => (k.checked = !1, k))), l([]), g.checkAll(!1)) : (I(f.map((k) => (k.checked = !0, k))), l([R, ...f.map((k) => k.text)]), g.checkAll(!0));
  }
  function E() {
    if (R === "") return () => !0;
    const y = r === "equals" ? new RegExp(`^${R}$`, i ? "i" : "") : new RegExp(R, i ? "i" : "");
    return (M) => y.test(M.text);
  }
  function p(y) {
    d(y), s.focus();
  }
  function v(y, M) {
    y === null && I(L().map((m) => m)), l(L().filter((m) => m.checked).map((m) => m.text));
  }
}
var rl = /* @__PURE__ */ q("<div>");
function il(s) {
  let e;
  const t = mr(() => s.children);
  return He(() => {
    const n = Gn(s.refElement, e, s.placement, s.offset);
    ze(() => n());
  }), (() => {
    var n = rl(), o = e;
    return typeof o == "function" ? ge(o, n) : e = n, n.style.setProperty("position", "absolute"), G(n, t), n;
  })();
}
var ll = /* @__PURE__ */ q("<div>"), al = /* @__PURE__ */ q('<form><div></div><div><button class=button type=button></button><button type=submit class="button button--primary">');
const pn = [{
  key: "ASC",
  i18nKey: "rowFilter.sort.ascending",
  icon: "ir-icon--sort-ascending"
}, {
  key: "DESC",
  i18nKey: "rowFilter.sort.descending",
  icon: "ir-icon--sort-descending"
}], cl = [{
  key: "CHECK-ALL",
  i18nKey: "rowFilter.check.check-all",
  icon: "ir-icon--check-all-rectangle"
}, {
  key: "UNCHECK-ALL",
  i18nKey: "rowFilter.check.uncheck-all",
  icon: "ir-icon--uncheck-all-rectangle"
}], dl = {
  key: "DELETE",
  i18nKey: "rowFilter.sort.clear",
  icon: "ir-icon--delete"
}, ul = 500;
function* hl(s) {
  const {
    visibleSortButton: e,
    sortOrder: t,
    pluginAPI: n,
    visibleCheckAllButton: o,
    columnId: r
  } = s, i = n.getColumnMetaInfo(r);
  yield* a(), yield* d();
  function* a() {
    if (e) {
      if (!t) {
        yield* pn;
        return;
      }
      yield dl, yield pn[t === "ASC" ? 1 : 0];
    }
  }
  function* d() {
    o && i.textType === "checked" && (yield* cl);
  }
}
function fl(s, e) {
  const {
    visibleSortButton: t,
    pluginAPI: n,
    columnId: o,
    resizerUI: r,
    maxWidth: i,
    maxHeight: a
  } = e, d = n.getColumnMetaInfo(o);
  t && ne(s, {
    [Pe.maxHeight]: "375px"
  }), d.textType === "date" && ne(s, {
    [Pe.minWidth]: "200px"
  }), r && (s.style.resize = "both", s.style.overflow = "auto", ne(s, {
    [Pe.maxHeight]: "510px"
  }), s.style.minHeight = t ? "200px" : "125px"), ne(s, {
    [Pe.maxWidth]: `${i ?? ul}px`
  }), a && ne(s, {
    [Pe.maxHeight]: `${a}px`
  });
}
function gl(s) {
  const {
    pluginAPI: e,
    refElement: t,
    rowId: n,
    columnId: o,
    onClose: r,
    onSubmit: i,
    onClear: a,
    onDropdownButtonClick: d,
    stringEqualsFilterOption: c = "contains",
    ignoreCase: l = !1
  } = s, h = [...hl(s)], u = e.getColumnMetaInfo(o), f = e.getFilterOptionByCol(o), g = [];
  let R;
  const T = fe(f?.operator ?? "equals"), x = fe(f?.operand ?? []), [H] = T, [L, I] = x;
  return He(() => {
    const p = Dt({
      hide: r
    }), v = Vn({
      eventElements: [R, t],
      getEventElements: () => g,
      clickOutsideFunc: r
    });
    v.create(), p.create(), fl(R, s), ze(() => {
      p.destroy(), v.destroy();
    });
  }), O(Wi, {
    value: {
      columnId: o,
      pluginAPI: e,
      operatorSignal: T,
      operandsSignal: x,
      updateOperandHandler: C,
      updateOperandsHandler: (p) => x[1](p),
      addOutSideElements: (p) => g.push(p),
      onInputUpdateHandler: (p) => (v) => C(p)(v.currentTarget.value),
      get stringFilterOptions() {
        return c;
      },
      get ignoreCase() {
        return l;
      }
    },
    get children() {
      var p = al(), v = p.firstChild, y = v.nextSibling, M = y.firstChild, m = M.nextSibling, S = R;
      return typeof S == "function" ? ge(S, p) : R = p, Ht(p, "submit", b), $(p, hs), G(p, O(me, {
        get when() {
          return h.length > 0;
        },
        get children() {
          var _ = ll();
          return $(_, fs), G(_, O(Lt, {
            each: h,
            children: (k) => O(Fi, {
              get label() {
                return X.t(k.i18nKey);
              },
              get icon() {
                return k.icon;
              },
              onClick: () => E(k)
            })
          })), _;
        }
      }), v), $(v, gs), G(v, O(zt, {
        get fallback() {
          return `unknown textType '${u.textType}'`;
        },
        get children() {
          return [O(ue, {
            get when() {
              return u.textType === "date";
            },
            get children() {
              return O(Yi, {});
            }
          }), O(ue, {
            get when() {
              return u.textType === "number";
            },
            get children() {
              return O(el, {});
            }
          }), O(ue, {
            get when() {
              return u.textType === "checked";
            },
            get children() {
              return O(Ui, {});
            }
          }), O(ue, {
            get when() {
              return u.textType === "string";
            },
            get children() {
              return O(sl, {});
            }
          })];
        }
      })), $(y, Pn), M.$$click = w, G(M, () => X.t("rowFilter.clear")), G(m, () => X.t("rowFilter.ok")), J(() => xe(p, "id", e.dropdownId)), p;
    }
  });
  function b(p) {
    p.preventDefault();
    const v = L(), y = H();
    v.length > 0 && (e.setColFilter({
      operator: y,
      operand: v,
      column: o
    }), i()), r();
  }
  function C(p) {
    return (v) => {
      const y = L();
      y[p] = v, I([...y]);
    };
  }
  function w() {
    e.getFilterOptionByCol(o) && e.removeColFilter(o), a(), r();
  }
  function E(p) {
    const {
      key: v
    } = p;
    switch (v) {
      case "DELETE":
        e.clearSortOrder();
        break;
      case "ASC":
      case "DESC":
        e.setSortOrder(n, o, v);
        break;
      case "CHECK-ALL":
      case "UNCHECK-ALL":
        e.setCheckAll(o, v === "CHECK-ALL");
        break;
    }
    d?.(v), r();
  }
}
function ml(s) {
  return O(il, {
    get refElement() {
      return s.refElement;
    },
    placement: "bottom-start",
    get children() {
      return O(gl, s);
    }
  });
}
Tt(["click"]);
const gt = 20;
class Pc extends Q {
  constructor(e) {
    super(), this._args = e;
  }
  render(e, t, n) {
    const {
      plugin: o,
      onDropdownButtonClick: r,
      visibleSortButton: i = !0,
      visibleCheckAllButton: a = !0,
      stringEqualsFilterOption: d = "contains",
      ignoreCase: c = !1,
      resizerUI: l = !0,
      maxWidth: h,
      maxHeight: u
    } = this._args, f = document.createElement("div"), g = o.pluginAPI;
    f.className = ms, f.setAttribute("data-has-px", "");
    const R = oo(n);
    return R.removeAttribute("data-has-px"), R.removeAttribute("data-has-py"), R.classList.add(Wn, ps), f.append(R), g.getColumnMetaInfo(t).enabled !== !1 && f.appendChild(x()), f;
    function x() {
      const H = Ot("ir-icon--filter", Cs);
      H.style.setProperty("--ir-icon-badge-color", ws.info.active), b();
      let L = null;
      return H.onclick = (C) => {
        if (C.__IGNORE_CELL_CLICK__ = !0, L) return I();
        L = Bn(
          () => ml({
            pluginAPI: g,
            visibleSortButton: i,
            visibleCheckAllButton: a,
            onDropdownButtonClick: r,
            refElement: H,
            rowId: e,
            columnId: t,
            sortOrder: n.sortOrder,
            onClose: I,
            onSubmit: b,
            onClear: b,
            stringEqualsFilterOption: d,
            ignoreCase: c,
            resizerUI: l,
            maxWidth: h,
            maxHeight: u
          }),
          Me("popover")
        );
      }, H;
      function I() {
        L?.(), L = null, n.gridStore.gridTextarea.focus();
      }
      function b() {
        const C = !!g.getFilterOptionByCol(t);
        H.classList.toggle("ir-icon-badge--right", C);
      }
    }
  }
  getCellInnerWidth(e, t, n) {
    const o = pe(e, t);
    return this.getHorizontalCellPadding(n) + o.calculateWidth(n.text ?? "") + (n.sortOrder ? gt : 0) + (n.icon ? gt : 0) + gt;
  }
  get renderType() {
    return "filter";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
function pl(s, e) {
  const { rowSpan: t, colSpan: n, skipFiltered: o } = e;
  return {
    getPastingRange: a,
    beforePastingList: d,
    pasteTask: c
  };
  function r(l, h) {
    const u = s.getRowCount();
    let f = 0, g = l;
    for (; g < u; ) {
      if (s.isFilteredRow(g) || f++, f === h) return g;
      ++g;
    }
    return g - 1 + (h - f);
  }
  function i(l) {
    return l.top === l.bottom && l.left === l.right;
  }
  function a(l, h) {
    if (h.length === 0) throw new Error("No pasting data.");
    const u = { ...l }, f = h.length, g = h[0].length, R = i(l) ? r(l.top, f) + 1 : u.top + f, T = u.left + g;
    for (let x = l.bottom + 1; x < R; ++x)
      (s.hasRow(x) || s.onAutoInsertRow(x)) && (u.bottom = x);
    for (let x = l.right + 1; x < T; ++x)
      (s.hasColumn(x) || s.onAutoInsertColumn(x)) && (u.right = x);
    return u;
  }
  function d(l, h) {
    if (h.length === 0) throw new Error("No pasting data.");
    const u = [], f = h.length, g = h[0].length, R = l.bottom - l.top, T = l.right - l.left;
    let x = 0;
    for (let b = 0; b <= R; ++b) {
      const C = b + l.top;
      if (H(C), !!s.hasRow(C)) {
        if (o && s.isFilteredRow(C)) {
          ++x;
          continue;
        }
        for (let w = 0; w <= T; ++w) {
          const E = w + l.left;
          if (L(E), !s.hasColumn(E)) break;
          const p = s.cell(C, E), v = I(b - x, w), y = s.onCheckPasteCell(p, v.text);
          v.cellVisible && y && u.push({
            cell: p,
            cellMetaInfo: {
              text: v.text,
              cellVisible: v.cellVisible,
              rowSpan: t ? v.rowSpan : 1,
              colSpan: n ? v.colSpan : 1,
              isFormatted: !1
            },
            pasteOption: typeof y == "object" ? y : void 0
          });
        }
      }
    }
    return u;
    function H(b) {
      !s.hasRow(b) && s.onAutoInsertRow(b) && (s.addRow(), s.onAutoInsertedRow(b));
    }
    function L(b) {
      !s.hasColumn(b) && s.onAutoInsertColumn(b) && (s.addColumn(), s.onAutoInsertedColumn(b));
    }
    function I(b, C) {
      const [w, E] = [b % f, C % g];
      return h[w][E];
    }
  }
  function c(l) {
    for (const { cell: h, cellMetaInfo: u, pasteOption: f } of l) {
      const { rowSpan: g, colSpan: R, cellVisible: T } = u;
      if (!T) continue;
      const { row: x, col: H } = h;
      if (f?.ignoreRowSpan !== !0 && g > 1 || f?.ignoreColSpan !== !0 && R > 1) {
        const I = { top: x, left: H, bottom: x + g - 1, right: H + R - 1 };
        s.mergeCells(I.top, I.left, I.bottom, I.right);
      }
      f?.ignoreText || s.setCell(x, H, { text: u.text }), s.onClipboardAfterPasteCell(h);
    }
  }
}
function Cl(s) {
  return JSON.stringify(s);
}
function wl(s) {
  return JSON.parse(s);
}
function _l(s) {
  const e = [], t = [];
  for (const n of s)
    switch (n) {
      case " ":
        t.push(" ");
        break;
      case `
`:
        e.push(document.createTextNode(t.join(""))), e.push(document.createElement("br")), t.length = 0;
        break;
      default:
        t.push(n);
        break;
    }
  return e.push(document.createTextNode(t.join(""))), e;
}
function Rl(s) {
  const e = document.createElement("table");
  return s.forEach((t) => {
    const n = document.createElement("tr");
    t.filter((o) => o.cellVisible).forEach((o) => {
      const r = document.createElement("td");
      r.setAttribute("rowSpan", `${o.rowSpan}`), r.setAttribute("colSpan", `${o.colSpan}`), r.append(..._l(o.text)), n.append(r);
    }), e.appendChild(n);
  }), `
    <meta name="generator" content="innorules/ir-grid"/>
    <style type="text/css">td{white-space:normal}br{mso-data-placement:same-cell}</style>
    ${e.outerHTML}
`;
}
function xl(s) {
  const n = new DOMParser().parseFromString(s, "text/html").querySelectorAll("tr");
  if (n.length === 0) return [];
  const o = Array(n.length).fill(null).map(() => []);
  let r = 0;
  for (const d of n) {
    const c = d.querySelectorAll("td");
    let l = i(0);
    for (const h of c)
      (h.rowSpan > 1 || h.colSpan > 1) && a(r, l, h.rowSpan, h.colSpan), o[r][l] = {
        text: Sl(h),
        rowSpan: h.rowSpan,
        colSpan: h.colSpan,
        cellVisible: !0,
        isFormatted: h.hasAttribute("class")
      }, l = i(l);
    ++r;
  }
  return o;
  function i(d) {
    let c = d;
    for (; o[r][c]; )
      ++c;
    return c;
  }
  function a(d, c, l, h) {
    for (let u = d; u < d + l; ++u)
      for (let f = c; f < c + h; ++f)
        o[u][f] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
}
function Sl(s) {
  const e = [], t = [];
  let n = s.firstChild;
  for (; n; )
    n.nodeType === Node.TEXT_NODE && n.nodeValue ? t.push(n.nodeValue) : n.nodeName === "BR" && t.push(`

`), n.nextSibling && e.push(n.nextSibling), n.firstChild && e.push(n.firstChild), n = e.pop();
  return bl(t);
}
function bl(s) {
  const e = [];
  let t = !1;
  for (const n of s) {
    if (n === `

`) {
      e.push(`
`);
      continue;
    }
    let o = !1;
    for (const r of n)
      switch (r) {
        // Ideographic Space
        case "　":
        case " ":
        case `
`:
          o && (t = !0);
          break;
        default:
          t && (e.push(" "), t = !1), o = !0, e.push(r === " " ? " " : r);
          break;
      }
  }
  return e.join("");
}
function yl(s) {
  if (s.length === 0) return !0;
  const e = s[0].length;
  return s.every((t) => t.length === e);
}
const lo = "	", ao = `
`;
function vl(s) {
  if (!yl(s)) throw new Error("Wrong text matrix dimension");
  return s.map(
    (e) => e.map(
      ({ text: t, cellVisible: n }) => n ? t : ""
    ).join(lo)
  ).join(ao);
}
function kl(s) {
  if (s.length === 0) return [];
  const e = [], t = [], n = [];
  function o() {
    n.push({
      text: t.join(""),
      rowSpan: 1,
      colSpan: 1,
      cellVisible: !0,
      isFormatted: !1
    }), t.length = 0;
  }
  function r() {
    o(), (e.length === 0 || n.length === e[0]?.length) && e.push([...n]), n.length = 0;
  }
  for (const i of s)
    i !== "\r" && (i === lo ? o() : i === ao ? r() : t.push(i));
  return (t.length > 0 || n.length > 0) && r(), e;
}
const nt = [
  {
    format: "ir-grid/cell",
    parseFunc: wl,
    payloadFunc: Cl
  },
  {
    format: "text/html",
    parseFunc: xl,
    payloadFunc: Rl
  },
  {
    format: "text/plain",
    parseFunc: kl,
    payloadFunc: vl
  }
];
function Cn(s, e) {
  nt.forEach(
    ({ format: t, payloadFunc: n }) => s.setData(t, n(e))
  );
}
function co(s) {
  return s.isFormatted && s.text.startsWith("#");
}
function Il(s) {
  return s.some((e) => e.some((t) => co(t)));
}
function El(s, e) {
  for (let t = 0; t < s.length; ++t) {
    const n = s[t].length;
    for (let o = 0; o < n; ++o)
      e[t]?.[o]?.text && co(s[t][o]) && (s[t][o].text = e[t][o].text);
  }
  return s;
}
function wn(s) {
  for (const { format: e, parseFunc: t } of nt) {
    const n = s.getData(e);
    if (n !== "") {
      const o = t(n);
      if (!Il(o))
        return o;
      const r = s.getData(nt[2].format);
      return El(
        o,
        nt[2].parseFunc(r)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
const Ml = 9999;
class uo {
  _minSize;
  _maxSize;
  constructor(e) {
    this._minSize = e.minSize, this._maxSize = e.maxSize;
  }
  get minSize() {
    return this._minSize;
  }
  get maxSize() {
    return this._maxSize;
  }
  getBoundSize(e) {
    return ct(e, this._minSize, this._maxSize);
  }
  setMinSize(e) {
    e !== this._minSize && (this._minSize = ct(e, 0, this._maxSize));
  }
  setMaxSize(e) {
    e !== this._maxSize && (this._maxSize = ct(e, this._minSize, Ml));
  }
}
const $t = 1, lt = 1, ho = -1;
class Tl extends uo {
  _left = 0;
  _columnId = 0;
  _width = 0;
  _visible = !0;
  constructor(e) {
    super(e);
    const { columnId: t, width: n, left: o } = e;
    this.columnId = t, this.width = n, this.left = o;
  }
  get columnId() {
    return this._columnId;
  }
  get left() {
    return this._left;
  }
  get width() {
    return this._width;
  }
  get widthWithBorder() {
    return this._width + lt;
  }
  get visible() {
    return this._visible;
  }
  get right() {
    return this.visible ? this.left + this.widthWithBorder : this.left;
  }
  set visible(e) {
    this._visible = e;
  }
  set columnId(e) {
    this._columnId = e;
  }
  set left(e) {
    this._left = e;
  }
  set width(e) {
    this._width = e;
  }
  isBetweenLeft(e) {
    return e >= this.left && e < this.right;
  }
}
class Ll {
  _rowHeaderColumns;
  _gridHookFlow;
  _freezedColumns;
  _columnsList = [];
  _visibleColumnsList = [];
  _columnsWidth = 0;
  _rowHeaderColumnsWidth = 0;
  _freezedColumnsWidth = 0;
  constructor(e, t, n) {
    this._rowHeaderColumns = e, this._freezedColumns = t, this._gridHookFlow = n;
  }
  addColumn(e) {
    this._columnsList.push(e), this._visibleColumnsList.push(e), this.updateColumnWidth(e, "add"), this.addFixedWidth(e);
  }
  isHeaderColumnId(e) {
    return e < this.headerColumns;
  }
  isInvalidColumnId(e) {
    return e < 0 || e >= this._columnsList.length;
  }
  updateVisibleColumnList() {
    this._visibleColumnsList = this._columnsList.filter((e) => e.visible);
  }
  updateColumnWidth(e, t) {
    if (t === "remove" && !e.visible) return;
    const n = t === "add" || t === "show" ? e.widthWithBorder : -e.widthWithBorder;
    this._columnsWidth += n;
  }
  removeColumns(e, t) {
    this._columnsList.splice(e, t - e + 1).forEach((o) => this.updateColumnWidth(o, "remove")), this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  freezeColumns(e) {
    this._freezedColumns = e, this.updateFixedWidth();
  }
  _changeColumnWidth(e, t) {
    this._columnsWidth -= t, e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth -= t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth -= t, this._gridHookFlow.emitSync("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]));
  }
  insertColumns(e, t) {
    let n = this._columnsList[e].left;
    this._columnsList.splice(e, 0, ...t);
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      r.left = n, this.updateColumnWidth(r, "add"), n = r.right;
    }
    this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  addFixedWidth(e, t = 1) {
    e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth += e.widthWithBorder * t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth += e.widthWithBorder * t);
  }
  updateFixedWidth() {
    this._rowHeaderColumnsWidth = 0, this._freezedColumnsWidth = 0;
    let e = 0;
    const t = Math.min(this.freezedColumns, this._columnsList.length);
    for (; e < t; ) {
      const n = this.getColumn(e);
      n.visible && this.addFixedWidth(n), ++e;
    }
    this._gridHookFlow.emitSync("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]);
  }
  setColumnWidth(e, t) {
    const n = this.getColumn(e), o = n.width - t;
    o !== 0 && (n.width = t, n.visible && this._changeColumnWidth(n, o));
  }
  setColumnVisible(e, t) {
    const n = this.getColumn(e);
    n.visible !== t && (n.visible = t, this.updateColumnWidth(n, t ? "show" : "hide"), this.updateVisibleColumnList(), this.updateFixedWidth());
  }
  getColumnLeft(e) {
    return this.getColumn(e).left;
  }
  getColumnRight(e) {
    return this.getColumn(e).right;
  }
  getColumnWidth(e) {
    return this._columnsList[e].width;
  }
  getColumnVisible(e) {
    return this._columnsList[e]?.visible ?? !1;
  }
  getColCount() {
    return this._columnsList.length;
  }
  getColumn(e) {
    const t = this._columnsList[e];
    if (!t) throw new Error("No column");
    return t;
  }
  getColumnUnstable(e) {
    return this._columnsList[e];
  }
  updateColumnsLeftFrom(e) {
    P(e, this._columnsList.length).reduce((t, n) => {
      const o = this._columnsList[n];
      return o.left = t, o.visible ? t + o.width + lt : t;
    }, this.getColumn(e).left);
  }
  get firstColumn() {
    return this._columnsList[0];
  }
  get lastColumn() {
    return this._columnsList[this._columnsList.length - 1];
  }
  get visibleColumnList() {
    return this._visibleColumnsList;
  }
  get columnsWidth() {
    return this._columnsWidth;
  }
  get rowHeaderColumnsWidth() {
    return this._rowHeaderColumnsWidth;
  }
  get length() {
    return this._columnsList.length;
  }
  get fixedColumnsWidth() {
    return this._freezedColumnsWidth;
  }
  get headerColumns() {
    return this._rowHeaderColumns;
  }
  get freezedColumns() {
    return this._rowHeaderColumns + this._freezedColumns;
  }
  get bodyFreezedColumns() {
    return this._freezedColumns;
  }
}
class Hl {
  _headerRows;
  _gridHookFlow;
  _rowList = [];
  _visibleRowList = [];
  _freezedRows;
  _rowsHeight;
  _headerRowsHeight;
  _freezedRowsHeight;
  constructor(e, t, n) {
    this._headerRows = e, this._freezedRows = t, this._rowsHeight = 0, this._headerRowsHeight = 0, this._freezedRowsHeight = 0, this._gridHookFlow = n;
  }
  getRow(e) {
    const t = this._rowList[e];
    if (!t) throw new Error(`Not found row ${e}`);
    return t;
  }
  /**
   * null일 수 있지만, 빠른 접근을 위해 사용
   */
  getRowUnstable(e) {
    return this._rowList[e];
  }
  addRow(e) {
    this._rowList.push(e), this._visibleRowList.push(e), this._updateRowHeight(e, "add"), e.rowId < this.freezedRows && this._updateFixedHeight();
  }
  getMaxCellWidth(e, t) {
    return this._rowList.reduce((n, o) => Math.max(n, o.getMaxCellWidth(e, t)), 0);
  }
  clearRows() {
    this.runFuncEachRow(
      (e) => e.remove(),
      this.headerRows
    ), this._rowList.length = this.headerRows, this._rowsHeight = this.headerRowsHeight, this._freezedRowsHeight = this.headerRowsHeight, this._updateVisibleRowList();
  }
  addColumn(e) {
    this._rowList.forEach((t) => t.addCell(e(t)));
  }
  setColumnVisible(e, t) {
    this._rowList.forEach((n) => n.getCell(e).visible = t);
  }
  insertColumns(e, t, n) {
    this._rowList.forEach((o) => {
      const r = P(t).map((i) => n(o.rowId, e + i));
      o.insertCells(r, e);
    });
  }
  removeRows(e, t, n) {
    const o = this._rowList.slice(e, t + 1), r = n?.ignoreFiltered === !0 ? o.filter((i) => !i.filtered) : o;
    if (this._rowList = [
      ...this._rowList.slice(0, e),
      // filter 되지 않은 row
      ...o.filter((i) => !r.includes(i)),
      ...this._rowList.slice(t + 1)
    ], r.length !== 0) {
      for (const i of r)
        this._updateRowHeight(i, "remove"), i.remove();
      this._updateVisibleRowList(), this._updateFixedHeight();
    }
  }
  removeColumns(e, t) {
    this._rowList.forEach((n) => n.removeCells(e, t));
  }
  setColumnWidth(e, t) {
    this._rowList.forEach((n) => n.updateColumnWidth(e, t));
  }
  insertRows(e, t) {
    let n = this._rowList[e].top;
    this._rowList.splice(e, 0, ...t);
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      r.top = n, this._updateRowHeight(r, "add"), n = r.bottom;
    }
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  insertRowByList(e) {
    const t = [...this._rowList];
    this._rowList.length = 0;
    const n = t[Symbol.iterator](), o = e[Symbol.iterator]();
    let r = o.next().value, i = n.next().value, a = 0;
    for (; i; )
      r && r.rowId === a ? (r.recover(), this._rowList.push(r), this._updateRowHeight(r, "add"), r = o.next().value) : (this._rowList.push(i), i = n.next().value), ++a;
    for (; r; )
      r.recover(), this._rowList.push(r), this._updateRowHeight(r, "add"), r = o.next().value;
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  moveRows([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const o = this._rowList.splice(e, t - e + 1);
    o.forEach((i) => i.unmount());
    const r = e < n ? n - o.length : n;
    this._rowList.splice(r, 0, ...o), this._updateVisibleRowList();
  }
  getAdjustTargetRow(e) {
    return e >= this.length ? this.length : e < this.freezedRows ? this.freezedRows : this.getStartOfRowId(e);
  }
  exchangeRows([e, t], [n, o]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (o < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= o && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, targetRow: ${n},${o}`);
    const [r, i, a, d] = e < n ? [e, t, n, o] : [n, o, e, t], c = this._rowList.slice(r, i + 1), l = this._rowList.slice(a, d + 1);
    c.forEach((h) => h.unmount()), l.forEach((h) => h.unmount()), this._rowList = [
      ...this._rowList.slice(0, r),
      ...l,
      ...this._rowList.slice(i + 1, a),
      ...c,
      ...this._rowList.slice(d + 1)
    ], this._updateVisibleRowList();
  }
  isHeaderRowId(e) {
    return e < this.headerRows;
  }
  isInvalidRowId(e) {
    return e < 0 || e >= this._rowList.length;
  }
  getSnapshotRows() {
    return [...this._rowList];
  }
  _addFixedHeight(e, t, n = 1) {
    t < this.headerRows && (this._headerRowsHeight += e.heightWithBorder * n), t < this.freezedRows && (this._freezedRowsHeight += e.heightWithBorder * n);
  }
  _updateFixedHeight() {
    const e = Math.min(this.length, this.freezedRows);
    this._headerRowsHeight = 0, this._freezedRowsHeight = 0;
    for (let t = 0; t < e; ++t) {
      const n = this._rowList[t];
      n.visible && this._addFixedHeight(n, t);
    }
    this._gridHookFlow.emitSync("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]);
  }
  updateCellReadonlyStatus() {
    this._rowList.forEach((e) => {
      const t = e.cellCounts;
      for (let n = 0; n < t; n++)
        e.getCell(n).updateReadonlyStatus();
    });
  }
  setRowHeight(e, t) {
    const n = this.getRow(e), o = n.height - t;
    o !== 0 && (n.height = t, n.visible && this._changeRowHeight(n, o));
  }
  setRowVisible(e, t) {
    const n = this.getRow(e);
    t !== n.visible && (n.setVisible(t), this._updateRowHeight(n, t ? "show" : "hide"), this._updateVisibleRowList(), this._updateFixedHeight());
  }
  setRowVisibleBulk(e, t) {
    const { length: n } = t;
    for (let o = 0; o < n; ++o) {
      const r = this._rowList[e + o], i = t[o];
      r.visible !== i && (r.setVisible(i), this._updateRowHeight(r, i ? "show" : "hide"));
    }
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  setRowFilter(e) {
    const t = this.headerRows;
    this.runFuncEachRow(
      (n) => n.render(),
      0,
      t
    ), this.runFuncEachRow(
      (n) => {
        const o = e(n);
        n.visible !== o && (n.setFiltered(!o), n.setVisible(o), this._updateRowHeight(n, o ? "show" : "hide"));
      },
      t
    ), this._updateVisibleRowList(), this._updateFixedHeight();
  }
  _updateVisibleRowList() {
    this._visibleRowList = this._rowList.filter((e) => e.visible);
  }
  _changeRowHeight(e, t) {
    this._rowsHeight -= t, e.rowId < this.headerRows && (this._headerRowsHeight -= t), e.rowId < this.freezedRows && (this._freezedRowsHeight -= t, this._gridHookFlow.emitSync("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]));
  }
  _updateRowHeight(e, t) {
    if (t === "remove" && !e.visible) return;
    const n = e.height + $t, o = t === "add" || t === "show" ? n : -n;
    this._rowsHeight += o;
  }
  sort(e, t, n, o) {
    const r = this._rowList.slice(0, n), i = this._rowList.slice(n, o), a = this._rowList.slice(o);
    i.forEach((d) => d.unmount()), i.sort((d, c) => {
      let l = e(d, c);
      return l === 0 && (l = d.seq - c.seq), l * (t === "ASC" ? 1 : -1);
    }), this._rowList = [
      ...r,
      ...i,
      ...a
    ], this._updateVisibleRowList();
  }
  _unfreezeAllRows() {
    let e = this.headerRows, t = this._rowList[e];
    for (; t && t.isFreezed; )
      t.unfreeze(), t = this._rowList[++e];
  }
  _freezeRowsByCount(e) {
    let t = this.headerRows;
    for (let n = 0; n < e; n++) {
      const o = this._rowList[t];
      if (!o) break;
      o.freeze(), t++;
    }
  }
  freezeRows(e) {
    this._freezedRows = e, this._unfreezeAllRows(), this._freezeRowsByCount(e), this._updateFixedHeight();
  }
  renderRows() {
    this._visibleRowList.forEach((e) => e.render());
  }
  getTopByRowId(e) {
    return this.getRow(e).top;
  }
  getBottomByRowId(e) {
    return this.getRow(e).bottom;
  }
  getNextRowId() {
    return this._rowList.length;
  }
  getCell(e, t) {
    return this.getRow(e).getCell(t);
  }
  // interface를 위해 추가함
  cell(e, t) {
    return this.getCell(e, t);
  }
  getRowHeight(e) {
    return this._rowList[e].height;
  }
  getRowVisible(e) {
    return this._rowList[e]?.visible ?? !1;
  }
  getRowCount() {
    return this._rowList.length;
  }
  getVisibleRowCount() {
    return this._visibleRowList.length;
  }
  runFuncEachRow(e, t, n) {
    const o = t ?? 0, r = n ?? this.length;
    for (let i = o; i < r; i++) {
      const a = this._rowList[i];
      a && e(a);
    }
  }
  getStartOfRowId(e) {
    let t = this.getRow(e);
    for (; t; ) {
      const n = t.getTopRowId();
      if (n !== t.rowId)
        t = this.getRow(n);
      else
        return t.rowId;
    }
    throw new Error(`wrong searching row id from '${e}'`);
  }
  getEndOfRowId(e) {
    let t = this.getRow(e);
    for (; t; ) {
      const n = t.getBottomRowId();
      if (n !== t.rowId)
        t = this.getRow(n);
      else
        return t.rowId;
    }
    throw new Error(`wrong searching row id from '${e}'`);
  }
  /**
   * 현재 Column에서 가장 오른쪽에 있는 ColumnId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 Right을 반환
   */
  getEndColumnId(e) {
    return this.reduceRows({
      initValue: e,
      func: (t, n) => Math.max(t, n.getEndOfColumnId(e))
    });
  }
  getEndOfColumnId(e) {
    const t = this.reduceRows({
      initValue: e,
      func: (n, o) => Math.max(n, o.getEndOfColumnId(e))
    });
    return t === e ? t : this.getEndOfColumnId(t);
  }
  getStartOfColumnId(e) {
    const t = this.reduceRows({
      initValue: e,
      func: (n, o) => Math.min(n, o.getStartOfColumnId(e))
    });
    return t === e ? t : this.getStartOfColumnId(t);
  }
  findRowOrNull(e) {
    const t = {
      startIndex: 0,
      endIndex: this.length,
      curIndex: Math.floor(this.length / 2)
    };
    let n = this.getRow(t.curIndex);
    for (; !(e >= n.top && e < n.bottom); ) {
      if (e < n.top) {
        if (t.endIndex === t.curIndex)
          return null;
        t.endIndex = t.curIndex;
      } else {
        if (t.startIndex === t.curIndex)
          return null;
        t.startIndex = t.curIndex;
      }
      t.curIndex = Math.floor((t.startIndex + t.endIndex) / 2), n = this.getRow(t.curIndex);
    }
    return n;
  }
  reduceRows(e) {
    const {
      top: t = 0,
      bottom: n = this._rowList.length
    } = e;
    let o = e.initValue;
    for (let r = t; r < n; r++)
      o = e.func(o, this._rowList[r]);
    return o;
  }
  getRowByTop(e) {
    const t = this.visibleRowList;
    let n = 0, o = t.length - 1;
    for (; n <= o; ) {
      const r = n + Math.floor((o - n) / 2), i = t[r];
      if (i.isBetweenTop(e))
        return i;
      e < i.top ? o = r - 1 : n = r + 1;
    }
    return null;
  }
  get visibleRowList() {
    return this._visibleRowList;
  }
  get freezedRowsHeight() {
    return this._freezedRowsHeight;
  }
  get headerRowsHeight() {
    return this._headerRowsHeight;
  }
  get rowsHeight() {
    return this._rowsHeight;
  }
  get length() {
    return this._rowList.length;
  }
  get headerRows() {
    return this._headerRows;
  }
  get freezedRows() {
    return this._headerRows + this._freezedRows;
  }
  get bodyFreezedRows() {
    return this._freezedRows;
  }
  get firstRow() {
    return this._rowList[0];
  }
  get lastRow() {
    return this._rowList[this._rowList.length - 1];
  }
}
function zl() {
  const s = document.createElement("table"), e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div"), o = document.createElement("div"), r = document.createElement("div");
  return e.style.transform = "translateZ(0)", e.className = _s, s.className = Rs, t.className = xs, n.className = Ss, o.className = bs, r.className = ys, s.appendChild(t), s.appendChild(n), s.appendChild(o), s.appendChild(r), e.appendChild(s), {
    table: s,
    wrapper: e,
    freezedColRowArea: t,
    freezedRows: n,
    freezedColArea: o,
    bodyRows: r
  };
}
const Ol = 1e4;
function Al(s) {
  return {
    rowAdjust: s.row === 0 ? 1 : 0,
    colAdjust: s.col === 0 ? 1 : 0
  };
}
function Dl({ rowManager: s, colManager: e, commandManager: t, cursorManager: n, elements: o }) {
  const { bodyRows: r, freezedColRowArea: i, freezedColArea: a, freezedRows: d } = o, c = {
    "top-left": { zIndex: W.zLevel9, container: i },
    "top-right": { zIndex: W.zLevel6, container: d },
    "bottom-left": { zIndex: W.zLevel4, container: a },
    "bottom-right": { zIndex: W.zLevel2, container: r }
  }, l = Se("textarea", On);
  l.style.padding = "0";
  let h = null;
  o.bodyRows.appendChild(l), b();
  const u = {
    focus: g,
    runEditMode: L,
    hide() {
    },
    onEditDone(m, S, _, k, z, A) {
    },
    onEditKeyDown(m, S, _, k) {
    },
    onEnterOnEdit(m, S) {
    },
    onEditInput(m, S) {
    },
    onDragEnd(m) {
    }
  }, f = Dt(u);
  return l.ondragend = (m) => u.onDragEnd(m), u;
  function g() {
    l.focus({ preventScroll: !0 });
  }
  function R(m) {
    l.value = m;
  }
  function T(m) {
    const S = m.row < s.freezedRows, _ = m.col < e.freezedColumns;
    return S ? _ ? "top-left" : "top-right" : _ ? "bottom-left" : "bottom-right";
  }
  function x(m) {
    const S = s.getRow(m.row), _ = e.getColumn(m.col), { rowAdjust: k, colAdjust: z } = Al(m), A = S.top + k, D = _.left + z, N = m.height - k - 1, F = m.width - z - 1, ye = T(m);
    return {
      layer: ye,
      bounds: {
        top: `${A}px`,
        left: `${D}px`,
        height: `${N}px`,
        width: `${F}px`
      },
      zIndex: c[ye].zIndex,
      container: c[ye].container
    };
  }
  function H(m) {
    const S = x(m);
    l.style.top = S.bounds.top, l.style.left = S.bounds.left, l.style.height = S.bounds.height, l.style.width = S.bounds.width, l.style.zIndex = S.zIndex, l.parentElement !== S.container && S.container.appendChild(l);
  }
  function L(m, S = !1, _ = !1) {
    H(m), h = {
      cell: m,
      beforeText: m.props.text ?? "",
      cancelEndEdit: !1
    }, l.style.removeProperty("padding"), S || R(h.beforeText), l.maxLength = m.props.maxLength ?? Ol, g(), l.scrollTo(0, l.scrollHeight), _ && l.setSelectionRange(0, l.value.length), f.destroy(), f.create();
  }
  function I() {
    R(""), h = null, l.style.removeProperty("height"), l.style.removeProperty("width"), l.style.removeProperty("z-index");
  }
  function b() {
    l.addEventListener("keydown", E), l.addEventListener("blur", p), l.addEventListener("keyup", w), l.addEventListener("input", C);
  }
  function C(m) {
    h && u.onEditInput(m, l.value);
  }
  function w() {
    h || R("");
  }
  function E(m) {
    if (!h) return;
    const { beforeText: S, cell: _ } = h;
    if (m.key === "Escape") {
      v(l.value, !1, m.key);
      return;
    }
    if (m.key === " " && !m.ctrlKey) {
      m.preventDefault();
      const k = l.value, { selectionStart: z, selectionEnd: A } = l;
      l.value = k.slice(0, z) + " " + k.slice(A), l.selectionStart = z + 1, l.selectionEnd = z + 1, u.onEditInput(m, l.value);
      return;
    }
    if (m.key === "Enter" && m.altKey && _.metaInfo.editSingleLine !== !0) {
      m.preventDefault();
      const k = l.selectionStart;
      try {
        h.cancelEndEdit = !0, l.blur(), l.value = [
          l.value.substring(0, k),
          l.value.substring(l.selectionEnd)
        ].join(`
`), g(), l.setSelectionRange(k + 1, k + 1, "backward"), u.onEditKeyDown(m, _.row, _.col, _.props);
      } finally {
        h.cancelEndEdit = !1;
      }
      return;
    }
    if (y(m)) {
      m.preventDefault(), v(l.value, S !== l.value, m.key), m.key === "Enter" ? u.onEnterOnEdit(m.ctrlKey, m.shiftKey) : M(m.key, m.shiftKey);
      return;
    }
    u.onEditKeyDown(m, _.row, _.col, _.metaInfo);
  }
  function p() {
    !h || h.cancelEndEdit || (v(l.value, h.beforeText !== l.value, ""), f.destroy());
  }
  function v(m, S, _) {
    if (h)
      try {
        const { cell: k, beforeText: z } = h;
        if (S && k.checkInputValidation(m)) {
          const A = { text: m, beforeText: z };
          k.props.gridStore.hook.emit("cellEditDoneBeforeRender", [k.row, k.col, A]);
          const D = new ie(t.commandContext, [
            k.row,
            k.col,
            { text: A.text }
          ]);
          D.onUndo = () => {
            u.onEditDone(k, S, z, _, l.selectionStart, l.selectionEnd);
          }, D.onExecute = () => {
            u.onEditDone(k, S, z, _, l.selectionStart, l.selectionEnd);
          }, t.pushCommandBlock(new he(
            `Edit cell (${k.row}, ${k.col}) `,
            D
          )), k.props = { text: A.text };
        }
        u.onEditDone(k, S, z, _, l.selectionStart, l.selectionEnd);
      } finally {
        l.style.padding = "0", I();
      }
  }
  function y(m) {
    return m.key === "ArrowLeft" && l.selectionStart === 0 && l.selectionEnd === 0 || m.key === "ArrowUp" && l.selectionStart === 0 && l.selectionEnd === 0 || m.key === "ArrowRight" && l.selectionStart === l.textLength && l.selectionEnd === l.textLength || m.key === "ArrowDown" && l.selectionStart === l.textLength && l.selectionEnd === l.textLength || m.key === "Tab" ? !0 : m.key === "Enter" && !m.altKey && !m.ctrlKey && !m.shiftKey;
  }
  function M(m, S) {
    switch (m) {
      case "ArrowLeft":
        return n.selectNextSelection(0, -1, !1);
      case "ArrowRight":
        return n.selectNextSelection(0, 1, !1);
      case "ArrowUp":
        return n.selectNextSelection(-1, 0, !1);
      case "ArrowDown":
        return n.selectNextSelection(1, 0, !1);
      case "Tab":
        return S ? n.selectBeforeActiveCell() : n.selectNextActiveCell();
    }
  }
}
class Ae {
  _rowManager;
  _colManager;
  constructor(e, t) {
    this._rowManager = e, this._colManager = t;
  }
  *getSelectionGenerator({ top: e, left: t, bottom: n, right: o }) {
    o = Math.min(o, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let r = e; r <= n; r++)
      for (let i = t; i <= o; i++)
        yield this._rowManager.cell(r, i);
  }
  *getSelectionHeaderIterator({ top: e, left: t, bottom: n, right: o }) {
    o = Math.min(o, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let r = 0; r < this._rowManager.headerRows; ++r)
      for (let i = t; i <= o; ++i)
        yield this._rowManager.cell(r, i);
    for (let r = e; r <= n; ++r)
      for (let i = 0; i < this._colManager.headerColumns; ++i)
        yield this._rowManager.cell(r, i);
  }
  getCanClearCellCount(e, t) {
    let n = 0;
    for (const o of this.getSelectionGenerator(e))
      t(o) && n++;
    return n;
  }
}
function Fl(s) {
  return s.top === s.bottom && s.left === s.right;
}
function Wl(s) {
  return s.top > s.bottom || s.left > s.right;
}
function Pl(s, e) {
  let t = [];
  const n = new Ae(s, e), o = ({ top: c, left: l, bottom: h, right: u }) => t.some(({ mergeArea: f }) => l <= f.right && u >= f.left && c <= f.bottom && h >= f.top) === !1, r = (c, l) => {
    let h = 0;
    for (let u = c; u <= l; ++u)
      s.getRowVisible(u) && ++h;
    return h;
  }, i = (c, l) => {
    let h = 0;
    for (let u = c; u <= l; ++u)
      e.getColumnVisible(u) && ++h;
    return h;
  }, a = ({ top: c, left: l, bottom: h, right: u }) => {
    for (let f = c; f <= h; ++f)
      if (s.getRowVisible(f) === !1) return !0;
    for (let f = l; f <= u; ++f)
      if (e.getColumnVisible(f) === !1) return !0;
    return !1;
  }, d = (c, l) => {
    const h = s.getCell(c, l), u = t.indexOf(h);
    return u < 0 ? null : t[u];
  };
  return {
    isValidatedMerging: o,
    /**
     * header rows 하위 모든 병합된 cell 제거
     * @param headerRows
     */
    clearMergeCells(c) {
      t = t.filter(({ row: l }) => l < c);
    },
    mergeCells(c) {
      if (Wl(c))
        throw new Error("Invalid range");
      if (o(c) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (a(c))
        throw new Error("Could not merging with hidden cells!");
      if (Fl(c))
        throw new Error("Could not merging with single cell!");
      const l = s.getCell(c.top, c.left);
      l.mergeInfo = { rowSpan: r(c.top, c.bottom), colSpan: i(c.left, c.right) }, t.push(l);
      for (const h of n.getSelectionGenerator(c))
        (h.row !== c.top || h.col !== c.left) && (h.mergeMain = l);
    },
    splitCells(c, l) {
      const h = d(c, l);
      if (!h)
        throw new Error("Could not split on a not merged cell!");
      for (const u of n.getSelectionGenerator(h.mergeArea))
        u.mergeMain = void 0, u.mergeInfo = { rowSpan: 1, colSpan: 1 };
      this.removeMergeCell(c, l);
    },
    isMerged(c, l) {
      return !o({ top: c, left: l, bottom: c, right: l });
    },
    *getMergedCellGenerator(c) {
      for (const l of n.getSelectionGenerator(c))
        (l.mergeInfo.rowSpan > 1 || l.mergeInfo.colSpan > 1) && (yield l);
    },
    removeMergeCell(c, l) {
      const h = d(c, l);
      if (!h)
        throw new Error("Could not split on a not merged cell!");
      t = t.filter((u) => u !== h);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(c, l) {
      for (const { mergeArea: h } of t)
        if (h.top < c && h.bottom >= c && h.bottom <= l || h.bottom > l && h.top >= c && h.top <= l || h.top < c && h.bottom > l)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(c, l) {
      for (const { mergeArea: h } of t)
        if (h.left < c && h.right >= c && h.right <= l || h.right > l && h.left >= c && h.left <= l || h.left < c && h.right > l)
          return !0;
      return !1;
    },
    checkCanInsertRow(c) {
      for (const { mergeArea: l } of t)
        if (l.top < c && l.bottom >= c)
          return !1;
      return !0;
    },
    checkCanInsertColumn(c) {
      for (const { mergeArea: l } of t)
        if (l.left < c && l.right >= c)
          return !1;
      return !0;
    }
  };
}
class Nl {
  _gridHookFlow = Ir();
  // HTML Elements
  _elements;
  _gridThemeConfig;
  _rowManager;
  _columnManager;
  _mergeHandler;
  _commandManager;
  _gridTextarea;
  _gridStateContext;
  _gridCursorManager;
  constructor(e) {
    const t = st();
    this._gridThemeConfig = {
      "grid.paddingTop": t.getStoreValue("grid.paddingTop"),
      "grid.paddingBottom": t.getStoreValue("grid.paddingBottom"),
      "grid.paddingLeft": t.getStoreValue("grid.paddingLeft"),
      "grid.paddingRight": t.getStoreValue("grid.paddingRight"),
      "grid.defaultRowHeight": t.getStoreValue("grid.defaultRowHeight"),
      "grid.defaultColumnWidth": t.getStoreValue("grid.defaultColumnWidth"),
      "grid.defaultRowMinSize": t.getStoreValue("grid.defaultRowMinSize"),
      "grid.defaultRowMaxSize": t.getStoreValue("grid.defaultRowMaxSize"),
      "grid.defaultColumnMinSize": t.getStoreValue("grid.defaultColumnMinSize"),
      "grid.defaultColumnMaxSize": t.getStoreValue("grid.defaultColumnMaxSize"),
      "grid.defaultDropdownWidth": t.getStoreValue("grid.defaultDropdownWidth"),
      "grid.defaultFontFamily": t.getStoreValue("grid.defaultFontFamily"),
      "grid.defaultFontSize": t.getStoreValue("grid.defaultFontSize"),
      "grid.forceRenderLeftCol": t.getStoreValue("grid.forceRenderLeftCol"),
      "grid.forceRenderRightCol": t.getStoreValue("grid.forceRenderRightCol"),
      "grid.emptyDefaultHeight": t.getStoreValue("grid.emptyDefaultHeight")
    }, this._commandManager = e.gridCommandManager, this._rowManager = new Hl(e.headerRowCount, e.freezedRowCount, this._gridHookFlow), this._columnManager = new Ll(e.headerColumnCount, e.freezedColumnCount, this._gridHookFlow), this._gridCursorManager = e.cursorManager, this._mergeHandler = Pl(this._rowManager, this._columnManager), this._elements = zl(), this._gridTextarea = Dl({
      rowManager: this._rowManager,
      colManager: this._columnManager,
      commandManager: this._commandManager,
      cursorManager: this._gridCursorManager,
      elements: this._elements
    }), this._gridStateContext = e.gridStateContext;
  }
  setGridConfig(e) {
    Object.assign(this._gridThemeConfig, e);
  }
  // theme
  getThemeValue(e) {
    return this._gridThemeConfig[e];
  }
  // shared utility
  get elements() {
    return this._elements;
  }
  get tableElement() {
    return this._elements.table;
  }
  get hook() {
    return this._gridHookFlow;
  }
  get mergeHandler() {
    return this._mergeHandler;
  }
  get rowManager() {
    return this._rowManager;
  }
  get columnManager() {
    return this._columnManager;
  }
  get commandManager() {
    return this._commandManager;
  }
  /**
   * 가능하면 쓰지 말 것
   * @deprecated
   */
  get commandContext() {
    return this._commandManager.commandContext;
  }
  get gridTextarea() {
    return this._gridTextarea;
  }
  get gridStateContext() {
    return this._gridStateContext;
  }
  get cursorManager() {
    return this._gridCursorManager;
  }
}
const $l = /^var\((.+)\)$/;
function Bt(s) {
  const e = $l.exec(s);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${s}' is not custom-property name.`);
}
const Bl = [
  W.zLevel0,
  W.zLevel1,
  W.zLevel2,
  W.zLevel3,
  W.zLevel4,
  W.zLevel5,
  W.zLevel6,
  W.zLevel7,
  W.zLevel8,
  W.zLevel9
], Gl = [
  [
    "horizontalAlign",
    { key: "text-align" }
  ],
  [
    "verticalAlign",
    {
      key: "justify-content",
      custom: {
        top: "flex-start",
        middle: "center",
        bottom: "flex-end"
      }
    }
  ],
  [
    "fontSize",
    { key: "font-size" }
  ],
  [
    "fontFamily",
    { key: "font-family" }
  ],
  [
    "textColor",
    { key: "color" }
  ],
  [
    "backColor",
    { key: "background-color" }
  ],
  [
    "textDecoration",
    { key: "text-decoration" }
  ],
  [
    "fontWeight",
    { key: "font-weight" }
  ]
], de = {
  lv9: 9,
  lv8: 8,
  lv7: 7,
  lv6: 6,
  lv5: 5,
  lv4: 4,
  lv3: 3
}, Vl = /* @__PURE__ */ new Set([
  de.lv9,
  de.lv7,
  de.lv3
]);
class jl {
  _tag;
  _cellProps;
  _row = -1;
  _col = -1;
  _rowSpan = 1;
  _colSpan = 1;
  _visible = !0;
  _needRender = !0;
  _zIndex = null;
  _left = 0;
  _width = 0;
  _height = 0;
  _isDragOver = !1;
  _mergeMain;
  _isActivate = !1;
  _cellRenderer;
  _isRemoved = !1;
  _element = null;
  _mark;
  _cellType;
  constructor({ row: e, col: t, tag: n, props: o, cellRenderer: r, cellType: i }) {
    this._cellProps = { ...o }, this._tag = n, this._cellRenderer = r, this._row = e, this._col = t, this._cellType = i;
  }
  /*
   * Getters
   */
  get isFreezed() {
    return this.element.classList.contains(qt) || this.element.tagName === "TH";
  }
  /**
   * @version ^2.18.0
   */
  get width() {
    return this._width;
  }
  /**
   * @version ^2.18.0
   */
  get height() {
    return this._height;
  }
  /**
   * @version ^2.18.0
   */
  get isRemoved() {
    return this._isRemoved;
  }
  get renderType() {
    return this._getRenderInstance().renderType;
  }
  get dropDisabled() {
    return this._cellProps.dropDisabled;
  }
  get isHeaderCell() {
    return this.element.tagName === "TH";
  }
  get isMerged() {
    return this._rowSpan > 1 || this._colSpan > 1;
  }
  get isSelected() {
    return this.element.classList.contains("is-selected");
  }
  get innerHeight() {
    return this._getRenderInstance().getCellInnerHeight(this.element, this._cellProps);
  }
  get fontSize() {
    return this._cellProps.fontSize ? this._cellProps.fontSize : this._element ? getComputedStyle(this._element).fontSize : _n("grid.defaultFontSize", Xt.fontSizeBase, "fontSize");
  }
  get fontFamily() {
    return this._cellProps.fontFamily ? this._cellProps.fontFamily : this._element ? getComputedStyle(this._element).fontFamily : _n("grid.defaultFontFamily", Xt.fontFamilyBase, "fontFamily");
  }
  get mergeArea() {
    return {
      top: this.row,
      left: this.col,
      bottom: this.row + this._rowSpan - 1,
      right: this.col + this._colSpan - 1
    };
  }
  /**
   * IRGrid 셀 내부 너비 계산 값
   */
  get innerWidth() {
    return this._getRenderInstance().getCellInnerWidth(this.fontSize, this.fontFamily, this._cellProps);
  }
  /**
   * 렌더러 내부에서 사용하는 별도 컨텐츠 너비 계산 값
   * @example Select 렌더러의 Dropdown 영역 너비
   */
  get rendererInnerWidth() {
    return this._getRenderInstance().getRendererInnerWidth(this.fontSize, this.fontFamily, this._cellProps);
  }
  get mergeInfo() {
    return {
      rowSpan: this._rowSpan,
      colSpan: this._colSpan
    };
  }
  get mergeMain() {
    return this._mergeMain;
  }
  get row() {
    return this._row;
  }
  get col() {
    return this._col;
  }
  get colSpan() {
    return this._colSpan;
  }
  get rowSpan() {
    return this._rowSpan;
  }
  get bottom() {
    return this.row + this.mergeInfo.rowSpan - 1;
  }
  get right() {
    return this.col + this.mergeInfo.colSpan - 1;
  }
  /**
   * 이 visible 정보는 cell 병합으로 인해 숨겨진 셀의 표시 여부만 확인이 가능합니다.
   * 숨겨진 행, 열의 경우에는 IRGrid.getCellVisible 메서드를 사용해야 합니다.
   */
  get visible() {
    return this._visible;
  }
  get cellRenderer() {
    return this._cellRenderer;
  }
  get canClear() {
    const { disabled: e, readonly: t, text: n } = this.props, o = this._getRenderInstance();
    return e !== !0 && t !== !0 && n !== "" && (o.editable || o.canBeClear);
  }
  get text() {
    const { text: e } = this._cellProps;
    return e ?? "";
  }
  get cellType() {
    return this._cellType;
  }
  get value() {
    return this._cellProps.value;
  }
  get cellAddress() {
    return `${this.row},${this.col}`;
  }
  get object() {
    return this._cellProps.object;
  }
  /**
   * @deprecated 대신 props를 쓰세요.
   */
  get metaInfo() {
    return this._cellProps;
  }
  get props() {
    return this._cellProps;
  }
  get element() {
    return this._element === null ? this._initElement() : this._element;
  }
  get needRender() {
    return this._needRender;
  }
  get isConnected() {
    return this._element === null ? !1 : this._element.parentElement !== null;
  }
  get editable() {
    return !(this._cellType !== "body-cell" || this._cellProps.editable === !1 || this._cellProps.disabled || this.onCheckReadonly() || this._getRenderInstance().editable === !1);
  }
  get cellInfo() {
    return this._cellProps;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(Bt(W.stickyCellZId));
  }
  /*
   * Setters
   */
  set visible(e) {
    e && !this.mergeMain ? (this._visible = !0, this.render()) : (this._visible = !1, this.unmount());
  }
  set isDragOver(e) {
    this._isDragOver = e, this._updateCellCls();
  }
  set text(e) {
    this.props = { text: e };
  }
  /**
   * @deprecated 대신 props를 쓰세요.
   */
  set cellInfo(e) {
    this.props = e;
  }
  set props(e) {
    Object.assign(this._cellProps, e), this.render(), this.renderInstance instanceof Q && this.renderInstance.onUpdateCell(this._row, this._col, e);
  }
  set mergeInfo({ rowSpan: e = 1, colSpan: t = 1 }) {
    this._rowSpan = e, this._colSpan = t, this.render();
  }
  set mergeMain(e) {
    this._mergeMain = e, this.visible = e === void 0, e !== void 0 && this.unmount();
  }
  set row(e) {
    this._row = e, this.setNeedRender(), this._element?.setAttribute("data-row", e.toString());
  }
  set col(e) {
    this._col = e, this.setNeedRender(), this._element?.setAttribute("data-col", e.toString());
  }
  set cellRenderer(e) {
    this._cellRenderer = e, this.render();
  }
  /*
   * Private Methods
   */
  _removeChildren() {
    for (; this._element.lastChild; )
      this._element.lastChild.remove();
  }
  _addMark(e) {
    this._mark || (this._mark = document.createElement("span")), this._mark.className = e, this._element.appendChild(this._mark);
  }
  _removeMark() {
    this._mark && (this._mark.remove(), this._mark = void 0);
  }
  /**
   * @version ^2.18.0
   */
  get renderInstance() {
    return this._getRenderInstance();
  }
  _getRenderInstance() {
    if (this._cellRenderer instanceof Q)
      return this._cellRenderer;
    if (typeof this._cellRenderer == "function") {
      const e = this._cellRenderer(this.row, this.col, this._cellProps);
      if (e instanceof Q)
        return e;
      if (e instanceof HTMLElement)
        return new so(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this._row, this._col, this._cellProps);
  }
  _applyCustomProp(e, t) {
    t !== void 0 ? ne(this._element, { [e]: `${t}px` }) : ne(this._element, { [e]: void 0 });
  }
  _updateCellAttr() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: o
    } = this._cellProps;
    this._applyCustomProp(W.cellTopPadding, e), this._applyCustomProp(W.cellLeftPadding, t), this._applyCustomProp(W.cellRightPadding, n), this._applyCustomProp(W.cellBottomPadding, o);
  }
  _updateCellCls() {
    if (!this._element) return;
    const e = [vs, this._tag === "th" ? ks : Is];
    this.props.class && e.push(this.props.class), this._zIndex !== null && e.push(qt), (this._rowSpan > 1 || this._colSpan > 1) && e.push(Es), this._cellProps.disabled && e.push("is-disabled"), this._cellProps.sortOrder === "ASC" && e.push("is-asc"), this._cellProps.sortOrder === "DESC" && e.push("is-desc"), this.isSelected && e.push("is-selected"), this.onCheckReadonly() && e.push("is-readonly"), this._isDragOver && e.push("is-dragging"), this._isActivate && e.push("is-active"), this._element.className = e.join(" ");
  }
  _isSticky() {
    return this._zIndex !== null && Vl.has(this._zIndex);
  }
  _updateCellLayout() {
    const e = this._element;
    e && (this._left === ho ? e.style.removeProperty("left") : e.style.left = `${this._left}px`, e.style.width = `${this._width}px`, e.style.height = `${this._height}px`);
  }
  _updateCellStatus() {
    this._element && (this._cellProps.isError ? this._addMark(Ms) : this._cellProps.hasMemo ? this._addMark(Ts) : this._mark && this._removeMark(), this._applyCellStyle());
  }
  _applyCellStyle() {
    if (this._element)
      for (const [e, t] of Gl) {
        const n = this._cellProps[e];
        if (n === void 0) {
          this._element.style.removeProperty(t.key);
          continue;
        }
        this._element.style.setProperty(
          t.key,
          t.custom ? t.custom[n] : n.toString()
        );
      }
  }
  _initElement() {
    const e = document.createElement(this._tag);
    return this._element = e, this._rowSpan > 1 && (e.rowSpan = this._rowSpan), this._colSpan > 1 && (e.colSpan = this._colSpan), e.setAttribute("data-row", this._row.toString()), e.setAttribute("data-col", this._col.toString()), e.setAttribute("data-type", this._cellType), this._updateStickyZId(), this._updateCellLayout(), e;
  }
  /*
   * Public Methods
   */
  select() {
    this.isSelected || (this._updateCellCls(), this.onSelect(this));
  }
  setNeedRender() {
    this._needRender = !0;
  }
  updateHeight(e) {
    this._height !== e && (this._height = e, this._updateCellLayout());
  }
  updateWidth(e) {
    this._width !== e && (this._width = e, this._updateCellLayout());
  }
  updateCellLayout({ left: e, height: t, width: n }) {
    this._left === e && this._height === t && this._width === n || (this._height = t, this._left = e, this._width = n, this._updateCellLayout());
  }
  unmount() {
    this._element?.remove();
  }
  remove() {
    this.unmount(), this._isRemoved = !0;
  }
  recover() {
    this._isRemoved = !1;
  }
  updateCellMetaInfo(e, t) {
    Object.assign(this._cellProps, e), t && Object.assign(this._cellProps, { text: t }), this.render();
  }
  release() {
    this.deactivate();
  }
  activate() {
    this._isActivate = !0, this._updateCellCls(), this._mergeMain?.activate();
  }
  deactivate() {
    this._isActivate = !1, this._updateCellCls(), this._mergeMain?.deactivate();
  }
  updateReadonlyStatus() {
    this._updateCellCls();
  }
  _updateStickyZId() {
    this._element && (this._zIndex === null ? this._element.style.removeProperty(W.stickyCellZId) : ne(this._element, { [W.stickyCellZId]: Bl[this._zIndex] }), this._updatePosition());
  }
  _updatePosition() {
    this._element && (this._element.style.position = this._isSticky() ? "sticky" : "");
  }
  setStickyZIndex(e) {
    this._zIndex = e, this._updateStickyZId(), this._updateCellCls();
  }
  checkInputValidation(e) {
    return this.props.enabledPatternCheck && this.props.allowedRegExpPattern ? this.props.allowedRegExpPattern.test(e) : !0;
  }
  _renderInnerCell() {
    this._element || this._initElement(), this._removeChildren(), this._updateCellStatus(), this._updateCellAttr(), this._updateCellCls(), this._element.appendChild(this._getRenderElement()), this._needRender = !1, this.onPostRender();
  }
  render() {
    this._element !== null && this.visible && this._renderInnerCell();
  }
  clear() {
    this._cellProps.value && delete this._cellProps.value, this.props = { text: "" }, this.onClear(this);
  }
  /*
   * Events
   */
  onClick(e, t) {
    this.props.gridStore.hook.emitSync("cellClick", [e, t]);
  }
  onDblClick(e) {
    this.props.gridStore.hook.emitSync("cellDblClick", [e]);
  }
  onRightClick(e, t) {
    this.props.gridStore.hook.emitSync("cellRightClick", [t, e]);
  }
  onPostRender() {
    this.props.gridStore.hook.emit("postRenderCell", [this]);
  }
  onSelect(e) {
    this.props.gridStore.hook.emitSync("cellSelect", [e]);
  }
  onClear(e) {
    this.props.gridStore.hook.emitSync("cellClear", [e]);
  }
  onCheckReadonly() {
    return this._cellProps.readonly === !0;
  }
}
function _n(s, e, t) {
  const n = st().getStoreValue(s);
  return n === e ? getComputedStyle(document.documentElement)[t] : n;
}
class Ul extends At {
  constructor() {
    super([]);
  }
}
class Kl extends At {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
}
class at {
  _grid;
  _generator;
  constructor(e) {
    this._grid = e, this._generator = new Ae(e, e);
  }
  adjustRange(e) {
    const [t, n] = [this._grid.headerRows, this._grid.getRowCount() - 1], [o, r] = [this._grid.headerColumns, this._grid.getColCount() - 1], i = {
      top: K(e.top, t, n),
      left: K(e.left, o, r),
      bottom: K(e.bottom, t, n),
      right: K(e.right, o, r)
    };
    return i.top > n || i.bottom < t || i.left > r || i.right < o ? null : i;
  }
  extendRange(e) {
    const t = this._generator, n = { ...e }, o = [...t.getSelectionGenerator(e)];
    for (; o.length; ) {
      const r = o.pop();
      if (!r.isMerged && !r.mergeMain) continue;
      const i = r.mergeMain ? r.mergeMain.mergeArea : r.mergeArea;
      if (i.top < n.top) {
        const a = t.getSelectionGenerator(
          {
            top: i.top,
            left: n.left,
            bottom: n.top - 1,
            right: n.right
          }
        );
        for (const d of a)
          o.push(d);
        n.top = i.top;
      }
      if (i.left < n.left) {
        const a = t.getSelectionGenerator(
          {
            top: n.top,
            left: i.left,
            bottom: n.bottom,
            right: n.left - 1
          }
        );
        for (const d of a)
          o.push(d);
        n.left = i.left;
      }
      if (n.bottom < i.bottom) {
        const a = t.getSelectionGenerator(
          {
            top: n.bottom + 1,
            left: n.left,
            bottom: i.bottom,
            right: n.right
          }
        );
        for (const d of a)
          o.push(d);
        n.bottom = i.bottom;
      }
      if (n.right < i.right) {
        const a = t.getSelectionGenerator(
          {
            top: n.top,
            left: n.right + 1,
            bottom: n.bottom,
            right: i.right
          }
        );
        for (const d of a)
          o.push(d);
        n.right = i.right;
      }
    }
    return n;
  }
  getTextMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        P(e.left, e.right + 1).map((o) => this._grid.cell(n, o).text)
      );
    return t;
  }
  getCellMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        P(e.left, e.right + 1).map((o) => this._grid.cell(n, o))
      );
    return t;
  }
  getCellListByColumn(e, t) {
    const o = this._grid.getRowCount() - 1;
    return [...this._generator.getSelectionGenerator({ top: 0, left: e, bottom: o, right: t })];
  }
  getColumnListByColumn(e, t) {
    return P(e, t + 1).map((n) => this._grid.getColumn(n));
  }
}
class ql extends At {
  constructor(e) {
    super(null, (t) => {
      const n = new at(e);
      return t.pipe(
        // activeCell이, range를 벗어난다면 재조정
        ut((o) => {
          if (!o || e.getRowCount() === e.headerRows && e.getColCount() === e.headerColumns) return null;
          const { activeCell: r, range: i } = o;
          return r.row >= i.top && r.row <= i.bottom && r.col >= i.left && r.col <= i.right ? o : {
            activeCell: e.cell(i.top, i.left),
            range: o.range
          };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        ut((o) => {
          if (!o) return null;
          const r = n.adjustRange(o.range);
          return r ? { activeCell: o.activeCell, range: r } : null;
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        ut((o) => o ? { activeCell: o.activeCell, range: n.extendRange(o.range) } : null)
      );
    });
  }
}
class Xl {
  _selectionState;
  _gridModeState;
  _headerCellListState;
  constructor(e) {
    this._selectionState = new ql(e), this._gridModeState = new Kl(), this._headerCellListState = new Ul();
  }
  setIdle() {
    this.setMode({ mode: "idle", contextParam: {} });
  }
  setMode(e) {
    this.gridModeState.next(e);
  }
  get isIdle() {
    return this._gridModeState.isIdle;
  }
  get selectionRangeState() {
    return this._selectionState;
  }
  get gridModeState() {
    return this._gridModeState;
  }
  get activateHeaderCellState() {
    return this._headerCellListState;
  }
}
class Y {
  _mountRollbackStack = [];
  _isMounted = !1;
  _pluginAPI = null;
  _gridHook = null;
  _mountTask(e) {
    throw new Error("unmount method not implemented.");
  }
  addRollbackTask(e) {
    this._mountRollbackStack.push(e);
  }
  addPluginSyncHook(e, t) {
    const n = this._gridHook;
    if (!n) throw new Error("Grid hook is not initialized. You must mount the plugin first.");
    n.addSyncHook(e, t), this.addRollbackTask(() => n.removeSyncHook(e, t));
  }
  mount(e) {
    if (this.isMounted)
      throw new Error("Already mounted plugin!");
    try {
      this._gridHook = e.grid.hook, this._mountTask(e), this._isMounted = !0;
    } catch (t) {
      console.error("Plugin mount error!", t), this.unmount();
    }
  }
  unmount() {
    if (!this.isMounted)
      throw new Error("Already unmounted plugin!");
    try {
      for (const e of this._mountRollbackStack)
        e();
      this._mountRollbackStack.length = 0, this._isMounted = !1;
    } catch (e) {
      console.error("Plugin unmount error!", e);
    }
  }
  setPluginAPI(e) {
    return this._pluginAPI = e, this._pluginAPI;
  }
  get pluginAPI() {
    if (this._pluginAPI === null) throw new Error("Plugin API is not initialized. You muse read this property since addPlugin.");
    return this._pluginAPI;
  }
  get isMounted() {
    return this._isMounted;
  }
}
class Yl extends uo {
  _grid;
  _rowType;
  _cells;
  _rowId;
  _rowElement = null;
  _viewportCellList = [];
  _isMounted;
  _filtered;
  _isHeaderRow;
  _isFreezed;
  _top = -1;
  _stickyColumns = 0;
  _height = 0;
  _seq;
  _visible = !0;
  _isCalledOnMounted = !1;
  constructor(e) {
    super(e);
    const { grid: t, rowId: n, height: o, top: r, rowType: i, seq: a } = e;
    this._grid = t, this._cells = [], this._rowType = i, this._rowId = n, this._seq = a, this._isMounted = !1, this._isFreezed = !1, this._isHeaderRow = !1, this._filtered = !1, this._height = o, this._top = r;
  }
  /**
   * Getters
   */
  get rowInnerHeight() {
    return this._cells.filter((e) => e.visible && e.mergeInfo.rowSpan === 1).reduce((e, t) => Math.max(e, t.innerHeight), 0);
  }
  get isFreezed() {
    return this._isFreezed;
  }
  /**
   * 각 Grid별 Row 생성 시퀀스 id
   */
  get seq() {
    return this._seq;
  }
  get isMounted() {
    return this._isMounted;
  }
  get rowId() {
    return this._rowId;
  }
  get isHeaderRow() {
    return this._isHeaderRow;
  }
  get cellCounts() {
    return this._cells.length;
  }
  get rowType() {
    return this._rowType;
  }
  _updateTop() {
    this._rowElement && (this._rowElement.style.top = `${this._top}px`);
  }
  _updateVars() {
    if (!this._rowElement) return;
    const e = this._rowElement;
    e.setAttribute("data-top", this._top.toString()), e.setAttribute("data-row", this._rowId.toString());
  }
  _initRowElement() {
    const e = document.createElement("tr");
    return this._rowElement = e, this._updateVars(), this._updateTop(), this.updateStickyStatus(), this.onRenderRow(e), e;
  }
  get element() {
    return this._rowElement === null ? this._initRowElement() : this._rowElement;
  }
  get textColor() {
    return this.element.style.color;
  }
  get height() {
    return this._height;
  }
  get heightWithBorder() {
    return this._height + $t;
  }
  get bottom() {
    return this.visible ? this._top + this.heightWithBorder : this._top;
  }
  get stickyColumns() {
    return this._stickyColumns;
  }
  get top() {
    return this._top;
  }
  get visible() {
    return this._visible;
  }
  get filtered() {
    return this._filtered;
  }
  /*
   * Setters
   */
  set rowId(e) {
    this._rowElement && (this._rowElement.dataset.row = e.toString()), this._rowId = e, this._cells.forEach((t) => t.row = e);
  }
  set textColor(e) {
    this.element.style.color = e;
  }
  set height(e) {
    this._height = e, this.updateRowHeight();
  }
  set top(e) {
    this._top !== e && (this._top = e, this._updateVars(), this._updateTop());
  }
  /*
   * Public Methods
   */
  setVisible(e) {
    if (e && this.filtered) throw new Error("It can not set visible to be true when filtered is true.");
    this._visible = e;
  }
  setFiltered(e) {
    this._filtered = e;
  }
  /**
   * @version ^2.18.1
   */
  remove() {
    this.unmount(), this._cells.forEach((e) => e.remove());
  }
  /**
   * @version ^2.20.0
   */
  recover() {
    this._cells.forEach((e) => e.recover());
  }
  unmount() {
    this._isMounted = !1, this._rowElement?.remove();
  }
  /**
   * 해당 셀의 right columnId를 얻어옴. 병합된 경우 columnId보다 큰 값을 반환하게 된다.
   */
  getEndOfColumnId(e) {
    const { col: t, mergeInfo: n, mergeMain: o } = this._cells[e];
    return o ? o.right : t + n.colSpan - 1;
  }
  getStartOfColumnId(e) {
    const { mergeMain: t } = this._cells[e];
    return t ? t.col : e;
  }
  getMaxCellWidth(e, t) {
    return P(e, t).reduce((n, o) => {
      const r = this._cells[o];
      return r.visible && r.mergeInfo.colSpan === 1 ? Math.max(n, r.innerWidth) : n;
    }, 0);
  }
  renderColumns(e, t) {
    if (this._rowElement !== null)
      for (let n = e; n <= t; n++)
        this._cells[n].render();
  }
  updateColumnWidth(e, t) {
    const n = this._cells[e];
    n.updateWidth(
      n.colSpan === 1 ? t : this._grid.getColWidthWithSpan(n.col, n.colSpan)
    );
  }
  removeCells(e, t) {
    const n = 1 + t - e;
    this._cells.splice(e, n).forEach((r) => r.remove()), P(e, this._cells.length).forEach((r) => this._cells[r].col -= n);
  }
  /**
   * 현재 row에서 가장 위에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 top을 반환
   */
  getTopRowId() {
    let e = this._rowId;
    for (const t of this._cells)
      t.mergeMain && (e = Math.min(e, t.mergeMain.row));
    return e;
  }
  getLeftColumnId(e) {
    return this._cells[e].mergeMain ? this._cells[e].mergeMain.col : e;
  }
  /**
   * 현재 row에서 가장 아래에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 bottom을 반환
   */
  getBottomRowId() {
    let e = this._rowId;
    for (const t of this._cells)
      t.mergeMain ? e = Math.max(e, t.mergeMain.bottom) : t.mergeInfo.rowSpan > 1 && (e = Math.max(e, t.bottom));
    return e;
  }
  getFreezedCellType(e) {
    const t = e < this._grid.getFreezedColumnCount();
    return this.isHeaderRow ? t ? de.lv9 : de.lv4 : this.isFreezed ? t ? de.lv7 : de.lv4 : t ? de.lv3 : null;
  }
  addCell(e) {
    this._cells.push(e), e.setStickyZIndex(this.getFreezedCellType(e.col));
  }
  insertCells(e, t) {
    if (this._cells.length < t)
      throw new Error(`Out of length at the row. the length is ${this._cells.length} and you tried inserting with ${t}`);
    P(t, this._cells.length).forEach((n) => this._cells[n].col += e.length), this._cells.splice(t, 0, ...e), e.forEach((n) => n.setStickyZIndex(this.getFreezedCellType(n.col)));
  }
  reorderCells() {
    this._cells.forEach((t, n) => void (t.col = n));
    const e = this._rowElement;
    e && (kr(e), this._cells.forEach((t) => void e.appendChild(t.element)));
  }
  exchangeCells([e, t], [n, o]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (o < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= o && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n},${o}`);
    const [r, i, a, d] = e < n ? [e, t, n, o] : [n, o, e, t];
    this._cells = [
      ...this._cells.slice(0, r),
      ...this._cells.slice(a, d + 1),
      ...this._cells.slice(i + 1, a),
      ...this._cells.slice(r, i + 1),
      ...this._cells.slice(d + 1)
    ], this.reorderCells();
  }
  moveCells([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const o = this._cells.splice(e, t - e + 1), r = e < n ? n - o.length : n;
    this._cells.splice(r, 0, ...o), this.reorderCells();
  }
  render() {
    if (this._viewportCellList.length !== 0 && this._rowElement && this.visible) {
      for (const e of this._viewportCellList)
        e.render();
      this.onRenderRow(this._rowElement);
    }
  }
  getCell(e) {
    const t = this._cells[e];
    if (!t) throw new Error(`Not found cell ${this._rowId}, ${e}`);
    return t;
  }
  getCellUnstable(e) {
    return this._cells[e];
  }
  setRowInfo(e) {
    const {
      textData: t,
      cellMetaInfo: n
    } = e;
    this._cells.forEach((o, r) => o.updateCellMetaInfo(n, t?.[r]));
  }
  *getCellGenerator(e = 0, t = this._cells.length - 1) {
    for (let n = e; n <= t; ++n)
      yield this._cells[n];
  }
  setColumnVisible(e, t) {
    this._cells[e].visible = t;
  }
  getColumnVisible(e) {
    return this._cells[e].visible;
  }
  setAutoHeight(e, t) {
    const n = Math.ceil(this.rowInnerHeight), o = K(isNaN(n) ? 0 : n, e, t);
    return this.height !== o ? (this.height = o, !0) : !1;
  }
  _removeCellsByColIdList() {
    const e = new Set(this._viewportCellList);
    for (const t of this._cells)
      t.isConnected && (!e.has(t) || t.mergeMain) && t.unmount();
  }
  updateRowHeight() {
    this._cells.forEach((e) => {
      e.updateHeight(e.rowSpan === 1 ? this._height : this._grid.getRowHeightWithSpan(this._rowId, e.rowSpan));
    });
  }
  updateViewportCells(e) {
    this._viewportCellList = e, this._removeCellsByColIdList();
    const { rowId: t, heightWithBorder: n } = this;
    let o = null;
    for (const r of e) {
      if (r.mergeMain) continue;
      const { needRender: i } = r, a = r.element;
      r.isConnected || (o === null ? this.element.prepend(a) : o.after(a));
      const { rowSpan: d, colSpan: c, col: l } = r, h = {
        left: this._grid.getColumnLeft(l),
        width: c === 1 ? this._grid.getColumnWidth(l) + 1 : this._grid.getColWidthWithSpan(l, c),
        height: d === 1 ? n : this._grid.getRowHeightWithSpan(t, d)
      };
      this._grid.hook.emitSync("cellLayout", [t, l, h]), r.updateCellLayout(h), i && r.render(), o = a;
    }
  }
  mount(e, t) {
    this.isMounted || (e.insertAdjacentElement(t, this.element), this._isMounted = !0, this._isCalledOnMounted || (this._isCalledOnMounted = !0, this.onMounted(this)));
  }
  freeze(e = !1) {
    this._isFreezed = !0, e && (this._isHeaderRow = !0), this._rowElement && this.updateStickyStatus();
  }
  isBetweenTop(e) {
    return e >= this.top && e < this.bottom;
  }
  updateStickyStatus() {
    this._rowElement && this._cells.reduce((e, t, n) => (t.setStickyZIndex(this.getFreezedCellType(n)), e + (this._grid.getColumnVisible(n) ? this._grid.getColumnWidth(n) + lt : 0)), 0);
  }
  // row에 있는 모든 셀에 metaInfo 일괄 적용
  updateCellMetaInfo(e) {
    this._cells.forEach((t) => t.cellInfo = e);
  }
  freezeColumns(e) {
    this._stickyColumns = e, this.updateStickyStatus();
  }
  unfreeze() {
    if (this.isHeaderRow) throw new Error("Can not freeze header row!");
    this._isFreezed = !1, this._rowElement && this.updateStickyStatus();
  }
  /*
   * Events
   */
  onMounted(e) {
    this.freezeColumns(this._grid.getFreezedColumnCount()), this._grid.onMountedRow(this.rowId);
  }
  onRenderRow(e) {
    this._grid.hook.emit("renderRowElement", [this, e]);
  }
}
function Zl(s, e) {
  const { top: t, bottom: n, left: o, right: r } = s, { freezedRows: i, freezedColumns: a } = e, d = t < i, c = n >= i, l = o < a, h = r >= a, u = [];
  return d && l && u.push("top-left"), d && h && u.push("top-right"), c && l && u.push("bottom-left"), c && h && u.push("bottom-right"), u;
}
function Jl(s, e) {
  return s.top > e.bottom || e.top > s.bottom || s.left > e.right || e.left > s.right ? null : {
    top: Math.max(s.top, e.top),
    left: Math.max(s.left, e.left),
    bottom: Math.min(s.bottom, e.bottom),
    right: Math.min(s.right, e.right)
  };
}
function Ql(s, e, t) {
  const { headerRows: n, headerColumns: o, freezedRows: r, freezedColumns: i, rowCount: a, colCount: d } = t, c = a - 1, l = d - 1, h = s.startsWith("top"), u = s.endsWith("left"), f = {
    top: h ? n : r,
    left: u ? o : i,
    bottom: h ? r - 1 : c,
    right: u ? i - 1 : l
  };
  return Jl(e, f);
}
function ea(s, e) {
  if (e.length === 1) return ["top", "bottom", "left", "right"];
  const [t, n] = s.split("-"), o = new Set(e.map((i) => i.split("-")[0])), r = new Set(e.map((i) => i.split("-")[1]));
  if (e.length === 2) {
    if (o.size === 1)
      return ["top", "bottom", n];
    if (r.size === 1)
      return [t, "left", "right"];
  }
  return [t, n];
}
const Ge = "is-hidden", Et = ["top-left", "top-right", "bottom-left", "bottom-right"], ta = {
  "top-left": As,
  "top-right": Os,
  "bottom-left": zs,
  "bottom-right": Hs
};
function na() {
  const s = {};
  for (const e of Et) {
    const t = document.createElement("div");
    t.className = Ue(Ls, ta[e], Ge), s[e] = t;
  }
  return s;
}
class oa {
  constructor(e, t) {
    this._grid = e, this._gridStore = t, this._selectionMap = na(), this._gridStore.elements.freezedColRowArea.append(this._selectionMap["top-left"]), this._gridStore.elements.freezedRows.append(this._selectionMap["top-right"]), this._gridStore.elements.freezedColArea.append(this._selectionMap["bottom-left"]), this._gridStore.elements.bodyRows.append(this._selectionMap["bottom-right"]);
  }
  _selectionMap;
  updateScroll() {
    this._grid.getSelection();
  }
  releaseRange() {
    Et.forEach((e) => this._selectionMap[e].classList.add(Ge));
  }
  update() {
    const e = this._gridStore.gridStateContext.selectionRangeState.value;
    if (!e) {
      this.releaseRange();
      return;
    }
    const { range: t } = e;
    this._updateArea(t);
  }
  _getMeta() {
    return {
      headerRows: this._grid.headerRows,
      headerColumns: this._grid.headerColumns,
      freezedRows: this._grid.getFreezedRowCount(),
      freezedColumns: this._grid.getFreezedColumnCount(),
      rowCount: this._grid.getRowCount(),
      colCount: this._grid.getColCount()
    };
  }
  _updateArea(e) {
    for (const o of Et) this._clearStyle(o);
    const t = this._getMeta(), n = Zl(e, t);
    for (const o of n) {
      const r = Ql(o, e, t);
      if (!r) continue;
      this._selectionMap[o].classList.remove(Ge);
      const a = ea(o, n);
      this._setStyleByRange(o, r), this._setBorderStyle(o, a), this._drawBoundaryBorders(o, e, r);
    }
  }
  _drawBoundaryBorders(e, t, n) {
    const o = this._grid.getFreezedRowCount(), r = this._grid.getFreezedColumnCount(), [i, a] = e.split("-"), { top: d, bottom: c, left: l, right: h } = this._getRect(n), u = h - l, f = c - d, g = (R, T, x, H) => {
      const L = this._selectionMap[R];
      L.classList.remove(Ge), L.style.top = `${d}px`, L.style.left = `${l}px`, L.style.width = `${T}px`, L.style.height = `${x}px`, this._setBorderStyle(R, [H]);
    };
    o > 0 && o === t.top && g(`top-${a}`, u, 1, "bottom"), r > 0 && r === t.left && g(`${i}-left`, 1, f, "right");
  }
  _setStyleByRange(e, t) {
    const n = this._selectionMap[e], { top: o, bottom: r, left: i, right: a } = this._getRect(t);
    Object.assign(n.dataset, {
      top: String(t.top),
      left: String(t.left),
      bottom: String(t.bottom),
      right: String(t.right),
      visible: "true"
    }), n.style.top = `${o}px`, n.style.left = `${i}px`, n.style.height = `${r - o}px`, n.style.width = `${a - i}px`;
  }
  _setBorderStyle(e, t) {
    const n = this._selectionMap[e];
    for (const o of t)
      n.classList.add(`border-line__${o}`);
  }
  _clearStyle(e) {
    const t = this._selectionMap[e];
    t.classList.add(Ge), delete t.dataset.top, delete t.dataset.left, delete t.dataset.bottom, delete t.dataset.right, delete t.dataset.visible, this._clearAllBorder(e);
  }
  _clearAllBorder(e) {
    this._selectionMap[e].classList.remove(
      "border-line__top",
      "border-line__bottom",
      "border-line__left",
      "border-line__right"
    );
  }
  _getRect(e) {
    return {
      top: Math.max(this._grid.getRow(e.top).top - $t, 0),
      left: Math.max(this._grid.getColumn(e.left).left - lt, 0),
      bottom: this._grid.getRow(e.bottom).bottom,
      right: this._grid.getColumn(e.right).right
    };
  }
}
const et = -1, Rn = 2, xn = 2, sa = 2, ra = [
  "nothing",
  // row id, column id, left top, height 영향
  "updateColumnId",
  "updateRowId",
  // 상위에서 height가 영향 받으므로, top을 그 다음으로 처리함
  "updateTop",
  "updateLeft",
  "updateRowsStickyLeft",
  //
  "resizeGridWrapperHeight",
  "resizeGridWrapperWidth",
  "generateScrollBarClass",
  //
  "updateScroll",
  //
  "virtualRender",
  "adjustSelection",
  "updateSelection",
  "updateSelectionByScroll"
];
function ia(s) {
  return s.mergeMain ?? s;
}
class la {
  _args;
  _store;
  _gridRangeUtil;
  _scheduledTaskSet = /* @__PURE__ */ new Set();
  _afterRenderCallbackList = [];
  _updateScrollInfo = { row: -1, col: -1 };
  _rafHandler = et;
  constructor(e) {
    const { grid: t, store: n } = e;
    this._args = e, this._store = n, this._gridRangeUtil = new at(t), n.hook.addSyncHook("contextScroll", (o) => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll").forceRunTasks();
    });
  }
  _resetContext() {
    this._updateScrollInfo = { row: -1, col: -1 };
  }
  _renderTask(e = 0) {
    if (e > sa) {
      console.warn("ignore render task because of possible infinite loop");
      return;
    }
    const t = new Set(this._scheduledTaskSet);
    this._scheduledTaskSet.clear(), this._rafHandler = et;
    for (const o of ra)
      if (!(!t.has(o) || o === "nothing"))
        try {
          this[o].call(this);
        } catch (r) {
          console.error(o, r);
        }
    const n = [...this._afterRenderCallbackList];
    this._afterRenderCallbackList.length = 0, n.forEach((o) => o()), this.checkScheduled("updateTop") && this.forceRunTasks(e + 1);
  }
  updateScrollInfo(e) {
    return Object.assign(this._updateScrollInfo, e), this.addTask("updateScroll").addTask("virtualRender");
  }
  _scrollOnRowTask() {
    if (this._updateScrollInfo.row === -1) return;
    const e = this._updateScrollInfo.row, { grid: t, store: { tableElement: n } } = this._args, o = K(e, 0, t.getRowCount() - 1), r = t.getRow(o), i = r.top, a = r.bottom, { fixedRowHeight: d, scrollBottom: c, scrollTop: l } = t, h = l + d;
    c < a ? n.scrollTop = l + (a - c) : h > i && (n.scrollTop = i - d), this._updateScrollInfo.row = -1;
  }
  _scrollOnColTask() {
    if (this._updateScrollInfo.col === -1) return;
    const e = this._updateScrollInfo.col, { grid: t, store: { tableElement: n } } = this._args, o = K(e, 0, t.getColCount() - 1), r = t.getColumnLeft(o), i = r + t.getColumnWidth(o), { fixedColumnWidth: a, scrollRight: d, scrollLeft: c } = t, l = c + a;
    d < i ? n.scrollLeft = c + (i - d) : l > r && (n.scrollLeft = r - a), this._updateScrollInfo.col = -1;
  }
  updateScroll() {
    this._scrollOnRowTask(), this._scrollOnColTask();
  }
  forceRunTasks(e = 0) {
    this._rafHandler !== et && cancelAnimationFrame(this._rafHandler), this._renderTask(e);
  }
  addTask(e) {
    return this._scheduledTaskSet.add(e), this._rafHandler === et && (this._rafHandler = requestAnimationFrame(() => this._renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  _getViewportRowMap() {
    const e = /* @__PURE__ */ new Map(), { grid: t, store: n } = this._args, { rowManager: o, columnManager: r, tableElement: i } = n, { fixedRowHeight: a, fixedColumnWidth: d } = t, {
      scrollTop: c,
      scrollLeft: l,
      clientHeight: h,
      clientWidth: u
    } = i, f = t.getRowCount() - 1, g = t.getColCount() - 1, R = Math.min(t.getFreezedRowCount(), f), T = Math.min(t.getFreezedColumnCount(), g), x = t.getRowByTop(a + c + 1) ?? t.firstRow, H = t.getRowByTop(c + h) ?? t.lastRow, L = t.getColumnByLeft(d + l + 1) ?? r.firstColumn, I = t.getColumnByLeft(l + u) ?? r.lastColumn;
    if (!x || !H || !L || !I) return e;
    const b = o.getRowUnstable(Math.max(x.rowId - Rn, R)), C = o.getRowUnstable(Math.min(H.rowId + Rn, f)), w = r.getColumnUnstable(Math.max(L.columnId - xn, T)), E = r.getColumnUnstable(Math.min(I.columnId + xn, g));
    let p = P(0, R).asList(), v = P(0, Math.max(T, n.getThemeValue("grid.forceRenderLeftCol"))).asList();
    p = p.concat(P(b.rowId, C.rowId + 1).asList()), v = v.concat(P(w.columnId, E.columnId + 1).asList());
    const y = g - n.getThemeValue("grid.forceRenderRightCol") + 1;
    y > E.columnId && (v = v.concat(P(y, g + 1).asList()));
    for (const m of p) {
      const S = o.getRowUnstable(m);
      if (S.visible)
        for (const _ of v)
          r.getColumnUnstable(_).visible && M(ia(S.getCellUnstable(_)));
    }
    return e;
    function M(m) {
      const S = e.get(m.row);
      S ? S.push(m) : e.set(m.row, [m]);
    }
  }
  virtualRender() {
    const {
      grid: e,
      contextElement: t,
      store: {
        elements: {
          freezedRows: n,
          bodyRows: o
        },
        rowManager: r
      }
    } = this._args;
    if (t.offsetWidth === 0) return;
    const i = e.getFreezedRowCount(), a = this._getViewportRowMap();
    d(), c(), l();
    function d() {
      r.runFuncEachRow((h) => !a.has(h.rowId) && h.unmount());
    }
    function c() {
      const { headerRows: h } = e;
      r.runFuncEachRow((u) => {
        const f = a.get(u.rowId);
        f && (u.updateViewportCells(f), u.isFreezed || u.freeze(u.rowId < h), u.isMounted && u.element.parentElement === o && u.unmount(), u.isMounted || u.mount(n, "beforeend"));
      }, 0, i);
    }
    function l() {
      let h = null;
      for (const [u, f] of a.entries()) {
        if (u < i) continue;
        const g = r.getRowUnstable(u);
        if (g.updateViewportCells(f), g.isMounted)
          if (g.element.parentElement === n)
            g.unmount();
          else {
            h = g.element;
            continue;
          }
        h ? g.mount(h, "afterend") : g.mount(o, "afterbegin"), h = g.element;
      }
    }
  }
  updateRowsStickyLeft() {
    this._args.store.rowManager.runFuncEachRow((e) => e.updateStickyStatus());
  }
  updateSelection() {
    this._args.selector.update();
  }
  updateLeft() {
    const { grid: e } = this._args, t = e.getColCount();
    let n = 0, o = 0;
    for (; n < t; ) {
      const r = e.getColumn(n);
      r.left = o, r.visible && (o = r.right), ++n;
    }
  }
  updateTop() {
    const { grid: e } = this._args, t = e.getRowCount();
    let n = 0, o = 0;
    for (; n < t; ) {
      const r = e.getRow(n);
      r.top = o, r.visible && (o = r.bottom), ++n;
    }
  }
  updateColumnId() {
    const { grid: e } = this._args, t = e.getColCount();
    let n = 0;
    for (; n < t; ) {
      const o = e.getColumn(n);
      o.columnId = n, ++n;
    }
  }
  updateRowId() {
    const { grid: e } = this._args, t = e.getRowCount(), n = e.getFreezedRowCount();
    let o = 0;
    for (; o < t; ) {
      const r = e.getRow(o);
      r.rowId = o, r.isFreezed && o >= n ? r.unfreeze() : !r.isFreezed && o < n && r.freeze(), ++o;
    }
  }
  adjustSelection() {
    const { grid: e, store: t } = this._args, { gridStateContext: n } = t, o = n.selectionRangeState.value;
    if (!o) return e.releaseCells();
    const r = this._gridRangeUtil.adjustRange(o.range);
    if (!r) return e.releaseCells();
    e.select(this._gridRangeUtil.extendRange(r));
  }
  updateSelectionByScroll() {
    this._args.selector.updateScroll();
  }
  resizeGridWrapperHeight() {
    this._store.elements.bodyRows.style.height = `${this._args.grid.height}px`;
  }
  resizeGridWrapperWidth() {
    const e = `${this._args.grid.width}px`;
    this._store.elements.bodyRows.style.width = e, this._store.elements.freezedRows.style.width = e;
  }
  generateScrollBarClass() {
    this._args.grid.generateScrollBarClass(this._args.store.tableElement);
  }
  addAfterRenderTask(e) {
    this._afterRenderCallbackList.push(e);
  }
  checkScheduled(e) {
    return this._scheduledTaskSet.has(e);
  }
}
class fo extends V {
  _execute() {
    this._instance.setRowHeight(...this._args);
  }
  _getUndoContext() {
    return {
      latestHeight: this._instance.getRowHeight(this._args[0])
    };
  }
  _undo() {
    this._instance.setRowHeight(this._args[0], this._undoContext.latestHeight);
  }
  get canExecute() {
    return this._args[0] < this._instance.getRowCount();
  }
  get canUndo() {
    return this._args[0] < this._instance.getRowCount();
  }
}
const aa = {
  "col-resizing": Nn,
  "row-resizing": $n
}, mt = {
  "col-resizing": Ws,
  "row-resizing": Ps
}, pt = (s) => s.mergeInfo ? s.col + s.mergeInfo.colSpan - 1 : s.col, Sn = (s) => s.mergeInfo ? s.row + s.mergeInfo.rowSpan - 1 : s.row, ca = 500, bn = 4;
class go extends Y {
  _options;
  constructor(e) {
    super(), this._options = e;
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const {
      enabledColResizer: o,
      enabledRowResizer: r,
      disabledColumns: i,
      disabledRows: a,
      enabledColRatioResizer: d
    } = this._options, {
      elements: c,
      gridStateContext: l,
      columnManager: h
    } = t, u = new Set(i), f = new Set(a), g = (I, b, C) => {
      e.commandManager.pushCommandBlock(new he(I, new fo(e, [b, C])));
    };
    {
      const I = document.createElement("div");
      let b = null, C = !1, w = 0, E = null, p = !1;
      const v = (_, k) => {
        p && (p = !1, k.__IGNORE_CELL_CLICK__ = !0);
      };
      t.hook.addSyncBeginHook("cellClick", v), this.addRollbackTask(() => t.hook.removeSyncBeginHook("cellClick", v));
      const y = () => {
        b && (b.element.classList.remove(mt["col-resizing"]), b.element.classList.remove(mt["row-resizing"]), b = null), n.classList.remove(Nn), n.classList.remove($n), n.classList.remove(le), E && n.removeEventListener("mousedown", E);
      }, M = (_, k) => {
        b = _, n.classList.add(le), n.classList.add(aa[k]), _.element.classList.add(mt[k]);
        let z = 0, A = 0, D = 0, N = 0, F = 0;
        const ye = () => _.col < e.getFreezedColumnCount() ? N : N - e.scrollLeft, Gt = () => _.row < e.getFreezedRowCount() ? N : N - e.scrollTop;
        E = (Z) => {
          const oe = (/* @__PURE__ */ new Date()).getTime();
          if (l.setMode({
            mode: k,
            contextParam: {}
          }), oe - w <= ca) {
            if (k === "col-resizing") {
              const ee = pt(_);
              H(ee, t.rowManager.getMaxCellWidth(ee, ee + 1));
            } else
              e.commandManager.doRecording("Autosize row", () => {
                e.autoSizeRow(_.row);
              });
            w = 0, l.setIdle();
            return;
          }
          if (C = !0, w = oe, k === "col-resizing") {
            I.className = Ns;
            const ee = e.getColumn(_.col);
            F = e.getColumnWidth(pt(_)), z = Z.pageX, A = z - F + ee.minSize, D = z - F + ee.maxSize, N = e.getColumnLeft(_.col) + e.getCellWidth(_), I.style.top = "0px", I.style.width = "0px", I.style.height = `${e.height}px`, I.style.left = `${ye()}px`;
          } else {
            I.className = $s;
            const ee = e.getRow(_.row);
            F = e.getRowHeight(Sn(_)), z = Z.pageY, A = z - F + ee.minSize, D = z - F + ee.maxSize, N = e.getRow(_.row).top + e.getCellHeight(_), I.style.top = `${Gt()}px`, I.style.width = `${e.width}px`, I.style.height = "0px", I.style.left = "0px";
          }
          c.wrapper.appendChild(I), e.addGlobalEventListener(document, "keydown", Kt), e.addGlobalEventListener(document, "mouseup", jt), e.addGlobalEventListener(document, "mousemove", Vt);
        };
        const Vt = (Z) => {
          if (k === "col-resizing") {
            const oe = K(Z.pageX, A, D) - z;
            I.style.left = `${ye() + oe}px`;
          } else {
            const oe = K(Z.pageY, A, D) - z;
            I.style.top = `${Gt() + oe}px`;
          }
        }, jt = (Z) => {
          if (k === "col-resizing") {
            const Fe = K(Z.pageX, A, D) - z;
            if (Math.abs(Fe) > bn) {
              const Ye = pt(_), yo = F + Fe;
              H(Ye, yo), w = 0;
            }
            const We = R(Z);
            We && We === _ && (p = !0);
          } else {
            const Fe = K(Z.pageY, A, D) - z;
            if (Math.abs(Fe) > bn) {
              const We = Sn(_), Ye = F + Fe;
              g("Resize row", We, Ye), e.setRowHeight(We, Ye), w = 0;
            }
          }
          Ut(), l.setIdle();
          const oe = R(Z);
          if (!oe) return;
          const ee = T(Z, oe);
          ee !== null && M(oe, ee);
        };
        function Ut() {
          C = !1, I.remove(), y(), document.removeEventListener("mousemove", Vt), document.removeEventListener("mouseup", jt), document.removeEventListener("keydown", Kt);
        }
        const Kt = (Z) => {
          Z.key === "Escape" && Ut();
        };
        e.addGlobalEventListener(n, "mousedown", E);
      }, m = (_) => {
        if (C) return;
        const k = R(_);
        if (y(), k === null) return;
        const z = T(_, k);
        z && M(k, z);
      }, S = (_) => {
        C || y();
      };
      e.addGlobalEventListener(n, "mousemove", m), e.addGlobalEventListener(n, "mouseleave", S);
    }
    const R = (I) => {
      const b = ae("th", "tr", I.target);
      if (!b) return null;
      const [C, w] = [
        parseInt(b.getAttribute("data-row") || "-1"),
        parseInt(b.getAttribute("data-col") || "-1")
      ];
      return e.cell(C, w);
    }, T = (I, b) => {
      if (b.cellType === "body-cell") return null;
      if (d) {
        const { visibleColumnList: C } = h, w = C[C.length - 1];
        if (C.length > 0 && b.col === w.columnId) return null;
      }
      return o && Math.abs(e.getCellWidth(b) - I.offsetX) <= Ds && !u.has(b.col) ? "col-resizing" : r && Math.abs(e.getCellHeight(b) - I.offsetY) <= Fs && !f.has(b.row) ? "row-resizing" : null;
    };
    function x(I, b, C) {
      const w = e.getColumnWidth(b) - C;
      e.setColumnWidth(b, w);
      const E = w - e.getColumnWidth(b);
      if (E !== 0) {
        const p = b - I;
        e.setColumnWidth(
          // gap 만큼 이전 열 크기 조정
          b - p,
          e.getColumnWidth(b - p) + E
        );
      }
    }
    function H(I, b) {
      const C = e.getColumnWidth(I);
      e.commandManager.doRecording("resize column by Resizer", () => {
        e.setColumnWidth(I, b), d && x(I, L(I), e.getColumnWidth(I) - C);
      });
    }
    function L(I) {
      let b = e.getColumn(I + 1);
      for (; !b.visible; )
        b = e.getColumn(b.columnId + 1);
      return b.columnId;
    }
  }
  get pluginKey() {
    return "resizer";
  }
}
function Nc(s) {
  return new go(s);
}
const da = 16;
class mo extends Y {
  _enableHeaderClick = !0;
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: o, hook: r, tableElement: i } = t;
    let a = null, d = null, c, l = null;
    const h = (w, E) => {
      const p = [
        w.row,
        w.bottom,
        E.row,
        E.bottom
      ], v = [
        w.col,
        w.right,
        E.col,
        E.right
      ], y = {
        top: Math.min(...p),
        left: Math.min(...v),
        bottom: Math.max(...p),
        right: Math.max(...v)
      };
      jn(y, l) || (e.select(y, e.activeCell ?? a), this.onChangedSelection(y));
    }, u = (w, E) => {
      const p = e.activeCell;
      E.shiftKey && p ? (a = p, h(p, e.cell(w.row, w.col))) : (a = w, e.selectRange(a.row, a.col, a.bottom, a.right, a), this.onChangedSelection({ top: a.row, left: a.col, bottom: a.bottom, right: a.right })), d = a, o.setMode({ mode: "selecting-mouse", contextParam: {} });
    }, f = (w, E) => {
      this._enableHeaderClick && (E.__IGNORE_HEADER_SELECT__ || (a = w, R(a, a), o.setMode({ mode: "selecting-mouse", contextParam: {} })));
    };
    function g(w, E) {
      const p = E.closest("td,th");
      if (!p) return;
      const v = se(p);
      d = e.cell(v.row, v.col), R(w, d);
    }
    function R(w, E) {
      w.cellType === "body-cell" ? h(w, E) : w.cellType === "col-header" ? e.selectColumns(...yn(w.col, E.right)) : w.cellType === "row-header" && e.selectRows(...yn(w.row, E.bottom));
    }
    function T(w, E) {
      const { offsetX: p, offsetY: v, target: y } = w;
      if (!Re(y)) return null;
      const M = p + y.scrollLeft, m = v + y.scrollTop, S = M > e.width ? e.width : M, _ = m > e.height ? e.height : m, k = e.findCellOrNull(_, S);
      k && (d = k, R(E, k));
    }
    function x(w) {
      const E = w.clientWidth + w.scrollLeft, p = w.clientHeight + w.scrollTop, v = w.scrollTop + e.headerHeight, y = w.scrollLeft + e.headerWidth, M = p > e.height ? e.height : p, m = E > e.width ? e.width : E, S = e.findCellOrNull(v, y), _ = e.findCellOrNull(M, m - 1);
      return {
        top: S?.row ?? 0,
        bottom: _?.row ?? 0,
        left: S?.col ?? 0,
        right: _?.col ?? 0
      };
    }
    function H(w, E, p, v) {
      c = window.setTimeout(() => {
        if (!a) return;
        const m = y(), S = M(), { top: _, bottom: k, left: z, right: A } = x(w), D = {
          top: w.scrollTop,
          left: w.scrollLeft,
          targetRow: p,
          targetCol: v
        };
        m && (E === "t" ? (D.top -= e.getRowHeight(_), D.targetRow = _) : (D.top += e.getRowHeight(k), D.targetRow = k)), S && (E === "l" ? (D.left -= e.getColumnWidth(z), D.targetCol = z) : (D.left += e.getColumnWidth(A), D.targetCol = A)), (m || S) && (w.scrollTo({ top: D.top, left: D.left }), R(a, e.cell(D.targetRow, D.targetCol)), H(w, E, D.targetRow, D.targetCol));
      }, da);
      function y() {
        return E === "t" ? w.scrollTop > 0 : E === "b" ? w.scrollHeight - (w.scrollTop + w.clientHeight) > 0 : !1;
      }
      function M() {
        return E === "l" ? w.scrollLeft > 0 : E === "r" ? w.scrollWidth - (w.scrollLeft + w.clientWidth) > 0 : !1;
      }
    }
    function L() {
      c && (clearTimeout(c), c = void 0);
    }
    function I(w) {
      if (n.classList.contains(le) || w.button !== 0 || !Re(w.target) || // textArea, button 에서는 pass
      w.target instanceof HTMLTextAreaElement || ae(".button", "tr", w.target)) return;
      const E = ae("td,th", "tr", w.target);
      if (!E) return;
      const p = se(E), v = e.cell(p.row, p.col);
      E.tagName === "TD" ? u(v, w) : E.tagName === "TH" && f(v, w);
    }
    function b(w) {
      a && Re(w.target) && (w.target === i ? T(w, a) : g(a, w.target));
    }
    function C(w) {
      l = w;
    }
    r.addHook("contextMouseMove", b), r.addHook("contextMouseDown", I), r.addSyncHook("selectChanged", C), this.addRollbackTask(() => {
      r.removeHook("contextMouseMove", b), r.removeHook("contextMouseDown", I), r.removeSyncHook("selectChanged", C);
    }), e.addGlobalEventListener(document, "mouseup", () => {
      a && (L(), a = null, d = null, o.setIdle());
    }), e.addGlobalEventListener(i, "mouseleave", ({ currentTarget: w, clientY: E, clientX: p }) => {
      if (!a || !d || !Re(w)) return;
      const { top: v, bottom: y, left: M, right: m } = w.getBoundingClientRect();
      if (v < E && y > E && M < p && m > p) return;
      const S = _();
      S && H(w, S, d.row, d.col);
      function _() {
        return E < v ? "t" : E > y ? "b" : p < M ? "l" : p > m ? "r" : null;
      }
    }), e.addGlobalEventListener(i, "mouseenter", (w) => {
      a && Re(w.currentTarget) && L();
    }), e.onDoubleClickCell = (w) => {
      w.cellType === "body-cell" && o.isIdle && (e.scrollInView(w.row, w.col), e.forceLayoutTask(), e.doEditMode(w, !1, !0));
    };
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
  set enableHeaderClick(e) {
    this._enableHeaderClick = e;
  }
}
function yn(s, e) {
  return s < e ? [s, e] : [e, s];
}
function $c() {
  return new mo();
}
class po extends V {
  _getUndoContext() {
    const [e, t] = this._args, n = [], o = new Ae(this._instance, this._instance);
    for (const r of o.getSelectionGenerator(e))
      t && this._instance.isFilteredRow(r.row) || this._instance.onClearCellCheck(r) && n.push({
        row: r.row,
        col: r.col,
        text: r.text
      });
    return { textSnapshot: n };
  }
  _undo() {
    const { textSnapshot: e } = this._undoContext;
    e.forEach(({ row: t, col: n, text: o }) => {
      this._instance.setCell(t, n, { text: o }), this._instance.onEditCellDone(this._instance.cell(t, n), !0, "", "", 0, 0);
    });
  }
  _execute() {
    const e = this._instance;
    for (const t of this._undoContext.textSnapshot)
      e.cell(t.row, t.col).clear();
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function Co(s, e) {
  const t = (p, v, y) => {
    const M = s.headerRows;
    let m = y, S = p;
    for (; m !== 0; ) {
      const _ = s.cell(S, v), z = (_.mergeMain ?? _).row - 1;
      if (z < M) break;
      s.getRowVisible(z) && ++m, S = z;
    }
    return s.getRowVisible(S) ? S : p;
  }, n = (p, v, y) => {
    const M = s.getRowCount() - 1;
    let m = y, S = p;
    for (; m > 0; ) {
      const _ = s.cell(S, v), z = (_.mergeMain ?? _).bottom + 1;
      if (z > M) break;
      s.getRowVisible(z) && --m, S = z;
    }
    return s.getRowVisible(S) ? S : p;
  }, o = (p, v, y) => {
    const M = s.headerColumns;
    let m = y, S = v;
    for (; m !== 0; ) {
      const _ = s.cell(p, S), z = (_.mergeMain ?? _).col - 1;
      if (z < M) break;
      s.getColumnVisible(z) && ++m, S = z;
    }
    return s.getColumnVisible(S) ? S : v;
  }, r = (p, v, y) => {
    const M = s.getColCount() - 1;
    let m = y, S = v;
    for (; m !== 0; ) {
      const _ = s.cell(p, S), z = (_.mergeMain ?? _).right + 1;
      if (z > M) break;
      s.getColumnVisible(z) && --m, S = z;
    }
    return s.getColumnVisible(S) ? S : v;
  }, i = () => {
    let p = s.headerColumns;
    for (; !s.getColumnVisible(p); )
      ++p;
    return p;
  }, a = () => {
    let p = s.getColCount() - 1;
    for (; !s.getColumnVisible(p); )
      --p;
    return p;
  }, d = () => {
    let p = s.headerRows;
    for (; !s.getRowVisible(p); )
      ++p;
    return p;
  }, c = () => {
    let p = s.getRowCount() - 1;
    for (; !s.getRowVisible(p); )
      --p;
    return p;
  }, l = (p) => {
    if (s.getRowCount() - 1 === p) return p;
    let y = p + 1;
    for (; !s.getRowVisible(y); )
      ++y;
    return y;
  }, h = (p) => {
    const v = s.headerRows;
    if (p === v) return p;
    let y = p - 1;
    for (; !s.getRowVisible(y); )
      ++y;
    return y;
  }, u = () => {
    const { activeCell: p } = s;
    if (!p) {
      console.warn("No active cell warning.");
      return;
    }
    const v = c(), y = a(), M = p.mergeMain ?? p;
    if (M.right === y) {
      if (p.row === v) return;
      const m = i(), S = l(p.row);
      e ? s.selectRow(S, s.cell(S, m)) : s.selectCell(S, m), s.scrollInView(S, m);
    } else {
      const m = r(p.row, M.right, 1);
      e ? s.selectRow(p.row, s.cell(p.row, m)) : s.selectCell(p.row, m), s.scrollOnCol(m);
    }
  }, f = () => {
    const { activeCell: p } = s;
    if (!p) {
      console.warn("No active cell warning.");
      return;
    }
    const v = d(), y = i(), M = p.mergeMain ?? p;
    if (M.col === y) {
      if (p.row === v) return;
      const m = a(), S = h(p.row);
      e ? s.selectRow(S, s.cell(S, m)) : s.selectCell(S, m), s.scrollInView(S, m);
    } else {
      const m = o(p.row, M.col, -1);
      e ? s.selectRow(p.row, s.cell(p.row, m)) : s.selectCell(p.row, m), s.scrollOnCol(m);
    }
  }, g = (p, v, y) => {
    let M = -1, m = -1;
    for (let S = v; S <= y; S++) {
      const _ = s.cell(p, S), k = _.mergeMain ?? _, { rowSpan: z } = k.mergeInfo;
      z > M && (M = z, m = S);
    }
    return m;
  }, R = (p, v, y) => {
    let M = -1;
    for (let m = v; m <= y; m++) {
      const S = s.cell(p, m), _ = S.mergeMain ?? S, { bottom: k } = _;
      k > M && (M = k);
    }
    return M;
  }, T = (p, v, y) => {
    let M = 999999999;
    for (let m = v; m <= y; m++) {
      const S = s.cell(p, m), _ = S.mergeMain ?? S;
      M > _.row && (M = _.row);
    }
    return M;
  }, x = (p, v, y) => {
    let M = -1, m = -1;
    for (let S = v; S <= y; S++) {
      const _ = s.cell(S, p), k = _.mergeMain ?? _, { colSpan: z } = k.mergeInfo;
      z > M && (M = z, m = S);
    }
    return m;
  }, H = (p, v, y) => {
    let M = -1;
    for (let m = v; m <= y; m++) {
      const S = s.cell(m, p), _ = S.mergeMain ?? S, { right: k } = _;
      k > M && (M = k);
    }
    return M;
  }, L = (p, v, y) => {
    let M = 999999999;
    for (let m = v; m <= y; m++) {
      const S = s.cell(m, p), _ = S.mergeMain ?? S;
      M > _.col && (M = _.col);
    }
    return M;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: o,
    getNextXRight: r,
    getFirstActiveRow: d,
    selectNextActiveCell: u,
    selectBeforeActiveCell: f,
    selectNextSelection: (p, v, y) => {
      const M = s.getSelection(), { activeCell: m } = s;
      if (M == null || m == null) {
        console.warn("No selection warning");
        return;
      }
      const S = m.mergeMain ?? m;
      if (y && e) return;
      if (!y) {
        if (p !== 0) {
          const D = p < 0 ? t(S.row, m.col, p) : n(S.bottom, m.col, p);
          e ? s.selectRow(D, s.cell(D, m.col)) : s.selectCell(D, m.col), s.scrollOnRow(D);
        } else {
          const D = v < 0 ? o(m.row, S.col, v) : r(m.row, S.right, v);
          e ? s.selectRow(m.row, s.cell(m.row, D)) : s.selectCell(m.row, D), s.scrollOnCol(D);
        }
        return;
      }
      const { top: _, bottom: k, left: z, right: A } = M;
      if (p !== 0)
        if (p < 0)
          if (R(m.row, z, A) === k) {
            const N = g(_, z, A), F = t(_, N, p);
            s.selectRange(F, z, k, A, m), s.scrollOnRow(F);
          } else {
            const N = g(k, z, A), F = t(k, N, p);
            s.selectRange(_, z, F, A, m), s.scrollOnRow(F);
          }
        else if (T(m.row, z, A) === _) {
          const N = g(k, z, A), F = n(k, N, p);
          s.selectRange(_, z, F, A, m), s.scrollOnRow(F);
        } else {
          const N = g(_, z, A), F = n(_, N, p);
          s.selectRange(F, z, k, A, m), s.scrollOnRow(F);
        }
      else if (v < 0)
        if (H(m.col, _, k) === A) {
          const N = x(z, _, k), F = o(N, z, v);
          s.selectRange(_, F, k, A, m), s.scrollOnCol(F);
        } else {
          const N = x(A, _, k), F = o(N, A, v);
          s.selectRange(_, z, k, F, m), s.scrollOnCol(F);
        }
      else if (L(m.col, _, k) === z) {
        const N = x(A, _, k), F = r(N, A, v);
        s.selectRange(_, z, k, F, m), s.scrollOnCol(F);
      } else {
        const N = x(z, _, k), F = r(N, z, v);
        s.selectRange(_, F, k, A, m), s.scrollOnCol(F);
      }
    },
    selectMoveToLastColumn: (p) => {
      const v = s.getSelection(), { activeCell: y } = s;
      if (v == null || y == null) {
        console.warn("No selection warning");
        return;
      }
      const M = a();
      p && e || (p ? s.selectRange(v.top, y.col, v.bottom, M, y) : e ? s.selectRow(y.row, s.cell(y.row, M)) : s.selectCell(y.row, M), s.scrollOnCol(M));
    },
    selectMoveToFirstColumn: (p) => {
      const v = s.getSelection(), { activeCell: y } = s;
      if (v == null || y == null) {
        console.warn("No selection warning");
        return;
      }
      const M = i();
      p && e || (p ? s.selectRange(v.top, M, v.bottom, y.col, y) : e ? s.selectRow(y.row, s.cell(y.row, M)) : s.selectCell(y.row, M), s.scrollOnCol(M));
    },
    selectMoveToLastRow: (p) => {
      const v = s.getSelection(), { activeCell: y } = s;
      if (v == null || y == null) {
        console.warn("No selection warning");
        return;
      }
      const M = c();
      p && e || (p ? s.selectRange(y.row, v.left, M, v.right, y) : s.selectCell(M, y.col), s.scrollOnRow(M));
    },
    selectMoveToFirstRow: (p) => {
      const v = s.getSelection(), { activeCell: y } = s;
      if (v == null || y == null) {
        console.warn("No selection warning");
        return;
      }
      const M = d();
      p && e || (p ? s.selectRange(M, v.left, y.bottom, v.right, y) : s.selectCell(M, y.col), s.scrollOnRow(M));
    }
  };
}
class ua {
  keyMap;
  constructor() {
    this.keyMap = {};
  }
  addKeyAction(e, t) {
    this.keyMap[e] || (this.keyMap[e] = []), this.keyMap[e].push(t);
  }
  hasKeyAction(e) {
    return this.keyMap[e] && this.keyMap[e].length > 0;
  }
  startKeyAction(e) {
    if (this.hasKeyAction(e.key) && this.onStartKeyActionHook(e) !== !1) {
      if (this.keyMap[e.key])
        for (const t of this.keyMap[e.key])
          try {
            if (t(e) === !1)
              break;
          } catch (n) {
            console.error(n);
            break;
          }
      this.onEndKeyActionHook(e);
    }
  }
  onStartKeyActionHook(e) {
    return !0;
  }
  onEndKeyActionHook(e) {
  }
}
const vn = 10;
class wo extends Y {
  _keyMiddleware;
  _rowSelection;
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const o = new ua(), { gridStateContext: r, hook: i } = n;
    o.onStartKeyActionHook = (C) => i.emitSync("keyAction", [C, C.key]), o.onEndKeyActionHook = (C) => {
      !C.ctrlKey && !C.shiftKey && C.key === " " && I() === !1 || b(C.key) || C.preventDefault();
    };
    const a = (C = !1) => {
      if (!r.isIdle) return;
      const w = e.activeCell?.mergeMain ?? e.activeCell;
      w && (e.scrollInView(w.row, w.col), e.forceLayoutTask(), e.doEditMode(w, C));
    };
    this._keyMiddleware.forEach(([C, w]) => o.addKeyAction(C, w));
    const d = new Ae(n.rowManager, n.columnManager), {
      selectNextActiveCell: c,
      selectNextSelection: l,
      selectBeforeActiveCell: h,
      selectMoveToFirstRow: u,
      selectMoveToFirstColumn: f,
      selectMoveToLastColumn: g,
      selectMoveToLastRow: R
    } = Co(e, this._rowSelection), T = (C) => (w) => {
      r.gridModeState.value.mode !== "edit-cell" && e.getSelection() && C(w);
    };
    this.addPluginSyncHook("cut", T((C) => e.onNativeCut(C))), this.addPluginSyncHook("copy", T((C) => e.onNativeCopy(C))), this.addPluginSyncHook("paste", T((C) => e.onNativePaste(C))), o.addKeyAction("Tab", (C) => (C.shiftKey ? h() : c(), !0)), o.addKeyAction("ArrowRight", (C) => (C.ctrlKey ? g(C.shiftKey) : l(0, 1, C.shiftKey), !0)), o.addKeyAction("ArrowUp", (C) => (C.ctrlKey ? u(C.shiftKey) : l(-1, 0, C.shiftKey), !0)), o.addKeyAction("ArrowLeft", (C) => (C.ctrlKey ? f(C.shiftKey) : l(0, -1, C.shiftKey), !0)), o.addKeyAction("ArrowDown", (C) => (C.ctrlKey ? R(C.shiftKey) : l(1, 0, C.shiftKey), !0)), o.addKeyAction("Home", (C) => (C.ctrlKey ? (f(C.shiftKey), u(C.shiftKey)) : f(C.shiftKey), !0)), o.addKeyAction("End", (C) => (C.ctrlKey ? (g(C.shiftKey), R(C.shiftKey)) : g(C.shiftKey), !0)), o.addKeyAction("PageUp", (C) => (l(-vn, 0, C.shiftKey), !0)), o.addKeyAction("PageDown", (C) => (l(vn, 0, C.shiftKey), !0)), o.addKeyAction("Enter", () => {
      const C = e.getSelection();
      return C && (C.top === e.getRowCount() - 1 ? (l(0, 1, !1), C.left !== e.getSelection()?.left && u(!1)) : l(1, 0, !1)), !0;
    }), o.addKeyAction("a", x), o.addKeyAction("A", x), o.addKeyAction("z", H), o.addKeyAction("Z", H), o.addKeyAction("y", L), o.addKeyAction("Y", L);
    function x(C) {
      return C.ctrlKey ? (e.selectAll(), C.preventDefault(), !1) : !0;
    }
    function H(C) {
      return C.ctrlKey ? (e.undo(), C.preventDefault(), !1) : !0;
    }
    function L(C) {
      return C.ctrlKey ? (e.redo(), C.preventDefault(), !1) : !0;
    }
    o.addKeyAction("F2", (C) => (a(), !0)), o.addKeyAction("Backspace", (C) => {
      const w = e.getSelection(), E = e.activeCell;
      return !w || !E || e.doEditMode(E, !0), !0;
    }), o.addKeyAction("Delete", (C) => {
      const w = e.getSelection();
      if (!w || d.getCanClearCellCount(w, (p) => e.onClearCellCheck(p)) === 0) return !0;
      const E = new po(e, [w, !0]);
      return e.commandManager.pushCommandBlock(new he("Clear cells", E)), e.clearCells(w, !0), !0;
    }), o.addKeyAction(" ", (C) => {
      const w = e.getSelection();
      if (w === null) return !0;
      if (C.ctrlKey)
        return e.selectColumns(w.left, w.right), !0;
      if (C.shiftKey)
        return e.selectRows(w.top, w.bottom), !0;
      const E = [...d.getSelectionGenerator(w)];
      if (E.length === 0) return !0;
      const p = E[0], y = p.text === "true" ? "false" : "true", M = new he("Typing space"), m = (_, k) => {
        M.pushCommand(new ie(e, [_.row, _.col, { text: y }])), e.setText(_.row, _.col, y), k.onCheckboxClick(_.row, _.col, y === "true");
      }, S = (_, k) => {
        if (_.text === "true") return;
        const z = k.lastClickedRadio;
        z && M.pushCommand(new ie(e, [z.row, z.col, { text: "false" }])), M.pushCommand(new ie(e, [_.row, _.col, { text: "true" }])), e.setText(_.row, _.col, "true"), k.onRadioClick(_.row, _.col);
      };
      for (const _ of E) {
        if (_.onCheckReadonly() || _.props.disabled) continue;
        const k = _.renderInstance;
        k instanceof qn && m(_, k), _ === p && k instanceof no && S(_, k);
      }
      return M.commandLength > 0 && e.commandManager.pushCommandBlock(M), !0;
    }), this.addPluginSyncHook("input", (C) => {
      r.gridModeState.isIdle && C.data && a(!0);
    }), this.addPluginSyncHook("keydown", (C) => {
      if (
        // editMode에서 온 입력은 pass
        !(!r.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!r.isIdle) {
          C.preventDefault();
          return;
        }
        if (!C.ctrlKey && b(C.key)) {
          a(!0);
          return;
        }
        o.startKeyAction(C);
      }
    });
    function I() {
      const C = e.getSelection();
      if (!C) return !1;
      for (const w of d.getSelectionGenerator(C))
        if (w.renderType === "checkbox" || w.renderType === "radio") return !0;
      return !1;
    }
    function b(C) {
      return C === "Process" || ha.test(C);
    }
  }
  get pluginKey() {
    return "default-key";
  }
}
const ha = /^[\w]$/;
function Bc(s) {
  return new wo(s ?? {});
}
class fa extends Y {
  _mountTask({ grid: e, gridStore: t }) {
    const { table: n } = t.elements;
    let o = null;
    n.addEventListener("mousedown", (r) => {
      if (r.button !== 0) return;
      const i = ae("td", "tr", r.target);
      if (!i || i?.tagName === "TH") return;
      const a = se(i);
      o = e.cell(a.row, a.col), e.selectRow(o.row, o);
    }), e.addGlobalEventListener(document, "mouseup", () => o = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function Gc() {
  return new fa();
}
const ga = /^\d+px$/;
function ma(s) {
  for (const e of s)
    if (typeof e == "string") {
      if (ga.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function pa(s) {
  let e = 0;
  for (const t of s)
    typeof t == "string" && (e += _o(t));
  return e;
}
function _o(s) {
  return parseInt(s.substring(0, s.length - 2), 10);
}
class Ca extends Y {
  _columnWeightList = [];
  _fixedColumnWidth;
  constructor({ columnWeight: e }) {
    super(), ma(e), this._fixedColumnWidth = pa(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { hook: o, tableElement: r } = n, i = () => {
      const { clientWidth: c } = r;
      if (c === 0) return;
      const l = e.getColCount() - 1, h = c - l - this._fixedColumnWidth, u = P(e.getColCount()).reduce((R, T) => {
        if (!e.getColumnVisible(T)) return R;
        const x = this._columnWeightList[T];
        return x === void 0 ? R + 1 : typeof x == "number" ? R + x : R;
      }, 0);
      let f = 0;
      P(l).forEach((R) => {
        if (!e.getColumnVisible(R)) return;
        const T = this._columnWeightList[R] ?? 1;
        if (typeof T == "string" && T.endsWith("px")) {
          const x = _o(T);
          e.setColumnWidth(R, x);
        } else if (typeof T == "number") {
          const x = T / u;
          e.setColumnWidth(R, Math.floor(x * h));
        }
        f += e.getColumnWidth(R);
      });
      const g = d();
      g && e.setColumnWidth(g, h - f + this._fixedColumnWidth);
    }, a = () => {
      try {
        o.pauseEmit("columnChanged"), i();
      } catch (c) {
        console.error(c);
      } finally {
        o.resumeEmit("columnChanged");
      }
    };
    o.addHook("resize", a), o.addHook("columnChanged", a), this.addRollbackTask(() => {
      o.removeHook("resize", a), o.removeHook("columnChanged", a);
    }), a();
    function d() {
      for (let c = e.getColCount() - 1; c >= 0; c--)
        if (e.getColumnVisible(c))
          return c;
      return null;
    }
  }
  get pluginKey() {
    return "column-fill";
  }
}
function Vc(s) {
  return new Ca(s ?? { columnWeight: [] });
}
function Le(s, e) {
  const { offsetX: t, offsetY: n, scrollTop: o, scrollLeft: r } = e, i = n > s.fixedRowHeight ? n + o : n;
  return {
    adjustOffsetX: t > s.fixedColumnWidth ? t + r : t,
    adjustOffsetY: i
  };
}
class Ro extends Y {
  constructor() {
    super();
  }
  _mountTask({ grid: e, gridStore: t }) {
    const { gridStateContext: n } = t, { table: o } = t.elements, r = {
      latestDragOverCell: null
    }, i = () => {
      o.classList.remove("is-dragging"), a();
    }, a = () => {
      r.latestDragOverCell && (r.latestDragOverCell.isDragOver = !1, r.latestDragOverCell = null);
    }, d = (l) => {
      a(), r.latestDragOverCell = l, l.isDragOver = !0;
    }, c = () => o.classList.contains("is-dragging");
    o.addEventListener("mouseup", () => c() && i()), o.addEventListener("dragenter", () => {
      n.setMode({ mode: "dragging", contextParam: {} }), o.classList.add("is-dragging");
    }), o.addEventListener("dragover", (l) => {
      if (!l.dataTransfer || !o.classList.contains("is-dragging")) return;
      const { offsetX: h, offsetY: u } = l, { scrollTop: f, scrollLeft: g } = o, { adjustOffsetX: R, adjustOffsetY: T } = Le(e, { offsetY: u, offsetX: h, scrollLeft: g, scrollTop: f }), x = e.findCellOrNull(T, R);
      if (!x || l.dataTransfer.types.includes("ir-grid/disabled-cell-drop")) return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        x.dropDisabled !== !1 && // disabled
        (x.props.disabled === !0 || // readonly
        x.onCheckReadonly() === !0 || x.dropDisabled === !0)
      )
        return a(), null;
      e.onDragOverCell(x, l) === !0 && (x !== r.latestDragOverCell && d(x), l.preventDefault());
    }), o.addEventListener("dragleave", (l) => {
      l.target === o ? i() : a();
    }), o.addEventListener("drop", (l) => {
      try {
        r.latestDragOverCell && e.onDropOnCell(r.latestDragOverCell.row, r.latestDragOverCell.col, l);
      } finally {
        i();
      }
    });
  }
  get pluginKey() {
    return "cell-drop";
  }
}
function jc() {
  return new Ro();
}
const kn = 10;
class wa extends Y {
  _mountTask({ grid: e, gridStore: t }) {
    const { hook: n } = t, { table: o } = t.elements, r = {
      cell: null
    }, i = () => {
      r.cell = null, o.draggable = !1;
    }, a = (u) => {
      o.draggable = !0, r.cell = u;
    };
    n.addHook("contextMouseDown", l), n.addHook("contextMouseUp", d), n.addHook("contextDragStart", h), n.addHook("contextDragEnd", c), this.addRollbackTask(() => {
      n.removeHook("contextMouseDown", l), n.removeHook("contextMouseUp", d), n.removeHook("contextDragStart", h), n.removeHook("contextDragEnd", c);
    });
    function d(u) {
      i();
    }
    function c(u) {
      i();
    }
    function l(u) {
      if (u.button !== 0) return;
      const f = ae("td", "tr", u.target);
      if (!f) {
        i();
        return;
      }
      const g = se(f), R = e.cell(g.row, g.col);
      u.__IGNORE_CELL_DRAG_SELECT_CELL__ || e.selectCell(g.row, g.col), R.props.draggable === !0 && R.props.object ? a(R) : i();
    }
    function h(u) {
      if (!u.dataTransfer || !r.cell || !e.onDragStartCell(r.cell, u)) {
        u.preventDefault();
        return;
      }
      u.dataTransfer.setDragImage(r.cell.element, kn, kn);
    }
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function Uc() {
  return new wa();
}
const In = 10;
class Kc extends Y {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      enabledRow: o = !0,
      enabledColumn: r = !0
    } = this.args, { table: i } = n.elements, { mergeHandler: a, rowManager: d, gridStateContext: c } = n;
    let l = null, h = null;
    i.addEventListener("mousedown", u), i.addEventListener("dragstart", f), i.addEventListener("dragover", g), i.addEventListener("drop", R), i.addEventListener("dragleave", T), i.addEventListener("dragend", x), i.addEventListener("mouseup", x), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", u), i.removeEventListener("dragstart", f), i.removeEventListener("dragover", g), i.removeEventListener("drop", R), i.removeEventListener("dragleave", T), i.removeEventListener("dragend", x), i.removeEventListener("mouseup", x);
    });
    function u(b) {
      if (b.button !== 0 || t.classList.contains(le)) return;
      const C = ae("th", "tr", b.target);
      if (!C) return;
      const w = se(C), E = e.cell(w.row, w.col);
      if (E.cellType === "body-cell" || M(E)) return;
      Object.assign(b, { __IGNORE_HEADER_SELECT__: !0 }), H({
        direction: E.cellType,
        source: p(),
        cell: E
      });
      function p() {
        const { row: m, col: S } = E;
        return E.cellType === "row-header" ? [
          d.getStartOfRowId(m),
          d.getEndOfRowId(m)
        ] : [
          d.getStartOfColumnId(S),
          d.getEndOfColumnId(S)
        ];
      }
      function v(m) {
        return !o || m.row < e.getFreezedRowCount();
      }
      function y(m) {
        return !r || m.col < e.getFreezedColumnCount();
      }
      function M(m) {
        return m.cellType === "row-header" && v(m) || m.cellType === "col-header" && y(m);
      }
    }
    function f(b) {
      if (!b.dataTransfer || !l) {
        b.preventDefault();
        return;
      }
      c.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), b.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), b.dataTransfer.setDragImage(l.cell.element, In, In);
    }
    function g(b) {
      if (!l || !b.dataTransfer || !b.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging")) return;
      const { offsetX: C, offsetY: w } = b, { scrollTop: E, scrollLeft: p } = i, { adjustOffsetX: v, adjustOffsetY: y } = Le(e, { scrollLeft: p, scrollTop: E, offsetX: C, offsetY: w }), M = e.findCellOrNull(y, v);
      if (!M || !M.isHeaderCell || l.direction === "row-header" && m(M, l) || l.direction === "col-header" && S(M, l)) {
        L(), h = M;
        return;
      }
      M !== h && I(M, l.direction), b.preventDefault();
      function m(_, k) {
        return _.row === k.cell.row || _.row < e.getFreezedRowCount() || a.checkConflictingInRows(_.row, _.row);
      }
      function S(_, k) {
        return _.col === k.cell.col || _.col < e.getFreezedColumnCount() || a.checkConflictingInColumns(_.col, _.col);
      }
    }
    function R() {
      const b = l, C = h;
      !b || !C || (L(), b.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(b.source, [C.row, C.row]);
      }), e.forceLayoutTask(), e.selectRow(b.cell.row)), b.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(b.source, [C.col, C.col]);
      }), e.forceLayoutTask(), e.selectColumn(b.cell.col)));
    }
    function T() {
      L(), h = null;
    }
    function x() {
      i.classList.remove("is-dragging"), L(), l = null, i.draggable = !1, h = null, c.setIdle();
    }
    function H({ direction: b, source: C, cell: w }) {
      i.draggable = !0, l = {
        direction: b,
        source: C,
        cell: w
      };
    }
    function L() {
      if (!h || !l) return;
      const { direction: b } = l, C = b === "row-header" ? e.headerColumns : e.headerRows;
      for (let w = 0; w < C; w++)
        b === "row-header" ? e.cell(h.row, w).element.classList.remove("is-dragging") : e.cell(w, h.col).element.classList.remove("is-dragging");
    }
    function I(b, C) {
      L(), h = b;
      const w = C === "row-header" ? e.headerColumns : e.headerRows;
      for (let E = 0; E < w; E++)
        C === "row-header" ? e.cell(b.row, E).element.classList.add("is-dragging") : e.cell(E, b.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const xo = 8, _a = {
  normal: js,
  error: Vs
}, En = (s, e, t, n) => {
  s.isConnected === !1 || s.offsetParent === null || xr(s, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      Sr({
        mainAxis: xo,
        crossAxis: n ?? 0
      }),
      br(),
      yr({ padding: 5 })
    ]
  }).then(({ x: o, y: r, placement: i }) => {
    e.style.left = `${o}px`, e.style.top = `${r}px`, e.dataset.placement = i;
  });
}, Ra = (s) => s.cellInfo.tooltip ?? s.cellInfo.text ?? "", xa = (s) => s.cellInfo.memo ?? "";
class Sa extends Y {
  constructor(e) {
    super(), this.options = e, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = Bs;
  }
  _tooltipElement;
  _memoElement;
  context = null;
  hideMemo() {
    this._memoElement.remove();
  }
  hideTooltip() {
    this._tooltipElement.remove();
  }
  createContext(e) {
    const {
      memoInterval: t,
      tooltipInterval: n,
      hideTooltipWhenHasMemo: o
    } = this.options, {
      hasMemo: r,
      memoIntent: i = "normal",
      tooltipDisabled: a = !1
    } = e.cellInfo, d = this.options.getTooltipText?.(e) ?? Ra(e), c = this.options.getMemoText?.(e) ?? xa(e), l = () => {
      this._tooltipElement.textContent = d, Me("popover").appendChild(this._tooltipElement), En(e.element, this._tooltipElement, "bottom");
    }, h = () => {
      this._memoElement.textContent = c ?? "", this._memoElement.className = `${Gs} ${_a[i]}`, Me("popover").appendChild(this._memoElement), En(e.element, this._memoElement, "right-start", xo);
    }, u = !(r && o) && a === !1 && d ? window.setTimeout(() => l(), n) : -1, f = r && c ? window.setTimeout(() => h(), t) : -1;
    return {
      targetCell: e,
      tooltipTimeoutHandler: u,
      memoTimeoutHandler: f,
      cleanup: () => {
        clearTimeout(u), clearTimeout(f), this.hideTooltip(), this.hideMemo(), this.context = null;
      }
    };
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: o } = t, r = () => this.context?.cleanup(), i = (a) => {
      if (!Re(a.target)) return;
      const d = ae("td,th", "tr", a.target);
      if (!d) {
        r();
        return;
      }
      const c = se(d), l = e.cell(c.row, c.col);
      this.context?.targetCell !== l && (r(), this.context = this.createContext(l));
    };
    o.gridModeState.addSubscription((a, { mode: d }) => {
      n.removeEventListener("mousemove", i), r(), (d === "idle" || d === "edit-cell") && e.addGlobalEventListener(n, "mousemove", i);
    }), e.addGlobalEventListener(n, "mouseleave", r), e.hook.addSyncHook("contextScroll", r), this.addRollbackTask(() => {
      r(), n.removeEventListener("mouseleave", r), e.hook.removeSyncHook("contextScroll", r);
    });
  }
  get pluginKey() {
    return "popover";
  }
}
const Mn = 10;
class qc extends Y {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, gridStateContext: r } = n, { table: i } = n.elements, a = document.createElement("div");
    a.className = Us;
    let d = null, c = -1;
    i.addEventListener("mousedown", l), i.addEventListener("dragstart", h), i.addEventListener("dragover", u), i.addEventListener("drop", f), i.addEventListener("dragleave", g), i.addEventListener("dragend", R), i.addEventListener("mouseup", R), this.addRollbackTask(() => {
      i.removeEventListener("mousedown", l), i.removeEventListener("dragstart", h), i.removeEventListener("dragover", u), i.removeEventListener("drop", f), i.removeEventListener("dragleave", g), i.removeEventListener("dragend", R), i.removeEventListener("mouseup", R);
    });
    function l(L) {
      if (L.button !== 0 || t.classList.contains(le)) return;
      const I = ae("th", "tr", L.target);
      if (!I) return;
      const b = se(I), C = e.cell(b.row, b.col);
      if (w(C)) return;
      Object.assign(L, { __IGNORE_HEADER_SELECT__: !0 }), T({
        source: [
          o.getStartOfRowId(C.row),
          o.getEndOfRowId(C.row)
        ],
        cell: C
      });
      function w(E) {
        return E.cellType !== "row-header" || E.row < e.getFreezedRowCount() || E.row < e.headerRows;
      }
    }
    function h(L) {
      const { offsetY: I, offsetX: b } = L, { scrollTop: C, scrollLeft: w } = i, { adjustOffsetX: E, adjustOffsetY: p } = Le(e, { offsetX: b, offsetY: I, scrollLeft: w, scrollTop: C });
      if (e.findCellOrNull(p, E)?.cellType === "row-header") {
        if (!L.dataTransfer || !d) {
          L.preventDefault();
          return;
        }
        r.setMode({ mode: "dragging", contextParam: {} }), i.classList.add("is-dragging"), L.dataTransfer.effectAllowed = "move", L.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), L.dataTransfer.setData("ir-grid/move-rows-dragging", ""), L.dataTransfer.setDragImage(d.cell.element, Mn, Mn);
      }
    }
    function u(L) {
      const { dataTransfer: I, offsetY: b, offsetX: C } = L;
      if (!d || !I || !I.types.includes("ir-grid/move-rows-dragging")) return;
      const { scrollTop: w, scrollLeft: E } = i, { adjustOffsetX: p, adjustOffsetY: v } = Le(e, { offsetX: C, offsetY: b, scrollLeft: E, scrollTop: w }), y = e.findCellOrNull(v, p);
      if (!y) return;
      const M = m(y.row);
      if (y.cellType !== "row-header" || S(M, d)) {
        x(), c = -1;
        return;
      }
      M !== c && H(M, y.col), L.preventDefault();
      function m(_) {
        const k = e.getRow(_), z = v - k.top < k.height / 2;
        return k.rowId + (z ? 0 : 1);
      }
      function S(_, k) {
        const [z, A] = k.source;
        return _ >= z && _ <= A || _ < e.headerRows;
      }
    }
    function f() {
      const L = d, I = c;
      !L || I < 0 || (x(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(L.source, I);
      }), e.forceLayoutTask(), e.selectRow(L.cell.row));
    }
    function g() {
      x(), c = -1;
    }
    function R() {
      i.classList.remove("is-dragging"), x(), d = null, i.draggable = !1, c = -1, r.setIdle();
    }
    function T({ source: L, cell: I }) {
      i.draggable = !0, d = {
        source: L,
        cell: I
      };
    }
    function x() {
      c < 0 || !d || a.remove();
    }
    function H(L, I) {
      x(), c = L;
      const b = Math.min(c, o.length - 1), C = e.getRow(b), w = C.getCell(I).element.getBoundingClientRect(), E = {
        top: w.top,
        height: 16
      }, p = E.height / 2;
      L === o.length && (E.top += C.height, E.height = p + 1), a.style.top = `${E.top - p}px`, a.style.left = `${w.left}px`, a.style.width = `${e.headerWidth}px`, a.style.height = `${E.height}px`, Me("popover").appendChild(a);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const Tn = 10;
class Xc extends Y {
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, columnManager: r, gridStateContext: i } = n, { table: a } = n.elements, d = document.createElement("div");
    d.className = Ks;
    let c = null, l = -1;
    a.addEventListener("mousedown", h), a.addEventListener("dragstart", u), a.addEventListener("dragover", f), a.addEventListener("drop", g), a.addEventListener("dragleave", R), a.addEventListener("dragend", T), a.addEventListener("mouseup", T), this.addRollbackTask(() => {
      a.removeEventListener("mousedown", h), a.removeEventListener("dragstart", u), a.removeEventListener("dragover", f), a.removeEventListener("drop", g), a.removeEventListener("dragleave", R), a.removeEventListener("dragend", T), a.removeEventListener("mouseup", T);
    });
    function h(I) {
      if (I.button !== 0 || t.classList.contains(le)) return;
      const b = ae("th", "tr", I.target);
      if (!b) return;
      const C = se(b), w = e.cell(C.row, C.col);
      if (E(w)) return;
      Object.assign(I, { __IGNORE_HEADER_SELECT__: !0 }), x({
        source: [
          o.getStartOfColumnId(w.col),
          o.getEndOfColumnId(w.col)
        ],
        cell: w
      });
      function E(p) {
        return p.cellType !== "col-header" || p.col < e.getFreezedColumnCount() || p.col < e.headerColumns;
      }
    }
    function u(I) {
      const { offsetY: b, offsetX: C } = I, { scrollTop: w, scrollLeft: E } = a, { adjustOffsetX: p, adjustOffsetY: v } = Le(e, { offsetX: C, offsetY: b, scrollLeft: E, scrollTop: w });
      if (e.findCellOrNull(v, p)?.cellType === "col-header") {
        if (!I.dataTransfer || !c) {
          I.preventDefault();
          return;
        }
        i.setMode({ mode: "dragging", contextParam: {} }), a.classList.add("is-dragging"), I.dataTransfer.effectAllowed = "move", I.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), I.dataTransfer.setData("ir-grid/move-columns-dragging", ""), I.dataTransfer.setDragImage(c.cell.element, Tn, Tn);
      }
    }
    function f(I) {
      const { dataTransfer: b, offsetY: C, offsetX: w } = I;
      if (!c || !b || !b.types.includes("ir-grid/move-columns-dragging")) return;
      const { scrollTop: E, scrollLeft: p } = a, { adjustOffsetX: v, adjustOffsetY: y } = Le(e, { offsetX: w, offsetY: C, scrollLeft: p, scrollTop: E }), M = e.findCellOrNull(y, v);
      if (!M) return;
      const m = S(M.col);
      if (M.cellType !== "col-header" || _(m, c)) {
        H(), l = -1;
        return;
      }
      m !== l && L(M.row, m), I.preventDefault();
      function S(k) {
        const z = e.getColumn(k), A = v - z.left < z.width / 2;
        return z.columnId + (A ? 0 : 1);
      }
      function _(k, z) {
        const [A, D] = z.source;
        return k >= A && k <= D || k < e.headerColumns;
      }
    }
    function g() {
      const I = c, b = l;
      !I || b < 0 || (H(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(I.source, b);
      }), e.forceLayoutTask(), e.selectColumn(I.cell.col));
    }
    function R() {
      H(), l = -1;
    }
    function T() {
      a.classList.remove("is-dragging"), H(), c = null, a.draggable = !1, l = -1, i.setIdle();
    }
    function x({ source: I, cell: b }) {
      a.draggable = !0, c = {
        source: I,
        cell: b
      };
    }
    function H() {
      l < 0 || !c || d.remove();
    }
    function L(I, b) {
      H(), l = b;
      const C = Math.min(l, r.length - 1), w = e.getColumn(C), E = e.cell(I, C);
      if (!E.isConnected) return;
      const p = E.element.getBoundingClientRect(), v = {
        left: p.left,
        width: 12
      }, y = v.width / 2;
      b === r.length && (v.left += w.width, v.width = y + 1), d.style.top = `${p.top}px`, d.style.left = `${v.left - y}px`, d.style.height = `${e.headerHeight}px`, d.style.width = `${v.width}px`, Me("popover").appendChild(d);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
const ba = [
  { type: "col", value: "right" },
  { type: "col", value: "left" },
  { type: "row", value: "up" },
  { type: "row", value: "down" },
  { type: "divider", value: "" },
  { type: "col", value: "double-right" },
  { type: "col", value: "double-left" },
  { type: "row", value: "double-top" },
  { type: "row", value: "double-bottom" }
], ya = Bt(W.minWidth), va = Bt(W.minHeight);
function ka() {
  const s = Se("div", Ys), e = [];
  for (const n of ba)
    if (n.type === "divider") {
      const o = Se("div", Zs);
      s.append(o);
    } else {
      const o = Se("button", Js), r = Ot(`ir-icon--chevron-${n.value}`);
      o.dataset.type = n.type, o.append(r), o.onclick = () => t.onButtonClick(n.value), o.setAttribute("data-ir-tooltip", ""), o.setAttribute("data-ir-tooltip-text", X.t("gridOverflowPanel." + n.value)), s.append(o), e.push(o);
    }
  const t = {
    buttonGroup: s,
    visibleButtonGroup(n, o) {
      s.style.display = n || o ? "" : "none";
      for (const r of e) {
        const a = r.dataset.type === "row" ? n : o;
        r.style.display = a ? "" : "none";
      }
    },
    onButtonClick(n) {
    }
  };
  return t;
}
class Yc extends Y {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: o, columnManager: r, tableElement: i } = n, a = Se("div", qs), d = Se("div", Xs), c = ka(), l = vr({
      containerElement: c.buttonGroup,
      placement: "right",
      offset: 8
    });
    this.args.className && a.classList.add(this.args.className), Object.assign(a.style, this.args.style);
    const h = {
      up() {
        const x = f(d.scrollTop);
        if (!x) return;
        const H = x.rowId - 1, L = H < 0 ? 0 : e.getRow(H).top;
        d.scrollTop = L;
      },
      down() {
        const x = f(d.scrollTop);
        x && (d.scrollTop = x.bottom);
      },
      left() {
        const x = g(d.scrollLeft);
        if (!x) return;
        const H = x.columnId - 1, L = H < 0 ? 0 : e.getColumn(H).left;
        d.scrollLeft = L;
      },
      right() {
        const x = g(d.scrollLeft);
        x && (d.scrollLeft = x.right);
      },
      "double-top"() {
        d.scrollTo({ top: 0 }), e.scrollOnRow(0);
      },
      "double-bottom"() {
        d.scrollTo({ top: d.scrollHeight }), e.scrollOnRow(e.getRowCount() - 1);
      },
      "double-left"() {
        d.scrollTo({ left: 0 }), e.scrollOnCol(0);
      },
      "double-right"() {
        d.scrollTo({ left: d.scrollWidth }), e.scrollOnCol(e.getColCount() - 1);
      }
    };
    c.onButtonClick = (x) => h[x](), t.insertAdjacentElement("beforebegin", a), d.appendChild(t), a.append(d), a.append(c.buttonGroup), e.afterRender(() => {
      R(o.freezedRowsHeight, o.freezedRows), T(r.fixedColumnsWidth, r.freezedColumns);
    }), n.hook.addHook("resize", u), n.hook.addSyncHook("changedFreezedRowHeight", R), n.hook.addSyncHook("changedFreezedColumnWidth", T), this.addRollbackTask(() => {
      l.destroy(), n.hook.removeHook("resize", u), n.hook.removeSyncHook("changedFreezedRowHeight", R), n.hook.removeSyncHook("changedFreezedColumnWidth", T);
    }), this.addRollbackTask(() => {
      const x = a.nextElementSibling;
      x ? x.insertAdjacentElement("beforebegin", t) : a.parentElement?.appendChild(t), a.remove();
    });
    function u() {
      const x = parseInt(t.style.getPropertyValue(ya)), H = parseInt(t.style.getPropertyValue(va));
      c.visibleButtonGroup(
        H >= d.clientHeight,
        x >= d.clientWidth
      );
    }
    function f(x) {
      let H = 0, L = o.visibleRowList.length - 1;
      for (; H <= L; ) {
        const I = H + Math.floor((L - H) / 2), b = o.visibleRowList[I];
        if (x >= b.top && x < b.bottom)
          return b;
        x < b.top ? L = I - 1 : H = I + 1;
      }
      return null;
    }
    function g(x) {
      let H = 0, L = r.visibleColumnList.length - 1;
      for (; H <= L; ) {
        const I = H + Math.floor((L - H) / 2), b = r.visibleColumnList[I];
        if (x >= b.left && x < b.right)
          return b;
        x < b.left ? L = I - 1 : H = I + 1;
      }
      return null;
    }
    function R(x, H) {
      const L = H, I = x + (L < e.getRowCount() ? o.getRowHeight(L) : 0) + (b() ? Yt : 0);
      ne(t, {
        [W.minHeight]: `${I}px`
      }), u();
      function b() {
        return i.className.includes("has-both-scroll") || i.className.includes("has-horizontal-scroll");
      }
    }
    function T(x, H) {
      const L = H, I = x + (L < e.getColCount() ? e.getColumnWidth(L) : 0) + (b() ? Yt : 0);
      ne(t, {
        [W.minWidth]: `${I}px`
      }), u();
      function b() {
        return i.className.includes("has-both-scroll") || i.className.includes("has-vertical-scroll");
      }
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
const Ln = 10;
class Zc extends Y {
  /**
  * 플러그인 생성자
  * @param _args - 플러그인 설정 값
  */
  constructor(e = {}) {
    super(), this._args = e;
  }
  _dragStartCell = null;
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const {
      freezeLastColumn: o,
      multipleSelect: r = !1,
      selectOnRightClick: i = !1,
      rowDraggable: a = !1,
      onRowClick: d
    } = this._args, { hook: c, columnManager: l, elements: { table: h } } = n, { visibleColumnList: u } = l, f = this.setPluginAPI(new Ia(e, r, a)), g = () => this._dragStartCell, R = (S) => {
      this._dragStartCell = S;
    }, T = () => this._dragStartCell = null, x = /* @__PURE__ */ new Set([0]);
    if (i && x.add(2), t.classList.add(Zt), o) {
      t.classList.add(Jt);
      const S = n.getThemeValue("grid.forceRenderRightCol");
      n.setGridConfig({
        "grid.forceRenderRightCol": 1
      }), c.addSyncHook("cellLayout", L), c.addHook("postRenderCell", I), this.addRollbackTask(() => {
        n.setGridConfig({ "grid.forceRenderRightCol": S }), c.removeSyncHook("cellLayout", L), c.removeHook("postRenderCell", I);
      });
    }
    const H = (S) => e.onNativeCopy(S);
    c.addBeginHook("contextMouseDown", C), c.addHook("contextMouseDown", w), c.addHook("contextMouseUp", E), c.addHook("renderRowElement", y), c.addHook("contextDragStart", p), c.addHook("contextDragEnd", v), e.addGlobalEventListener(t, "copy", H), this.addRollbackTask(() => {
      T(), f.clearAllSelections(), t.classList.remove(Zt, Jt), c.removeBeginHook("contextMouseDown", C), c.removeHook("contextMouseDown", w), c.removeHook("contextMouseUp", E), c.removeHook("renderRowElement", y), c.removeHook("contextDragStart", p), c.removeHook("contextDragEnd", v), t.removeEventListener("copy", H);
    });
    function L(S, _, k) {
      b(_) && (k.left = ho);
    }
    function I(S) {
      if (!b(S.col)) return;
      const _ = S.element;
      _.style.marginLeft = "auto", _.style.position = "sticky", _.style.right = "0", _.style.zIndex = `calc(${W.stickyCellZId} + ${W.zLevel1})`;
    }
    function b(S) {
      return S === u.length - 1;
    }
    function C(S) {
      S.__IGNORE_CELL_DRAG_SELECT_CELL__ = !0;
    }
    function w(S) {
      if (!x.has(S.button) || S.target instanceof HTMLButtonElement) return;
      const _ = S.target.closest("td");
      if (!_) return;
      const k = se(_), z = e.cell(k.row, k.col);
      z.cellType === "body-cell" && (f.rowDraggable && !S.ctrlKey && !S.shiftKey && f.isRowSelected(z.row) && f.onCheckDraggable(z) ? M(z) : f.runMouseDownTask(z, S), d?.(e, z.row, S));
    }
    function E() {
      m();
    }
    function p(S) {
      if (!f.rowDraggable) return;
      const _ = g();
      if (!S.dataTransfer || !_ || !f.onDragStartRowIds(S))
        return S.preventDefault();
      S.dataTransfer.setDragImage(_.element, Ln, Ln);
    }
    function v() {
      m();
    }
    function y(S, _) {
      _.classList.toggle(Qs, f.isRowSelected(S.rowId, !0));
    }
    function M(S) {
      R(S), h.draggable = !0;
    }
    function m() {
      f.rowDraggable && (T(), h.draggable = !1);
    }
  }
  get pluginKey() {
    return "grid-table";
  }
}
class Ia {
  constructor(e, t, n) {
    this._grid = e, this._multipleSelect = t, this._rowDraggable = n, this.setRowDragEnabled(n), this.setMultipleSelect(t);
  }
  _selectedRowIdSet = /* @__PURE__ */ new Set();
  _mouseDownTasks = [];
  get multipleSelect() {
    return this._multipleSelect;
  }
  get rowDraggable() {
    return this._rowDraggable;
  }
  addSelectedRow(e) {
    this.addSelectedRows([e]);
  }
  addSelectedRows(e) {
    e.forEach((t) => {
      this._selectedRowIdSet.add(t), this._grid.getRow(t).render();
    });
  }
  removeSelectedRow(e) {
    this.removeSelectedRows([e]);
  }
  removeSelectedRows(e) {
    e.forEach((t) => {
      this._selectedRowIdSet.delete(t), this._grid.getRow(t).render();
    });
  }
  clearSelectedRows() {
    this.removeSelectedRows([...this._selectedRowIdSet]);
  }
  clearAllSelections() {
    this._grid.releaseCells(), this.clearSelectedRows();
  }
  isRowSelected(e, t = !1) {
    if (this._selectedRowIdSet.has(e)) return !0;
    if (t) return !1;
    const n = this._grid.getSelection();
    return n !== null && e >= n.top && e <= n.bottom;
  }
  getSelectedRows() {
    const e = this._grid.getSelection();
    if (!e) return [...this._selectedRowIdSet];
    const t = new Set(this._selectedRowIdSet);
    for (let n = e.top; n <= e.bottom; n++)
      t.add(n);
    return [...t];
  }
  setRowDragEnabled(e) {
    this._rowDraggable = e;
  }
  setMultipleSelect(e) {
    this._multipleSelect = e, e || this.selectRowWithActiveCell(), this._mouseDownTasks = [], e && this._mouseDownTasks.push(
      this._mousedownWithCtrlTask,
      this._mousedownWithShiftTask
    ), this._mouseDownTasks.push(this._mousedownSingleCellTask);
  }
  runMouseDownTask(e, t) {
    for (const n of this._mouseDownTasks)
      if (n.call(this, e, t)) break;
  }
  onDragStartRowIds(e) {
    if (!e.dataTransfer) return !1;
    const t = [];
    for (const n of this.getSelectedRows().sort((o, r) => o - r)) {
      const o = [];
      for (const r of this._grid.getRow(n).getCellGenerator())
        r.props.object && o.push(r.props.object);
      o.length > 0 && t.push(o);
    }
    return e.dataTransfer.setData("application/json", JSON.stringify(t)), !0;
  }
  onCheckDraggable(e) {
    for (const t of this.getSelectedRows()) {
      const n = this._grid.cell(t, 0);
      if (n.props.draggable && n.props.object !== void 0) return !0;
    }
    return !1;
  }
  _mousedownWithCtrlTask(e, t) {
    if (!t.ctrlKey) return;
    const n = this._grid.getSelection();
    return n && (this.addSelectedRows(P(n.top, n.bottom + 1).asList()), this._grid.releaseCells()), this.isRowSelected(e.row) ? this.removeSelectedRow(e.row) : this._grid.selectRow(e.row, e), !0;
  }
  _mousedownWithShiftTask(e, t) {
    if (!(!t.shiftKey || !this._grid.activeCell))
      return this.clearSelectedRows(), this._grid.selectRows(
        Math.min(this._grid.activeCell.row, e.row),
        Math.max(this._grid.activeCell.row, e.row),
        this._grid.activeCell
      ), !0;
  }
  _mousedownSingleCellTask(e, t) {
    this.isRowSelected(e.row) && t.button === 2 || (this.clearAllSelections(), this._grid.selectRow(e.row, e));
  }
  /** activeCell이 있는 Row만 선택하는 함수 (active가 없고, selectedCls만 있는 경우 그 중 첫번째 행 선택) */
  selectRowWithActiveCell() {
    if (this.getSelectedRows().length !== 0) {
      if (this._grid.activeCell)
        this._grid.selectRow(this._grid.activeCell.row, this._grid.activeCell);
      else {
        const e = [...this._selectedRowIdSet][0];
        e && this._grid.selectRow(e);
      }
      this.clearSelectedRows();
    }
  }
}
function Ea(s) {
  const { filterOption: e } = s;
  if (!e || s.metaInfo.enabled === !1) return Ma;
  const { metaInfo: t } = s, { operand: n, operator: o } = e, r = () => {
    const c = n.map((h) => parseFloat(h)), l = new Set(c);
    switch (o) {
      case "equals":
        return we((h) => l.has(h));
      case "not-equals":
        return we((h) => !l.has(h));
      case "less-than":
        return we((h) => c.some((u) => h < u));
      case "less-than-or-equal":
        return we((h) => c.some((u) => h <= u));
      case "greater-than":
        return we((h) => c.some((u) => h > u));
      case "greater-than-or-equal":
        return we((h) => c.some((u) => h >= u));
      case "in-range":
        return we((h) => c[0] <= h && h <= c[1]);
      case "blank":
        return Ct;
      default:
        return $e;
    }
  }, i = () => {
    const { format: c } = t;
    if (!c) throw new Error("format is required for date type column");
    const l = n.map((u) => La(u, c));
    switch (o) {
      case "equals":
        return h((u) => l.some((f) => u.isSame(f)));
      case "not-equals":
        return h((u) => l.every((f) => !u.isSame(f)));
      case "greater-than":
        return h((u) => l.some((f) => u.isAfter(f)));
      case "greater-than-or-equal":
        return h((u) => l.some((f) => u.isSameOrAfter(f)));
      case "less-than":
        return h((u) => l.some((f) => u.isBefore(f)));
      case "less-than-or-equal":
        return h((u) => l.some((f) => u.isSameOrBefore(f)));
      case "in-range":
        return h((u) => u.isBetween(l[0], l[1], null, "[]"));
      case "blank":
        return Ct;
      default:
        return $e;
    }
    function h(u) {
      return (f) => {
        const g = ce(f, c);
        return g.isValid() ? u(g) : !1;
      };
    }
  }, a = () => {
    const c = new Set(n);
    switch (o) {
      case "equals":
        return (l) => c.has(l);
      case "not-equals":
        return (l) => !c.has(l);
      case "contains":
        return (l) => n.some((h) => l.includes(h));
      case "not-contains":
        return (l) => !n.some((h) => l.includes(h));
      case "starts-with":
        return (l) => n.some((h) => l.startsWith(h));
      case "ends-with":
        return (l) => n.some((h) => l.endsWith(h));
      case "blank":
        return Ct;
      default:
        return $e;
    }
  }, d = () => {
    const c = new Set(n.map((l) => l === "true"));
    switch (o) {
      case "equals":
        return Hn((l) => c.has(l));
      case "not-equals":
        return Hn((l) => !c.has(l));
      default:
        return $e;
    }
  };
  switch (t.textType) {
    case "number":
      return r();
    case "date":
      return i();
    case "string":
      return a();
    case "checked":
      return d();
    default:
      return $e;
  }
}
function Ct(s) {
  return s === "";
}
function $e() {
  return !1;
}
function Ma() {
  return !0;
}
const Ta = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function we(s) {
  return (e) => Ta.test(e) ? s(parseFloat(e)) : !1;
}
function Hn(s) {
  return (e) => s(e === "true");
}
function La(s, e) {
  const t = ce(s, e);
  return t.isValid() ? t : ce(s.replace(/[-/]/g, ""), e.replace(/[-/]/g, ""));
}
const Ha = (s) => {
  let e = null, t = !0, n = Object.freeze(s.getSnapshotRows());
  return {
    saveSnapshot: o,
    get enabledColumnClick() {
      return t;
    },
    set enabledColumnClick(r) {
      t = r;
    },
    clearSortOrder() {
      e && (e.cellInfo = { sortOrder: void 0 }), e = null;
    },
    getSnapshotRows() {
      return n;
    },
    /**
     *
     * @deprecated
     */
    clearNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    /**
     *
     * @deprecated
     */
    removeNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    /**
     *
     * @deprecated
     */
    setNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    compareTo(r, i) {
      return Nt(r.text, i.text);
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${s.uuid}`), s.onColumnClick = (r, i) => {
        t && this.toggleSortColumn(r);
      };
    },
    sortColumn(r, i) {
      s.sort((a, d) => this.compareTo(a.getCell(r), d.getCell(r)), i);
    },
    /**
     *
     * @version 2.20.0
     */
    sortColumns(...r) {
      s.sort((i, a) => {
        for (const [d, c] of r) {
          const l = this.compareTo(i.getCell(d), a.getCell(d));
          if (l !== 0)
            return c === "ASC" ? l : -l;
        }
        return 0;
      }, "ASC");
    },
    toggleSortColumn(r) {
      if (s.className.indexOf(le) >= 0)
        return;
      if (r.cellType !== "col-header")
        throw new Error("Can only execute in col-header");
      e || o();
      const i = r.cellInfo.sortOrder === "ASC" ? "DESC" : "ASC";
      e !== r && this.clearSortOrder(), e = r, r.cellInfo = { sortOrder: i }, this.sortColumn(r.col, i);
    }
  };
  function o() {
    n = Object.freeze(s.getSnapshotRows());
  }
};
var za = Object.defineProperty, Oa = Object.getOwnPropertyDescriptor, qe = (s, e, t, n) => {
  for (var o = Oa(e, t), r = s.length - 1, i; r >= 0; r--)
    (i = s[r]) && (o = i(e, t, o) || o);
  return o && za(e, t, o), o;
};
const wt = Object.freeze({
  textType: "string",
  enabled: !0
});
class De {
  constructor(e, t) {
    this._grid = e, this._columnMetaInfo = t, this._columnSortManager = Ha(e), this._columnSortManager.overrideColumnClickEvent(), this._defaultDateFormat = X.t("datePicker.dateFormat"), Object.entries(t).forEach(([n, o]) => this._filterMap.set(parseInt(n, 10), { metaInfo: o }));
  }
  _columnSortManager;
  _filterMap = /* @__PURE__ */ new Map();
  _defaultDateFormat;
  clearFilters() {
    for (const e of this._filterMap.values())
      delete e.filterOption;
  }
  clearSortOrder() {
    this.columnSortManager.clearSortOrder();
  }
  setCheckAll(e, t) {
    const n = this._grid, o = `${t}`, r = n.getSnapshotRows().slice(n.headerRows).filter((i) => !i.filtered && `${i.getCell(e).text === "true"}` !== o);
    r.length !== 0 && n.commandManager.doRecording(`check all to ${t}`, () => {
      for (const i of r)
        n.setCell(i.rowId, e, { text: o });
    });
  }
  get columnSortManager() {
    return this._columnSortManager;
  }
  get dropdownId() {
    return `rowFilterDropdown__${this._grid.uuid}`;
  }
  getColumnMetaInfo(e) {
    return this._filterMap.get(e)?.metaInfo ?? wt;
  }
  setColumnMetaInfo(e, t) {
    this._filterMap.set(e, {
      metaInfo: t,
      filterOption: this._filterMap.get(e)?.filterOption
    });
  }
  getFilterOptionByCol(e) {
    return this._filterMap.get(e)?.filterOption ?? null;
  }
  _getBodyRowText(e, t) {
    let n = this._grid.getSnapshotRows().slice(this._grid.headerRows);
    return t && (n = n.filter(t)), Ar(n.map((o) => o.getCell(e).text));
  }
  getTextListForCol(e) {
    return this._getBodyRowText(e);
  }
  getFilteredTextListForCol(e) {
    return this._getBodyRowText(e, (t) => !t.filtered);
  }
  get isFiltered() {
    return [...this._filterMap.values()].filter((e) => e.filterOption).length > 0;
  }
  removeColFilter(e) {
    const t = this._filterMap.get(e);
    t && delete t.filterOption;
  }
  setColFilter(e) {
    const { column: t, ...n } = e, o = this._filterMap.get(t);
    o ? o.filterOption = n : this._filterMap.set(t, {
      metaInfo: wt,
      filterOption: n
    });
  }
  setSortOrder(e, t, n) {
    const o = this._grid.cell(e, t);
    o.props = { sortOrder: n === "ASC" ? "DESC" : "ASC" }, this.columnSortManager.toggleSortColumn(o);
  }
  toggleSortOrder(e, t) {
    this._columnSortManager.toggleSortColumn(this._grid.cell(e, t));
  }
  _getMatcherList() {
    return Array.from(this._filterMap.keys(), (e) => ({
      col: e,
      matcher: this._getMatcher(e)
    }));
  }
  adjustRemoveColumns(e, t) {
    const n = Math.max(1, t - e + 1), o = /* @__PURE__ */ new Map();
    for (const [r, i] of this._filterMap.entries())
      r < e ? o.set(r, i) : r > e + n - 1 && o.set(r - n, i);
    this._filterMap = o;
  }
  adjustInsertColumns(e, t) {
    const n = Math.max(1, t - e + 1), o = /* @__PURE__ */ new Map();
    for (const [r, i] of this._filterMap.entries())
      r < e ? o.set(r, i) : o.set(r + n, i);
    this._filterMap = o;
  }
  _getMatcher(e) {
    const t = this._filterMap.get(e) ?? { metaInfo: wt };
    return t.metaInfo.textType === "date" && !t.metaInfo.format && (t.metaInfo.format = this._defaultDateFormat), Ea(t);
  }
  _applyFilter() {
    const e = this._getMatcherList();
    this._grid.setRowFilter(
      (t) => e.every(({ col: n, matcher: o }) => o(t.getCell(n).text))
    );
  }
}
qe([
  Xe()
], De.prototype, "clearFilters");
qe([
  Xe()
], De.prototype, "removeColFilter");
qe([
  Xe()
], De.prototype, "setColFilter");
qe([
  Xe()
], De.prototype, "adjustRemoveColumns");
qe([
  Xe()
], De.prototype, "adjustInsertColumns");
function Xe() {
  return function(s, e, t) {
    const n = t.value;
    return t.value = function(...o) {
      const r = n.apply(this, o);
      return this._applyFilter(), r;
    }, t;
  };
}
class Jc extends Y {
  /**
   * 플러그인 생성자
   * @param _args - 플러그인 설정 값
   */
  constructor(e) {
    super(), this._args = e;
  }
  _mountTask(e) {
    const { grid: t, gridStore: n } = e, o = this.setPluginAPI(new De(t, this._args?.columnMetaInfo ?? {})), r = (a, d, c) => {
      c === "insertColumns" && o.adjustInsertColumns(a, d), c === "removeColumns" && o.adjustRemoveColumns(a, d);
    }, i = (a) => {
      document.getElementById(o.dropdownId)?.isConnected && (a.__IGNORE_GRID_FOCUS__ = !0);
    };
    n.hook.addHook("columnChanged", r), n.hook.addHook("contextMouseUp", i), this.addRollbackTask(() => {
      o.clearFilters(), o.clearSortOrder(), n.hook.removeHook("columnChanged", r), n.hook.removeHook("contextMouseUp", i);
    });
  }
  get pluginKey() {
    return "row-filter";
  }
}
class Qc extends Y {
  constructor(e = {}) {
    super(), this._args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { onCopyFail: o } = this._args, { hook: r } = n, i = this.setPluginAPI(new Aa(e));
    let a = !1;
    r.addSyncHook("selectChanged", d), r.addBeginHook("contextMouseDown", c), r.addSyncBeginHook("copy", h), r.addSyncBeginHook("cut", u), r.addHook("postRenderCell", f), this.addRollbackTask(() => {
      i.clearSelectedCells(), r.removeSyncHook("selectChanged", d), r.removeBeginHook("contextMouseDown", c), r.removeSyncBeginHook("copy", h), r.removeSyncBeginHook("cut", u), r.removeHook("postRenderCell", f);
    });
    function d() {
      !a && i.hasMultipleSelection() && i.clearSelectedCells();
    }
    function c(R) {
      if (R.button !== 0 || t.classList.contains(le) || !R.target.closest("td,th")) return;
      if (!R.ctrlKey || R.shiftKey) return i.clearSelectedCells();
      const x = e.getSelection();
      x && i.toggleCells(g(x)), a = !0, document.addEventListener("mouseup", l);
    }
    function l() {
      const R = e.getSelection();
      R && i.hasSelectedCellInRange(R) && (i.toggleCells(g(R)), e.releaseCells()), a = !1, document.removeEventListener("mouseup", l);
    }
    function h(R) {
      return i.hasMultipleSelection() ? (e.onMultipleCellsNativeCopy(R, i.getSelectedCells()) === !1 && o?.(), !1) : !0;
    }
    function u(R) {
      if (!i.hasMultipleSelection()) return !0;
      const T = i.getSelectedCells();
      return e.onMultipleCellsNativeCopy(R, T) === !1 ? (o?.(), !1) : (e.commandManager.doRecording("Multiple Cut", () => {
        T.forEach((x) => e.setText(x.row, x.col, ""));
      }), !1);
    }
    function f(R) {
      R.element.classList.toggle(er, i.isCellSelected(R));
    }
    function g(R) {
      const T = [], { top: x, bottom: H, left: L, right: I } = R;
      for (let b = x; b <= H; b++)
        for (let C = L; C <= I; C++)
          T.push(e.cell(b, C));
      return T;
    }
  }
  get pluginKey() {
    return "grid-multi-select-cell";
  }
}
class Aa {
  constructor(e) {
    this._grid = e, this._debouncedRender = Mr(() => this._render());
  }
  _selectedSet = /* @__PURE__ */ new Set();
  _pendingRenderCellSet = /* @__PURE__ */ new Set();
  _debouncedRender;
  hasMultipleSelection() {
    return this._selectedSet.size > 0;
  }
  isCellSelected(e) {
    return this._selectedSet.has(e);
  }
  hasSelectedCellInRange(e) {
    const { top: t, bottom: n, left: o, right: r } = e;
    for (let i = t; i <= n; i++)
      for (let a = o; a <= r; a++)
        if (this._selectedSet.has(this._grid.cell(i, a))) return !0;
    return !1;
  }
  getSelectedCells() {
    const e = new Set(this._selectedSet), t = this._grid.getSelection();
    if (t) {
      const { top: n, bottom: o, left: r, right: i } = t;
      for (let a = n; a <= o; a++)
        for (let d = r; d <= i; d++)
          e.add(this._grid.cell(a, d));
    }
    return [...e];
  }
  toggleCells(e) {
    e.forEach((t) => {
      this._selectedSet.has(t) ? this._selectedSet.delete(t) : this._selectedSet.add(t), this._pendingRenderCellSet.add(t);
    }), this._debouncedRender();
  }
  removeCells(e) {
    for (const t of e)
      this._selectedSet.delete(t), this._pendingRenderCellSet.add(t);
    this._debouncedRender();
  }
  clearSelectedCells() {
    const e = [...this._selectedSet];
    this._selectedSet.clear(), e.forEach((t) => this._pendingRenderCellSet.add(t)), this._debouncedRender();
  }
  _render() {
    this._pendingRenderCellSet.forEach((e) => e.render()), this._pendingRenderCellSet.clear();
  }
}
function Da(s, e) {
  const t = new Set(e.allowCellRenderType ?? ["default", "select", "datePicker", "custom"]), n = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let o = !1, r = !1, i = 0, a = 0;
  const d = {
    setRow(g) {
      i = g;
    },
    setCol(g) {
      a = g;
    }
  }, c = () => n.hasHeaderRows ? 0 : s.headerRows, l = () => n.hasHeaderColumns ? 0 : s.headerColumns;
  function* h() {
    d.setRow(c()), d.setCol(l());
    const g = s.getSelection();
    for (o = !1; ; ) {
      switch (n.area) {
        case "all":
          yield s.cell(i, a);
          break;
        case "selected-col":
          if (!g) throw new Error("No selection in finding");
          Kn(a, g) && (yield s.cell(i, a));
          break;
        case "selected-row":
          if (!g) throw new Error("No selection in finding");
          Un(i, g) && (yield s.cell(i, a));
          break;
        case "selection":
          if (!g) throw new Error("No selection in finding");
          tn(i, a, g) && (yield s.cell(i, a));
          break;
        case "custom":
          if (!n.customRange) throw new Error("Please call with customRange in 'custom' finding.");
          tn(i, a, n.customRange) && (yield s.cell(i, a));
          break;
      }
      if (R()) break;
    }
    function R() {
      const T = n.direction;
      if (T === "by-columns" || T === "left-right") {
        if (++i, i >= s.getRowCount() && (++a, i = c()), a >= s.getColCount())
          if (o)
            o = !1, i = c(), a = l();
          else return !0;
      } else if (++a, a >= s.getColCount() && (++i, a = l()), i >= s.getRowCount())
        if (o)
          o = !1, i = c(), a = l();
        else return !0;
    }
  }
  function u(g) {
    if (!t.has(g.renderType)) return !1;
    const R = n.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), T = n.matchAll ? `^${R}$` : R, x = n.ignoreCase ? "i" : "", H = new RegExp(T, x);
    return e.onCellCheck ? e.onCellCheck(H, g) : H.test(g.text);
  }
  let f = h();
  return {
    resetCursor() {
      r = !0;
    },
    findNext(g) {
      for (jn(n, g) || (Object.assign(n, g), r = !0), r && (f = h(), r = !1); ; ) {
        const R = f.next();
        if (!R.done && R.value && u(R.value))
          return o = !0, R.value;
        if (R.done)
          break;
      }
      return r = !0, null;
    },
    getAllMatchedCell(g) {
      const R = [];
      g && Object.assign(n, g);
      for (const T of h())
        u(T) && R.push(T);
      return R;
    },
    setCursor(g, R) {
      if (g < 0 || R < 0) throw new Error("row or col must be greater than or equal to 0");
      d.setRow(g), d.setCol(R);
    }
  };
}
function _t(s) {
  if (!(s instanceof Function))
    throw new Error("func is not a function");
  try {
    return s();
  } catch (e) {
    console.error(e);
  }
}
class Fa extends V {
  _execute() {
    return this._instance.addColumn(...this._args);
  }
  _getUndoContext() {
    return {
      addedColumn: this._instance.getColCount(),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  _undo() {
    this._instance.removeColumn(this._undoContext.addedColumn), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return this._undoContext ? this._instance.getColCount() > this._undoContext.addedColumn : !1;
  }
}
class Wa extends V {
  _execute() {
    if (!this._undoContext.row) throw new Error("not recorded the added row in undoContext!");
    return this._instance.insertRowByList([this._undoContext.row]), this._undoContext.row.rowId;
  }
  _undo() {
    this._undoContext.row = this._instance.getRow(this._undoContext.addedRow), this._instance.removeRow(this._undoContext.addedRow), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _getUndoContext() {
    return {
      row: null,
      addedRow: this._instance.getRowCount(),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return this._undoContext ? this._instance.getRowCount() > this._undoContext.addedRow : !1;
  }
}
class Pa extends V {
  _undo() {
    this._instance.setColumnVisible(this._args[0], this._undoContext.visible);
  }
  _getUndoContext() {
    return {
      visible: this._instance.getColumnVisible(this._args[0])
    };
  }
  _execute() {
    return this._instance.setColumnVisible(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function So(s, e) {
  const [t, n] = s, [o, r] = e, i = n - t, a = r - o;
  return i === a ? [e, s] : t < o ? [[r - i, r], [t, t + a]] : [[o, o + i], [n - a, n]];
}
class Na extends V {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...So(...this._args));
  }
  _getUndoContext() {
    return null;
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class $a extends V {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...So(...this._args));
  }
  _getUndoContext() {
    return null;
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class Ba extends V {
  _undo() {
    const [e, t = 1] = this._args;
    this._instance.removeColumns(e, e + t - 1), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _execute() {
    return this._instance.insertColumns(...this._args);
  }
  _getUndoContext() {
    return {
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class Ga extends V {
  _undo() {
    const [e, t = 1] = this._args, n = e + t - 1;
    this._undoContext.rows = P(e, n + 1).map((o) => this._instance.getRow(o)), this._instance.removeRows(e, n), this._instance.forceLayoutTask(), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _execute() {
    return this._instance.insertRowByList(this._undoContext.rows), !0;
  }
  _getUndoContext() {
    return {
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell,
      rows: []
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class Va extends V {
  _undo() {
    const [e, t] = this._args;
    this._instance.splitCells(e, t), this._undoContext.textSnapshot.forEach(({ row: n, col: o, text: r }) => {
      this._instance.setText(n, o, r);
    });
  }
  _execute() {
    this._instance.mergeCells(...this._args);
  }
  _getUndoContext() {
    const e = new Ae(this._instance, this._instance), [t, n, o, r] = this._args, i = [];
    for (const a of e.getSelectionGenerator({ top: t, left: n, bottom: o, right: r }))
      i.push({ row: a.row, col: a.col, text: a.text });
    return {
      textSnapshot: i
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function bo(s, e) {
  const [t, n] = s, o = n - t;
  return t < e ? [[e - o - 1, e - 1], t] : [[e, e + o], n + 1];
}
class ja extends V {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...bo(this._args[0], this._undoContext.targetId));
  }
  _getUndoContext() {
    return {
      targetId: this._args[1] < this._instance.getRowCount() ? this._instance.getStartOfRowId(this._args[1]) : this._instance.getRowCount()
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class Ua extends V {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...bo(this._args[0], this._undoContext.targetId));
  }
  _getUndoContext() {
    return {
      targetId: this._args[1] < this._instance.getColCount() ? this._instance.getStartOfColumnId(this._args[1]) : this._instance.getColCount()
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class Ka extends V {
  _undo() {
    const e = this._args[1] - this._args[0] + 1;
    this._instance.insertColumns(this._args[0], e), this._undoContext.columnList.forEach((t, n) => {
      this._instance.setColumnWidth(n + this._args[0], t.width), this._instance.setColumnVisible(n + this._args[0], t.visible);
    }), this._undoContext.removedCells.forEach((t) => {
      this._instance.cell(t.row, t.col).cellRenderer = t.cellRenderer, this._instance.setCell(t.row, t.col, t.metaInfo), (t.mergeInfo.rowSpan > 1 || t.mergeInfo.colSpan > 1) && this._instance.mergeCells(
        t.row,
        t.col,
        t.bottom,
        t.right
      );
    }), this._undoContext.selection && this._instance.select(
      this._undoContext.selection,
      this._undoContext.activeCell ? this._instance.cell(this._undoContext.activeCell.row, this._undoContext.activeCell.col) : null
    );
  }
  _getUndoContext() {
    const e = new at(this._instance), [t, n] = this._args;
    return {
      removedCells: e.getCellListByColumn(t, n),
      columnList: e.getColumnListByColumn(t, n),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  _execute() {
    return this._instance.removeColumns(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class qa extends V {
  _undo() {
    this._instance.forceLayoutTask(), this._instance.insertRowByList(this._undoContext.removedRows), this._undoContext.removedRows.forEach((e) => {
      const t = e.rowId;
      for (let n = 0; n < e.cellCounts; n++) {
        const o = e.getCell(n);
        (o.mergeInfo.rowSpan > 1 || o.mergeInfo.colSpan > 1) && this._instance.mergeCells(
          t,
          o.col,
          o.bottom,
          o.right
        );
      }
      this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
    });
  }
  _execute() {
    this._instance.forceLayoutTask();
    const e = this._undoContext.removedRows.slice().reverse();
    for (const t of e)
      if (this._instance.removeRow(t.rowId) === !1)
        return !1;
  }
  _getUndoContext() {
    this._instance.forceLayoutTask();
    const [e, t, n] = this._args, o = P(e, t + 1).map((r) => this._instance.getRow(r));
    return {
      removedRows: n?.ignoreFiltered === !0 ? o.filter((r) => !r.filtered) : o,
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class Xa extends V {
  _execute() {
    this._instance.setColumnWidth(...this._args);
  }
  _getUndoContext() {
    return {
      latestWidth: this._instance.getColumnWidth(this._args[0])
    };
  }
  _undo() {
    this._instance.setColumnWidth(this._args[0], this._undoContext.latestWidth);
  }
  get canExecute() {
    return this._args[0] < this._instance.getColCount();
  }
  get canUndo() {
    return this._args[0] < this._instance.getColCount();
  }
}
class Ya extends V {
  _undo() {
    this._instance.setRowVisible(this._args[0], this._undoContext.visible);
  }
  _getUndoContext() {
    return {
      visible: this._instance.getRowVisible(this._args[0])
    };
  }
  _execute() {
    return this._instance.setRowVisible(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class Za extends V {
  _execute() {
    this._instance.setCellRenderer(...this._args);
  }
  _getUndoContext() {
    const [e, t] = this._args;
    return {
      row: e,
      col: t,
      cellRenderer: this._instance.cell(e, t).cellRenderer
    };
  }
  _undo() {
    this._instance.setCellRenderer(this._args[0], this._args[1], this._undoContext.cellRenderer);
  }
  get canExecute() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
  get canUndo() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
}
class Ja extends V {
  _undo() {
    const [e, t] = this._args;
    this._instance.mergeCells(e, t, e + this._undoContext.rowSpan - 1, t + this._undoContext.colSpan - 1);
  }
  _execute() {
    this._instance.splitCells(...this._args);
  }
  _getUndoContext() {
    const e = this._instance.cell(...this._args);
    return {
      rowSpan: e.mergeInfo.rowSpan,
      colSpan: e.mergeInfo.colSpan
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
const zn = {
  addRow: Wa,
  addColumn: Fa,
  setCell: ie,
  clearCells: po,
  setRowHeight: fo,
  setColumnWidth: Xa,
  insertRows: Ga,
  insertColumns: Ba,
  setRowVisible: Ya,
  setColumnVisible: Pa,
  mergeCells: Va,
  splitCells: Ja,
  removeRows: qa,
  removeColumns: Ka,
  exchangeRows: Na,
  exchangeColumns: $a,
  moveRows: ja,
  moveColumns: Ua,
  setCellRenderer: Za
};
function Qa(s) {
  if (!(s in zn)) {
    console.warn(`There is no method named ${s} in IRGridCommandMap`);
    return;
  }
  return zn[s];
}
function ec(s) {
  if (s === B.name)
    return Qa;
}
function tc(s, e, t, n, o) {
  const r = ec(e);
  if (!r) {
    console.warn("No component class in COMMAND_MAP.");
    return;
  }
  const i = r(t);
  if (!i) {
    console.warn("No command class in COMMAND_MAP.");
    return;
  }
  s.pushCommand(new i(n, o));
}
function j() {
  return function(e, t, n) {
    const o = n.value;
    return n.value = function(...r) {
      const { commandManager: i } = this;
      return i ? i.isRecording && tc(i, this.constructor.name, t, this, r) : console.warn("No commandManager in this context"), o.apply(this, r);
    }, n;
  };
}
function Rt(s) {
  if (!(s.target instanceof HTMLElement)) return null;
  const e = s.target.closest("td,th");
  return e ? se(e) : null;
}
var nc = Object.defineProperty, oc = Object.getOwnPropertyDescriptor, U = (s, e, t, n) => {
  for (var o = oc(e, t), r = s.length - 1, i; r >= 0; r--)
    (i = s[r]) && (o = i(e, t, o) || o);
  return o && nc(e, t, o), o;
};
const xt = new Ft(), sc = Object.freeze({
  colSpan: !0,
  rowSpan: !0,
  skipFiltered: !0
}), rc = Object.freeze({
  colSpan: !1,
  rowSpan: !1,
  skipFiltered: !0
}), St = {}, ic = [
  "text/html",
  "text/plain"
];
function lc() {
  return [
    new wo({}),
    new mo(),
    new Ro(),
    new go({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new Sa({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class B extends Lr {
  _colHeaderInfo;
  _rowHeaderInfo;
  _bodyInfo;
  _plugins = [];
  _defaultColumnCellFormat;
  // IRGrid Util
  _scheduleManager;
  _gridStore;
  _gridRangeUtils = new at(this);
  _generator;
  _selector;
  _copyOptions;
  _pasteOptions;
  _readonly = !1;
  _rowSeq = 0;
  /**
   * `IRGrid`는 `class`형태로 제공된다. 그러므로, `new` 키워드를 이용하여 생성자 인자에 맞는 객체 인스턴스를 생성하여 사용한다. 생성자 인자는 `IRGridArgs`라는 단일 타입으로 정의되어 있다.
   * @param args
   */
  constructor(e) {
    super({ contextElement: e.contextElement });
    const {
      colHeader: t,
      rowHeader: n,
      body: o,
      defaultColumnCellFormat: r,
      plugins: i
    } = e;
    if (this._defaultColumnCellFormat = {
      all: {
        editable: !0,
        text: ""
      }
    }, this._copyOptions = {
      ...sc,
      ...e.copyOptions
    }, this._pasteOptions = {
      ...rc,
      ...e.copyOptions,
      ...e.pasteOptions
    }, r)
      for (const [u, f] of Object.entries(r))
        this._defaultColumnCellFormat[u] = Object.assign(this._defaultColumnCellFormat[u] || {}, f);
    this._gridStore = new Nl(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: n?.colCount ?? 0,
        headerRowCount: t?.rowCount ?? 0,
        gridCommandManager: new lr({ context: this }),
        gridStateContext: new Xl(this),
        cursorManager: Co(this, !1)
      }
    ), this._initGridCellPadding(), this._colHeaderInfo = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: xt,
      defaultSize: this._gridStore.getThemeValue("grid.defaultColumnWidth"),
      minSize: this._gridStore.getThemeValue("grid.defaultColumnMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultColumnMaxSize")
    }, t), this._colHeaderInfo.minSize = Math.min(this._colHeaderInfo.defaultSize, this._colHeaderInfo.minSize), this._colHeaderInfo.maxSize = Math.max(this._colHeaderInfo.defaultSize, this._colHeaderInfo.maxSize), this._rowHeaderInfo = Object.assign({
      colCount: 0,
      /**
       * cellRenderer 설명
       */
      cellRenderer: xt,
      defaultSize: this._gridStore.getThemeValue("grid.defaultRowHeight"),
      minSize: this._gridStore.getThemeValue("grid.defaultRowMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultRowMaxSize")
    }, n), this._rowHeaderInfo.minSize = Math.min(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.minSize), this._rowHeaderInfo.maxSize = Math.max(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.maxSize), this._bodyInfo = Object.assign({
      rowCount: 5,
      cellRenderer: xt
    }, o), this.contextElement.classList.add(tr), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
    const { wrapper: a, table: d } = this._gridStore.elements, { gridStateContext: c } = this._gridStore;
    d.classList.add(nr), this.contextElement.appendChild(a);
    let l = {
      offsetWidth: 0,
      offsetHeight: 0,
      className: ""
    }, h = !1;
    this.resizeObserve(() => {
      if (h) return;
      const { offsetHeight: u, offsetWidth: f, className: g } = this.contextElement;
      l.offsetWidth === f && l.offsetHeight === u && l.className === g || (l = { offsetWidth: f, offsetHeight: u, className: g }, h = !0, this._gridStore.hook.emit("resize", []).finally(() => {
        h = !1, this._scheduleManager.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection");
      }));
    }), this.addCoreElement(a), this._generator = new Ae(this._rowManager, this._colManager), this._selector = new oa(this, this._gridStore), this._scheduleManager = new la({
      grid: this,
      store: this._gridStore,
      contextElement: this.contextElement,
      selector: this._selector
    }), this._initPlugins(i ?? lc()), c.selectionRangeState.addSubscription((u, f) => {
      u?.activeCell !== f?.activeCell && (u?.activeCell.deactivate(), f?.activeCell.activate());
    }), c.activateHeaderCellState.addSubscription((u, f) => {
      u.forEach((g) => g.deactivate()), f.forEach((g) => g.activate());
    }), c.selectionRangeState.addSubscription((u, f) => {
      f ? c.activateHeaderCellState.next([...this._generator.getSelectionHeaderIterator(f.range)]) : c.activateHeaderCellState.next([]);
    }), c.selectionRangeState.addSubscription((u, f) => {
      u?.activeCell !== f?.activeCell && _t(() => this.onChangeCell(f?.activeCell ?? null)), _t(f ? () => this.onSelectCell(f.activeCell) : () => this.onActiveCellNull());
    }), c.selectionRangeState.addSubscription((u, f) => {
      const g = f?.range ?? null, R = u?.range ?? null;
      this.hook.emitSync("selectChanged", [g, R]), this.onSelectChanged(g, R);
    }), c.gridModeState.addSubscription((u, f) => {
      this.contextElement.dataset.mode = f.mode;
    }), c.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (u) => this.hook.emit("contextMenu", [u])), this.addGlobalEventListener(this.contextElement, "focus", (u) => this.hook.emit("contextFocus", [u])), this.addGlobalEventListener(this.contextElement, "blur", (u) => this.hook.emit("contextBlur", [u])), this.addGlobalEventListener(this.contextElement, "dragstart", (u) => this.hook.emit("contextDragStart", [u])), this.addGlobalEventListener(this.contextElement, "dragend", (u) => this.hook.emit("contextDragEnd", [u])), this.addGlobalEventListener(d, "scroll", (u) => {
      this.hook.emitSync("contextScroll", [u, this.scrollTop, this.scrollLeft]);
    }, { passive: !1 }), this.addGlobalEventListener(this.contextElement, "cut", (u) => this.hook.emitSync("cut", [u])), this.addGlobalEventListener(this.contextElement, "copy", (u) => this.hook.emitSync("copy", [u])), this.addGlobalEventListener(this.contextElement, "paste", (u) => this.hook.emitSync("paste", [u])), this.addGlobalEventListener(this.contextElement, "input", (u) => this.hook.emitSync("input", [u]), !0), this.addGlobalEventListener(this.contextElement, "keydown", (u) => this.hook.emitSync("keydown", [u]), !0), this.addGlobalEventListener(this.contextElement, "mousedown", (u) => this.hook.emit("contextMouseDown", [u])), this.addGlobalEventListener(this.contextElement, "mousemove", (u) => this.hook.emit("contextMouseMove", [u])), this.addGlobalEventListener(this.contextElement, "mouseup", (u) => this.hook.emit("contextMouseUp", [u])), this.addGlobalEventListener(this.contextElement, "click", (u) => this.hook.emitSync("contextClick", [u])), this.addGlobalEventListener(this.contextElement, "dblclick", (u) => this.hook.emitSync("contextDoubleClick", [u])), this.addGlobalEventListener(this.contextElement, "mousedown", (u) => this.hook.emitSync("contextMouseDown", [u])), this.addGlobalEventListener(this.contextElement, "mouseup", (u) => this.hook.emitSync("contextMouseUp", [u])), this.hook.addBeginHook("contextMenu", (u) => void u.preventDefault()), this.hook.addEndHook("contextMenu", (u) => {
      const { y: f, x: g } = Fr(u);
      this.onContextMenu(u, this.findCellOrNull(f, g));
    }), this.hook.addEndHook("contextFocus", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextMouseUp", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextDragEnd", this._gridEvFocus.bind(this)), this.hook.addSyncHook("cellRightClick", (u, f) => this.onCellRightClick(f, u)), this.hook.addSyncHook("cellClear", (u) => this.onClearCell(u)), this.hook.addSyncHook("cellDblClick", (u) => this.onDoubleClickCell(u)), this.hook.addSyncHook("cellSelect", (u) => this.selectCell(u.row, u.col)), this.hook.addSyncHook("cellClick", (u, f) => {
      f.__IGNORE_CELL_CLICK__ || this.contextElement.classList.contains(le) || (u.cellType === "row-header" && this.onRowClick(u, f), u.cellType === "col-header" && this.onColumnClick(u, f));
    }), this.hook.addSyncHook("contextMouseUp", (u) => {
      if (u.button !== 2) return;
      const f = Rt(u);
      if (f) {
        const g = this.cell(f.row, f.col);
        g.onRightClick(g, u);
      }
    }), this.hook.addSyncHook("contextClick", (u) => {
      if (!u.target.isConnected) return;
      const f = Rt(u);
      if (f) {
        const g = this.cell(f.row, f.col);
        g.onClick(g, u);
      }
    }), this.hook.addSyncHook("contextDoubleClick", (u) => {
      if (!Re(u.target) || u.target.tagName === "I" || u.target.tagName === "TEXTAREA") return;
      const f = Rt(u);
      if (f) {
        const g = this.cell(f.row, f.col);
        g.onDblClick(g);
      }
    }), this._initTableRowCol();
  }
  _gridEvFocus(e) {
    e.__IGNORE_GRID_FOCUS__ !== !0 && this.focus();
  }
  /**
   * grid에 추가되어 있는 플러그인을 제거할 수 있다.
   * @version ^2.15.1
   * @example
   * ```ts
   * grid.clearPlugins();
   * ```
   */
  clearPlugins() {
    const e = this._plugins.slice();
    for (const t of e)
      this.removePlugin(t);
  }
  /**
   * 현재 그리드에 존재하는 모든 행(row)의 데이터를 스냅샷 형태로 반환한다.
   * @returns 현재 그리드의 행 데이터를 표현한 스냅샷 배열
   */
  getSnapshotRows() {
    return this._gridStore.rowManager.getSnapshotRows();
  }
  onDestroy() {
    this._gridStore.hook.destroy(), this.clearPlugins();
  }
  /**
   * IRGrid 첫 초기화 시 지정된 colHeader.rowCount를 반환
   * 혼동의 여지가 있어, 사용을 권장하지 않음
   * @deprecated {@link getFreezedRowCount} 사용 권장
   */
  get fixedRowCount() {
    return this._colHeaderInfo.rowCount;
  }
  /**
   * 현재 복사 설정 정보를 반환한다.
   * @version ^2.17.0
   */
  get copyOptions() {
    return Object.freeze(this._copyOptions);
  }
  /**
   * 현재 붙여넣기 설정 정보를 반환한다.
   * @version ^2.17.0
   */
  get pasteOptions() {
    return Object.freeze(this._pasteOptions);
  }
  /**
   * contextElement 요소의 클래스 이름(className)을 반환한다.
   * @version ^2.17.0
   */
  get className() {
    return this.contextElement.className;
  }
  /**
   * 컴포넌트 라벨을 반환한다.
   */
  get componentLabel() {
    return "grid";
  }
  /**
   * grid가 가지고 있는 hook 정보를 반환한다.
   */
  get hook() {
    return this._gridStore.hook;
  }
  /**
   * @deprecated 추후 제거될 getter
   */
  get canSelectMultipleCells() {
    return !1;
  }
  /**
   * 현재 Grid의 가장 첫 Row를 반환한다.
   */
  get firstRow() {
    return this._rowManager.firstRow;
  }
  /**
   * 현재 Grid의 가장 마지막 Row를 반환한다.
   */
  get lastRow() {
    return this._rowManager.lastRow;
  }
  get _gridContext() {
    return this._gridStore.gridStateContext;
  }
  get _rowManager() {
    return this._gridStore.rowManager;
  }
  get _mergeHandler() {
    return this._gridStore.mergeHandler;
  }
  get _colManager() {
    return this._gridStore.columnManager;
  }
  /**
   * 현재 고정된 열 개수 (header + body)의 개수를 반환한다.
   */
  get fixedColumnCount() {
    return this._colManager.freezedColumns;
  }
  /**
   * 현재 Grid의 총 column 너비 값을 반환한다.
   */
  get width() {
    return this.contextWidth;
  }
  get contextWidth() {
    return this._colManager.columnsWidth;
  }
  get contextHeight() {
    return this._rowManager.rowsHeight;
  }
  /**
   * 현재 Grid의 총 row 높이 값을 반환한다.
   */
  get height() {
    return this.contextHeight;
  }
  /**
   * 고정된 행인 headerRows + freezedRows 높이 총합을 반환한다.
   */
  get fixedRowHeight() {
    return this._rowManager.freezedRowsHeight;
  }
  /**
   * 고정된 열인 rowHeaders + freezedColumns 너비 총합을 반환한다.
   */
  get fixedColumnWidth() {
    return this._colManager.fixedColumnsWidth;
  }
  /**
   * 현재 Grid의 scroll 영역 정보를 반환한다.
   */
  get scrollArea() {
    const { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: o } = this._gridStore.elements.table;
    return { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: o };
  }
  /**
   * 현재 Grid의 ScrollTop 레이아웃 값을 반환한다.
   */
  get scrollTop() {
    return this._gridStore.elements.table.scrollTop;
  }
  /**
   * 현재 Grid의 scrollLeft 레이아웃 값을 반환한다.
   */
  get scrollLeft() {
    return this._gridStore.elements.table.scrollLeft;
  }
  /**
   * 현재 Grid의 scrollBottom 레이아웃 값을 반환한다.
   */
  get scrollBottom() {
    return this._gridStore.elements.table.scrollTop + this._gridStore.elements.table.clientHeight;
  }
  /**
   * 현재 Grid의 scrollRight 레이아웃 값을 반환한다.
   */
  get scrollRight() {
    return this._gridStore.elements.table.scrollLeft + this._gridStore.elements.table.clientWidth;
  }
  /**
   * Grid 생성 시, 지정된 colHeader.minSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultColumnMinSize` 사용)
   */
  get minColWidth() {
    return this._colHeaderInfo.minSize;
  }
  /**
   * Grid 생성 시, 지정된 colHeader.maxSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultColumnMaxSize` 사용)
   */
  get maxColWidth() {
    return this._colHeaderInfo.maxSize;
  }
  /**
   * Grid 생성 시, 지정된 rowHeader.minSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultRowMinSize` 사용)
   */
  get minRowHeight() {
    return this._rowHeaderInfo.minSize;
  }
  /**
   * Grid 생성 시, 지정된 rowHeader.maxSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultRowMaxSize` 사용)
   */
  get maxRowHeight() {
    return this._rowHeaderInfo.maxSize;
  }
  /**
   * `IRGrid`의 여러 명령들을 녹화하여 `undo`/`redo`를 지원하는 {@link IRCommandManager} 객체를 반환한다.
   */
  get commandManager() {
    return this._gridStore.commandManager;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 행 개수(초기 colHeader.rowCount)를 반환한다.
   */
  get headerRows() {
    return this._rowManager.headerRows;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 열 개수(초기 rowHeader.colCount)를 반환한다.
   */
  get headerColumns() {
    return this._colManager.headerColumns;
  }
  /**
   * 현재 Grid의 헤더 열들의 너비 합을 반환한다.
   */
  get headerWidth() {
    return this._colManager.rowHeaderColumnsWidth;
  }
  /**
   * 현재 Grid의 헤더 행들의 높이 합을 반환한다.
   */
  get headerHeight() {
    return this._rowManager.headerRowsHeight;
  }
  /**
   * 현재 Grid에서 활성화된 Cell을 반환한다.
   */
  get activeCell() {
    return this._gridContext.selectionRangeState.value?.activeCell ?? null;
  }
  /*
   * Setters
   */
  /**
   * 복사 설정 정보를 지정한다.
   * @version ^2.17.0
   */
  set copyOptions(e) {
    Object.assign(this._copyOptions, e);
  }
  /**
   * 붙여넣기 설정 정보를 지정한다.
   * @version ^2.17.0
   */
  set pasteOptions(e) {
    Object.assign(this._pasteOptions, e);
  }
  /**
   * 현재 Grid에서 활성화된 Cell을 설정한다. null을 설정하면 활성화된 Cell이 없어진다.
   */
  set activeCell(e) {
    if (e === this.activeCell) return;
    if (!e) {
      this._gridContext.selectionRangeState.next(null);
      return;
    }
    const t = this.getSelection();
    t ? this._gridContext.selectionRangeState.next({
      activeCell: e,
      range: t
    }) : this._gridContext.selectionRangeState.next({
      activeCell: e,
      range: { top: e.row, left: e.col, bottom: e.bottom, right: e.right }
    });
  }
  /**
   * 현재 Grid를 읽기 전용 모드로 설정한다. true 할당 시, 모든 셀의 편집기 전환, 붙여넣기 등의 수정 작업이 불가능해진다.
   */
  set readonly(e) {
    this._readonly = e, this._rowManager.updateCellReadonlyStatus();
  }
  /*
   * Public Methods
   */
  /**
   * IRGrid에 적용할 Plugin을 추가한다.
   * @param plugin - 추가하려는 {@link IRGridPlugin} 인스턴스
   * @example
   * ```ts
   * import { IRGridMoveRowsPlugin } from "@innorules/ir-style/grid";
   *
   * // 기본 제공되지 않는 행 이동 플러그인을 추가
   * grid.addPlugin( new IRGridMoveRowsPlugin() );
   * ````
   * @type
   * @remarks
   *
   * Tip
   *
   * IRGrid 생성 시, plugins 인자를 정의하지 않았다면, 아래의 플러그인들이 기본적으로 초기화 된다.
   * - `IRGridDefaultKeyPlugin`: IRGrid에 포커스가 있을 때 기본 키 입력 처리 플러그인
   * - `IRGridMouseCellSelectorPlugin`: IRGrid의 셀을 클릭할 때 동작을 처리하는 플러그인
   * - `IRGridCellDropPlugin`: 외부에서 온 drag 데이터를 받아 처리하는 플러그인
   * - `IRGridResizerPlugin`: 헤더 셀의 우측 경계를 드래그하여 크기를 조정하는 플러그인
   * - `IRGridPopoverPlugin`: 셀에 대한 메모 표시를 위한 플러그인
   */
  addPlugin(e) {
    e.mount({
      grid: this,
      contextElement: this.contextElement,
      gridStore: this._gridStore
    }), this._plugins.push(e);
  }
  /**
   * Grid에서 left 좌표에 해당하는 {@link IRGridColumn} 객체를 찾아 반환한다.
   * @version ^2.12.2
   * @param left - `IRGridColumn`을 찾기 위한 left 좌표 값
   * @example
   * ```ts
   * const grid = new IRGrid({
   *     contextElement: document.querySelector('#grid'),
   *    colHeader: {
   *        colCount: 5,
   *        defaultSize: 100
   *    },
   *});
   *
   * // 100은 0번째 column 객체가 반환된다.
   * console.log( grid.getColumnByLeft(100).columnId );
   * // 101은 1번째 column 객체가 반환된다.
   * console.log( grid.getColumnByLeft(101).columnId );
   * // 504은 4번째 column 객체가 반환된다.
   * console.log( grid.getColumnByLeft(504).columnId );
   * // 505은 null
   * console.log( grid.getColumnByLeft(505) );
   * ```
   */
  getColumnByLeft(e) {
    const t = this._colManager.visibleColumnList;
    let n = 0, o = t.length - 1;
    for (; n <= o; ) {
      const r = n + Math.floor((o - n) / 2), i = t[r];
      if (i.isBetweenLeft(e))
        return i;
      e < i.left ? o = r - 1 : n = r + 1;
    }
    return null;
  }
  /**
   * 설정된 기본 열 서식을 변경한다.
   * all 모든 셀 공통
   * {number} 해당 열 셀 공통
   * col_header_{number} 해당 열 헤더 셀
   * row_header_{number} 해당 행 헤더 셀
   * body_{number} 해당 body 열 셀
   */
  setDefaultColumnCellFormat(e, t) {
    this._defaultColumnCellFormat[e] = { ...t };
  }
  /**
   * 이진 검색으로 top에 해당되는 row를 찾습니다.
   * @param top grid context 내 top 위치
   */
  getRowByTop(e) {
    return this._rowManager.getRowByTop(e);
  }
  /**
   * 해당 플러그인을 제거한다.
   * @param plugin
   */
  removePlugin(e) {
    if (!this._plugins.includes(e))
      throw new Error("plugin not found");
    try {
      e.unmount(), this._plugins.splice(this._plugins.indexOf(e), 1);
    } catch (t) {
      console.error("removing plugin error!", t);
    }
  }
  /**
   * 지정된 셀이 병합된 셀 그룹의 기준 셀인 경우, 해당 병합 셀의 행 및 열 범위를 반환한다.
   * @param row - 병합된 셀의 기준 셀 row 값
   * @param col - 병합된 셀의 기준 셀 col 값
   * @returns
   * @example
   * ```ts
   * console.log( grid.getMergeArea( 3, 10 ) );
   * ```
   */
  getMergeArea(e, t) {
    const n = this.cell(e, t);
    if (n.mergeInfo)
      return {
        rowSpan: n.mergeInfo.rowSpan,
        colSpan: n.mergeInfo.colSpan
      };
    throw new Error("It's not a based cell!");
  }
  /**
   * 특정 셀의 병합 여부를 반환한다.
   * @param row
   * @param col
   * @returns
   * @example
   * ```ts
   * grid.isMerged( 1, 5 )
   * ```
   */
  isMerged(e, t) {
    return this._mergeHandler.isMerged(e, t);
  }
  splitCells(e, t) {
    this.forceLayoutTask(), this._mergeHandler.splitCells(e, t), this._scheduleManager.addTask("virtualRender");
  }
  mergeCells(e, t, n, o) {
    this.forceLayoutTask(), this._mergeHandler.mergeCells({ top: e, left: t, bottom: n, right: o }), this._scheduleManager.addTask("virtualRender");
    const r = this.getSelection();
    r && this.selectRange(r.top, r.left, r.bottom, r.right);
  }
  /**
   * 마지막 명령을 실행 취소한다.
   * @returns
   */
  undo() {
    return this.commandManager.undo();
  }
  /**
   * 마지막으로 취소한 명령을 다시 실행한다.
   * @returns
   */
  redo() {
    return this.commandManager.redo();
  }
  /**
   * 주어진 Y 오프셋 위치에 해당하는 행(Row)을 반환한다.
   * @param offsetY - 기준이 되는 Y 좌표
   * @returns
   */
  findRowOrNull(e) {
    return this._rowManager.findRowOrNull(e);
  }
  /**
   * - 주어진 좌표에 해당하는 셀을 반환한다.
   * - 병합 셀에 포함된 경우, 병합 그룹의 대표 셀을 반환한다.
   *
   * @param offsetY - Y 좌표
   * @param offsetX - X 좌표
   * @returns
   */
  findCellOrNull(e, t) {
    const n = this.getRowByTop(e);
    if (!n) return null;
    const o = this.getColumnByLeft(t);
    if (!o) return null;
    const r = this.cell(n.rowId, o.columnId);
    return r.mergeMain ?? r;
  }
  /**
   * 해당 셀의 기준이되는 셀을 반환한다.
   * @param row - 기준이 되는 셀을 가지고 오고 싶은 셀의 row index
   * @param col - 기준이 되는 셀을 가지고 오고 싶은 셀의 column index
   * @returns
   */
  getBaseCell(e, t) {
    const n = this.cell(e, t);
    if (n.isMerged)
      return { row: n.row, col: n.col };
    if (n.mergeMain)
      return { row: n.mergeMain.row, col: n.mergeMain.col };
    throw new Error("It's not a merged cell!");
  }
  /**
   * 현재 선택된 셀 범위를 해제한다.
   */
  releaseCells() {
    this._gridContext.selectionRangeState.next(null), this._selector.releaseRange();
  }
  _clearAllRows() {
    this._gridStore.tableElement.scrollTop = 0, this._rowManager.clearRows(), this._mergeHandler.clearMergeCells(this.headerRows), this.commandManager.clearCommands();
  }
  /**
   * - headerRows를 제외한 모든 body row를 제거한다.
   * - undo용 command가 모두 초기화 된다.
   * @example
   * ```ts
   * grid.clearRows();
   * ```
   */
  clearRows() {
    this._clearAllRows(), this._scheduleManager.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  /**
   * 해당 컬럼의 left 값을 반환한다.
   * @param col - left 위치 값을 가져오고자 하는 column
   * @returns
   */
  getColumnLeft(e) {
    return this._colManager.getColumnLeft(e);
  }
  /**
   * 원하는 범위와 셀을 선택한다.
   * @param range - 선택하려는 범위를 나타내는 {@link IRGridRange} 객체
   * @param cell
   * @example
   * ```ts
   * // 0 ~ 2까지 3*3 영역 선택
   * grid.select( { top: 0, left: 0, bottom: 2, right: 2 } );
   * // 영역 선택 후, 활성화 셀은 1,1로 지정
   * grid.select( { top: 0, left: 0, bottom: 2, right: 2 }, grid.getCell(1, 1) );
   * ```
   * @remarks
   * Tip
   * - 영역 계산은 top ~ bottom까지 영역이 포함되므로 0 ~ 2까지 선택하면 3개 크기의 영역을 선택하는 것이다.
   * - header 영역은 선택할 수 없다.
   */
  select(e, t = this.activeCell) {
    t?.isRemoved && (t = null), this._gridContext.selectionRangeState.next({
      range: e,
      activeCell: t ?? this.cell(e.top, e.left)
    }), this._scheduleManager.addTask("updateSelection");
  }
  /**
   * 원하는 범위를 선택한다. ({@link select}를 기반으로 호출하며, 인자 타입만 다르다.)
   * @example
   * ```ts
   * // 0 ~ 2까지 3*3 영역 선택
   * grid.selectRange( 0, 0, 2, 2 );
   * // 영역 선택 후, 활성화 셀은 1,1로 지정
   * grid.selectRange( 0, 0, 2, 2, grid.getCell(1, 1) );
   * ```
   */
  selectRange(e, t, n, o, r = this.activeCell) {
    this.select({ top: e, left: t, bottom: n, right: o }, r);
  }
  /**
   * 그리드 내의 모든 셀을 선택한다.
   * @example
   * ```ts
   * grid.selectAll();
   * ```
   */
  selectAll() {
    this.selectRange(this.headerRows, this.headerColumns, this.getRowCount() - 1, this.getColCount() - 1, this.activeCell ?? null);
  }
  /**
   * 특정 셀의 너비를 반환한다.
   * @param cell - 너비를 구하고자 하는 셀 객체
   * @example
   * ```ts
   * const cellWidth = grid.getCellWidth( grid.getCell(1, 1) );
   * ```
   * @remarks
   * Tip
   * - 셀이 병합된 경우, 병합된 여러 열의 너비 합이 반환된다.
   */
  getCellWidth(e) {
    if (e.mergeInfo) {
      const { col: t } = e;
      return P(e.mergeInfo.colSpan).reduce((n, o) => this.getColumnVisible(t + o) ? n + this.getColumnWidth(t + o) : n, 0);
    }
    return this.getColumnWidth(e.col);
  }
  /**
   * 해당 셀이 보여짐 상태를 반환한다.
   * @param row - 셀의 row
   * @param col - 셀의 column
   * @returns
   */
  getCellVisible(e, t) {
    return !this.getRowVisible(e) || !this.getColumnVisible(t) ? !1 : this.cell(e, t).visible;
  }
  /**
   * 해당 셀의 높이를 가져온다.
   * @param cell - 높이 값을 가져오고 싶은 셀 정보
   * @returns
   */
  getCellHeight(e) {
    if (e.mergeInfo) {
      const { row: t } = e;
      return P(e.mergeInfo.rowSpan).reduce((n, o) => this.getRowVisible(t + o) ? n + this.getRowHeight(e.row + o) : n, 0);
    }
    return this.getRowHeight(e.col);
  }
  /**
   * grid내에서 선택된 cell들의 정보(top, left, bottom, right)를 반환한다.
   * @returns
   * @example
   * ```ts
   * grid.getSelection();
   * ```
   */
  getSelection() {
    return this._gridContext.selectionRangeState.value?.range ?? null;
  }
  /**
   * 지정한 행이 보이도록 스크롤 위치를 조정한다.
   * @param row - 스크롤 위치를 변경할 행
   */
  scrollOnRow(e) {
    this._scheduleManager.updateScrollInfo({ row: e });
  }
  /**
   * 지정한 열이 보이도록 스크롤 위치를 조정한다.
   * @param col - 스크롤 위치를 변경할 열
   */
  scrollOnCol(e) {
    this._scheduleManager.updateScrollInfo({ col: e });
  }
  /**
   * 레이아웃 태스크를 강제로 실행한다.
   */
  forceLayoutTask() {
    this._scheduleManager.forceRunTasks();
  }
  /**
   * 지정한 타입의 플러그인 인스턴스를 반환한다.
   * @param type - 플러그인 클래스 생성자 함수
   * @returns
   */
  getPlugin(e) {
    for (const t of this._plugins)
      if (t instanceof e)
        return t;
    throw new Error(`not found plugin ${e}`);
  }
  /**
   * 스크롤 위치 값을 리셋한다.
   */
  resetScroll() {
    this._gridStore.tableElement.scrollTop = 0, this._gridStore.tableElement.scrollLeft = 0;
  }
  /**
   * 지정한 영역이 화면(Viewport)에 보이도록 스크롤 위치를 조정한다.
   * @param row - 화면에 보이도록 할 row index
   * @param col - 화면에 보이도록 할 column index
   * @example
   * ```ts
   * grid.scrollInView( 4, 10 );
   * ```
   */
  scrollInView(e, t) {
    this._scheduleManager.updateScrollInfo({ row: e, col: t });
  }
  /**
   * grid에 focus를 설정한다.
   */
  focus() {
    this._gridStore.tableElement.draggable || this._gridStore.gridTextarea.focus();
  }
  /**
   * 비동기적으로 처리되는 렌더링 이후 작업이 예약되도록 설정한다.
   */
  afterRender(e) {
    this._scheduleManager.addAfterRenderTask(e), this._scheduleManager.addTask("nothing");
  }
  /**
   * 특정 row, col의 셀 `text`속성을 설정한다.
   * @command 내부적으로 setCell을 호출하여 command에 기록
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @param text - 대상 셀에 설정할 값.
   * - `number` 또는 `bigint` 타입을 지정한 경우 문자열로 변환하여 설정된다. (`5` -> `"5"`, `123123123n` -> `"123123123"`)
   * - `boolean` 타입을 지정한 경우 문자열로 변환하여 설정된다. (`true` -> `"true"`)
   * - `undefined` 또는 `null` 타입을 지정한 경우 빈 문자열로 설정된다.
   * - `object` 타입을 전달한 경우 예외가 발생한다.
   * @example
   * ```ts
   * grid.setText( 0, 0, "" );           // ""
   * grid.setText( 1, 0, "문자열" );     // "문자열"
   * grid.setText( 2, 0, undefined );    // ""
   * grid.setText( 3, 0, null );         // ""
   * grid.setText( 4, 0, 5 );            // "5"
   * grid.setText( 5, 0, 123123n );      // "123123"
   * grid.setText( 6, 0, true );         // "true"
   * ```
   * @remarks
   * Tip
   * - 그리드 내부에서 모든 text는 string로 취급되어 저장된다.
   * - 셀마다 별도의 커스텀 데이터 저장이 필요한 경우, {@link setObject} 메서드를 이용
   */
  setText(e, t, n) {
    this.setCell(e, t, { text: n });
  }
  setCellRenderer(e, t, n) {
    this.cell(e, t).cellRenderer = n;
  }
  /**
   * 특정 row, col의 셀의 `text`속성을 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @example
   * ```ts
   * grid.getText( 0, 0 );
   * ```
   */
  getText(e, t) {
    return this.cell(e, t).text;
  }
  /**
   * 특정 row, col의 셀의 `value`속성을 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @returns
   * ```ts
   * grid.getValue( 4, 5 );
   * ```
   */
  getValue(e, t) {
    return this.cell(e, t).value;
  }
  /**
   * 특정 열의 넓이 값을 반환한다.
   * @param col - 넓이 값을 반환하고 싶은 column
   * @returns
   * @example
   * ```ts
   * console.log( grid.columnWidth( 4 ) );
   * ```
   */
  getColumnWidth(e) {
    return this._colManager.getColumnWidth(e);
  }
  /**
   *
   * @version ^2.18.0
   */
  getColWidthWithSpan(e, t) {
    let n = 0;
    for (let o = 0; o < t; o++)
      n += this._colManager.getColumnUnstable(e + o).widthWithBorder;
    return n;
  }
  /**
   *
   * @version ^2.17.0
   * @command
   */
  setData(e) {
    const { row: t, col: n, data: o } = e;
    o.forEach((r, i) => {
      r.forEach((a, d) => this.setText(t + i, n + d, a));
    });
  }
  setColumnWidth(e, t) {
    const n = this._colManager.getColumn(e).getBoundSize(t);
    this._colManager.setColumnWidth(e, n), this._rowManager.setColumnWidth(e, n), this._gridStore.hook.emit("columnChanged", [e, e, "setWidth"]), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("resizeGridWrapperWidth").addTask("updateSelection").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft");
  }
  /**
   * grid 내부에 있는 특정 row의 높이를 반환한다.
   * @param row - 높이 값을 가져오고자 하는 row index
   * @returns
   * @example
   * ```ts
   * grid.getRowHeight( 0 );
   * ```
   */
  getRowHeight(e) {
    return this._rowManager.getRowHeight(e);
  }
  /**
   * @version ^2.18.0
   */
  getRowHeightWithSpan(e, t) {
    let n = 0;
    for (let o = 0; o < t; o++)
      n += this._rowManager.getRowUnstable(e + o).heightWithBorder;
    return n;
  }
  setRowHeight(e, t) {
    const n = this._rowManager.getRow(e).getBoundSize(t);
    this._rowManager.setRowHeight(e, n), this._scheduleManager.addTask("virtualRender").addTask("updateTop").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  /**
   * 특정 row의 텍스트 색상을 설정한다.
   * @param row - 텍스트 색상을 설정할 row index
   * @param color - 텍스트 색상
   * @example
   * ```ts
   * grid.setRowTextColor( 0, "#ff0000" );
   * ```
   */
  setRowTextColor(e, t) {
    this._rowManager.getRow(e).textColor = t;
  }
  /**
   * 특정 row, col 셀의 `object`속성을 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @returns - Generics로 지정한 타입 `T`에 따라 반환 타입이 결정된다.
   * @example
   * ```ts
   * type CatData = {
   *     name: string;
   * }
   *
   * const myCat = getObject<CatData>( 0, 0 );
   * ```
   * @remarks
   * Tip
   * - Generics는 타입스크립트 환경에서 사용 가능 {@link https://www.typescriptlang.org/docs/handbook/2/generics.html | TypeScript Generics 문서}
   */
  getObject(e, t) {
    return this.cell(e, t).object;
  }
  /**
   * 특정 row, col 셀의 `object`속성을 설정한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @param object - 대상 셀에 설정할 객체
   * @example
   * ```ts
   * grid.setObject( 0, 0, { id: 1001, name: "lee" } );
   * grid.setObject( 1, 0, { id: 1002, name: "kim" } );
   * ```
   * @remarks
   * Tip
   * - object는 해당 셀과 매핑하여 부가적으로 저장할 데이터로 많이 사용된다.
   */
  setObject(e, t, n) {
    this.cell(e, t).props = { object: n };
  }
  /**
   * 특정 좌표의 {@link IRGridCell} 객체를 얻는다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @example
   * ```ts
   * const topLeftCell = grid.cell(0, 0);
   * ```
   * @remarks
   * Tip
   * - 해당되는 row, col에 셀이 없는 경우 예외가 발생한다.
   */
  cell(e, t) {
    return this._rowManager.getCell(e, t);
  }
  /**
   * 지정한 row, col의 셀이 기준 셀인지의 여부를 반환한다.
   * @returns
   * @example
   * ```ts
   * grid.isBased( 1, 4 );
   * ```
   */
  isBased(e, t) {
    return this.cell(e, t).mergeMain === void 0;
  }
  /**
   * 해당 row, col cell의 IRGridCellMetaInfo를 반환한다.
   * @deprecated 메서드 이름이 혼동되므로 deprecated. 만약, metaInfo가 필요한 경우 getCellMetaInfo를 호출하세요.
   */
  getCell(e, t) {
    return this.cell(e, t).props;
  }
  /**
   * 해당 셀의 내부 속성 정보 객체({@link IRGridCellMetaData})를 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @example
   * ```ts
   * const cellProps = grid.getCellMetaInfo(0, 0);
   *
   * console.log( cellProps.text );
   * console.log( cellProps.icon );
   * ```
   */
  getCellMetaInfo(e, t) {
    return this.cell(e, t).props;
  }
  _toCellProps(e) {
    if (typeof e.text == "number" || typeof e.text == "boolean" || typeof e.text == "bigint")
      e.text = `${e.text}`;
    else if (e.text === null)
      e.text = "";
    else if (typeof e.text == "object" || Array.isArray(e.text))
      throw new Error("Could not set object or array in text property!");
    return e;
  }
  setCell(e, t, n) {
    this.cell(e, t).props = this._toCellProps(n);
  }
  /**
   * 특정 row에 대한 정보를 설정한다.
   * @param rowNo - 행 번호
   * @param rowInfo - 행에 설정할 정보
   * @remarks
   * Tip
   * - 행의 여러 데이터를 삽입할 때, 성능 최적화를 위해 사용한다.
   */
  setRowInfo(e, t) {
    this.getRow(e).setRowInfo(t);
  }
  /**
   * 특정 row, col의 셀을 선택한다. ({@link select}를 기반으로 호출)
   * @param row - 선택하고자 하는 row index
   * @param col - 선택하고자 하는 column index
   * @example
   * ```ts
   * grid.selectCell( 0, 0 );
   * ```
   * @remarks
   * Tip
   * - 내부적으로 {@link cell}메소드를 호출한다.
   */
  selectCell(e, t) {
    this.selectRange(e, t, e, t, this.cell(e, t));
  }
  /**
   * 현재 Grid 행의 개수를 반환한다.
   * @example
   * ```ts
   * console.log( grid.getRowCount() );
   * ```
   */
  getRowCount() {
    return this._rowManager.length;
  }
  /**
   * 현재 visible 상태가 true 행 개수를 반환한다.
   * @version ^2.17.0
   */
  getVisibleRowCount() {
    return this._rowManager.getVisibleRowCount();
  }
  /**
   * 현재 Grid 열의 개수를 반환한다.
   * @returns
   */
  getColCount() {
    return this._colManager.length;
  }
  /**
   * 마지막 행의 객체를 반환한다.
   * @returns
   */
  getLastRow() {
    return this.getRow(this.getRowCount() - 1);
  }
  /**
   * 현재 고정된 행 개수 (header + body)를 반환한다.
   */
  getFreezedRowCount() {
    return this._rowManager.freezedRows;
  }
  /**
   * 현재 고정된 열 개수 (header + body)를 반환한다.
   * @example
   * ```ts
   * console.log( grid.getFreezedColumnCount() );
   * ```
   */
  getFreezedColumnCount() {
    return this._colManager.freezedColumns;
  }
  /**
   * 특정 열의 객체({@link IRGridColumn}) 정보를 가져온다.
   * @param columnId - 정보를 가져오려는 column index
   * @returns
   * @example
   * ```ts
   * console.log( grid.getColumn( 10 ) );
   * console.log( grid.getColumn( 21 ) );
   * ```
   */
  getColumn(e) {
    return this._colManager.getColumn(e);
  }
  /**
   * 특정 row의 {@link IRGridRow} 객체를 반환한다.
   * @param rowId - grid에서 가져오고자 하는 row index
   * @returns
   * @example
   * ```ts
   * // 1번째 row 객체를 반환한다.
   * grid.getRow( 1 );
   * ```
   */
  getRow(e) {
    return this._rowManager.getRow(e);
  }
  /**
   * {@link renderColumns}의 단일 열 렌더 버전이다.
   * @param left - 렌더링시킬 column index
   * @example
   * ```ts
   * grid.renderColumn( 10 );
   * ```
   */
  renderColumn(e) {
    this.renderColumns(e, e);
  }
  /**
   * 지정한 범위의 열을 렌더링한다.
   * @param left - 렌더링할 시작 column index
   * @param right - 렌더링할 마지막 column index
   * @example
   * ```ts
   * grid.renderColumns( 1, 20 );
   * ```
   */
  renderColumns(e, t) {
    this._rowManager.runFuncEachRow((n) => n.renderColumns(e, t));
  }
  /**
   * @version ^2.18.0
   */
  fillColumn(e) {
    this.forceLayoutTask();
    const t = this._gridStore.tableElement.clientWidth - this.width + this.getColumnWidth(e);
    t < 0 || this.setColumnWidth(e, t);
  }
  /**
   * @version ^2.22.1
   * 지정한 컬럼의 최소 너비를 설정한다.
   *
   * @param colId - 대상 컬럼의 고유 ID
   * @param size - 설정할 최소 너비 (px)
   *
   * @remarks
   * 기존 최소 너비보다 크면 컬럼 너비도 업데이트된다.
   */
  setColumnMinSize(e, t) {
    const n = this._colManager.getColumn(e), o = n.minSize;
    n.setMinSize(t), n.minSize > o && this.setColumnWidth(e, t);
  }
  /**
   * @version ^2.22.1
   * 지정한 컬럼의 최대 너비를 설정한다.
   *
   * @param colId - 대상 컬럼의 고유 ID
   * @param size - 최대 너비 (px)
   *
   * @remarks
   * 기존 최대 너비보다 작으면 컬럼 너비도 업데이트된다.
   */
  setColumnMaxSize(e, t) {
    const n = this._colManager.getColumn(e), o = n.maxSize;
    n.setMaxSize(t), n.maxSize < o && this.setColumnWidth(e, t);
  }
  /**
   * @version ^2.22.1
   * 지정한 행의 최소 높이를 설정한다.
   *
   * @param rowId - 대상 행의 고유 ID
   * @param size - 최소 높이 (px)
   *
   * @remarks
   * 기존 최소 높이보다 크면 행 높이도 업데이트된다.
   */
  setRowMinSize(e, t) {
    const n = this._rowManager.getRow(e), o = n.minSize;
    n.setMinSize(t), n.minSize > o && this.setRowHeight(e, t);
  }
  /**
   * @version ^2.22.1
   * 지정한 행의 최대 높이를 설정한다.
   *
   * @param rowId - 대상 행의 고유 ID
   * @param size - 최대 높이 (px)
   *
   * @remarks
   * 기존 최대 높이보다 작으면 행 높이도 업데이트된다.
   */
  setRowMaxSize(e, t) {
    const n = this._rowManager.getRow(e), o = n.maxSize;
    n.setMaxSize(t), n.maxSize < o && this.setRowHeight(e, t);
  }
  /**
   * command 처리 제거용 (벌크 addRow 성능)
   */
  _addRow(e = this._rowHeaderInfo.defaultSize) {
    const t = K(e, this.minRowHeight, this.maxRowHeight), n = this._createIRGridRow(this._rowManager.getNextRowId(), this.height, t);
    return this._rowManager.addRow(n), n.rowId;
  }
  _createBulkRows(e, t) {
    for (let n = 0; n < e; n++)
      this._addRow(t);
    this._scheduleManager.scheduleAddRowTasks();
  }
  addRow(e) {
    return this._scheduleManager.scheduleAddRowTasks(), this._addRow(e);
  }
  /**
   * {@link removeRows}의 단일 행 제거 버전이다.
   * @command removeRows 호출로 command화
   * @param row - 삭제하려는 행의 index
   * @returns
   * @example
   * ```ts
   * // 2번째 행을 삭제한다.
   * grid.removeRow( 2 );
   * ```
   */
  removeRow(e) {
    return this.removeRows(e, e);
  }
  /**
   * {@link removeColumns}의 단일 열 제거 버전이다.
   * @command removeColumns 호출로 command화
   * @param col - 삭제하려는 열의 index
   * @returns
   * @example
   * ```ts
   * // 2번째 열을 삭제한다.
   * grid.removeColumn( 2 );
   * ```
   */
  removeColumn(e) {
    return this.removeColumns(e, e);
  }
  removeRows(e, t, n) {
    if (e < this.headerRows)
      throw new Error("Could not remove rows in header rows!");
    if (t >= this.getRowCount())
      throw new Error(`Out of index. maximum bottom values is ${this.getRowCount() - 1}. If you wanna clear all rows, please call clearRows()`);
    if (this._mergeHandler.checkConflictingInRows(e, t)) return !1;
    this._rowManager.runFuncEachRow((o) => {
      for (const r of o.getCellGenerator())
        r.isMerged && this._mergeHandler.removeMergeCell(r.row, r.col);
    }, e, t + 1), this._rowManager.removeRows(e, t, n), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection");
  }
  removeColumns(e, t) {
    if (e < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (t >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    return this._mergeHandler.checkConflictingInColumns(e, t) ? !1 : (this._rowManager.runFuncEachRow((n) => {
      for (const o of n.getCellGenerator(e, t))
        o.isMerged && this._mergeHandler.removeMergeCell(o.row, o.col);
    }), this._rowManager.removeColumns(e, t), this._colManager.removeColumns(e, t), this._gridStore.hook.emit("columnChanged", [e, t, "removeColumns"]), this._scheduleManager.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("resizeGridWrapperWidth").addTask("adjustSelection").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), !0);
  }
  _addColumn(e = this._colHeaderInfo.defaultSize) {
    const t = K(e, this.minColWidth, this.maxColWidth), n = this._createIRGridColumn(this._colManager.length, this._colManager.columnsWidth, t);
    return this._colManager.addColumn(n), this._rowManager.addColumn((o) => this._createIRGridCell(o.rowId, n.columnId)), this._gridStore.hook.emit("columnChanged", [n.columnId, n.columnId, "addColumn"]), this._scheduleManager.addTask("resizeGridWrapperWidth").addTask("virtualRender"), n.columnId;
  }
  addColumn(e) {
    return this._scheduleManager.addTask("generateScrollBarClass"), this._addColumn(e);
  }
  /**
   * {@link insertRow}의 단일 행 삽입 버전이다.
   * @command
   * @param row
   * @param height
   * @returns
   */
  insertRow(e, t) {
    return this.insertRows(e, 1, t);
  }
  insertRows(e, t = 1, n = this._rowHeaderInfo.defaultSize) {
    const o = this.getRowCount(), r = K(e, this.headerRows, o);
    if (!this._mergeHandler.checkCanInsertRow(r)) return !1;
    const i = K(n, this.minRowHeight, this.maxRowHeight);
    if (r === o)
      return P(t).forEach(() => this.addRow(i)), !0;
    const a = P(t).map((d) => this._createIRGridRow(r + d, 0, i));
    return this._rowManager.insertRows(r, a), this._scheduleInsertRowTasks(), !0;
  }
  _scheduleInsertRowTasks() {
    this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("generateScrollBarClass").addTask("resizeGridWrapperHeight").addTask("adjustSelection");
  }
  /**
   *
   * @version ^2.17.0
   */
  insertRowByList(e) {
    this._rowManager.insertRowByList(e), this._scheduleInsertRowTasks();
  }
  /**
   * {@link insertColumn}의 단일 열 삽입 버전이다.
   * @command
   * @param col - 삽입하려는 열의 index
   * @param width - 삽입하려는 열의 넓이
   * - 미 지정 시, IRGrid 생성 시 선언한 `colHeader.defaultSize` 값이 적용된다.
   * @returns
   * @example
   * ```ts
   * grid.insertColumn( 2, 100 );
   *
   * grid.insertColumn( 2 );
   * ```
   */
  insertColumn(e, t) {
    return this.insertColumns(e, 1, t);
  }
  insertColumns(e, t = 1, n = this._colHeaderInfo.defaultSize) {
    const o = this.getColCount(), r = K(e, this.headerColumns, o);
    if (!this._mergeHandler.checkCanInsertColumn(e)) return !1;
    const i = K(n, this.minColWidth, this.maxColWidth);
    if (r === o) {
      for (let d = 0; d < t; d++)
        this.addColumn(i);
      return !0;
    }
    const a = P(t).map((d) => this._createIRGridColumn(r + d, 0, i));
    return this._colManager.insertColumns(e, a), this._rowManager.insertColumns(e, t, (d, c) => this._createIRGridCell(d, c)), this._gridStore.hook.emit("columnChanged", [e, e + t - 1, "insertColumns"]), this._scheduleManager.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("resizeGridWrapperWidth").addTask("virtualRender").addTask("adjustSelection"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), !0;
  }
  /**
   * {@link autoSizeColumn}의 단일 열 버전이다.
   * @command autoSizeColumns
   * @param col - 자동 조정하려는 열의 index
   * @example
   * ```ts
   * // 2번째 열의 크기를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * grid.autoSizeColumn( 2 );
   * ```
   */
  autoSizeColumn(e) {
    this.autoSizeColumns(e, e);
  }
  /**
   *
   * @command
   */
  /**
   * 지정한 범위의 열들의 크기를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * @param left - 자동 조정하려는 열의 시작 index
   * @param right - 자동 조정하려는 열의 끝 index (right index까지 포함된다.)
   * @example
   * ```ts
   * // 0 ~ 2까지의 열의 크기를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * grid.autoSizeColumns( 0, 2 );
   * ```
   */
  autoSizeColumns(e, t) {
    P(e, t + 1).forEach((n) => {
      const o = Math.ceil(this._gridStore.rowManager.getMaxCellWidth(n, n + 1));
      o !== this.getColumnWidth(n) && this.setColumnWidth(n, o);
    });
  }
  /**
   * {@link autoSizeRows}의 단일 행 버전이다.
   * @command autoSizeRows
   * @param row
   */
  autoSizeRow(e) {
    this.autoSizeRows(e, e);
  }
  /**
   * 지정한 행들의 높이를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * @command
   * @param top - 자동 조정하려는 행의 시작 index
   * @param bottom - 자동 조정하려는 행의 끝 index (bottom index까지 포함된다.)
   * @example
   * ```ts
   * grid.autoSizeRows(0, 10);
   * ```
   * @remarks
   * Tip
   * - autoSizeRows 기능은 많은 계산이 필요한 작업이므로, 대량의 행을 한 번에 처리할 때 성능에 영향을 줄 수 있다.
   * - 대량의 행을 처리할 때는, 모든 셀 작업을 끝낸 후, 마지막에 한 번에 처리하는 것이 좋다.
   */
  autoSizeRows(e, t) {
    this._rowManager.runFuncEachRow((n) => {
      const o = n.rowInnerHeight;
      o !== n.height && this.setRowHeight(n.rowId, o);
    }, e, t + 1);
  }
  /**
   * 선택되어 있는 영역의 클립보드를 복사한다.
   * @returns
   * @example
   * ```ts
   * grid.copyToClipboard();
   * ```
   */
  copyToClipboard() {
    if (!this.getSelection()) {
      console.warn("No selection detected.");
      return;
    }
    this.focus(), document.execCommand("copy");
  }
  async _createClipboardGetter() {
    const e = {
      "ir-grid/cell": "",
      "text/html": "",
      "text/plain": ""
    };
    try {
      const t = (await _r.read()).flat();
      for await (const n of t)
        for (const o of ic)
          e[o] === "" && n.types.includes(o) && (e[o] = await Rr(await n.getType(o)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = Tr(St) ?? "";
    }
    return {
      getData(t) {
        return e[t] ?? "";
      }
    };
  }
  /**
   * - Clipboard API를 통해, IRGrid에 붙여넣기를 수행한다.
   * - https 보안 프로토콜 안에서 사용 가능하며, Clipboard Permission이 허용되어야 한다.
   * @remarks
   * ! firefox의 경우 Clipboard API를 지원하지 않는다.
   */
  async pasteFromClipboard() {
    const e = this.getSelection();
    if (!e) {
      console.warn("no selection, it needs selection to paste");
      return;
    }
    this.paste(
      e,
      wn(
        await this._createClipboardGetter()
      )
    );
  }
  /**
   * 지정된 범위에 셀 데이터를 붙여넣는다.
   * @param range - 붙여넣기를 적용할 기준 셀 범위
   * @param cellMetaInfoList - 붙여넣을 셀 메타 정보 이중 배열
   * @returns
   */
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = pl(this, this._pasteOptions), o = n.getPastingRange(e, t), { rowSpan: r, colSpan: i } = this._pasteOptions;
    if (r || i)
      for (const d of this._generator.getSelectionGenerator(o))
        r && d.mergeInfo.rowSpan > 1 && this.splitCells(d.row, d.col), i && d.mergeInfo.colSpan > 1 && this.splitCells(d.row, d.col);
    const a = n.beforePastingList(o, t);
    a.length !== 0 && (this.onClipboardBeforePaste(o), n.pasteTask(a), this.onClipboardAfterPaste(o), this.select(o));
  }
  /**
   * 특정 row index의 행이 존재하는지 여부를 반환한다.
   * @param row - 존재 여부를 확인하고자 하는 row index
   * @returns - `boolean`: 존재하면 `true`, 존재하지 않으면 `false`를 반환한다.
   * @example
   * ```ts
   * console.log( grid.hasRow(0) );
   * console.log( grid.hasRow(5) );
   * ```
   */
  hasRow(e) {
    return e < this.getRowCount();
  }
  /**
   * 특정 column index의 열이 존재하는지 여부를 반환한다.
   * @param col - 존재 여부를 확인하고자 하는 column index
   * @returns
   * @example
   * ```
   * console.log( grid.hasColumn( 10 ))
   * ```
   */
  hasColumn(e) {
    return e < this.getColCount();
  }
  clearCells(e, t = !1) {
    for (const n of this._generator.getSelectionGenerator(e))
      t && this.isFilteredRow(n.row) || this.onClearCellCheck(n) && n.clear();
  }
  setRowVisible(e, t) {
    return this._mergeHandler.checkConflictingInRows(e, e) ? !1 : (t === this.getRowVisible(e) || (this._rowManager.setRowVisible(e, t), this._scheduleRowTasks()), !0);
  }
  _scheduleRowTasks() {
    return this._scheduleManager.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection").addTask("updateSelectionByScroll");
  }
  /**
   * 대량의 행들을 보이거나 숨긴다.
   * @version ^2.10.0
   * @param startRowId - visible을 반영하기 위한 시작 row index
   * @param visibleArray - `startRowId`부터 순차적으로 보이기 여부를 지정한 배열
   * @example
   * ```ts
   * // 1번 부터 3개의 행 숨김
   * grid.setRowVisibleBulk( 1, [false, false, false] );
   *
   * // 10번 부터 10개의 행 숨김
   * grid.setRowVisibleBulk( 1, Array(10).fill(false) );
   * ```
   * @remarks
   * Tip
   * - 이 메서드는 행 충돌을 검사하지 않으므로, 숨기려는 행에 병합된 셀의 충돌이 발생할 수 있다.
   * - 이 메서드는 @command를 제공하지 않아 undo/redo가 지원되지 않는다.
   */
  setRowVisibleBulk(e, t) {
    this._rowManager.setRowVisibleBulk(e, t), this._scheduleRowTasks();
  }
  /**
   *
   * @version ^2.17.0
   */
  setRowFilter(e) {
    this._rowManager.setRowFilter(e), this.scrollOnRow(0), this._scheduleRowTasks();
  }
  /**
   * 특정 row index의 행이 보이는지 여부를 반환한다.
   * @param row - 보이기 여부를 확인하고자 하는 행의 index
   * @returns - `boolean`: 보이면 `true`, 보이지 않으면 `false`를 반환한다.
   */
  getRowVisible(e) {
    return this._rowManager.getRowVisible(e);
  }
  /**
   * 해당 행이 필터된 행인지 여부를 반환한다.
   * @version ^2.17.0
   */
  isFilteredRow(e) {
    return this.getRow(e).filtered;
  }
  setColumnVisible(e, t) {
    return this._mergeHandler.checkConflictingInColumns(e, e) ? !1 : (t === this.getColumnVisible(e) || (this._colManager.setColumnVisible(e, t), this._rowManager.setColumnVisible(e, t), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection").addTask("resizeGridWrapperWidth").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), this._gridStore.hook.emit("columnChanged", [e, e, "setVisible"])), !0);
  }
  /**
   * 특정 열이 보이는지 여부를 반환한다.
   * @param col - 보이기 여부를 확인하고자 하는 열의 index
   * @returns
   * @example
   * ```ts
   * console.log( grid.getColumnVisible( 20 ) );
   * ```
   */
  getColumnVisible(e) {
    return this._colManager.getColumnVisible(e);
  }
  /**
   * 현재 그리드 인스턴스와 연결된 셀 탐색기(Finder)를 생성한다.
   * @param args - 셀 탐색 설정 옵션. 생략 시 기본값이 사용된다.
   * @returns
   */
  createFinder(e = {}) {
    return Da(this, e);
  }
  /**
   * 지정한 열을 선택한다. {@link selectColumns}를 기반으로 호출한다.
   * @param col - 선택하고자 하는 column index
   * @example
   * ```ts
   * grid.selectColumn( 4 );
   * ```
   */
  selectColumn(e) {
    this.selectColumns(e, e);
  }
  /**
   * - 지정한 범위의 열을 선택한다.
   * - `left`와 `right`는 headerColumns, headerRows를 포함하지 않는다.
   * @param left - 선택하고자 하는 열의 시작 index
   * @param right - 선택하고자 하는 열의 끝 index (right index까지 포함된다.)
   * @param activeCell - 선택 후 활성화될 객체 (기본값은 현재 활성화 된 셀)
   * @returns
   * @example
   * ```ts
   * grid.selectColumns( 1, 9 );
   *
   * grid.selectColumns( 1, 9, grid.getCell( 1, 1 ) );
   * ```
   */
  selectColumns(e, t, n = this.activeCell) {
    e < this.headerColumns || this.headerRows < this.getRowCount() && this.selectRange(this.headerRows, e, this.getRowCount() - 1, t, n ?? this.cell(this.headerRows, e));
  }
  /**
   * 지정한 row index의 행을 선택한다. {@link selectRows}를 기반으로 호출
   * @param row - 선택하고자 하는 row index
   * @param activeCell - 선택 후 활성화할 셀 객체 (기본값은 현재 활성화 된 셀)
   * @example
   * ```ts
   * grid.selectRow( 4 );
   * grid.selectRow( 4, grid.getCell(4, 4) );
   * ```
   */
  selectRow(e, t = this.activeCell) {
    this.selectRows(e, e, t);
  }
  /**
   * 지정한 row 범위 행을 선택한다. {@link selectRange}를 기반으로 호출
   * @param top - 선택하고자 하는 top row index
   * @param bottom - 선택하고자 하는 bottom row index
   * @param activeCell - 선택 후 활성화할 셀 객체 (기본값은 현재 활성화된 셀)
   * @example
   * ```ts
   * grid.selectRows( 1, 3 );
   * ```
   */
  selectRows(e, t, n = this.activeCell) {
    e < this.headerRows || this.selectRange(e, this.headerColumns, t, this.getColCount() - 1, n ?? this.cell(e, this.headerColumns));
  }
  /**
   * 현재 IRGrid viewport에 항상 보이는 행 개수를 지정한다.
   * @param freezingRowCount - header를 제외한 viewport에 항상 보이는 고정 행 개수
   * @example
   * ```ts
   * grid.freezeRows( 2 );
   * ```
   */
  freezeRows(e) {
    this._rowManager.freezeRows(e), this._scheduleManager.addTask("virtualRender").addTask("updateSelection");
  }
  /**
   * columnId까지의 컬럼을 고정함 (3인 경우, 0~3까지 열이 고정됨)
   * @deprecated 호환성을 위해 남겨둠 (이 API대신 freezeColumn API를 사용할 것)
   * @param columnId - 고정할 열 id
   */
  freezeColumns(e) {
    this.freezeColumn(e + 1 - this.headerColumns);
  }
  /**
   * 현재 고정된 열 이후 freezingColumnCount 만큼의 열을 고정한다.
   * @param freezingColumnCount - 열을 고정하고 싶은 개수
   */
  freezeColumn(e) {
    if (e < 0)
      throw new Error("Could not be freezing minus columns!");
    if (e > this.getColCount() - this.headerColumns)
      throw new Error("Could not be freezing after last column");
    this._colManager.freezeColumns(e), this._scheduleManager.addTask("updateSelection").addTask("updateSelectionByScroll").addTask("updateRowsStickyLeft").addTask("virtualRender");
  }
  /**
   * 실행 취소(Undo) 기록을 모두 초기화한다.
   */
  clearUndoStack() {
    this.commandManager.clearCommands();
  }
  /**
   *
   * @deprecated IRGrid.copyOptions = {...} 또는 IRGrid.pasteOptions = {...}를 사용해주세요.
   */
  setClipboardOptions(e) {
    this.copyOptions = e;
  }
  /**
   * 행들을 비교해서 순서에 맞게 정렬한다.
   * @param compareFunc - 비교하는 함수
   * @param order - 순서의 규칙을 지정
   * @param startRowId - 순서 정렬 범위에 해당하는 시작 row index
   * @param endRowId - 순서 정렬 범위에 해당하는 마지막 row index
   */
  sort(e, t, n, o) {
    const r = Math.max(n ?? this.headerRows, this.headerRows), i = Math.min(o ?? this.getRowCount(), this.getRowCount());
    this._rowManager.sort(e, t, r, i), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * 지정한 범위에 있는 병합(merge) 셀들을 분할한다.
   * @param range - 지정할 범위 정보를 담은 객체
   */
  splitCellsByRange(e) {
    for (const t of this._generator.getSelectionGenerator(e)) {
      const n = t.mergeInfo.rowSpan > 1 || t.mergeInfo.colSpan > 1 ? t : t.mergeMain;
      n && this.splitCells(n.row, n.col);
    }
  }
  /**
   *
   * @deprecated
   */
  selectMultipleCellAddress(e) {
    e.length > 0 && this.selectCell(e[0][0], e[0][1]);
  }
  /**
   *
   * @deprecated
   */
  selectMultipleCells(e) {
    e.length > 0 && this.selectCell(e[0].row, e[0].col);
  }
  /**
   *
   * @deprecated
   */
  getSelectionMode() {
    return "range";
  }
  /**
   * 현재 선택된 셀 객체를 배열로 반환한다. 단, 선택된 셀이 없을 경우 빈 배열을 반환한다.
   * @returns
   */
  getSelectedCells() {
    const e = this.getSelection();
    return e ? [this.cell(e.top, e.left)] : [];
  }
  /**
   * {@link exchangeRows}의 단일 행 버전이다.
   * @command
   * @param source - 교환할 첫 번째 행의 인덱스
   * @param target - 교환할 두 번째 행의 인덱스
   */
  exchangeRow(e, t) {
    this.exchangeRows([e, e], [t, t]);
  }
  exchangeRows(e, t) {
    if (e.some((n) => this._rowManager.isInvalidRowId(n)) || t.some((n) => this._rowManager.isInvalidRowId(n)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((n) => n < this.getFreezedRowCount()) || t.some((n) => n < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be exchanged!");
    if (this._mergeHandler.checkConflictingInRows(...e) || this._mergeHandler.checkConflictingInRows(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this._rowManager.exchangeRows(e, t), this.onExchangedRows(e, t), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * {@link exchangeColumns}의 단일 열 버전이다.
   * @command
   */
  exchangeColumn(e, t) {
    this.exchangeColumns([e, e], [t, t]);
  }
  exchangeColumns(e, t) {
    if (e.some((n) => this._colManager.isInvalidColumnId(n)) || t.some((n) => this._colManager.isInvalidColumnId(n)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((n) => n < this.getFreezedColumnCount()) || t.some((n) => n < this.getFreezedColumnCount()))
      throw new Error("Freezed(header) column cannot be exchanged!");
    if (this._mergeHandler.checkConflictingInColumns(...e) || this._mergeHandler.checkConflictingInColumns(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this._rowManager.runFuncEachRow((n) => n.exchangeCells(e, t)), this.onExchangedColumns(e, t), this._scheduleManager.addTask("adjustSelection").addTask("virtualRender");
  }
  /**
   * {@link moveRows}의 단일 행 버전이다.
   * @command
   * @param source - 이동시킬 행
   * @param targetRow - 이동하고 싶은 행의 위치
   */
  moveRow(e, t) {
    this.moveRows([e, e], t);
  }
  moveRows(e, t) {
    if (e.some((o) => this._rowManager.isInvalidRowId(o)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((o) => o < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be Moved!");
    if (this._mergeHandler.checkConflictingInRows(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this._rowManager.getAdjustTargetRow(t);
    this._rowManager.moveRows(e, n), this.onMovedRows(e, n), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * {@link moveColumns}의 단일 열 버전이다.
   * @command
   * @param source
   * @param targetCol
   */
  moveColumn(e, t) {
    this.moveColumns([e, e], t);
  }
  moveColumns(e, t) {
    if (e.some((o) => this._colManager.isInvalidColumnId(o)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((o) => o < this.getFreezedColumnCount()))
      throw new Error("Freezed(header) column cannot be Moved!");
    if (this._mergeHandler.checkConflictingInColumns(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this._getAdjustTargetColumn(t);
    this._rowManager.runFuncEachRow((o) => o.moveCells(e, n)), this.onMovedColumns(e, n), this._scheduleManager.addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * - 해당 행의 시작 행 인덱스를 반환한다. (일반적으로 row 값 그대로 반환)
   * - 지정한 행이 병합된 셀의 일부일 경우, 해당 병합 그룹의 시작 행 인덱스를 반환한다.
   * @param row - 기준이 되는 row index
   * @returns
   * @example
   * ```ts
   * // row 5가 3~5 병합 셀의 일부라면, 결과는 3
   * const startRow = grid.getStartOfRowId( 5 );
   * ```
   */
  getStartOfRowId(e) {
    return this._rowManager.getStartOfRowId(e);
  }
  /**
   * - 해당 열의 시작 열 인덱스를 반환한다. (일반적으로 column 값 그대로 반환)
   * - 지정한 열이 병합된 셀의 일부일 경우, 해당 병합 그룹의 시작 열 인덱스를 반환한다.
   * @param col - 기준이 되는 column index
   * @returns
   * @example
   * ```ts
   * // column 6가 1~6 병합 셀의 일부라면, 결과는 1
   * const startColumn = grid.getStartOfColumnId( 6 );
   * ```
   */
  getStartOfColumnId(e) {
    return this._rowManager.getStartOfColumnId(e);
  }
  /**
   *
   * @deprecated
   */
  getSelectedMultipleCellAddress() {
    const e = this.getSelection();
    return e ? [[e.top, e.left]] : [];
  }
  /**
   * 현재 단일 셀이 선택되었으면 true 반환, 그외 false (선택 영역 없거나 또는 2개 이상 셀 영역 선택)
   * @deprecated
   */
  isSelectedSingleCell() {
    const e = this.getSelection();
    if (!e) return !1;
    const { top: t, left: n, bottom: o, right: r } = e;
    if (t === o && n === r) return !0;
    const i = this.getRow(t).getCell(n);
    return o === i.bottom && r === i.right;
  }
  /**
   * @deprecated
   */
  render() {
    this._rowManager.renderRows();
  }
  /*
   * Object Events
   */
  /**
   * 셀을 클릭하거나 선택된 범위가 변경되었을 때, activeCell이 호출된다.
   * @deprecated 같은 셀을 클릭하여도 발동하여 성능 이슈가 있으므로, 더블 클릭 등의 기능과 연계할 떄는 {@link onChangeCell}을 사용할 것.
   * @event
   */
  onSelectCell(e) {
  }
  /**
   * 현재 activeCell이 변경되었을 때 호출된다.
   *
   * 사용자가 다른 셀을 클릭하거나 키보드로 셀을 이동했을 때처럼,
   * 이전 activeCell과 현재 activeCell이 다른 경우에만 호출된다.
   *
   * @event
   * @version ^2.16.0
   * @param cellOrNull
   * @example
   * ```ts
   * grid.onChangeCell = ( cellOrNull ) => {
   *      console.log( cellOrNull );
   * }
   * ```
   */
  onChangeCell(e) {
  }
  /**
   * 셀 선택을 해제하거나 activeCell이 null로 설정되면 호출된다.
   *
   * @event
   * @example
   * ```ts
   * grid.onActiveCellNull = () => {
   *      console.log("active cell이 없습니다.")
   * }
   * ```
   */
  onActiveCellNull() {
  }
  /**
   * 셀의 편집이 완료되었을 때 호출된다.
   * @event
   *
   * @param _cell - 편집이 완료된 셀 객체
   * @param _isChanged - 편집 후 값이 이전 값과 다른 경우 true
   * @param _beforeText - 편집 전 셀의 원래 텍스트 값
   * @param _endKeyCode - 편집 종료 시 사용된 키 코드
   * @param _selStart - 편집 시 선택 영역의 시작 위치
   * @param _selEnd - 편집 시 선택 영역의 끝 위치
   *
   * @example
   * ```ts
   * grid.onEditCellDone = ( cell, isChanged, beforeText, endKeyCode, selStart, selEnd ) => {
   *      console.log( cell, isChanged, beforeText, endKeyCode, selStart, selEnd )
   * }
   * ```
   */
  onEditCellDone(e, t, n, o, r, i) {
  }
  /**
   * 단일 셀을 선택하거나, 범위를 지정하여 선택할 때 호출된다.
   * @event
   *
   * @param selectionOrNull - 현재 선택된 셀 범위 객체, 선택이 없으면 null
   * @param prevOrNull - 직전 선택 범위 객체, 직전 상태가 없었으면 null
   * @example
   * ```ts
   * grid.onSelectChanged = ( selectionOrNull, prevOrNull ) => {
   *     console.log( selectionOrNull, prevOrNull);
   * }
   * ```
   */
  onSelectChanged(e, t) {
  }
  /**
   * 셀의 텍스트 또는 값(value)을 초기화할 때 호출된다.
   *
   * @event
   * @param _cell - 초기화된 셀 객체
   * @example
   * ```ts
   * grid.onClearCell = ( _cell ) => {
   *      console.log( _cell );
   * }
   * ```
   */
  onClearCell(e) {
  }
  /**
   * 지정한 셀 범위의 값을 초기화하는 {@link clearCells}가 실행될 떄 호출되며, 해당 셀의 값의 초기화 가능 여부를 리턴한다.
   *
   * @event
   * @param cell - 초기화할 셀의 정보
   * @returns 초기화 가능 여부(true 가능 / false 불가능) 리턴
   */
  onClearCellCheck(e) {
    return e.canClear;
  }
  /**
   * 컬럼 헤더 셀을 클릭했을 때 호출된다.
   *
   * @event
   * @param cell - 클릭한 셀 객체
   * @param ev - mouseEvent 객체
   */
  onColumnClick(e, t) {
  }
  /**
   * 행 헤더 셀을 클릭했을 때 호출된다.
   *
   * @event
   * @param cell - 클릭한 셀 객체
   * @param ev - mouseEvent 객체
   */
  onRowClick(e, t) {
  }
  /**
   * 그리드 내에 셀이 생성될 때 호출된다.
   *
   * @event
   * @param _cell - 생성되는 셀 객체
   */
  onCreatingCell(e) {
  }
  /**
   * 셀에서 마우스 오른쪽 클릭 시 호출된다.
   *
   * @event
   * @param _cell - 오른쪽 클릭한 셀의 객체
   * @param _ev - mouseEvent 객체
   */
  onCellRightClick(e, t) {
  }
  /**
   * 셀 편집 중 키보드를 눌렀을 때 호출된다.
   *
   * @event
   * @param _event - keyboardEvent 객체
   * @param _row - 편집 중인 셀의 행 인덱스
   * @param _col - 편집 중인 셀의 열 인덱스
   * @param _data - 편집 중인 셀의 데이터 속성 객체
   * @example
   * ```ts
   * grid.onEditKeyDown = ( ev, row, col, data ) =>
   * {
   *     console.log( `Cell Key Events row : ${row}, col: ${col}` );
   *     console.log( data );
   *     console.log( ev );
   * };
   * ```
   */
  onEditKeyDown(e, t, n, o) {
  }
  /**
   * 셀 편집 중 입력 이벤트 발생 시 호출된다.
   *
   * @event
   * @param _event - 입력 중 발생한 이벤트 객체 (InputEvent 또는 KeyboardEvent)
   * @param text - 현재 입력된 텍스트 값
   * @param _cell - 입력 중인 셀 객체 정보
   * @example
   * ```ts
   * grid.onEditInput = ( ev, text, cell ) =>
   * {
   *      console.log( `입력된 값: ${text}` );
   * }
   * ```
   */
  onEditInput(e, t, n) {
  }
  /**
   * 새로운 행(row)이 화면에 마운트된 후 호출된다.
   *
   * @event
   * @param _row - 마운트된 행의 인덱스
   * @example
   * ```ts
   * // 마운트된 후 자동 높이 조정
   * grid.onMountedRow = ( row ) => grid.autoSizeRow( row );
   * ```
   */
  onMountedRow(e) {
  }
  /**
   * 셀에 붙여넣기 작업이 시작되기 전에 호출된다.
   *
   * 붙여넣기 허용 여부를 boolean 또는 옵션 객체로 반환할 수 있다.
   *
   * @event
   * @param _cell - 붙여넣기 대상 셀의 정보
   * @param _text - 클립보드로부터 붙여넣기 시도되는 텍스트
   * @returns 붙여넣기 허용 여부 (true/false) 또는 IRGridCellPasteOption 객체
   * ```ts
   * grid.onClipboardBeforePasteCell = ( cell, text ) =>
   * {
   *      console.log( cell, text );
   *
   *      // 붙여넣기 불가
   *      return false;
   * }
   * ```
   */
  onClipboardBeforePasteCell(e, t) {
    return !0;
  }
  /**
   * 여러 셀 범위에 대해 붙여넣기 작업이 시작되기 전에 호출된다.
   *
   * @event
   * @param _range - 붙여넣기 대상이 되는 셀 범위
   */
  onClipboardBeforePaste(e) {
  }
  /**
   * 셀에 붙여넣기 작업이 완료된 후에 호출된다.
   *
   * @event
   * @param _cell - 붙여넣기가 완료된 셀의 객체
   */
  onClipboardAfterPasteCell(e) {
  }
  /**
   * 여러 셀 범위에 대해 붙여넣기 작업이 완료된 후에 호출된다.
   *
   * @event
   * @param _range - 붙여넣기가 완료된 셀 범위 정보
   */
  onClipboardAfterPaste(e) {
  }
  /**
   * 붙여넣기 등으로 자동으로 행(row)이 추가되기 전에 호출된다.
   *
   * false를 리턴하면 행이 자동 생성되지 않으며, 기본 값 true를 리턴한다.
   *
   * @event
   * @param _row - 생성될 행의 인덱스
   * @returns - 행 생성 여부 (true: 생성, false: 생성 안 함)
   * @example
   * ```ts
   * grid.onAutoInsertRow = ( row ) =>
   * {
   *      console.log( `추가될 row: ${row}` );
   *
   *      // 자동 생성되지 않음
   *      return false;
   * }
   * ```
   */
  onAutoInsertRow(e) {
    return !0;
  }
  /**
   * 자동으로 행(row)이 추가된 후 호출된다.
   *
   * @event
   * @param _row - 추가된 행의 인덱스
   */
  onAutoInsertedRow(e) {
  }
  /**
   * 붙여넣기 등으로 자동으로 열(column)이 추가되기 전에 호출된다.
   *
   * false를 리턴하면 열이 자동 생성되지 않으며, 기본 값 true를 리턴한다.
   *
   * @event
   * @param _col - 생성될 열의 인덱스
   * @returns - 열 생성 여부 (true: 생성, false: 생성 안 함)
   * @example
   * ```ts
   * grid.onAutoInsertColumn = ( col ) =>
   * {
   *      console.log( `추가될 col: ${col}` );
   *
   *      // 자동 생성되지 않음
   *      return false;
   * }
   * ```
   *
   */
  onAutoInsertColumn(e) {
    return !0;
  }
  /**
   * 자동으로 열(column)이 추가된 후 호출된다.
   *
   * @event
   * @param _col - 추가된 열의 인덱스
   */
  onAutoInsertedColumn(e) {
  }
  /**
   * 셀을 더블 클릭했을 때 호출된다.
   *
   * 편집 모드 진입 등 사용자 상호작용을 제어할 때 사용할 수 있다.
   *
   * @event
   * @param cell - 더블 클릭한 셀 객체
   * @example
   * ```ts
   * grid.onDoubleClickCell = ( cell ) =>
   * {
   *      // 셀이 편집 가능한 상태일 때 더블 클릭하면 editMode로 변경되도록 설정
   *      if( cell.editable ) grid.doEditMode( cell, false, true );
   * }
   * ```
   */
  onDoubleClickCell(e) {
  }
  /**
   * 셀에 드래그된 항목이 드롭되었을 때 호출된다.
   *
   * @event
   * @param _row - 드롭 대상이 된 셀의 행 인덱스
   * @param _col - 드롭 대상이 된 셀의 열 인덱스
   * @param _ev - DragEvent 객체
   */
  onDropOnCell(e, t, n) {
  }
  /**
   * 셀에서 드래그를 시작할 때 호출된다.
   *
   * @event
   * @param cell - 드래그 시작한 셀의 정보
   * @param ev - DragEvent 객체
   * @returns 드래그 시작 허용 여부 (true: 허용, false: 취소)
   */
  onDragStartCell(e, t) {
    return !t.dataTransfer || !e.props.object ? !1 : (t.dataTransfer.setData("application/json", JSON.stringify(e.props.object)), !0);
  }
  /**
   * 특정 셀에 클립보드 텍스트를 붙여넣을 수 있는지 확인한다.
   *
   * 셀의 표시 여부, 읽기 전용 여부, 비활성화 여부, 클립보드 허용 여부 등을 종합적으로 검사하며,
   * 추가적으로 {@link onClipboardBeforePasteCell} 핸들러의 붙여넣기 허용 여부까지 반영됨.
   *
   * @event
   * @param cell - 붙여넣기 대상 셀의 정보
   * @param text - 클립보드로부터 붙여넣을 텍스트 값
   * @returns 붙여넣기 가능 여부 (true: 허용, false: 거부)
   */
  onCheckPasteCell(e, t) {
    return e.visible && e.onCheckReadonly() !== !0 && e.props.disabled !== !0 && e.props.clipboardEnabled !== !1 && this.onClipboardBeforePasteCell(e, t);
  }
  /**
   * 사용자가 수행한 가장 최근의 작업을 이전으로 되돌리는 undo 작업이 실행되었을 때 호출된다.
   *
   * @event
   * @param block - CommandBlock 객체
   */
  onUndo(e) {
  }
  /**
   * undo로 취소한 작업을 다시 실행하여 되돌린 작업을 복원하는 redo 작업이 실행되었을 떄 호출된다.
   *
   * @event
   * @param block - CommandBlock 객체
   */
  onRedo(e) {
  }
  /**
   * 복사 이벤트를 처리할 때 호출되며 클립보드와 in-memory 클립보드에 저장한다.
   *
   * @event
   * @param ev - ClipboardEvent 객체
   */
  onNativeCopy(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    const n = this._gridRangeUtils.getCellMatrixByRange(t), { rowSpan: o, colSpan: r } = this._copyOptions, a = (this._copyOptions.skipFiltered ? n.filter(([d]) => !this.isFilteredRow(d.row)) : n).map((d) => d.map((c) => ({
      text: this.onCopyCellText(c),
      cellVisible: c.mergeMain === void 0,
      rowSpan: o ? c.mergeInfo.rowSpan : 1,
      colSpan: r ? c.mergeInfo.colSpan : 1,
      isFormatted: !1
    })));
    Cn(e.clipboardData, a), en(St, JSON.stringify(a)), this.focus(), this.onCopy(), e.preventDefault();
  }
  /**
   * 셀 복사 시 복사된 셀의 텍스트 값을 반환한다.
   *
   * @event
   * @param cell - 복사된 셀의 정보
   * @returns 복사된 셀의 텍스트 값
   */
  onCopyCellText(e) {
    return e.text;
  }
  /**
   * 잘라내기 이벤트를 처리할 때 호출된다.
   *
   * @event
   * @param ev - ClipboardEvent 객체
   */
  onNativeCut(e) {
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    this.onNativeCopy(e), this.commandManager.doRecording("Cut", () => {
      this.clearCells(t);
    }), e.preventDefault();
  }
  /**
   * 붙여넣기 이벤트를 처리할 때 호출된다.
   *
   * @event
   * @param ev - ClipboardEvent 객체
   */
  onNativePaste(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("it needs selection to paste");
    const n = wn(e.clipboardData);
    this.commandManager.doRecording("Paste", () => {
      this.paste(t, n);
    }), e.preventDefault();
  }
  /**
   * 여러 셀 복사 이벤트를 처리할 때 호출되며 클립보드와 in-memory 클립보드에 저장한다.
   *
   * @event
   * @param ev - ClipboardEvent 객체
   * @param cells - 복사된 셀의 정보
   */
  onMultipleCellsNativeCopy(e, t) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    if (t.length === 0) throw new Error("Detected copy without multi selection");
    const { rowSpan: n, colSpan: o, skipFiltered: r } = this._copyOptions;
    r && (t = t.filter((d) => this.isFilteredRow(d.row) === !1));
    const i = Or(t, (d) => d.row.toString());
    if (!Wr(i))
      return console.warn("Copy failed: selected cells must form a rectangle."), !1;
    const a = Object.entries(i).map(([d, c]) => c.map(
      (l) => ({
        text: this.onCopyCellText(l),
        cellVisible: l.mergeMain === void 0,
        rowSpan: n ? l.mergeInfo.rowSpan : 1,
        colSpan: o ? l.mergeInfo.colSpan : 1,
        isFormatted: !1
      })
    ));
    return Cn(e.clipboardData, a), en(St, JSON.stringify(a)), this.focus(), this.onCopy(), e.preventDefault(), !0;
  }
  /**
   * 지정된 두 행 범위를 서로 교환하는 {@link exchangeRows}가 발생할 때 호출된다.
   *
   * @event
   * @param _source - 교환할 첫 번째 행 범위
   * @param _target - 교환할 두 번째 행 범위
   *
   */
  onExchangedRows(e, t) {
  }
  /**
   * 지정된 두 열 범위를 서로 교환하는 {@link exchangeColumns}가 발생할 떄 호출된다.
   *
   * @event
   * @param _source - 교환할 첫 번째 열 범위
   * @param _target - 교환할 두 번째 열 범위
   */
  onExchangedColumns(e, t) {
  }
  /**
   * 행을 이동하는 {@link moveRows}가 발생할 때 호출된다.
   *
   * @event
   * @param _source - 이동시킬 범위의 행
   * @param _targetRow - 이동하고 싶은 행의 위치
   */
  onMovedRows(e, t) {
  }
  /**
   * 열을 이동하는 {@link moveColumns}가 발생할 때 호출된다.
   *
   * @event
   * @param _source - 이동시킬 범위의 열
   * @param _targetCol - 이동하고 싶은 열의 위치
   */
  onMovedColumns(e, t) {
  }
  __setEditMode(e) {
    this._gridContext.gridModeState.next({
      mode: "edit-cell",
      contextParam: { cell: e }
    });
  }
  doEditMode(e, t = !1, n = !1) {
    if (!e.isConnected || !e.editable || !this.getCellVisible(e.row, e.col))
      return !1;
    const o = this._gridStore.gridTextarea;
    o.onEditDone = (r, i, a, d, c, l) => {
      this.onEditCellDone(r, i, a, d, c, l), this._gridContext.gridModeState.value.mode !== "idle" && this._gridContext.setIdle();
    }, o.onEditKeyDown = (r, i, a, d) => this.onEditKeyDown(r, i, a, d), o.onEditInput = (r, i) => this.onEditInput(r, i, e), o.onDragEnd = () => this.__setEditMode(e), o.onEnterOnEdit = () => {
      if (this.hook.emitSync("keyAction", [{}, "Enter"]) === !1) return;
      let r = this._gridStore.cursorManager.getNextYBelow(e.row, e.col, 1), i = e.col;
      if (e.row === r) {
        if (i = this._gridStore.cursorManager.getNextXRight(e.row, e.col, 1), e.col === i) return;
        r = this._gridStore.cursorManager.getFirstActiveRow();
      }
      this.scrollInView(r, i), this.selectCell(r, i), this.afterRender(() => this.doEditMode(this.cell(r, i), !1, !0));
    };
    try {
      return this.__setEditMode(e), this.activeCell !== e && this.selectCell(e.row, e.col), o.runEditMode(e, t, n), !0;
    } catch (r) {
      return console.error("IRGrid.doEditMode Error!", r), !1;
    }
  }
  /**
   * 복사 이벤트를 실행할 때 호출된다.
   *
   * @event
   */
  onCopy() {
  }
  /**
   * 마우스 우클릭 시 호출된다.
   *
   * @event
   * @param _ev - MouseEvent 객체
   * @param _cell - 마우스 우클릭을 실행한 셀의 정보
   */
  onContextMenu(e, t) {
  }
  /**
   * 셀 드래그시 호출된다.
   *
   * @event
   * @param _cell - 현재 drag 요소가 위치한 셀의 정보
   * @param _ev - DragEvent 객체
   * @returns 드래그 가능 여부 (true: 허용, false: 거부)
   */
  onDragOverCell(e, t) {
    return !0;
  }
  /*
   * Private Methods
   * protected _으로 시작하도록 함. 동적인 호출을 위해 외부 호출 가능성 염두
   */
  _getAdjustTargetColumn(e) {
    return e >= this._colManager.length ? this._colManager.length : e < this._colManager.freezedColumns ? this._colManager.freezedColumns : this._rowManager.getStartOfColumnId(e);
  }
  onCheckCellReadonly(e) {
    return this._readonly ? !0 : e.props.readonly === !0;
  }
  _initPlugins(e) {
    try {
      for (const t of e)
        this.addPlugin(t);
    } catch (t) {
      console.error("Plugin init error", t);
    }
  }
  _initTableRowCol() {
    P(this._colHeaderInfo.colCount).forEach(() => this.addColumn(this._colHeaderInfo.defaultSize)), this._createBulkRows(this._colHeaderInfo.rowCount + this._bodyInfo.rowCount);
  }
  _initGridCellPadding() {
    ne(this.contextElement, {
      [W.cellTopPadding]: `${this._gridStore.getThemeValue("grid.paddingTop")}px`,
      [W.cellLeftPadding]: `${this._gridStore.getThemeValue("grid.paddingLeft")}px`,
      [W.cellBottomPadding]: `${this._gridStore.getThemeValue("grid.paddingBottom")}px`,
      [W.cellRightPadding]: `${this._gridStore.getThemeValue("grid.paddingRight")}px`
    });
  }
  _getCellRenderer(e, t, n, o) {
    if (e === "col-header")
      return this._colHeaderInfo.cellRenderer;
    if (e === "row-header")
      return this._rowHeaderInfo.cellRenderer;
    if (e === "body-cell")
      return this._bodyInfo.cellRenderer;
    throw new Error("cellType must be 'col-header' or 'row-header' or 'body-cell'");
  }
  _getCellType(e, t) {
    const n = e < this.headerRows, o = !n && t < this.headerColumns;
    return n ? "col-header" : o ? "row-header" : "body-cell";
  }
  _getDefaultCellFormat(e, t) {
    const n = {
      gridStore: this._gridStore
    };
    return Object.assign(n, {
      ...this._defaultColumnCellFormat.all,
      ...this._defaultColumnCellFormat[t]
    }), e === "col-header" ? Object.assign(n, { dropDisabled: !0 }, this._defaultColumnCellFormat[`col_header_${t}`]) : e === "row-header" ? Object.assign(n, { dropDisabled: !0 }, this._defaultColumnCellFormat[`row_header_${t}`]) : Object.assign(n, this._defaultColumnCellFormat[`body_${t}`]), n;
  }
  _createIRGridCell(e, t) {
    const n = this._getCellType(e, t), o = n.endsWith("header") ? "th" : "td", r = this._getDefaultCellFormat(n, t), i = this._getCellRenderer(n, e, t, r), a = new jl({
      row: e,
      col: t,
      tag: o,
      cellType: n,
      cellRenderer: i,
      props: r
    });
    return a.onCheckReadonly = () => this.onCheckCellReadonly(a), this.onCreatingCell(a), a;
  }
  _createIRGridRow(e, t, n) {
    const o = new Yl({
      seq: this._rowSeq,
      grid: this,
      rowId: e,
      height: n,
      top: t,
      rowType: e < this.headerRows ? "header" : "body",
      minSize: this.minRowHeight,
      maxSize: this.maxRowHeight
    });
    return ++this._rowSeq, P(this.getColCount()).forEach((r) => {
      o.addCell(this._createIRGridCell(e, r)), this.getColumnVisible(r) || o.setColumnVisible(r, !1);
    }), o;
  }
  _createIRGridColumn(e, t, n) {
    return new Tl({
      columnId: e,
      width: n,
      left: t,
      minSize: this.minColWidth,
      maxSize: this.maxColWidth
    });
  }
}
U([
  j()
], B.prototype, "splitCells");
U([
  j()
], B.prototype, "mergeCells");
U([
  j()
], B.prototype, "setCellRenderer");
U([
  j()
], B.prototype, "setColumnWidth");
U([
  j()
], B.prototype, "setRowHeight");
U([
  j()
], B.prototype, "setCell");
U([
  j()
], B.prototype, "addRow");
U([
  j()
], B.prototype, "removeRows");
U([
  j()
], B.prototype, "removeColumns");
U([
  j()
], B.prototype, "addColumn");
U([
  j()
], B.prototype, "insertRows");
U([
  j()
], B.prototype, "insertColumns");
U([
  j()
], B.prototype, "clearCells");
U([
  j()
], B.prototype, "setRowVisible");
U([
  j()
], B.prototype, "setColumnVisible");
U([
  j()
], B.prototype, "exchangeRows");
U([
  j()
], B.prototype, "exchangeColumns");
U([
  j()
], B.prototype, "moveRows");
U([
  j()
], B.prototype, "moveColumns");
const ac = /^[-+]?\d+(\.\d+)?$/, cc = /^([-+])?0*(\d+)(\.\d+?)?0*$/;
function ed(s) {
  if (!ac.test(s)) return s;
  const e = cc.exec(s);
  if (!e) return s;
  const [t, n, o] = e.slice(1), r = [];
  return t && t !== "+" && r.push(t), n && r.push(n.replace(/\B(?=(\d{3})+(?!\d))/g, ",")), o && r.push(o), r.join("");
}
const td = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, nd = /^-?\d+(\.\d+)?$/;
export {
  td as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  nd as ALLOW_ONLY_NUMBER_PATTERN,
  jc as CellDropPlugin,
  Vc as ColumnFillPlugin,
  so as CustomCellRenderer,
  Bc as DefaultKeyPlugin,
  B as IRGrid,
  Mi as IRGridButtonRenderer,
  jl as IRGridCell,
  Ro as IRGridCellDropPlugin,
  Q as IRGridCellRenderer,
  qn as IRGridCheckboxRenderer,
  Ca as IRGridColumnFillPlugin,
  _i as IRGridDatePickerRenderer,
  zi as IRGridDefaultCellIconButtonRenderer,
  Ft as IRGridDefaultCellRenderer,
  wo as IRGridDefaultKeyPlugin,
  Kc as IRGridExchangeByHeaderCellPlugin,
  mo as IRGridMouseCellSelectorPlugin,
  Xc as IRGridMoveColumnsPlugin,
  qc as IRGridMoveRowsPlugin,
  Qc as IRGridMultiSelectCellPlugin,
  Yc as IRGridOverflowPanelPlugin,
  Sa as IRGridPopoverPlugin,
  bi as IRGridProgressRenderer,
  no as IRGridRadioCellRenderer,
  go as IRGridResizerPlugin,
  Yl as IRGridRow,
  Pc as IRGridRowFilterCellRenderer,
  Jc as IRGridRowFilterPlugin,
  Oi as IRGridRowNoHeaderCellRenderer,
  fa as IRGridRowSelectionPlugin,
  Ci as IRGridSelectCellRenderer,
  wa as IRGridSingleCellDragPlugin,
  Zc as IRGridTablePlugin,
  $c as MouseCellSelectorPlugin,
  Nc as ResizerPlugin,
  Gc as RowSelectionPlugin,
  de as STICKY_Z_INDEX,
  Uc as SingleCellDragPlugin,
  Nt as cellCompare,
  mn as cellTextToNum,
  oo as createCellContent,
  Hi as createCellContentWithIconButton,
  Fc as createCustomRenderer,
  Ha as createIRGridColumnSortManager,
  Wc as createInferenceSortHandler,
  gn as numberCheckDefault,
  ed as numberWithCommasFormatter,
  Hc as renderGridButton,
  Oc as renderGridCellDefault,
  Ac as renderGridCellIconButton,
  Ec as renderGridCheckbox,
  Tc as renderGridDatePicker,
  Lc as renderGridProgress,
  zc as renderGridRadio,
  Mc as renderGridSelect,
  Dc as renderRowNoHeaderCell
};
