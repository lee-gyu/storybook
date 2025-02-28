import { c as E } from "./clone-CMP76bLO.js";
import { g as S, h as M } from "./pick-BLZiDVxr.js";
import { exceljs as A } from "../data-modules.js";
function p(t) {
  return t !== null && typeof t == "object" || Array.isArray(t);
}
function g(t, e) {
  const o = S(t), s = S(e), n = Array.isArray(t) ? [] : {};
  for (const c of o)
    n[c] = t[c];
  for (const c of s)
    p(e[c]) && M(t, c) && t[c] && p(t[c]) ? n[c] = g(t[c], e[c]) : n[c] = e[c];
  return n;
}
class L {
  _context;
  _cached = /* @__PURE__ */ new Map();
  _curFont = "";
  constructor() {
    const e = new OffscreenCanvas(0, 0).getContext("2d");
    if (!e)
      throw new Error("OffscreenCanvas not supported");
    this._context = e;
  }
  setFont(e, o) {
    this._curFont !== `${o} ${e}` && (this._curFont = `${o} ${e}`, this._context.font = `${o} ${e}`);
  }
  meatText(e) {
    const o = `${e}_${this._curFont}`, s = this._cached.get(o);
    if (s)
      return s;
    const n = this._context.measureText(e).width;
    return this._cached.set(o, n), n;
  }
}
const O = /* @__PURE__ */ (() => {
  let t = null;
  return function() {
    return t || (t = new L()), t;
  };
})();
function I(t, e, o) {
  const s = O();
  return s.setFont(e, o), s.meatText(t);
}
function R(t) {
  return typeof t.value == "boolean" ? t.value ? "TRUE" : "FALSE" : t.value instanceof Date ? "9999-99-99" : t.text;
}
class T {
  constructor(e) {
    this.args = e;
  }
  onBeforeDataProcess(e, o) {
  }
  onAfterDataProcess(e, o) {
  }
}
const F = 11, W = 10, v = 0.15;
function x(t) {
  return typeof t == "object" && t !== null && !(t instanceof Date);
}
const N = 64;
class k extends T {
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
      extraSheetList: e.extraSheetList ?? [],
      autoSizeColumnsMaxWidth: e.autoSizeColumnsMaxWidth ?? N
    });
  }
  _applyStyleAttrs(e, o) {
    const s = o.reduce((i, m) => Math.max(i, m.length), 0), n = this.args.commonStyle || {}, c = o.length;
    for (let i = 0; i < s; ++i) {
      const m = this.args.columnStyle[i], f = m ? g(n || {}, m) : E(n || {}), y = Object.keys(f).length > 0;
      for (let r = 0; r < c; ++r) {
        const a = o[r][i], u = r + 1, h = i + 1, l = e.getCell(u, h);
        x(a) ? (a.cellMerged && e.mergeCells(u, h, r + (a.cellMerged.rowSpan ?? 1), i + (a.cellMerged.colSpan ?? 1)), a.style ? l.style = g(f, a.style) : y && (l.style = f), a.comment && (l.note = a.comment)) : y && (l.style = f);
      }
    }
  }
  _insertImages(e) {
    this.args.imagesOnSheet.forEach(({ imageNo: o, row: s, col: n, width: c, height: i }) => {
      e.addImage(o, {
        tl: { row: s, col: n },
        ext: { width: c, height: i }
      });
    });
  }
  addNewSheet(e, o, s) {
    const n = e.addWorksheet(s.mainSheetName), {
      columnWidthList: c = [],
      rowHeightList: i = []
    } = s;
    s.imageResources?.forEach((r) => e.addImage(r)), f(), this._applyStyleAttrs(n, o), this._insertImages(n), this.args.autoSizeColumns ? m(this.args.autoSizeColumnsMaxWidth) : c.forEach((r, a) => n.getColumn(a + 1).width = r), i.forEach((r, a) => n.getRow(a + 1).height = r);
    function m(r) {
      const a = n.columns.length;
      for (let u = 0; u < a; u++) {
        const h = n.getColumn(u + 1);
        let l = c[u + 1] ?? W;
        h.eachCell({ includeEmpty: !1 }, (d) => {
          if (d.isMerged) return;
          const w = `${d.font?.size ?? F}pt`, C = d.font?.name ?? "'Malgun Gothic'", _ = I(R(d), C, w);
          l = Math.max(l, _ * v), l > r && (n.getRow(parseInt(d.row)).alignment = { wrapText: !0 });
        }), h.width = Math.min(l, r);
      }
    }
    function f() {
      o.forEach((r) => {
        const a = n.addRow(null);
        r.forEach((u, h) => {
          const l = x(u) ? u.value : u;
          y(l) || (a.getCell(h + 1).value = l);
        });
      });
    }
    function y(r) {
      return r == null;
    }
  }
  export(e) {
    const o = new A.Workbook();
    return this.addNewSheet(o, e, this.args), this.args.extraSheetList?.forEach(({ data: s, args: n }) => this.addNewSheet(o, s, n)), this.onAfterDataProcess(o, e), o.xlsx.writeBuffer().then((s) => new Blob([s], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
  }
}
export {
  k as E
};
//# sourceMappingURL=excel-C3qlPhvS.js.map
