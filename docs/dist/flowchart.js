import {
  IRComponent,
  Logger,
  __async,
  __spreadProps,
  __spreadValues,
  __toESM,
  require_lodash
} from "./chunks/chunk-IKJP23QCjs.js";

// ../../node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _6 = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _6 || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _6[t] = [];
  }
  return new Dispatch(_6);
}
function Dispatch(_6) {
  this._ = _6;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _6 = this._, T = parseTypenames(typename + "", _6), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get(_6[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _6[t] = set(_6[t], typename.name, callback);
      else if (callback == null)
        for (t in _6)
          _6[t] = set(_6[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _6 = this._;
    for (var t in _6)
      copy[t] = _6[t].slice();
    return new Dispatch(copy);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i = 0, n = type2.length, c; i < n; ++i) {
    if ((c = type2[i]).name === name) {
      return c.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type2.push({ name, value: callback });
  return type2;
}
var dispatch_default = dispatch;

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/array.js
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function")
    select = arrayAll(select);
  else
    select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/constant.js
function constant_default(x) {
  return function() {
    return x;
  };
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant_default(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/merge.js
function merge_default(context2) {
  var selection2 = context2.selection ? context2.selection() : context2;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default2(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        yield node;
    }
  }
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent)
    event = sourceEvent;
  return event;
}

// ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0)
    node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/noevent.js
var nonpassive = { passive: false };
var nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/constant.js
var constant_default2 = (x) => () => x;

// ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/event.js
function DragEvent(type2, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x,
  y,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter2 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d))
      return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture)
      return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d))
      return;
    var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container2, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer_default(touch || event, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null)
      return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type2, event2, touch2) {
      var p0 = p, n;
      switch (type2) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer_default(touch2 || event2, container2), n = active;
          break;
      }
      dispatch2.call(
        type2,
        that,
        new DragEvent(type2, {
          sourceEvent: event2,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch2
        }),
        d
      );
    };
  }
  drag.filter = function(_6) {
    return arguments.length ? (filter2 = typeof _6 === "function" ? _6 : constant_default2(!!_6), drag) : filter2;
  };
  drag.container = function(_6) {
    return arguments.length ? (container = typeof _6 === "function" ? _6 : constant_default2(_6), drag) : container;
  };
  drag.subject = function(_6) {
    return arguments.length ? (subject = typeof _6 === "function" ? _6 : constant_default2(_6), drag) : subject;
  };
  drag.touchable = function(_6) {
    return arguments.length ? (touchable = typeof _6 === "function" ? _6 : constant_default2(!!_6), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_6) {
    return arguments.length ? (clickDistance2 = (_6 = +_6) * _6, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}

// ../../node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// ../../node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0)
    h = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s = NaN;
  else if (s <= 0)
    h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s = max2 - min2, l = (max2 + min2) / 2;
  if (s) {
    if (r === max2)
      h = (g - b) / s + (g < b) * 6;
    else if (g === max2)
      h = (b - r) / s + 2;
    else
      h = (r - g) / s + 4;
    s /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/constant.js
var constant_default3 = (x) => () => x;

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant_default3(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default3(isNaN(a) ? b : a);
}

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d)
    c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d))
    c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null)
    return identity;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_6) {
    var _1 = Math.max(1e-3, +_6), _22 = _1 * _1, _42 = _22 * _22;
    return zoomRho(_1, _22, _42);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// ../../node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time)
        time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame)
    return;
  if (timeout)
    timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity)
      timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// ../../node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index,
    group,
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED)
    throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2]))
    throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed)
      start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name)
        continue;
      if (o.state === STARTED)
        return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING)
      return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2)
    delete node.__transition;
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
  var c;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function")
      throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0)
      resolve();
  });
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// ../../node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// ../../node_modules/.pnpm/d3-brush@3.0.0/node_modules/d3-brush/src/brush.js
var { abs, max, min } = Math;
function number1(e) {
  return [+e[0], +e[1]];
}
function number2(e) {
  return [number1(e[0]), number1(e[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) {
    return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) {
    return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number2(xy);
  },
  output: function(xy) {
    return xy;
  }
};
function type(t) {
  return { type: t };
}

// ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/constant.js
var constant_default5 = (x) => () => x;

// ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/event.js
function ZoomEvent(type2, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}

// ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom)
    if (!(node = node.parentNode))
      return identity2;
  return node.__zoom;
}

// ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/noevent.js
function nopropagation3(event) {
  event.stopImmediatePropagation();
}
function noevent_default3(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js
function defaultFilter2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter2 = defaultFilter2, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x, y, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x, y, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x = p0[0] - p1[0] * transform2.k, y = p0[1] - p1[1] * transform2.k;
    return x === transform2.x && y === transform2.y ? transform2 : new Transform(transform2.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1)
          t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event)
        this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse")
        this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch")
        this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch")
        this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type2) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type2,
        this.that,
        new ZoomEvent(type2, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type: type2,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k)
      return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default3(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments))
      return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation3(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved(event2) {
      noevent_default3(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent_default3(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent_default3(event);
    if (duration > 0)
      select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
    else
      select_default2(this).call(zoom.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation3(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0)
        g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2])
        g.touch1 = p, g.taps = 0;
    }
    if (touchstarting)
      touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2)
        touchfirst = p[0], touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming)
      return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default3(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier)
        g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0)
      p = g.touch0[0], l = g.touch0[1];
    else
      return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming)
      return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation3(event);
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier)
        delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        delete g.touch1;
    }
    if (g.touch1 && !g.touch0)
      g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0)
      g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p)
            p.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_6) {
    return arguments.length ? (wheelDelta = typeof _6 === "function" ? _6 : constant_default5(+_6), zoom) : wheelDelta;
  };
  zoom.filter = function(_6) {
    return arguments.length ? (filter2 = typeof _6 === "function" ? _6 : constant_default5(!!_6), zoom) : filter2;
  };
  zoom.touchable = function(_6) {
    return arguments.length ? (touchable = typeof _6 === "function" ? _6 : constant_default5(!!_6), zoom) : touchable;
  };
  zoom.extent = function(_6) {
    return arguments.length ? (extent = typeof _6 === "function" ? _6 : constant_default5([[+_6[0][0], +_6[0][1]], [+_6[1][0], +_6[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_6) {
    return arguments.length ? (scaleExtent[0] = +_6[0], scaleExtent[1] = +_6[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_6) {
    return arguments.length ? (translateExtent[0][0] = +_6[0][0], translateExtent[1][0] = +_6[1][0], translateExtent[0][1] = +_6[0][1], translateExtent[1][1] = +_6[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_6) {
    return arguments.length ? (constrain = _6, zoom) : constrain;
  };
  zoom.duration = function(_6) {
    return arguments.length ? (duration = +_6, zoom) : duration;
  };
  zoom.interpolate = function(_6) {
    return arguments.length ? (interpolate = _6, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_6) {
    return arguments.length ? (clickDistance2 = (_6 = +_6) * _6, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_6) {
    return arguments.length ? (tapDistance = +_6, zoom) : tapDistance;
  };
  return zoom;
}

// src/js-components/flowchart/flowchart.js
var import_lodash = __toESM(require_lodash());

// src/js-components/flowchart/util/container-interface.ts
var InterfaceInstance = class {
  constructor(api) {
    Object.assign(this, api);
  }
};

// src/js-components/flowchart/action/command/base.js
var BaseCommand = class {
  constructor(command, icontainer) {
    this.command = command;
    this.icontainer = icontainer;
  }
  undo() {
    return this;
  }
  redo() {
    return this;
  }
};

// src/js-components/flowchart/action/command/add.js
var AddCommand = class extends BaseCommand {
  constructor(objDataList, icontainer) {
    super("add", icontainer);
    this.objDataList = objDataList;
  }
  undo() {
    this.objDataList.forEach((data) => this.icontainer.removeObject(data.id));
    return super.undo();
  }
  redo() {
    this.objDataList.forEach((data) => this.icontainer.addRenderObj(data));
    return super.redo();
  }
};

// src/js-components/flowchart/action/command/delete.js
var DeleteCommand = class extends AddCommand {
  constructor(objDataList, icontainer) {
    super(objDataList, icontainer);
    this.command = "delete";
  }
  undo() {
    return super.redo();
  }
  redo() {
    return super.undo();
  }
};

// src/js-components/flowchart/util/functions.ts
var _ = __toESM(require_lodash());

// src/js-components/flowchart/data/style-data.ts
var DEFAULT_STYLE_DATA = {
  id: "",
  temp: false,
  type: "",
  render: "",
  text: "",
  editable: true,
  foreColor: "black",
  fontSize: 16,
  fontFamily: "Noto Sans KR",
  textDecoration: "none",
  visibleOverText: true,
  opacity: 1,
  cursor: "move",
  borderColor: "black",
  borderWidth: 1,
  borderDash: 0,
  isSelected: false,
  isMonitoring: true,
  isHovered: false,
  tooltipText: "",
  tooltipFontSize: 12,
  tooltipForeColor: "black",
  tooltipFontFamily: "Noto Sans KR",
  tooltipFill: "white",
  tooltipMaxWidth: 380,
  tooltipBorderColor: "#bbb",
  tooltipBorderWidth: 1,
  tooltipBorderDash: 0,
  tooltipPadding: 10,
  tooltipTextDecoration: "none",
  tooltipVisible: true,
  "borderWidth.selected": 2,
  "borderColor.selected": "blue"
};

// src/js-components/flowchart/data/connection.ts
var DEFAULT_CONNECTION_STYLE_DATA = __spreadProps(__spreadValues({}, DEFAULT_STYLE_DATA), {
  "connection.points": [],
  "connection.sourceObjId": null,
  "connection.sourcePos": null,
  "connection.destinationObjId": null,
  "connection.destinationPos": null,
  "connection.width": 200,
  "connection.arrowFill": "black",
  "connection.arrowSize": 10,
  "connection.textBorderColor": "black",
  "connection.textBorderWidth": 1,
  "connection.textBorderDash": 0,
  "connection.textBorderFill": "white",
  "connection.connectorFill": "black",
  "connection.connectorSize": 3,
  "connection.adjusterSize": 7,
  "connection.adjusterFill": "black",
  "connection.arrowBorderColor": "black",
  "connection.arrowBorderWidth": 1
});

// src/js-components/flowchart/data/group.ts
var DEFAULT_GROUP_STYLE_DATA = __spreadProps(__spreadValues({}, DEFAULT_STYLE_DATA), {
  "group.margin": 20,
  "group.borderAlwaysAppearance": false
});

// src/js-components/flowchart/data/node.ts
var DEFAULT_NODE_STYLE_DATA = __spreadProps(__spreadValues({}, DEFAULT_STYLE_DATA), {
  "node.width": 120,
  "node.height": 60,
  "node.fill": "white",
  "node.x": 0,
  "node.y": 0,
  "node.connectorGap": 0,
  "node.connectorSize": 5,
  "node.resizerEnabled": true,
  "node.connectorEnabled": true,
  "node.commentTopLeft": "",
  "node.commentTopCenter": "",
  "node.commentTopRight": "",
  "node.commentBottomLeft": "",
  "node.commentBottomCenter": "",
  "node.commentBottomRight": "",
  "node.commentFontSize": 10,
  "node.commentForeColor": "black",
  "node.commentFontFamily": "Noto Sans KR"
});

// src/js-components/flowchart/util/text-metrics.ts
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
if (!context)
  throw new Error(`Can't init canvas context`);
var TEXT_ROW_SPACE = 2;
var TEXT_PADDING = 10;
var getTextMetrics = (text, style) => {
  context.font = `${style.fontSize}px ${style.fontFamily}`;
  const metrics = context.measureText(text);
  return {
    width: metrics.width,
    height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
  };
};
var getWrappedText = (style) => {
  const { text } = style;
  const lines = [];
  const buffer = [];
  for (const char of text) {
    if (char === "\r")
      continue;
    else if (char === "\n") {
      lines.push(buffer.join(""));
      buffer.length = 0;
      continue;
    }
    buffer.push(char);
    const text2 = buffer.join("");
    const size = getTextMetrics(text2, style);
    if (size.width >= style.width) {
      lines.push(text2);
      buffer.length = 0;
    }
  }
  if (buffer.length > 0)
    lines.push(buffer.join(""));
  return {
    length: lines.length,
    lineHeight: getTextMetrics("|", style).height,
    lines
  };
};
var getFittedSizeOnText = (data) => {
  const textLines = data.text.replace("\r", "").split("\n");
  let maxWidth = 0;
  let height = 0;
  textLines.forEach((text) => {
    const size = getTextMetrics(text, data);
    height += data.fontSize + TEXT_ROW_SPACE;
    maxWidth = Math.max(maxWidth, size.width);
  });
  return {
    width: maxWidth,
    height
  };
};
var getCroppedText = (data, height) => {
  const wrapperInfo = getWrappedText(data);
  const wrapHeight = wrapperInfo.lineHeight * wrapperInfo.length;
  if (height < wrapHeight) {
    const diff = Math.ceil((wrapHeight - height) / wrapperInfo.lineHeight);
    wrapperInfo.lines = wrapperInfo.lines.splice(0, wrapperInfo.length - diff);
    wrapperInfo.length = wrapperInfo.lines.length;
    wrapperInfo.lines[wrapperInfo.length - 1] += "...";
  }
  return wrapperInfo;
};

// src/js-components/flowchart/util/functions.ts
var TRANSLATE_REGEX = /translate\((-?[\d.]+),\s*?(-?[\d.]+)\)/;
var SCALE_REGEX = /scale\(([\d.]+),\s*?([\d.]+)\)/;
var POSITION_MAP = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3
};
var DEFAULT_CONNECTION_LENGTH = 45;
var TMP_STYLE_MAP = {
  node: __spreadValues({}, DEFAULT_NODE_STYLE_DATA),
  group: __spreadValues({}, DEFAULT_GROUP_STYLE_DATA),
  connection: __spreadValues({}, DEFAULT_CONNECTION_STYLE_DATA)
};
var getConnectedPositionId = (node, con) => {
  switch (node.id) {
    case con.sourceObjId:
      return POSITION_MAP[con.sourcePos];
    case con.destinationObjId:
      return POSITION_MAP[con.destinationPos];
    default:
      throw new Error(`It's not connected.`);
  }
};
var getPosition = (clsName) => {
  if (clsName.indexOf("left") !== -1)
    return "left";
  else if (clsName.indexOf("right") !== -1)
    return "right";
  else if (clsName.indexOf("top") !== -1)
    return "top";
  else if (clsName.indexOf("bottom") !== -1)
    return "bottom";
  throw new Error(`Invalid argument '${clsName}'`);
};
var getTransformData = (transform2) => {
  const translateExec = TRANSLATE_REGEX.exec(transform2);
  const scaleExec = SCALE_REGEX.exec(transform2);
  let translateX = 0;
  let translateY = 0;
  let scale = 1;
  if (translateExec) {
    translateX = parseFloat(translateExec[1]);
    translateY = parseFloat(translateExec[2]);
  }
  if (scaleExec) {
    scale = parseFloat(scaleExec[1]);
  }
  return {
    translateX,
    translateY,
    scale
  };
};
var setStyleValue = (data, key, value) => {
  if (data[key] === void 0)
    data[key] = value;
};
var defaultNodeRule = (data) => {
  setStyleValue(data, "cursor", "move");
  if (data.temp) {
    setStyleValue(data, "node.resizerEnabled", false);
    setStyleValue(data, "node.connectorEnabled", false);
  }
  switch (data.render) {
    case "start": {
      setStyleValue(data, "node.resizerEnabled", false);
      break;
    }
    case "comment": {
      setStyleValue(data, "node.connectorEnabled", false);
      break;
    }
    case "bridge": {
      setStyleValue(data, "editable", 20);
      setStyleValue(data, "node.width", 20);
      setStyleValue(data, "node.height", 20);
      setStyleValue(data, "node.resizerEnabled", false);
      break;
    }
    default:
      break;
  }
};
var defaultConnectionRule = (data) => {
  setStyleValue(data, "cursor", "pointer");
  if (data["connection.points"] === null || data["connection.points"] === void 0) {
    data["connection.points"] = [];
  }
  const points = data["connection.points"];
  for (let i = points.length; i < 2; i++) {
    points.push({ x: 0, y: 0 });
  }
};
var getDistance = (pos1, pos2) => {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
};
var combineStyle = (data, theme) => {
  const tmpStyle = TMP_STYLE_MAP[data.type];
  if (tmpStyle === void 0)
    throw new Error(`Unknown type '${data.type}'`);
  for (const key of Object.keys(tmpStyle)) {
    if (data[key] === void 0)
      data[key] = theme[key];
  }
  return data;
};
var defaultRule = (data) => {
  switch (data.type) {
    case "node": {
      defaultNodeRule(data);
      break;
    }
    case "connection": {
      defaultConnectionRule(data);
      break;
    }
    case "group": {
      setStyleValue(data, "borderDash.selected", 1);
      break;
    }
    default:
      break;
  }
};
var getDefaultConnection = (appendingObj) => {
  const data = __spreadValues({}, appendingObj.data);
  const firstPoint = appendingObj.firstPoint;
  switch (appendingObj.sourcePos) {
    case "top": {
      if (appendingObj.renderType === "direct") {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x,
            y: firstPoint.y - DEFAULT_CONNECTION_LENGTH
          }
        ];
      } else {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x + DEFAULT_CONNECTION_LENGTH,
            y: firstPoint.y - DEFAULT_CONNECTION_LENGTH
          }
        ];
      }
      break;
    }
    case "bottom": {
      if (appendingObj.renderType === "direct") {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x,
            y: firstPoint.y + DEFAULT_CONNECTION_LENGTH
          }
        ];
      } else {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x + DEFAULT_CONNECTION_LENGTH,
            y: firstPoint.y + DEFAULT_CONNECTION_LENGTH
          }
        ];
      }
      break;
    }
    case "left": {
      if (appendingObj.renderType === "direct") {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x - DEFAULT_CONNECTION_LENGTH,
            y: firstPoint.y
          }
        ];
      } else {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x - DEFAULT_CONNECTION_LENGTH,
            y: firstPoint.y + DEFAULT_CONNECTION_LENGTH
          }
        ];
      }
      break;
    }
    case "right": {
      if (appendingObj.renderType === "direct") {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x + DEFAULT_CONNECTION_LENGTH,
            y: firstPoint.y
          }
        ];
      } else {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x + DEFAULT_CONNECTION_LENGTH,
            y: firstPoint.y + DEFAULT_CONNECTION_LENGTH
          }
        ];
      }
      break;
    }
    default:
      if (appendingObj.renderType === "direct") {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x + DEFAULT_CONNECTION_LENGTH,
            y: firstPoint.y + DEFAULT_CONNECTION_LENGTH
          }
        ];
      } else {
        data["connection.points"] = [
          firstPoint,
          {
            x: firstPoint.x + DEFAULT_CONNECTION_LENGTH / 2,
            y: firstPoint.y + DEFAULT_CONNECTION_LENGTH / 2
          },
          {
            x: firstPoint.x + DEFAULT_CONNECTION_LENGTH,
            y: firstPoint.y + DEFAULT_CONNECTION_LENGTH
          }
        ];
      }
      break;
  }
  return data;
};
var cloneObjDataList = (objList) => {
  const dataList = [];
  objList.forEach((obj) => {
    dataList.push(_.cloneDeep(obj.data));
  });
  return dataList;
};
var deepCopy = (data) => {
  return _.cloneDeep(data);
};
var getMovePropIterator = function* (objData) {
  switch (objData.type) {
    case "node":
      yield {
        key: "node.x",
        value: objData["node.x"]
      };
      yield {
        key: "node.y",
        value: objData["node.y"]
      };
      break;
    case "connection":
      yield {
        key: "connection.sourceObjId",
        value: objData["connection.sourceObjId"]
      };
      yield {
        key: "connection.sourcePos",
        value: objData["connection.sourcePos"]
      };
      yield {
        key: "connection.destinationObjId",
        value: objData["connection.destinationObjId"]
      };
      yield {
        key: "connection.destinationPos",
        value: objData["connection.destinationPos"]
      };
      yield {
        key: "connection.points",
        value: deepCopy(objData["connection.points"])
      };
      break;
    case "group":
      break;
    default:
      throw new Error(`Unknow type '${objData.type}'`);
  }
};
function updateTextStyle(textObj, x, y, style) {
  textObj.attr("x", x).attr("y", y).attr("fill", style.foreColor).attr("font-family", style.fontFamily).attr("font-size", style.fontSize).attr("text-decoration", style.textDecoration);
}
function createTextLines(textObj, textLines, x, y, style) {
  updateTextStyle(textObj, x, y, style);
  textLines.lines.forEach((line, id2) => {
    const tspan = textObj.append("tspan").attr("x", x).attr("dx", 0).attr("dy", id2 === 0 ? 0 : style.fontSize + TEXT_ROW_SPACE).text(line);
    if (line.trim() === "") {
      tspan.attr("opacity", "0").attr("fill-opacity", "0").text(".");
    }
  });
}
var removeText = (textObj, cache) => {
  textObj.selectAll("tspan").remove();
  cache.clear();
};
var createLogger = (id2) => {
  return new Logger(id2);
};

