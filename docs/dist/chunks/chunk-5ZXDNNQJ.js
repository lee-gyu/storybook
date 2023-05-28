import {
  i18n_default,
  require_dayjs_min
} from "./chunk-ZBZVVTYW.js";
import {
  IRComponent
} from "./chunk-BI23OIPF.js";
import {
  __toESM,
  appendElement,
  createClickOutsideHandler,
  createESCHideController,
  createIconElement,
  hasClass,
  layer_default,
  offsetBottomAutoUpdate,
  registerGlobalKeyListener,
  require_lib,
  require_lodash,
  unregisterGlobalKeyListener,
  xss_default,
  z_index_classNames_default
} from "./chunk-JYMTCUXI.js";

// src/js-components/tab/index.ts
var IRPageControl = class {
  constructor() {
  }
};

// src/js-components/tree/tree.classNames.ts
var block = "tree";
var tree_classNames_default = {
  tree: {
    "&": block
  },
  treeList: {
    "&": `${block}__list`
  },
  treeLabel: {
    "&": `${block}__label`
  },
  treeLabelText: {
    "&": `${block}__label-text`
  },
  treeItem: {
    "&": `${block}__item`,
    parent: `${block}__item--parent`,
    "is-expanded": "is-expanded",
    "is-selected": "is-selected"
  },
  treeItemContent: {
    "&": `${block}__item-content`
  },
  treeIconFolder: {
    "&": `${block}__icon-folder`
  },
  treeIconExpand: {
    "&": `${block}__icon-expand`
  }
};

// src/components/checkbox/checkbox.classNames.ts
var block2 = "checkbox";
var checkbox_classNames_default = {
  checkbox: {
    "&": block2
  },
  checkboxInput: {
    "&": `${block2}__input`
  },
  checkboxWrapper: {
    "&": `${block2}__wrapper`
  },
  text: {
    "&": `${block2}__text`
  }
};

// src/js-components/tree/renderer.ts
var renderDefaultTreeNode = (_node) => {
  const content2 = document.createElement("div");
  const iconFolder = document.createElement("i");
  const span = document.createElement("span");
  content2.className = tree_classNames_default.treeLabel["&"];
  span.className = tree_classNames_default.treeLabelText["&"];
  return {
    get template() {
      return content2;
    },
    update: (node) => {
      if (node.iconClass) {
        if (!iconFolder.isConnected)
          content2.insertAdjacentElement("afterbegin", iconFolder);
        iconFolder.className = `${tree_classNames_default.treeIconFolder["&"]} ir-icon ${node.iconClass}`;
        if (node.iconColor)
          iconFolder.style.setProperty("--ir-icon-foreground-color", node.iconColor);
        else
          iconFolder.style.removeProperty("--ir-icon-foreground-color");
      } else
        iconFolder.remove();
      if (node.caption) {
        content2.appendChild(span);
        span.innerText = node.caption;
      } else
        span.remove();
    }
  };
};
var renderCheckboxTreeNode = ({ onCheck }) => {
  return (node) => {
    const content2 = renderDefaultTreeNode(node);
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.classList.add(checkbox_classNames_default.checkboxWrapper["&"]);
    checkbox.classList.add(checkbox_classNames_default.checkboxInput["&"]);
    content2.template.insertAdjacentElement("afterbegin", label);
    label.appendChild(checkbox);
    checkbox.addEventListener("click", () => {
      var _a;
      node.updateCheckedWithPropagation(checkbox.checked);
      (_a = node._parentItem) == null ? void 0 : _a.updateCheckedStatus();
      onCheck && onCheck(node);
    });
    return {
      get template() {
        return content2.template;
      },
      update: (node2) => {
        content2.update(node2);
        if (node2.checked !== checkbox.checked)
          checkbox.checked = node2.checked;
      }
    };
  };
};

