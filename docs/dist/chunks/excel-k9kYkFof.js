import { c as M } from "./clone-CMP76bLO.js";
import { h as O, g as w } from "./pick-BLZiDVxr.js";
import { exceljs as A } from "../data-modules.js";
function x(t) {
  return t !== null && typeof t == "object" || Array.isArray(t);
}
function g(t, e) {
  const o = w(t), l = w(e), n = Array.isArray(t) ? [] : {};
  for (const s of o)
    n[s] = t[s];
  for (const s of l)
    x(e[s]) && O(t, s) && t[s] && x(t[s]) ? n[s] = g(t[s], e[s]) : n[s] = e[s];
  return n;
}
class R {
  constructor() {
    this._cached = /* @__PURE__ */ new Map(), this._curFont = "";
    const e = new OffscreenCanvas(0, 0).getContext("2d");
    if (!e)
      throw new Error("OffscreenCanvas not supported");
    this._context = e;
  }
  setFont(e, o) {
    this._curFont !== `${o} ${e}` && (this._curFont = `${o} ${e}`, this._context.font = `${o} ${e}`);
  }
  meatText(e) {
    const o = `${e}_${this._curFont}`, l = this._cached.get(o);
    if (l)
      return l;
    const n = this._context.measureText(e).width;
    return this._cached.set(o, n), n;
  }
}
const F = /* @__PURE__ */ (() => {
  let t = null;
  return function() {
    return t || (t = new R()), t;
  };
})();
function I(t, e, o) {
  const l = F();
  return l.setFont(e, o), l.meatText(t);
}
function v(t) {
  return typeof t.value == "boolean" ? t.value ? "TRUE" : "FALSE" : t.value instanceof Date ? "9999-99-99" : t.text;
}
class N {
  constructor(e) {
    this.args = e;
  }
  onBeforeDataProcess(e, o) {
  }
  onAfterDataProcess(e, o) {
  }
}
const T = 11, $ = 10, b = 0.15;
function C(t) {
  return typeof t == "object" && t !== null && !(t instanceof Date);
}
class z extends N {
  constructor(e) {
    super({
      autoSizeColumns: e.autoSizeColumns ?? !1,
      mainSheetName: e.mainSheetName ?? "data",
      imageResources: e.imageResources ?? [],
      imagesOnSheet: e.imagesOnSheet ?? [],
      columnWidthList: e.columnWidthList ?? [],
      commonStyle: e.commonStyle ?? {},
      rowHeightList: e.rowHeightList ?? [],
      columnStyle: e.columnStyle ?? {},
      extraSheetList: e.extraSheetList ?? []
    });
  }
  _applyStyleAttrs(e, o) {
    const l = o.reduce((a, m) => Math.max(a, m.length), 0), n = this.args.commonStyle || {}, s = o.length;
    for (let a = 0; a < l; ++a) {
      const m = this.args.columnStyle[a], f = m ? g(n || {}, m) : M(n || {}), y = Object.keys(f).length > 0;
      for (let u = 0; u < s; ++u) {
        const c = o[u][a], r = u + 1, h = a + 1, i = e.getCell(r, h);
        C(c) ? (c.cellMerged && e.mergeCells(r, h, u + (c.cellMerged.rowSpan ?? 1), a + (c.cellMerged.colSpan ?? 1)), c.style ? i.style = g(f, c.style) : y && (i.style = f), c.comment && (i.note = c.comment)) : y && (i.style = f);
      }
    }
  }
  _insertImages(e) {
    this.args.imagesOnSheet.forEach(({ imageNo: o, row: l, col: n, width: s, height: a }) => {
      e.addImage(o, {
        tl: { row: l, col: n },
        ext: { width: s, height: a }
      });
    });
  }
  addNewSheet(e, o, l) {
    var u;
    const n = e.addWorksheet(l.mainSheetName), {
      columnWidthList: s = [],
      rowHeightList: a = []
    } = l;
    (u = l.imageResources) == null || u.forEach((c) => e.addImage(c)), f(), this._applyStyleAttrs(n, o), this._insertImages(n), this.args.autoSizeColumns ? m() : s.forEach((c, r) => n.getColumn(r + 1).width = c), a.forEach((c, r) => n.getRow(r + 1).height = c);
    function m() {
      const c = n.columns.length;
      for (let r = 0; r < c; r++) {
        const h = n.getColumn(r + 1);
        let i = s[r + 1] ?? $;
        h.eachCell({ includeEmpty: !1 }, (d) => {
          var S, p;
          const _ = `${((S = d.font) == null ? void 0 : S.size) ?? T}pt`, E = ((p = d.font) == null ? void 0 : p.name) ?? "'Malgun Gothic'", L = I(v(d), E, _);
          i = Math.max(i, L * b);
        }), h.width = i;
      }
    }
    function f() {
      o.forEach((c) => {
        const r = n.addRow(null);
        c.forEach((h, i) => {
          const d = C(h) ? h.value : h;
          y(d) || (r.getCell(i + 1).value = d);
        });
      });
    }
    function y(c) {
      return c == null;
    }
  }
  export(e) {
    var l;
    const o = new A.Workbook();
    return this.addNewSheet(o, e, this.args), (l = this.args.extraSheetList) == null || l.forEach(({ data: n, args: s }) => this.addNewSheet(o, n, s)), this.onAfterDataProcess(o, e), o.xlsx.writeBuffer().then((n) => new Blob([n], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
  }
}
export {
  z as E
};
//# sourceMappingURL=excel-k9kYkFof.js.map