// src/js-components/flowchart/action/command/edit.js
var SIZE_PROP_LIST = ["node.width", "node.height"];
var ChangedInfo = class {
  constructor(objData, propList) {
    this.objData = objData;
    this.propList = propList || [];
  }
  addMoveOldValues() {
    for (const prop of getMovePropIterator(this.objData)) {
      this.propList.push({
        key: prop.key,
        oldValue: prop.value
      });
    }
  }
  addSizeOldValues() {
    for (const key of SIZE_PROP_LIST) {
      this.propList.push({
        key,
        oldValue: this.objData[key],
        newValue: this.objData[key]
      });
    }
  }
  updateSizeNewValues() {
    for (const key of SIZE_PROP_LIST) {
      const find2 = this.propList.filter((x) => x.key === key)[0];
      find2.newValue = this.objData[key];
    }
  }
  updateMoveNewValues() {
    for (const prop of getMovePropIterator(this.objData)) {
      const find2 = this.propList.filter((x) => x.key === prop.key)[0];
      find2.newValue = prop.value;
    }
  }
};
var EditCommand = class extends BaseCommand {
  constructor(changeInfoList, icontainer) {
    super("edit", icontainer);
    this.changeInfoList = changeInfoList;
  }
  _setValue(prop) {
    this.changeInfoList.forEach((info) => {
      const obj = this.icontainer.getObjectOrNull(info.objData.id);
      if (obj !== null) {
        obj.editProp(() => {
          for (const propData of info.propList) {
            obj.data[propData.key] = propData[prop];
          }
        });
      }
    });
  }
  undo() {
    this._setValue("oldValue");
    return super.undo();
  }
  redo() {
    this._setValue("newValue");
    return super.redo();
  }
};

// src/js-components/flowchart/util/observe.ts
var ObserverArg = class {
  constructor(renderObj, key, newValue, oldValue) {
    this.renderObj = renderObj;
    this.key = key;
    this.newValue = newValue;
    this.oldValue = oldValue;
  }
};

// src/js-components/flowchart/obj/base.ts
var RenderObject = class {
  constructor(data, renderer, containerInterface) {
    this._clickedSeq = 0;
    this.data = data;
    this.renderer = renderer;
    this.containerInterface = containerInterface;
  }
  get onEditing() {
    return this.renderer.objects.foreignObj !== null;
  }
  get clickedSeq() {
    return this._clickedSeq;
  }
  get tooltipText() {
    return this.getDataOrNull("tooltipText");
  }
  get g() {
    return this.renderer.group;
  }
  get isSelected() {
    return this.data.isSelected;
  }
  get type() {
    return this.data.type;
  }
  get renderType() {
    return this.data.render;
  }
  get tooltipVisible() {
    return this.getDataOrNull("tooltip.visible");
  }
  get canShowTooltip() {
    return this.getDataOrNull("tooltipText") && this.getDataOrNull("tooltipVisible");
  }
  get id() {
    return this.data.id;
  }
  get startX() {
    throw new Error("Not Implemented!");
  }
  get startY() {
    throw new Error("Not Implemented!");
  }
  get isTempObj() {
    return this.data.temp || false;
  }
  get zIndex() {
    let zId = 0;
    let prev = this.renderer.group.node().previousSibling;
    while (prev !== null) {
      prev = prev.previousSibling;
      ++zId;
    }
    return zId;
  }
  get centerX() {
    return (this.x + this.endX) / 2;
  }
  get centerY() {
    return (this.y + this.endY) / 2;
  }
  get x() {
    throw new Error("Not Implemented!");
  }
  get y() {
    throw new Error("Not Implemented!");
  }
  get endX() {
    throw new Error("Not Implemented!");
  }
  get endY() {
    throw new Error("Not Implemented!");
  }
  get width() {
    throw new Error("Not Implemented!");
  }
  get height() {
    throw new Error("Not Implemented!");
  }
  get textDecoration() {
    return this.getDataOrNull("textDecoration");
  }
  get isHovered() {
    return this.data.isHovered;
  }
  set id(value) {
    this.data.id = value;
  }
  set x(value) {
    throw new Error("Not Implemented!");
  }
  set y(value) {
    throw new Error("Not Implemented!");
  }
  set width(value) {
    throw new Error("Not Implemented!");
  }
  set height(value) {
    throw new Error("Not Implemented!");
  }
  set textDecoration(value) {
    this.data.textDecoration = value;
  }
  set isHovered(value) {
    this.data.isHovered = value;
  }
  set clickedSeq(value) {
    this._clickedSeq = value;
  }
  set zIndex(id2) {
    const container = this.renderer.container.node();
    const g = this.renderer.group.node();
    if (!container || !g)
      throw new Error("container or graphic element is null");
    if (id2 === null || id2 === void 0 || id2 >= container.children.length)
      container.appendChild(g);
    else
      container.insertBefore(g, container.children[id2]);
  }
  observeProperties() {
    Object.keys(this.data).forEach((key) => {
      let value = this.data[key];
      Object.defineProperty(this.data, key, {
        enumerable: true,
        get: () => value,
        set: (newValue) => {
          const oldValue = value;
          value = newValue;
          if (this.data.isMonitoring) {
            this.containerInterface.observerCallback(new ObserverArg(this, key, newValue, oldValue));
            this.render();
          }
        }
      });
    });
  }
  changeRender(render, renderer) {
    this.data.render = render;
    this.destroy();
    this.renderer = renderer;
    this.create();
  }
  create() {
    this.renderer.create();
    this.observeProperties();
  }
  destroy() {
    this.renderer.destroy();
  }
  render() {
    this.renderer.render();
    this.containerInterface.renderCallback(this);
  }
  moveTo(x, y) {
    this.editProp(() => {
      this.x += x;
      this.y += y;
    });
  }
  select(userInteraction = false, typeClick = "") {
    if (this.data.isSelected === false) {
      this.data.isSelected = true;
      this.containerInterface.selectCallback(this, userInteraction, typeClick);
    }
  }
  release(userInteraction = false) {
    if (this.data.isSelected) {
      this.data.isSelected = false;
      this.containerInterface.releaseCallback(this, userInteraction);
    }
  }
  editLabel() {
    this.renderer.editLabelMode();
  }
  getDataOrNull(key) {
    return this.renderer.dataWrapper.get(key) || null;
  }
  editProp(func) {
    try {
      this.data.isMonitoring = false;
      func();
    } finally {
      this.data.isMonitoring = true;
    }
  }
};

// src/js-components/flowchart/action/command/render.js
var RenderCommand = class extends BaseCommand {
  constructor(renderObj, oldRender, newRender, icontainer) {
    super("render", icontainer);
    this.renderObj = renderObj;
    this.oldRender = oldRender;
    this.newRender = newRender;
  }
  undo() {
    this.icontainer.changeObjRender(this.renderObj, this.oldRender);
    return super.undo();
  }
  redo() {
    this.icontainer.changeObjRender(this.renderObj, this.newRender);
    return super.redo();
  }
};

// src/js-components/flowchart/action/command/zindex.js
var _2 = __toESM(require_lodash());
var ZIndexCommand = class extends BaseCommand {
  constructor(dataList, icontainer) {
    super("front", icontainer);
    this.dataList = dataList;
  }
  _setZId(prop, reverse) {
    const func = (data) => {
      const obj = this.icontainer.getObjectOrNull(data.objId);
      if (obj === null) {
        this.icontainer.getLogger().error(
          "ZIndexCommand._setZId()",
          `Could not find obj id '${data.objId}'`
        );
        return;
      }
      obj.zIndex = data[prop];
    };
    if (reverse) {
      _2.forEach(this.dataList, func);
    } else {
      _2.forEachRight(this.dataList, func);
    }
  }
  undo() {
    this._setZId("oldValue", false);
    return super.undo();
  }
  redo() {
    this._setZId("newValue", true);
    return super.redo();
  }
};

// src/js-components/flowchart/action/controller.js
var ActionController = class {
  constructor(limit) {
    this.actionLimit = limit;
    this.undoStackList = [];
    this.redoStackList = [];
  }
  addAction(...commands) {
    if (this.undoStackList.length === this.actionLimit) {
      this.undoStackList.splice(0, 1);
    }
    this.undoStackList.push(commands);
    this.redoStackList.splice(0, this.redoStackList.length);
  }
  clear() {
    this.undoStackList.splice(0, this.undoStackList.length);
    this.redoStackList.splice(0, this.redoStackList.length);
  }
  popLastUndoAction() {
    return this.undoStackList.pop();
  }
  undo() {
    if (this.undoStackList.length === 0) {
      return null;
    }
    const topActionOnUndo = this.undoStackList.pop();
    topActionOnUndo.forEach((undo) => undo.undo());
    this.redoStackList.push(topActionOnUndo.reverse());
    return topActionOnUndo;
  }
  redo() {
    if (this.redoStackList.length === 0) {
      return null;
    }
    const topActionOnRedo = this.redoStackList.pop();
    topActionOnRedo.forEach((undo) => undo.redo());
    this.undoStackList.push(topActionOnRedo.reverse());
    return topActionOnRedo;
  }
};

// src/js-components/flowchart/action/movehandler.js
var _3 = __toESM(require_lodash());

// src/js-components/flowchart/util/objmng.ts
var objMngLogger = new Logger("Flowchart::ObjectManager");
var ObjectManager = class {
  constructor() {
    this.objMap = {
      node: /* @__PURE__ */ new Map(),
      connection: /* @__PURE__ */ new Map(),
      group: /* @__PURE__ */ new Map()
    };
  }
  getMap(type2) {
    const map = this.objMap[type2];
    if (map === void 0) {
      objMngLogger.error("ObjectManager.getMap()", `Unknown '${type2}' type`);
      throw new Error(`Unknown '${type2}' type`);
    }
    return map;
  }
  getObjCount() {
    return this.objMap.node.size + this.objMap.connection.size + this.objMap.group.size;
  }
  add(obj) {
    const map = this.getMap(obj.type);
    if (map.has(obj.id)) {
      throw new Error(`Already has objId '${obj.id}'`);
    }
    map.set(obj.id, obj);
  }
  remove(obj) {
    const map = this.getMap(obj.type);
    if (map.has(obj.id)) {
      map.delete(obj.id);
    }
  }
  *getMapIterator() {
    yield* Object.values(this.objMap);
  }
  getNodeIterator() {
    return this.objMap.node.values();
  }
  getConnectionIterator() {
    return this.objMap.connection.values();
  }
  getGroupIterator() {
    return this.objMap.group.values();
  }
  findOrNull(objId) {
    for (const map of this.getMapIterator()) {
      if (map.has(objId))
        return map.get(objId);
    }
    return null;
  }
  clear() {
    Object.values(this.objMap).forEach((map) => map.clear());
  }
  *getAllObjIterator() {
    for (const map of Object.values(this.objMap))
      yield* map.values();
  }
  *getSelectedObjIterator() {
    for (const obj of this.getAllObjIterator()) {
      if (obj.isSelected)
        yield obj;
    }
  }
  getParentGroupOrNull(obj) {
    for (const group of this.getGroupIterator()) {
      if (group.hasObjId(obj.id)) {
        return group;
      }
    }
    return null;
  }
  *getConnectedConnections(nodeId) {
    for (const con of this.getConnectionIterator()) {
      if (!con.isTempObj && (con.sourceObjId === nodeId || con.destinationObjId === nodeId)) {
        yield con;
      }
    }
  }
  reassignId(obj, oldId, newId2) {
    const map = this.getMap(obj.type);
    map.delete(oldId);
    map.set(newId2, obj);
  }
};

// src/js-components/flowchart/action/movehandler.js
var MoveHandler = class {
  constructor(actionController, objectManager, icontainer) {
    this.actionController = actionController;
    this.objectManager = objectManager;
    this.icontainer = icontainer;
    this.movedInfo = [];
  }
  moveStartHandler() {
    this.icontainer.getLogger().debug("MoveHandler.moveStartHandler()", "start");
    this.movedInfo = [];
    for (const obj of this.objectManager.getSelectedObjIterator()) {
      const info = new ChangedInfo(obj.data);
      info.addMoveOldValues();
      this.movedInfo.push(info);
    }
  }
  moveEndHandler() {
    this.icontainer.getLogger().debug("MoveHandler.moveEndHandler()", "end");
    this.movedInfo.forEach((x) => x.updateMoveNewValues());
    const tmp = this.movedInfo.filter((info) => info.propList.some((x) => _3.isEqual(x.oldValue, x.newValue) === false));
    if (tmp.length > 0) {
      this.actionController.addAction(new EditCommand(this.movedInfo, this.icontainer));
    }
  }
};

// src/js-components/flowchart/action/resizehandler.js
var _4 = __toESM(require_lodash());

// src/js-components/flowchart/data/wrapper.ts
var FIXED_KEYS = /* @__PURE__ */ new Set([
  "id",
  "type",
  "render",
  "text",
  "editable",
  "isSelected",
  "isMonitoring",
  "isHovered",
  "node.width",
  "node.height",
  "node.x",
  "node.y",
  "node.connectorEnabled",
  "node.resizerEnabled",
  "connection.points",
  "connection.sourceObjId",
  "connection.sourcePos",
  "connection.destinationObjId",
  "connection.destinationPos",
  "group.borderAlwaysAppearance",
  "group.margin"
]);
var StyleDataWrapper = class {
  constructor(data) {
    this.data = data;
  }
  get(key) {
    var _a;
    if (FIXED_KEYS.has(key))
      return this.data[key];
    return (_a = this.data[`${key}${this._getPostFix()}`]) != null ? _a : this.data[key];
  }
  _getPostFix() {
    if (this.data.isSelected)
      return ".selected";
    if (this.data.isHovered)
      return ".hovered";
    return "";
  }
};

// src/js-components/flowchart/util/text-cache.ts
var CacheData = class {
  constructor() {
    this.text = "";
    this.length = 0;
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
  }
};
var TextCache = class extends CacheData {
  compareTo(data) {
    return this.text === data.text && this.length === data.length && this.width === data.width && this.height === data.height && this.x === data.x && this.y === data.y;
  }
  update(data) {
    this.text = data.text;
    this.length = data.length;
    this.width = data.width;
    this.height = data.height;
    this.x = data.x;
    this.y = data.y;
  }
  clear() {
    this.text = "";
    this.length = 0;
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
  }
};

// src/js-components/flowchart/render/base.ts
var BaseRenderer = class {
  constructor(data, className, containerInterface) {
    this.data = data;
    this.className = className;
    this.containerInterface = containerInterface;
    this.textCache = new TextCache();
    this.dataWrapper = new StyleDataWrapper(data);
    this.container = containerInterface.getSvg().select(".container");
    this.group = this.container.append("g").attr("class", `${data.type} ${className}`);
    this.objects = {
      foreignObj: null,
      textarea: null,
      text: this.group.append("text").attr("class", "unselectable text--whitespace-pre").attr("text-anchor", "middle")
    };
  }
  get width() {
    throw new Error("Not implemented!");
  }
  get height() {
    throw new Error("Not implemented!");
  }
  get subUiVisibility() {
    return this.data.isSelected && this.containerInterface.getReadOnly() === false ? "visible" : "hidden";
  }
  get isHovered() {
    return this.data.isHovered;
  }
  _getLabelRect() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  _repositionTextarea() {
    if (!this.objects.foreignObj || !this.objects.textarea)
      throw new Error("foreignObj, textarea is null!");
    const rect = this._getLabelRect();
    this.objects.foreignObj.attr("x", rect.x).attr("y", rect.y).attr("width", rect.width).attr("height", rect.height);
    this.objects.textarea.style("width", `${rect.width - 22}px`).style("height", `${rect.height}px`).style("border", "1px solid var(--border-color)").style("background-color", "transparent");
  }
  removeLabelEdit() {
    if (this.objects.foreignObj) {
      this.objects.text.attr("visibility", "visible");
      this.objects.textarea = null;
      this.objects.foreignObj.remove();
      this.objects.foreignObj = null;
      this.containerInterface.setEditMode(false);
    }
  }
  cancelLabelEdit(oldText) {
    this.removeLabelEdit();
    this.data.text = oldText;
  }
  editLabelMode() {
    if (!this.data.editable || this.objects.foreignObj || this.data.render === "bridge") {
      return;
    }
    const oldText = this.data.text;
    this.group.classed("edit", true);
    this.containerInterface.setEditMode(true);
    this.objects.text.attr("visibility", "hidden");
    this.objects.foreignObj = this.group.append("foreignObject");
    this.objects.textarea = this.objects.foreignObj.append("xhtml:div").style("overflow", "auto").append("textarea").style("resize", "none").style("text-align", "center").style("border", "none").style("font-family", this.data.fontFamily).style("font-size", `${this.data.fontSize}px`).on("keyup", (ev) => {
      if (ev.key === "Escape") {
        this.cancelLabelEdit(oldText);
        this.containerInterface.getSvg().node().parentElement.focus();
      } else {
        this.data.text = this.objects.textarea.node().value;
        this._repositionTextarea();
      }
    }).on("focusout", () => {
      if (this.objects.textarea) {
        this.data.text = this.objects.textarea.node().value;
        this.containerInterface.editTextCallback(this.data, oldText, this.data.text);
        this.removeLabelEdit();
      }
      this.group.classed("edit", false);
      this.render();
    });
    this._repositionTextarea();
    this.objects.textarea.node().value = this.data.text || "";
    this.objects.textarea.node().focus();
    this.containerInterface.editTextModeCallback(this.data);
  }
  bringToFrontElement(element) {
    this.group.node().appendChild(element);
  }
  create() {
    this._create();
    this.bringToFrontElement(this.objects.text.node());
    this.render();
  }
  _create() {
    throw new Error("Not implemented method!");
  }
  render() {
    this._render();
    this.group.attr("cursor", this.dataWrapper.get("cursor"));
    this.group.attr("opacity", this.dataWrapper.get("opacity"));
  }
  _render() {
    throw new Error("Not implemented method!");
  }
  _getLabelXY(_info) {
    throw new Error("Not implemented!");
  }
  _createText(x = 0, y = 0) {
    const style = {
      width: this.width - TEXT_PADDING,
      text: this.dataWrapper.get("text"),
      fontFamily: this.dataWrapper.get("fontFamily"),
      fontSize: this.dataWrapper.get("fontSize"),
      foreColor: this.dataWrapper.get("foreColor"),
      textDecoration: this.dataWrapper.get("textDecoration")
    };
    const visibleOverText = this.dataWrapper.get("visibleOverText");
    const wrappedInfo = visibleOverText ? getWrappedText(style) : getCroppedText(style, this.height - TEXT_PADDING);
    const labelXY = this._getLabelXY(wrappedInfo);
    const data = {
      text: style.text,
      width: this.width,
      height: this.height,
      length: wrappedInfo.lines.length,
      x: labelXY.x,
      y: labelXY.y,
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      foreColor: style.foreColor,
      textDecoration: style.textDecoration
    };
    if (this.textCache.compareTo(data)) {
      updateTextStyle(
        this.objects.text,
        labelXY.x + x,
        labelXY.y + y,
        style
      );
      return;
    }
    removeText(this.objects.text, this.textCache);
    createTextLines(
      this.objects.text,
      wrappedInfo,
      labelXY.x + x,
      labelXY.y + y,
      style
    );
    this.textCache.update(data);
  }
  destroy() {
    this.group.remove();
  }
};