// src/js-components/tree/treeNode.ts
var statusIcon = "ir-icon--triangle-small-right";
var IRTreeNode = class {
  constructor({
    parentItem,
    icon,
    caption,
    data,
    level,
    defaultChecked = false,
    renderer = renderDefaultTreeNode,
    disabled = false
  }) {
    this.children = [];
    this._parentItem = parentItem;
    this.data = data;
    this.level = level;
    this._iconClass = icon;
    this._caption = caption;
    this._template = renderer(this);
    this._checked = defaultChecked;
    this._disabled = disabled;
    this.liTreeItem = document.createElement("li");
    this.liTreeItem.classList.add(tree_classNames_default.treeItem["&"]);
    this.divTreeItemContent = appendElement(this.liTreeItem, "div", tree_classNames_default.treeItemContent["&"]);
    this.ulTreeList = document.createElement("ul");
    this.ulTreeList.classList.add(tree_classNames_default.treeList["&"]);
    this.iconExpand = appendElement(this.divTreeItemContent, "i", tree_classNames_default.treeIconExpand["&"], "ir-icon", statusIcon);
    this.divTreeItemContent.appendChild(this._template.template);
    this.divTreeItemContent.draggable = true;
    this.divTreeItemContent.addEventListener("dragstart", (ev) => this.onDragStart(ev));
    this.divTreeItemContent.addEventListener("dragenter", (ev) => this.onDragOver(ev) && this.divTreeItemContent.classList.add("is-dragging"));
    this.divTreeItemContent.addEventListener("dragover", (ev) => this.onDragOver(ev) && ev.preventDefault());
    this.divTreeItemContent.addEventListener("dragend", (ev) => this.onDragEnd(ev));
    this.divTreeItemContent.addEventListener("dragleave", () => this.clearDragging());
    this.divTreeItemContent.addEventListener("drop", (ev) => {
      try {
        this.onDrop(ev);
      } finally {
        this.clearDragging();
      }
    });
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
  get order() {
    if (!this.liTreeItem.parentElement)
      return -1;
    return Array.prototype.indexOf.call(this.liTreeItem.parentElement.children, this.liTreeItem);
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
    return this.liTreeItem.classList.contains(tree_classNames_default.treeItem.parent);
  }
  get expanded() {
    return this.liTreeItem.classList.contains(tree_classNames_default.treeItem["is-expanded"]);
  }
  get selected() {
    return this.liTreeItem.classList.contains(tree_classNames_default.treeItem["is-selected"]);
  }
  get iconColor() {
    return this._iconColor;
  }
  get checked() {
    return this._checked;
  }
  set parentItem(node) {
    if (node === this._parentItem)
      return;
    const oldParent = this._parentItem;
    const newParent = node;
    if (oldParent)
      oldParent.removeChildNode(this);
    if (newParent)
      newParent.addNode(this);
    this._parentItem = newParent;
  }
  set caption(text) {
    this._caption = text;
    this.render();
  }
  set disabled(nextDisabled) {
    if (this._disabled === nextDisabled)
      return;
    this._disabled = nextDisabled;
    if (this._disabled)
      this.liTreeItem.classList.add("is-disabled");
    else
      this.liTreeItem.classList.remove("is-disabled");
  }
  set checked(checked) {
    this._checked = checked;
    this.render();
  }
  set iconClass(iconClass) {
    this._iconClass = iconClass;
    this.render();
  }
  set iconColor(color) {
    this._iconColor = color;
    this.render();
  }
  set hasChildren(value) {
    if (value)
      this.liTreeItem.classList.add(tree_classNames_default.treeItem.parent);
    else
      this.liTreeItem.classList.remove(tree_classNames_default.treeItem.parent);
  }
  removeItems() {
    [...this.children].forEach((node) => node.delete());
  }
  addNode(node) {
    this.children.push(node);
    if (!this.hasChildren)
      this.hasChildren = true;
  }
  updateCheckedWithPropagation(checked) {
    this.checked = checked;
    this.children.forEach((node) => node.updateCheckedWithPropagation(checked));
  }
  updateCheckedStatus() {
    this.checked = this.children.every((node) => node.checked);
  }
  delete() {
    this.liTreeItem.remove();
    this.emitDeleteRecursive();
    if (this._parentItem)
      this._parentItem.removeChildNode(this);
  }
  collapse() {
    if (!this.hasChildren)
      return;
    if (this.expanded) {
      if (this.onCollapsing(this)) {
        this.liTreeItem.classList.remove(tree_classNames_default.treeItem["is-expanded"]);
        this.ulTreeList.remove();
        this.onCollapse(this);
      }
    }
  }
  scrollIntoView() {
    this.divTreeItemContent.scrollIntoView();
  }
  expand() {
    if (!this.hasChildren)
      return;
    if (!this.expanded) {
      if (this.onExpanding(this)) {
        this.liTreeItem.classList.add(tree_classNames_default.treeItem["is-expanded"]);
        this.liTreeItem.appendChild(this.ulTreeList);
        this.onExpand(this);
      }
    }
  }
  toggle() {
    if (this.liTreeItem.classList.contains(tree_classNames_default.treeItem["is-expanded"]))
      this.collapse();
    else
      this.expand();
  }
  select() {
    if (!this.selected) {
      this.liTreeItem.classList.add(tree_classNames_default.treeItem["is-selected"]);
      this.onSelect(this);
    }
  }
  release() {
    if (this.selected) {
      this.liTreeItem.classList.remove(tree_classNames_default.treeItem["is-selected"]);
      this.onRelease(this);
    }
  }
  render() {
    this._template.update(this);
    this.onRender(this._template.template);
  }
  /**
   * Drag Event
   */
  onDragStart(_ev) {
  }
  onDrop(_ev) {
  }
  onDragEnd(_ev) {
  }
  onDragOver(_ev) {
    return false;
  }
  /**
   * Object Events
   */
  onSelect(_node) {
  }
  onRelease(_node) {
  }
  onRemove(_node) {
  }
  onExpanding(_node) {
    return true;
  }
  onExpand(_node) {
  }
  onRender(_element) {
  }
  onCollapsing(_node) {
    return true;
  }
  onCollapse(_node) {
  }
  /**
   * 현재 자식 배열에서 해당 node 제거
   */
  removeChildNode(node) {
    const id = this.children.indexOf(node);
    if (id === -1)
      throw new Error("there is not the node");
    this.children.splice(id, 1);
    if (this.children.length === 0) {
      this.hasChildren = false;
      this.collapse();
    }
  }
  emitDeleteRecursive() {
    this.children.forEach((node) => node.emitDeleteRecursive());
    this.onRemove(this);
  }
  clearDragging() {
    this.divTreeItemContent.classList.remove("is-dragging");
  }
};

// src/js-components/tree/tree.ts
var IRTree = class extends IRComponent {
  constructor({ contextElement, renderer = renderDefaultTreeNode }) {
    super({ contextElement });
    this.nodes = [];
    this.selectedNode = null;
    this.renderer = renderer;
    contextElement.classList.add(tree_classNames_default.tree["&"]);
    this.rootElement = appendElement(contextElement, "ul", tree_classNames_default.treeList["&"]);
    this.addCoreElement(this.rootElement);
  }
  get items() {
    return [...this.nodes];
  }
  get selected() {
    return this.selectedNode;
  }
  set selected(node) {
    var _a;
    if (this.selected === node)
      return;
    (_a = this.selectedNode) == null ? void 0 : _a.release();
    this.selectedNode = node;
    this.onChanged(node);
    if (node) {
      node.select();
      this.onSelectNode(node);
    }
  }
  onDblClick(node) {
    node.toggle();
  }
  onToggleClick(node) {
    node.toggle();
  }
  onLabelClick(node) {
    this.selected = node;
  }
  onSelectNode(_4) {
  }
  onReleaseNode(_4) {
  }
  onRemoveNode(_4) {
  }
  onChanged(_4) {
  }
  onExpanding(_4) {
    return true;
  }
  onExpand(_4) {
  }
  onCollapsing(_4) {
    return true;
  }
  onCollapse(_4) {
  }
  onDragStartNode(node, ev) {
    if (!ev.dataTransfer)
      return;
    ev.dataTransfer.setData("application/json", JSON.stringify(node.data));
    ev.dataTransfer.dropEffect = "copy";
  }
  onDragOverOnNode(_node, _ev) {
    return false;
  }
  onDropOnNode(_node, _ev) {
  }
  onDragEndNode(_node, ev) {
  }
  onRenderNode(_node, _element) {
  }
  onNodeMoved(_node, _beforeOrder) {
  }
  addChild(parent, caption, data, order) {
    const node = new IRTreeNode({
      parentItem: parent,
      caption,
      data,
      level: parent ? parent.level + 1 : 0,
      renderer: this.renderer
    });
    if (parent)
      parent.addNode(node);
    this.nodes.push(node);
    node.divTreeItemContent.ondblclick = (ev) => {
      if (ev.target.classList.contains("checkbox__wrapper"))
        return;
      this.onDblClick(node);
    };
    node.divTreeItemContent.onclick = (ev) => {
      this.onLabelClick(node);
    };
    node.iconExpand.onclick = () => this.onToggleClick(node);
    node.onSelect = () => this.selected = node;
    node.onRelease = (node2) => this.onReleaseNode(node2);
    node.onRemove = () => {
      const id = this.nodes.indexOf(node);
      if (id !== -1)
        this.nodes.splice(this.nodes.indexOf(node), 1);
      this.onRemoveNode(node);
    };
    node.onExpanding = () => this.onExpanding(node);
    node.onExpand = () => this.onExpand(node);
    node.onCollapsing = () => this.onCollapsing(node);
    node.onCollapse = () => this.onCollapse(node);
    node.onDragStart = (ev) => this.onDragStartNode(node, ev);
    node.onDrop = (ev) => this.onDropOnNode(node, ev);
    node.onDragOver = (ev) => this.onDragOverOnNode(node, ev);
    node.onDragEnd = (ev) => this.onDragEndNode(node, ev);
    node.onRender = (element) => this.onRenderNode(node, element);
    node.render();
    const parentElement = parent ? parent.ulTreeList : this.rootElement;
    if (order === void 0)
      parentElement.appendChild(node.liTreeItem);
    else if (order >= parentElement.children.length) {
      parentElement.insertAdjacentElement("beforeend", node.liTreeItem);
    } else {
      parentElement.children[order].insertAdjacentElement("beforebegin", node.liTreeItem);
    }
    return node;
  }
  moveNode(node, targetNode, isTop) {
    if (node === targetNode.parentItem) {
      console.error("Could not move to the node own child node.");
      return;
    }
    const beforeOrder = node.order;
    node.parentItem = targetNode.parentItem;
    if (targetNode.parentItem === null)
      node.level = 0;
    else
      node.level = targetNode.parentItem.level + 1;
    targetNode.liTreeItem.insertAdjacentElement(isTop ? "beforebegin" : "afterend", node.liTreeItem);
    this.onNodeMoved(node, beforeOrder);
  }
  selectNode(node) {
    if (!this.nodes.includes(node))
      throw new Error("Can't select the node because it's not included");
    this.selected = node;
  }
  clear() {
    this.selectedNode = null;
    this.rootElement.innerHTML = "";
    this.nodes.splice(0, this.nodes.length);
  }
  expandAll() {
    this.nodes.forEach((node) => node.expand());
  }
  collapseAll() {
    this.nodes.forEach((node) => node.collapse());
  }
  expandTo(to) {
    let node = to._parentItem;
    while (node) {
      node.expand();
      node = node._parentItem;
    }
  }
  getDropNode(ev) {
    var _a;
    const label = hasClass(ev.target, tree_classNames_default.treeLabel["&"], this.contextElement);
    return label !== null ? (_a = label.parentElement) == null ? void 0 : _a.parentElement : null;
  }
};

// src/js-components/tree/drag-drop-reorder.ts
var OFFSET_BORDER = 16;
var setTreeDragDropReorder = (tree) => {
  let startDraggingNode = null;
  let lastDraggingNode = null;
  const clearNodeBorderStyle = () => {
    if (lastDraggingNode) {
      lastDraggingNode.divTreeItemContent.classList.remove("is-top");
      lastDraggingNode.divTreeItemContent.classList.remove("is-bottom");
    }
    lastDraggingNode = null;
  };
  tree.onDragStartNode = (node, ev) => {
    if (!ev.dataTransfer)
      return;
    ev.dataTransfer.dropEffect = "move";
    startDraggingNode = node;
  };
  tree.onDragOverOnNode = (node, ev) => {
    if (startDraggingNode === node)
      return false;
    let parent = node._parentItem;
    while (parent !== null) {
      if (parent === startDraggingNode)
        return false;
      parent = parent._parentItem;
    }
    clearNodeBorderStyle();
    node.divTreeItemContent.classList.add(ev.offsetY < OFFSET_BORDER ? "is-top" : "is-bottom");
    lastDraggingNode = node;
    return true;
  };
  tree.onDropOnNode = (targetNode) => {
    if (!startDraggingNode)
      throw new Error("No start dragging node!");
    tree.moveNode(
      startDraggingNode,
      targetNode,
      targetNode.divTreeItemContent.classList.contains("is-top")
    );
  };
  tree.onDragEndNode = () => {
    clearNodeBorderStyle();
  };
};

// src/js-components/select/select.ts
var import_lodash = __toESM(require_lodash());

// src/js-components/select/select.classNames.ts
var selectBlock = "select";
var selectDropdownBlock = "select-dropdown";
var select_classNames_default = {
  select: {
    "&": selectBlock,
    transparent: `${selectBlock}--transparent`,
    "is-expanded": "is-expanded"
  },
  selectItem: {
    "&": `${selectBlock}__item`
  },
  selectInput: {
    "&": `${selectBlock}__input`
  },
  selectInputNative: {
    "&": `${selectBlock}__input-native`
  },
  selectInputIcon: {
    "&": `${selectBlock}__input-icon`
  },
  selectDropdown: {
    "&": selectDropdownBlock
  },
  selectDropdownList: {
    "&": `${selectDropdownBlock}__list`
  },
  selectDropdownButton: {
    "&": `${selectDropdownBlock}__button`,
    "is-selected": "is-selected"
  },
  selectDropdownItem: {
    "&": `${selectDropdownBlock}__item`
  },
  selectDropdownIcon: {
    "&": `${selectDropdownBlock}__icon`
  }
};

// src/js-components/select/select.ts
var createDropdownDiv = () => {
  const divDropdown = document.createElement("div");
  const ulItems = document.createElement("ul");
  divDropdown.classList.add(select_classNames_default.selectDropdown["&"], z_index_classNames_default.zIndex.popover);
  ulItems.className = select_classNames_default.selectDropdownList["&"];
  divDropdown.appendChild(ulItems);
  return { divDropdown, ulItems };
};
var createDropdownItem = (value, text) => {
  const item = document.createElement("li");
  const button = document.createElement("button");
  const icon = document.createElement("i");
  const span = document.createElement("span");
  span.innerText = text;
  button.type = "button";
  button.className = select_classNames_default.selectDropdownButton["&"];
  item.className = select_classNames_default.selectDropdownItem["&"];
  item.setAttribute("ir-select-value", value);
  icon.classList.add(select_classNames_default.selectDropdownIcon["&"], "ir-icon", "ir-icon--check");
  button.appendChild(icon);
  button.append(span);
  item.append(button);
  return { item, button, icon, span };
};
var IRSelect = class extends IRComponent {
  constructor(args) {
    super({
      contextElement: args instanceof HTMLSelectElement ? args : args.contextElement
    });
    this.floatingCleanup = () => void 0;
    this.divSelect = document.createElement("div");
    this.divInput = document.createElement("div");
    this.inputValue = document.createElement("input");
    const dropDownElements = createDropdownDiv();
    this.divDropDown = dropDownElements.divDropdown;
    this.ulItems = dropDownElements.ulItems;
    this.items = [];
    this.select = this.contextElement;
    const icon = document.createElement("i");
    this.inputValue.readOnly = true;
    this.inputValue.type = "text";
    this.divSelect.classList.add(select_classNames_default.select["&"]);
    this.select.classList.forEach((cls) => this.divSelect.classList.add(cls));
    this.divInput.className = select_classNames_default.selectInput["&"];
    this.inputValue.className = select_classNames_default.selectInputNative["&"];
    icon.classList.add(select_classNames_default.selectInputIcon["&"], "ir-icon", "ir-icon--chevron-down");
    this.divInput.appendChild(this.inputValue);
    this.divInput.appendChild(icon);
    this.divDropDown.appendChild(this.ulItems);
    this.divSelect.appendChild(this.divInput);
    const defaultValue = this.select.value;
    this._value = "";
    Array.from(this.select.children).map((e) => e).forEach((e) => {
      const attributes = {};
      for (let i = 0; i < e.attributes.length; ++i) {
        const attr = e.attributes.item(i);
        if (!attr)
          return;
        attributes[attr.name] = attr.value;
      }
      this.addItem(e.value, e.text, attributes);
      e.remove();
    });
    if (!(args instanceof HTMLSelectElement)) {
      if (args.onChange)
        this.onChange = args.onChange;
      this.disabled = args.disabled ?? false;
      if (args.defaultValue !== null)
        this.value = args.defaultValue || defaultValue;
      if (args.placeholder)
        this.inputValue.placeholder = args.placeholder;
    } else
      this.value = defaultValue;
    this.select.insertAdjacentElement("beforebegin", this.divSelect);
    this.select.style.display = "none";
    this.divInput.onclick = () => this.toggle();
    this.addCoreElement(this.divSelect);
    this.escController = createESCHideController(this);
    this.outsideHandler = createClickOutsideHandler({
      eventElements: [this.divSelect, this.divDropDown],
      clickOutsideFunc: () => this.hide()
    });
  }
  /*
   * Getters
   */
  get listItems() {
    return [...this.items];
  }
  get disabled() {
    return this.inputValue.hasAttribute("disabled");
  }
  get value() {
    return this._value;
  }
  get text() {
    return this.inputValue.value;
  }
  /*
   * Setters
   */
  set disabled(bool) {
    if (bool)
      this.inputValue.setAttribute("disabled", "true");
    else
      this.inputValue.removeAttribute("disabled");
  }
  set value(value) {
    if (this._value === value)
      return;
    if (this.hasElementByValue(value))
      this.selectItem(value);
    else
      throw new Error(`There is no '${value}' value`);
  }
  clearItems() {
    this.lastClickedOption = void 0;
    this.items.forEach(({ element, option }) => {
      element.remove();
      option.remove();
    });
    this.items = [];
    this.inputValue.value = "";
    this.select.value = "";
    this._value = "";
  }
  removeItem(value) {
    this.items.filter((x) => x.value === value).forEach(({ element, option }) => {
      element.remove();
      option.remove();
    });
    this.items = this.items.filter((x) => x.value !== value);
  }
  expand() {
    if (this.disabled)
      return;
    this.divDropDown.style.width = `${this.divSelect.offsetWidth}px`;
    if (!this.divDropDown.isConnected)
      document.body.appendChild(this.divDropDown);
    this.escController.create();
    this.outsideHandler.create();
    setTimeout(() => {
      this.divSelect.classList.add(select_classNames_default.select["is-expanded"]);
      this.divDropDown.classList.add(select_classNames_default.select["is-expanded"]);
      this.floatingCleanup();
      this.floatingCleanup = offsetBottomAutoUpdate(this.divSelect, this.divDropDown);
    }, 0);
  }
  hide() {
    this.escController.destroy();
    this.outsideHandler.destroy();
    this.divSelect.classList.remove(select_classNames_default.select["is-expanded"]);
    this.divDropDown.classList.remove(select_classNames_default.select["is-expanded"]);
    this.divDropDown.addEventListener("transitionend", (ev) => {
      if (ev.currentTarget !== ev.target)
        return;
      this.floatingCleanup();
      this.divDropDown.remove();
    }, { once: true });
  }
  toggle() {
    if (this.divSelect.classList.contains(select_classNames_default.select["is-expanded"]))
      this.hide();
    else
      this.expand();
  }
  addItem(value, text, attr = {}) {
    const { item, button } = createDropdownItem(value, text);
    const option = document.createElement("option");
    Object.entries(attr).forEach(([key, value2]) => option.setAttribute(key, value2));
    option.value = value;
    option.innerText = text;
    this.select.appendChild(option);
    this.items.push({ text, value, element: item, option, attr });
    this.ulItems.appendChild(item);
    item.onclick = (_ev) => {
      if (this.lastClickedOption !== option) {
        this.clearSelectedStatus();
        this.changeValue({ text, value, attr, element: item, option });
      }
      this.hide();
    };
    return button;
  }
  /*
   * Object Events
   */
  onChange(_select, _option) {
  }
  setValueWithoutEvent(value) {
    if (this._value === value)
      return;
    if (this.hasElementByValue(value))
      this.selectItem(value, false);
    else
      throw new Error(`There is no '${value}' value`);
  }
  /*
   * Private Methods
   */
  hasElementByValue(value) {
    return (0, import_lodash.default)(this.ulItems.querySelectorAll(`[ir-select-value]`)).map((e) => e).some((e) => e.getAttribute("ir-select-value") === value);
  }
  clearSelectedStatus() {
    (0, import_lodash.default)(this.items).forEach(({ element }) => element.classList.remove(select_classNames_default.selectDropdownButton["is-selected"]));
  }
  selectItem(value, emitEvent = true) {
    this.clearSelectedStatus();
    (0, import_lodash.default)(this.items).dropWhile((item) => item.value !== value).take(1).forEach((e) => this.changeValue(e, emitEvent));
  }
  changeValue({ text, value, option, element }, emitEvent = true) {
    this.lastClickedOption = option;
    element.classList.add(select_classNames_default.selectDropdownButton["is-selected"]);
    this.inputValue.value = text;
    this.select.value = value;
    this._value = value;
    if (emitEvent)
      this.onChange(this.select, option);
  }
};

// src/js-components/datePicker/datePicker.ts
var import_dayjs2 = __toESM(require_dayjs_min());

// src/js-components/datePicker/datePicker.handler.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_lodash2 = __toESM(require_lodash());

// src/js-components/datePicker/datePicker.classNames.ts
var block3 = "datepicker";
var datePicker_classNames_default = {
  datePicker: {
    "&": block3,
    "is-visible": "is-visible"
  },
  datePickerHeader: {
    "&": `${block3}__header`
  },
  datePickerHeaderTitle: {
    "&": `${block3}__header-title`
  },
  datePickerHeaderButton: {
    "&": `${block3}__header-button`,
    "prev": `${block3}__header-button--prev`,
    "next": `${block3}__header-button--next`
  },
  datePickerContent: {
    "&": `${block3}__content`
  },
  datePickerFooter: {
    "&": `${block3}__footer`
  },
  datePickerCell: {
    "&": `${block3}__cell`,
    "is-selected": "is-selected",
    "is-disabled": "is-disabled"
  }
};

// src/js-components/datePicker/datePicker.elements.ts
var datePicker = document.createElement("div");
var header = document.createElement("div");
var headerPrevYear = document.createElement("button");
var headerPrev = document.createElement("button");
var headerTitle = document.createElement("strong");
var headerNext = document.createElement("button");
var headerNextYear = document.createElement("button");
var prevButtonGroup = document.createElement("div");
var nextButtonGroup = document.createElement("div");
headerPrevYear.appendChild(createIconElement("ir-icon--chevron-double-left"));
headerPrev.appendChild(createIconElement("ir-icon--chevron-left"));
headerNext.appendChild(createIconElement("ir-icon--chevron-right"));
headerNextYear.appendChild(createIconElement("ir-icon--chevron-double-right"));
var content = document.createElement("div");
var contentTable = document.createElement("table");
var contentTableThead = document.createElement("thead");
var contentTableTbody = document.createElement("tbody");
var footer = document.createElement("div");
datePicker.classList.add(datePicker_classNames_default.datePicker["&"], z_index_classNames_default.zIndex.popover);
header.classList.add(datePicker_classNames_default.datePickerHeader["&"]);
headerTitle.classList.add(datePicker_classNames_default.datePickerHeaderTitle["&"]);
headerPrevYear.classList.add("icon-button", datePicker_classNames_default.datePickerHeaderButton["&"]);
headerPrev.classList.add("icon-button", datePicker_classNames_default.datePickerHeaderButton["&"]);
headerNext.classList.add("icon-button", datePicker_classNames_default.datePickerHeaderButton["&"]);
headerNextYear.classList.add("icon-button", datePicker_classNames_default.datePickerHeaderButton["&"]);
content.classList.add(datePicker_classNames_default.datePickerContent["&"]);
footer.classList.add(datePicker_classNames_default.datePickerFooter["&"]);
prevButtonGroup.appendChild(headerPrevYear);
prevButtonGroup.appendChild(headerPrev);
nextButtonGroup.appendChild(headerNext);
nextButtonGroup.appendChild(headerNextYear);
header.appendChild(prevButtonGroup);
header.appendChild(headerTitle);
header.appendChild(nextButtonGroup);
var WeekdayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var weekdayRow = document.createElement("tr");
var weekdayCells = {};
WeekdayList.forEach((w) => {
  const cell = document.createElement("th");
  cell.setAttribute("scope", "col");
  weekdayCells[w] = cell;
  weekdayRow.appendChild(cell);
});
contentTableThead.appendChild(weekdayRow);
contentTable.appendChild(contentTableThead);
contentTable.appendChild(contentTableTbody);
content.appendChild(contentTable);
var todayButton = document.createElement("button");
todayButton.classList.add("button");
todayButton.type = "button";
footer.appendChild(todayButton);
datePicker.appendChild(header);
datePicker.appendChild(content);
datePicker.appendChild(footer);
var updateI18n = () => {
  todayButton.innerHTML = "";
  todayButton.appendChild(createIconElement("ir-icon--check", "button__icon-prefix"));
  todayButton.append(i18n_default.datePicker.btnToday);
  WeekdayList.forEach((w) => weekdayCells[w].innerText = i18n_default.common[w]);
};
var datePicker_elements_default = {
  datePicker,
  headerTitle,
  contentTableTbody,
  headerPrev,
  headerNext,
  todayButton,
  updateI18n,
  headerNextYear,
  headerPrevYear
};

// src/js-components/datePicker/datePicker.handler.ts
var setTimeZero = (date) => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};
var WEEK_COUNT = 6;
var WEEKDAYS_COUNT = 7;
var NEXT_MONTH_DAYS = 32;
var PREV_MONTH_DAYS = 0;
var createDatePickerHandler = ({ uuid, refElement, onClick, minDate, maxDate }) => {
  let visible = false;
  let floatingCleanup = () => void 0;
  setTimeZero(minDate);
  setTimeZero(maxDate);
  const clickOutsideHandler = createClickOutsideHandler({
    eventElements: [datePicker_elements_default.datePicker],
    clickOutsideFunc: () => handler.hide()
  });
  const handler = {
    get visible() {
      return visible;
    },
    update: function(calendarDate, selectedDate) {
      const tmp = setTimeZero(new Date(calendarDate));
      const curMon = tmp.getMonth();
      datePicker_elements_default.headerPrev.onclick = () => {
        calendarDate.setDate(PREV_MONTH_DAYS);
        this.update(calendarDate, selectedDate);
      };
      datePicker_elements_default.headerNext.onclick = () => {
        calendarDate.setDate(NEXT_MONTH_DAYS);
        this.update(calendarDate, selectedDate);
      };
      datePicker_elements_default.headerPrevYear.onclick = () => {
        calendarDate.setFullYear(calendarDate.getFullYear() - 1);
        this.update(calendarDate, selectedDate);
      };
      datePicker_elements_default.headerNextYear.onclick = () => {
        calendarDate.setFullYear(calendarDate.getFullYear() + 1);
        this.update(calendarDate, selectedDate);
      };
      datePicker_elements_default.todayButton.onclick = () => {
        const today = /* @__PURE__ */ new Date();
        onClick.call(null, today);
        this.update(today, today);
      };
      datePicker_elements_default.updateI18n();
      datePicker_elements_default.headerTitle.innerText = (0, import_dayjs.default)(tmp).format(i18n_default.datePicker.titleFormat);
      tmp.setDate(1);
      tmp.setDate(-(tmp.getDay() - 1));
      datePicker_elements_default.contentTableTbody.innerHTML = "";
      import_lodash2.default.range(WEEK_COUNT).forEach(() => {
        const row = document.createElement("tr");
        for (let i = 0; i < WEEKDAYS_COUNT; i++) {
          const cell = document.createElement("td");
          const tmpDate = new Date(tmp);
          cell.innerText = `${tmp.getDate()}`;
          cell.onclick = () => onClick(tmpDate);
          if (tmpDate < minDate || tmpDate > maxDate)
            cell.classList.add("is-disabled");
          else if (tmp.getMonth() !== curMon)
            cell.classList.add("is-diff-month");
          else if (tmp.getTime() === (selectedDate == null ? void 0 : selectedDate.getTime()))
            cell.classList.add("is-selected");
          row.appendChild(cell);
          tmp.setDate(tmp.getDate() + 1);
        }
        datePicker_elements_default.contentTableTbody.appendChild(row);
      });
    },
    show: function() {
      visible = true;
      if (!datePicker_elements_default.datePicker.isConnected)
        document.body.appendChild(datePicker_elements_default.datePicker);
      datePicker_elements_default.datePicker.style.removeProperty("display");
      datePicker_elements_default.datePicker.setAttribute("data-for", uuid);
      clickOutsideHandler.create();
      escController.create();
      setTimeout(() => {
        datePicker_elements_default.datePicker.classList.add(datePicker_classNames_default.datePicker["is-visible"]);
        floatingCleanup();
        floatingCleanup = offsetBottomAutoUpdate(refElement, datePicker_elements_default.datePicker);
      }, 0);
    },
    hide: function() {
      clickOutsideHandler.destroy();
      escController.destroy();
      const hideHandler = (ev) => {
        if (ev.currentTarget !== ev.target)
          return;
        visible = false;
        datePicker_elements_default.datePicker.removeEventListener("transitionend", hideHandler);
        if (uuid === datePicker_elements_default.datePicker.getAttribute("data-for")) {
          floatingCleanup();
          datePicker_elements_default.datePicker.remove();
        }
      };
      datePicker_elements_default.datePicker.addEventListener("transitionend", hideHandler);
      datePicker_elements_default.datePicker.classList.remove(datePicker_classNames_default.datePicker["is-visible"]);
    },
    onESC: () => handler.hide()
  };
  const escController = createESCHideController(handler);
  return handler;
};

