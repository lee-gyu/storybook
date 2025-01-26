import "./chunks/_init-DtYkg9NZ.js";
import { k as kt, e as Re, l as fe, m as je, b as it, g as Oe, u as vt, h as _t, n as wt } from "./chunks/floating-CqSaT-kJ.js";
import { p as Ai, t as Fi, j as zi, d as Ui, q as Bi, r as Vi } from "./chunks/floating-CqSaT-kJ.js";
import { c as bt, I as Et, r as pe } from "./chunks/command-manager-13fgVXM7.js";
import { g as Gi, f as Wi, e as ji, d as Ki, a as Yi, b as qi } from "./chunks/command-manager-13fgVXM7.js";
import { I as Me } from "./chunks/index-D3h_uvNf.js";
import { d as P, e as he, f as J, a as be, g as yt, c as ot } from "./chunks/rx-state-qVN2AgXP.js";
import { C as Ji, R as Zi, m as Qi, h as eo, b as to, l as no, j as io, i as oo, n as so, k as ro, p as ao } from "./chunks/rx-state-qVN2AgXP.js";
import { u as xt, c as Lt, x as St, l as It } from "./chunks/utility-C3foYU21.js";
import { a as co } from "./chunks/utility-C3foYU21.js";
import { L as st, M as Ae, O as Ee, k as M, P as ye, Q as Y, R as O, S as Tt, T as Rt, U as Ht, V as Ke, W as de, X as Dt, Y as Pt, J as Ot, G as Mt, H as At, I as Ft, K as zt, Z as Ye, _ as qe, $ as Xe, a0 as Le } from "./chunks/css-rF0v2sLP.js";
import { c as Ut } from "./chunks/clsx-OuTLNxxd.js";
import { i as ve, d as He } from "./chunks/index-Dg1kU5Nj.js";
import { c as Bt } from "./chunks/outside-DA89_Rlc.js";
import { d as uo } from "./chunks/outside-DA89_Rlc.js";
import { I as fo } from "./chunks/index-DkTiaDXu.js";
import { a as xe } from "./chunks/asserts-CpwDJsre.js";
import { a as mo, c as Co, d as No, g as ko, b as vo } from "./chunks/image-Y3tFDdOU.js";
import { L as wo } from "./chunks/logger-C1WxLZjH.js";
const j = "tree", I = {
  tree: {
    "&": j
  },
  treeList: {
    "&": `${j}__list`
  },
  treeListRoot: {
    "&": `${j}__list--root`
  },
  treeLabel: {
    "&": `${j}__label`
  },
  treeLabelText: {
    "&": `${j}__label-text`
  },
  treeItem: {
    "&": `${j}__item`,
    parent: `${j}__item--parent`,
    "is-expanded": "is-expanded",
    "is-selected": "is-selected"
  },
  treeItemContent: {
    "&": `${j}__item-content`
  },
  treeIconFolder: {
    "&": `${j}__icon-folder`
  },
  treeIconExpand: {
    "&": `${j}__icon-expand`
  }
}, Fe = (r) => {
  const e = document.createElement("div"), t = document.createElement("i"), n = document.createElement("span");
  return e.className = I.treeLabel["&"], n.className = I.treeLabelText["&"], {
    get template() {
      return e;
    },
    update: (i) => {
      i.iconClass ? (t.isConnected || n.insertAdjacentElement("beforebegin", t), t.className = `${I.treeIconFolder["&"]} ir-icon ${i.iconClass}`, i.iconColor ? t.style.setProperty("--ir-icon-foreground-color", i.iconColor) : t.style.removeProperty("--ir-icon-foreground-color")) : t.remove(), i.caption ? (n.textContent = i.caption, e.appendChild(n)) : n.remove();
    }
  };
}, Vt = "ir-icon--triangle-small-right";
class $t {
  liTreeItem;
  divTreeItemContent;
  nodeRenderContent;
  ulTreeList;
  iconExpand;
  data;
  _parentItem;
  children;
  _caption;
  _checked;
  _subChecked;
  _template;
  _iconClass;
  _iconColor;
  _disabled;
  _level;
  _uuid;
  constructor({
    parentItem: e,
    icon: t,
    caption: n,
    data: i,
    level: s,
    uuid: o,
    defaultChecked: d = !1,
    renderer: a = Fe,
    disabled: h = !1,
    draggable: c
  }) {
    this.children = [], this._parentItem = e, this.data = i, this._level = s, this._iconClass = t, this._caption = n, this._template = a(this), this._checked = d, this._subChecked = d, this._disabled = h, this._uuid = o, this.liTreeItem = document.createElement("li"), this.liTreeItem.classList.add(I.treeItem["&"]), this.liTreeItem.dataset.uuid = this._uuid, this.divTreeItemContent = P(this.liTreeItem, "div", I.treeItemContent["&"]), this.divTreeItemContent.style.setProperty("--ir-tree-node-level", this._level.toString()), this.ulTreeList = document.createElement("ul"), this.ulTreeList.classList.add(I.treeList["&"]), this.iconExpand = P(this.divTreeItemContent, "i", I.treeIconExpand["&"], "ir-icon", Vt), this.divTreeItemContent.appendChild(this._template.template), this.divTreeItemContent.addEventListener("dragstart", (N) => this.onDragStart(N)), this.divTreeItemContent.addEventListener("dragenter", (N) => this.onDragOver(N) && this.divTreeItemContent.classList.add("is-dragging")), this.divTreeItemContent.addEventListener("dragover", (N) => this.onDragOver(N) && N.preventDefault()), this.divTreeItemContent.addEventListener("dragend", (N) => this.onDragEnd(N)), this.divTreeItemContent.addEventListener("dragleave", () => this.clearDragging()), this.divTreeItemContent.addEventListener("drop", (N) => {
      try {
        this.onDrop(N);
      } finally {
        this.clearDragging();
      }
    }), c && this.divTreeItemContent.setAttribute("draggable", "true");
  }
  get items() {
    return [...this.children];
  }
  get parentItem() {
    return this._parentItem;
  }
  get count() {
    return this.children.length;
  }
  get uuid() {
    return this._uuid;
  }
  get subChecked() {
    return this._subChecked;
  }
  get order() {
    return this.liTreeItem.parentElement ? Array.prototype.indexOf.call(this.liTreeItem.parentElement.children, this.liTreeItem) : -1;
  }
  get level() {
    return this._level;
  }
  set level(e) {
    this._level = e, this.divTreeItemContent.style.setProperty("--ir-tree-node-level", e.toString());
  }
  get caption() {
    return this._caption;
  }
  get isDisabled() {
    return this._disabled;
  }
  get iconClass() {
    return this._iconClass;
  }
  get hasChildren() {
    return this.liTreeItem.classList.contains(I.treeItem.parent);
  }
  get hasCheckedChildren() {
    return this.children.some((e) => e.checked || e.hasCheckedChildren);
  }
  get expanded() {
    return this.liTreeItem.classList.contains(I.treeItem["is-expanded"]);
  }
  get selected() {
    return this.liTreeItem.classList.contains(I.treeItem["is-selected"]);
  }
  get iconColor() {
    return this._iconColor;
  }
  get checked() {
    return this._checked;
  }
  set parentItem(e) {
    if (e === this._parentItem) return;
    const t = this._parentItem, n = e;
    t && t.removeChildNode(this), n && n.addNode(this), this._parentItem = n;
  }
  set caption(e) {
    this._caption = e, this.render();
  }
  set disabled(e) {
    this._disabled !== e && (this._disabled = e, this._disabled ? this.liTreeItem.classList.add("is-disabled") : this.liTreeItem.classList.remove("is-disabled"));
  }
  set checked(e) {
    this._checked = e, this.render();
  }
  set iconClass(e) {
    this._iconClass = e, this.render();
  }
  set iconColor(e) {
    this._iconColor = e, this.render();
  }
  set hasChildren(e) {
    e ? this.liTreeItem.classList.add(I.treeItem.parent) : this.liTreeItem.classList.remove(I.treeItem.parent);
  }
  removeItems() {
    [...this.children].forEach((e) => e.delete());
  }
  addNode(e) {
    this.children.push(e), this.hasChildren || (this.hasChildren = !0);
  }
  getTreeNodeKey() {
    const e = [this.order];
    let t = this.parentItem;
    for (; t; )
      e.push(t.order), t = t.parentItem;
    return e.reverse();
  }
  updateCheckedWithPropagation(e) {
    this.checked = e, this.children.forEach((t) => t.updateCheckedWithPropagation(e));
  }
  updateCheckedStatus() {
    this.checked = this.children.every((e) => e.checked), this.parentItem?.updateCheckedStatus();
  }
  updateSubCheckedStatus() {
    this._subChecked = this.hasCheckedChildren;
  }
  delete() {
    this.liTreeItem.remove(), this.emitDeleteRecursive(), this._parentItem && this._parentItem.removeChildNode(this);
  }
  collapse() {
    this.hasChildren && this.expanded && this.onCollapsing(this) && (this.liTreeItem.classList.remove(I.treeItem["is-expanded"]), this.ulTreeList.remove(), this.onCollapse(this));
  }
  scrollIntoView(e = { block: "nearest" }) {
    this.divTreeItemContent.scrollIntoView(e);
  }
  expand() {
    this.hasChildren && (this.expanded || this.onExpanding(this) && (this.liTreeItem.classList.add(I.treeItem["is-expanded"]), this.liTreeItem.appendChild(this.ulTreeList), this.onExpand(this)));
  }
  toggle() {
    this.liTreeItem.classList.contains(I.treeItem["is-expanded"]) ? this.collapse() : this.expand();
  }
  select() {
    this.selected || (this.liTreeItem.classList.add(I.treeItem["is-selected"]), this.onSelect(this));
  }
  release() {
    this.selected && (this.liTreeItem.classList.remove(I.treeItem["is-selected"]), this.onRelease(this));
  }
  render() {
    this._template.update(this), this.onRender(this._template.template);
  }
  /**
   * Drag Event
   */
  onDragStart(e) {
  }
  onDrop(e) {
  }
  onDragEnd(e) {
  }
  onDragOver(e) {
    return !1;
  }
  /**
   * Object Events
   */
  onSelect(e) {
  }
  onRelease(e) {
  }
  onRemove(e) {
  }
  onExpanding(e) {
    return !0;
  }
  onExpand(e) {
  }
  onRender(e) {
  }
  onCollapsing(e) {
    return !0;
  }
  onCollapse(e) {
  }
  /**
   * 현재 자식 배열에서 해당 node 제거
   */
  removeChildNode(e) {
    const t = this.children.indexOf(e);
    if (t === -1)
      throw new Error("there is not the node");
    this.children.splice(t, 1), this.children.length === 0 && (this.hasChildren = !1, this.collapse());
  }
  emitDeleteRecursive() {
    this.children.forEach((e) => e.emitDeleteRecursive()), this.onRemove(this);
  }
  clearDragging() {
    this.divTreeItemContent.classList.remove("is-dragging");
  }
}
function Gt(r) {
  const t = [{ list: r.filter((i) => !i.parentItem), index: 0 }], n = [];
  if (r.length === 0) return n;
  for (; t.length; ) {
    const i = t[t.length - 1], { index: s, list: o } = i, d = o[s], { items: a, isDisabled: h } = d;
    h || n.push(d), ++i.index, i.index === o.length && t.pop(), d.expanded && a.length > 0 && t.push({
      index: 0,
      list: a
    });
  }
  return n;
}
function Wt(r, e) {
  let t = null, n = [], i = !1;
  const s = {
    ArrowUp: a,
    ArrowDown: h,
    ArrowLeft: N,
    ArrowRight: c,
    " ": k
  };
  return r.addGlobalEventListener(e, "focus", () => {
    t && v(t, !1);
  }), r.addGlobalEventListener(e, "blur", () => {
    E();
  }), r.addGlobalEventListener(e, "keydown", (y) => {
    s[y.key] && (s[y.key](), y.preventDefault());
  }), {
    updateTreeVisibleInfo: o,
    setFocusNode: v
  };
  function o() {
    i = !0;
  }
  function d() {
    return i && (n = Gt(r.getOrderedNodes()), i = !1), n;
  }
  function a() {
    const y = t, T = d();
    if (y === null) {
      v(T[0]);
      return;
    }
    const H = T.findIndex((p) => p.uuid === y.uuid), g = T[H - 1];
    g && v(g);
  }
  function h() {
    const y = t, T = d();
    if (y === null) {
      v(T[0]);
      return;
    }
    const H = T.findIndex((p) => p.uuid === y.uuid), g = T[H + 1];
    g && v(g);
  }
  function c() {
    t !== null && t.items.length !== 0 && (t.expanded && !t.items[0].isDisabled ? v(t.items[0]) : t.expand());
  }
  function N() {
    t != null && (t.expanded ? t.collapse() : t.parentItem && v(t.parentItem));
  }
  function k() {
    t && t.select();
  }
  function v(y, T = !0) {
    E(), t = y, t.liTreeItem.classList.add("is-focus"), T && y.scrollIntoView();
  }
  function E() {
    t && t.liTreeItem.classList.remove("is-focus");
  }
}
class wi extends Me {
  _keyboardInteraction;
  rootElement;
  nodes;
  selectedNode;
  renderer;
  _nodeDraggable;
  _nodeMap = /* @__PURE__ */ new Map();
  constructor({
    contextElement: e,
    renderer: t = Fe,
    nodeDraggable: n = !0,
    enabledKeyboard: i = !0
  }) {
    super({ contextElement: e }), this.nodes = [], this.selectedNode = null, this.renderer = t, this._nodeDraggable = n, e.classList.add(I.tree["&"]), e.setAttribute("tabindex", "0"), e.setAttribute("role", "tree"), i && (this._keyboardInteraction = Wt(this, e)), n === !1 && e.setAttribute("draggable", "false"), this.rootElement = P(e, "ul", I.treeList["&"], I.treeListRoot["&"]), this.addCoreElement(this.rootElement), this.addGlobalEventListener(e, "contextmenu", (s) => {
      if (s.preventDefault(), !(s.target instanceof HTMLElement)) return;
      const o = s.target.closest(`.${I.treeItem["&"]}`), d = o ? this.findNodeByUUID(o.dataset.uuid ?? "") : null;
      d?.select(), this.onContextMenu(s, d);
    });
  }
  get componentLabel() {
    return "tree-legacy";
  }
  get items() {
    return [...this.nodes];
  }
  get selected() {
    return this.selectedNode;
  }
  get nodeDraggable() {
    return this._nodeDraggable;
  }
  set selected(e) {
    this.selected !== e && (this.selectedNode?.release(), this.selectedNode = e, this.onChanged(e), e && (e.select(), this.onSelectNode(e), this._keyboardInteraction?.setFocusNode(e, !1)));
  }
  onDblClick(e) {
    e.toggle();
  }
  onToggleClick(e) {
    e.toggle();
  }
  onLabelClick(e) {
    this.selected = e;
  }
  onSelectNode(e) {
  }
  onReleaseNode(e) {
  }
  onRemoveNode(e) {
  }
  onChanged(e) {
  }
  onExpanding(e) {
    return !0;
  }
  onExpand(e) {
  }
  onCollapsing(e) {
    return !0;
  }
  onCollapse(e) {
  }
  onDragStartNode(e, t) {
    t.dataTransfer && (t.dataTransfer.setData("application/json", JSON.stringify(e.data)), t.dataTransfer.dropEffect = "copy");
  }
  onDragOverOnNode(e, t) {
    return !1;
  }
  onDropOnNode(e, t) {
  }
  onDragEndNode(e, t) {
  }
  onRenderNode(e, t) {
  }
  onNodeMoved(e, t) {
  }
  onContextMenu(e, t) {
  }
  /**
   * left가 작으면 true 리턴
   * TODO 추후 IRTree에서 분리 필요 (class 로직과 상관 없음)
   */
  compareNodeOrderKey(e, t) {
    const n = Math.max(e.length, t.length);
    for (let i = 0; i < n; i++) {
      const s = e[i], o = t[i];
      if (s === void 0) return !0;
      if (o === void 0) return !1;
      if (s < o) return !0;
      if (s > o) return !1;
    }
    throw new Error("same key error!");
  }
  getOrderedNodes() {
    return this.items.sort((e, t) => this.compareNodeOrderKey(e.getTreeNodeKey(), t.getTreeNodeKey()) ? -1 : 1);
  }
  removeNodeByUUID(e) {
    this.findNodeByUUID(e).delete();
  }
  selectNodeByUUID(e) {
    this.findNodeByUUID(e).select();
  }
  findNodeByUUID(e) {
    const t = this._nodeMap.get(e);
    if (!t) throw new Error(`not found node uuid: ${e}`);
    return t;
  }
  addChild(e, t, n, i = void 0) {
    const s = xt();
    if (this._nodeMap.has(s)) throw new Error("UUID already exists");
    const o = new $t({
      parentItem: e,
      caption: t,
      data: n,
      level: e ? e.level + 1 : 0,
      renderer: this.renderer,
      defaultChecked: e?.checked,
      draggable: this.nodeDraggable,
      uuid: s
    });
    this._nodeMap.set(o.uuid, o), e && e.addNode(o), this.nodes.push(o), o.divTreeItemContent.ondblclick = (a) => {
      a.target.classList.contains("checkbox__wrapper") || this.onDblClick(o);
    }, o.divTreeItemContent.onclick = (a) => {
      this.onLabelClick(o);
    }, o.iconExpand.onclick = () => this.onToggleClick(o), o.onSelect = () => this.selected = o, o.onRelease = (a) => {
      this.selectedNode = null, this.onReleaseNode(a);
    }, o.onRemove = () => {
      this.nodes.indexOf(o) !== -1 && this.nodes.splice(this.nodes.indexOf(o), 1), this.onRemoveNode(o), this._nodeMap.delete(o.uuid), this._keyboardInteraction?.updateTreeVisibleInfo();
    }, o.onExpanding = () => this.onExpanding(o), o.onExpand = () => {
      this._keyboardInteraction?.updateTreeVisibleInfo(), this.onExpand(o);
    }, o.onCollapsing = () => this.onCollapsing(o), o.onCollapse = () => {
      this._keyboardInteraction?.updateTreeVisibleInfo(), this.onCollapse(o);
    }, o.onDragStart = (a) => this.onDragStartNode(o, a), o.onDrop = (a) => this.onDropOnNode(o, a), o.onDragOver = (a) => this.onDragOverOnNode(o, a), o.onDragEnd = (a) => this.onDragEndNode(o, a), o.onRender = (a) => this.onRenderNode(o, a), o.render(), this._keyboardInteraction?.updateTreeVisibleInfo();
    const d = e ? e.ulTreeList : this.rootElement;
    return i === void 0 ? d.appendChild(o.liTreeItem) : i >= d.children.length ? d.insertAdjacentElement("beforeend", o.liTreeItem) : d.children[i].insertAdjacentElement("beforebegin", o.liTreeItem), o;
  }
  moveNode(e, t, n) {
    if (e === t.parentItem) {
      console.error("Could not move to the node own child node.");
      return;
    }
    const i = e.order;
    e.parentItem = t.parentItem, t.parentItem === null ? e.level = 0 : e.level = t.parentItem.level + 1, t.liTreeItem.insertAdjacentElement(n ? "beforebegin" : "afterend", e.liTreeItem), this.onNodeMoved(e, i);
  }
  selectNode(e) {
    if (!this.nodes.includes(e))
      throw new Error("Can't select the node because it's not included");
    this.selected = e;
  }
  clear() {
    this.selectedNode = null, this.rootElement.innerHTML = "", this.nodes.splice(0, this.nodes.length), this._nodeMap.clear();
  }
  expandAll() {
    this.nodes.forEach((e) => e.expand());
  }
  collapseAll() {
    this.nodes.forEach((e) => e.collapse());
  }
  expandTo(e) {
    let t = e._parentItem;
    for (; t; )
      t.expand(), t = t._parentItem;
  }
  getDropNode(e) {
    const t = kt(
      e.target,
      this.contextElement,
      `.${I.treeLabel["&"]}`
    );
    return t !== null ? t.parentElement?.parentElement : null;
  }
  getNodeByOffsetTopOrNull(e) {
    return null;
  }
}
const bi = ({ onCheck: r }) => (e) => {
  const t = Fe(), n = document.createElement("label"), i = document.createElement("input");
  return i.type = "checkbox", n.classList.add(st), i.classList.add(Ae), n.appendChild(i), t.template.insertAdjacentElement("afterbegin", n), i.addEventListener("click", () => {
    e.updateCheckedWithPropagation(i.checked), e.parentItem?.updateCheckedStatus(), i.dataset.state = e.hasCheckedChildren ? "sub-checked" : "", r && r(e);
  }), {
    get template() {
      return t.template;
    },
    update: (s) => {
      t.update(s), s.checked !== i.checked && (i.checked = s.checked), s.parentItem?.updateCheckedStatus(), s.updateSubCheckedStatus(), i.dataset.state = s.subChecked ? "sub-checked" : "";
    }
  };
}, jt = 16, Ei = (r) => {
  let e = null, t = null;
  const n = () => {
    t && (t.divTreeItemContent.classList.remove("is-top"), t.divTreeItemContent.classList.remove("is-bottom")), t = null;
  };
  r.onDragStartNode = (i, s) => {
    s.dataTransfer && (s.dataTransfer.dropEffect = "move", e = i);
  }, r.onDragOverOnNode = (i, s) => {
    if (e === i)
      return !1;
    let o = i._parentItem;
    for (; o !== null; ) {
      if (o === e) return !1;
      o = o._parentItem;
    }
    return n(), i.divTreeItemContent.classList.add(s.offsetY < jt ? "is-top" : "is-bottom"), t = i, !0;
  }, r.onDropOnNode = (i) => {
    if (!e) throw new Error("No start dragging node!");
    r.moveNode(
      e,
      i,
      i.divTreeItemContent.classList.contains("is-top")
    );
  }, r.onDragEndNode = () => {
    n();
  };
};
class Kt {
  _nodeLinkerMap = /* @__PURE__ */ new Map();
  _firstRootNode = null;
  _lastRootNode = null;
  _rootNodeCount = 0;
  _nodeCount = 0;
  throwErrorIfExistsKey(e) {
    if (this._nodeLinkerMap.has(e))
      throw new Error(`NodeLinker: NodeLink already exists for key: ${e}`);
  }
  insertAsFirstChild(e, t, n) {
    const i = this.getNodeLink(e), s = i.getFirstChildNode();
    s === null ? this.addChildNode(e, t, n) : this.insertBeforeChildNode(i.key, t, n, s);
  }
  insertBeforeChildNode(e, t, n, i) {
    this.throwErrorIfExistsKey(t);
    const s = this.getNodeLink(e), o = new ie({
      data: n,
      level: s.getNodeLevel() + 1,
      key: t,
      parentNode: s,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return s.insertBeforeChildNode(o, i), this.addLinkMap(t, o, !1), o;
  }
  insertAfterChildNode(e, t, n, i) {
    this.throwErrorIfExistsKey(t);
    const s = this.getNodeLink(e), o = new ie({
      data: n,
      level: s.getNodeLevel() + 1,
      key: t,
      parentNode: s,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return s.insertAfterChildNode(o, i), this.addLinkMap(t, o, !1), o;
  }
  insertAfterRootNode(e, t, n) {
    this.throwErrorIfExistsKey(e);
    const i = n.getNextNode(), s = new ie({
      key: e,
      data: t,
      level: 0,
      parentNode: null,
      prevNode: n,
      nextNode: i,
      firstChildNode: null,
      lastChildNode: null
    });
    return i?.setPrevNode(s), n.setNextNode(s), n === this._lastRootNode && this.setLastRootNode(s), this.addLinkMap(e, s, !0), s;
  }
  insertBeforeRootNode(e, t, n) {
    this.throwErrorIfExistsKey(e);
    const i = n.getPrevNode(), s = new ie({
      key: e,
      data: t,
      level: 0,
      parentNode: null,
      prevNode: i,
      nextNode: n,
      firstChildNode: null,
      lastChildNode: null
    });
    return i?.setNextNode(s), n.setPrevNode(s), n === this._firstRootNode && this.setFirstRootNode(s), this.addLinkMap(e, s, !0), s;
  }
  addLinkMap(e, t, n) {
    this._nodeLinkerMap.set(e, t), n && ++this._rootNodeCount, ++this._nodeCount;
  }
  /**
   * 자식 노드 삽입 시, 삽입 할 노드를 찾아주는 함수
   */
  findInsertChildPositionNode(e) {
    let t = e;
    for (; t; ) {
      const n = t.getNextNode();
      if (n)
        return n;
      t = t.getParentNode();
    }
    return t;
  }
  addRootNode(e, t) {
    this.throwErrorIfExistsKey(e);
    const n = new ie({
      key: e,
      data: t,
      level: 0,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      parentNode: null,
      prevNode: null
    });
    return this._lastRootNode == null ? (this.setFirstRootNode(n), this.setLastRootNode(n)) : (this._lastRootNode.setNextNode(n), n.setPrevNode(this._lastRootNode), this._lastRootNode = n), this.addLinkMap(e, n, !0), n;
  }
  createNodeLink(e, t, n, i) {
    return n === void 0 ? i === void 0 ? this.addRootNode(t, e) : this.insertBeforeRootNode(t, e, this.getNodeLink(i)) : i === void 0 ? this.addChildNode(n, t, e) : this.insertBeforeChildNode(n, t, e, this.getNodeLink(i));
  }
  addChildNode(e, t, n) {
    this.throwErrorIfExistsKey(t);
    const i = this.getNodeLink(e), s = new ie({
      key: t,
      data: n,
      level: i.getNodeLevel() + 1,
      parentNode: i,
      firstChildNode: null,
      lastChildNode: null,
      nextNode: null,
      prevNode: null
    });
    return i.addChildNode(s), this.addLinkMap(t, s, !1), s;
  }
  clearChildNodes(e) {
    const t = this.getNodeLink(e);
    this.travelChildNodes(e, (n) => this.deleteNodeInMap(n.key)), t.setFirstChildNode(null), t.setLastChildNode(null);
  }
  travelAllNodes(e, t) {
    const n = this._firstRootNode;
    if (n !== null)
      return this.travelNodes(n, e, t);
  }
  /**
   * startNodeLink부터, 자식 다음 형제 노드 모두 순회
   * rootFirstNode를 넣으면, 모든 노드를 순회
   */
  async travelNodes(e, t, n) {
    const i = [{
      link: e,
      level: e.getNodeLevel()
    }];
    let s = i.pop();
    for (; s; ) {
      const { link: o, level: d } = s, a = o.getNextNode(), h = o.getFirstChildNode(), c = t(o, d);
      c instanceof Promise && await c, a && i.push({ link: a, level: d }), h && (n === void 0 || await n(o, d)) && i.push({ link: h, level: d + 1 }), s = i.pop();
    }
  }
  travelChildNodes(e, t, n) {
    const s = this.getNodeLink(e).getFirstChildNode();
    if (s !== null)
      return this.travelNodes(s, t, n);
  }
  getChildNodeCount(e) {
    let t = 0;
    return this.travelChildNodes(e, () => void ++t), t;
  }
  hasNode(e) {
    return this._nodeLinkerMap.has(e);
  }
  clear() {
    this.setFirstRootNode(null), this.setLastRootNode(null), this._rootNodeCount = 0, this._nodeCount = 0, this._nodeLinkerMap.clear();
  }
  setFirstRootNode(e) {
    this._firstRootNode = e;
  }
  setLastRootNode(e) {
    this._lastRootNode = e;
  }
  deleteNodeInMap(e) {
    --this._nodeCount, this._nodeLinkerMap.delete(e);
  }
  removeNode(e) {
    const t = this.getNodeLink(e), n = t.getPrevNode(), i = t.getNextNode();
    n?.setNextNode(i), i?.setPrevNode(n), t === this._firstRootNode && this.setFirstRootNode(i), t === this._lastRootNode && this.setLastRootNode(n), this.travelChildNodes(e, (o) => this.deleteNodeInMap(o.key)), this.deleteNodeInMap(e);
    const s = t.getParentNode();
    s ? s.removeChildNode(t) : --this._rootNodeCount;
  }
  getNodeLinkOrNull(e) {
    return this._nodeLinkerMap.get(e) ?? null;
  }
  getNodeLink(e) {
    const t = this.getNodeLinkOrNull(e);
    if (t == null) throw new Error(`NodeLinker: NodeLink not found for key: ${e}`);
    return t;
  }
  getFirstRootNode() {
    return this._firstRootNode;
  }
  getLastRootNode() {
    return this._lastRootNode;
  }
  getRootNodeCount() {
    return this._rootNodeCount;
  }
  getNodeCount() {
    return this._nodeCount;
  }
}
class ie {
  constructor(e) {
    this._args = e;
  }
  get data() {
    return this._args.data;
  }
  setNodeLevel(e) {
    this._args.level = e;
  }
  getNodeLevel() {
    return this._args.level;
  }
  getNextNode() {
    return this._args.nextNode;
  }
  getPrevNode() {
    return this._args.prevNode;
  }
  getFirstChildNode() {
    return this._args.firstChildNode;
  }
  hasChild() {
    return this.getFirstChildNode() !== null;
  }
  /**
   * 현재 노드가 parentNodeKey의 자손인지 확인
   */
  isProgenyNode(e) {
    let t = this.getParentNode();
    for (; t; ) {
      if (t.key === e) return !0;
      t = t.getParentNode();
    }
    return !1;
  }
  getLastChildNode() {
    return this._args.lastChildNode;
  }
  getParentNode() {
    return this._args.parentNode;
  }
  isRootNode() {
    return this.getParentNode() == null;
  }
  setPrevNode(e) {
    this._args.prevNode = e;
  }
  setNextNode(e) {
    this._args.nextNode = e;
  }
  setParentNode(e) {
    this._args.parentNode = e;
  }
  setFirstChildNode(e) {
    this._args.firstChildNode = e;
  }
  setLastChildNode(e) {
    this._args.lastChildNode = e;
  }
  removeChildNode(e) {
    if (e.getParentNode() !== this)
      throw new Error("NodeLink: targetNodeLink is not a child of this node");
    const t = e.getPrevNode(), n = e.getNextNode();
    t?.setNextNode(n), n?.setPrevNode(t), e === this.getFirstChildNode() && this.setFirstChildNode(n), e === this.getLastChildNode() && this.setLastChildNode(t), e.setParentNode(null);
  }
  insertAfterChildNode(e, t) {
    if (t.getParentNode() !== this)
      throw new Error("NodeLink: targetNodeLink is not a child of this node");
    e.setParentNode(this), t.getNextNode() && e.setNextNode(t.getNextNode()), e.setPrevNode(t), t.getNextNode()?.setPrevNode(e), t.setNextNode(e), this.getLastChildNode() === t && this.setLastChildNode(e);
  }
  insertBeforeChildNode(e, t) {
    if (t.getParentNode() !== this)
      throw new Error("NodeLink: targetNodeLink is not a child of this node");
    e.setParentNode(this), t.getPrevNode() && e.setPrevNode(t.getPrevNode()), e.setNextNode(t), t.getPrevNode()?.setNextNode(e), t.setPrevNode(e), this.getFirstChildNode() === t && this.setFirstChildNode(e);
  }
  addChildNode(e) {
    e.setParentNode(this);
    const t = this.getLastChildNode();
    t == null ? (this.setFirstChildNode(e), this.setLastChildNode(e)) : (t.setNextNode(e), e.setPrevNode(t), this.setLastChildNode(e));
  }
  clearChildNodes() {
    this.setFirstChildNode(null), this.setLastChildNode(null);
  }
  get key() {
    return this._args.key;
  }
}
class Yt {
  constructor(e) {
    this.args = e, this._nodeData = { ...e.nodeData }, this._nodeLinker = e.nodeLinker;
  }
  _nodeData;
  _nodeLinker;
  _selected = !1;
  get level() {
    return this.getNodeLink().getNodeLevel();
  }
  get caption() {
    return this.data.caption ?? "";
  }
  get key() {
    return this.data.key;
  }
  get icon() {
    return this.data.icon;
  }
  get hasCheckbox() {
    return this.data.hasCheckbox !== !1;
  }
  get data() {
    return this._nodeData;
  }
  get object() {
    return this.data.object;
  }
  get selected() {
    return this._selected === !0;
  }
  get disabled() {
    return this.data.disabled === !0;
  }
  get expanded() {
    return this.data.expanded === !0;
  }
  get expandable() {
    return this.data.expandable !== !1 && (this.data.expandable === !0 || this.hasChild());
  }
  get checked() {
    return this.data.checked === !0;
  }
  get subChecked() {
    return this.data.subChecked === !0;
  }
  get iconColor() {
    return this.data.iconColor;
  }
  get hook() {
    return this.args.hook;
  }
  isRootNode() {
    return this.getNodeLink().getParentNode() === null;
  }
  getNodeLink() {
    return this._nodeLinker.getNodeLink(this.key);
  }
  hasChild() {
    return this.getNodeLink().getFirstChildNode() != null;
  }
  /**
   * 연결된 모든 부모 노드가 확장되어 있으면 true 반환
   */
  isVisible() {
    let e = this.getNodeLink().getParentNode();
    for (; e; ) {
      if (e.data.node.expanded === !1) return !1;
      e = e.getParentNode();
    }
    return !0;
  }
  setCaption(e) {
    return this.updateNodeState({
      caption: e
    });
  }
  getColumnText(e) {
    return e === 0 ? this.caption : this.data.columns?.[e - 1] ?? "";
  }
  serialize() {
    const e = this.getNodeLink(), t = {
      ...this.data
    }, n = e.getFirstChildNode();
    if (n) {
      const i = [];
      let s = n;
      for (; s; )
        i.push(s.data.node.serialize()), s = s.getNextNode();
      t.children = i;
    }
    return t;
  }
  setColumnText(e, t) {
    if (e === 0)
      return this.setCaption(t);
    {
      const n = this.data.columns ?? [];
      return n[e - 1] = t, this.updateNodeState({
        columns: n
      });
    }
  }
  async select() {
    this.selected || (this._selected = !0, await this.updateNodeState(), await this.hook.emit("nodeSelect", [this]));
  }
  selectToggle() {
    return this.selected ? this.release() : this.select();
  }
  async addSelect() {
    this.selected || (this._selected = !0, await this.hook.emit("nodeUpdated", [this]), await this.hook.emit("nodeAddSelect", [this]));
  }
  toggleExpand() {
    return this.expanded ? this.collapse() : this.expand();
  }
  async expand() {
    this.expanded || this.expandable === !1 || await this.hook.emit("nodeExpanding", [this]) && (await this.updateNodeState({ expanded: !0 }), await this.hook.emit("nodeExpanded", [this]));
  }
  async collapse() {
    this.expanded !== !1 && await this.hook.emit("nodeCollapsing", [this]) && (await this.updateNodeState({ expanded: !1 }), await this.hook.emit("nodeCollapsed", [this]));
  }
  multiSelectToggle() {
    return this.selected ? this.release() : this.addSelect();
  }
  async checkToggle() {
    await this.changeCheck(!this.checked);
  }
  async changeCheck(e, t = !0) {
    this.checked !== e && await this.hook.emit("nodeChangeChecking", [this, e]) && (await this.updateNodeState({ checked: e }), t && await this.hook.emit("nodeChangeChecked", [this, e]));
  }
  async release() {
    this.selected && (this._selected = !1, await this.updateNodeState(), await this.hook.emit("nodeRelease", [this]));
  }
  async updateNodeState(e) {
    e && Object.assign(this.data, e), await this.hook.emit("nodeUpdated", [this]);
  }
}
class rt extends Me {
  constructor(e) {
    super({
      contextElement: e.contextElement ?? document.createElement("div")
    }), this._hookArgs = e, this._pluginList = this._hookArgs.plugins ?? [], this.onInitDOMEvents(this.contextElement), this.onInitHooks(), this.onInitPlugins();
  }
  _hook = bt();
  _pluginList;
  #e = /* @__PURE__ */ new Map();
  get hook() {
    return this._hook;
  }
  get pluginList() {
    return this._pluginList;
  }
  async runPauseEmitContext(e, t) {
    try {
      e.forEach((i) => this.hook.pauseEmit(i));
      const n = t();
      n instanceof Promise && await n;
    } finally {
      e.forEach((n) => this.hook.resumeEmit(n));
    }
  }
  emitHook(e, t) {
    return this._hook.emit(e, t);
  }
  onInitPlugins() {
    this._hookArgs.plugins?.forEach((e) => this.addPlugin(e));
  }
  addPlugin(e) {
    const t = Object.getPrototypeOf(e);
    if (this.#e.has(t))
      throw new Error("this plugin is already exists.");
    e.mount(this, this._hook, this.contextElement), this.#e.set(t, e);
  }
  removePlugin(e) {
    const t = Object.getPrototypeOf(e);
    if (!(this.getPluginOrNull(t) !== null)) throw new Error("plugin is not exists.");
    this.#e.delete(t), e.unmount();
  }
  getPluginOrNull(e) {
    return this.#e.get(e) ?? null;
  }
  addHook(e, t) {
    this._hook.addHook(e, t);
  }
  setHook(e, t) {
    this._hook.setHook(e, t);
  }
  removeHook(e, t) {
    this._hook.removeHook(e, t);
  }
  setBeginHook(e, t) {
    this._hook.setBeginHook(e, t);
  }
  setEndHook(e, t) {
    this._hook.setEndHook(e, t);
  }
  clearHooks(e) {
    this._hook.clearHooks(e);
  }
  clearBeginHooks(e) {
    this._hook.clearBeginHooks(e);
  }
  clearEndHooks(e) {
    this._hook.clearEndHooks(e);
  }
  /**
   * @deprecated use 'mountElement' instead.
   */
  get element() {
    return this.contextElement;
  }
  mountElement(e) {
    e.appendChild(this.contextElement);
  }
}
class qt {
  _unmountTasks = [];
  addUnmountTask(e) {
    this._unmountTasks.push(e);
  }
  addPluginHook(e, t, n) {
    e.addHook(t, n), this._unmountTasks.push(() => e.removeHook(t, n));
  }
  unmount() {
    this._unmountTasks.forEach((e) => e()), this._unmountTasks.length = 0;
  }
}
class se extends qt {
}
class Xt extends se {
  mount(e, t) {
    const n = {
      async ArrowLeft() {
        if (e.getSelectedNodesCount() > 1) return;
        const a = e.getSelectedNodeOrNull();
        a && (a.expanded === !0 ? await a.collapse() : await o(a.getNodeLink().getParentNode()?.data.node));
      },
      async ArrowRight() {
        if (e.getSelectedNodesCount() > 1) return;
        const a = e.getSelectedNodeOrNull();
        !a || !a.expandable || (a.expanded === !1 ? await a.expand() : await o(a.getNodeLink().getFirstChildNode()?.data.node));
      },
      async ArrowUp() {
        const a = e.getSelectedNodeOrNull();
        if (!a) return;
        const h = e.getSelectedNodes().reduce((N, k) => e.getNodeRowId(k.key) < e.getNodeRowId(N.key) ? k : N, a), c = h.getNodeLink().getPrevNode();
        c ? await o(s(c)) : await o(h.getNodeLink().getParentNode()?.data.node);
      },
      async ArrowDown() {
        const a = e.getSelectedNodeOrNull();
        if (!a) return;
        const h = e.getSelectedNodes().reduce((c, N) => e.getNodeRowId(N.key) > e.getNodeRowId(c.key) ? N : c, a);
        if (h.expanded === !1)
          return await o(i(h.getNodeLink()));
        await o(h.getNodeLink().getFirstChildNode()?.data.node);
      },
      // Space Bar
      " ": async function() {
        if (e.getSelectedNodesCount() === 0) return;
        const a = e.getSelectedNodes(), h = a.some((c) => c.checked);
        for (const c of a)
          c.hasCheckbox && await c.changeCheck(!h);
      }
    };
    this.addPluginHook(e, "keydown", d);
    function i(a) {
      const h = a.getNextNode();
      if (h) return h.data.node;
      let c = a.getParentNode();
      for (; c && !c.getNextNode(); )
        c = c.getParentNode();
      return c?.getNextNode()?.data.node;
    }
    function s(a) {
      let h = a;
      for (; h && h.data.node.expanded; ) {
        const c = h.getLastChildNode();
        if (!c) break;
        h = c;
      }
      return h.data.node;
    }
    async function o(a) {
      a && (await a.select(), e.scrollToNode(a.key));
    }
    async function d(a) {
      const h = n[a.key];
      h !== void 0 && (a.preventDefault(), await h());
    }
  }
}
const Jt = "minmax(0, 1fr)";
function Zt(r) {
  const e = [];
  ze(r) && e.push(`${Re("tree-view.checkboxColumnWidth")}px`);
  for (let t = 0; t < r.headerRow.columnCount; t++) {
    const n = r.headerRow.width[t] ?? "";
    n.endsWith("px") ? e.push(`minmax(${n}, ${n})`) : e.push(Jt);
  }
  return e.join(" ");
}
function Qt(r) {
  return he("[data-node-header='true']", ".ir-vd-container__viewport-row", r);
}
function en(r) {
  return he(".ir-vd-container__viewport-row", ".ir-vd-container__viewport-row", r);
}
function Je(r) {
  return he("button[data-ir-role='node-expand-button']", ".ir-vd-container__viewport-row", r);
}
function Ze(r) {
  return he("input[type='checkbox']", ".ir-vd-container__viewport-row", r);
}
function ze(r) {
  return r.showCheckbox && r.checkboxOptions.layout === "column";
}
function tn(r) {
  return r.showCheckbox && r.headerRow.hasCheckbox;
}
function nn(r, e) {
  return r.showCheckbox && e.hasCheckbox;
}
function Qe(r, e) {
  return e === "*" && r === 0 || e.endsWith("px");
}
function on({ createNodeFunc: r, parentNodeOrNull: e, visible: t, nodeData: n }) {
  return i([], n, t, e);
  function i(s, o, d, a) {
    const h = { ...o };
    delete h.children;
    const c = a?.key ?? null, N = r(h);
    if (s.push({
      node: N,
      visible: d,
      parentKeyOrNull: c
    }), o.children && o.children.length > 0)
      for (const k of o.children)
        i(s, k, d && h.expanded === !0, N);
    return s;
  }
}
function sn(r) {
  const {
    nodeLinker: e,
    nodeList: t,
    virtualRowList: n,
    positionArgs: i
  } = r, {
    insertKey: s,
    parentKey: o,
    position: d
  } = i;
  a(), h();
  function a() {
    if (t.length === 0) return;
    const c = t[0].node, N = n[0], k = { node: c, virtualRow: N };
    if (s !== void 0) {
      const v = e.getNodeLink(s);
      if (d === "firstChild")
        return e.insertAsFirstChild(v.key, c.key, k);
      const E = v.getParentNode();
      return E === null ? d === "after" ? e.insertAfterRootNode(c.key, k, v) : e.insertBeforeRootNode(c.key, k, v) : d === "after" ? e.insertAfterChildNode(E.key, c.key, k, v) : e.insertBeforeChildNode(E.key, c.key, k, v);
    }
    o === void 0 ? e.addRootNode(c.key, k) : e.addChildNode(o, c.key, k);
  }
  function h() {
    for (let c = 1; c < t.length; c++) {
      const { node: N, parentKeyOrNull: k } = t[c], v = n[c], E = { node: N, virtualRow: v };
      k ? e.addChildNode(k, N.key, E) : s ? e.insertBeforeRootNode(N.key, E, e.getNodeLink(s)) : e.addRootNode(N.key, E);
    }
  }
}
const rn = {
  nodeDraggable: !0
};
class an extends se {
  constructor(e = rn) {
    super(), this._args = e;
  }
  mount(e, t) {
    this.addPluginHook(e, "contextMenu", i), this.addPluginHook(e, "treeClick", E), this.addPluginHook(e, "treeDoubleClick", H), this.addPluginHook(e, "nodeExpandIconClick", T);
    let n = null;
    this._args.nodeDraggable && (this.addPluginHook(e, "nodeDragStart", d), this.addPluginHook(e, "treeMouseDown", s), this.addPluginHook(e, "treeMouseUp", o), this.addPluginHook(e, "nodeMouseDown", a));
    async function i(g) {
      g.preventDefault();
      const p = k(g);
      p && (e.multiSelect ? g.ctrlKey ? await p.addSelect() : g.shiftKey ? await y(p) : p.selected === !1 && await p.select() : await p.select(), await t.emit("nodeContextMenu", [g, p]));
    }
    function s(g) {
      const p = k(g);
      p && t.emit("nodeMouseDown", [g, p]);
    }
    function o(g) {
      const p = k(g);
      p && t.emit("nodeMouseUp", [g, p]);
    }
    function d(g, p) {
      p.object && g.dataTransfer?.setData("application/json", JSON.stringify(p.object));
    }
    async function a(g, p) {
      if (!await t.emit("nodeCheckDragging", [g, p])) return;
      const w = en(g.target);
      w && (w.setAttribute("draggable", "true"), w.addEventListener("dragstart", c), n = p);
    }
    function h(g) {
      g.removeEventListener("dragstart", c), g.removeEventListener("dragend", N), g.removeAttribute("draggable"), n = null;
    }
    function c(g) {
      g.target instanceof HTMLElement && n && (g.target.addEventListener("dragend", N), t.emit("nodeDragStart", [g, n]));
    }
    function N(g) {
      g.target instanceof HTMLElement && n && (h(g.target), t.emit("nodeDragEnd", [g, n]));
    }
    function k(g) {
      if (!(g.target instanceof HTMLElement)) return null;
      const _ = he("[data-node-key]", ".ir-vd-container__viewport-row ", g.target)?.dataset.nodeKey;
      return _ ? e.getNodeOrNull(_) : null;
    }
    async function v(g) {
      if (g.target instanceof HTMLInputElement && Ze(g.target)) {
        const p = g.target.checked;
        await t.emit("headerChangeChecking", [p]) ? await e.setHeaderRowChecked(p) : g.target.checked = !p;
        return;
      }
    }
    async function E(g) {
      if (Qt(g.target)) return v(g);
      const p = k(g);
      if (p) {
        if (Je(g.target)) {
          t.emit("nodeExpandIconClick", [g, p]);
          return;
        }
        if (g.target instanceof HTMLInputElement && Ze(g.target)) {
          await p.checkToggle(), g.target.checked = p.checked;
          return;
        }
        e.multiSelect ? g.ctrlKey ? await p.multiSelectToggle() : g.shiftKey ? await y(p) : await e.selectNode(p.key) : await p.selectToggle(), t.emit("nodeClick", [g, p]);
      }
    }
    async function y(g) {
      const p = e.getSelectedNodes();
      if (p.length === 0) {
        await g.select();
        return;
      }
      await e.selectRange(p[0], g);
    }
    async function T(g, p) {
      await p.toggleExpand();
    }
    function H(g) {
      const p = k(g);
      p && (Je(g.target) || (g.preventDefault(), t.emit("nodeDoubleClick", [g, p])));
    }
  }
}
function at(r) {
  const e = J("input");
  return e.type = "checkbox", e.classList.add(
    r.checkboxOptions.ui === "favorite" ? Tt : Ae
  ), e;
}
function dn(r) {
  const e = J("div", O.nodeMain, O.base, M.truncate), t = J("button", O.nodeExpandButton, O.nodeIcon), n = J("div", O.base, M.truncate, M.textAlign.center, O.headerCheckboxColumnDiv), i = J("span", O.nodeCaption, M.truncate), s = be("ir-icon--triangle-small-right"), o = be(""), d = at(r);
  return t.dataset.irRole = "node-expand-button", o.classList.add(O.nodeIcon), s.style.setProperty("--ir-icon-foreground-color", Y.expandIconColor), t.append(s), e.appendChild(t), r.showIcon && e.appendChild(o), e.appendChild(i), n.appendChild(d), r.hiddenExpandIcon && (s.style.display = "none"), {
    mainContentDiv: e,
    expandButton: t,
    icon: o,
    text: i,
    checkbox: d,
    checkboxDiv: n
  };
}
function ln(r) {
  const e = document.createElement("div");
  return e.textContent = r, e.classList.add(O.base, M.truncate, O.column), e;
}
function cn(r, e) {
  return {
    columns: [],
    ...dn(e)
  };
}
function hn(r, e) {
  const t = document.createElement("div");
  return t.textContent = e.headerRow.text[r] ?? "", t.classList.add(O.base, M.truncate), r > 0 && t.classList.add(O.column), t;
}
function un(r) {
  const e = at(r);
  return r.checkboxOptions.layout === "inner" && e.classList.add(M.verticalAlign.bottom, O.headerInnerCheckbox), {
    checkbox: e,
    checkboxDiv: J(
      "div",
      O.base,
      M.truncate,
      M.textAlign.center,
      O.headerCheckboxColumnDiv
    ),
    columns: []
  };
}
function gn(r, e, t) {
  const n = cn(e, t), i = r.getRowElement();
  r.setTemplateHelper(n), i.classList.add(
    Ee.base,
    M.userSelectNone,
    Ee.node,
    M.focusOutlineNone
  ), i.role = "treeitem", i.dataset.nodeKey = e.key, dt(r, e, t), ze(t) ? i.appendChild(n.checkboxDiv) : nn(t, e) && n.expandButton.insertAdjacentElement("afterend", n.checkbox), i.appendChild(n.mainContentDiv), n.columns.forEach((s) => i.appendChild(s));
}
function fn(r, e, t) {
  const n = un(e), i = r.getRowElement();
  r.setTemplateHelper(n), i.classList.add(Ee.base, Ee.header), i.dataset.nodeHeader = "true", lt(r, e, t), n.columns.forEach((s) => i.appendChild(s));
}
function dt(r, e, t) {
  if (!r.isCachedElement) return;
  const n = r.getRowElement(), i = e.icon ?? t.defaultIcon, s = e.iconColor ?? t.defaultIconColor, { text: o, columns: d, icon: a, expandButton: h, checkbox: c } = r.template;
  e.level > 0 ? ye(n, {
    [Y.nodeLevel]: String(e.level)
  }) : n.style.removeProperty(Y.nodeLevel), fe(n, "selected", e.selected), fe(n, "disabled", e.disabled), fe(n, "expanded", e.expanded), fe(n, "expandable", e.expandable), e.expandable === !1 ? h.classList.add(M.invisible) : h.classList.remove(M.invisible), e.expanded ? h.classList.add(M.rotate.deg90) : h.classList.remove(M.rotate.deg90), e.subChecked ? c.dataset.state = "sub-checked" : delete c.dataset.state, c.checked = e.checked, e.hasCheckbox === !1 && c.remove(), i ? (a.className = Ut(O.nodeIcon, "ir-icon", i), s && a.style.setProperty("--ir-icon-foreground-color", s)) : a.className = M.invisible, o.textContent = e.caption, d.forEach((k) => k.remove()), d.length = 0;
  const N = t.headerRow.columnCount;
  for (let k = 1; k < N; k++) {
    const v = ln(e.getColumnText(k));
    d.push(v), n.appendChild(v);
  }
}
function lt(r, e, t) {
  const {
    columns: n,
    checkbox: i,
    checkboxDiv: s
  } = r.template;
  n.forEach((a) => a.remove()), n.length = 0;
  const o = ze(e);
  o && (e.headerRow.hasCheckbox && s.appendChild(i), n.push(s), r.getRowElement().appendChild(s)), i.checked = t.headerRow.checked;
  const d = e.headerRow.columnCount;
  for (let a = 0; a < d; a++) {
    const h = hn(a, e);
    n.push(h), r.getRowElement().appendChild(h);
  }
  !o && tn(e) && n[0].prepend(i);
}
const pn = "80px", mn = 4, Cn = {
  columnCount: 1,
  text: [""],
  width: ["*"],
  hasCheckbox: !0
}, Nn = {
  layout: "inner",
  ui: "checkbox"
}, kn = {
  scrollOnCollapse: !0,
  scrollOnExpand: !0
};
function vn() {
  return [
    new an({
      nodeDraggable: !0
    }),
    new Xt()
  ];
}
class yi extends rt {
  _nodeLinker = new Kt();
  _virtualDOMContainer = document.createElement("div");
  _virtualDOM;
  _args;
  _selectedNode = [];
  _context;
  constructor(e) {
    super({
      plugins: e.plugins ?? vn()
    }), this._args = {
      defaultRowHeight: e.defaultRowHeight ?? Re("tree-view.nodeRowHeight"),
      hiddenExpandIcon: e.hiddenExpandIcon ?? !1,
      removeIndent: e.removeIndent ?? !1,
      defaultIcon: e.defaultIcon,
      autoSizeColumnMode: e.autoSizeColumnMode ?? !1,
      defaultIconColor: e.defaultIconColor,
      showIcon: e.showIcon ?? !1,
      showCheckbox: e.showCheckbox ?? !1,
      multiSelect: e.multiSelect ?? !1,
      className: e.className ?? "",
      displayHeader: e.displayHeader ?? !1,
      headerRow: Object.assign({}, Cn, e.headerRow),
      checkboxOptions: Object.assign({}, Nn, e.checkboxOptions),
      plugins: this.pluginList,
      features: Object.assign({}, kn, e.features)
    }, this._context = {
      headerRow: {
        checked: !1
      }
    }, e.removeIndent && ye(this.contextElement, {
      [Y.nodeIndentPadding]: "0"
    }), this.validateArgs(), this.initArgs(), this._virtualDOM = this.initVirtualDOM(), this.setDefaultColumnWidths(), this.updateTreeTemplateColumns();
  }
  onInitDOMEvents(e) {
    e.classList.add(Rt), this.addGlobalEventListener(e, "contextmenu", (t) => this.emitHook("contextMenu", [t])), this.addGlobalEventListener(e, "focus", (t) => this.emitHook("focus", [t])), this.addGlobalEventListener(e, "keydown", (t) => this.emitHook("keydown", [t])), this.addGlobalEventListener(e, "blur", (t) => this.emitHook("blur", [t])), this.addGlobalEventListener(e, "click", (t) => this.emitHook("treeClick", [t])), this.addGlobalEventListener(e, "mousedown", (t) => this.emitHook("treeMouseDown", [t])), this.addGlobalEventListener(e, "mouseup", (t) => this.emitHook("treeMouseUp", [t])), this.addGlobalEventListener(e, "dblclick", (t) => this.emitHook("treeDoubleClick", [t])), this.addGlobalEventListener(e, "dragenter", (t) => this.treeDragEnterHandler(t)), this.addGlobalEventListener(e, "dragover", (t) => this.treeDragOverHandler(t)), this.addGlobalEventListener(e, "dragleave", (t) => this.treeDragLeaveHandler(t)), this.addGlobalEventListener(e, "drop", (t) => this.treeDropHandler(t)), this.addGlobalEventListener(e, "dragend", (t) => this.treeDragEndHandler(t));
  }
  /**
   * TreeView Hooks
   */
  /**
   *
   */
  beginNodeUpdatedHandler(e) {
    const { virtualRow: t } = this.getMapValue(e.key);
    t.hasTemplate && this.emitHook("nodeRender", [t, e, this._args]);
  }
  treeDragEnterHandler(e) {
    this._virtualDOM.lockMouseEvents(), this.emitHook("treeDragEnter", [e]);
  }
  treeDragOverHandler(e) {
    const t = this.getRowOrNullByEvent(e);
    t && t.rowId > 0 && this.emitHook("nodeDragOver", [e, t.object, t]);
  }
  treeDragLeaveHandler(e) {
    e.target === this._virtualDOMContainer && this._virtualDOM.unlockMouseEvents(), this.emitHook("treeDragLeave", [e]);
  }
  getRowOrNullByEvent(e) {
    const t = e.offsetY + this._virtualDOM.scrollTop;
    return this._virtualDOM.getRowByTopOrNull(t);
  }
  treeDropHandler(e) {
    this._virtualDOM.unlockMouseEvents();
    const t = this.getRowOrNullByEvent(e);
    t && t.rowId > 0 && this.emitHook("nodeDrop", [e, t.object]);
  }
  treeDragEndHandler(e) {
    this._virtualDOM.unlockMouseEvents();
  }
  nodeReleaseHandler(e) {
    const t = this._selectedNode.indexOf(e);
    if (t >= 0)
      return this._selectedNode.splice(t, 1), this.emitSelectionChange();
  }
  updateNodeRowVisible(e) {
    this._nodeLinker.travelChildNodes(e, ({ data: { virtualRow: t, node: n } }) => {
      this._virtualDOM.setRowVisible(t.rowId, n.isVisible());
    });
  }
  beginNodeExpanded(e) {
    this.updateNodeRowVisible(e.key);
  }
  beginNodeCollapsed(e) {
    this.updateNodeRowVisible(e.key);
  }
  pushSelectedNode(e) {
    this._selectedNode.includes(e) || this._selectedNode.push(e);
  }
  async nodeSelectHandler(e) {
    await this.runPauseEmitContext(["nodeSelectionChange"], () => this.releaseSelectedNodes()), this.pushSelectedNode(e), await this.emitSelectionChange();
  }
  async nodeAddSelectionHandler(e) {
    this.pushSelectedNode(e), await this.emitSelectionChange();
  }
  onInitHooks() {
    this.setBeginHook("createHeaderRow", fn), this.setBeginHook("createNodeRow", gn), this.setBeginHook("headerRender", lt), this.setBeginHook("nodeRender", dt), this.setBeginHook("nodeUpdated", this.beginNodeUpdatedHandler.bind(this)), this.setBeginHook("nodeExpanded", this.beginNodeExpanded.bind(this)), this.setBeginHook("nodeCollapsed", this.beginNodeCollapsed.bind(this)), this.addHook("nodeSelect", this.nodeSelectHandler.bind(this)), this.addHook("nodeAddSelect", this.nodeAddSelectionHandler.bind(this)), this.addHook("nodeRelease", this.nodeReleaseHandler.bind(this));
  }
  lastChildRecursive(e) {
    let t = e;
    for (; t; ) {
      const n = t.getLastChildNode();
      if (!t.data.node.expanded || !n)
        break;
      t = n;
    }
    return t;
  }
  onCreatedRowElement(e, t) {
    e.isFreezed ? this.emitHook("createHeaderRow", [e, this._args, this._context]) : this.emitHook("createNodeRow", [e, e.object, this._args]);
  }
  onUpdatedRowObject(e, t, n) {
    e.isFreezed ? this.emitHook("headerRender", [e, this._args, this._context]) : this.emitHook("nodeRender", [e, n, this._args]);
  }
  initVirtualDOM() {
    this._virtualDOMContainer.classList.add(Ht), this._virtualDOMContainer.style.height = "100%";
    const e = new Et({
      contextElement: this._virtualDOMContainer,
      // 헤더용 row 추가
      rowCount: 1,
      headerRowCount: 1,
      defaultRowHeight: this._args.defaultRowHeight,
      onCreatedRowElement: this.onCreatedRowElement.bind(this),
      onUpdatedRowObject: this.onUpdatedRowObject.bind(this),
      rowContainer: {
        role: "tree",
        tabIndex: 0
      }
    });
    return e.setRowHeight(0, this._args.defaultRowHeight ?? Re("tree-view.nodeHeaderRowHeight")), e.setRowVisible(0, this._args.displayHeader === !0), this.contextElement.appendChild(this._virtualDOMContainer), e;
  }
  initArgs() {
    this._args.className && this.contextElement.classList.add(this._args.className);
  }
  validateArgs() {
    if (this._args.headerRow.width.some((e, t) => !Qe(t, e)))
      throw new Error("Invalid width: Must end with 'px', and '*' is allowed for the content column.");
  }
  onDestroy() {
    this._virtualDOM.destroy();
  }
  get componentLabel() {
    return "tree-view";
  }
  get scrollTop() {
    return this._virtualDOM.scrollTop;
  }
  get displayHeader() {
    return this._args.displayHeader;
  }
  set displayHeader(e) {
    this._args.displayHeader !== e && (this._args.displayHeader = e, this.renderHeaderRow());
  }
  get multiSelect() {
    return this._args.multiSelect;
  }
  set multiSelect(e) {
    this._args.multiSelect !== e && (this._args.multiSelect = e, this.releaseSelectedNodes());
  }
  get columnWidthList() {
    return [...this._args.headerRow.width];
  }
  async renderHeaderRow() {
    const e = this._virtualDOM.getRowById(0);
    this._virtualDOM.setRowVisible(0, this._args.displayHeader === !0), this.emitHook("headerRender", [e, this._args, this._context]);
  }
  setTreeContext(e) {
    this._context = Object.assign(this._context, e), this.renderHeaderRow();
  }
  renderAllNode() {
    this._nodeLinker.travelAllNodes(({ data: { node: e } }) => e.updateNodeState());
  }
  getNodeRowId(e) {
    return this.getMapValue(e).virtualRow.rowId;
  }
  getNodeTopBottom(e) {
    const { virtualRow: t } = this.getMapValue(e);
    return { top: t.top, bottom: t.bottom };
  }
  getNodeByRowId(e) {
    return this._virtualDOM.getRowById(e).object;
  }
  expandNode(e) {
    return this.getNode(e).expand();
  }
  collapseNode(e) {
    return this.getNode(e).collapse();
  }
  /**
   * 해당 key의 모든 childNode를 expand (인자 생략 시 모든 노드 expand)
   */
  async expandAll(e) {
    const t = e ? this._nodeLinker.getNodeLink(e).getFirstChildNode() : this._nodeLinker.getFirstRootNode();
    t && (e !== void 0 && await this._nodeLinker.getNodeLink(e).data.node.expand(), await this._nodeLinker.travelNodes(t, ({ data: { node: n } }) => n.expand()));
  }
  /**
   * 해당 key의 모든 childNode를 collapse (인자 생략 시 모든 노드 expand)
   */
  async collapseAll(e) {
    const t = e ? this._nodeLinker.getNodeLink(e).getFirstChildNode() : this._nodeLinker.getFirstRootNode();
    t && (e !== void 0 && await this._nodeLinker.getNodeLink(e).data.node.collapse(), await this._nodeLinker.travelNodes(t, ({ data: { node: n } }) => n.collapse()));
  }
  setColumnCount(e) {
    this._args.headerRow.columnCount = e, this.setDefaultColumnWidths(), this.renderHeaderRow(), this.updateTreeTemplateColumns(), this.renderAllNode(), this.emitHook("changeColumnCount", [e]);
  }
  setDefaultColumnWidths() {
    const { width: e, columnCount: t } = this._args.headerRow;
    if (t > e.length) {
      const n = Array(t - e.length).fill(pn);
      e[0] || (n[0] = "*"), this._args.headerRow.width.push(...n);
    }
  }
  getColumnCount() {
    return this._args.headerRow.columnCount;
  }
  /**
   * 최상위 노드 개수 반환
   */
  getRootNodeCount() {
    return this._nodeLinker.getRootNodeCount();
  }
  async setHeaderRowChecked(e, t = !0) {
    this.setTreeContext({ headerRow: { checked: e } }), t && await this.emitHook("headerChangeChecked", [e]);
  }
  /**
   * 자식 포함 모든 노드 개수 반환
   */
  getNodeCount() {
    return this._nodeLinker.getNodeCount();
  }
  setColumnWidth(e, t) {
    if (e < 0 || e >= this._args.headerRow.columnCount)
      throw new Error(`columnId is out of range: ${e}`);
    if (!Qe(e, t))
      throw new Error("Invalid width: Must end with 'px', and '*' is allowed for the content column.");
    this._args.headerRow.width[e] = t, this.emitHook("columnWidthChange", [[...this._args.headerRow.width]]), this.updateTreeTemplateColumns();
  }
  /**
   * 현재 선택된 모든 노드 해제
   */
  async releaseSelectedNodes(...e) {
    const t = new Set(e), n = this.getSelectedNodes();
    await this.runPauseEmitContext(["nodeSelectionChange"], async () => {
      for (const i of n)
        t.has(i.key) || await i.release();
    }), await this.emitSelectionChange();
  }
  findNodeCallback(e, t) {
    const n = this.getNodeOrNull(e);
    return n ? t(n) : void console.warn(`node not found: ${e}`);
  }
  emitSelectionChange() {
    return this.emitHook("nodeSelectionChange", [this.getSelectedNodes()]);
  }
  async selectNode(e) {
    await this.runPauseEmitContext(
      ["nodeSelectionChange"],
      async () => {
        await this.releaseSelectedNodes(), await this.findNodeCallback(e, (t) => t.select());
      }
    ), await this.emitSelectionChange();
  }
  async addSelectNode(e) {
    await this.findNodeCallback(e, (t) => t.addSelect());
  }
  getSelectedNodes() {
    return [...this._selectedNode];
  }
  getSelectedNodesCount() {
    return this._selectedNode.length;
  }
  getNodesWithPredicate(e) {
    const t = [];
    return this._nodeLinker.travelAllNodes(({ data: { node: n } }) => void (e(n) && t.push(n))), t;
  }
  getCheckedNodes() {
    return this.getNodesWithPredicate((e) => e.checked);
  }
  getSubCheckedNodes() {
    return this.getNodesWithPredicate((e) => e.subChecked);
  }
  getUncheckedNodes() {
    return this.getNodesWithPredicate((e) => !e.checked);
  }
  getSelectedNodeOrNull() {
    return this._selectedNode[0] ?? null;
  }
  getDefaultMainColumnWidth() {
    const [e, t] = je(
      "tree-view.iconSize",
      "tree-view.defaultHorizontalPadding"
    );
    let n = e + t;
    return this._args.showIcon && (n += e), n;
  }
  async autoSizeColumn(e) {
    const [t, n] = je(
      "tree-view.defaultHorizontalPadding",
      "tree-view.levelIndentSize"
    ), { fontFamily: i, fontSize: s } = getComputedStyle(this.contextElement), o = yt(s, i);
    let d = o.calculateWidth(this.getColumnText(e));
    if (await this._nodeLinker.travelAllNodes(({ data: { node: a } }, h) => {
      d = Math.max(
        d,
        o.calculateWidth(a.getColumnText(e)) + (e === 0 ? h * n : 0)
      );
    }, (a) => a.hasChild() && a.data.node.expanded === !0), d += e === 0 ? this.getDefaultMainColumnWidth() : t * 2, d += mn, e === 0) {
      this.setColumnWidth(
        e,
        this.#e(d) ? "*" : `${d}px`
      );
      return;
    }
    this.setColumnWidth(e, `${d}px`);
  }
  #e(e) {
    const t = this.getColumnCount();
    let n = e;
    for (let i = 1; i < t; i++) {
      const s = parseInt(this._args.headerRow.width[i], 10);
      Number.isNaN(s) || (n += s);
    }
    return n < this._virtualDOMContainer.clientWidth;
  }
  getNodeOrNull(e) {
    return this._nodeLinker.getNodeLinkOrNull(e)?.data.node ?? null;
  }
  getNode(e) {
    return this.getMapValue(e).node;
  }
  getColumnText(e) {
    return this._args.headerRow.text[e] ?? "";
  }
  setColumnText(e, t) {
    if (e < 0 || e >= this._args.headerRow.columnCount)
      throw new Error(`columnId is out of range: ${e}`);
    this._args.headerRow.text[e] = t, this.renderHeaderRow();
  }
  updateNodeData(e, t) {
    this.getNode(e).updateNodeState(t);
  }
  updateNodeColumns(e, t) {
    this.getNode(e).updateNodeState({ columns: t });
  }
  updateTreeTemplateColumns() {
    ye(this.contextElement, {
      [Y.templateColumns]: Zt(this._args)
    });
  }
  async exceptInSelected(e) {
    await this.runPauseEmitContext(["nodeSelectionChange", "nodeRelease"], async () => {
      for (const n of e)
        await n.release();
    });
    const t = new Set(e.map((n) => n.key));
    this._selectedNode = this._selectedNode.filter((n) => !t.has(n.key));
  }
  async removeNode(e) {
    const t = this._nodeLinker.getNodeLinkOrNull(e);
    if (!t) {
      console.warn(`node not found: ${e}`);
      return;
    }
    const { virtualRow: n, node: i } = t.data, s = t.getParentNode();
    this._virtualDOM.forceLayout();
    const o = n.rowId, d = o + this._nodeLinker.getChildNodeCount(e), a = [i];
    this._nodeLinker.travelChildNodes(e, ({ data: { node: h } }) => void (h.selected && a.push(h))), await this.exceptInSelected(a), this._virtualDOM.removeRows(o, d), this._nodeLinker.removeNode(e), s && await this.hook.emit("nodeUpdated", [s.data.node]);
  }
  getSortedNodeList() {
    return [...this._virtualDOM.getRowIter()].slice(1).map((e) => e.object);
  }
  clear() {
    this._selectedNode.length = 0, this._virtualDOM.clearRows(), this._nodeLinker.clear();
  }
  getMapValue(e) {
    return this._nodeLinker.getNodeLink(e).data;
  }
  async moveNode(e, t) {
    const n = this.getNode(e);
    if (await this.emitHook("nodeCheckMoving", [n, t]) === !1)
      throw new Error("nodeCheckMoving hook return false");
    const i = n.serialize(), s = n.getNodeLink().getParentNode();
    await this.removeNode(e), this.addNode({
      ...i,
      insertKey: t.targetKey,
      position: t.position
    }), t.position === "firstChild" && await this.getNode(t.targetKey).expand(), s && await s.data.node.updateNodeState(), await this.emitHook("nodeMoved", [n, t]);
  }
  clearChildNodes(e) {
    const t = this._nodeLinker.getNodeLink(e);
    if (t.hasChild() === !1) return;
    const { node: n, virtualRow: i } = t.data;
    this._virtualDOM.forceLayout();
    const s = i.rowId + 1, o = s + (this._nodeLinker.getChildNodeCount(e) - 1);
    this._nodeLinker.clearChildNodes(e), this._virtualDOM.removeRows(s, o), this.hook.emit("nodeUpdated", [n]);
  }
  getNodeVisible(e) {
    return this.getNode(e).isVisible();
  }
  getRowVisible(e) {
    return this._virtualDOM.getRowById(e).visible;
  }
  getChildNodeList(e) {
    let t = this._nodeLinker.getNodeLink(e).getFirstChildNode();
    const n = [];
    for (; t; )
      n.push(t.data.node), t = t.getNextNode();
    return n;
  }
  getRootNodeList() {
    let e = this._nodeLinker.getFirstRootNode();
    const t = [];
    for (; e; )
      t.push(e.data.node), e = e.getNextNode();
    return t;
  }
  getParentNode(e) {
    const t = this._nodeLinker.getNodeLink(e).getParentNode();
    if (!t) throw new Error(`parent node not found: ${e}`);
    return this.getNode(t.key);
  }
  getAddingChildRowId(e) {
    const { virtualRow: t } = this.getMapValue(e);
    return t.rowId + this._nodeLinker.getChildNodeCount(e) + 1;
  }
  getAddingRowId(e) {
    const {
      insertKey: t,
      parentKey: n,
      position: i
    } = e;
    if (n === void 0 && t === void 0)
      return this._virtualDOM.getRowCount();
    if (this._virtualDOM.forceLayout(), t !== void 0) {
      const s = this.getMapValue(t).virtualRow.rowId;
      switch (i) {
        // 첫 자식 위치
        case "firstChild":
          return s + 1;
        case "after":
          return s + this._nodeLinker.getChildNodeCount(t) + 1;
        // 기본은 before로 처리
        default:
          return s;
      }
    }
    if (n)
      return this.getAddingChildRowId(n);
    throw new Error(`invalid addNode args: ${JSON.stringify(e)}`);
  }
  hasNode(e) {
    return this._nodeLinker.hasNode(e);
  }
  createNode(e) {
    if (this.hasNode(e.key)) throw new Error(`node already exists: ${e.key}`);
    return new Yt({
      nodeData: e,
      hook: this.hook,
      nodeLinker: this._nodeLinker
    });
  }
  getParentNodeByPosArgs(e) {
    const { parentKey: t, insertKey: n, position: i } = e;
    return n !== void 0 && i === "firstChild" ? this.getNode(n) : t !== void 0 ? this.getNode(t) : null;
  }
  /**
   * @param posArgsOrNull null 전달 시, rootNode 마지막에 추가
   * @param nodeList 추가할 노드 리스트
   */
  addNodeList(e, t) {
    const n = e ?? {}, i = this.getParentNodeByPosArgs(n), { parentNodeOrNull: s, visible: o } = i ? {
      parentNodeOrNull: i,
      visible: i.isVisible() && i.expanded === !0
    } : {
      parentNodeOrNull: null,
      visible: !0
    }, d = this.createNode.bind(this), a = t.flatMap((c) => on({
      visible: o,
      nodeData: c,
      createNodeFunc: d,
      parentNodeOrNull: s
    })), h = this._virtualDOM.insertRows(
      a.length,
      this.getAddingRowId(n),
      void 0,
      a.map(({ node: c }) => c),
      (c) => a[c].visible
    );
    return sn({
      positionArgs: n,
      nodeList: a,
      virtualRowList: h,
      nodeLinker: this._nodeLinker
    }), s?.updateNodeState(), a;
  }
  addNode(e) {
    if (typeof e.key != "string") throw new Error("key's type is not string");
    const {
      // position args
      parentKey: t,
      insertKey: n,
      position: i,
      ...s
    } = e, [o] = this.addNodeList({ parentKey: t, insertKey: n, position: i }, [s]);
    if (!o) throw new Error("first node is undefined");
    return o.node;
  }
  async selectRange(e, t) {
    const n = this.getMapValue(e.key), i = this.getMapValue(t.key), s = n.virtualRow.rowId, o = i.virtualRow.rowId, d = s < o ? [s, o] : [o, s];
    await this.runPauseEmitContext(["nodeSelectionChange"], async () => {
      await e.addSelect(), await this.releaseSelectedNodes();
      for (let a = d[0]; a <= d[1]; ++a)
        await this._virtualDOM.getRowById(a).object.addSelect();
    }), await this.emitSelectionChange();
  }
  scrollToNode(e) {
    this._virtualDOM.forceLayout(), this._virtualDOM.scrollToRow(this.getNodeRowId(e));
  }
  focus() {
    this.contextElement.focus();
  }
}
const De = "ir-style/tree-view-drag-drop-move", et = 8;
async function _n(r) {
  const e = r();
  return e === void 0 ? !0 : e instanceof Promise ? await e : e;
}
function wn(r, e, t) {
  return t - r < et ? "before" : e - t < et ? "after" : "firstChild";
}
function bn(r) {
  const e = r.dataTransfer?.getData(De);
  return e ? JSON.parse(e) : null;
}
const tt = {
  row: null,
  nodeKey: "",
  cursorType: "before"
}, En = {
  srcNodeData: { key: "", caption: "" },
  srcTreeViewId: ""
};
class xi extends se {
  constructor(e = {}) {
    super(), this._args = e;
  }
  mount(e, t) {
    const {
      canNodeMoveDrop: n,
      canNodeMoveStart: i,
      canNodeMoveDragOver: s,
      onDropNodeData: o,
      onDragEnd: d
    } = this._args;
    this.addPluginHook(e, "nodeDragStart", E), this.addPluginHook(e, "nodeDragOver", y), this.addPluginHook(e, "nodeDragEnd", g), this.addPluginHook(e, "nodeDrop", p), this.addPluginHook(e, "treeDragLeave", N);
    let a = { ...tt }, h = { ...En }, c = !1;
    function N() {
      H();
    }
    function k(_, w) {
      if (!_.dataTransfer) throw new Error("dataTransfer is null");
      c = !1, h = w, a = { ...tt }, _.dataTransfer.setData(De, JSON.stringify(w));
    }
    function v(_, w, b) {
      if (!_.dataTransfer?.types.includes(De)) return !1;
      const x = h.srcTreeViewId === e.uuid;
      return x && (w.key === h.srcNodeData.key || w.getNodeLink().isProgenyNode(h.srcNodeData.key)) ? !1 : s?.(x, w, b) ?? !0;
    }
    function E(_, w) {
      (i?.(w) ?? !0) && k(_, { srcNodeData: w.serialize(), srcTreeViewId: e.uuid });
    }
    function y(_, w, b) {
      const { top: x, bottom: R } = e.getNodeTopBottom(w.key), C = wn(x, R, e.scrollTop + _.offsetY);
      _.dataTransfer && v(_, w, C) ? (_.preventDefault(), _.dataTransfer.dropEffect = "move", T(w, b, C)) : H();
    }
    function T(_, w, b) {
      a.row === w && a.cursorType === b || (H(), a = { nodeKey: _.key, row: w, cursorType: b }, w.getRowElement().dataset.drag = b);
    }
    function H() {
      a.row && (delete a.row.getRowElement().dataset.drag, a.row = null);
    }
    function g(_, w) {
      try {
        _.dataTransfer?.dropEffect === "move" && d?.(c, { ...h });
      } finally {
        H();
      }
    }
    async function p(_, w) {
      try {
        const b = bn(_), x = { ...a };
        if (!b || !await _n(() => n?.(b, x))) return;
        c = !0, o?.(b.srcTreeViewId === e.uuid, b, x);
      } finally {
        H();
      }
    }
  }
}
class Li extends se {
  constructor(e = {}) {
    super(), this._options = e;
  }
  mount(e, t) {
    const n = {
      isRunning: !1,
      updateInfoList: []
    }, i = async (o) => {
      if (!n.isRunning)
        try {
          n.isRunning = !0, n.updateInfoList.length = 0;
          for (const d of xn(o))
            await s(d);
          for (const d of Ln(o))
            await s(d);
          this._options.onChanged?.(n.updateInfoList);
        } finally {
          n.isRunning = !1;
        }
    };
    t.addHook("nodeChangeChecked", i);
    async function s(o) {
      const d = e.getNode(o.key);
      n.updateInfoList.push(o), o.checked !== void 0 && await d.changeCheck(o.checked), o.subChecked !== void 0 && await d.updateNodeState({ subChecked: o.subChecked });
    }
    this.addUnmountTask(() => {
      t.removeHook("nodeChangeChecked", i);
    });
  }
}
function yn(r) {
  let e = 0, t = 0, n = 0, i = r.getFirstChildNode();
  for (; i; )
    i.data.node.checked ? ++e : ++t, i.data.node.subChecked && ++n, i = i.getNextNode();
  return { checked: e, unchecked: t, subChecked: n };
}
function* xn(r) {
  const e = r.getNodeLink(), t = [], n = r.checked;
  for (yield { key: r.key, checked: n, subChecked: !1 }, e.getFirstChildNode() && t.push(e.getFirstChildNode()); t.length; ) {
    const i = t.pop(), s = i.getNextNode(), o = i.getFirstChildNode();
    n !== i.data.node.checked && (yield { key: i.key, checked: n, subChecked: !1 }), s && t.push(s), o && t.push(o);
  }
}
function* Ln(r) {
  let e = r.getNodeLink().getParentNode();
  for (; e; ) {
    const t = yn(e), n = t.unchecked === 0, i = !n && t.checked + t.subChecked > 0;
    (e.data.node.checked !== n || e.data.node.subChecked !== i) && (yield {
      key: e.key,
      checked: n,
      subChecked: i
    }), e = e.getParentNode();
  }
}
const Pe = [
  Y.stickyRightCol2,
  Y.stickyRightCol3,
  Y.stickyRightCol4,
  Y.stickyRightCol5
];
function* Sn(r, e) {
  let t = 0;
  const n = e - 1, i = Math.min(Pe.length, n - 1);
  for (let s = n; s > n - i; s--)
    t += parseInt(r[s], 10), yield { right: t, varName: Pe[n - s] };
}
class Si extends se {
  constructor() {
    super();
  }
  mount(e, t, n) {
    n.classList.add(Ke), i(), t.addHook("columnWidthChange", i), t.addHook("changeColumnCount", i), this.addUnmountTask(() => {
      n.classList.remove(Ke), s(), t.removeHook("columnWidthChange", i), t.removeHook("changeColumnCount", i);
    });
    function i() {
      for (const { right: o, varName: d } of Sn(e.columnWidthList, e.getColumnCount()))
        ye(n, {
          [d]: `${o}px`
        });
    }
    function s() {
      for (const o of Pe)
        n.style.removeProperty(o.match(/\((.*)\)/)[1]);
    }
  }
}
class Ii extends se {
  constructor(e = {}) {
    super(), this._args = e;
  }
  mount(e, t, n) {
    const {
      placement: i = "bottom-start",
      interval: s = 0,
      offset: o
    } = this._args, d = Lt({
      containerElement: n,
      placement: i,
      offset: o,
      interval: s
    });
    this.addUnmountTask(() => {
      d.destroy();
    });
    const a = (h, c) => {
      Object.assign(
        h.template.text.dataset,
        {
          irTooltip: "true",
          irTooltipText: c.caption
        }
      );
    };
    this.addPluginHook(e, "createNodeRow", a), this.addPluginHook(e, "nodeRender", a);
  }
}
const B = "dialog", le = {
  dialog: {
    "&": B,
    transparent: `${B}--transparent`,
    "is-visible": "is-visible"
  },
  dialogWrapper: {
    "&": `${B}__wrapper`
  },
  dialogHeader: {
    "&": `${B}__header`
  },
  dialogHeaderTitle: {
    "&": `${B}__header-title`
  },
  dialogHeaderActions: {
    "&": `${B}__header-actions`
  },
  dialogContent: {
    "&": `${B}__content`
  },
  dialogFooter: {
    "&": `${B}__footer`
  },
  dialogFooterLeft: {
    "&": `${B}__footer-left`
  },
  dialogFooterRight: {
    "&": `${B}__footer-right`
  },
  dialogButtonClose: {
    "&": `${B}__button-close`
  }
}, In = ["yes", "no", "ok", "cancel", "retry", "ignore", "stop"];
function Tn() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div"), i = document.createElement("div"), s = document.createElement("i"), o = document.createElement("div"), d = {
    cancel: document.createElement("button"),
    ignore: document.createElement("button"),
    no: document.createElement("button"),
    ok: document.createElement("button"),
    retry: document.createElement("button"),
    stop: document.createElement("button"),
    yes: document.createElement("button")
  }, a = document.createElement("i"), h = document.createElement("button");
  return r.tabIndex = -1, r.classList.add("ir-confirm", le.dialog["&"], ot.zIndex.message), e.className = le.dialogWrapper["&"], t.className = le.dialogContent["&"], n.className = de.modal, i.className = de.content, o.className = de.actions, a.classList.add("ir-icon", "ir-icon--close"), h.className = de.btnClose, o.appendChild(d.no), o.appendChild(d.stop), o.appendChild(d.ignore), o.appendChild(d.retry), o.appendChild(d.yes), o.appendChild(d.ok), h.appendChild(a), n.appendChild(h), n.appendChild(s), n.appendChild(i), n.appendChild(o), t.appendChild(n), e.appendChild(t), r.appendChild(e), {
    dialog: r,
    confirmIcon: s,
    confirmContent: i,
    confirmActions: o,
    buttonMap: d,
    closeButton: h,
    resetButtonCls() {
      Object.values(d).forEach((c) => c.className = Dt);
    }
  };
}
const Rn = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = Tn()), r;
  };
})();
function re() {
  return Rn();
}
const Hn = {
  error: "ir-icon--cancel-circle-fill ir-icon--danger",
  info: "ir-icon--information-circle-fill ir-icon--info",
  question: "ir-icon--question ir-icon--info",
  warning: "ir-icon--error ir-icon--warning"
}, Dn = /* @__PURE__ */ new Set([
  "class",
  "style",
  "title",
  "id"
]), Pn = {
  onTagAttr(r, e, t, n) {
    if (!n && Dn.has(e))
      return `${e}="${It.escapeAttrValue(t)}"`;
  }
}, _e = {
  count: 0
}, Ti = () => _e.count > 0;
class Ri {
  constructor(e) {
    this.args = e;
    const {
      iconType: t = "info",
      buttonType: n = ["ok"],
      messageHTML: i,
      msgMap: s = {},
      onClick: o,
      escButton: d,
      contentElement: a
    } = e;
    this.visible = !1, this.iconType = t, this.buttonType = n, i && (this.messageHTML = St(i, Pn)), a && (this.contentElement = a), this.msgMap = {
      ...s
    }, this.escButton = d, this.escController = it(this), o && (this.onClick = o);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentElement;
  activeButtonId = -1;
  iconType;
  buttonType;
  msgMap;
  visible;
  messageHTML;
  escButton;
  escHandler;
  enterHandler = null;
  escController;
  updateContent() {
    const e = re();
    if (this.messageHTML)
      e.confirmContent.innerHTML = this.messageHTML;
    else if (this.contentElement)
      if (Object.getPrototypeOf(this.contentElement).jquery)
        e.confirmContent.replaceChildren(...this.contentElement);
      else if (this.contentElement instanceof HTMLElement || typeof this.contentElement == "string")
        e.confirmContent.replaceChildren(this.contentElement);
      else
        throw new Error("not supported type contentElement");
    else
      throw new Error("html or element must be provided!");
  }
  _show() {
    const e = re();
    _e.count++, this.updateContent(), this.visible = !0, e.confirmIcon.className = `${de.icon} ir-icon ${Hn[this.iconType] || ""}`, e.closeButton.onclick = () => this.hide(), this.args.hideCloseButton ? e.closeButton.classList.add("display--none") : e.closeButton.classList.remove("display--none");
    for (const n of In)
      e.buttonMap[n].remove(), e.buttonMap[n].innerText = this.msgMap[n] ?? ve.t(`confirm.${n}`), e.buttonMap[n].onclick = () => {
        this.hide().then(() => this._doClick(n));
      };
    for (const n of this.buttonType)
      e.confirmActions.appendChild(e.buttonMap[n]);
    e.dialog.isConnected || Oe("message").appendChild(e.dialog), e.dialog.classList.add(le.dialog["is-visible"]), e.dialog.focus(), e.dialog.onkeydown = this.dialogKeyDownHandler.bind(this);
    const t = this.buttonType.indexOf(this.args.enterButton ?? this.buttonType[0]);
    this.setFocus(t === -1 ? 0 : t), this.args.disabledKeyAction !== !0 && this._registerEnterESCHandler();
  }
  setFocus(e) {
    const { confirmActions: t, resetButtonCls: n } = re();
    e < 0 ? e = 0 : e >= this.buttonType.length && (e = this.buttonType.length - 1), this.activeButtonId = e, n();
    const i = t.children[e];
    i.classList.add(Pt), i.focus();
  }
  prevFocus() {
    this.activeButtonId === 0 ? this.setFocus(this.buttonType.length - 1) : this.setFocus(this.activeButtonId - 1);
  }
  nextFocus() {
    this.activeButtonId === this.buttonType.length - 1 ? this.setFocus(0) : this.setFocus(this.activeButtonId + 1);
  }
  dialogKeyDownHandler(e) {
    let t = null;
    e.key === "ArrowRight" ? t = this.nextFocus : e.key === "ArrowLeft" ? t = this.prevFocus : e.key === "Tab" && (e.shiftKey ? t = this.prevFocus : t = this.nextFocus), t && (t.call(this), e.preventDefault());
  }
  _registerEnterESCHandler() {
    this.escController.create();
  }
  show() {
    if (_e.count > 0) {
      console.warn("already opened a confirm");
      return;
    }
    setTimeout(() => this._show(), 0);
  }
  onESC() {
    const e = re();
    this.escButton && e.buttonMap[this.escButton].click();
  }
  async hide() {
    if (this.visible !== !1)
      return this.escController.destroy(), _e.count = 0, new Promise((e) => {
        const t = re();
        this.visible = !1, t.dialog.classList.remove(le.dialog["is-visible"]), this.enterHandler && vt("Enter", this.enterHandler), this.enterHandler = null;
        const n = this.args.focusAfterHide;
        n instanceof HTMLElement ? setTimeout(() => {
          n.focus(), e();
        }) : e();
      });
  }
  _doClick(e) {
    this.onClick(e);
  }
  onClick(e) {
  }
}
const oe = "time-picker", te = {
  timePicker: {
    "&": oe,
    "is-visible": "is-visible"
  },
  timePickerPanelWrapper: {
    "&": `${oe}__panel-wrapper`
  },
  timePickerButtonPanel: {
    "&": `${oe}__button-panel`
  },
  timePickerPanel: {
    "&": `${oe}__panel`
  },
  timePickerPanelItem: {
    "&": `${oe}__panel-item`
  },
  timePickerDivider: {
    "&": `${oe}__divider`
  }
};
function On(r, e) {
  const t = e ? r : r + ":00";
  if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(t)) {
    const { hour: n, minute: i, second: s } = ct(t);
    return n < 0 || n >= 24 || i < 0 || i >= 60 ? !1 : !(e && s < 0 || s >= 60);
  } else
    return !1;
}
function ct(r) {
  const [e, t, n] = r.split(":");
  return {
    hour: parseInt(e),
    minute: parseInt(t),
    second: parseInt(n)
  };
}
function Mn(r, e, t) {
  return [
    r.toString().padStart(2, "0"),
    e.toString().padStart(2, "0"),
    t.toString().padStart(2, "0")
  ].join(":");
}
const me = 12, An = 60, Fn = 60, zn = ["period", "hour", "minute", "second"];
function Un() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), n = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")], [i, s, o, d] = n;
  r.classList.add(te.timePicker["&"], ot.zIndex.popover), n.forEach((C, L) => {
    C.setAttribute("data-type", zn[L]), C.className = te.timePickerPanel["&"], e.appendChild(C);
  }), e.className = te.timePickerPanelWrapper["&"], t.className = te.timePickerButtonPanel["&"];
  const a = document.createElement("button");
  a.classList.add("button"), a.type = "button", t.appendChild(a), r.appendChild(e), r.appendChild(t);
  function h(C) {
    const L = document.createElement("div");
    return L.className = te.timePickerPanelItem["&"], L.dataset.text = C, L.innerText = C, L;
  }
  return pe(2).forEach(() => n[0].appendChild(h(""))), pe(me).forEach((C) => n[1].appendChild(h(`${C}`))), pe(An).forEach((C) => n[2].appendChild(h(`${C}`))), pe(Fn).forEach((C) => n[3].appendChild(h(`${C}`))), {
    elements: {
      nowButton: a,
      secondPanel: d,
      timePicker: r
    },
    updateI18n: c,
    removeSelected: N,
    getTimeElements: k,
    scrollIntoView: v,
    selectTime: E,
    isAM: y,
    setPeriod: T,
    setHourId: H,
    setMinuteId: g,
    setSecondId: p,
    periodGenerator: _,
    getCurrentTime: w,
    hourGenerator: b,
    minuteGenerator: x,
    secondGenerator: R
  };
  function c() {
    a.innerHTML = "", a.appendChild(be("ir-icon--check")), a.append(ve.t("timePicker.btnNow")), n[0].children[0].innerHTML = "", n[0].children[1].innerHTML = "", n[0].children[0].append(ve.t("timePicker.am")), n[0].children[1].append(ve.t("timePicker.pm"));
  }
  function N() {
    r.querySelectorAll(".is-selected").forEach((C) => C.classList.remove("is-selected"));
  }
  function k(C, L, q) {
    const X = C < me, U = X ? C : C - me, Z = X ? 0 : 1;
    return {
      periodElement: i.children[Z],
      hourElement: s.children[U],
      minuteElement: o.children[L],
      secondElement: d.children[q]
    };
  }
  function v(C, L, q) {
    const { hourElement: X, minuteElement: U, secondElement: Z } = k(C, L, q);
    s.scrollTop = X.offsetTop - s.clientHeight / 2, o.scrollTop = U.offsetTop - o.clientHeight / 2, d.scrollTop = Z.offsetTop - d.clientHeight / 2;
  }
  function E(C, L, q) {
    const { periodElement: X, hourElement: U, minuteElement: Z, secondElement: ne } = k(C, L, q);
    N(), X.classList.add("is-selected"), U.classList.add("is-selected"), Z.classList.add("is-selected"), ne.classList.add("is-selected");
  }
  function y() {
    return i.children[0].classList.contains("is-selected");
  }
  function T(C) {
    i.children[(C + 1) % 2].classList.remove("is-selected"), i.children[C].classList.add("is-selected");
  }
  function H(C) {
    s.querySelector(".is-selected")?.classList.remove("is-selected"), s.children[C].classList.add("is-selected");
  }
  function g(C) {
    o.querySelector(".is-selected")?.classList.remove("is-selected"), o.children[C].classList.add("is-selected");
  }
  function p(C) {
    d.querySelector(".is-selected")?.classList.remove("is-selected"), d.children[C].classList.add("is-selected");
  }
  function* _() {
    yield [0, i.children[0]], yield [1, i.children[1]];
  }
  function w() {
    return Mn(
      Se(s) + (y() ? 0 : me),
      Se(o),
      Se(d)
    );
  }
  function* b() {
    let C = 0;
    for (const L of s.children)
      yield [C++, L];
  }
  function* x() {
    let C = 0;
    for (const L of o.children)
      yield [C++, L];
  }
  function* R() {
    let C = 0;
    for (const L of d.children)
      yield [C++, L];
  }
}
function Se(r) {
  const e = r.querySelector(".is-selected");
  return e instanceof HTMLElement ? parseInt(e.innerText || "0", 10) : 0;
}
const Bn = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = Un()), r;
  };
})();
function Vn({ uuid: r, refElement: e, onChange: t, visibleSeconds: n }) {
  let i = !1, s = () => {
  };
  const {
    elements: o,
    getCurrentTime: d,
    selectTime: a,
    scrollIntoView: h,
    updateI18n: c,
    hourGenerator: N,
    minuteGenerator: k,
    secondGenerator: v,
    periodGenerator: E,
    setPeriod: y,
    setHourId: T,
    setMinuteId: H,
    setSecondId: g
  } = Bn(), p = {
    setTime(b) {
      const x = n ? b : b + ":00", { hour: R, minute: C, second: L } = ct(x);
      a(R, C, L), h(R, C, L);
    },
    show: () => {
      if (!i) {
        c(), i = !0, _.create(), w.create(), o.nowButton.onclick = (b) => {
          const x = He().format("HH:mm:ss");
          p.setTime(x), t(b, x);
        };
        for (const [b, x] of E())
          x.onclick = (R) => {
            y(b), t(R, d());
          };
        for (const [b, x] of N())
          x.onclick = (R) => {
            T(b), t(R, d());
          };
        for (const [b, x] of k())
          x.onclick = (R) => {
            H(b), t(R, d());
          };
        if (n) {
          for (const [b, x] of v())
            x.onclick = (R) => {
              g(b), t(R, d());
            };
          o.secondPanel.style.removeProperty("display");
        } else
          o.secondPanel.style.setProperty("display", "none");
        o.timePicker.isConnected || Oe("popover").appendChild(o.timePicker), o.timePicker.style.removeProperty("display"), o.timePicker.setAttribute("data-uuid", r), setTimeout(() => {
          o.timePicker.classList.add(te.timePicker["is-visible"]), s(), s = _t(e, o.timePicker);
        }, 0);
      }
    },
    hide: () => {
      i && (_.destroy(), w.destroy(), o.timePicker.classList.remove(te.timePicker["is-visible"]), o.timePicker.addEventListener("transitionend", (b) => {
        b.currentTarget === b.target && (i = !1, r === o.timePicker.getAttribute("data-uuid") && (s(), o.timePicker.remove()));
      }, { once: !0 }));
    },
    onESC: () => p.hide(),
    get visible() {
      return i;
    }
  }, _ = it(p), w = Bt({
    eventElements: [o.timePicker],
    clickOutsideFunc: () => p.hide()
  });
  return p;
}
const Ie = { checkbox: Ot, checkboxWrapper: st, checkboxInput: Ae }, Ce = { input: Mt, inputNative: At, inputSuffix: Ft, inputPrefix: zt };
class Hi extends Me {
  input;
  button;
  timePickerHandler;
  latestValue;
  _value;
  constructor(e) {
    super(e);
    const { visibleSeconds: t = !1 } = e, n = t ? "HH:mm:ss" : "HH:mm";
    if (this.contextElement.className = Ce.input, this.input = document.createElement("input"), this.input.placeholder = n, this.input.className = Ce.inputNative, this.button = document.createElement("button"), this.button.appendChild(be("ir-icon--watch")), this.button.className = Ce.inputSuffix, this.latestValue = e.value || "", this.button.onclick = () => this.toggle(), this.timePickerHandler = Vn({
      uuid: this.uuid,
      refElement: this.contextElement,
      visibleSeconds: t,
      onChange: (i, s) => {
        const o = He(s, "HH:mm:ss", !0).format(n);
        this.value = o, this.onChange(o);
      }
    }), e.checkbox) {
      const i = document.createElement("div"), s = document.createElement("label"), o = document.createElement("input");
      o.setAttribute("type", "checkbox"), i.classList.add(Ie.checkbox, Ce.inputPrefix), s.className = Ie.checkboxWrapper, o.className = Ie.checkboxInput, s.appendChild(o), i.appendChild(s), this.contextElement.appendChild(i), o.checked = !e.disabled, o.onchange = () => this.disabled = !o.checked, this.addCoreElement(i);
    }
    this.contextElement.appendChild(this.input), this.contextElement.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.disabled = e.disabled === !0, e.onChange && (this.onChange = e.onChange), e.value && (this.value = He(e.value, n).format(n)), this.input.onblur = () => {
      On(this.input.value, t) ? this.value = this.input.value : this.value = this.latestValue;
    };
  }
  get componentLabel() {
    return "time-picker";
  }
  get hour() {
    return 0;
  }
  get minute() {
    return 0;
  }
  get second() {
    return 0;
  }
  get inputCheckbox() {
    return this.contextElement.querySelector(".checkbox__input");
  }
  get visible() {
    return this.timePickerHandler.visible;
  }
  get disabled() {
    return this.input.disabled;
  }
  get value() {
    return this._value;
  }
  set disabled(e) {
    this.input.disabled = e, this.button.disabled = e;
  }
  set value(e) {
    this._value = e, this.input.value = e || "", this.latestValue = this.input.value;
  }
  show() {
    this.timePickerHandler.show(), this.timePickerHandler.setTime(this.value || "00:00:00");
  }
  hide() {
    this.timePickerHandler.hide();
  }
  toggle() {
    this.visible ? this.hide() : this.show();
  }
  /*
   * Events
   */
  onChange(e) {
  }
}
const z = typeof window < "u" ? window : null, Ue = z === null, ce = Ue ? void 0 : z.document, V = "addEventListener", $ = "removeEventListener", Te = "getBoundingClientRect", ae = "_a", G = "_b", K = "_c", Ne = "horizontal", W = () => !1, $n = Ue ? "calc" : `${["", "-webkit-", "-moz-", "-o-"].filter((r) => {
  const e = ce.createElement("div");
  return e.style.cssText = `width:${r}calc(9px)`, !!e.style.length;
}).shift()}calc`, ht = (r) => typeof r == "string" || r instanceof String, nt = (r) => {
  if (ht(r)) {
    const e = ce.querySelector(r);
    if (!e)
      throw new Error(`Selector ${r} did not match a DOM element`);
    return e;
  }
  return r;
}, D = (r, e, t) => {
  const n = r[e];
  return n !== void 0 ? n : t;
}, ke = (r, e, t, n) => {
  if (e) {
    if (n === "end")
      return 0;
    if (n === "center")
      return r / 2;
  } else if (t) {
    if (n === "start")
      return 0;
    if (n === "center")
      return r / 2;
  }
  return r;
}, Gn = (r, e) => {
  const t = ce.createElement("div");
  return t.className = `gutter gutter-${e}`, t;
}, Wn = (r, e, t) => {
  const n = {};
  return ht(e) ? n[r] = e : n[r] = `${$n}(${e}% - ${t}px)`, n;
}, jn = (r, e) => ({ [r]: `${e}px` }), Kn = (r, e = {}) => {
  if (Ue) return {};
  let t = r, n, i, s, o, d, a;
  Array.from && (t = Array.from(t));
  const c = nt(t[0]).parentNode, N = getComputedStyle ? getComputedStyle(c) : null, k = N ? N.flexDirection : null;
  let v = D(e, "sizes") || t.map(() => 100 / t.length);
  const E = D(e, "minSize", 100), y = Array.isArray(E) ? E : t.map(() => E), T = D(e, "maxSize", 1 / 0), H = Array.isArray(T) ? T : t.map(() => T), g = D(e, "expandToMin", !1), p = D(e, "gutterSize", 10), _ = D(e, "gutterAlign", "center"), w = D(e, "snapOffset", 30), b = Array.isArray(w) ? w : t.map(() => w), x = D(e, "dragInterval", 1), R = D(e, "direction", Ne), C = D(
    e,
    "cursor",
    R === Ne ? "col-resize" : "row-resize"
  ), L = D(e, "gutter", Gn), q = D(
    e,
    "elementStyle",
    Wn
  ), X = D(e, "gutterStyle", jn);
  R === Ne ? (n = "width", i = "clientX", s = "left", o = "right", d = "clientWidth") : R === "vertical" && (n = "height", i = "clientY", s = "top", o = "bottom", d = "clientHeight");
  function U(f, l, u, m) {
    const S = q(n, l, u, m);
    Object.keys(S).forEach((A) => {
      f.style[A] = S[A];
    });
  }
  function Z(f, l, u) {
    const m = X(n, l, u);
    Object.keys(m).forEach((S) => {
      f.style[S] = m[S];
    });
  }
  function ne() {
    return a.map((f) => f.size);
  }
  function Be(f) {
    return "touches" in f ? f.touches[0][i] : f[i];
  }
  function Ve(f) {
    const l = a[this.a], u = a[this.b], m = l.size + u.size;
    l.size = f / this.size * m, u.size = m - f / this.size * m, U(l.element, l.size, this[G], l.i), U(u.element, u.size, this[K], u.i);
  }
  function gt(f) {
    let l;
    const u = a[this.a], m = a[this.b];
    this.dragging && (l = Be(f) - this.start + (this[G] - this.dragOffset), x > 1 && (l = Math.round(l / x) * x), l <= u.minSize + u.snapOffset + this[G] ? l = u.minSize + this[G] : l >= this.size - (m.minSize + m.snapOffset + this[K]) && (l = this.size - (m.minSize + this[K])), l >= u.maxSize - u.snapOffset + this[G] ? l = u.maxSize + this[G] : l <= this.size - (m.maxSize - m.snapOffset + this[K]) && (l = this.size - (m.maxSize + this[K])), Ve.call(this, l), D(e, "onDrag", W)(ne()));
  }
  function $e() {
    const f = a[this.a].element, l = a[this.b].element, u = f[Te](), m = l[Te]();
    this.size = u[n] + m[n] + this[G] + this[K], this.start = u[s], this.end = u[o];
  }
  function ft(f) {
    if (!getComputedStyle) return null;
    const l = getComputedStyle(f);
    if (!l) return null;
    let u = f[d];
    return u === 0 ? null : (R === Ne ? u -= parseFloat(l.paddingLeft) + parseFloat(l.paddingRight) : u -= parseFloat(l.paddingTop) + parseFloat(l.paddingBottom), u);
  }
  function Ge(f) {
    const l = ft(c);
    if (l === null || y.reduce((A, F) => A + F, 0) > l)
      return f;
    let u = 0;
    const m = [], S = f.map((A, F) => {
      const ee = l * A / 100, ue = ke(
        p,
        F === 0,
        F === f.length - 1,
        _
      ), ge = y[F] + ue;
      return ee < ge ? (u += ge - ee, m.push(0), ge) : (m.push(ee - ge), ee);
    });
    return u === 0 ? f : S.map((A, F) => {
      let ee = A;
      if (u > 0 && m[F] - u > 0) {
        const ue = Math.min(
          u,
          m[F] - u
        );
        u -= ue, ee = A - ue;
      }
      return ee / l * 100;
    });
  }
  function pt() {
    const f = this, l = a[f.a].element, u = a[f.b].element;
    f.dragging && D(e, "onDragEnd", W)(ne()), f.dragging = !1, z[$]("mouseup", f.stop), z[$]("touchend", f.stop), z[$]("touchcancel", f.stop), z[$]("mousemove", f.move), z[$]("touchmove", f.move), f.stop = null, f.move = null, l[$]("selectstart", W), l[$]("dragstart", W), u[$]("selectstart", W), u[$]("dragstart", W), l.style.userSelect = "", l.style.webkitUserSelect = "", l.style.MozUserSelect = "", l.style.pointerEvents = "", u.style.userSelect = "", u.style.webkitUserSelect = "", u.style.MozUserSelect = "", u.style.pointerEvents = "", f.gutter.style.cursor = "", f.parent.style.cursor = "", ce.body.style.cursor = "";
  }
  function mt(f) {
    if ("button" in f && f.button !== 0)
      return;
    const l = this, u = a[l.a].element, m = a[l.b].element;
    l.dragging || D(e, "onDragStart", W)(ne()), f.preventDefault(), l.dragging = !0, l.move = gt.bind(l), l.stop = pt.bind(l), z[V]("mouseup", l.stop), z[V]("touchend", l.stop), z[V]("touchcancel", l.stop), z[V]("mousemove", l.move), z[V]("touchmove", l.move), u[V]("selectstart", W), u[V]("dragstart", W), m[V]("selectstart", W), m[V]("dragstart", W), u.style.userSelect = "none", u.style.webkitUserSelect = "none", u.style.MozUserSelect = "none", u.style.pointerEvents = "none", m.style.userSelect = "none", m.style.webkitUserSelect = "none", m.style.MozUserSelect = "none", m.style.pointerEvents = "none", l.gutter.style.cursor = C, l.parent.style.cursor = C, ce.body.style.cursor = C, $e.call(l), l.dragOffset = Be(f) - l.end;
  }
  v = Ge(v);
  const Q = [];
  a = t.map((f, l) => {
    const u = {
      element: nt(f),
      size: v[l],
      minSize: y[l],
      maxSize: H[l],
      snapOffset: b[l],
      i: l
    };
    let m;
    if (l > 0 && (m = {
      a: l - 1,
      b: l,
      dragging: !1,
      direction: R,
      parent: c
    }, m[G] = ke(
      p,
      l - 1 === 0,
      !1,
      _
    ), m[K] = ke(
      p,
      !1,
      l === t.length - 1,
      _
    ), k === "row-reverse" || k === "column-reverse")) {
      const S = m.a;
      m.a = m.b, m.b = S;
    }
    if (l > 0) {
      const S = L(l, R, u.element);
      Z(S, p, l), m[ae] = mt.bind(m), S[V](
        "mousedown",
        m[ae]
      ), S[V](
        "touchstart",
        m[ae]
      ), c.insertBefore(S, u.element), m.gutter = S;
    }
    return U(
      u.element,
      u.size,
      ke(
        p,
        l === 0,
        l === t.length - 1,
        _
      ),
      l
    ), l > 0 && Q.push(m), u;
  });
  function We(f) {
    const l = f.i === Q.length, u = l ? Q[f.i - 1] : Q[f.i];
    $e.call(u);
    const m = l ? u.size - f.minSize - u[K] : f.minSize + u[G];
    Ve.call(u, m);
  }
  c.offsetWidth > 0 && a.forEach((f) => {
    const l = f.element[Te]()[n];
    l < f.minSize && (g ? We(f) : f.minSize = l);
  });
  function Ct(f) {
    const l = Ge(f);
    l.forEach((u, m) => {
      if (m > 0) {
        const S = Q[m - 1], A = a[S.a], F = a[S.b];
        A.size = l[m - 1], F.size = u, U(A.element, A.size, S[G], A.i), U(F.element, F.size, S[K], F.i);
      }
    });
  }
  function Nt(f, l) {
    Q.forEach((u) => {
      if (l !== !0 ? u.parent.removeChild(u.gutter) : (u.gutter[$](
        "mousedown",
        u[ae]
      ), u.gutter[$](
        "touchstart",
        u[ae]
      )), f !== !0) {
        const m = q(
          n,
          u.a.size,
          u[G]
        );
        Object.keys(m).forEach((S) => {
          a[u.a].element.style[S] = "", a[u.b].element.style[S] = "";
        });
      }
    });
  }
  return {
    setSizes: Ct,
    getSizes: ne,
    collapse(f) {
      We(a[f]);
    },
    destroy: Nt,
    parent: c,
    pairs: Q
  };
};
function Yn(r) {
  const e = r[0] instanceof HTMLElement ? r[0] : document.querySelector(r[0]);
  xe(e, "First element is not found.");
  const t = e.parentElement;
  return xe(t, "Parent element is not found."), t;
}
const qn = {
  gutterCls: "thick",
  direction: "horizontal",
  snapOffset: 10,
  dragInterval: 5,
  minSize: 100
}, Xn = {
  gutterSize: {
    thin: 1,
    thick: 6
  }
}, Jn = 100, Zn = 0.1;
class Qn extends rt {
  _splitHandler;
  _splitElements;
  #e;
  #r = [];
  #i = [];
  #t = {
    dragged: !1,
    dragStartSize: 0,
    beforeCollapsed: !1
  };
  #n = {
    prevSize: 0
  };
  constructor({ elements: e, options: t }) {
    super({
      contextElement: Yn(e)
    }), this.#e = Object.assign({}, qn, t);
    const { gutterCls: n } = this.#e;
    this._splitElements = this.#a(), this._splitHandler = Kn(e, {
      ...this.#e,
      gutterSize: Xn.gutterSize[n],
      gutter: this.#d(),
      onDragStart: (i) => {
        Object.assign(this.#t, {
          dragged: !1,
          dragStartSize: this._splitHandler.getSizes()[0],
          beforeCollapsed: this.isCollapsed()
        }), this.#i = i, this.#e.onDragStart?.(i);
      },
      onDrag: (i) => {
        this.#t.dragged = this.#t.dragged || this.#i.reduce((s, o, d) => s += Math.abs(o - i[d]), 0) > Zn, this.#e.onDrag?.(i);
      },
      onDragEnd: (i) => {
        this.#t.dragged && !this.#t.beforeCollapsed && this.isCollapsed() && (this.#n.prevSize = this.#t.dragStartSize), this.#e.onDragEnd?.(i);
      }
    }), this.#u();
  }
  get componentLabel() {
    return "split-container";
  }
  /**
   * @deprecated 가능하면 컴포넌트 내부 DOM 요소 직접 접근은 지양합니다.
   */
  get pairs() {
    return this._splitHandler.pairs;
  }
  isDisplayNone() {
    return this.contextElement.offsetWidth === 0;
  }
  getFirstPanelSize() {
    const { firstPanel: e } = this._splitElements;
    return this.#e.direction === "horizontal" ? e.offsetWidth : e.offsetHeight;
  }
  isCollapsed() {
    const { minSize: e, snapOffset: t } = this.#e, n = typeof e == "number" ? e : Array.isArray(e) ? e[0] : 0;
    return this.getFirstPanelSize() <= n + t;
  }
  collapse(e) {
    this._splitHandler.collapse(e);
  }
  getSizes() {
    return this._splitHandler.getSizes();
  }
  setSizes(e) {
    this._splitHandler.setSizes(e);
  }
  #a() {
    const e = this.contextElement, t = e.firstElementChild;
    return xe(e instanceof HTMLElement, "Split parent element is not found."), xe(t instanceof HTMLElement, "First panel element is not found."), { splitParent: e, firstPanel: t };
  }
  #d() {
    const { direction: e, gutterCls: t } = this.#e, n = [
      Le.base,
      Le[t]
    ].join(" ");
    return (i) => {
      const s = document.createElement("div");
      return s.className = n, s.dataset.dir = e, this.#e.gutterClickAction === "toggleVisible" && i === 1 && (s.onclick = () => this.#l()), this.#r.push(s), s;
    };
  }
  #l() {
    if (this.#t.dragged) return this.#o();
    this.isCollapsed() ? this.#h() : this.#c(), this.#o();
  }
  #c() {
    this.#n.prevSize = this._splitHandler.getSizes()[0], this._splitHandler.collapse(0);
  }
  #h() {
    const e = this._splitHandler.getSizes(), t = e.slice(2), n = t.reduce((o, d) => o += d, 0), i = this.#n.prevSize <= e[1] ? this.#n.prevSize : e[1], s = [
      // 접히기 전 크기로 리셋
      i,
      // gutter 다음 패널의 크기 (100에서 나머지 패널 크기를 빼서 계산)
      Jn - n - i,
      ...t
    ];
    this._splitHandler.setSizes(s);
  }
  #o() {
    this.#t = {
      beforeCollapsed: !1,
      dragged: !1,
      dragStartSize: 0
    };
  }
  #u() {
    const { splitParent: e } = this._splitElements, { direction: t } = this.#e;
    e.classList.add(Ye), t === "vertical" && e.classList.add(qe({ flexDirection: "column" })), this.#s(e.firstElementChild, (n) => n.classList.add(Xe));
  }
  #s(e, t) {
    let n = e;
    for (; n; )
      n.classList.contains(Le.base) || t(n), n = n.nextElementSibling;
  }
  #g() {
    const { splitParent: e } = this._splitElements;
    e.classList.remove(Ye, qe({ flexDirection: "column" })), this.#s(e.firstElementChild, (t) => t.classList.remove(Xe));
  }
  onInitDOMEvents(e) {
  }
  onInitHooks() {
  }
  destroy() {
    super.destroy(), this._splitHandler.destroy();
  }
}
function Di(r, e) {
  return new Qn({ elements: r, options: e });
}
class ei {
  _dialogElement;
  _wrapperElement;
  _headerElement;
  _bodyElement;
  _footerElement;
  constructor() {
    this._dialogElement = J("div", "dialog"), this._dialogElement.setAttribute("tabindex", "-1"), this._wrapperElement = P(this._dialogElement, "div", "dialog__wrapper"), this._headerElement = P(this._wrapperElement, "div", "dialog__header"), this._bodyElement = P(this._wrapperElement, "div", "dialog__content"), this._footerElement = P(this._wrapperElement, "div", "dialog__footer");
  }
  setDialogWidth(e) {
    return this._wrapperElement.style.width = `${e}px`, this;
  }
  addStrongHeaderTitle(e) {
    const t = P(this._headerElement, "strong", "dialog__header-title");
    return t.innerText = e, this;
  }
  createHeaderCloseButton(e) {
    const t = P(this._headerElement, "div", "dialog__header-actions"), n = P(t, "button", "dialog__button-close");
    return P(n, "i", "ir-icon", "ir-icon--close"), n.onclick = e, this;
  }
  setFooterClass(...e) {
    return this._footerElement.classList.add(...e), this;
  }
  setContentElement(...e) {
    for (; this._bodyElement.lastChild; )
      this._bodyElement.lastChild.remove();
    return this._bodyElement.append(...e), this;
  }
  addFooterButton(e, t, ...n) {
    const i = P(this._footerElement, "button", "button", ...n);
    return i.innerText = e, i.onclick = t, this;
  }
  get element() {
    return this._dialogElement;
  }
}
const ti = {
  "#login-info-dialog.title": "Login Information",
  "#login-info-dialog.confirm-button": "Confirm",
  "AUTH.PASSWORD.NOTICE": "Deadline of Password Change",
  "AUTH.ACCESSIP": "Last Login IP",
  "AUTH.LASTESTLOGINTIME": "Last Login Date",
  "AUTH.SECURITY.NOTICE": "Security Issue"
}, ni = {
  "#login-info-dialog.title": "ログイン情報",
  "#login-info-dialog.confirm-button": "確認",
  "AUTH.PASSWORD.NOTICE": "パスワード変更期限",
  "AUTH.ACCESSIP": "最終ログインIP",
  "AUTH.LASTESTLOGINTIME": "最終ログイン日時",
  "AUTH.SECURITY.NOTICE": "セキュリティ情報"
}, ut = {
  "#login-info-dialog.title": "로그인 정보",
  "#login-info-dialog.confirm-button": "확인",
  "AUTH.PASSWORD.NOTICE": "비밀번호 변경 기한",
  "AUTH.ACCESSIP": "최종 로그인 IP",
  "AUTH.LASTESTLOGINTIME": "최종 로그인 일시",
  "AUTH.SECURITY.NOTICE": "보안 사항"
}, ii = {
  "#login-info-dialog.title": "登录信息",
  // TODO
  "#login-info-dialog.confirm-button": "?",
  "AUTH.PASSWORD.NOTICE": "密码变更期限",
  "AUTH.ACCESSIP": "最终登录IP",
  "AUTH.LASTESTLOGINTIME": "最终登录时间",
  "AUTH.SECURITY.NOTICE": "保安事项"
}, oi = { ko: ut, en: ti, ja: ni, zh: ii };
function si(r, e) {
  return r in e;
}
function ri(r) {
  const e = oi[r] ?? ut;
  return {
    getMsg(t, ...n) {
      return si(t, e) ? e[t] : t;
    }
  };
}
const ai = 550, we = {
  "AUTH.ACCESSIP": 1,
  "AUTH.LASTESTLOGINTIME": 2,
  "AUTH.PASSWORD.NOTICE": 3,
  "AUTH.SECURITY.NOTICE": 4
};
function di(r) {
  return r.props.some(([e]) => we[e] !== void 0);
}
function li(r) {
  return r.props.filter(([e]) => we[e] !== void 0).sort(([e], [t]) => we[e] - we[t]);
}
function ci(r, e) {
  const t = document.createDocumentFragment(), n = new DOMParser(), i = e.replace(/&/g, "&amp;");
  let o = n.parseFromString(`<root>${i}</root>`, "application/xml").firstChild?.firstChild;
  for (; o; ) {
    if (o.nodeType === 1 && o instanceof Element)
      if (o.tagName.toLowerCase() === "font") {
        const d = document.createElement("span");
        d.textContent = o.textContent, d.style.cssText = o.getAttribute("style") ?? "";
        const a = o.getAttribute("color"), h = o.getAttribute("bgcolor");
        a && (d.style.color = a.replace("cl", "")), h && (d.style.backgroundColor = h.replace("cl", "")), t.append(d);
      } else o.tagName.toLowerCase() === "br" ? t.append(document.createElement("br")) : console.warn(`loginInfoDialog-parser::not allowed tag ${o.tagName}`);
    else o.textContent && t.append(o.textContent);
    o = o.nextSibling;
  }
  r.append(t);
}
function Pi(r) {
  const {
    irm010Data: e,
    lang: t = "ko",
    onClose: n
  } = r;
  if (!di(e))
    throw new Error("no login info data! check irm010 response");
  const i = new ei(), { getMsg: s } = ri(t), o = () => {
    a.hide();
  }, d = (c) => {
    c.key === "Enter" && o();
  }, a = wt({
    element: i.element,
    type: "dialog",
    parentElement: Oe("dialog"),
    onESC() {
      n?.(), window.removeEventListener("keyup", d);
    }
  }), h = (() => {
    const c = J("ul", "row", "gap-y--xs");
    return li(e).forEach(([k, v]) => {
      const E = P(c, "li", "row", "col", "col--12");
      P(E, "div", "col", "col--4").innerText = s(k), k === "AUTH.SECURITY.NOTICE" ? ci(
        P(E, "div", "col", "col--8"),
        v
      ) : P(E, "div", "col", "col--8").innerText = v;
    }), c;
  })();
  return i.setDialogWidth(ai).addStrongHeaderTitle(s("#login-info-dialog.title")).createHeaderCloseButton(o).setContentElement(h).setFooterClass("justify-content--end").addFooterButton(s("#login-info-dialog.confirm-button"), o, "button--primary"), {
    popoverHandler: a,
    show() {
      i.element.focus(), a.show(), window.addEventListener("keyup", d);
    },
    hide() {
      a.hide();
    }
  };
}
export {
  Ji as ClipboardManager,
  Gi as IRCommandBlock,
  Wi as IRCommandManager,
  Ri as IRConfirm,
  fo as IRContextMenu,
  ji as IRDatePicker,
  Ki as IRSelect,
  Qn as IRSplitContainer,
  Hi as IRTimePicker,
  wi as IRTree,
  yi as IRTreeView,
  Li as IRTreeViewCascadeCheckingPlugin,
  Si as IRTreeViewColStickyPlugin,
  xi as IRTreeViewDragDropMovePlugin,
  Xt as IRTreeViewKeyboardPlugin,
  an as IRTreeViewMousePlugin,
  Ii as IRTreeViewTooltipPlugin,
  Et as IRVirtualDOM,
  wo as Logger,
  Zi as ReactiveState,
  P as appendElement,
  Qi as blobToStr,
  Ai as clearGlobalKeyListener,
  he as closest,
  ot as clsZId,
  Bt as createClickOutsideHandler,
  eo as createCustomIcon,
  Yi as createDropdownDiv,
  qi as createDropdownItem,
  it as createESCHideController,
  J as createElement,
  Fi as createFloatingHandler,
  be as createIconElement,
  mo as createImageFromSrcUrl,
  co as createLoadingHandler,
  Pi as createLoginInfoDialog,
  Co as createObjectURLFromSvg,
  wt as createPopover,
  Di as createSplitContainer,
  to as createTooltip,
  no as createTooltipBySelector,
  Lt as createTooltipContainer,
  uo as dispatchClickOutsideEvent,
  No as downloadDataURL,
  ko as getBase64FromSvg,
  io as getIRIconFormat,
  oo as getIRIconPng,
  vo as getImageBlobFromImage,
  Oe as getLayerElement,
  so as getMinMaxBetween,
  yt as getTextWidthContext,
  zi as getThemeStore,
  ro as getTooltipElements,
  Ui as getVirtualEl,
  Ti as hasDisplayedConfirm,
  di as hasLoginInfo,
  ve as i18n,
  _t as offsetBottomAutoUpdate,
  ao as parseInt,
  Bi as peekESCStack,
  Vi as registerGlobalKeyListener,
  bi as renderCheckboxTreeNode,
  Fe as renderDefaultTreeNode,
  Ei as setTreeDragDropReorder,
  vt as unregisterGlobalKeyListener,
  xt as uuid,
  St as xss
};
//# sourceMappingURL=index.js.map