// src/js-components/flowchart/render/node.js
var RESIZER_SIZE = 6;
var COMMENT_MARGIN = 5;
var COMMENTS_POS = [
  ["TopLeft", "start"],
  ["TopCenter", "middle"],
  ["TopRight", "end"],
  ["BottomLeft", "start"],
  ["BottomCenter", "middle"],
  ["BottomRight", "end"]
];
var NodeRenderer = class extends BaseRenderer {
  constructor(data, className, icontainer) {
    super(data, className, icontainer);
    this.svg = this.containerInterface.getSvg();
    this.connectors = [];
    this.resizers = [];
    this.comments = [];
  }
  get width() {
    return this.data["node.width"];
  }
  get height() {
    return this.data["node.height"];
  }
  get connectorVisibility() {
    return this.data["node.connectorEnabled"] && this.containerInterface.isAppending();
  }
  get resizerVisibility() {
    return this.data["node.resizerEnabled"] === true && this.data.isSelected;
  }
  _createComments() {
    COMMENTS_POS.forEach((pos) => {
      const [key, textAlign] = pos;
      this.comments.push(this.group.append("text").attr("class", `${key} unselectable`).attr("text-anchor", textAlign));
    });
  }
  _createResizer() {
    const g = this.group;
    for (const pos of this.getResizerPosition()) {
      const resizer = g.append("rect").attr("x", pos[0] - RESIZER_SIZE / 2).attr("y", pos[1] - RESIZER_SIZE / 2).attr("width", RESIZER_SIZE).attr("height", RESIZER_SIZE).attr("fill", "rgb(173, 216, 230)").attr("stroke", "rgb(30, 144, 255)").attr("cursor", pos[2]).attr("class", "resizer").attr("visibility", "hidden");
      this.resizers.push(resizer);
    }
  }
  _createConnector() {
    const g = this.group;
    for (const pos of this.getConnectorPosition()) {
      const connector = g.append("circle").attr("cx", pos.x).attr("cy", pos.y).attr("r", this.dataWrapper.get("node.connectorSize")).attr("class", `connector ${pos.dir}`);
      this.connectors.push(connector);
    }
  }
  _renderComments() {
    const wrapper = this.dataWrapper;
    const fontFamily = wrapper.get("node.commentFontFamily");
    const fontSize = wrapper.get("node.commentFontSize");
    const halfWidth = this.width / 2;
    const halfHeight = this.height / 2;
    const topY = -(halfHeight + COMMENT_MARGIN);
    const bottomY = halfHeight + COMMENT_MARGIN + fontSize;
    const xyMap = {
      TopLeft: {
        x: -halfWidth,
        y: topY
      },
      TopCenter: {
        x: 0,
        y: topY
      },
      TopRight: {
        x: halfWidth,
        y: topY
      },
      BottomLeft: {
        x: -halfWidth,
        y: bottomY
      },
      BottomCenter: {
        x: 0,
        y: bottomY
      },
      BottomRight: {
        x: halfWidth,
        y: bottomY
      }
    };
    COMMENTS_POS.forEach((pos, id2) => {
      const xy = xyMap[pos[0]];
      this.comments[id2].attr("x", xy.x).attr("y", xy.y).attr("font-family", fontFamily).attr("font-size", fontSize).text(() => this.dataWrapper.get(`node.comment${pos[0]}`));
    });
  }
  _renderConnector() {
    let index = 0;
    for (const pos of this.getConnectorPosition()) {
      if (this.isHovered && this.connectorVisibility && this.containerInterface.getReadOnly() === false) {
        this.bringToFrontElement(this.connectors[index].node());
        this.connectors[index++].attr("cx", pos.x).attr("cy", pos.y).attr("visibility", "visible").attr("r", this.dataWrapper.get("node.connectorSize")).classed("active", true);
      } else {
        this.connectors[index++].classed("active", false).attr(
          "visibility",
          this.connectorVisibility && this.containerInterface.getReadOnly() === false ? "visible" : "hidden"
        );
      }
    }
  }
  _renderResizer() {
    if (this.resizers.length === 0)
      return;
    let index = 0;
    for (const pos of this.getResizerPosition()) {
      if (this.isHovered && this.resizerVisibility && this.containerInterface.getReadOnly() === false) {
        this.bringToFrontElement(this.resizers[index].node());
        this.resizers[index++].attr("x", pos[0] - RESIZER_SIZE / 2).attr("y", pos[1] - RESIZER_SIZE / 2).attr("class", "resizer").attr("visibility", "visible").classed("active", true);
      } else {
        this.resizers[index++].classed("active", false).attr(
          "visibility",
          this.resizerVisibility && this.containerInterface.getReadOnly() === false ? "visible" : "hidden"
        );
      }
    }
  }
  *getConnectorPosition() {
    const gap = this.dataWrapper.get("node.connectorGap");
    const halfWidth = this.width / 2;
    const halfHeight = this.height / 2;
    yield { x: -(gap + halfWidth), y: 0, dir: "left" };
    yield { x: halfWidth + gap, y: 0, dir: "right" };
    yield { x: 0, y: -(gap + halfHeight), dir: "top" };
    yield { x: 0, y: gap + halfHeight, dir: "bottom" };
  }
  *getResizerPosition() {
    const halfWidth = this.width / 2;
    const halfHeight = this.height / 2;
    yield [-halfWidth, -halfHeight, "nw-resize"];
    yield [0, -halfHeight, "n-resize"];
    yield [halfWidth, -halfHeight, "ne-resize"];
    yield [-halfWidth, 0, "w-resize"];
    yield [halfWidth, 0, "e-resize"];
    yield [-halfWidth, halfHeight, "sw-resize"];
    yield [0, halfHeight, "s-resize"];
    yield [halfWidth, halfHeight, "se-resize"];
  }
  _create() {
    this._createComments();
    this._createResizer();
    this._createConnector();
  }
  _getLabelXY(info) {
    const fontSize = this.dataWrapper.get("fontSize");
    return {
      x: 0,
      y: fontSize - (fontSize + TEXT_ROW_SPACE) * info.length / 2
    };
  }
  _getLabelRect() {
    const width = this.width;
    const height = this.height;
    return {
      x: -(width / 2),
      y: -(height / 2),
      width: width + 20,
      height
    };
  }
  render() {
    const x = this.data["node.x"] + this.data["node.width"] / 2;
    const y = this.data["node.y"] + this.data["node.height"] / 2;
    this.group.attr("transform", `translate(${x}, ${y})`);
    super.render();
    this._renderComments();
    this._renderResizer();
    this._renderConnector();
  }
};

// src/js-components/flowchart/obj/node.js
var MINIMUM_WIDTH = 30;
var MINIMUM_HEIGHT = 30;
var COMMENT_POS = /* @__PURE__ */ new Set([
  "TopLeft",
  "TopCenter",
  "TopRight",
  "BottomLeft",
  "BottomCenter",
  "BottomRight"
]);
var Node = class extends RenderObject {
  constructor(data, renderer, containerInterface) {
    super(data, renderer, containerInterface);
    this.renderer = renderer;
  }
  get startX() {
    return this.x;
  }
  get startY() {
    return this.y;
  }
  get resizerEnabled() {
    return this.data["node.resizerEnabled"] === true;
  }
  get isConnectorEnabled() {
    return this.data["node.connectorEnabled"] === true;
  }
  get centerX() {
    return this.x + this.width / 2;
  }
  get centerY() {
    return this.y + this.height / 2;
  }
  get x() {
    return this.data["node.x"];
  }
  get y() {
    return this.data["node.y"];
  }
  get width() {
    return this.data["node.width"];
  }
  get height() {
    return this.data["node.height"];
  }
  get endX() {
    return this.x + this.width;
  }
  get endY() {
    return this.y + this.height;
  }
  set x(value) {
    this.data["node.x"] = value;
  }
  set y(value) {
    this.data["node.y"] = value;
  }
  set width(value) {
    this.data["node.width"] = value;
  }
  set height(value) {
    this.data["node.height"] = value;
  }
  create() {
    super.create();
  }
  getPositionXY(pos) {
    switch (pos) {
      case "left":
        return {
          x: this.x,
          y: this.y + this.height / 2
        };
      case "right":
        return {
          x: this.x + this.width,
          y: this.y + this.height / 2
        };
      case "top":
        return {
          x: this.x + this.width / 2,
          y: this.y
        };
      case "bottom":
        return {
          x: this.x + this.width / 2,
          y: this.y + this.height
        };
      default:
        throw new Error(`Invalid argument '${pos}'`);
    }
  }
  fitSizeOnText() {
    const size = getFittedSizeOnText(this.data);
    const padding = TEXT_PADDING * 2;
    this.width = size.width + padding;
    this.height = size.height + padding;
  }
  resizeToNorth(dy) {
    const sourceY = -(this.height / 2);
    const diffY = parseInt(sourceY - dy);
    if (this.height + diffY >= MINIMUM_HEIGHT) {
      this.y -= diffY / 2;
      this.height = this.height + diffY / 2;
    } else {
      this.y += this.height - MINIMUM_HEIGHT;
      this.height = MINIMUM_HEIGHT;
    }
  }
  resizeToWest(dx) {
    const sourceX = -(this.width / 2);
    const diffX = parseInt(sourceX - dx);
    if (this.width + diffX >= MINIMUM_WIDTH) {
      this.x -= diffX / 2;
      this.width = this.width + diffX / 2;
    } else {
      this.x += this.width - MINIMUM_WIDTH;
      this.width = MINIMUM_WIDTH;
    }
  }
  addComment(text, position, event) {
    if (!COMMENT_POS.has(position)) {
      throw new Error(`Unknown position value '${position}' Please call with 'TopLeft' or 'TopCenter' or 'TopRight' or 'BottomLeft' or 'BottomCenter' or 'BottomRight'`);
    }
    let key = `node.comment${position}`;
    if (event) {
      key += `.${event}`;
    }
    this.data[key] = text;
  }
  resizeToEast(dx) {
    this.width = Math.max(MINIMUM_WIDTH, parseInt(dx + this.width / 2));
  }
  resizeToSouth(dy) {
    this.height = Math.max(MINIMUM_HEIGHT, parseInt(dy + this.height / 2));
  }
};

// src/js-components/flowchart/action/resizehandler.js
var ResizeHandler = class {
  constructor(actionController, objectManager, icontainer) {
    this.actionController = actionController;
    this.objectManager = objectManager;
    this.icontainer = icontainer;
    this.resizeInfo = [];
  }
  resizeCallback(objId, cursor, diffWidth, diffHeight) {
    for (const node of this.objectManager.getNodeIterator()) {
      if (node.isSelected && node.id != objId && node.resizerEnabled) {
        const centerY = node.height / 2;
        const centerX = node.width / 2;
        switch (cursor) {
          case "n-resize":
            node.resizeToNorth(-(centerY + diffHeight));
            break;
          case "nw-resize":
            node.resizeToNorth(-(centerY + diffHeight));
            node.resizeToWest(-(centerX + diffWidth));
            break;
          case "ne-resize":
            node.resizeToNorth(-(centerY + diffHeight));
            node.resizeToEast(centerX + diffWidth);
            break;
          case "w-resize":
            node.resizeToWest(-(centerX + diffWidth));
            break;
          case "e-resize":
            node.resizeToEast(centerX + diffWidth);
            break;
          case "s-resize":
            node.resizeToSouth(centerY + diffHeight);
            break;
          case "sw-resize":
            node.resizeToSouth(centerY + diffHeight);
            node.resizeToWest(-(centerX + diffWidth));
            break;
          case "se-resize":
            node.resizeToSouth(centerY + diffHeight);
            node.resizeToEast(centerX + diffWidth);
            break;
          default:
            throw new Error(`Unknown cursor type '${cursor}'`);
        }
      }
    }
    for (const group of this.objectManager.getGroupIterator()) {
      group.isSelected && group.render();
    }
  }
  resizeDragStart() {
    this.icontainer.getLogger().debug("ResizeHandler.resizeDragStart()", "start");
    this.resizeInfo = [];
    for (const node of this.objectManager.getNodeIterator()) {
      if (node.isSelected) {
        const info = new ChangedInfo(node.data);
        info.addSizeOldValues();
        this.resizeInfo.push(info);
      }
    }
  }
  resizeDragEnd() {
    this.icontainer.getLogger().debug("ResizeHandler.resizeDragEnd()", "end");
    this.resizeInfo.forEach((info) => info.updateSizeNewValues());
    const tmp = this.resizeInfo.filter((info) => info.propList.some((x) => _4.isEqual(x.oldValue, x.newValue) === false));
    if (tmp.length > 0) {
      this.actionController.addAction(new EditCommand(this.resizeInfo, this.icontainer));
    }
  }
  addDragActionOnResizer(node) {
    node.renderer.resizers.forEach((resizer) => {
      const cursor = resizer.attr("cursor");
      resizer.call(drag_default().filter(() => this.icontainer.getReadOnly() === false).on("start", () => {
        this.resizeDragStart();
        this.icontainer.initDrag("drag-node-resize");
      }).on("drag", (ev) => {
        const dx = ev.x;
        const dy = ev.y;
        const curWidth = node.width;
        const curHeight = node.height;
        switch (cursor) {
          case "nw-resize":
            node.resizeToNorth(dy);
            node.resizeToWest(dx);
            break;
          case "n-resize":
            node.resizeToNorth(dy);
            break;
          case "ne-resize":
            node.resizeToNorth(dy);
            node.resizeToEast(dx);
            break;
          case "w-resize":
            node.resizeToWest(dx);
            break;
          case "e-resize":
            node.resizeToEast(dx);
            break;
          case "sw-resize":
            node.resizeToSouth(dy);
            node.resizeToWest(dx);
            break;
          case "s-resize":
            node.resizeToSouth(dy);
            break;
          case "se-resize":
            node.resizeToSouth(dy);
            node.resizeToEast(dx);
            break;
          default:
            throw new Error(`Unknown cursor type '${cursor}'`);
        }
        const diffWidth = node.width - curWidth;
        const diffHeight = node.height - curHeight;
        this.resizeCallback(node.id, cursor, diffWidth, diffHeight);
      }).on("end", () => {
        this.resizeDragEnd();
        this.icontainer.terminateDrag("drag-node-resize");
      }));
    });
  }
};

// src/js-components/flowchart/obj/connection.js
var Connection = class extends RenderObject {
  get points() {
    return this.data["connection.points"];
  }
  get endX() {
    return this.points.reduce((a, b) => Math.max(a, b.x), 0);
  }
  get endY() {
    return this.points.reduce((a, b) => Math.max(a, b.y), 0);
  }
  get sourceObjId() {
    return this.data["connection.sourceObjId"] || null;
  }
  get sourceObj() {
    return this.containerInterface.getObjectOrNull(this.data["connection.sourceObjId"]);
  }
  get destinationObj() {
    return this.containerInterface.getObjectOrNull(this.data["connection.destinationObjId"]);
  }
  get destinationObjId() {
    return this.data["connection.destinationObjId"] || null;
  }
  get sourcePos() {
    return this.data["connection.sourcePos"] || null;
  }
  get destinationPos() {
    return this.data["connection.destinationPos"] || null;
  }
  get firstPoint() {
    return this.points[0];
  }
  get endPoint() {
    return this.points[this.points.length - 1];
  }
  get startX() {
    return this.points.reduce((a, b) => Math.min(a, b.x), Number.MAX_VALUE);
  }
  get startY() {
    return this.points.reduce((a, b) => Math.min(a, b.y), Number.MAX_VALUE);
  }
  get width() {
    if (!this.points) {
      return NaN;
    }
    const reduce = this.points.reduce((a, b) => {
      return {
        min: Math.min(a.min, b.x),
        max: Math.max(a.max, b.x)
      };
    }, { min: Number.MAX_VALUE, max: Number.MIN_VALUE });
    return reduce.max - reduce.min;
  }
  get height() {
    if (!this.points) {
      return NaN;
    }
    const reduce = this.points.reduce((a, b) => {
      return {
        min: Math.min(a.min, b.y),
        max: Math.max(a.max, b.y)
      };
    }, { min: Number.MAX_VALUE, max: Number.MIN_VALUE });
    return reduce.max - reduce.min;
  }
  get x() {
    const point = this.firstPoint;
    return point !== null ? point.x : null;
  }
  get y() {
    const point = this.firstPoint;
    return point !== null ? point.y : null;
  }
  set sourceObjId(value) {
    this.data["connection.sourceObjId"] = value || null;
  }
  set destinationObjId(value) {
    this.data["connection.destinationObjId"] = value || null;
  }
  set sourcePos(value) {
    this.data["connection.sourcePos"] = value || null;
  }
  set destinationPos(value) {
    this.data["connection.destinationPos"] = value || null;
  }
  set x(value) {
    if (this.sourceObjId !== null) {
      return;
    }
    const point = this.firstPoint;
    if (point !== null) {
      point.x = value;
      this.render();
    }
  }
  set y(value) {
    if (this.sourceObjId !== null) {
      return;
    }
    const point = this.firstPoint;
    if (point !== null) {
      point.y = value;
      this.render();
    }
  }
  setLastPointXY(x, y) {
    this.data["connection.points"][this.renderer.lastPointId].x = x;
    this.data["connection.points"][this.renderer.lastPointId].y = y;
    this.render();
  }
  moveTo(x, y) {
    if (this.sourceObj && this.destinationObj) {
      return;
    }
    const startId = this.sourceObj === null ? 0 : 1;
    const endId = this.points.length - (this.destinationObj === null ? 0 : 1);
    this.editProp(() => {
      this.points.slice(startId, endId).forEach((pt) => {
        pt.x += x;
        pt.y += y;
      });
    });
  }
  comparePoints(points) {
    if (!this.points || !points || this.points.length !== points.length) {
      return false;
    }
    for (let i = 0; i < points.length; i++) {
      if (this.points[i].x !== points[i].x && this.points[i].y !== points[i].y) {
        return false;
      }
    }
    return true;
  }
};