// src/components/input/input.classNames.ts
var block4 = "input";
var input_classNames_default = {
  input: {
    "&": block4
  },
  inputNative: {
    "&": `${block4}__native`
  },
  inputSuffix: {
    "&": `${block4}__suffix`
  },
  inputPrefix: {
    "&": `${block4}__prefix`
  }
};

// src/js-components/datePicker/datePicker.ts
var convertToMomentFromStrOrDate = (defaultDate, format) => {
  if (defaultDate instanceof Date)
    return (0, import_dayjs2.default)(defaultDate).startOf("D");
  else if (typeof defaultDate === "string")
    return (0, import_dayjs2.default)(defaultDate, format);
  return (0, import_dayjs2.default)(null);
};
var IRDatePicker = class extends IRComponent {
  constructor({
    div,
    defaultDate,
    format = i18n_default.datePicker.dateFormat,
    checkbox = false,
    disabled = false,
    onSelect,
    onChange,
    minDate = /* @__PURE__ */ new Date(0),
    maxDate = /* @__PURE__ */ new Date("9999-12-31")
  }) {
    super({ contextElement: div });
    this.selectedDate = null;
    this.calendarDate = /* @__PURE__ */ new Date();
    if (defaultDate) {
      const defaultMoment = convertToMomentFromStrOrDate(defaultDate, format);
      if (defaultMoment.isValid()) {
        this.calendarDate = defaultMoment.toDate();
        this.selectedDate = defaultMoment.toDate();
      } else
        console.error(`invalid defaultDate format. it must follow ${format}`);
    }
    this.format = format;
    this.div = div;
    this.input = document.createElement("input");
    this.button = document.createElement("button");
    this.button.appendChild(createIconElement("ir-icon--calendar"));
    this.div.innerHTML = "";
    this.div.classList.add(input_classNames_default.input["&"]);
    this.input.setAttribute("type", "text");
    this.input.setAttribute("placeHolder", this.format);
    this.input.className = input_classNames_default.inputNative["&"];
    this.button.className = input_classNames_default.inputSuffix["&"];
    this.button.type = "button";
    this._minDate = minDate;
    this._maxDate = maxDate;
    if (onSelect)
      this.onSelect = onSelect;
    if (onChange)
      this.onChange = onChange;
    if (checkbox) {
      const divInputPrefix = document.createElement("div");
      const checkboxLabel = document.createElement("label");
      const inputCheckbox = document.createElement("input");
      inputCheckbox.setAttribute("type", "checkbox");
      divInputPrefix.classList.add(checkbox_classNames_default.checkbox["&"], input_classNames_default.inputPrefix["&"]);
      checkboxLabel.className = checkbox_classNames_default.checkboxWrapper["&"];
      inputCheckbox.className = checkbox_classNames_default.checkboxInput["&"];
      checkboxLabel.appendChild(inputCheckbox);
      divInputPrefix.appendChild(checkboxLabel);
      this.div.appendChild(divInputPrefix);
      inputCheckbox.checked = !disabled;
      inputCheckbox.onchange = () => this.disabled = !inputCheckbox.checked;
      this.addCoreElement(divInputPrefix);
    }
    this.disabled = disabled;
    this.div.appendChild(this.input);
    this.div.appendChild(this.button);
    this.addCoreElement(this.input);
    this.addCoreElement(this.button);
    if (this.selectedDate)
      this.input.value = (0, import_dayjs2.default)(this.selectedDate).format(format);
    this.button.addEventListener("click", () => {
      if (this.isVisible === false)
        this.show();
    });
    this.input.addEventListener("blur", () => {
      const dt = (0, import_dayjs2.default)(this.input.value, this.format, true);
      this.setDate(dt.isValid() ? dt.toDate() : null);
      if (this.date && (this.date < this.minDate || this.date > this.maxDate))
        this.setDate(null);
    });
    this.handler = createDatePickerHandler({
      uuid: this.uuid,
      refElement: this.div,
      minDate: this._minDate,
      maxDate: this._maxDate,
      onClick: (dt) => {
        this.setDate(dt);
        this.onSelect(dt);
        this.hide();
      }
    });
  }
  get textValue() {
    return this.input.value;
  }
  get inputCheckbox() {
    return this.div.querySelector(".checkbox__input");
  }
  get date() {
    return this.selectedDate;
  }
  get isVisible() {
    return this.handler.visible;
  }
  get disabled() {
    return this.input.hasAttribute("disabled");
  }
  get minDate() {
    return this._minDate;
  }
  get maxDate() {
    return this._maxDate;
  }
  set minDate(value) {
    this._minDate = value;
  }
  set maxDate(value) {
    this._maxDate = value;
  }
  set disabled(flag) {
    if (flag) {
      this.input.setAttribute("disabled", "");
      this.button.setAttribute("disabled", "");
    } else {
      this.input.removeAttribute("disabled");
      this.button.removeAttribute("disabled");
    }
    if (this.inputCheckbox)
      this.inputCheckbox.checked = !flag;
  }
  setDate(date) {
    if (date) {
      this.selectedDate = new Date(date);
      this.calendarDate = new Date(date);
      this.input.value = (0, import_dayjs2.default)(date).format(this.format);
      this.updateCalendar();
    } else {
      this.selectedDate = null;
      this.input.value = "";
    }
    if (this.latestValue !== this.input.value)
      this.onChange(this.input.value);
    this.latestValue = this.input.value;
  }
  show() {
    if (this.isVisible)
      return;
    this.handler.update(this.calendarDate, this.selectedDate);
    this.handler.show();
  }
  hide() {
    if (this.isVisible)
      this.handler.hide();
  }
  /* Object Events */
  onSelect(_date) {
  }
  onChange(_value) {
  }
  updateCalendar() {
    this.handler.update(this.calendarDate, this.selectedDate);
  }
};

