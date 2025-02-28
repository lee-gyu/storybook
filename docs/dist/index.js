import "./chunks/_init-D7pcIR7n.js";
import { k as Nt, e as et, l as ue, m as $e, b as tt, g as He, u as kt, h as vt, n as wt } from "./chunks/floating-Cojv6uOA.js";
import { p as Pi, t as Oi, j as Mi, d as Ai, q as zi, r as Fi } from "./chunks/floating-Cojv6uOA.js";
import { c as _t, I as bt, r as fe } from "./chunks/command-manager-DUFk_YJB.js";
import { g as Bi, f as Vi, e as $i, d as Gi, a as ji, b as Wi } from "./chunks/command-manager-DUFk_YJB.js";
import { I as De } from "./chunks/index-Ba_KBjb6.js";
import { g as Yi } from "./chunks/index-Ba_KBjb6.js";
import { a as P, b as le, d as X, c as Et } from "./chunks/outside-DpurI6XH.js";
import { e as Xi } from "./chunks/outside-DpurI6XH.js";
import { u as yt, c as xt, l as nt } from "./chunks/utility-CkNg54cg.js";
import { a as Zi, x as Qi } from "./chunks/utility-CkNg54cg.js";
import { L as it, M as Pe, O as we, j as M, P as _e, Q as K, R as O, S as Lt, T as St, U as It, V as Ge, W as ae, X as Tt, Y as Rt, G as Ht, H as Dt, I as Pt, J as Ot, K as Mt, Z as ye, $ as je, a0 as We, a1 as Ke } from "./chunks/css-a1kmeZqX.js";
import { c as At } from "./chunks/clsx-OuTLNxxd.js";
import { a as be, g as zt, c as ot } from "./chunks/rx-state-BNRgEDqt.js";
import { C as to, R as no, j as io, d as oo, b as so, i as ro, f as ao, e as lo, k as co, h as ho, p as uo } from "./chunks/rx-state-BNRgEDqt.js";
import { i as Ne, d as Ie } from "./chunks/index-BI35NT3p.js";
import { I as go } from "./chunks/index-3uy6Aqwp.js";
import { a as Ee } from "./chunks/asserts-CpwDJsre.js";
import { a as mo, c as Co, d as No, g as ko, b as vo } from "./chunks/image-Y3tFDdOU.js";
import { L as _o } from "./chunks/logger-C1WxLZjH.js";
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
}, Oe = (r) => {
  const e = document.createElement("div"), t = document.createElement("i"), n = document.createElement("span");
  return e.className = I.treeLabel["&"], n.className = I.treeLabelText["&"], {
    get template() {
      return e;
    },
    update: (i) => {
      i.iconClass ? (t.isConnected || n.insertAdjacentElement("beforebegin", t), t.className = `${I.treeIconFolder["&"]} ir-icon ${i.iconClass}`, i.iconColor ? t.style.setProperty("--ir-icon-foreground-color", i.iconColor) : t.style.removeProperty("--ir-icon-foreground-color")) : t.remove(), i.caption ? (n.textContent = i.caption, e.appendChild(n)) : n.remove();
    }
  };
}, Ft = "ir-icon--triangle-small-right";
class Ut {
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
    renderer: a = Oe,
    disabled: h = !1,
    draggable: c
  }) {
    this.children = [], this._parentItem = e, this.data = i, this._level = s, this._iconClass = t, this._caption = n, this._template = a(this), this._checked = d, this._subChecked = d, this._disabled = h, this._uuid = o, this.liTreeItem = document.createElement("li"), this.liTreeItem.classList.add(I.treeItem["&"]), this.liTreeItem.dataset.uuid = this._uuid, this.divTreeItemContent = P(this.liTreeItem, "div", I.treeItemContent["&"]), this.divTreeItemContent.style.setProperty("--ir-tree-node-level", this._level.toString()), this.ulTreeList = document.createElement("ul"), this.ulTreeList.classList.add(I.treeList["&"]), this.iconExpand = P(this.divTreeItemContent, "i", I.treeIconExpand["&"], "ir-icon", Ft), this.divTreeItemContent.appendChild(this._template.template), this.divTreeItemContent.addEventListener("dragstart", (N) => this.onDragStart(N)), this.divTreeItemContent.addEventListener("dragenter", (N) => this.onDragOver(N) && this.divTreeItemContent.classList.add("is-dragging")), this.divTreeItemContent.addEventListener("dragover", (N) => this.onDragOver(N) && N.preventDefault()), this.divTreeItemContent.addEventListener("dragend", (N) => this.onDragEnd(N)), this.divTreeItemContent.addEventListener("dragleave", () => this.clearDragging()), this.divTreeItemContent.addEventListener("drop", (N) => {
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
function Bt(r) {
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
function Vt(r, e) {
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
    return i && (n = Bt(r.getOrderedNodes()), i = !1), n;
  }
  function a() {
    const y = t, T = d();
    if (y === null) {
      v(T[0]);
      return;
    }
    const H = T.findIndex((p) => p.uuid === y.uuid), f = T[H - 1];
    f && v(f);
  }
  function h() {
    const y = t, T = d();
    if (y === null) {
      v(T[0]);
      return;
    }
    const H = T.findIndex((p) => p.uuid === y.uuid), f = T[H + 1];
    f && v(f);
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
class ki extends De {
  _keyboardInteraction;
  rootElement;
  nodes;
  selectedNode;
  renderer;
  _nodeDraggable;
  _nodeMap = /* @__PURE__ */ new Map();
  constructor({
    contextElement: e,
    renderer: t = Oe,
    nodeDraggable: n = !0,
    enabledKeyboard: i = !0
  }) {
    super({ contextElement: e }), this.nodes = [], this.selectedNode = null, this.renderer = t, this._nodeDraggable = n, e.classList.add(I.tree["&"]), e.setAttribute("tabindex", "0"), e.setAttribute("role", "tree"), i && (this._keyboardInteraction = Vt(this, e)), n === !1 && e.setAttribute("draggable", "false"), this.rootElement = P(e, "ul", I.treeList["&"], I.treeListRoot["&"]), this.addCoreElement(this.rootElement), this.addGlobalEventListener(e, "contextmenu", (s) => {
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
    const s = yt();
    if (this._nodeMap.has(s)) throw new Error("UUID already exists");
    const o = new Ut({
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
    const t = Nt(
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
const vi = ({ onCheck: r }) => (e) => {
  const t = Oe(), n = document.createElement("label"), i = document.createElement("input");
  return i.type = "checkbox", n.classList.add(it), i.classList.add(Pe), n.appendChild(i), t.template.insertAdjacentElement("afterbegin", n), i.addEventListener("click", () => {
    e.updateCheckedWithPropagation(i.checked), e.parentItem?.updateCheckedStatus(), i.dataset.state = e.hasCheckedChildren ? "sub-checked" : "", r && r(e);
  }), {
    get template() {
      return t.template;
    },
    update: (s) => {
      t.update(s), s.checked !== i.checked && (i.checked = s.checked), s.parentItem?.updateCheckedStatus(), s.updateSubCheckedStatus(), i.dataset.state = s.subChecked ? "sub-checked" : "";
    }
  };
}, $t = 16, wi = (r) => {
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
    return n(), i.divTreeItemContent.classList.add(s.offsetY < $t ? "is-top" : "is-bottom"), t = i, !0;
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
class Gt {
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
    const s = this.getNodeLink(e), o = new ne({
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
    const s = this.getNodeLink(e), o = new ne({
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
    const i = n.getNextNode(), s = new ne({
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
    const i = n.getPrevNode(), s = new ne({
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
    const n = new ne({
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
    const i = this.getNodeLink(e), s = new ne({
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
class ne {
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
class jt {
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
class st extends De {
  constructor(e) {
    super({
      contextElement: e.contextElement ?? document.createElement("div")
    }), this._hookArgs = e, this._pluginList = this._hookArgs.plugins ?? [], this.onInitDOMEvents(this.contextElement), this.onInitHooks(), this.onInitPlugins();
  }
  _hook = _t();
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
class Wt {
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
class ie extends Wt {
}
class Kt extends ie {
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
const Yt = "minmax(0, 1fr)";
function qt(r) {
  const e = [];
  Me(r) && e.push(`${et("tree-view.checkboxColumnWidth")}px`);
  for (let t = 0; t < r.headerRow.columnCount; t++) {
    const n = r.headerRow.width[t] ?? "";
    n.endsWith("px") ? e.push(`minmax(${n}, ${n})`) : e.push(Yt);
  }
  return e.join(" ");
}
function Xt(r) {
  return le("[data-node-header='true']", ".ir-vd-container__viewport-row", r);
}
function Jt(r) {
  return le(".ir-vd-container__viewport-row", ".ir-vd-container__viewport-row", r);
}
function Ye(r) {
  return le("button[data-ir-role='node-expand-button']", ".ir-vd-container__viewport-row", r);
}
function qe(r) {
  return le("input[type='checkbox']", ".ir-vd-container__viewport-row", r);
}
function Me(r) {
  return r.showCheckbox && r.checkboxOptions.layout === "column";
}
function Zt(r) {
  return r.showCheckbox && r.headerRow.hasCheckbox;
}
function Qt(r, e) {
  return r.showCheckbox && e.hasCheckbox;
}
function Xe(r, e) {
  return e === "*" && r === 0 || e.endsWith("px");
}
function en({ createNodeFunc: r, parentNodeOrNull: e, visible: t, nodeData: n }) {
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
function tn(r) {
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
const nn = {
  nodeDraggable: !0
};
class on extends ie {
  constructor(e = nn) {
    super(), this._args = e;
  }
  mount(e, t) {
    this.addPluginHook(e, "contextMenu", i), this.addPluginHook(e, "treeClick", E), this.addPluginHook(e, "treeDoubleClick", H), this.addPluginHook(e, "nodeExpandIconClick", T);
    let n = null;
    this._args.nodeDraggable && (this.addPluginHook(e, "nodeDragStart", d), this.addPluginHook(e, "treeMouseDown", s), this.addPluginHook(e, "treeMouseUp", o), this.addPluginHook(e, "nodeMouseDown", a));
    async function i(f) {
      f.preventDefault();
      const p = k(f);
      p && (e.multiSelect ? f.ctrlKey ? await p.addSelect() : f.shiftKey ? await y(p) : p.selected === !1 && await p.select() : await p.select(), await t.emit("nodeContextMenu", [f, p]));
    }
    function s(f) {
      const p = k(f);
      p && t.emit("nodeMouseDown", [f, p]);
    }
    function o(f) {
      const p = k(f);
      p && t.emit("nodeMouseUp", [f, p]);
    }
    function d(f, p) {
      p.object && f.dataTransfer?.setData("application/json", JSON.stringify(p.object));
    }
    async function a(f, p) {
      if (!await t.emit("nodeCheckDragging", [f, p])) return;
      const _ = Jt(f.target);
      _ && (_.setAttribute("draggable", "true"), _.addEventListener("dragstart", c), n = p);
    }
    function h(f) {
      f.removeEventListener("dragstart", c), f.removeEventListener("dragend", N), f.removeAttribute("draggable"), n = null;
    }
    function c(f) {
      f.target instanceof HTMLElement && n && (f.target.addEventListener("dragend", N), t.emit("nodeDragStart", [f, n]));
    }
    function N(f) {
      f.target instanceof HTMLElement && n && (h(f.target), t.emit("nodeDragEnd", [f, n]));
    }
    function k(f) {
      if (!(f.target instanceof HTMLElement)) return null;
      const w = le("[data-node-key]", ".ir-vd-container__viewport-row ", f.target)?.getAttribute("data-node-key");
      return w ? e.getNodeOrNull(w) : null;
    }
    async function v(f) {
      if (f.target instanceof HTMLInputElement && qe(f.target)) {
        const p = f.target.checked;
        await t.emit("headerChangeChecking", [p]) ? await e.setHeaderRowChecked(p) : f.target.checked = !p;
        return;
      }
    }
    async function E(f) {
      if (Xt(f.target)) return v(f);
      const p = k(f);
      if (p) {
        if (Ye(f.target)) {
          t.emit("nodeExpandIconClick", [f, p]);
          return;
        }
        if (f.target instanceof HTMLInputElement && qe(f.target)) {
          await p.checkToggle(), f.target.checked = p.checked;
          return;
        }
        e.multiSelect ? f.ctrlKey ? await p.multiSelectToggle() : f.shiftKey ? await y(p) : await e.selectNode(p.key) : await p.selectToggle(), t.emit("nodeClick", [f, p]);
      }
    }
    async function y(f) {
      const p = e.getSelectedNodes();
      if (p.length === 0) {
        await f.select();
        return;
      }
      await e.selectRange(p[0], f);
    }
    async function T(f, p) {
      await p.toggleExpand();
    }
    function H(f) {
      const p = k(f);
      p && (Ye(f.target) || (f.preventDefault(), t.emit("nodeDoubleClick", [f, p])));
    }
  }
}
function rt(r) {
  const e = X("input");
  return e.type = "checkbox", e.classList.add(
    r.checkboxOptions.ui === "favorite" ? Lt : Pe
  ), e;
}
function sn(r) {
  const e = X("div", O.nodeMain, O.base, M.truncate), t = X("button", O.nodeExpandButton, O.nodeIcon), n = X("div", O.base, M.truncate, M.textAlign.center, O.headerCheckboxColumnDiv), i = X("span", O.nodeCaption, M.truncate), s = be("ir-icon--triangle-small-right"), o = be(""), d = rt(r);
  return t.dataset.irRole = "node-expand-button", o.classList.add(O.nodeIcon), s.style.setProperty("--ir-icon-foreground-color", K.expandIconColor), t.append(s), e.appendChild(t), r.showIcon && e.appendChild(o), e.appendChild(i), n.appendChild(d), r.hiddenExpandIcon && (s.style.display = "none"), {
    mainContentDiv: e,
    expandButton: t,
    icon: o,
    text: i,
    checkbox: d,
    checkboxDiv: n
  };
}
function rn(r) {
  const e = document.createElement("div");
  return e.textContent = r, e.classList.add(O.base, M.truncate, O.column), e;
}
function an(r, e) {
  return {
    columns: [],
    ...sn(e)
  };
}
function dn(r, e) {
  const t = document.createElement("div");
  return t.textContent = e.headerRow.text[r] ?? "", t.classList.add(O.base, M.truncate), r > 0 && t.classList.add(O.column), t;
}
function ln(r) {
  const e = rt(r);
  return r.checkboxOptions.layout === "inner" && e.classList.add(M.verticalAlign.bottom, O.headerInnerCheckbox), {
    checkbox: e,
    checkboxDiv: X(
      "div",
      O.base,
      M.truncate,
      M.textAlign.center,
      O.headerCheckboxColumnDiv
    ),
    columns: []
  };
}
function cn(r, e, t) {
  const n = an(e, t), i = r.getRowElement();
  r.setTemplateHelper(n), i.classList.add(
    we.base,
    M.userSelectNone,
    we.node,
    M.focusOutlineNone
  ), i.role = "treeitem", i.dataset.nodeKey = e.key, at(r, e, t), Me(t) ? i.appendChild(n.checkboxDiv) : Qt(t, e) && n.expandButton.insertAdjacentElement("afterend", n.checkbox), i.appendChild(n.mainContentDiv), n.columns.forEach((s) => i.appendChild(s));
}
function hn(r, e, t) {
  const n = ln(e), i = r.getRowElement();
  r.setTemplateHelper(n), i.classList.add(we.base, we.header), i.dataset.nodeHeader = "true", dt(r, e, t), n.columns.forEach((s) => i.appendChild(s));
}
function at(r, e, t) {
  if (!r.isCachedElement) return;
  const n = r.getRowElement(), i = e.icon ?? t.defaultIcon, s = e.iconColor ?? t.defaultIconColor, { text: o, columns: d, icon: a, expandButton: h, checkbox: c } = r.template;
  o.textContent = e.caption, e.level > 0 ? _e(n, {
    [K.nodeLevel]: String(e.level)
  }) : n.style.removeProperty(K.nodeLevel), ue(n, "selected", e.selected), ue(n, "disabled", e.disabled), ue(n, "expanded", e.expanded), ue(n, "expandable", e.expandable), e.expandable === !1 ? h.classList.add(M.invisible) : h.classList.remove(M.invisible), e.expanded ? h.classList.add(M.rotate.deg90) : h.classList.remove(M.rotate.deg90), e.subChecked ? c.dataset.state = "sub-checked" : delete c.dataset.state, c.checked = e.checked, e.hasCheckbox === !1 && c.remove(), i ? (a.className = At(O.nodeIcon, "ir-icon", i), s && a.style.setProperty("--ir-icon-foreground-color", s)) : a.className = M.invisible, N();
  function N() {
    const k = t.headerRow.columnCount - 1;
    if (d.length === k)
      return d.forEach((v, E) => v.textContent = e.getColumnText(E + 1));
    d.forEach((v) => v.remove()), d.length = 0;
    for (let v = 0; v < k; v++) {
      const E = rn(e.getColumnText(v + 1));
      d.push(E), n.appendChild(E);
    }
  }
}
function dt(r, e, t) {
  const {
    columns: n,
    checkbox: i,
    checkboxDiv: s
  } = r.template;
  n.forEach((a) => a.remove()), n.length = 0;
  const o = Me(e);
  o && (e.headerRow.hasCheckbox && s.appendChild(i), n.push(s), r.getRowElement().appendChild(s)), i.checked = t.headerRow.checked;
  const d = e.headerRow.columnCount;
  for (let a = 0; a < d; a++) {
    const h = dn(a, e);
    n.push(h), r.getRowElement().appendChild(h);
  }
  !o && Zt(e) && n[0].prepend(i);
}
const un = "80px", fn = 4, gn = {
  columnCount: 1,
  text: [""],
  width: ["*"],
  hasCheckbox: !0
}, pn = {
  layout: "inner",
  ui: "checkbox"
}, mn = {
  scrollOnCollapse: !0,
  scrollOnExpand: !0
};
function Cn() {
  return [
    new on({
      nodeDraggable: !0
    }),
    new Kt()
  ];
}
class _i extends st {
  _nodeLinker = new Gt();
  _virtualDOMContainer = document.createElement("div");
  _virtualDOM;
  _args;
  _selectedNode = [];
  _context;
  constructor(e) {
    super({
      plugins: e.plugins ?? Cn()
    }), this._args = {
      defaultRowHeight: e.defaultRowHeight ?? et("tree-view.nodeRowHeight"),
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
      headerRow: Object.assign({}, gn, e.headerRow),
      checkboxOptions: Object.assign({}, pn, e.checkboxOptions),
      plugins: this.pluginList,
      features: Object.assign({}, mn, e.features)
    }, this._context = {
      headerRow: {
        checked: !1
      }
    }, e.removeIndent && _e(this.contextElement, {
      [K.nodeIndentPadding]: "0"
    }), this.validateArgs(), this.initArgs(), this._virtualDOM = this.initVirtualDOM(), this.setDefaultColumnWidths(), this.updateTreeTemplateColumns();
  }
  onInitDOMEvents(e) {
    e.classList.add(St), this.addGlobalEventListener(e, "contextmenu", (t) => this.emitHook("contextMenu", [t])), this.addGlobalEventListener(e, "focus", (t) => this.emitHook("focus", [t])), this.addGlobalEventListener(e, "keydown", (t) => this.emitHook("keydown", [t])), this.addGlobalEventListener(e, "blur", (t) => this.emitHook("blur", [t])), this.addGlobalEventListener(e, "click", (t) => this.emitHook("treeClick", [t])), this.addGlobalEventListener(e, "mousedown", (t) => this.emitHook("treeMouseDown", [t])), this.addGlobalEventListener(e, "mouseup", (t) => this.emitHook("treeMouseUp", [t])), this.addGlobalEventListener(e, "dblclick", (t) => this.emitHook("treeDoubleClick", [t])), this.addGlobalEventListener(e, "dragenter", (t) => this.treeDragEnterHandler(t)), this.addGlobalEventListener(e, "dragover", (t) => this.treeDragOverHandler(t)), this.addGlobalEventListener(e, "dragleave", (t) => this.treeDragLeaveHandler(t)), this.addGlobalEventListener(e, "drop", (t) => this.treeDropHandler(t)), this.addGlobalEventListener(e, "dragend", (t) => this.treeDragEndHandler(t));
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
    this.setBeginHook("createHeaderRow", hn), this.setBeginHook("createNodeRow", cn), this.setBeginHook("headerRender", dt), this.setBeginHook("nodeRender", at), this.setBeginHook("nodeUpdated", this.beginNodeUpdatedHandler.bind(this)), this.setBeginHook("nodeExpanded", this.beginNodeExpanded.bind(this)), this.setBeginHook("nodeCollapsed", this.beginNodeCollapsed.bind(this)), this.addHook("nodeSelect", this.nodeSelectHandler.bind(this)), this.addHook("nodeAddSelect", this.nodeAddSelectionHandler.bind(this)), this.addHook("nodeRelease", this.nodeReleaseHandler.bind(this));
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
    this._virtualDOMContainer.classList.add(It), this._virtualDOMContainer.style.height = "100%";
    const e = new bt({
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
    return e.setRowHeight(0, this._args.defaultRowHeight + 1), e.setRowVisible(0, this._args.displayHeader === !0), this.contextElement.appendChild(this._virtualDOMContainer), e;
  }
  initArgs() {
    this._args.className && this.contextElement.classList.add(this._args.className);
  }
  validateArgs() {
    if (this._args.headerRow.width.some((e, t) => !Xe(t, e)))
      throw new Error("Invalid width: Must end with 'px', and '*' is allowed for the content column.");
  }
  onDestroy() {
    this._virtualDOM.destroy(), this.contextElement.remove();
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
      const n = Array(t - e.length).fill(un);
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
    if (!Xe(e, t))
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
    const [e, t] = $e(
      "tree-view.iconSize",
      "tree-view.defaultHorizontalPadding"
    );
    let n = e + t;
    return this._args.showIcon && (n += e), n;
  }
  async autoSizeColumn(e) {
    const [t, n] = $e(
      "tree-view.defaultHorizontalPadding",
      "tree-view.levelIndentSize"
    ), { fontFamily: i, fontSize: s } = getComputedStyle(this.contextElement), o = zt(s, i);
    let d = o.calculateWidth(this.getColumnText(e));
    if (await this._nodeLinker.travelAllNodes(({ data: { node: a } }, h) => {
      d = Math.max(
        d,
        o.calculateWidth(a.getColumnText(e)) + (e === 0 ? h * n : 0)
      );
    }, (a) => a.hasChild() && a.data.node.expanded === !0), d += e === 0 ? this.getDefaultMainColumnWidth() : t * 2, d += fn, e === 0) {
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
    _e(this.contextElement, {
      [K.templateColumns]: qt(this._args)
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
    return new jt({
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
    }, d = this.createNode.bind(this), a = t.flatMap((c) => en({
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
    return tn({
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
const Te = "ir-style/tree-view-drag-drop-move", Je = 8;
async function Nn(r) {
  const e = r();
  return e === void 0 ? !0 : e instanceof Promise ? await e : e;
}
function kn(r, e, t) {
  return t - r < Je ? "before" : e - t < Je ? "after" : "firstChild";
}
function vn(r) {
  const e = r.dataTransfer?.getData(Te);
  return e ? JSON.parse(e) : null;
}
const Ze = {
  row: null,
  nodeKey: "",
  cursorType: "before"
}, wn = {
  srcNodeData: { key: "", caption: "" },
  srcTreeViewId: ""
};
class bi extends ie {
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
    this.addPluginHook(e, "nodeDragStart", E), this.addPluginHook(e, "nodeDragOver", y), this.addPluginHook(e, "nodeDragEnd", f), this.addPluginHook(e, "nodeDrop", p), this.addPluginHook(e, "treeDragLeave", N);
    let a = { ...Ze }, h = { ...wn }, c = !1;
    function N() {
      H();
    }
    function k(w, _) {
      if (!w.dataTransfer) throw new Error("dataTransfer is null");
      c = !1, h = _, a = { ...Ze }, w.dataTransfer.setData(Te, JSON.stringify(_));
    }
    function v(w, _, b) {
      if (!w.dataTransfer?.types.includes(Te)) return !1;
      const x = h.srcTreeViewId === e.uuid;
      return x && (_.key === h.srcNodeData.key || _.getNodeLink().isProgenyNode(h.srcNodeData.key)) ? !1 : s?.(x, _, b) ?? !0;
    }
    function E(w, _) {
      (i?.(_) ?? !0) && k(w, { srcNodeData: _.serialize(), srcTreeViewId: e.uuid });
    }
    function y(w, _, b) {
      const { top: x, bottom: R } = e.getNodeTopBottom(_.key), C = kn(x, R, e.scrollTop + w.offsetY);
      w.dataTransfer && v(w, _, C) ? (w.preventDefault(), w.dataTransfer.dropEffect = "move", T(_, b, C)) : H();
    }
    function T(w, _, b) {
      a.row === _ && a.cursorType === b || (H(), a = { nodeKey: w.key, row: _, cursorType: b }, _.getRowElement().dataset.drag = b);
    }
    function H() {
      a.row && (delete a.row.getRowElement().dataset.drag, a.row = null);
    }
    function f(w, _) {
      try {
        w.dataTransfer?.dropEffect === "move" && d?.(c, { ...h });
      } finally {
        H();
      }
    }
    async function p(w, _) {
      try {
        const b = vn(w), x = { ...a };
        if (!b || !await Nn(() => n?.(b, x))) return;
        c = !0, o?.(b.srcTreeViewId === e.uuid, b, x);
      } finally {
        H();
      }
    }
  }
}
class Ei extends ie {
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
          for (const d of bn(o))
            await s(d);
          for (const d of En(o))
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
function _n(r) {
  let e = 0, t = 0, n = 0, i = r.getFirstChildNode();
  for (; i; )
    i.data.node.checked ? ++e : ++t, i.data.node.subChecked && ++n, i = i.getNextNode();
  return { checked: e, unchecked: t, subChecked: n };
}
function* bn(r) {
  const e = r.getNodeLink(), t = [], n = r.checked;
  for (yield { key: r.key, checked: n, subChecked: !1 }, e.getFirstChildNode() && t.push(e.getFirstChildNode()); t.length; ) {
    const i = t.pop(), s = i.getNextNode(), o = i.getFirstChildNode();
    n !== i.data.node.checked && (yield { key: i.key, checked: n, subChecked: !1 }), s && t.push(s), o && t.push(o);
  }
}
function* En(r) {
  let e = r.getNodeLink().getParentNode();
  for (; e; ) {
    const t = _n(e), n = t.unchecked === 0, i = !n && t.checked + t.subChecked > 0;
    (e.data.node.checked !== n || e.data.node.subChecked !== i) && (yield {
      key: e.key,
      checked: n,
      subChecked: i
    }), e = e.getParentNode();
  }
}
const Re = [
  K.stickyRightCol2,
  K.stickyRightCol3,
  K.stickyRightCol4,
  K.stickyRightCol5
];
function* yn(r, e) {
  let t = 0;
  const n = e - 1, i = Math.min(Re.length, n - 1);
  for (let s = n; s > n - i; s--)
    t += parseInt(r[s], 10), yield { right: t, varName: Re[n - s] };
}
class yi extends ie {
  constructor() {
    super();
  }
  mount(e, t, n) {
    n.classList.add(Ge), i(), t.addHook("columnWidthChange", i), t.addHook("changeColumnCount", i), this.addUnmountTask(() => {
      n.classList.remove(Ge), s(), t.removeHook("columnWidthChange", i), t.removeHook("changeColumnCount", i);
    });
    function i() {
      for (const { right: o, varName: d } of yn(e.columnWidthList, e.getColumnCount()))
        _e(n, {
          [d]: `${o}px`
        });
    }
    function s() {
      for (const o of Re)
        n.style.removeProperty(o.match(/\((.*)\)/)[1]);
    }
  }
}
class xi extends ie {
  constructor(e = {}) {
    super(), this._args = e;
  }
  mount(e, t, n) {
    const {
      placement: i = "bottom-start",
      interval: s = 0,
      offset: o
    } = this._args, d = xt({
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
const xn = ["yes", "no", "ok", "cancel", "retry", "ignore", "stop"];
function Ln() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div"), i = document.createElement("div"), s = document.createElement("i"), o = document.createElement("div"), d = {
    cancel: document.createElement("button"),
    ignore: document.createElement("button"),
    no: document.createElement("button"),
    ok: document.createElement("button"),
    retry: document.createElement("button"),
    stop: document.createElement("button"),
    yes: document.createElement("button")
  }, a = document.createElement("i"), h = document.createElement("button");
  return r.tabIndex = -1, r.classList.add("ir-confirm", "dialog", ot.zIndex.message), e.className = "dialog__wrapper", t.className = "dialog__content", n.className = ae.modal, i.className = ae.content, o.className = ae.actions, a.classList.add("ir-icon", "ir-icon--close"), h.className = ae.btnClose, o.appendChild(d.no), o.appendChild(d.stop), o.appendChild(d.ignore), o.appendChild(d.retry), o.appendChild(d.yes), o.appendChild(d.ok), h.appendChild(a), n.appendChild(h), n.appendChild(s), n.appendChild(i), n.appendChild(o), t.appendChild(n), e.appendChild(t), r.appendChild(e), {
    dialog: r,
    confirmIcon: s,
    confirmContent: i,
    confirmActions: o,
    buttonMap: d,
    closeButton: h,
    resetButtonCls() {
      Object.values(d).forEach((c) => c.className = Tt);
    }
  };
}
const Sn = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = Ln()), r;
  };
})();
function oe() {
  return Sn();
}
const In = {
  error: "ir-icon--cancel-circle-fill ir-icon--danger",
  info: "ir-icon--information-circle-fill ir-icon--info",
  question: "ir-icon--question ir-icon--info",
  warning: "ir-icon--error ir-icon--warning"
}, Tn = /* @__PURE__ */ new Set([
  "class",
  "style",
  "title",
  "id"
]), Rn = {
  onTagAttr(r, e, t, n) {
    if (!n && Tn.has(e))
      return `${e}="${nt.escapeAttrValue(t)}"`;
  }
}, ke = {
  count: 0
}, Li = () => ke.count > 0;
class Si {
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
    this.visible = !1, this.iconType = t, this.buttonType = n, i && (this.messageHTML = nt.filterXSS(i, Rn)), a && (this.contentElement = a), this.msgMap = {
      ...s
    }, this.escButton = d, this.escController = tt(this), o && (this.onClick = o);
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
    const e = oe();
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
    const e = oe();
    ke.count++, this.updateContent(), this.visible = !0, e.confirmIcon.className = `${ae.icon} ir-icon ${In[this.iconType] || ""}`, e.closeButton.onclick = () => this.hide(), this.args.hideCloseButton ? e.closeButton.classList.add("display--none") : e.closeButton.classList.remove("display--none");
    for (const n of xn)
      e.buttonMap[n].remove(), e.buttonMap[n].innerText = this.msgMap[n] ?? Ne.t(`confirm.${n}`), e.buttonMap[n].onclick = () => {
        this.hide().then(() => this._doClick(n));
      };
    for (const n of this.buttonType)
      e.confirmActions.appendChild(e.buttonMap[n]);
    e.dialog.isConnected || He("message").appendChild(e.dialog), e.dialog.classList.add("is-visible"), e.dialog.focus(), e.dialog.onkeydown = this.dialogKeyDownHandler.bind(this);
    const t = this.buttonType.indexOf(this.args.enterButton ?? this.buttonType[0]);
    this.setFocus(t === -1 ? 0 : t), this.args.disabledKeyAction !== !0 && this._registerEnterESCHandler();
  }
  setFocus(e) {
    const { confirmActions: t, resetButtonCls: n } = oe();
    e < 0 ? e = 0 : e >= this.buttonType.length && (e = this.buttonType.length - 1), this.activeButtonId = e, n();
    const i = t.children[e];
    i.classList.add(Rt), i.focus();
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
    if (ke.count > 0) {
      console.warn("already opened a confirm");
      return;
    }
    setTimeout(() => this._show(), 0);
  }
  onESC() {
    const e = oe();
    this.escButton && e.buttonMap[this.escButton].click();
  }
  async hide() {
    if (this.visible !== !1)
      return this.escController.destroy(), ke.count = 0, new Promise((e) => {
        const t = oe();
        this.visible = !1, t.dialog.classList.remove("is-visible"), this.enterHandler && kt("Enter", this.enterHandler), this.enterHandler = null;
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
const se = "time-picker", ee = {
  timePicker: {
    "&": se,
    "is-visible": "is-visible"
  },
  timePickerPanelWrapper: {
    "&": `${se}__panel-wrapper`
  },
  timePickerButtonPanel: {
    "&": `${se}__button-panel`
  },
  timePickerPanel: {
    "&": `${se}__panel`
  },
  timePickerPanelItem: {
    "&": `${se}__panel-item`
  }
};
function Hn(r, e) {
  const t = e ? r : r + ":00";
  if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(t)) {
    const { hour: n, minute: i, second: s } = lt(t);
    return n < 0 || n >= 24 || i < 0 || i >= 60 ? !1 : !(e && s < 0 || s >= 60);
  } else
    return !1;
}
function lt(r) {
  const [e, t, n] = r.split(":");
  return {
    hour: parseInt(e),
    minute: parseInt(t),
    second: parseInt(n)
  };
}
function Dn(r, e, t) {
  return [
    r.toString().padStart(2, "0"),
    e.toString().padStart(2, "0"),
    t.toString().padStart(2, "0")
  ].join(":");
}
const ge = 12, Pn = 60, On = 60, Mn = ["period", "hour", "minute", "second"];
function An() {
  const r = document.createElement("div"), e = document.createElement("div"), t = document.createElement("div"), n = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")], [i, s, o, d] = n;
  r.classList.add(ee.timePicker["&"], ot.zIndex.popover), n.forEach((C, L) => {
    C.setAttribute("data-type", Mn[L]), C.className = ee.timePickerPanel["&"], e.appendChild(C);
  }), e.className = ee.timePickerPanelWrapper["&"], t.className = ee.timePickerButtonPanel["&"];
  const a = document.createElement("button");
  a.classList.add("button"), a.type = "button", t.appendChild(a), r.appendChild(e), r.appendChild(t);
  function h(C) {
    const L = document.createElement("div");
    return L.className = ee.timePickerPanelItem["&"], L.dataset.text = C, L.innerText = C, L;
  }
  return fe(2).forEach(() => n[0].appendChild(h(""))), fe(ge).forEach((C) => n[1].appendChild(h(`${C}`))), fe(Pn).forEach((C) => n[2].appendChild(h(`${C}`))), fe(On).forEach((C) => n[3].appendChild(h(`${C}`))), {
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
    setMinuteId: f,
    setSecondId: p,
    periodGenerator: w,
    getCurrentTime: _,
    hourGenerator: b,
    minuteGenerator: x,
    secondGenerator: R
  };
  function c() {
    a.innerHTML = "", a.appendChild(be("ir-icon--check")), a.append(Ne.t("timePicker.btnNow")), n[0].children[0].innerHTML = "", n[0].children[1].innerHTML = "", n[0].children[0].append(Ne.t("timePicker.am")), n[0].children[1].append(Ne.t("timePicker.pm"));
  }
  function N() {
    r.querySelectorAll(".is-selected").forEach((C) => C.classList.remove("is-selected"));
  }
  function k(C, L, Y) {
    const q = C < ge, U = q ? C : C - ge, J = q ? 0 : 1;
    return {
      periodElement: i.children[J],
      hourElement: s.children[U],
      minuteElement: o.children[L],
      secondElement: d.children[Y]
    };
  }
  function v(C, L, Y) {
    const { hourElement: q, minuteElement: U, secondElement: J } = k(C, L, Y);
    s.scrollTop = q.offsetTop - s.clientHeight / 2, o.scrollTop = U.offsetTop - o.clientHeight / 2, d.scrollTop = J.offsetTop - d.clientHeight / 2;
  }
  function E(C, L, Y) {
    const { periodElement: q, hourElement: U, minuteElement: J, secondElement: te } = k(C, L, Y);
    N(), q.classList.add("is-selected"), U.classList.add("is-selected"), J.classList.add("is-selected"), te.classList.add("is-selected");
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
  function f(C) {
    o.querySelector(".is-selected")?.classList.remove("is-selected"), o.children[C].classList.add("is-selected");
  }
  function p(C) {
    d.querySelector(".is-selected")?.classList.remove("is-selected"), d.children[C].classList.add("is-selected");
  }
  function* w() {
    yield [0, i.children[0]], yield [1, i.children[1]];
  }
  function _() {
    return Dn(
      xe(s) + (y() ? 0 : ge),
      xe(o),
      xe(d)
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
function xe(r) {
  const e = r.querySelector(".is-selected");
  return e instanceof HTMLElement ? parseInt(e.innerText || "0", 10) : 0;
}
const zn = /* @__PURE__ */ (() => {
  let r = null;
  return function() {
    return r || (r = An()), r;
  };
})();
function Fn({ uuid: r, refElement: e, onChange: t, visibleSeconds: n }) {
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
    setSecondId: f
  } = zn(), p = {
    setTime(b) {
      const x = n ? b : b + ":00", { hour: R, minute: C, second: L } = lt(x);
      a(R, C, L), h(R, C, L);
    },
    show: () => {
      if (!i) {
        c(), i = !0, w.create(), _.create(), o.nowButton.onclick = (b) => {
          const x = Ie().format("HH:mm:ss");
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
              f(b), t(R, d());
            };
          o.secondPanel.style.removeProperty("display");
        } else
          o.secondPanel.style.setProperty("display", "none");
        o.timePicker.isConnected || He("popover").appendChild(o.timePicker), o.timePicker.style.removeProperty("display"), o.timePicker.setAttribute("data-uuid", r), setTimeout(() => {
          o.timePicker.classList.add(ee.timePicker["is-visible"]), s(), s = vt(e, o.timePicker);
        }, 0);
      }
    },
    hide: () => {
      i && (w.destroy(), _.destroy(), o.timePicker.classList.remove(ee.timePicker["is-visible"]), o.timePicker.addEventListener("transitionend", (b) => {
        b.currentTarget === b.target && (i = !1, r === o.timePicker.getAttribute("data-uuid") && (s(), o.timePicker.remove()));
      }, { once: !0 }));
    },
    onESC: () => p.hide(),
    get visible() {
      return i;
    }
  }, w = tt(p), _ = Et({
    eventElements: [o.timePicker],
    clickOutsideFunc: () => p.hide()
  });
  return p;
}
const Le = { checkbox: Ot, checkboxWrapper: it, checkboxInput: Pe }, pe = { input: Ht, inputNative: Dt, inputSuffix: Pt, inputPrefix: Mt };
class Ii extends De {
  input;
  button;
  timePickerHandler;
  latestValue;
  _value;
  constructor(e) {
    super(e);
    const { visibleSeconds: t = !1 } = e, n = t ? "HH:mm:ss" : "HH:mm";
    if (this.contextElement.className = pe.input, this.input = document.createElement("input"), this.input.placeholder = n, this.input.className = pe.inputNative, this.button = document.createElement("button"), this.button.appendChild(be("ir-icon--watch")), this.button.className = pe.inputSuffix, this.latestValue = e.value || "", this.button.onclick = () => this.toggle(), this.timePickerHandler = Fn({
      uuid: this.uuid,
      refElement: this.contextElement,
      visibleSeconds: t,
      onChange: (i, s) => {
        const o = Ie(s, "HH:mm:ss", !0).format(n);
        this.value = o, this.onChange(o);
      }
    }), e.checkbox) {
      const i = document.createElement("div"), s = document.createElement("label"), o = document.createElement("input");
      o.setAttribute("type", "checkbox"), i.classList.add(Le.checkbox, pe.inputPrefix), s.className = Le.checkboxWrapper, o.className = Le.checkboxInput, s.appendChild(o), i.appendChild(s), this.contextElement.appendChild(i), o.checked = !e.disabled, o.onchange = () => this.disabled = !o.checked, this.addCoreElement(i);
    }
    this.contextElement.appendChild(this.input), this.contextElement.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.disabled = e.disabled === !0, e.onChange && (this.onChange = e.onChange), e.value && (this.value = Ie(e.value, n).format(n)), this.input.onblur = () => {
      Hn(this.input.value, t) ? this.value = this.input.value : this.value = this.latestValue;
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
const F = typeof window < "u" ? window : null, Ae = F === null, de = Ae ? void 0 : F.document, B = "addEventListener", V = "removeEventListener", Se = "getBoundingClientRect", re = "_a", $ = "_b", W = "_c", me = "horizontal", G = () => !1, Un = Ae ? "calc" : `${["", "-webkit-", "-moz-", "-o-"].filter((r) => {
  const e = de.createElement("div");
  return e.style.cssText = `width:${r}calc(9px)`, !!e.style.length;
}).shift()}calc`, ct = (r) => typeof r == "string" || r instanceof String, Qe = (r) => {
  if (ct(r)) {
    const e = de.querySelector(r);
    if (!e)
      throw new Error(`Selector ${r} did not match a DOM element`);
    return e;
  }
  return r;
}, D = (r, e, t) => {
  const n = r[e];
  return n !== void 0 ? n : t;
}, Ce = (r, e, t, n) => {
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
}, Bn = (r, e) => {
  const t = de.createElement("div");
  return t.className = `gutter gutter-${e}`, t;
}, Vn = (r, e, t) => {
  const n = {};
  return ct(e) ? n[r] = e : n[r] = `${Un}(${e}% - ${t}px)`, n;
}, $n = (r, e) => ({ [r]: `${e}px` }), Gn = (r, e = {}) => {
  if (Ae) return {};
  let t = r, n, i, s, o, d, a;
  Array.from && (t = Array.from(t));
  const c = Qe(t[0]).parentNode, N = getComputedStyle ? getComputedStyle(c) : null, k = N ? N.flexDirection : null;
  let v = D(e, "sizes") || t.map(() => 100 / t.length);
  const E = D(e, "minSize", 100), y = Array.isArray(E) ? E : t.map(() => E), T = D(e, "maxSize", 1 / 0), H = Array.isArray(T) ? T : t.map(() => T), f = D(e, "expandToMin", !1), p = D(e, "gutterSize", 10), w = D(e, "gutterAlign", "center"), _ = D(e, "snapOffset", 30), b = Array.isArray(_) ? _ : t.map(() => _), x = D(e, "dragInterval", 1), R = D(e, "direction", me), C = D(
    e,
    "cursor",
    R === me ? "col-resize" : "row-resize"
  ), L = D(e, "gutter", Bn), Y = D(
    e,
    "elementStyle",
    Vn
  ), q = D(e, "gutterStyle", $n);
  R === me ? (n = "width", i = "clientX", s = "left", o = "right", d = "clientWidth") : R === "vertical" && (n = "height", i = "clientY", s = "top", o = "bottom", d = "clientHeight");
  function U(g, l, u, m) {
    const S = Y(n, l, u, m);
    Object.keys(S).forEach((A) => {
      g.style[A] = S[A];
    });
  }
  function J(g, l, u) {
    const m = q(n, l, u);
    Object.keys(m).forEach((S) => {
      g.style[S] = m[S];
    });
  }
  function te() {
    return a.map((g) => g.size);
  }
  function ze(g) {
    return "touches" in g ? g.touches[0][i] : g[i];
  }
  function Fe(g) {
    const l = a[this.a], u = a[this.b], m = l.size + u.size;
    l.size = g / this.size * m, u.size = m - g / this.size * m, U(l.element, l.size, this[$], l.i), U(u.element, u.size, this[W], u.i);
  }
  function ut(g) {
    let l;
    const u = a[this.a], m = a[this.b];
    this.dragging && (l = ze(g) - this.start + (this[$] - this.dragOffset), x > 1 && (l = Math.round(l / x) * x), l <= u.minSize + u.snapOffset + this[$] ? l = u.minSize + this[$] : l >= this.size - (m.minSize + m.snapOffset + this[W]) && (l = this.size - (m.minSize + this[W])), l >= u.maxSize - u.snapOffset + this[$] ? l = u.maxSize + this[$] : l <= this.size - (m.maxSize - m.snapOffset + this[W]) && (l = this.size - (m.maxSize + this[W])), Fe.call(this, l), D(e, "onDrag", G)(te()));
  }
  function Ue() {
    const g = a[this.a].element, l = a[this.b].element, u = g[Se](), m = l[Se]();
    this.size = u[n] + m[n] + this[$] + this[W], this.start = u[s], this.end = u[o];
  }
  function ft(g) {
    if (!getComputedStyle) return null;
    const l = getComputedStyle(g);
    if (!l) return null;
    let u = g[d];
    return u === 0 ? null : (R === me ? u -= parseFloat(l.paddingLeft) + parseFloat(l.paddingRight) : u -= parseFloat(l.paddingTop) + parseFloat(l.paddingBottom), u);
  }
  function Be(g) {
    const l = ft(c);
    if (l === null || y.reduce((A, z) => A + z, 0) > l)
      return g;
    let u = 0;
    const m = [], S = g.map((A, z) => {
      const Q = l * A / 100, ce = Ce(
        p,
        z === 0,
        z === g.length - 1,
        w
      ), he = y[z] + ce;
      return Q < he ? (u += he - Q, m.push(0), he) : (m.push(Q - he), Q);
    });
    return u === 0 ? g : S.map((A, z) => {
      let Q = A;
      if (u > 0 && m[z] - u > 0) {
        const ce = Math.min(
          u,
          m[z] - u
        );
        u -= ce, Q = A - ce;
      }
      return Q / l * 100;
    });
  }
  function gt() {
    const g = this, l = a[g.a].element, u = a[g.b].element;
    g.dragging && D(e, "onDragEnd", G)(te()), g.dragging = !1, F[V]("mouseup", g.stop), F[V]("touchend", g.stop), F[V]("touchcancel", g.stop), F[V]("mousemove", g.move), F[V]("touchmove", g.move), g.stop = null, g.move = null, l[V]("selectstart", G), l[V]("dragstart", G), u[V]("selectstart", G), u[V]("dragstart", G), l.style.userSelect = "", l.style.webkitUserSelect = "", l.style.MozUserSelect = "", l.style.pointerEvents = "", u.style.userSelect = "", u.style.webkitUserSelect = "", u.style.MozUserSelect = "", u.style.pointerEvents = "", g.gutter.style.cursor = "", g.parent.style.cursor = "", de.body.style.cursor = "";
  }
  function pt(g) {
    if ("button" in g && g.button !== 0)
      return;
    const l = this, u = a[l.a].element, m = a[l.b].element;
    l.dragging || D(e, "onDragStart", G)(te()), g.preventDefault(), l.dragging = !0, l.move = ut.bind(l), l.stop = gt.bind(l), F[B]("mouseup", l.stop), F[B]("touchend", l.stop), F[B]("touchcancel", l.stop), F[B]("mousemove", l.move), F[B]("touchmove", l.move), u[B]("selectstart", G), u[B]("dragstart", G), m[B]("selectstart", G), m[B]("dragstart", G), u.style.userSelect = "none", u.style.webkitUserSelect = "none", u.style.MozUserSelect = "none", u.style.pointerEvents = "none", m.style.userSelect = "none", m.style.webkitUserSelect = "none", m.style.MozUserSelect = "none", m.style.pointerEvents = "none", l.gutter.style.cursor = C, l.parent.style.cursor = C, de.body.style.cursor = C, Ue.call(l), l.dragOffset = ze(g) - l.end;
  }
  v = Be(v);
  const Z = [];
  a = t.map((g, l) => {
    const u = {
      element: Qe(g),
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
    }, m[$] = Ce(
      p,
      l - 1 === 0,
      !1,
      w
    ), m[W] = Ce(
      p,
      !1,
      l === t.length - 1,
      w
    ), k === "row-reverse" || k === "column-reverse")) {
      const S = m.a;
      m.a = m.b, m.b = S;
    }
    if (l > 0) {
      const S = L(l, R, u.element);
      J(S, p, l), m[re] = pt.bind(m), S[B](
        "mousedown",
        m[re]
      ), S[B](
        "touchstart",
        m[re]
      ), c.insertBefore(S, u.element), m.gutter = S;
    }
    return U(
      u.element,
      u.size,
      Ce(
        p,
        l === 0,
        l === t.length - 1,
        w
      ),
      l
    ), l > 0 && Z.push(m), u;
  });
  function Ve(g) {
    const l = g.i === Z.length, u = l ? Z[g.i - 1] : Z[g.i];
    Ue.call(u);
    const m = l ? u.size - g.minSize - u[W] : g.minSize + u[$];
    Fe.call(u, m);
  }
  c.offsetWidth > 0 && a.forEach((g) => {
    const l = g.element[Se]()[n];
    l < g.minSize && (f ? Ve(g) : g.minSize = l);
  });
  function mt(g) {
    const l = Be(g);
    l.forEach((u, m) => {
      if (m > 0) {
        const S = Z[m - 1], A = a[S.a], z = a[S.b];
        A.size = l[m - 1], z.size = u, U(A.element, A.size, S[$], A.i), U(z.element, z.size, S[W], z.i);
      }
    });
  }
  function Ct(g, l) {
    Z.forEach((u) => {
      if (l !== !0 ? u.parent.removeChild(u.gutter) : (u.gutter[V](
        "mousedown",
        u[re]
      ), u.gutter[V](
        "touchstart",
        u[re]
      )), g !== !0) {
        const m = Y(
          n,
          u.a.size,
          u[$]
        );
        Object.keys(m).forEach((S) => {
          a[u.a].element.style[S] = "", a[u.b].element.style[S] = "";
        });
      }
    });
  }
  return {
    setSizes: mt,
    getSizes: te,
    collapse(g) {
      Ve(a[g]);
    },
    destroy: Ct,
    parent: c,
    pairs: Z
  };
};
function jn(r) {
  const e = r[0] instanceof HTMLElement ? r[0] : document.querySelector(r[0]);
  Ee(e, "First element is not found.");
  const t = e.parentElement;
  return Ee(t, "Parent element is not found."), t;
}
const Wn = {
  gutterCls: "thick",
  direction: "horizontal",
  snapOffset: 10,
  dragInterval: 5,
  minSize: 100
}, Kn = {
  gutterSize: {
    thin: 1,
    thick: 6
  }
}, Yn = 100, qn = 0.1;
class Xn extends st {
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
      contextElement: jn(e)
    }), this.#e = Object.assign({}, Wn, t);
    const { gutterCls: n } = this.#e;
    this._splitElements = this.#a(), this._splitHandler = Gn(e, {
      ...this.#e,
      gutterSize: Kn.gutterSize[n],
      gutter: this.#d(),
      onDragStart: (i) => {
        Object.assign(this.#t, {
          dragged: !1,
          dragStartSize: this._splitHandler.getSizes()[0],
          beforeCollapsed: this.isCollapsed()
        }), this.#i = i, this.#e.onDragStart?.(i);
      },
      onDrag: (i) => {
        this.#t.dragged = this.#t.dragged || this.#i.reduce((s, o, d) => s += Math.abs(o - i[d]), 0) > qn, this.#e.onDrag?.(i);
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
    return Ee(e instanceof HTMLElement, "Split parent element is not found."), Ee(t instanceof HTMLElement, "First panel element is not found."), { splitParent: e, firstPanel: t };
  }
  #d() {
    const { direction: e, gutterCls: t } = this.#e, n = [
      ye.base,
      ye[t]
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
      Yn - n - i,
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
    e.classList.add(je), t === "vertical" && e.classList.add(We({ flexDirection: "column" })), this.#s(e.firstElementChild, (n) => n.classList.add(Ke));
  }
  #s(e, t) {
    let n = e;
    for (; n; )
      n.classList.contains(ye.base) || t(n), n = n.nextElementSibling;
  }
  #f() {
    const { splitParent: e } = this._splitElements;
    e.classList.remove(je, We({ flexDirection: "column" })), this.#s(e.firstElementChild, (t) => t.classList.remove(Ke));
  }
  onInitDOMEvents(e) {
  }
  onInitHooks() {
  }
  destroy() {
    super.destroy(), this._splitHandler.destroy();
  }
}
function Ti(r, e) {
  return new Xn({ elements: r, options: e });
}
class Jn {
  _dialogElement;
  _wrapperElement;
  _headerElement;
  _bodyElement;
  _footerElement;
  constructor() {
    this._dialogElement = X("div", "dialog"), this._dialogElement.setAttribute("tabindex", "-1"), this._wrapperElement = P(this._dialogElement, "div", "dialog__wrapper"), this._headerElement = P(this._wrapperElement, "div", "dialog__header"), this._bodyElement = P(this._wrapperElement, "div", "dialog__content"), this._footerElement = P(this._wrapperElement, "div", "dialog__footer");
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
const Zn = {
  "#login-info-dialog.title": "Login Information",
  "#login-info-dialog.confirm-button": "Confirm",
  "AUTH.PASSWORD.NOTICE": "Deadline of Password Change",
  "AUTH.ACCESSIP": "Last Login IP",
  "AUTH.LASTESTLOGINTIME": "Last Login Date",
  "AUTH.SECURITY.NOTICE": "Security Issue"
}, Qn = {
  "#login-info-dialog.title": "ログイン情報",
  "#login-info-dialog.confirm-button": "確認",
  "AUTH.PASSWORD.NOTICE": "パスワード変更期限",
  "AUTH.ACCESSIP": "最終ログインIP",
  "AUTH.LASTESTLOGINTIME": "最終ログイン日時",
  "AUTH.SECURITY.NOTICE": "セキュリティ情報"
}, ht = {
  "#login-info-dialog.title": "로그인 정보",
  "#login-info-dialog.confirm-button": "확인",
  "AUTH.PASSWORD.NOTICE": "비밀번호 변경 기한",
  "AUTH.ACCESSIP": "최종 로그인 IP",
  "AUTH.LASTESTLOGINTIME": "최종 로그인 일시",
  "AUTH.SECURITY.NOTICE": "보안 사항"
}, ei = {
  "#login-info-dialog.title": "登录信息",
  // TODO
  "#login-info-dialog.confirm-button": "?",
  "AUTH.PASSWORD.NOTICE": "密码变更期限",
  "AUTH.ACCESSIP": "最终登录IP",
  "AUTH.LASTESTLOGINTIME": "最终登录时间",
  "AUTH.SECURITY.NOTICE": "保安事项"
}, ti = { ko: ht, en: Zn, ja: Qn, zh: ei };
function ni(r, e) {
  return r in e;
}
function ii(r) {
  const e = ti[r] ?? ht;
  return {
    getMsg(t, ...n) {
      return ni(t, e) ? e[t] : t;
    }
  };
}
const oi = 550, ve = {
  "AUTH.ACCESSIP": 1,
  "AUTH.LASTESTLOGINTIME": 2,
  "AUTH.PASSWORD.NOTICE": 3,
  "AUTH.SECURITY.NOTICE": 4
};
function si(r) {
  return r.props.some(([e]) => ve[e] !== void 0);
}
function ri(r) {
  return r.props.filter(([e]) => ve[e] !== void 0).sort(([e], [t]) => ve[e] - ve[t]);
}
function ai(r, e) {
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
function Ri(r) {
  const {
    irm010Data: e,
    lang: t = "ko",
    onClose: n
  } = r;
  if (!si(e))
    throw new Error("no login info data! check irm010 response");
  const i = new Jn(), { getMsg: s } = ii(t), o = () => {
    a.hide();
  }, d = (c) => {
    c.key === "Enter" && o();
  }, a = wt({
    element: i.element,
    type: "dialog",
    parentElement: He("dialog"),
    onESC() {
      n?.(), window.removeEventListener("keyup", d);
    }
  }), h = (() => {
    const c = X("ul", "row", "gap-y--xs");
    return ri(e).forEach(([k, v]) => {
      const E = P(c, "li", "row", "col", "col--12");
      P(E, "div", "col", "col--4").innerText = s(k), k === "AUTH.SECURITY.NOTICE" ? ai(
        P(E, "div", "col", "col--8"),
        v
      ) : P(E, "div", "col", "col--8").innerText = v;
    }), c;
  })();
  return i.setDialogWidth(oi).addStrongHeaderTitle(s("#login-info-dialog.title")).createHeaderCloseButton(o).setContentElement(h).setFooterClass("justify-content--end").addFooterButton(s("#login-info-dialog.confirm-button"), o, "button--primary"), {
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
  to as ClipboardManager,
  Bi as IRCommandBlock,
  Vi as IRCommandManager,
  Si as IRConfirm,
  go as IRContextMenu,
  $i as IRDatePicker,
  Gi as IRSelect,
  Xn as IRSplitContainer,
  Ii as IRTimePicker,
  ki as IRTree,
  _i as IRTreeView,
  Ei as IRTreeViewCascadeCheckingPlugin,
  yi as IRTreeViewColStickyPlugin,
  bi as IRTreeViewDragDropMovePlugin,
  Kt as IRTreeViewKeyboardPlugin,
  on as IRTreeViewMousePlugin,
  xi as IRTreeViewTooltipPlugin,
  bt as IRVirtualDOM,
  _o as Logger,
  no as ReactiveState,
  P as appendElement,
  io as blobToStr,
  Pi as clearGlobalKeyListener,
  le as closest,
  ot as clsZId,
  Et as createClickOutsideHandler,
  oo as createCustomIcon,
  ji as createDropdownDiv,
  Wi as createDropdownItem,
  tt as createESCHideController,
  X as createElement,
  Oi as createFloatingHandler,
  be as createIconElement,
  mo as createImageFromSrcUrl,
  Zi as createLoadingHandler,
  Ri as createLoginInfoDialog,
  Co as createObjectURLFromSvg,
  wt as createPopover,
  Ti as createSplitContainer,
  so as createTooltip,
  ro as createTooltipBySelector,
  xt as createTooltipContainer,
  Xi as dispatchClickOutsideEvent,
  No as downloadDataURL,
  ko as getBase64FromSvg,
  Yi as getComponentManager,
  ao as getIRIconFormat,
  lo as getIRIconPng,
  vo as getImageBlobFromImage,
  He as getLayerElement,
  co as getMinMaxBetween,
  zt as getTextWidthContext,
  Mi as getThemeStore,
  ho as getTooltipElements,
  Ai as getVirtualEl,
  Li as hasDisplayedConfirm,
  si as hasLoginInfo,
  Ne as i18n,
  vt as offsetBottomAutoUpdate,
  uo as parseInt,
  zi as peekESCStack,
  Fi as registerGlobalKeyListener,
  vi as renderCheckboxTreeNode,
  Oe as renderDefaultTreeNode,
  wi as setTreeDragDropReorder,
  kt as unregisterGlobalKeyListener,
  yt as uuid,
  Qi as xss
};
//# sourceMappingURL=index.js.map