// src/js-components/flowchart/obj/group.js
var Group = class extends RenderObject {
  constructor(data, renderer, containerInterface) {
    super(data, renderer, containerInterface);
    this.objectSet = new Set(this.data.objectList || []);
    this.rect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  get startX() {
    return this.x;
  }
  get startY() {
    return this.y;
  }
  get x() {
    return this.rect.x;
  }
  get y() {
    return this.rect.y;
  }
  get width() {
    return this.rect.width;
  }
  get height() {
    return this.rect.height;
  }
  get endX() {
    return this.x + this.width;
  }
  get endY() {
    return this.y + this.height;
  }
  select(userInteraction, typeClick = "") {
    this.objectSet.forEach((id2) => {
      const obj = this.containerInterface.getObjectOrNull(id2);
      if (obj != null) {
        if (typeClick == "" || typeClick != "" && typeClick == obj.renderType)
          obj.data.isSelected = true;
      }
    });
    super.select(userInteraction);
  }
  release(userInteraction = false) {
    this.objectSet.forEach((id2) => {
      const obj = this.containerInterface.getObjectOrNull(id2);
      obj != null && obj.release(userInteraction);
    });
    super.release(userInteraction);
  }
  resize() {
    const margin = this.data["group.margin"];
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = Number.MIN_VALUE;
    let maxY = Number.MIN_VALUE;
    this.objectSet.forEach((v) => {
      const obj = this.containerInterface.getObjectOrNull(v);
      if (obj !== null) {
        minX = Math.min(obj.startX - margin, minX);
        maxX = Math.max(obj.endX + margin, maxX);
        minY = Math.min(obj.startY - margin, minY);
        maxY = Math.max(obj.endY + margin, maxY);
      }
    });
    this.data["group.rect"] = this.rect;
    this.rect.x = minX;
    this.rect.y = minY;
    this.rect.width = maxX - minX;
    this.rect.height = maxY - minY;
  }
  moveTo() {
    this.render();
  }
  hasObjId(objId) {
    return this.objectSet.has(objId);
  }
  destroy() {
    this.objectSet.clear();
    super.destroy();
  }
  destroyAll() {
    this.objectSet.forEach((id2) => {
      const obj = this.containerInterface.getObjectOrNull(id2);
      obj != null && this.containerInterface.removeObject(obj);
    });
    this.destroy();
  }
  clear() {
    this.objectSet.clear();
  }
  addObject(id2) {
    if (this.objectSet.has(id2) === false) {
      this.objectSet.add(id2);
      this.resize();
    } else {
      throw new Error(`Already has added id! '${id2}'`);
    }
  }
  removeObject(id2) {
    if (this.objectSet.has(id2)) {
      this.objectSet.delete(id2);
      this.resize();
    } else {
      throw new Error(`There is no id you received in this group!'${id2}'`);
    }
  }
};

// src/js-components/flowchart/util/clipboard.ts
var TMP_CLIPBOARD = {
  text: ""
};
var clipboard_default = {
  _queryPermission(name) {
    return navigator.permissions.query({ name }).then((result) => result).catch(() => {
      return {
        state: "error"
      };
    });
  },
  checkClipboardPermission() {
    return __async(this, null, function* () {
      try {
        const write = yield this._queryPermission("clipboard-write");
        const read = yield this._queryPermission("clipboard-read");
        return write.state === "granted" && read.state === "granted";
      } catch (e) {
        return false;
      }
    });
  },
  saveData(data) {
    TMP_CLIPBOARD.text = data;
  },
  loadData() {
    return TMP_CLIPBOARD.text;
  }
};

// src/js-components/flowchart/util/objmousehandler.ts
var MARGIN_X = 10;
var MARGIN_Y = 10;
var TOOLTIP_DURATION = 500;
var DEFAULT_MOUSEOUT_DURATION = 200;
var ObjectMouseHandler = class {
  constructor(api) {
    this.tmpOut = false;
    this.containerInterface = api;
    this.tooltip = {
      objId: null,
      mouseOverTimer: null,
      mouseOutTimer: null,
      g: null,
      textCache: new TextCache()
    };
    this.isFirefox = window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? true : false;
  }
  commonOverOutAction(obj) {
    let x = 0;
    let y = 0;
    obj.g.on("mousemove", (ev) => {
      x = ev.offsetX + MARGIN_X;
      y = ev.offsetY + MARGIN_Y;
    }).on("mouseover", () => {
      obj.isHovered = true;
      if (this.containerInterface.getSelectNodeOnHover() && obj.type === "node" && !this.containerInterface.isDragging()) {
        this.containerInterface.releaseAllObjects();
        obj.select(true);
      }
      if (this.containerInterface.getTooltipHidden() || !obj.canShowTooltip) {
        return;
      }
      if (this.tooltip.mouseOutTimer != null) {
        this.tooltip.mouseOutTimer.stop();
      }
      this.tooltip.mouseOverTimer = timeout_default(() => {
        if (obj.isHovered && obj.onEditing === false && obj.id !== this.tooltip.objId && !this.containerInterface.getTooltipHidden())
          this.createTooltipObj(obj.data, x, y);
      }, TOOLTIP_DURATION);
    }).on("mouseout", () => {
      obj.isHovered = false;
      if (this.containerInterface.getTooltipHidden() || !obj.canShowTooltip) {
        return;
      }
      if (this.tooltip.mouseOverTimer != null) {
        this.tooltip.mouseOverTimer.stop();
      }
      this.tooltip.mouseOutTimer = timeout_default(() => {
        if (!obj.isHovered) {
          this.removeTooltipObj();
        }
      }, DEFAULT_MOUSEOUT_DURATION);
    });
  }
  createTooltipObj(objData, x, y) {
    this.removeTooltipObj();
    this.tooltip.objId = objData.id;
    this.tooltip.g = this.containerInterface.getSvg().append("g").attr("class", "tooltip");
    const obj = this.containerInterface.getObjectOrNull(this.tooltip.objId);
    if (obj === null) {
      return;
    }
    const style = {
      text: obj.getDataOrNull("tooltipText"),
      foreColor: obj.getDataOrNull("tooltipForeColor"),
      fontFamily: obj.getDataOrNull("tooltipFontFamily"),
      fontSize: obj.getDataOrNull("tooltipFontSize"),
      textDecoration: obj.getDataOrNull("tooltipTextDecoration"),
      padding: obj.getDataOrNull("tooltipPadding"),
      fill: obj.getDataOrNull("tooltipFill"),
      borderColor: obj.getDataOrNull("tooltipBorderColor"),
      borderWidth: obj.getDataOrNull("tooltipBorderWidth"),
      borderDash: obj.getDataOrNull("tooltipBorderDash"),
      width: 0
    };
    const size = getFittedSizeOnText(style);
    style.width = Math.min(size.width, obj.data.tooltipMaxWidth);
    const textLines = getWrappedText(style);
    this.tooltip.g.append("rect").attr("x", x).attr("y", y).attr("width", style.width + style.padding * 2).attr("height", textLines.lineHeight * textLines.length + style.padding * 2).attr("fill", style.fill).attr("stroke", style.borderColor).attr("stroke-width", style.borderWidth).attr("stroke-dasharray", style.borderDash);
    const text = this.tooltip.g.append("text").attr("fill", style.foreColor).attr("fontSize", style.fontSize).attr("text-decoration", style.textDecoration);
    createTextLines(
      text,
      textLines,
      x + style.padding,
      y + style.padding + style.fontSize,
      style
    );
  }
  removeTooltipObj() {
    if (this.tooltip.g !== null) {
      this.tooltip.g.remove();
      this.tooltip.objId = null;
      this.tooltip.g = null;
      this.tooltip.textCache.clear();
    }
  }
  addMouseAction(obj) {
    this.commonOverOutAction(obj);
  }
};

// src/js-components/flowchart/util/rect.ts
var Rect = class {
  constructor(startX, startY, endX, endY) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
  }
  isContained(x, y) {
    return x >= this.startX && x <= this.endX && y >= this.startY && y <= this.endY;
  }
};

// src/js-components/flowchart/render/bridge.js
var BridgeRenderer = class extends NodeRenderer {
  constructor(data, icontainer) {
    super(data, "bridge", icontainer);
  }
  _create() {
    this.objects.body = this.group.append("rect");
    super._create();
  }
  _render() {
    const wrapper = this.dataWrapper;
    const width = this.width;
    const height = this.height;
    this.objects.body.attr("x", -(width / 2)).attr("y", -(height / 2)).attr("rx", (width + height) / 6).style("width", `${width}px`).style("height", `${height}px`).style("fill", wrapper.get("node.fill")).style("stroke-width", wrapper.get("borderWidth")).attr("stroke", wrapper.get("borderColor")).attr("stroke-dasharray", wrapper.get("borderDash"));
  }
};

// src/js-components/flowchart/render/comment.js
var EDGE_SIZE = 15;
var ANGLE_DIFF_X = -4;
var ANGLE_DIFF_Y = 2;
var CommentRenderer = class extends NodeRenderer {
  constructor(data, icontainer) {
    super(data, "comment", icontainer);
  }
  _create() {
    this.objects.body = this.group.append("path").attr("class", "body").classed(this.data.type, true);
    super._create();
  }
  _getPath() {
    const commands = [];
    const endX = this.width / 2;
    const endY = this.height / 2;
    const startX = -endX;
    const startY = -endY;
    commands.push(`M${startX} ${startY}`);
    commands.push(`L${endX - EDGE_SIZE} ${startY}`);
    commands.push(`L${endX},${startY + EDGE_SIZE}`);
    commands.push(`L${endX},${endY}`);
    commands.push(`L${startX},${endY}`);
    commands.push(`Z`);
    commands.push(`M${endX - EDGE_SIZE} ${startY}`);
    commands.push(`L${endX - (EDGE_SIZE + ANGLE_DIFF_X)} ${startY + (EDGE_SIZE + ANGLE_DIFF_Y)}`);
    commands.push(`L${endX} ${startY + EDGE_SIZE}`);
    return commands.join(" ");
  }
  _render() {
    const wrapper = this.dataWrapper;
    this.objects.body.attr("d", this._getPath()).style("fill", wrapper.get("node.fill")).style("stroke-width", wrapper.get("borderWidth")).attr("stroke", wrapper.get("borderColor")).attr("stroke-dasharray", wrapper.get("borderDash"));
    this._createText();
  }
};

// src/js-components/flowchart/render/db.js
var CIRCLE_HEIGHT_RATIO = 0.28;
var DBRenderer = class extends NodeRenderer {
  constructor(data, icontainer) {
    super(data, "db", icontainer);
  }
  _create() {
    this.objects.circle = this.group.append("ellipse");
    this.objects.body = this.group.append("path");
    super._create();
  }
  get circleHeight() {
    return this.height * CIRCLE_HEIGHT_RATIO;
  }
  _getPath() {
    const commands = [];
    const halfHeight = this.height / 2;
    const ry = this.circleHeight / 2;
    const rx = this.width / 2;
    const x1 = -rx;
    const x2 = rx;
    const y1 = -halfHeight + ry;
    const y2 = halfHeight - ry;
    commands.push(`M${x1} ${y1}`);
    commands.push(`A${rx} ${ry} 0 0 0 ${x2} ${y1}`);
    commands.push(`V${y2}`);
    commands.push(`A${rx} ${ry} 0 0 1 ${x1} ${y2}`);
    commands.push(`V${y1}`);
    return commands.join(" ");
  }
  _render() {
    const wrapper = this.dataWrapper;
    const ry = this.circleHeight / 2;
    const rx = this.width / 2;
    const halfHeight = this.height / 2;
    const y1 = -halfHeight + ry;
    const style = {
      fill: wrapper.get("node.fill"),
      borderWidth: wrapper.get("borderWidth"),
      borderColor: wrapper.get("borderColor"),
      borderDash: wrapper.get("borderDash")
    };
    this.objects.circle.attr("cx", 0).attr("cy", y1).attr("rx", rx).attr("ry", ry).style("fill", style.fill).style("stroke-width", style.borderWidth).attr("stroke", style.borderColor).attr("stroke-dasharray", style.borderDash);
    this.objects.body.attr("d", this._getPath()).style("fill", style.fill).style("stroke-width", style.borderWidth).attr("stroke", style.borderColor).attr("stroke-dasharray", style.borderDash);
    const circleHeight = this.height * CIRCLE_HEIGHT_RATIO;
    this._createText(0, circleHeight / 2);
  }
};

// src/js-components/flowchart/render/connection.js
var ConnectionRenderer = class extends BaseRenderer {
  constructor(data, className, iContainer) {
    super(data, className, iContainer);
    this.markerId = `${this.containerInterface.getUUID()}_marker_${this.data.id}`;
    this.objects.marker = this.group.append("svg:defs").append("svg:marker").attr("id", this.markerId);
    this.objects.markerPath = this.objects.marker.append("path");
    this.checkChanged = {
      points: null,
      srcX: 0,
      srcY: 0,
      desX: 0,
      desY: 0
    };
  }
  get width() {
    return this.data["connection.width"];
  }
  get height() {
    return 0;
  }
  get lastPointId() {
    return this.data["connection.points"].length - 1;
  }
  create() {
    super.create();
    this.bringToFrontElement(this.objects.sourceConnector.node());
    this.bringToFrontElement(this.objects.destinationConnector.node());
  }
  _createConnector() {
    this.objects.sourceConnector = this.group.append("circle").attr("cursor", "crosshair");
    this.objects.destinationConnector = this.group.append("circle").attr("cursor", "crosshair");
  }
  _getPosLocation(node, pos) {
    let x = 0;
    let y = 0;
    switch (pos) {
      case "left":
        x = -(node.width / 2);
        break;
      case "right":
        x = node.width / 2;
        break;
      case "top":
        y = -(node.height / 2);
        break;
      case "bottom":
        y = node.height / 2;
        break;
      default:
        throw new Error(`Invalid argument '${pos}'`);
    }
    return {
      x,
      y
    };
  }
  _getBBox() {
    return this.objects.text.node().getBBox();
  }
  _getLabelRect() {
    const bbox = this._getBBox();
    const width = bbox.width + 10;
    const height = bbox.height + 10;
    return {
      x: parseFloat(this.objects.text.attr("x")) - width / 2,
      y: parseFloat(this.objects.text.attr("y")) - 5 - this.data.fontSize,
      width: width + 20,
      height: Math.max(height, this.data.fontSize + 10)
    };
  }
  _renderMarker() {
    const wrapper = this.dataWrapper;
    const style = {
      borderWidth: wrapper.get("borderWidth"),
      arrowSize: wrapper.get("connection.arrowSize"),
      arrowFill: wrapper.get("connection.arrowFill"),
      arrowBorderColor: wrapper.get("connection.arrowBorderColor"),
      arrowBorderWidth: wrapper.get("connection.arrowBorderWidth")
    };
    const markerSize = style.arrowSize / style.borderWidth;
    this.objects.marker.attr("refX", markerSize).attr("refY", markerSize / 2).attr("markerWidth", markerSize).attr("markerHeight", markerSize).attr("orient", "auto");
    this.objects.markerPath.attr("d", `M 0 0 L ${markerSize} ${markerSize / 2} L 0 ${markerSize} z`).attr("fill", style.arrowFill).attr("stroke", style.arrowBorderColor).attr("stroke-width", style.arrowBorderWidth / style.borderWidth);
  }
  _renderConnector() {
    const wrapper = this.dataWrapper;
    const sourceLoc = this._getSourceLoc();
    const destinationLoc = this._getDestinationLoc();
    const style = {
      size: wrapper.get("connection.connectorSize"),
      fill: wrapper.get("connection.connectorFill")
    };
    this.objects.sourceConnector.attr("cx", sourceLoc.x).attr("cy", sourceLoc.y).attr("r", style.size).attr("fill", style.fill).attr("visibility", this.subUiVisibility);
    this.objects.destinationConnector.attr("cx", destinationLoc.x).attr("cy", destinationLoc.y).attr("r", style.size).attr("fill", style.fill).attr("visibility", this.subUiVisibility);
  }
  _getSourceLoc() {
    return this._getNodePositionLoc(
      this.data["connection.sourceObjId"],
      this.data["connection.sourcePos"],
      0
    );
  }
  _getDestinationLoc() {
    return this._getNodePositionLoc(
      this.data["connection.destinationObjId"],
      this.data["connection.destinationPos"],
      this.lastPointId
    );
  }
  _recordLastInfo(srcLoc, desLoc) {
    this.checkChanged.points = this.data["connection.points"];
    this.checkChanged.srcX = srcLoc.x;
    this.checkChanged.srcY = srcLoc.y;
    this.checkChanged.desX = desLoc.x;
    this.checkChanged.desY = desLoc.y;
  }
  _updatePoints(...points) {
    if (this.data["connection.points"] === void 0 || this.data["connection.points"] === null) {
      this.data["connection.points"] = [];
    } else {
      this.data["connection.points"].splice(
        0,
        this.data["connection.points"].length
      );
    }
    points.forEach((pt) => this.data["connection.points"].push(pt));
  }
  _isChanged(srcLoc, desLoc) {
    try {
      const tmpX1 = this.checkChanged.srcX - this.checkChanged.desX;
      const tmpX2 = srcLoc.x - desLoc.x;
      const tmpY1 = this.checkChanged.srcY - this.checkChanged.desY;
      const tmpY2 = srcLoc.y - desLoc.y;
      return tmpX1 !== tmpX2 || tmpY1 !== tmpY2;
    } finally {
      this._recordLastInfo(srcLoc, desLoc);
    }
  }
  _getNodePositionLoc(objId, pos, pointId) {
    if (objId && pos) {
      const node = this.containerInterface.getObjectOrNull(objId);
      if (node === null) {
        if (this.data["connection.points"] && this.data["connection.points"].length > pointId) {
          return {
            x: this.data["connection.points"][pointId].x,
            y: this.data["connection.points"][pointId].y
          };
        } else {
          return {
            x: 0,
            y: 0
          };
        }
      } else {
        const posLocation = this._getPosLocation(node, pos);
        const transform2 = getTransformData(node.renderer.group.attr("transform"));
        return {
          x: posLocation.x + transform2.translateX,
          y: posLocation.y + transform2.translateY
        };
      }
    } else if (this.data["connection.points"] && this.data["connection.points"].length > pointId) {
      return {
        x: this.data["connection.points"][pointId].x,
        y: this.data["connection.points"][pointId].y
      };
    } else {
      throw new Error("Invalid points value.");
    }
  }
};

// src/js-components/flowchart/render/direct.js
var DirectConnectionRenderer = class extends ConnectionRenderer {
  constructor(data, iContainer) {
    super(data, "direct", iContainer);
  }
  _create() {
    this.objects.line = this.group.append("line").attr("marker-end", `url(#${this.markerId})`);
    this.objects.wideLine = this.group.append("line").attr("class", "wide-line").style("stroke", "rgba(0, 0, 0, 0)");
    this.objects.rect = this.group.append("rect");
    this._createConnector();
  }
  _getLabelXY(info) {
    const srcLoc = this._getSourceLoc();
    const desLoc = this._getDestinationLoc();
    return {
      x: srcLoc.x + (desLoc.x - srcLoc.x) / 2,
      y: srcLoc.y + (desLoc.y - srcLoc.y) / 2 + (this.data.fontSize - this.data.fontSize * info.length / 2)
    };
  }
  _render() {
    const wrapper = this.dataWrapper;
    const points = this.data["connection.points"];
    const srcLoc = this._getSourceLoc();
    const desLoc = this._getDestinationLoc();
    const style = {
      borderColor: wrapper.get("borderColor"),
      borderWidth: wrapper.get("borderWidth"),
      borderDash: wrapper.get("borderDash"),
      text: wrapper.get("text"),
      fill: wrapper.get("connection.textBorderFill"),
      textBorderColor: wrapper.get("connection.textBorderColor"),
      textBorderWidth: wrapper.get("connection.textBorderWidth"),
      textBorderDash: wrapper.get("connection.textBorderDash")
    };
    this._renderConnector();
    this._renderMarker();
    if (this._isChanged(srcLoc, desLoc)) {
      this._updatePoints(srcLoc, desLoc);
    }
    this.objects.line.attr("x1", points[0].x).attr("y1", points[0].y).attr("x2", points[this.lastPointId].x).attr("y2", points[this.lastPointId].y).style("stroke", style.borderColor).style("stroke-width", style.borderWidth).style("stroke-dasharray", style.borderDash);
    this.objects.wideLine.attr("x1", points[0].x).attr("y1", points[0].y).attr("x2", points[this.lastPointId].x).attr("y2", points[this.lastPointId].y).style("stroke-width", Math.max(style.borderWidth, 5));
    this._createText();
    if (style.text) {
      const bbox = this._getBBox();
      const width = bbox.width + 10;
      const height = bbox.height + 10;
      this.objects.rect.attr("x", bbox.x - 5).attr("y", bbox.y - 5).attr("width", width).attr("height", height).style("fill", style.fill).style("stroke", style.textBorderColor).style("stroke-width", style.textBorderWidth).style("stroke-dasharray", style.textBorderDash);
    } else {
      this.objects.rect.style("fill", "transparent").style("stroke", "transparent");
    }
  }
};