// src/js-components/confirm/confirm.ts
var import_xss = __toESM(require_lib());

// src/js-components/confirm/confirm.classNames.ts
var block5 = "confirm";
var confirm_classNames_default = {
  confirm: {
    "&": block5
  },
  confirmIcon: {
    "&": `${block5}__icon`
  },
  confirmContent: {
    "&": `${block5}__content`
  },
  confirmActions: {
    "&": `${block5}__actions`
  },
  confirmButtonClose: {
    "&": `${block5}__button-close`
  }
};

// src/components/button/button.classNames.ts
var block6 = "button";
var button_classNames_default = {
  button: {
    "&": block6,
    primary: `${block6}--primary`,
    secondary: `${block6}--secondary`,
    tertiary: `${block6}--tertiary`,
    transparent: `${block6}--transparent`
  },
  buttonIcon: {
    "&": `${block6}__icon-prefix`
  }
};

// src/components/dialog/dialog.classNames.ts
var block7 = "dialog";
var dialog_classNames_default = {
  dialog: {
    "&": block7,
    transparent: `${block7}--transparent`,
    "is-visible": "is-visible"
  },
  dialogWrapper: {
    "&": `${block7}__wrapper`
  },
  dialogHeader: {
    "&": `${block7}__header`
  },
  dialogHeaderTitle: {
    "&": `${block7}__header-title`
  },
  dialogHeaderActions: {
    "&": `${block7}__header-actions`
  },
  dialogContent: {
    "&": `${block7}__content`
  },
  dialogFooter: {
    "&": `${block7}__footer`
  },
  dialogFooterLeft: {
    "&": `${block7}__footer-left`
  },
  dialogFooterRight: {
    "&": `${block7}__footer-right`
  },
  dialogButtonClose: {
    "&": `${block7}__button-close`
  }
};

