import { c as L } from "./clone-CMP76bLO.js";
import { h as O, g as x } from "./pick-BLZiDVxr.js";
import { exceljs as I } from "../data-modules.js";
function C(t) {
  return t !== null && typeof t == "object" || Array.isArray(t);
}
function S(t, e) {
  const o = x(t), r = x(e), n = Array.isArray(t) ? [] : {};
  for (const c of o)
    n[c] = t[c];
  for (const c of r)
    C(e[c]) && O(t, c) && t[c] && C(t[c]) ? n[c] = S(t[c], e[c]) : n[c] = e[c];
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
    const o = `${e}_${this._curFont}`, r = this._cached.get(o);
    if (r)
      return r;
    const n = this._context.measureText(e).width;
    return this._cached.set(o, n), n;
  }
}
const T = /* @__PURE__ */ (() => {
  let t = null;
  return function() {
    return t || (t = new R()), t;
  };
})();
function F(t, e, o) {
  const r = T();
  return r.setFont(e, o), r.meatText(t);
}
function W(t) {
  return typeof t.value == "boolean" ? t.value ? "TRUE" : "FALSE" : t.value instanceof Date ? "9999-99-99" : t.text;
}
class v {
  constructor(e) {
    this.args = e;
  }
  onBeforeDataProcess(e, o) {
  }
  onAfterDataProcess(e, o) {
  }
}
const N = 11, $ = 10, z = 0.15;
function _(t) {
  return typeof t == "object" && t !== null && !(t instanceof Date);
}
const b = 64;
class K extends v {
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
      autoSizeColumnsMaxWidth: e.autoSizeColumnsMaxWidth ?? b
    });
  }
  _applyStyleAttrs(e, o) {
    const r = o.reduce((i, f) => Math.max(i, f.length), 0), n = this.args.commonStyle || {}, c = o.length;
    for (let i = 0; i < r; ++i) {
      const f = this.args.columnStyle[i], d = f ? S(n || {}, f) : L(n || {}), g = Object.keys(d).length > 0;
      for (let h = 0; h < c; ++h) {
        const s = o[h][i], l = h + 1, a = i + 1, u = e.getCell(l, a);
        _(s) ? (s.cellMerged && e.mergeCells(l, a, h + (s.cellMerged.rowSpan ?? 1), i + (s.cellMerged.colSpan ?? 1)), s.style ? u.style = S(d, s.style) : g && (u.style = d), s.comment && (u.note = s.comment)) : g && (u.style = d);
      }
    }
  }
  _insertImages(e) {
    this.args.imagesOnSheet.forEach(({ imageNo: o, row: r, col: n, width: c, height: i }) => {
      e.addImage(o, {
        tl: { row: r, col: n },
        ext: { width: c, height: i }
      });
    });
  }
  addNewSheet(e, o, r) {
    var h;
    const n = e.addWorksheet(r.mainSheetName), {
      columnWidthList: c = [],
      rowHeightList: i = []
    } = r;
    (h = r.imageResources) == null || h.forEach((s) => e.addImage(s)), d(), this._applyStyleAttrs(n, o), this._insertImages(n), this.args.autoSizeColumns ? f(this.args.autoSizeColumnsMaxWidth) : c.forEach((s, l) => n.getColumn(l + 1).width = s), i.forEach((s, l) => n.getRow(l + 1).height = s);
    function f(s) {
      const l = n.columns.length;
      for (let a = 0; a < l; a++) {
        const u = n.getColumn(a + 1);
        let m = c[a + 1] ?? $;
        u.eachCell({ includeEmpty: !1 }, (y) => {
          var p, w;
          if (y.isMerged) return;
          const E = `${((p = y.font) == null ? void 0 : p.size) ?? N}pt`, M = ((w = y.font) == null ? void 0 : w.name) ?? "'Malgun Gothic'", A = F(W(y), M, E);
          m = Math.max(m, A * z), m > s && (n.getRow(parseInt(y.row)).alignment = { wrapText: !0 });
        }), u.width = Math.min(m, s);
      }
    }
    function d() {
      o.forEach((s) => {
        const l = n.addRow(null);
        s.forEach((a, u) => {
          const m = _(a) ? a.value : a;
          g(m) || (l.getCell(u + 1).value = m);
        });
      });
    }
    function g(s) {
      return s == null;
    }
  }
  export(e) {
    var r;
    const o = new I.Workbook();
    return this.addNewSheet(o, e, this.args), (r = this.args.extraSheetList) == null || r.forEach(({ data: n, args: c }) => this.addNewSheet(o, n, c)), this.onAfterDataProcess(o, e), o.xlsx.writeBuffer().then((n) => new Blob([n], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
  }
}
export {
  K as E
};
//# sourceMappingURL=excel-DtpraY9m.js.map