// src/js-components/flowchart/render/elbow.js
var MINIMUM_GAP = 20;
var ADJUSTER_SIZE = 10;
var ADJUSTER_ADJ = ADJUSTER_SIZE / 2;
var ElbowConnectionRenderer = class extends ConnectionRenderer {
  constructor(data, iContainer) {
    super(data, "elbow", iContainer);
    this.adjusterList = [];
    this.elbowMap = {
      top: this._topTo,
      bottom: this._bottomTo,
      left: this._leftTo,
      right: this._rightTo
    };
  }
  _create() {
    this.objects.polyline = this.group.append("polyline").attr("fill", "none").attr("marker-end", `url(#${this.markerId})`);
    this.objects.wideLine = this.group.append("polyline").attr("fill", "none").style("stroke", "rgba(0, 0, 0, 0)");
    this.objects.rect = this.group.append("rect");
    this._createConnector();
    const points = this.data["connection.points"];
    if (points.length === 2) {
      this.refreshAdjustList();
    } else {
      this._recordLastInfo(this._getSourceLoc(), this._getDestinationLoc());
      this._createAdjustList(points.slice(1, points.length - 1));
    }
  }
  _getNextXY(pos, loc) {
    switch (pos) {
      case "left":
        return { x: loc.x - MINIMUM_GAP, y: loc.y };
      case "right":
        return { x: loc.x + MINIMUM_GAP, y: loc.y };
      case "top":
        return { x: loc.x, y: loc.y - MINIMUM_GAP };
      case "bottom":
        return { x: loc.x, y: loc.y + MINIMUM_GAP };
      default:
        throw new Error(`Unknown pos '${pos}'`);
    }
  }
  *_topTo(srcLoc, desLoc, srcNext, desNext, desPos) {
    const middleX = (srcLoc.x + desLoc.x) / 2;
    const middleY = (srcLoc.y + desLoc.y) / 2;
    const nextMiddleX = (srcNext.x + desNext.x) / 2;
    const nextMiddleY = (srcNext.y + desNext.y) / 2;
    switch (desPos) {
      case "top": {
        yield { x: middleX, y: Math.min(srcNext.y, desNext.y) };
        break;
      }
      case "bottom": {
        if (srcLoc.y > desLoc.y) {
          yield { x: middleX, y: middleY };
        } else {
          yield { x: (srcLoc.x + middleX) / 2, y: srcNext.y };
          yield { x: middleX, y: middleY };
          yield { x: (middleX + desNext.x) / 2, y: desNext.y };
        }
        break;
      }
      case "left": {
        if (srcLoc.x < desLoc.x) {
          if (srcLoc.y < desLoc.y) {
            yield { x: (srcLoc.x + middleX) / 2, y: srcNext.y };
            yield { x: middleX, y: nextMiddleY };
          }
        } else if (srcLoc.y < desLoc.y) {
          yield { x: nextMiddleX, y: srcNext.y };
          yield { x: desNext.x, y: nextMiddleY };
        } else {
          yield { x: nextMiddleX, y: middleY };
          yield { x: desNext.x, y: (middleY + desNext.y) / 2 };
        }
        break;
      }
      case "right": {
        if (srcLoc.x < desLoc.x) {
          if (srcLoc.y < desLoc.y) {
            yield { x: nextMiddleX, y: srcNext.y };
            yield { x: desNext.x, y: nextMiddleY };
          } else {
            yield { x: nextMiddleX, y: middleY };
            yield { x: desNext.x, y: (middleY + desNext.y) / 2 };
          }
        } else if (srcLoc.y < desLoc.y) {
          yield { x: (srcNext.x + middleX) / 2, y: srcNext.y };
          yield { x: middleX, y: nextMiddleY };
        }
        break;
      }
      default:
        throw new Error(`Unknown pos '${desPos}'`);
    }
  }
  *_bottomTo(srcLoc, desLoc, srcNext, desNext, desPos) {
    const middleX = (srcLoc.x + desLoc.x) / 2;
    const middleY = (srcLoc.y + desLoc.y) / 2;
    const nextMiddleX = (srcNext.x + desNext.x) / 2;
    const nextMiddleY = (srcNext.y + desNext.y) / 2;
    switch (desPos) {
      case "top": {
        if (srcLoc.y < desLoc.y) {
          yield { x: middleX, y: middleY };
        } else {
          yield { x: (srcLoc.x + middleX) / 2, y: srcNext.y };
          yield { x: middleX, y: middleY };
          yield { x: (middleX + desNext.x) / 2, y: desNext.y };
        }
        break;
      }
      case "bottom": {
        yield { x: middleX, y: Math.max(srcNext.y, desNext.y) };
        break;
      }
      case "left": {
        if (srcLoc.y < desLoc.y) {
          if (srcLoc.x > desLoc.x) {
            yield { x: nextMiddleX, y: middleY };
            yield { x: desNext.x, y: (middleY + desNext.y) / 2 };
          }
        } else {
          yield { x: nextMiddleX, y: srcNext.y };
          yield { x: desNext.x, y: nextMiddleY };
        }
        break;
      }
      case "right": {
        if (srcLoc.y < desLoc.y) {
          if (srcLoc.x < desLoc.x) {
            const tmpY = (srcNext.y + nextMiddleY) / 2;
            yield { x: nextMiddleX, y: tmpY };
            yield { x: desNext.x, y: (tmpY + desNext.y) / 2 };
          }
        } else {
          yield { x: nextMiddleX, y: srcNext.y };
          yield { x: desNext.x, y: nextMiddleY };
        }
        break;
      }
      default:
        throw new Error(`Unknown pos '${desPos}'`);
    }
  }
  *_leftTo(srcLoc, desLoc, srcNext, desNext, desPos) {
    const middleX = (srcLoc.x + desLoc.x) / 2;
    const middleY = (srcLoc.y + desLoc.y) / 2;
    const nextMiddleX = (srcNext.x + desNext.x) / 2;
    const nextMiddleY = (srcNext.y + desNext.y) / 2;
    switch (desPos) {
      case "top": {
        if (srcLoc.y < desLoc.y) {
          if (srcLoc.x < desLoc.x) {
            yield { x: srcNext.x, y: (srcNext.y + middleY) / 2 };
            yield { x: nextMiddleX, y: middleY };
          }
        } else if (srcLoc.x < desLoc.x) {
          yield { x: srcNext.x, y: nextMiddleY };
          yield { x: nextMiddleX, y: desNext.y };
        } else {
          yield { x: middleX, y: nextMiddleY };
          yield { x: (middleX + desNext.x) / 2, y: desNext.y };
        }
        break;
      }
      case "bottom": {
        if (srcLoc.y < desLoc.y) {
          if (srcLoc.x < desLoc.x) {
            yield { x: srcNext.x, y: nextMiddleY };
            yield { x: nextMiddleX, y: desNext.y };
          } else {
            yield { x: middleX, y: nextMiddleY };
            yield { x: (middleX + desNext.x) / 2, y: desNext.y };
          }
        } else if (srcLoc.x < desLoc.x) {
          yield { x: srcNext.x, y: (srcNext.y + middleY) / 2 };
          yield { x: nextMiddleX, y: middleY };
        }
        break;
      }
      case "left": {
        if (srcLoc.x < desLoc.x) {
          yield { x: srcNext.x, y: middleY };
        } else {
          yield { x: desNext.x, y: middleY };
        }
        break;
      }
      case "right": {
        if (srcLoc.x < desLoc.x) {
          yield { x: srcNext.x, y: (srcNext.y + middleY) / 2 };
          yield { x: nextMiddleX, y: middleY };
          yield { x: desNext.x, y: (middleY + desNext.y) / 2 };
        } else {
          yield { x: middleX, y: middleY };
        }
        break;
      }
      default:
        throw new Error(`Unknown pos '${desPos}'`);
    }
  }
  *_rightTo(srcLoc, desLoc, srcNext, desNext, desPos) {
    const middleX = (srcLoc.x + desLoc.x) / 2;
    const middleY = (srcLoc.y + desLoc.y) / 2;
    const nextMiddleX = (srcNext.x + desNext.x) / 2;
    const nextMiddleY = (srcNext.y + desNext.y) / 2;
    switch (desPos) {
      case "top": {
        if (srcLoc.y < desLoc.y) {
          if (srcLoc.x > desLoc.x) {
            yield { x: srcNext.x, y: (srcNext.y + middleY) / 2 };
            yield { x: nextMiddleX, y: (middleY + desNext.y) / 2 };
          }
        } else if (srcLoc.x < desLoc.x) {
          yield { x: middleX, y: nextMiddleY };
          yield { x: (middleX + desNext.x) / 2, y: desNext.y };
        } else {
          yield { x: srcNext.x, y: nextMiddleY };
          yield { x: nextMiddleX, y: desNext.y };
        }
        break;
      }
      case "bottom": {
        if (srcLoc.y < desLoc.y) {
          if (srcLoc.x < desLoc.x) {
            yield { x: middleX, y: nextMiddleY };
            yield { x: (middleX + desNext.x) / 2, y: desNext.y };
          } else {
            yield { x: srcNext.x, y: nextMiddleY };
            yield { x: nextMiddleX, y: desNext.y };
          }
        } else if (srcLoc.x > desLoc.x) {
          yield { x: srcNext.x, y: (srcNext.y + middleY) / 2 };
          yield { x: nextMiddleX, y: middleY };
        }
        break;
      }
      case "left": {
        if (srcLoc.x < desLoc.x) {
          yield { x: middleX, y: middleY };
        } else {
          yield { x: srcNext.x, y: (srcNext.y + middleY) / 2 };
          yield { x: nextMiddleX, y: middleY };
          yield { x: desNext.x, y: (middleY + desNext.y) / 2 };
        }
        break;
      }
      case "right": {
        yield { x: Math.max(srcNext.x, desNext.x), y: middleY };
        break;
      }
      default:
        throw new Error(`Unknown pos '${desPos}'`);
    }
  }
  _getElbowPoints(srcLoc, desLoc, srcPos, desPos) {
    const srcNext = this._getNextXY(srcPos, srcLoc);
    const desNext = this._getNextXY(desPos, desLoc);
    const points = [];
    const func = this.elbowMap[srcPos];
    points.push({ x: srcLoc.x, y: srcLoc.y });
    if (func === void 0)
      console.error(`unknown position value '${srcPos}'`);
    else {
      for (const p of func(srcLoc, desLoc, srcNext, desNext, desPos))
        points.push(p);
    }
    points.push({ x: desLoc.x, y: desLoc.y });
    return points;
  }
  _getPolylinePath(points) {
    const path = [];
    let x = points[0].x;
    let y = points[0].y;
    let isVertical = this._getFirstPointDir() === "v";
    path.push([x, y]);
    for (let i = 0; i < points.length - 1; ++i) {
      if (isVertical) {
        y = points[i + 1].y;
      } else {
        x = points[i + 1].x;
      }
      path.push([x, y]);
      isVertical = !isVertical;
    }
    path.push([points[points.length - 1].x, points[points.length - 1].y]);
    return path;
  }
  _getLabelPos(pathPoints) {
    const firstPoint = pathPoints[1];
    const nextPoint = pathPoints[2];
    return {
      x: (firstPoint[0] + nextPoint[0]) / 2,
      y: (firstPoint[1] + nextPoint[1]) / 2
    };
  }
  _getPosToDir(pos) {
    switch (pos) {
      case "top":
      case "bottom":
        return "v";
      case "left":
      case "right":
        return "h";
      default:
        throw new Error(`Unknown sourcePos '${pos}'`);
    }
  }
  _getFirstPointDir() {
    if (this.data["connection.sourcePos"] !== null) {
      return this._getPosToDir(this.data["connection.sourcePos"]);
    } else {
      const pos = this._getPos(this._getSourceLoc(), this._getDestinationLoc());
      return this._getPosToDir(pos.srcPos);
    }
  }
  _createAdjustList(adjustPoints) {
    const data = this.data;
    let flag = this._getFirstPointDir() === "v";
    this.adjusterList.forEach((a) => a.remove());
    this.adjusterList.splice(0, this.adjusterList.length);
    adjustPoints.forEach((p, id2) => {
      const isVertical = !flag;
      let lastX = 0;
      let lastY = 0;
      let tmpPoints = null;
      flag = !flag;
      const point = this.group.append("rect").attr("x", p.x - ADJUSTER_SIZE / 2).attr("y", p.y - ADJUSTER_SIZE / 2).attr("width", ADJUSTER_SIZE).attr("height", ADJUSTER_SIZE).attr("class", "adjuster").attr("cursor", "move").call(drag_default().filter(() => this.containerInterface.getReadOnly() === false).on("start", (ev) => {
        lastX = ev.x;
        lastY = ev.y;
        tmpPoints = deepCopy(this.data["connection.points"]);
      }).on("drag", (ev) => {
        const points = data["connection.points"];
        const pt = points[id2 + 1];
        if (isVertical) {
          const diffX = lastX - ev.x;
          pt.x -= diffX;
          lastX = ev.x;
          point.attr("x", pt.x - ADJUSTER_SIZE / 2);
          if (id2 > 0)
            points[id2].x -= diffX / 2;
          if (id2 + 3 < points.length)
            points[id2 + 2].x -= diffX / 2;
        } else {
          const diffY = lastY - ev.y;
          pt.y -= diffY;
          lastY = ev.y;
          point.attr("y", pt.y - ADJUSTER_SIZE / 2);
          if (id2 > 0)
            points[id2].y -= diffY / 2;
          if (id2 + 3 < points.length)
            points[id2 + 2].y -= diffY / 2;
        }
        this._render();
      }).on("end", () => {
        this.containerInterface.adjDragCallback(
          this.data,
          tmpPoints,
          deepCopy(this.data["connection.points"])
        );
      }));
      this.adjusterList.push(point);
    });
  }
  _getPos(srcLoc, desLoc) {
    const pos = {
      srcPos: this.data["connection.sourcePos"],
      desPos: this.data["connection.destinationPos"]
    };
    const height = Math.abs(srcLoc.y - desLoc.y);
    const width = Math.abs(srcLoc.x - desLoc.x);
    if (!pos.srcPos) {
      if (height > width) {
        pos.srcPos = srcLoc.y > desLoc.y ? "top" : "bottom";
      } else {
        pos.srcPos = srcLoc.x > desLoc.x ? "left" : "right";
      }
    }
    if (!pos.desPos) {
      if (height > width) {
        pos.desPos = srcLoc.y > desLoc.y ? "bottom" : "top";
      } else {
        pos.desPos = srcLoc.x > desLoc.x ? "right" : "left";
      }
    }
    return pos;
  }
  refreshAdjustList() {
    const srcLoc = this._getSourceLoc();
    const desLoc = this._getDestinationLoc();
    const pos = this._getPos(srcLoc, desLoc);
    const tmpPoints = this._getElbowPoints(
      srcLoc,
      desLoc,
      pos.srcPos,
      pos.desPos
    );
    this._createAdjustList(tmpPoints.slice(1, tmpPoints.length - 1));
    this._updatePoints(...tmpPoints);
  }
  _getLabelXY(info) {
    const pos = this._getLabelPos(this._getPolylinePath(this.data["connection.points"]));
    return {
      x: pos.x,
      y: pos.y + (this.data.fontSize - this.data.fontSize * info.length / 2)
    };
  }
  _renderAdjustList() {
    this.adjusterList.forEach((adj, id2) => {
      const curPt = this.data["connection.points"][id2 + 1];
      adj.attr("x", curPt.x - ADJUSTER_ADJ).attr("y", curPt.y - ADJUSTER_ADJ);
      adj.attr("visibility", this.group.classed("edit") === false ? this.subUiVisibility : "hidden");
      this.bringToFrontElement(adj.node());
    });
  }
  _render() {
    const data = this.data;
    const wrapper = this.dataWrapper;
    const srcLoc = this._getSourceLoc();
    const desLoc = this._getDestinationLoc();
    if (this._isChanged(srcLoc, desLoc)) {
      this.refreshAdjustList();
    }
    this._renderConnector();
    this._renderMarker();
    this._renderAdjustList();
    const pathPoints = this._getPolylinePath(data["connection.points"]);
    const path = pathPoints.map((pt) => `${pt[0]},${pt[1]}`).join(", ");
    this.objects.polyline.attr("points", path).style("stroke", wrapper.get("borderColor")).style("stroke-width", wrapper.get("borderWidth")).style("stroke-dasharray", wrapper.get("borderDash"));
    this.objects.wideLine.attr("points", path).style("stroke-width", Math.max(wrapper.get("borderWidth"), 5));
    this._createText();
    if (data.text) {
      const bbox = this._getBBox();
      const width = bbox.width + 10;
      const height = bbox.height + 10;
      this.objects.rect.attr("x", bbox.x - 5).attr("y", bbox.y - 5).attr("width", width).attr("height", height).style("fill", wrapper.get("connection.textBorderFill")).style("stroke", wrapper.get("connection.textBorderColor")).style("stroke-width", wrapper.get("connection.textBorderWidth")).style("stroke-dasharray", wrapper.get("connection.textBorderDash"));
    } else {
      this.objects.rect.style("fill", "transparent").style("stroke", "transparent");
    }
  }
};

// src/js-components/flowchart/render/group.js
var GroupRenderer = class extends BaseRenderer {
  constructor(data, icontainer) {
    super(data, "group", icontainer);
  }
  _create() {
    this.objects.rect = this.group.append("rect").attr("fill", "none").attr("visibility", "hidden");
    this.objects.thickRect = this.group.append("rect").attr("fill", "none").attr("opacity", "0").attr("visibility", "hidden");
  }
  _render() {
    const rect = this.data["group.rect"];
    const wrapper = this.dataWrapper;
    if (this.data.isSelected || this.data["group.borderAlwaysAppearance"]) {
      const borderWidth = wrapper.get("borderWidth");
      this.objects.rect.attr("x", rect.x).attr("y", rect.y).attr("width", rect.width).attr("height", rect.height).attr("stroke", wrapper.get("borderColor")).attr("stroke-width", borderWidth).attr("stroke-dasharray", wrapper.get("borderDash")).attr("visibility", "visible");
      this.objects.thickRect.attr("x", rect.x).attr("y", rect.y).attr("width", rect.width).attr("height", rect.height).attr("stroke", "white").attr("stroke-width", Math.max(borderWidth, 8)).attr("visibility", "visible");
    } else {
      this.objects.rect.attr("visibility", "hidden");
      this.objects.thickRect.attr("visibility", "hidden");
    }
  }
};

// src/js-components/flowchart/render/if.js
var IfRenderer = class extends NodeRenderer {
  constructor(data, icontainer) {
    super(data, "if", icontainer);
  }
  _create() {
    this.objects.body = this.group.append("polygon");
    super._create();
  }
  getPolygon() {
    const points = [];
    const halfWidth = this.width / 2;
    const halfHeight = this.height / 2;
    points.push(`${-halfWidth},${0}`);
    points.push(`${0},${-halfHeight}`);
    points.push(`${halfWidth},${0}`);
    points.push(`${0},${halfHeight}`);
    return points.join(" ");
  }
  _render() {
    const wrapper = this.dataWrapper;
    this.objects.body.attr("points", this.getPolygon()).attr("fill", wrapper.get("node.fill")).attr("stroke", wrapper.get("borderColor")).attr("stroke-width", wrapper.get("borderWidth")).attr("stroke-dasharray", wrapper.get("borderDash"));
    this._createText();
  }
};

// src/js-components/flowchart/render/return.js
var ReturnRenderer = class extends NodeRenderer {
  constructor(data, icontainer) {
    super(data, "return", icontainer);
  }
  _create() {
    this.objects.body = this.group.append("rect");
    super._create();
  }
  _render() {
    const wrapper = this.dataWrapper;
    const width = this.width;
    const height = this.height;
    this.objects.body.attr("x", -(width / 2)).attr("y", -(height / 2)).attr("width", width).attr("height", height).style("fill", wrapper.get("node.fill")).attr("stroke", wrapper.get("borderColor")).style("stroke-width", wrapper.get("borderWidth")).attr("stroke-dasharray", wrapper.get("borderDash"));
    this._createText();
  }
};

// src/js-components/flowchart/render/start.js
var StartRenderer = class extends NodeRenderer {
  constructor(data, icontainer) {
    super(data, "start", icontainer);
  }
  _create() {
    this.objects.body = this.group.append("rect");
    super._create();
  }
  _render() {
    const wrapper = this.dataWrapper;
    const g = this.objects;
    const width = this.width;
    const height = this.height;
    g.body.attr("x", -(width / 2)).attr("y", -(height / 2)).attr("rx", height / 2).attr("width", width).attr("height", height).style("fill", wrapper.get("node.fill")).style("stroke-width", wrapper.get("borderWidth")).attr("stroke-dasharray", wrapper.get("borderDash")).attr("stroke", wrapper.get("borderColor"));
    this._createText();
  }
};

// src/js-components/flowchart/util/rendermng.js
var RenderManager = class {
  constructor() {
    this.nodeRenderMap = /* @__PURE__ */ new Map();
    this.connectionRenderMap = /* @__PURE__ */ new Map();
    this.etcRenderMap = /* @__PURE__ */ new Map();
    this.nodeRenderMap.set("start", StartRenderer);
    this.nodeRenderMap.set("if", IfRenderer);
    this.nodeRenderMap.set("return", ReturnRenderer);
    this.nodeRenderMap.set("comment", CommentRenderer);
    this.nodeRenderMap.set("bridge", BridgeRenderer);
    this.nodeRenderMap.set("db", DBRenderer);
    this.connectionRenderMap.set("direct", DirectConnectionRenderer);
    this.connectionRenderMap.set("elbow", ElbowConnectionRenderer);
    this.etcRenderMap.set("group", GroupRenderer);
  }
  _add(map, render, constructor) {
    map.set(render, constructor);
  }
  _get(map, key) {
    if (map.has(key)) {
      return map.get(key);
    }
    throw new Error(`There is no renderer (key: '${key}')`);
  }
  addRenderMap(type2, render, constructor) {
    switch (type2) {
      case "node":
        this._add(this.nodeRenderMap, render, constructor);
        break;
      case "connection":
        this._add(this.connectionRenderMap, render, constructor);
        break;
      default:
        throw new Error(`Unknown type '${type2}'`);
    }
  }
  getRenderConstructor(type2, render) {
    switch (type2) {
      case "node":
        return this._get(this.nodeRenderMap, render);
      case "connection":
        return this._get(this.connectionRenderMap, render);
      default:
        return this._get(this.etcRenderMap, render);
    }
  }
  changeRender(obj, render, icontainer) {
    const constructor = this.getRenderConstructor(obj.type, render);
    const renderer = new constructor(obj.data, icontainer);
    obj.changeRender(render, renderer);
  }
};

// src/js-components/flowchart/util/seqmng.ts
var SequenceManager = class {
  constructor(iContainer) {
    this.objSeq = 0;
    this.clickSeq = 0;
    this.iContainer = iContainer;
    this.clear();
  }
  clear() {
    this.clearObjSeq();
    this.clearClickSeq();
  }
  clearObjSeq() {
    this.objSeq = 1;
  }
  clearClickSeq() {
    this.clickSeq = 0;
  }
  getObjSeqId() {
    while (this.iContainer.getObjectOrNull(this.objSeq) !== null) {
      ++this.objSeq;
    }
    return this.objSeq;
  }
  increaseClickSeq() {
    return ++this.clickSeq;
  }
};

// src/js-components/flowchart/util/theme.ts
var DefaultTheme = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, DEFAULT_CONNECTION_STYLE_DATA), DEFAULT_GROUP_STYLE_DATA), DEFAULT_NODE_STYLE_DATA), DEFAULT_STYLE_DATA);