// src/js-components/confirm/confirm.elements.ts
var ConfirmButtonTypeList = ["yes", "no", "ok", "cancel", "retry", "ignore", "stop"];
var dialog = document.createElement("div");
var dialogWrapper = document.createElement("div");
var dialogContent = document.createElement("div");
var confirm = document.createElement("div");
var confirmContent = document.createElement("div");
var confirmIcon = document.createElement("i");
var confirmActions = document.createElement("div");
var buttonMap = {
  cancel: document.createElement("button"),
  ignore: document.createElement("button"),
  no: document.createElement("button"),
  ok: document.createElement("button"),
  retry: document.createElement("button"),
  stop: document.createElement("button"),
  yes: document.createElement("button")
};
var closeIcon = document.createElement("i");
var closeButton = document.createElement("button");
dialog.tabIndex = -1;
dialog.classList.add(dialog_classNames_default.dialog["&"], z_index_classNames_default.zIndex.message);
dialogWrapper.className = dialog_classNames_default.dialogWrapper["&"];
dialogContent.className = dialog_classNames_default.dialogContent["&"];
confirm.className = confirm_classNames_default.confirm["&"];
confirmContent.className = confirm_classNames_default.confirmContent["&"];
confirmActions.className = confirm_classNames_default.confirmActions["&"];
Object.values(buttonMap).forEach((e) => e.classList.add(button_classNames_default.button["&"]));
buttonMap.yes.classList.add(button_classNames_default.button.primary);
buttonMap.ok.classList.add(button_classNames_default.button.primary);
buttonMap.retry.classList.add(button_classNames_default.button.secondary);
buttonMap.ignore.classList.add(button_classNames_default.button.tertiary);
closeIcon.classList.add("ir-icon", "ir-icon--close");
closeButton.className = confirm_classNames_default.confirmButtonClose["&"];
confirmActions.appendChild(buttonMap.no);
confirmActions.appendChild(buttonMap.stop);
confirmActions.appendChild(buttonMap.ignore);
confirmActions.appendChild(buttonMap.retry);
confirmActions.appendChild(buttonMap.yes);
confirmActions.appendChild(buttonMap.ok);
closeButton.appendChild(closeIcon);
confirm.appendChild(closeButton);
confirm.appendChild(confirmIcon);
confirm.appendChild(confirmContent);
confirm.appendChild(confirmActions);
dialogContent.appendChild(confirm);
dialogWrapper.appendChild(dialogContent);
dialog.appendChild(dialogWrapper);
layer_default.message.append(dialog);
var elements = {
  dialog,
  confirmIcon,
  confirmContent,
  confirmActions,
  buttonMap,
  closeButton
};