// src/js-components/flowchart/flowchart.js
var DETECTING_SIZE = 10;
var ACTION_LIMIT = 255;
var POSITION_LIST = ["left", "right", "top", "bottom"];
var MIN_ZOOM = 0.4;
var MAX_ZOOM = 3;
var NOT_CHANGING_PROPERTY_SET = /* @__PURE__ */ new Set(["isHovered", "isSelected"]);
var EVENT_TYPE = {
  CLICK: "click",
  CLICK_NODE: "clickNode",
  DOUBLE_CLICK_NODE: "dblClickNode",
  CLICK_CONNECTION: "clickConnection",
  DOUBLE_CLICK_CONNECTION: "dblClickConnection",
  NEW_OBJECT: "newObject",
  REMOVE_OBJECT: "removeObject",
  SELECT_OBJECT: "selectObject",
  RELEASE_OBJECT: "releaseObject",
  UNDO: "undo",
  REDO: "redo",
  COMMAND: "command",
  CHANGE_CLASS: "changeClass",
  DISCONNECT_NODE: "disconnectNode",
  CONNECT_NODE: "connectNode",
  MOUSEUP_SHEET: "mouseUpSheet"
};
var createEmitter = (flowchart) => {
  const eventMap = {};
  return {
    emit: (event, args) => {
      if (!eventMap[event])
        return;
      eventMap[event].forEach((callback) => callback.apply(flowchart, args));
    },
    on: (event, callback) => {
      if (!eventMap[event])
        eventMap[event] = [];
      eventMap[event].push(callback);
      return callback;
    },
    off: (event, callback) => {
      if (!eventMap[event])
        return false;
      const id2 = eventMap[event].indexOf(callback);
      if (id2 < 0)
        return false;
      eventMap[event].splice(id2, 1);
      return true;
    }
  };
};
var createFlowchartTemplate = (id2) => {
  const div = document.createElement("div");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  div.classList.add("flowchart");
  div.tabIndex = -1;
  svg.innerHTML = `<defs>
    <pattern
        id="${id2}_small_grid"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse">
        <path
        d="M 10 0 L 0 0 0 10"
        fill="none"
        stroke="gray"
        stroke-width="0.5"/>
    </pattern>
    <pattern
        id="${id2}_grid"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse">
        <rect
        width="100"
        height="100"
        fill="url(#${id2}_small_grid)"/>
        <path
        d="M 100 0 L 0 0 0 100"
        fill="none"
        stroke="gray"
        stroke-width="1"/>
    </pattern>
</defs>`;
  div.appendChild(svg);
  return { div, svg };
};
var DEFAULT_MOVEMENT_UNIT = 10;
var IRFlowchart = class extends IRComponent {
  constructor({ contextElement, width, height }) {
    super({ contextElement });
    this._wheelZoom = true;
    this._gridMode = false;
    this._editMode = false;
    this._readonly = false;
    this._simpleConnectingMode = false;
    this._moveScreenOnSelect = false;
    this._selectNodeOnHover = false;
    this._tooltipHidden = false;
    this._traceMode = false;
    this._singleSelection = false;
    this._isChanged = false;
    this._isDragging = false;
    this.keyMap = {};
    this.keyMap.ArrowLeft = () => this.handleKeydownArrows(-DEFAULT_MOVEMENT_UNIT, 0);
    this.keyMap.ArrowRight = () => this.handleKeydownArrows(DEFAULT_MOVEMENT_UNIT, 0);
    this.keyMap.ArrowDown = () => this.handleKeydownArrows(0, DEFAULT_MOVEMENT_UNIT);
    this.keyMap.ArrowUp = () => this.handleKeydownArrows(0, -DEFAULT_MOVEMENT_UNIT);
    this.keyMap.Delete = () => this.handleKeydownDelete();
    this.keyMap.Escape = () => this.handleKeydownEscape();
    this.keyMap.F2 = () => this.handleKeydownF2();
    this.keyMap["^x"] = () => this.cut();
    this.keyMap["^c"] = () => this.copy();
    this.keyMap["^v"] = () => this.paste();
    this.keyMap["^z"] = () => this.undoAction();
    this.keyMap["^y"] = () => this.redoAction();
    this.keyMap["^a"] = () => this.selectAllObjects();
    this.keyMap["^A"] = () => this.selectAllObjects();
    this._appendMode = {
      mode: null,
      data: null,
      dragged: false
    };
    this._size = {
      width: 0,
      height: 0
    };
    this._wrapperSize = {
      width: 0,
      height: 0
    };
    this._svgSize = {
      width: 0,
      height: 0
    };
    this._appendingObject = null;
    this.emitter = createEmitter(this);
    const { div, svg } = createFlowchartTemplate(this.uuid);
    this.div = div;
    div.addEventListener("keydown", (ev) => {
      if (this._editMode || this._readonly) {
        this._logger.debug("InnoFlowchart.handleKeydown()", "Cancel because of editMode or readonly mode");
        return;
      }
      const keyName = `${ev.ctrlKey ? "^" : ""}${ev.key}`;
      if (keyName in this.keyMap) {
        this.keyMap[keyName](ev);
        ev.preventDefault();
      }
    });
    this.addCoreElement(div);
    contextElement.appendChild(div);
    this._initD3Elements(div, svg, width, height);
    this._containerInterface = new InterfaceInstance({
      releaseAllObjects: () => this.releaseAllObjects(),
      addRenderObj: (data) => this.add(data),
      removeObject: (obj) => this.remove(obj),
      initDrag: (dragEvent) => this._initDrag(dragEvent),
      terminateDrag: (dragEvent) => this._terminateDrag(dragEvent),
      isDragging: () => this._isDragging,
      changeObjRender: (obj, render) => this._changeObjRender(obj, render),
      adjDragCallback: (data, oldPoints, newPoints) => this._adjDragCallbackHandler(data, oldPoints, newPoints),
      editTextCallback: (data, oldText, newText) => this._editTextCallbackHandler(data, oldText, newText),
      editTextModeCallback: (data) => this._editTextModeCallback(data),
      renderCallback: (obj) => this._renderCallBack(obj),
      observerCallback: (arg) => this._observerCallback(arg),
      selectCallback: (obj, userInteraction, typeClick) => this._selectCallbackHandler(obj, userInteraction, typeClick),
      releaseCallback: (obj, userInteraction) => this._releaseCallbackHandler(obj, userInteraction),
      setEditMode: (flag) => this._editMode = flag,
      getLogger: () => this._logger,
      getSvg: () => this.d3Svg,
      getObjectOrNull: (id2) => this.getObjectOrNull(id2),
      getSelectNodeOnHover: () => this._selectNodeOnHover,
      getTooltipHidden: () => this._tooltipHidden,
      getReadOnly: () => this._readonly,
      isAppending: () => this._appendMode.mode === "append",
      getUUID: () => this.uuid
    });
    this._seqMng = new SequenceManager(this._containerInterface);
    this._objectManager = new ObjectManager();
    this._actionController = new ActionController(ACTION_LIMIT);
    this._moveHandler = new MoveHandler(this._actionController, this._objectManager, this._containerInterface);
    this._resizeHandler = new ResizeHandler(this._actionController, this._objectManager, this._containerInterface);
    this._renderManager = new RenderManager();
    this._objMouseHandler = new ObjectMouseHandler(this._containerInterface);
    this.theme = __spreadValues({}, DefaultTheme);
    this.defaultRule = defaultRule;
    this.zoomTo(1);
    this.render();
  }
  get readonly() {
    return this._readonly;
  }
  get simpleConnectingMode() {
    return this._simpleConnectingMode;
  }
  get editMode() {
    return this._editMode;
  }
  get gridMode() {
    return this._gridMode;
  }
  get tooltipHidden() {
    return this._tooltipHidden;
  }
  get moveScreenOnSelect() {
    return this._moveScreenOnSelect;
  }
  get selectNodeOnHover() {
    return this._selectNodeOnHover;
  }
  get wheelZoom() {
    return this._wheelZoom;
  }
  get traceMode() {
    return this._traceMode;
  }
  get singleSelection() {
    return this._singleSelection;
  }
  set readonly(boolean) {
    this._readonly = boolean;
    this.classedOnSvg(boolean, "readonly");
    this._logger.info(`readonly property is changed to '${boolean}'`);
  }
  set simpleConnectingMode(boolean) {
    this._simpleConnectingMode = boolean;
    this.classedOnSvg(boolean, "simple");
    this._logger.info(`simpleConnectingMode property is changed to '${boolean}'`);
  }
  set editMode(boolean) {
    this._editMode = boolean;
    this.classedOnSvg(boolean, "edit-mode");
    this._logger.info(`editMode property is changed to '${boolean}'`);
  }
  set gridMode(boolean) {
    this._gridMode = boolean;
    this.d3Grid.attr("visibility", this._gridMode ? "visible" : "hidden");
    this.classedOnSvg(boolean, "grid");
    this._logger.info(`gridMode property is changed to '${boolean}'`);
    this.render();
  }
  set tooltipHidden(boolean) {
    this._tooltipHidden = boolean;
    this.classedOnSvg(boolean, "tooltip-hidden");
    this._logger.info(`tooltipHidden property is changed to '${boolean}'`);
  }
  set moveScreenOnSelect(boolean) {
    this._moveScreenOnSelect = boolean;
    this.classedOnSvg(boolean, "move-screen-on-select");
    this._logger.info(`moveScreenOnSelect property is changed to '${boolean}'`);
  }
  set selectNodeOnHover(boolean) {
    this._selectNodeOnHover = boolean;
    this.classedOnSvg(boolean, "select-node-on-hover");
    this._logger.info(`selectNodeOnHover property is changed to '${boolean}'`);
  }
  set wheelZoom(boolean) {
    this._wheelZoom = boolean;
    this.classedOnSvg(boolean, "wheel-zoom");
    this._logger.info(`wheelZoom property is changed to '${boolean}'`);
  }
  set traceMode(boolean) {
    this._logger.logLevel = boolean ? "INFO" : "ERROR";
    this._traceMode = boolean;
    this.classedOnSvg(boolean, "trace");
    this._logger.info(`traceMode property is changed to '${boolean}'`);
  }
  set singleSelection(boolean) {
    this._singleSelection = boolean;
    this.classedOnSvg(boolean, "single-select");
    this._logger.info(`singleSelection property is changed to '${boolean}'`);
  }
  _initD3Elements(div, svg, width, height) {
    this._logger = createLogger(this.uuid);
    div.addEventListener("contextmenu", (e) => e.preventDefault());
    const w = isNaN(width) ? width : `${width}px`;
    const h = isNaN(height) ? height : `${height}px`;
    this.d3Div = select_default2(div).style("width", w).style("height", h);
    this.d3Svg = select_default2(svg).on("mousemove", (ev) => this._mouseMoveOnSheetHandler(ev)).on("click", (ev) => this._clickOnSheetHandler(ev)).call(drag_default().filter(() => this._editMode === false).on("start", (ev) => this._dragController(ev)).on("drag", (ev) => this._dragController(ev)).on("end", (ev) => this._dragController(ev)));
    this.d3Grid = this.d3Svg.append("g").attr("transform", "translate(-1, -1)").attr("class", "grid").append("rect").attr("width", "100%").attr("height", "100%").attr("fill", `url(#${this.uuid}_grid)`).attr("visibility", "hidden");
    this.d3Container = this.d3Svg.append("g").attr("class", "container");
    const zoom = zoom_default2().filter((ev) => {
      return this._wheelZoom && ev.type === "wheel" && ev.ctrlKey;
    }).wheelDelta((ev) => -ev.deltaY * (ev.deltaMode === 1 ? 0.05 : ev.deltaMode ? 1 : 2e-3)).scaleExtent([MIN_ZOOM, MAX_ZOOM]).on("zoom", (ev) => this.zoomTo(ev.transform.k));
    this.d3Div.call(zoom).on("dblclick.zoom", null);
    this.selection = {
      rect: null,
      startX: 0,
      startY: 0
    };
  }
  $emit(event, ...args) {
    this.emitter.emit(event, args);
  }
  $on(event, callback) {
    return this.emitter.on(event, callback);
  }
  $off(event, callback) {
    return this.emitter.off(event, callback);
  }
  moveWrapper(func) {
    try {
      this._moveHandler.moveStartHandler();
      func();
      this._updateNegativePos();
    } finally {
      this._moveHandler.moveEndHandler();
      this.refreshSvgSize();
    }
  }
  addSvgDefs(defsElement) {
    this.d3Svg.node().appendChild(defsElement);
  }
  addLinearGradientDefs(id2, rotate, offsets, colors) {
    if (typeof offsets.length !== "number" || typeof colors.length !== "number")
      throw new Error("it must be an array type both offsets and colors!");
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    linearGradient.id = id2;
    linearGradient.setAttribute("gradientTransform", `rotate(${rotate})`);
    import_lodash.default.zip(offsets, colors).forEach(([offset, color2]) => {
      const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop.setAttribute("offset", offset);
      stop.setAttribute("stop-color", color2);
      linearGradient.appendChild(stop);
    });
    defs.appendChild(linearGradient);
    this.addSvgDefs(defs);
  }
  add(data, zIndex = void 0) {
    switch (data.type) {
      case void 0:
        this._logger.error("InnoFlowchart.add()", "undefined type prop");
        throw new Error("Object that you added needs 'type' property! (node or connection)");
      case "group":
        data.render = "group";
        break;
      default:
        break;
    }
    if (data.render === void 0) {
      this._logger.error("InnoFlowchart.add()", "undefined render prop");
      throw new Error("Object that you added needs 'render' property!");
    }
    if (data.id === void 0 || data.id === null) {
      data.id = this._seqMng.getObjSeqId();
    } else {
      switch (typeof data.id) {
        case "number":
        case "string":
          break;
        default:
          this._logger.error(
            "InnoFlowchart.add()",
            "Not allowed id type (USE STRING OR NUMBER)"
          );
          throw new Error("Data's id is only allowed string or nubmer type!");
      }
    }
    if (this._objectManager.findOrNull(data.id) !== null) {
      this._logger.error("InnoFlowchart.add()", "duplicated object id");
      throw new Error(`Object's id is already created! (${data.id})`);
    }
    this.defaultRule(data);
    combineStyle(data, this.theme);
    let obj = null;
    const rendererConstructor = this._renderManager.getRenderConstructor(
      data.type,
      data.render
    );
    const renderer = new rendererConstructor(data, this._containerInterface);
    switch (data.type) {
      case "connection":
        obj = new Connection(data, renderer, this._containerInterface);
        break;
      case "node":
        obj = new Node(data, renderer, this._containerInterface);
        break;
      case "group":
        obj = new Group(data, renderer, this._containerInterface);
        break;
      default:
        throw Error(`unkown data type '${data.type}'`);
    }
    this._objectManager.add(obj);
    obj.create();
    this.refreshSvgSize();
    if (zIndex !== void 0) {
      this.d3Container.node().insertBefore(obj.g.node(), this._getChildElementOrNull(zIndex));
    }
    if (!data.temp) {
      this._addObjectEvent(obj);
      this.emitChangedStatus();
      this.$emit(EVENT_TYPE.NEW_OBJECT, obj);
      this._logger.debug("InnoFlowchart.add()", `created obj id is '${obj.id}'`);
    } else {
      this._logger.debug(
        "InnoFlowchart.add()",
        `created temp obj id is '${obj.id}'`
      );
    }
    return obj;
  }
  remove(object) {
    if (object === null || object === void 0) {
      this._logger.error(
        "InnoFlowchart.remove()",
        "Object could not be null or undefined to remove!"
      );
      throw new Error("Object could not be null or undefined to remove!");
    }
    let obj = null;
    switch (typeof object) {
      case "string":
      case "number":
        obj = this.getObjectOrNull(object);
        break;
      case "object":
        obj = this.getObjectOrNull(object.id);
        break;
      default:
        throw Error(`unkown data type '${typeof object}'`);
    }
    if (obj != null) {
      obj.destroy();
      this.emitChangedStatus();
      this._objectManager.remove(obj);
      this.refreshSvgSize();
      this._objMouseHandler.removeTooltipObj();
      if (!obj.isTempObj) {
        this.$emit(EVENT_TYPE.REMOVE_OBJECT, obj);
        this._logger.debug(
          "InnoFlowchart.remove()",
          `Removed obj id is '${obj.id}'`
        );
      } else {
        this._logger.debug(
          "InnoFlowchart.remove()",
          `Removed temp obj id is '${obj.id}'`
        );
      }
    } else {
      throw new Error("There is no such as object you received in this flowchart!");
    }
  }
  zoomTo(scale) {
    if (scale < MIN_ZOOM || scale > MAX_ZOOM) {
      return;
    }
    this._logger.info("InnoFlowchart.zoomTo", `scale is changed to ${scale}`);
    this.d3Div.node().__zoom.k = scale;
    this.d3Container.attr("transform", `scale(${scale})`);
    const gridScale = `${1 / scale * 100}%`;
    this.d3Grid.attr("transform", `scale(${scale})`).attr("width", gridScale).attr("height", gridScale);
    this.updateSvgSize();
  }
  recordNewObjectsAction(...objects) {
    this._actionController.addAction(new AddCommand(cloneObjDataList(objects), this._containerInterface));
    this._updateNegativePos();
  }
  emitChangedStatus() {
    if (!this._isChanged) {
      this._isChanged = true;
      this.classedOnSvg(true, "changed");
    }
  }
  getScale() {
    return this.getTransform().k;
  }
  getSelectedConnections(sorted = true) {
    const connections = [];
    for (const con of this._objectManager.getConnectionIterator())
      con.isSelected && connections.push(con);
    sorted && connections.sort((a, b) => a.clickedSeq - b.clickedSeq);
    return connections;
  }
  _editObjProp(changedInfoList) {
    changedInfoList.forEach((info) => {
      for (const prop of info.propList) {
        if (prop.oldValue === void 0) {
          prop.oldValue = info.objData[prop.key];
        }
        info.objData[prop.key] = prop.newValue;
      }
    });
    this._actionController.addAction(new EditCommand(changedInfoList, this._containerInterface));
  }
  editSelectedObjProp(key, newValue) {
    const list = [];
    for (const obj of this._objectManager.getSelectedObjIterator()) {
      if (obj.isSelected) {
        list.push(new ChangedInfo(obj.data, [
          {
            key,
            newValue
          }
        ]));
      }
    }
    this._editObjProp(list);
  }
  append(mode, data) {
    if (this._readonly) {
      this._logger.info(
        "InnoFlowchart.append()",
        "Preventing append (readonly: true)"
      );
      return;
    }
    if (this._validateAppendMode({ mode, data })) {
      this.clearAppendMode();
      this._appendMode.mode = mode;
      this._appendMode.data = data;
      this._logger.info(
        "InnoFlowchart.append()",
        "Append Mode",
        this._appendMode.mode
      );
    } else {
      this._logger.error("InnoFlowchart.append()", "Invalid append info!");
      throw new Error("Invalid append info!");
    }
  }
  resetScreen() {
    const div = this.d3Div.node();
    div.scrollLeft = 0;
    div.scrollTop = 0;
  }
  getWrapperSize() {
    const element = this.d3Div.node();
    if (!element)
      throw new Error(`there is no wrapper div`);
    const { width, height } = element.getBoundingClientRect();
    return { width, height };
  }
  getTransform() {
    return transform(this.d3Div.node());
  }
  updateMinimumSvgSize() {
    const size = this.getWrapperSize();
    this._wrapperSize.width = parseInt(size.width);
    this._wrapperSize.height = parseInt(size.height);
    this.refreshSvgSize();
  }
  updateSvgSize() {
    const scale = this.getTransform().k;
    const scaledWidth = Math.max(
      this._wrapperSize.width,
      this._svgSize.width * scale
    );
    const scaledHeight = Math.max(
      this._wrapperSize.height,
      this._svgSize.height * scale
    );
    this.d3Svg.attr("width", scaledWidth).attr("height", scaledHeight);
  }
  refreshSvgSize() {
    const rect = {
      maxX: 0,
      maxY: 0
    };
    for (const obj of this._objectManager.getAllObjIterator()) {
      rect.maxX = Math.max(rect.maxX, obj.endX);
      rect.maxY = Math.max(rect.maxY, obj.endY);
    }
    rect.maxX += this._wrapperSize.width / 2;
    rect.maxY += this._wrapperSize.height / 2;
    rect.maxX = Math.max(this._wrapperSize.width, rect.maxX);
    rect.maxY = Math.max(this._wrapperSize.height, rect.maxY);
    this._svgSize.width = rect.maxX;
    this._svgSize.height = rect.maxY;
    this._logger.info("InnoFlowchart.refreshSvgSize()", rect);
    this.updateSvgSize();
  }
  render() {
    this.updateMinimumSvgSize();
  }
  getObjectList() {
    const objList = [];
    for (const obj of this._objectManager.getAllObjIterator()) {
      !obj.isTempObj && objList.push(obj);
    }
    return objList;
  }
  clearActionList() {
    this._logger.info("InnoFlowchart.clearActionList()");
    this._actionController.clear();
  }
  undoAction() {
    if (this._readonly) {
      this._logger.info("InnoFlowchart.undoAction()", "Preventing undo (readonly: true)");
      return;
    }
    const undoCommand = this._actionController.undo();
    this._logger.debug("InnoFlowchart.undoAction()", undoCommand);
    if (undoCommand !== null) {
      this.refreshSvgSize();
      this.$emit(EVENT_TYPE.UNDO, undoCommand);
    }
  }
  redoAction() {
    if (this._readonly) {
      this._logger.info("InnoFlowchart.redoAction()", "Preventing redo (readonly: true)");
      return;
    }
    const redoCommand = this._actionController.redo();
    this._logger.debug("InnoFlowchart.redoAction()", redoCommand);
    if (redoCommand !== null) {
      this.refreshSvgSize();
      this.$emit(EVENT_TYPE.REDO, redoCommand);
    }
  }
  _objectClickHandler(obj, event) {
    this._logger.info(`InnoFlowchart.event.emit.${event}`, obj);
    obj.select(true);
    this.$emit(event, obj);
  }
  _commonObserveCallback(arg) {
    switch (arg.key) {
      case "id": {
        const obj = this.getObjectOrNull(arg.oldValue);
        if (obj !== null)
          this._objectManager.reassignId(obj, arg.oldValue, arg.newValue);
        break;
      }
      case "isSelected": {
        if (arg.newValue)
          arg.renderObj.clickedSeq = this._seqMng.increaseClickSeq();
        break;
      }
      default:
        break;
    }
  }
  _connectionObserveCallback(arg) {
    const obj = arg.renderObj;
    switch (arg.key) {
      case "connection.sourceObjId":
        if (arg.oldValue !== null && arg.newValue === null)
          this.$emit(EVENT_TYPE.DISCONNECT_NODE, obj, arg.key);
        break;
      case "connection.sourcePos":
        if (obj.sourceObjId !== null)
          this.$emit(EVENT_TYPE.CONNECT_NODE, obj, arg.key);
        break;
      case "connection.destinationObjId":
        if (arg.oldValue !== null && arg.newValue === null)
          this.$emit(EVENT_TYPE.DISCONNECT_NODE, obj, arg.key);
        break;
      case "connection.destinationPos":
        if (obj.destinationObjId !== null)
          this.$emit(EVENT_TYPE.CONNECT_NODE, obj, arg.key);
        break;
      default:
        break;
    }
  }
  _observerCallback(arg) {
    if (arg.newValue === arg.oldValue) {
      return;
    }
    if (!this._isChanged && !NOT_CHANGING_PROPERTY_SET.has(arg.key))
      this.emitChangedStatus();
    this._commonObserveCallback(arg);
    arg.renderObj.type === "connection" && this._connectionObserveCallback(arg);
  }
  _selectCallbackHandler(obj, userInteraction, typeClick) {
    const parent = this._objectManager.getParentGroupOrNull(obj);
    if (userInteraction) {
      if (this._moveScreenOnSelect && obj.type === "node") {
        this.moveScreenByObject(obj);
      }
      if (this._singleSelection) {
        for (const sobj of this._objectManager.getSelectedObjIterator()) {
          if (sobj !== obj) {
            sobj.release();
          }
        }
      }
    }
    if (parent !== null) {
      parent.select(false, typeClick);
    }
    this._logger.info("InnoFlowchart._selectCallbackHandler()", obj);
    this.$emit(EVENT_TYPE.SELECT_OBJECT, obj);
  }
  _releaseCallbackHandler(obj, userInteraction) {
    this.$emit(EVENT_TYPE.RELEASE_OBJECT, obj);
  }
  _editTextModeCallback() {
    this._objMouseHandler.removeTooltipObj();
  }
  _getXYOnSheet(x, y) {
    const scale = 1 / this.getTransform().k;
    return {
      x: x * scale,
      y: y * scale
    };
  }
  _validateAppendMode({ mode, data }) {
    switch (mode) {
      case "append": {
        return data.type === "node" || data.type === "connection";
      }
      case "paste": {
        return data.objects.length > 0;
      }
      default:
        return false;
    }
  }
  _getProperlyPointsToCreate(data) {
    const points = data["connection.points"];
    loop:
      for (; ; ) {
        for (const con of this._objectManager.getConnectionIterator()) {
          if (con.comparePoints(points)) {
            points.forEach((pt) => {
              pt.x += 10;
              pt.y += 10;
            });
            continue loop;
          }
        }
        return points;
      }
  }
  _getProperlyNodePosToCreate(data) {
    let x = data["node.x"];
    let y = data["node.y"];
    loop:
      for (; ; ) {
        for (const node of this._objectManager.getNodeIterator()) {
          if (node.x === x && node.y === y) {
            x += 10;
            y += 10;
            continue loop;
          }
        }
        return { "node.x": x, "node.y": y };
      }
  }
  _initAppendObj() {
    switch (this._appendMode.data.type) {
      case "node": {
        this._appendingObject = this.add(__spreadProps(__spreadValues({}, this._appendMode.data), {
          temp: true,
          id: "appending_temp_obj",
          opacity: 0.5
        }));
        break;
      }
      default:
        break;
    }
  }
  _mouseMoveOnSheetHandler(ev) {
    const x = ev.offsetX;
    const y = ev.offsetY;
    if (!this._validateAppendMode(this._appendMode))
      return;
    switch (this._appendMode.mode) {
      case "append":
        if (this._appendingObject === null)
          this._initAppendObj();
        else if (this._appendingObject.type === "node")
          this._moveAppendingNode(x, y);
        break;
      default:
        break;
    }
    this.d3Div.node().focus();
  }
  _setZIndexOnSelected(command) {
    const dataList = [];
    const newValue = command === "front" ? this._objectManager.getObjCount() : 0;
    this._logger.info("InnoFlowchart.setZIndex()", `new z-index = ${newValue}`);
    for (const obj of this.getSelectedObjects()) {
      dataList.push({
        objId: obj.id,
        oldValue: obj.zIndex + (command === "back" ? 1 : 0),
        newValue
      });
      obj.zIndex = newValue;
    }
    this.emitChangedStatus();
    this._actionController.addAction(new ZIndexCommand(dataList, this._containerInterface));
  }
  bringToFront() {
    this._logger.info("InnoFlowchart.bringToFront()");
    this._setZIndexOnSelected("front");
  }
  bringToBack() {
    this._logger.info("InnoFlowchart.bringToBack()");
    this._setZIndexOnSelected("back");
  }
  _moveSelectedObjects(x, y) {
    for (const obj of this._objectManager.getSelectedObjIterator()) {
      obj.moveTo(x, y);
    }
  }
  getObjectOrNull(id2) {
    return this._objectManager.findOrNull(id2);
  }
  selectObjectById(id2) {
    const obj = this.getObjectOrNull(id2);
    if (obj != null) {
      obj.select();
    } else {
      throw new Error(`Not found obj id '${id2}'`);
    }
  }
  _addCommonMouseAction(obj) {
    this._objMouseHandler.addMouseAction(obj);
  }
  _isSingleSelection(Key) {
    return this._singleSelection || !Key;
  }
  _addClickActionOnNode(node) {
    node.g.on("click", (ev) => {
      if (this._editMode)
        return;
      if (this._isSingleSelection(ev.ctrlKey))
        this.releaseAllObjects(node);
      this._objectClickHandler(node, EVENT_TYPE.CLICK_NODE);
    }).on("dblclick", () => {
      if (node.data.editable && this._readonly === false)
        node.renderer.editLabelMode();
      this._logger.info("InnoFlowchart.event.emit.dblClickNode", node);
      this.$emit(EVENT_TYPE.DOUBLE_CLICK_NODE, node);
    });
  }
  classedOnSvg(flag, ...classes) {
    classes.forEach((cls) => this.d3Svg.classed(cls, flag));
    this.$emit(EVENT_TYPE.CHANGE_CLASS, this.d3Svg.attr("class"));
  }
  _addDragActionOnNode(node) {
    let moved = false;
    let lastX = 0;
    let lastY = 0;
    node.g.call(drag_default().filter(() => this._editMode === false).on("start", (ev) => {
      if (this._isSingleSelection(ev.sourceEvent.ctrlKey) && !node.isSelected) {
        this.releaseAllObjects(node);
      }
      moved = false;
      lastX = ev.x;
      lastY = ev.y;
      node.select(false);
    }).on("drag", (ev) => {
      if (this._readonly) {
        return;
      }
      const nextX = ev.x - node.width / 2;
      const nextY = ev.y - node.height / 2;
      const diffX = nextX - node.x;
      const diffY = nextY - node.y;
      if (!moved && Math.abs(lastX - ev.x) + Math.abs(lastY - ev.y) > 8) {
        moved = true;
        this._moveHandler.moveStartHandler();
        this._initDrag("drag-node-move");
      }
      moved && this._moveSelectedObjects(diffX, diffY);
    }).on("end", () => {
      if (this._moveScreenOnSelect && node.type === "node")
        this.moveScreenByObject(node);
      this._moveHandler.moveEndHandler();
      this._terminateDrag("drag-node-move");
    }));
  }
  _addDragActionOnConnector(node) {
    for (const connector of node.renderer.connectors) {
      const pos = getPosition(connector.attr("class"));
      connector.call(drag_default().filter(() => this._readonly === false).on("start", (ev) => {
        const toX = node.x + node.width / 2 + ev.x;
        const toY = node.y + node.height / 2 + ev.y;
        const render = this._appendMode.data.render;
        const posXY = node.getPositionXY(pos);
        this._initDrag("drag-node-connector");
        this._createAppendingConnection(posXY.x, posXY.y, toX, toY, {
          type: "connection",
          render,
          "connection.sourceObjId": node.id,
          "connection.sourcePos": pos
        });
      }).on("drag", (ev) => {
        if (this._appendingObject === null) {
          return;
        }
        const x = node.x + node.width / 2 + ev.x;
        const y = node.y + node.height / 2 + ev.y;
        this._appendMode.dragged = true;
        this._moveAppendingConnection(x, y);
      }).on("end", () => {
        if (this._appendingObject === null) {
          return;
        }
        this._endAppendingConnection();
        this._terminateDrag("drag-node-connector");
      }));
    }
  }
  _addNodeEvent(node) {
    this._addClickActionOnNode(node);
    this._addDragActionOnNode(node);
    this._addDragActionOnConnector(node);
    this._resizeHandler.addDragActionOnResizer(node);
  }
  _addClickActionOnConnection(con) {
    con.g.on("click", (ev) => {
      if (this._isSingleSelection(ev.ctrlKey)) {
        this.releaseAllObjects(con);
      }
      this._objectClickHandler(con, "clickConnection");
    });
    con.g.on("dblclick", () => {
      if (con.data.editable && this._readonly === false) {
        con.renderer.editLabelMode();
      }
      this._logger.info("InnoFlowchart.event.emit.dblClickConnection", con);
      this.$emit(EVENT_TYPE.DOUBLE_CLICK_CONNECTION, con);
    });
  }
  _addDragActionOnConnection(con) {
    let x = 0;
    let y = 0;
    let moved = false;
    con.g.call(drag_default().filter(() => this._editMode === false).on("start", (ev) => {
      if (this._isSingleSelection(ev.sourceEvent.ctrlKey) && !con.isSelected) {
        this.releaseAllObjects(con);
      }
      x = ev.x;
      y = ev.y;
      moved = false;
      con.select();
    }).on("drag", (ev) => {
      if (this._readonly) {
        return;
      }
      const diffX = ev.x - x;
      const diffY = ev.y - y;
      if (!moved && Math.abs(diffX) + Math.abs(diffY) > 5) {
        moved = true;
        this._moveHandler.moveStartHandler();
        this._initDrag("drag-con-move");
      }
      if (!moved) {
        return;
      }
      if (con.sourceObjId !== null) {
        const obj = this.getObjectOrNull(con.sourceObjId);
        if (obj === null || obj.isSelected === false) {
          con.sourceObjId = null;
        }
      }
      if (con.destinationObjId !== null) {
        const obj = this.getObjectOrNull(con.destinationObjId);
        if (obj === null || obj.isSelected === false) {
          con.destinationObjId = null;
        }
      }
      this._moveSelectedObjects(diffX, diffY);
      x = ev.x;
      y = ev.y;
    }).on("end", () => {
      this._moveHandler.moveEndHandler();
      this._terminateDrag("drag-con-move");
    }));
  }
  _addDragActionOnConnectionConnector(con) {
    const dragCreator = (objProp, posProp, ptId) => {
      return drag_default().filter(() => this._editMode === false && this._readonly === false).on("start", () => {
        this._moveHandler.moveStartHandler();
        this._initDrag("drag-con-connector");
      }).on("drag", (ev) => {
        const detecting = this._getNodeAndPosUnderXY(ev.x, ev.y, this._simpleConnectingMode);
        const point = ptId === "start" ? con.firstPoint : con.endPoint;
        if (detecting.node === null) {
          con[objProp] = null;
          con[posProp] = null;
          point.x = ev.x;
          point.y = ev.y;
        } else {
          con[objProp] = detecting.node.id;
          if (this._simpleConnectingMode)
            this._setShortestPosition(con);
          else
            con[posProp] = detecting.pos;
        }
        if (con.renderType === "elbow")
          con.renderer.refreshAdjustList();
        con.render();
      }).on("end", () => {
        this._moveHandler.moveEndHandler();
        this._terminateDrag("drag-con-connector");
      });
    };
    con.renderer.objects.sourceConnector.call(dragCreator("sourceObjId", "sourcePos", "start"));
    con.renderer.objects.destinationConnector.call(dragCreator("destinationObjId", "destinationPos", "end"));
  }
  _addConnectionEvent(con) {
    this._addClickActionOnConnection(con);
    this._addDragActionOnConnection(con);
    this._addDragActionOnConnectionConnector(con);
  }
  _addGroupEvent(group) {
    let moved = false;
    let startX = 0;
    let stattY = 0;
    let lastX = 0;
    let lastY = 0;
    group.g.call(drag_default().filter(() => this._editMode === false && this._readonly === false).on("start", (ev) => {
      if (this._isSingleSelection(ev.sourceEvent.ctrlKey) && !group.isSelected) {
        this.releaseAllObjects(group);
      }
      moved = false;
      startX = ev.x;
      stattY = ev.y;
      lastX = ev.x;
      lastY = ev.y;
      group.select();
    }).on("drag", (ev) => {
      if (!moved && Math.abs(startX - ev.x) + Math.abs(stattY - ev.y) > 8) {
        moved = true;
        this._moveHandler.moveStartHandler();
        this._initDrag("drag-group-move");
      }
      if (moved) {
        this._moveSelectedObjects(ev.x - lastX, ev.y - lastY);
        lastX = ev.x;
        lastY = ev.y;
      }
    }).on("end", () => {
      this._moveHandler.moveEndHandler();
      this._terminateDrag("drag-group-move");
    }));
  }
  _addObjectEvent(obj) {
    this._addCommonMouseAction(obj);
    switch (obj.type) {
      case "node":
        this._addNodeEvent(obj);
        obj.render();
        break;
      case "connection":
        this._addConnectionEvent(obj);
        break;
      case "group":
        this._addGroupEvent(obj);
        break;
      default:
        throw new Error(`Unknown data type '${obj.type}'`);
    }
  }
  _initDrag(dragEvent) {
    this._isDragging = true;
    this._appendMode.dragged = false;
    this._objMouseHandler.removeTooltipObj();
    this.classedOnSvg(true, dragEvent);
  }
  _terminateDrag(dragEvent) {
    this._isDragging = false;
    this._appendMode.dragged = false;
    this.classedOnSvg(false, dragEvent);
    this.clearAppendMode();
    this._updateNegativePos();
    this.refreshSvgSize();
    if (this._simpleConnectingMode)
      this.updateShortestNodes();
  }
  _updateNegativePos() {
    const minXY = {
      x: 0,
      y: 0,
      objX: null,
      objY: null
    };
    for (const obj of this._objectManager.getAllObjIterator()) {
      if (obj.startX < minXY.x) {
        minXY.x = obj.startX;
        minXY.objX = obj;
      }
      if (obj.startY < minXY.y) {
        minXY.y = obj.startY;
        minXY.objY = obj;
      }
    }
    if (minXY.x < 0 || minXY.y < 0) {
      const lastCommand = this._actionController.popLastUndoAction();
      const changedInfoList = [];
      const x = minXY.x < 0 ? -minXY.x : 0;
      const y = minXY.y < 0 ? -minXY.y : 0;
      for (const node of this._objectManager.getNodeIterator()) {
        const changedInfo = new ChangedInfo(node.data, []);
        changedInfo.addMoveOldValues();
        node.moveTo(x, y);
        changedInfo.updateMoveNewValues();
        changedInfoList.push(changedInfo);
      }
      for (const con of this._objectManager.getConnectionIterator()) {
        if (con.sourceObj === null || con.destinationObj === null) {
          const changedInfo = new ChangedInfo(con.data, []);
          changedInfo.addMoveOldValues();
          con.moveTo(x, y);
          changedInfo.updateMoveNewValues();
          changedInfoList.push(changedInfo);
        }
      }
      for (const group of this._objectManager.getGroupIterator())
        group.render();
      if (lastCommand) {
        lastCommand.unshift(new EditCommand(changedInfoList, this._containerInterface));
        this._actionController.addAction(...lastCommand);
      }
      this.refreshSvgSize();
    }
  }
  getCountOfSelectedObject() {
    let cnt = 0;
    for (const obj of this._objectManager.getSelectedObjIterator()) {
      if (this._objectManager.getParentGroupOrNull(obj) == null)
        obj.isSelected && ++cnt;
    }
    return cnt;
  }
  selectAllObjects() {
    if (this._singleSelection) {
      return;
    }
    for (const obj of this._objectManager.getAllObjIterator()) {
      obj.type !== "group" && obj.select(true);
    }
  }
  releaseAllObjects(clickObj) {
    for (const obj of this._objectManager.getAllObjIterator())
      clickObj !== obj && obj.release(true);
  }
  align(direction, nodeList) {
    const tmp = nodeList || this.getSelectedNodes();
    if (tmp.length <= 1) {
      return;
    }
    this._moveHandler.moveStartHandler();
    switch (direction) {
      case "left": {
        const x = tmp[0].x;
        tmp.forEach((node) => node.x = x);
        break;
      }
      case "right": {
        const x = tmp[0].endX;
        tmp.forEach((node) => node.x = x - node.width);
        break;
      }
      case "center": {
        const x = tmp[0].centerX;
        tmp.forEach((node) => node.x = x - node.width / 2);
        break;
      }
      case "top": {
        const y = tmp[0].y;
        tmp.forEach((node) => node.y = y);
        break;
      }
      case "bottom": {
        const y = tmp[0].endY;
        tmp.forEach((node) => node.y = y - node.height);
        break;
      }
      case "middle": {
        const y = tmp[0].centerY;
        tmp.forEach((node) => node.y = y - node.height / 2);
        break;
      }
      default:
        throw new Error(`Unknown direct '${direction}'`);
    }
    this._moveHandler.moveEndHandler();
  }
  distribute(direction, nodeList) {
    const tmp = nodeList || this.getSelectedNodes(false);
    if (tmp.length <= 1) {
      return;
    }
    const prop = direction === "h" ? {
      start: "x",
      center: "centerX",
      end: "endX",
      size: "width"
    } : {
      start: "y",
      center: "centerY",
      end: "endY",
      size: "height"
    };
    tmp.sort((a, b) => a[prop.center] - b[prop.center]);
    this._moveHandler.moveStartHandler();
    const end = tmp.length - 1;
    const min2 = tmp[0][prop.end];
    const max2 = tmp[end][prop.start];
    const gap = tmp.slice(1, end).reduce((a, b) => a - b[prop.size], max2 - min2) / end;
    tmp.slice(1, end).reduce((a, node) => {
      node[prop.start] = a;
      return a + node[prop.size] + gap;
    }, min2 + gap);
    this._moveHandler.moveEndHandler();
  }
  getSelectedObjects(sorted = true) {
    const objList = Array.from(this._objectManager.getSelectedObjIterator());
    sorted && objList.sort((a, b) => a.clickedSeq - b.clickedSeq);
    return objList;
  }
  removeSelected() {
    const selectedObjList = this.getSelectedObjects(false);
    selectedObjList.forEach((obj) => this.remove(obj));
    this._actionController.addAction(new DeleteCommand(
      cloneObjDataList(selectedObjList),
      this._containerInterface
    ));
  }
  _getChildElementOrNull(index) {
    const container = this.d3Container.node();
    if (index >= container.children.length) {
      return null;
    }
    return container.children[index];
  }
  _getNodeAndPosUnderXY(curPosX, curPosY, simpleMode = false) {
    for (const node of this._objectManager.getNodeIterator()) {
      if (!node.isConnectorEnabled)
        continue;
      if (simpleMode) {
        const rect = new Rect(node.x, node.y, node.endX, node.endY);
        if (rect.isContained(curPosX, curPosY)) {
          return {
            node,
            pos: "left"
          };
        }
      } else {
        for (const pos of POSITION_LIST) {
          const xy = node.getPositionXY(pos);
          const rect = new Rect(
            xy.x - DETECTING_SIZE,
            xy.y - DETECTING_SIZE,
            xy.x + DETECTING_SIZE,
            xy.y + DETECTING_SIZE
          );
          if (rect.isContained(curPosX, curPosY)) {
            return {
              node,
              pos
            };
          }
        }
      }
    }
    return {
      node: null,
      pos: null
    };
  }
  moveSelectedNode(x, y) {
    for (const node of this._objectManager.getNodeIterator()) {
      if (node.isSelected) {
        node.x = parseInt((node.x + x) / 5) * 5;
        node.y = parseInt((node.y + y) / 5) * 5;
      }
    }
  }
  getSelectedNodes(sorted = true) {
    const nodes = [];
    for (const node of this._objectManager.getNodeIterator()) {
      node.isSelected && nodes.push(node);
    }
    sorted && nodes.sort((a, b) => a.clickedSeq - b.clickedSeq);
    return nodes;
  }
  getNodeConnections(node) {
    const nodeId = node.observeProperties ? node.id : node;
    const nodeObj = this.getObjectOrNull(nodeId);
    const connections = Array.from(this._objectManager.getConnectedConnections(nodeId));
    connections.sort((a, b) => {
      return getConnectedPositionId(nodeObj, a) - getConnectedPositionId(nodeObj, b);
    });
    return connections;
  }
  moveScreenByObject(obj) {
    const scale = this.getTransform().k;
    this.d3Div.node().scrollLeft = obj.centerX * scale - this._wrapperSize.width / 2;
    this.d3Div.node().scrollTop = obj.centerY * scale - this._wrapperSize.height / 2;
  }
  clearAppendMode() {
    this._appendingObject !== null && this.remove(this._appendingObject);
    this._appendMode.mode = null;
    this._appendMode.data = null;
    this._appendMode.dragged = false;
    this._appendingObject = null;
  }
  _getClipInfo() {
    const objects = [];
    for (const obj of this._objectManager.getSelectedObjIterator()) {
      if (obj.type === "group") {
        obj.data.objectList = Array.from(obj.objectSet);
      }
      objects.push(obj.data);
    }
    return {
      copyDateTime: new Date(),
      objects
    };
  }
  cut() {
    return __async(this, null, function* () {
      this._logger.info("InnoFlowchart.cut()");
      if (this.getSelectedObjects().length === 0)
        return;
      yield clipboard_default.saveData(JSON.stringify(this._getClipInfo()));
      this.removeSelected();
    });
  }
  copy() {
    return __async(this, null, function* () {
      this._logger.info("InnoFlowchart.copy()");
      yield clipboard_default.saveData(JSON.stringify(this._getClipInfo()));
    });
  }
  _createPastingObjs(clipData) {
    const tmpIdMap = /* @__PURE__ */ new Map();
    let cnt = 0;
    const newId2 = this._seqMng.getObjSeqId();
    const newObjs = [];
    clipData.objects.forEach((data) => {
      if (this.getObjectOrNull(data.id) !== null) {
        let id2 = newId2 + cnt;
        while (this.getObjectOrNull(id2) !== null || this.getObjectOrNull(id2) !== null && this.getObjectOrNull(id2).type === "connection" && (this.getObjectOrNull(id2).sourceObjId === id2 || this.getObjectOrNull(id2).destinationObjId === id2)) {
          id2 = newId2 + ++cnt;
          this._logger.info("id", id2);
        }
        ++cnt;
        tmpIdMap.set(data.id, id2);
      } else {
        tmpIdMap.set(data.id, data.id);
      }
    });
    clipData.objects.forEach((data) => {
      const id2 = tmpIdMap.get(data.id);
      switch (data.type) {
        case "node": {
          const pos = this._getProperlyNodePosToCreate(data);
          newObjs.push(this.add(__spreadProps(__spreadValues(__spreadValues({}, data), pos), {
            id: id2,
            isSelected: false,
            isHovered: false
          })));
          break;
        }
        case "connection": {
          const points = this._getProperlyPointsToCreate(data);
          if (data["connection.sourceObjId"] !== void 0 && data["connection.sourceObjId"] != null && tmpIdMap.has(data["connection.sourceObjId"])) {
            data["connection.sourceObjId"] = tmpIdMap.get(data["connection.sourceObjId"]);
          }
          if (data["connection.destinationObjId"] !== void 0 && data["connection.destinationObjId"] != null && tmpIdMap.has(data["connection.destinationObjId"])) {
            data["connection.destinationObjId"] = tmpIdMap.get(data["connection.destinationObjId"]);
          }
          newObjs.push(this.add(__spreadProps(__spreadValues({}, data), {
            id: id2,
            isSelected: false,
            points
          })));
          break;
        }
        case "group": {
          newObjs.push(this.add(__spreadProps(__spreadValues({}, data), {
            id: id2,
            isSelected: false,
            objectList: data.objectList.map((id3) => tmpIdMap.get(id3))
          })));
          break;
        }
        default:
          throw new Error(`Not supported type '${data.type}'`);
      }
    });
    this.moveScreenByObject(newObjs[0]);
    this.releaseAllObjects();
    newObjs.forEach((data) => {
      data.select();
    });
    this._actionController.addAction(new AddCommand(cloneObjDataList(newObjs), this._containerInterface));
  }
  paste() {
    return __async(this, null, function* () {
      if (this._editMode || this._appendMode.mode != null) {
        this._logger.debug(
          "InnoFlowchart.paste()",
          "Could not paste because of edit or append mode"
        );
        return;
      }
      this._logger.info("InnoFlowchart.paste()");
      this._createPastingObjs(JSON.parse(yield clipboard_default.loadData()));
    });
  }
  fitSizeOnText() {
    this._logger.info("InnoFlowchart.fitSizeOnText()");
    this._resizeHandler.resizeDragStart();
    this.getSelectedNodes(false).forEach((node) => {
      node.resizerEnabled && node.fitSizeOnText();
    });
    this._resizeHandler.resizeDragEnd();
  }
  _getShortestPositions(source, target) {
    const minPos = {
      dist: Number.MAX_VALUE,
      sourcePos: "",
      destinationPos: ""
    };
    for (const srcPos of POSITION_LIST) {
      for (const desPos of POSITION_LIST) {
        const srcXY = source.getPositionXY(srcPos);
        const desXY = target.getPositionXY(desPos);
        const dist = getDistance(srcXY, desXY);
        if (dist < minPos.dist) {
          minPos.dist = dist;
          minPos.sourcePos = srcPos;
          minPos.destinationPos = desPos;
        }
      }
    }
    return minPos;
  }
  _setShortestPosition(con) {
    const source = this.getObjectOrNull(con.sourceObjId);
    const destination = this.getObjectOrNull(con.destinationObjId);
    const oldSrcPos = con.sourcePos;
    const oldDesPos = con.destinationPos;
    if (source !== null && destination !== null) {
      const pos = this._getShortestPositions(source, destination);
      con.sourcePos = pos.sourcePos;
      con.destinationPos = pos.destinationPos;
    } else if (source === null)
      con.destinationPos = this._getPositionOnSimpleConnecting(con.firstPoint, destination);
    else
      con.sourcePos = this._getPositionOnSimpleConnecting(con.endPoint, source);
    if (oldSrcPos !== con.sourcePos || oldDesPos !== con.destinationPos) {
      const changedInfo = new ChangedInfo(con.data, [
        {
          key: "connection.sourcePos",
          oldValue: oldSrcPos,
          newValue: con.sourcePos
        },
        {
          key: "connection.destinationPos",
          oldValue: oldDesPos,
          newValue: con.destinationPos
        }
      ]);
      this._actionController.addAction(new EditCommand([changedInfo], this._containerInterface));
    }
  }
  updateShortestConnections() {
    this._logger.info("InnoFlowchart.updateShortestConnections()");
    for (const con of this._objectManager.getConnectionIterator()) {
      if (con.isSelected)
        this._setShortestPosition(con);
    }
  }
  updateShortestNodes() {
    const conList = [];
    for (const node of this._objectManager.getNodeIterator()) {
      if (node.isSelected === false) {
        continue;
      }
      for (const con of this._objectManager.getConnectedConnections(node.id)) {
        if (conList.indexOf(con) === -1) {
          conList.push(con);
        }
      }
    }
    conList.forEach((con) => this._setShortestPosition(con));
  }
  _getPositionOnSimpleConnecting(startPoint, targetNode) {
    const minDist = {
      dist: Number.MAX_VALUE,
      pos: null
    };
    for (const pos of POSITION_LIST) {
      const xy = targetNode.getPositionXY(pos);
      const dist = getDistance(xy, startPoint);
      if (dist < minDist.dist) {
        minDist.dist = dist;
        minDist.pos = pos;
      }
    }
    return minDist.pos;
  }
  selectType(render) {
    this._logger.info("InnoFlowchart.selectType()", render);
    const temp = render.toLowerCase();
    this.releaseAllObjects();
    for (const obj of this._objectManager.getAllObjIterator()) {
      obj.renderType === temp && obj.select(false, temp);
    }
  }
  clearChangedStatus() {
    if (this._isChanged) {
      this._isChanged = false;
      this.classedOnSvg(false, "changed");
    }
  }
  clear() {
    this.clearAppendMode();
    for (const obj of this._objectManager.getAllObjIterator()) {
      obj.destroy();
    }
    this._objectManager.clear();
    this._seqMng.clear();
    this._actionController.clear();
  }
  group(data = void 0) {
    const temp = data || {};
    temp.type = "group";
    temp.render = "group";
    temp.objectList = [];
    combineStyle(temp, this.theme);
    for (const obj of this._objectManager.getSelectedObjIterator()) {
      temp.objectList.push(obj.id);
    }
    const group = this.add(temp);
    group.resize();
    group.select();
    this._actionController.addAction(new AddCommand(cloneObjDataList([group]), this._containerInterface));
  }
  ungroup() {
    const tmpObjs = [];
    for (const obj of this._objectManager.getGroupIterator()) {
      if (obj.isSelected) {
        obj.clear();
        tmpObjs.push(obj);
        this.remove(obj);
      }
    }
    this._actionController.addAction(new DeleteCommand(cloneObjDataList(tmpObjs), this._containerInterface));
  }
  _moveAppendingNode(x, y) {
    const cursorXY = this._getXYOnSheet(x, y);
    this._appendingObject.x = cursorXY.x - this._appendingObject.width / 2;
    this._appendingObject.y = cursorXY.y - this._appendingObject.height / 2;
  }
  _getSvgXYOnDrag(x, y, scaled = false) {
    const xy = {
      x: x + this.d3Div.node().scrollLeft,
      y: y + this.d3Div.node().scrollTop
    };
    if (scaled) {
      const transform2 = this.getTransform();
      const scale = 1 / transform2.k;
      xy.x *= scale;
      xy.y *= scale;
    }
    return xy;
  }
  _dragStartHandlerOnSelection(ev) {
    const xy = this._getSvgXYOnDrag(ev.x, ev.y);
    this.selection.rect = this.d3Svg.append("rect").attr("class", "selection");
    this.selection.startX = xy.x;
    this.selection.startY = xy.y;
  }
  _dragHandlerOnSelection(ev) {
    const xy = this._getSvgXYOnDrag(ev.x, ev.y);
    const startX = Math.min(xy.x, this.selection.startX);
    const startY = Math.min(xy.y, this.selection.startY);
    const endX = Math.max(xy.x, this.selection.startX);
    const endY = Math.max(xy.y, this.selection.startY);
    this.selection.rect.attr("x", startX).attr("y", startY).attr("width", endX - startX).attr("height", endY - startY);
  }
  _dragEndHandlerOnSelection(ev) {
    try {
      const transFormData = this.getTransform();
      const xy = this._getSvgXYOnDrag(ev.x, ev.y);
      const startX = Math.min(xy.x, this.selection.startX);
      const startY = Math.min(xy.y, this.selection.startY);
      const endX = Math.max(xy.x, this.selection.startX);
      const endY = Math.max(xy.y, this.selection.startY);
      const compareWithinRect = (x1, x2, y1, y2) => {
        return x1 >= startX && x2 >= startX && x1 <= endX && x2 <= endX && y1 >= startY && y2 >= startY && y1 <= endY && y2 <= endY;
      };
      if (this._isSingleSelection(ev.sourceEvent.ctrlKey)) {
        this.releaseAllObjects();
      }
      for (const node of this._objectManager.getNodeIterator()) {
        const x1 = node.x * transFormData.k;
        const x2 = (node.x + node.width) * transFormData.k;
        const y1 = node.y * transFormData.k;
        const y2 = (node.y + node.height) * transFormData.k;
        compareWithinRect(x1, x2, y1, y2) && node.select(true);
      }
      for (const con of this._objectManager.getConnectionIterator()) {
        const firstPoint = con.firstPoint;
        const endPoint = con.endPoint;
        const x1 = Math.min(firstPoint.x, endPoint.x) * transFormData.k;
        const x2 = Math.max(firstPoint.x, endPoint.x) * transFormData.k;
        const y1 = Math.min(firstPoint.y, endPoint.y) * transFormData.k;
        const y2 = Math.max(firstPoint.y, endPoint.y) * transFormData.k;
        compareWithinRect(x1, x2, y1, y2) && con.select(true);
      }
    } finally {
      this.selection.rect.remove();
      this.selection.rect = null;
      this.$emit(EVENT_TYPE.MOUSEUP_SHEET, this._getSvgXYOnDrag(ev.x, ev.y));
    }
  }
  _createAppendObj() {
    switch (this._appendMode.mode) {
      case "append": {
        const newObj = this.add(__spreadValues({
          "node.x": this._appendingObject.x,
          "node.y": this._appendingObject.y
        }, this._appendMode.data));
        this._actionController.addAction(new AddCommand(cloneObjDataList([newObj]), this._containerInterface));
        break;
      }
      default:
        break;
    }
    this.clearAppendMode();
  }
  _dragController(ev) {
    if (this._appendMode.mode === null) {
      switch (ev.type) {
        case "start":
          this._dragStartHandlerOnSelection(ev);
          break;
        case "drag":
          this._dragHandlerOnSelection(ev);
          break;
        case "end":
          this._dragEndHandlerOnSelection(ev);
          break;
        default:
          break;
      }
    } else if (this._appendMode.mode === "append") {
      if (this._appendMode.data.type === "node") {
        switch (ev.type) {
          case "drag":
            this._moveAppendingNode(ev.x + this.div.scrollLeft, ev.y + this.div.scrollTop);
            break;
          case "end":
            this._createAppendObj();
            break;
          default:
            break;
        }
      } else {
        switch (ev.type) {
          case "start": {
            const pos = this._getSvgXYOnDrag(ev.x, ev.y, true);
            this._createAppendingConnection(pos.x, pos.y, pos.x, pos.y, this._appendMode.data);
            this._appendMode.dragged = false;
            break;
          }
          case "drag": {
            const pos = this._getSvgXYOnDrag(ev.x, ev.y, true);
            this._moveAppendingConnection(pos.x, pos.y, this._appendingObject.renderType);
            this._appendMode.dragged = true;
            break;
          }
          case "end":
            this._endAppendingConnection();
            this.clearAppendMode();
            break;
          default:
            break;
        }
      }
    }
  }
  cancelCreatingConnection() {
    if (this._appendingObject === null) {
      throw new Error("There is no creatingConnection obj");
    }
    this.clearAppendMode();
  }
  _changeObjRender(obj, render) {
    this._renderManager.changeRender(obj, render, this._containerInterface);
    this._addObjectEvent(obj);
  }
  changeRender(obj, render) {
    const oldRender = obj.renderType;
    this._changeObjRender(obj, render);
    this._actionController.addAction(new RenderCommand(obj, oldRender, render, this._containerInterface));
  }
  _editTextCallbackHandler(objData, oldText, newText) {
    this._logger.debug(
      "InnoFlowchart._editTextCallbackHandler()",
      `oldText = '${oldText}'`,
      `newText = '${newText}'`
    );
    this._actionController.addAction(new EditCommand(
      [
        new ChangedInfo(objData, [
          {
            key: "text",
            oldValue: oldText,
            newValue: newText
          }
        ])
      ],
      this._containerInterface
    ));
  }
  _moveAppendingConnection(x, y) {
    const detecting = this._getNodeAndPosUnderXY(
      x,
      y,
      this._simpleConnectingMode
    );
    if (detecting.node === null || detecting.node.id === this._appendingObject.sourceObjId) {
      this._appendingObject.setLastPointXY(x, y);
      this._appendingObject.destinationObjId = null;
      this._appendingObject.destinationPos = null;
    } else {
      this._appendingObject.destinationObjId = detecting.node.id;
      if (this._simpleConnectingMode)
        this._setShortestPosition(this._appendingObject);
      else
        this._appendingObject.destinationPos = detecting.pos;
    }
  }
  _adjDragCallbackHandler(objData, oldPoints, newPoints) {
    this._logger.debug(
      "InnoFlowchart.adjDragCallbackHandler()",
      "record undo action"
    );
    this._actionController.addAction(new EditCommand(
      [
        new ChangedInfo(objData, [
          {
            key: "connection.points",
            oldValue: oldPoints,
            newValue: newPoints
          }
        ])
      ],
      this._containerInterface
    ));
    this._updateNegativePos();
  }
  _renderCallBack(obj) {
    if (obj.type === "node") {
      const set3 = /* @__PURE__ */ new Set();
      for (const con of this._objectManager.getConnectionIterator()) {
        if (!set3.has(con.id) && (con.sourceObjId === obj.id || con.destinationObjId === obj.id)) {
          set3.add(con.id);
          con.render();
        }
      }
    }
    const group = this._objectManager.getParentGroupOrNull(obj);
    group !== null && group.resize();
  }
  _clickOnSheetHandler(ev) {
    this.$emit(EVENT_TYPE.CLICK, this._getXYOnSheet(ev.offsetX, ev.offsetY));
  }
  _createAppendingConnection(x, y, toX, toY, data) {
    if (this._appendingObject !== null) {
      throw new Error("Already created an appending obj!!");
    }
    if (!data["connection.sourceObjId"]) {
      const detecting = this._getNodeAndPosUnderXY(x, y);
      if (detecting.node !== null) {
        data["connection.sourceObjId"] = detecting.node.id;
        data["connection.sourcePos"] = detecting.pos;
      }
    }
    const obj = __spreadProps(__spreadValues({}, data), {
      id: "#temp_appending_connection",
      type: "connection",
      opacity: 0.5,
      temp: true,
      "connection.points": [
        { x, y },
        { x: toX, y: toY }
      ]
    });
    this._appendingObject = this.add(obj);
  }
  _endAppendingConnection() {
    let data = this._appendingObject.data;
    if (this._appendMode.dragged === false) {
      data = getDefaultConnection(this._appendingObject);
    }
    const newObj = this.add(__spreadProps(__spreadValues({}, data), {
      id: void 0,
      temp: false,
      opacity: 1
    }));
    this._actionController.addAction(new AddCommand(cloneObjDataList([newObj]), this._containerInterface));
  }
  handleKeydownF2() {
    if (!this._editMode && this.getCountOfSelectedObject() === 1) {
      for (const obj of this._objectManager.getSelectedObjIterator()) {
        obj.editLabel();
        return;
      }
    }
  }
  handleKeydownDelete() {
    this.removeSelected();
  }
  handleKeydownArrows(x, y) {
    const selected = this.getSelectedObjects(false);
    if (selected.length > 0) {
      this.moveWrapper(() => {
        selected.filter((obj) => obj.isSelected).forEach((obj) => obj.moveTo(x, y));
      });
    } else {
      this.div.scrollLeft += x * 2;
      this.div.scrollTop += y * 2;
    }
  }
  handleKeydownEscape() {
    const appendMode = this._appendMode;
    const appendingObject = this._appendingObject;
    if (appendMode.mode === null && appendingObject !== null) {
      this._logger.info("InnoFlowchart.handleKeydownEscape()", "Cancel Creating Connection");
      this.cancelCreatingConnection();
    } else if (appendMode.mode !== null) {
      this._logger.info("InnoFlowchart.handleKeydownEscape()", "Clear Appending Data");
      this.clearAppendMode();
    } else {
      this._logger.info("InnoFlowchart.handleKeydownEscape()", "releaseAllObj");
      this.releaseAllObjects();
    }
  }
};
export {
  EVENT_TYPE,
  IRFlowchart
};
//# sourceMappingURL=flowchart.js.map