// src/js-components/confirm/confirm.ts
var confirmTypeClass = {
  error: "ir-icon--cancel-circle-fill ir-icon--danger",
  info: "ir-icon--information-circle-fill ir-icon--info",
  question: "ir-icon--question ir-icon--info",
  warning: "ir-icon--error ir-icon--warning"
};
var XSS_ALLOW_ATTR_LIST = /* @__PURE__ */ new Set([
  "class",
  "style",
  "title",
  "id"
]);
var XSS_FILTER_OPTION = {
  onTagAttr(tag, name, value, isWhiteAttr) {
    if (!isWhiteAttr && XSS_ALLOW_ATTR_LIST.has(name))
      return `${name}="${(0, import_xss.escapeAttrValue)(value)}"`;
  }
};
var confirmContext = {
  count: 0
};
var hasDisplayedConfirm = () => confirmContext.count > 0;
var IRConfirm = class {
  constructor({ iconType = "info", buttonType = ["ok"], messageHTML, msgMap = {}, onClick, escButton, enterButton }) {
    this.activeElement = null;
    this.visible = false;
    this.iconType = iconType;
    this.buttonType = buttonType;
    this.messageHTML = xss_default(messageHTML, XSS_FILTER_OPTION);
    this.msgMap = {
      ...msgMap
    };
    this.enterButton = enterButton;
    this.escButton = escButton;
    this.escController = createESCHideController(this);
    if (onClick)
      this.onClick = onClick;
  }
  show() {
    if (confirmContext.count > 0)
      return;
    confirmContext.count++;
    this.visible = true;
    this.activeElement = document.activeElement;
    elements.confirmContent.innerHTML = this.messageHTML;
    elements.confirmIcon.className = `${confirm_classNames_default.confirmIcon["&"]} ir-icon ${confirmTypeClass[this.iconType] || ""}`;
    elements.closeButton.onclick = () => this.hide();
    for (const key of ConfirmButtonTypeList) {
      elements.buttonMap[key].remove();
      elements.buttonMap[key].innerText = this.msgMap[key] ?? i18n_default.confirm[key];
      elements.buttonMap[key].onclick = () => {
        this.hide();
        this.onClick(key);
      };
    }
    for (const key of this.buttonType)
      elements.confirmActions.appendChild(elements.buttonMap[key]);
    if (!elements.dialog.isConnected)
      document.body.appendChild(elements.dialog);
    elements.dialog.classList.add(dialog_classNames_default.dialog["is-visible"]);
    elements.dialog.focus();
    elements.dialog.addEventListener("transitionend", () => {
      this.enterHandler = () => {
        if (this.enterButton)
          elements.buttonMap[this.enterButton].click();
        else if (this.buttonType.length === 1)
          elements.buttonMap[this.buttonType[0]].click();
        else
          this.hide();
      };
      registerGlobalKeyListener("Enter", this.enterHandler);
    }, { once: true });
    this.escController.create();
  }
  onESC() {
    if (this.escButton)
      elements.buttonMap[this.escButton].click();
  }
  hide() {
    if (this.visible === false)
      return;
    this.escController.destroy();
    confirmContext.count--;
    if (this.activeElement)
      this.activeElement.focus();
    this.visible = false;
    elements.dialog.classList.remove(dialog_classNames_default.dialog["is-visible"]);
    this.enterHandler && unregisterGlobalKeyListener("Enter", this.enterHandler);
  }
  onClick(_btnType) {
  }
};

// src/js-components/timePicker/timePicker.ts
var import_dayjs4 = __toESM(require_dayjs_min());

// src/js-components/timePicker/timePicker.handler.ts
var import_dayjs3 = __toESM(require_dayjs_min());

// src/js-components/timePicker/timePicker.classNames.ts
var block8 = "time-picker";
var timePicker_classNames_default = {
  timePicker: {
    "&": block8,
    "is-visible": "is-visible"
  },
  timePickerPanelWrapper: {
    "&": `${block8}__panel-wrapper`
  },
  timePickerButtonPanel: {
    "&": `${block8}__button-panel`
  },
  timePickerPanel: {
    "&": `${block8}__panel`
  },
  timePickerPanelItem: {
    "&": `${block8}__panel-item`
  },
  timePickerDivider: {
    "&": `${block8}__divider`
  }
};

// src/js-components/timePicker/timePicker.elements.ts
var import_lodash3 = __toESM(require_lodash());

// src/js-components/timePicker/utils.ts
function isValidPattern(value, isSeconds) {
  const formatValue = isSeconds ? value : value + ":00";
  if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(formatValue)) {
    const { hour, minute, second } = parseTime(formatValue);
    if (hour < 0 || hour >= 24)
      return false;
    else if (minute < 0 || minute >= 60)
      return false;
    else if (isSeconds && second < 0 || second >= 60)
      return false;
    else
      return true;
  } else {
    return false;
  }
}
function parseTime(value) {
  const [hour, minute, second] = value.split(":");
  return {
    hour: parseInt(hour),
    minute: parseInt(minute),
    second: parseInt(second)
  };
}
function formatTime(hour, minute, second) {
  return [
    hour.toString().padStart(2, "0"),
    minute.toString().padStart(2, "0"),
    second.toString().padStart(2, "0")
  ].join(":");
}

// src/js-components/timePicker/timePicker.elements.ts
var HOURS = 12;
var MINUTES = 60;
var SECONDS = 60;
var timePicker = document.createElement("div");
var panelWrapper = document.createElement("div");
var buttonPanel = document.createElement("div");
var panelType = ["period", "hour", "minute", "second"];
var panelList = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];
var [periodPanel, hourPanel, minutePanel, secondPanel] = panelList;
timePicker.classList.add(timePicker_classNames_default.timePicker["&"], z_index_classNames_default.zIndex.popover);
import_lodash3.default.range(panelType.length).forEach((id) => {
  panelList[id].setAttribute("data-type", panelType[id]);
  panelList[id].className = timePicker_classNames_default.timePickerPanel["&"];
  panelWrapper.appendChild(panelList[id]);
});
panelWrapper.className = timePicker_classNames_default.timePickerPanelWrapper["&"];
buttonPanel.className = timePicker_classNames_default.timePickerButtonPanel["&"];
var nowButton = document.createElement("button");
nowButton.classList.add("button");
nowButton.type = "button";
buttonPanel.appendChild(nowButton);
timePicker.appendChild(panelWrapper);
timePicker.appendChild(buttonPanel);
function createPanelItem(text) {
  const panelItem = document.createElement("div");
  panelItem.className = timePicker_classNames_default.timePickerPanelItem["&"];
  panelItem.dataset["text"] = text;
  panelItem.innerText = text;
  return panelItem;
}
import_lodash3.default.range(2).forEach(() => panelList[0].appendChild(createPanelItem("")));
import_lodash3.default.range(HOURS).forEach((hour) => panelList[1].appendChild(createPanelItem(`${hour}`)));
import_lodash3.default.range(MINUTES).forEach((minute) => panelList[2].appendChild(createPanelItem(`${minute}`)));
import_lodash3.default.range(SECONDS).forEach((second) => panelList[3].appendChild(createPanelItem(`${second}`)));
function updateI18n2() {
  nowButton.innerHTML = "";
  nowButton.appendChild(createIconElement("ir-icon--check"));
  nowButton.append(i18n_default.timePicker.btnNow);
  panelList[0].children[0].innerHTML = "";
  panelList[0].children[1].innerHTML = "";
  panelList[0].children[0].append(i18n_default.timePicker.am);
  panelList[0].children[1].append(i18n_default.timePicker.pm);
}
function removeSelected() {
  timePicker.querySelectorAll(".is-selected").forEach((e) => e.classList.remove("is-selected"));
}
function getTimeElements(hour, minute, second) {
  const isAM2 = hour < HOURS;
  const adjustedHour = isAM2 ? hour : hour - HOURS;
  const periodId = isAM2 ? 0 : 1;
  return {
    periodElement: periodPanel.children[periodId],
    hourElement: hourPanel.children[adjustedHour],
    minuteElement: minutePanel.children[minute],
    secondElement: secondPanel.children[second]
  };
}
function scrollIntoView(hour, minute, second) {
  const { hourElement, minuteElement, secondElement } = getTimeElements(hour, minute, second);
  hourPanel.scrollTop = hourElement.offsetTop - hourPanel.clientHeight / 2;
  minutePanel.scrollTop = minuteElement.offsetTop - minutePanel.clientHeight / 2;
  secondPanel.scrollTop = secondElement.offsetTop - secondPanel.clientHeight / 2;
}
function selectTime(hour, minute, second) {
  const { periodElement, hourElement, minuteElement, secondElement } = getTimeElements(hour, minute, second);
  removeSelected();
  periodElement.classList.add("is-selected");
  hourElement.classList.add("is-selected");
  minuteElement.classList.add("is-selected");
  secondElement.classList.add("is-selected");
}
function isAM() {
  return periodPanel.children[0].classList.contains("is-selected");
}
function setPeriod(periodId) {
  periodPanel.children[(periodId + 1) % 2].classList.remove("is-selected");
  periodPanel.children[periodId].classList.add("is-selected");
}
function setHourId(hourId) {
  var _a;
  (_a = hourPanel.querySelector(".is-selected")) == null ? void 0 : _a.classList.remove("is-selected");
  hourPanel.children[hourId].classList.add("is-selected");
}
function setMinuteId(minuteId) {
  var _a;
  (_a = minutePanel.querySelector(".is-selected")) == null ? void 0 : _a.classList.remove("is-selected");
  minutePanel.children[minuteId].classList.add("is-selected");
}
function setSecondId(secondId) {
  var _a;
  (_a = secondPanel.querySelector(".is-selected")) == null ? void 0 : _a.classList.remove("is-selected");
  secondPanel.children[secondId].classList.add("is-selected");
}
function* periodGenerator() {
  yield [0, periodPanel.children[0]];
  yield [1, periodPanel.children[1]];
}
function getSelectedValueOnPanel(panel) {
  const selected = panel.querySelector(".is-selected");
  if (selected instanceof HTMLElement)
    return parseInt(selected.innerText || "0", 10);
  return 0;
}
function getCurrentTime() {
  return formatTime(
    getSelectedValueOnPanel(hourPanel) + (isAM() ? 0 : HOURS),
    getSelectedValueOnPanel(minutePanel),
    getSelectedValueOnPanel(secondPanel)
  );
}
function* hourGenerator() {
  let id = 0;
  for (const e of hourPanel.children)
    yield [id++, e];
}
function* minuteGenerator() {
  let id = 0;
  for (const e of minutePanel.children)
    yield [id++, e];
}
function* secondGenerator() {
  let id = 0;
  for (const e of secondPanel.children)
    yield [id++, e];
}
var timePicker_elements_default = {
  timePicker,
  nowButton,
  secondPanel
};

// src/js-components/timePicker/timePicker.handler.ts
function createIRTimePickerHandler({ uuid, refElement, onChange, visibleSeconds }) {
  let visible = false;
  let floatingCleanup = () => void 0;
  const handler = {
    setTime(value) {
      const formatValue = visibleSeconds ? value : value + ":00";
      const { hour, minute, second } = parseTime(formatValue);
      selectTime(hour, minute, second);
      scrollIntoView(hour, minute, second);
    },
    show: () => {
      if (visible)
        return;
      updateI18n2();
      visible = true;
      escController.create();
      outsideHandler.create();
      timePicker_elements_default.nowButton.onclick = (ev) => {
        const value = (0, import_dayjs3.default)().format("HH:mm:ss");
        handler.setTime(value);
        onChange(ev, value);
      };
      for (const [id, element] of periodGenerator())
        element.onclick = (ev) => {
          setPeriod(id);
          onChange(ev, getCurrentTime());
        };
      for (const [id, element] of hourGenerator())
        element.onclick = (ev) => {
          setHourId(id);
          onChange(ev, getCurrentTime());
        };
      for (const [id, element] of minuteGenerator())
        element.onclick = (ev) => {
          setMinuteId(id);
          onChange(ev, getCurrentTime());
        };
      if (visibleSeconds) {
        for (const [id, element] of secondGenerator())
          element.onclick = (ev) => {
            setSecondId(id);
            onChange(ev, getCurrentTime());
          };
        timePicker_elements_default.secondPanel.style.removeProperty("display");
      } else
        timePicker_elements_default.secondPanel.style.setProperty("display", "none");
      if (!timePicker_elements_default.timePicker.isConnected)
        layer_default.popover.appendChild(timePicker_elements_default.timePicker);
      timePicker_elements_default.timePicker.style.removeProperty("display");
      timePicker_elements_default.timePicker.setAttribute("data-uuid", uuid);
      setTimeout(() => {
        timePicker_elements_default.timePicker.classList.add(timePicker_classNames_default.timePicker["is-visible"]);
        floatingCleanup();
        floatingCleanup = offsetBottomAutoUpdate(refElement, timePicker_elements_default.timePicker);
      }, 0);
    },
    hide: () => {
      if (!visible)
        return;
      escController.destroy();
      outsideHandler.destroy();
      timePicker_elements_default.timePicker.classList.remove(timePicker_classNames_default.timePicker["is-visible"]);
      timePicker_elements_default.timePicker.addEventListener("transitionend", (ev) => {
        if (ev.currentTarget !== ev.target)
          return;
        visible = false;
        if (uuid === timePicker_elements_default.timePicker.getAttribute("data-uuid")) {
          floatingCleanup();
          timePicker_elements_default.timePicker.remove();
        }
      }, { once: true });
    },
    onESC: () => handler.hide(),
    get visible() {
      return visible;
    }
  };
  const escController = createESCHideController(handler);
  const outsideHandler = createClickOutsideHandler({
    eventElements: [timePicker_elements_default.timePicker],
    clickOutsideFunc: () => handler.hide()
  });
  return handler;
}

// src/js-components/timePicker/timePicker.ts
var IRTimePicker = class extends IRComponent {
  constructor(args) {
    super(args);
    const { visibleSeconds = false } = args;
    const formatTime2 = visibleSeconds ? "HH:mm:ss" : "HH:mm";
    this.contextElement.className = input_classNames_default.input["&"];
    this.input = document.createElement("input");
    this.input.placeholder = formatTime2;
    this.input.className = input_classNames_default.inputNative["&"];
    this.button = document.createElement("button");
    this.button.appendChild(createIconElement("ir-icon--watch"));
    this.button.className = input_classNames_default.inputSuffix["&"];
    this.latestValue = args.value || "";
    this.button.onclick = () => this.toggle();
    this.timePickerHandler = createIRTimePickerHandler({
      uuid: this.uuid,
      refElement: this.contextElement,
      visibleSeconds,
      onChange: (_4, value) => {
        const formatValue = (0, import_dayjs4.default)(value, "HH:mm:ss", true).format(formatTime2);
        this.value = formatValue;
        this.onChange(formatValue);
      }
    });
    if (args.checkbox) {
      const divInputPrefix = document.createElement("div");
      const checkboxLabel = document.createElement("label");
      const inputCheckbox = document.createElement("input");
      inputCheckbox.setAttribute("type", "checkbox");
      divInputPrefix.classList.add(checkbox_classNames_default.checkbox["&"], input_classNames_default.inputPrefix["&"]);
      checkboxLabel.className = checkbox_classNames_default.checkboxWrapper["&"];
      inputCheckbox.className = checkbox_classNames_default.checkboxInput["&"];
      checkboxLabel.appendChild(inputCheckbox);
      divInputPrefix.appendChild(checkboxLabel);
      this.contextElement.appendChild(divInputPrefix);
      inputCheckbox.checked = !args.disabled;
      inputCheckbox.onchange = () => this.disabled = !inputCheckbox.checked;
      this.addCoreElement(divInputPrefix);
    }
    this.contextElement.appendChild(this.input);
    this.contextElement.appendChild(this.button);
    this.addCoreElement(this.input);
    this.addCoreElement(this.button);
    this.disabled = args.disabled === true;
    if (args.onChange)
      this.onChange = args.onChange;
    if (args.value)
      this.value = (0, import_dayjs4.default)(args.value, formatTime2).format(formatTime2);
    this.input.onblur = () => {
      if (!isValidPattern(this.input.value, visibleSeconds))
        this.value = this.latestValue;
      else
        this.value = this.input.value;
    };
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
  set disabled(disabled) {
    this.input.disabled = disabled;
    this.button.disabled = disabled;
  }
  set value(value) {
    this._value = value;
    this.input.value = value || "";
    this.latestValue = this.input.value;
  }
  show() {
    this.timePickerHandler.show();
    this.timePickerHandler.setTime(this.value || "00:00:00");
  }
  hide() {
    this.timePickerHandler.hide();
  }
  toggle() {
    if (this.visible)
      this.hide();
    else
      this.show();
  }
  /*
   * Events
   */
  onChange(_value) {
  }
};

// src/js-components/ui-module/index.ts
var IRComponentModule = class {
  constructor() {
    this._fragment = null;
  }
  emit(ev) {
    this.uiFragment.dispatchEvent(ev);
  }
  on(event, callback) {
    this.uiFragment.addEventListener(event, callback);
  }
  off(event, callback) {
    this.uiFragment.removeEventListener(event, callback);
  }
  onCreated(fragment) {
    console.debug("::IRComponentModule.Created::", fragment);
  }
  querySelector(selector) {
    return this.uiFragment.querySelector(selector);
  }
  querySelectorAll(selector) {
    return this.uiFragment.querySelectorAll(selector);
  }
  create() {
    return this.uiFragment;
  }
  createUIFragment() {
    const template = document.createElement("template");
    template.innerHTML = this.template;
    this._fragment = template.content;
    this.onCreated(template.content);
    return template.content;
  }
  get isCreated() {
    return this._fragment !== null;
  }
  get template() {
    throw new Error("Not implemented!");
  }
  get uiFragment() {
    if (!this._fragment)
      return this.createUIFragment();
    return this._fragment;
  }
};

// src/js-components/command-manager/command-block.ts
var IRCommandBlock = class {
  constructor(label, ...commands) {
    this._label = label;
    this._commands = commands;
  }
  pushCommand(command) {
    this._commands.push(command);
  }
  execute() {
    const executedCommandList = [];
    try {
      let id = 0;
      while (id < this._commands.length) {
        const command = this._commands[id];
        if (!command.canExecute) {
          console.error(command);
          throw new Error("Can't execute this command");
        }
        command.execute();
        executedCommandList.push(command);
        ++id;
      }
    } catch (e) {
      console.error("execute error!", e);
      executedCommandList.reverse().forEach((cmd) => cmd.undo());
      return false;
    }
    return true;
  }
  undo() {
    const undoCommandList = [];
    try {
      let id = this._commands.length - 1;
      while (id >= 0) {
        const command = this._commands[id];
        if (!command.canUndo) {
          console.error(command);
          throw new Error("Can't undo this command");
        }
        command.undo();
        undoCommandList.push(command);
        --id;
      }
    } catch (e) {
      console.error("undo error!", e);
      undoCommandList.forEach((cmd) => cmd.execute());
      return false;
    }
    return true;
  }
  get label() {
    return this._label;
  }
};

// src/js-components/command-manager/command-manager.ts
var DEFAULT_STACK_LENGTH = 1024;
var IRCommandManager = class {
  constructor({
    context,
    undoStackLength = DEFAULT_STACK_LENGTH,
    disabled = false
  }) {
    this._isPreventedUIRecording = true;
    this._undoCommandStack = [];
    this._redoCommandStack = [];
    this._stackLength = undoStackLength;
    this._disabled = disabled;
    this._context = context;
  }
  /**
   * IRGrid Undo / Redo를 위한 동작 블럭을 녹화함
   * @description 하나의 동기적인 흐름 안에서만 사용할 것
   */
  doRecording(label = "", recordBlock) {
    if (this.isDisabled)
      return recordBlock();
    if (this.isRecording)
      throw new Error("Already doing record!");
    try {
      this._currentRecordingBlock = new IRCommandBlock(label);
      recordBlock();
      this.pushCommandBlock(this._currentRecordingBlock);
      return this._currentRecordingBlock;
    } catch (e) {
      console.error("Got an error during recording!");
      console.error(e);
    } finally {
      this._currentRecordingBlock = void 0;
    }
  }
  undo() {
    const popCommandBlock = this._undoCommandStack.pop();
    if (!popCommandBlock)
      return;
    if (popCommandBlock.undo()) {
      this._redoCommandStack.push(popCommandBlock);
      this._context.onUndo(popCommandBlock);
    }
  }
  redo() {
    const popCommandBlock = this._redoCommandStack.pop();
    if (!popCommandBlock)
      return;
    if (popCommandBlock.execute()) {
      this._undoCommandStack.push(popCommandBlock);
      this._context.onRedo(popCommandBlock);
    }
  }
  pushCommandBlock(commandBlock) {
    if (this.isDisabled)
      return;
    if (this._undoCommandStack.length >= this._stackLength)
      this._undoCommandStack.shift();
    this._undoCommandStack.push(commandBlock);
    this._redoCommandStack = [];
  }
  pushCommand(command) {
    if (!this._currentRecordingBlock)
      throw new Error("Not recording!");
    this._currentRecordingBlock.pushCommand(command);
  }
  clearCommands() {
    this._undoCommandStack = [];
    this._redoCommandStack = [];
  }
  pauseUIRecording() {
    this._isPreventedUIRecording = false;
  }
  startUIRecording() {
    this._isPreventedUIRecording = true;
  }
  get canRecord() {
    return !this.isDisabled && this.isRecording && !this.isPreventedUIRecording;
  }
  get isRecording() {
    return this._currentRecordingBlock !== void 0;
  }
  get isPreventedUIRecording() {
    return this._isPreventedUIRecording;
  }
  get isDisabled() {
    return this._disabled;
  }
  get stackLength() {
    return this._stackLength;
  }
  set stackLength(value) {
    this._stackLength = value;
  }
  set isDisabled(value) {
    this._disabled = value;
  }
};

export {
  IRPageControl,
  checkbox_classNames_default,
  renderDefaultTreeNode,
  renderCheckboxTreeNode,
  IRTree,
  setTreeDragDropReorder,
  select_classNames_default,
  createDropdownDiv,
  createDropdownItem,
  IRSelect,
  createDatePickerHandler,
  input_classNames_default,
  IRDatePicker,
  button_classNames_default,
  hasDisplayedConfirm,
  IRConfirm,
  IRTimePicker,
  IRComponentModule,
  IRCommandBlock,
  IRCommandManager
};
//# sourceMappingURL=chunk-5ZXDNNQJ.js.map
