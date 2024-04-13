// ../js-utils/dist/collection/equals.js
function isDeepEqual(a, b) {
  if (a === b)
    return true;
  if (a === null || b === null || typeof a !== "object" || typeof b !== "object")
    return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length)
    return false;
  for (const key of keysA) {
    if (!keysB.includes(key) || !isDeepEqual(a[key], b[key]))
      return false;
  }
  return true;
}

// ../js-utils/dist/collection/clone.js
function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// ../js-utils/dist/collection/range.js
function createRangeList(start, end, step = 1) {
  const list = [];
  for (let i = start; i < end; i += step)
    list.push(i);
  return list;
}
function range(param1, param2, step = 1) {
  const { start, end } = (() => {
    if (param2 === void 0)
      return { start: 0, end: param1 };
    return { start: param1, end: param2 };
  })();
  return {
    forEach(func) {
      let cur = start;
      while (cur !== end) {
        func(cur);
        cur += step;
      }
    },
    map(func) {
      const list = [];
      for (let i = start; i < end; i += step)
        list.push(func(i));
      return list;
    },
    some(func) {
      let cur = start;
      while (cur !== end) {
        if (func(cur))
          return true;
        cur += step;
      }
      return false;
    },
    asList() {
      return createRangeList(start, end, step);
    },
    reduce(func, init) {
      let acc = init;
      let cur = start;
      while (cur !== end) {
        acc = func(acc, cur);
        cur += step;
      }
      return acc;
    }
  };
}

// ../js-utils/dist/collection/pick.js
function getObjectKeys(obj) {
  return Object.keys(obj);
}
function hasKey(obj, key) {
  return key in obj;
}
function pick(obj, keyObj) {
  const result = {};
  for (const key of getObjectKeys(keyObj)) {
    if (hasKey(obj, key))
      result[key] = obj[key];
  }
  return result;
}

// ../js-utils/dist/collection/merge.js
function isObjOrAry(obj) {
  return obj !== null && typeof obj === "object" || Array.isArray(obj);
}
function merge(source, target) {
  const sourceKeys = getObjectKeys(source);
  const targetKeys = getObjectKeys(target);
  const merged = Array.isArray(source) ? [] : {};
  for (const key of sourceKeys)
    merged[key] = source[key];
  for (const key of targetKeys) {
    if (isObjOrAry(target[key]) && hasKey(source, key) && source[key] && isObjOrAry(source[key])) {
      merged[key] = merge(source[key], target[key]);
    } else {
      merged[key] = target[key];
    }
  }
  return merged;
}

// ../js-utils/dist/collection/zip.js
function zip(arr1, arr2) {
  return {
    forEach(callback) {
      const len = Math.min(arr1.length, arr2.length);
      for (let i = 0; i < len; i++)
        callback(arr1[i], arr2[i]);
    }
  };
}

// ../js-utils/dist/type-assert/dom-element.js
function checkTargetIsHTMLElement(target) {
  return target instanceof HTMLElement;
}

// ../js-utils/dist/collection/list-map.js
function createListMap() {
  const map = /* @__PURE__ */ new Map();
  return {
    has,
    getList,
    getListOrNull,
    add,
    remove,
    clear,
    clearAll,
    forEach,
    forEachAsync
  };
  function has(key) {
    return map.has(key);
  }
  function getList(key) {
    return map.get(key);
  }
  function getListOrNull(key) {
    const get = map.get(key);
    return get ? get : null;
  }
  function remove(key, value) {
    const list = getListOrNull(key);
    if (!list)
      return;
    const index = list.indexOf(value);
    if (index > -1)
      list.splice(index, 1);
  }
  function add(key, value) {
    if (!has(key))
      map.set(key, [value]);
    else
      getList(key).push(value);
  }
  function clear(key) {
    map.set(key, []);
  }
  function clearAll() {
    map.clear();
  }
  function forEach(key, callback) {
    const list = getListOrNull(key);
    if (!list)
      return true;
    try {
      for (const item of list) {
        if (callback(item) === false)
          return false;
      }
    } catch (err) {
      console.error("occurred an error when forEach list-map");
      console.error(err);
      throw err;
    }
    return true;
  }
  async function forEachAsync(key, callback) {
    const list = getListOrNull(key);
    if (!list)
      return true;
    try {
      for (const item of list) {
        const res = callback(item);
        if (res instanceof Promise && await res === false || res === false)
          return false;
      }
    } catch (err) {
      console.error("occurred an error when forEachAsync list-map");
      console.error(err);
      throw err;
    }
    return true;
  }
}

// ../js-utils/dist/utils/async.js
async function asyncIO(asyncTaskList) {
  for (const { label, task } of asyncTaskList) {
    try {
      if (await task === false)
        return false;
    } catch (err) {
      console.error(`occurred an error when ${label}`);
      throw err;
    }
  }
  return true;
}

// ../js-utils/dist/utils/hook-flow.js
function createHookFlow() {
  const beginHookListMap = createListMap();
  const endHookListMap = createListMap();
  const hookListMap = createListMap();
  return {
    emit,
    clearHooks,
    addHook,
    setHook,
    removeHook,
    clearBeginHooks,
    addBeginHook,
    setBeginHook,
    clearEndHooks,
    addEndHook,
    setEndHook,
    destroy
  };
  function emit(key, args) {
    const callback = (callback2) => callback2(...args);
    return asyncIO([
      {
        label: `begin_${key}`,
        task: beginHookListMap.forEachAsync(key, callback)
      },
      {
        label: `${key}`,
        task: hookListMap.forEachAsync(key, callback)
      },
      {
        label: `end_${key}`,
        task: endHookListMap.forEachAsync(key, callback)
      }
    ]);
  }
  function clearHooks(key) {
    hookListMap.clear(key);
  }
  function addHook(key, callback) {
    hookListMap.add(key, callback);
  }
  function removeHook(key, callback) {
    hookListMap.remove(key, callback);
  }
  function setHook(key, callback) {
    clearHooks(key);
    addHook(key, callback);
  }
  function clearBeginHooks(key) {
    beginHookListMap.clear(key);
  }
  function addBeginHook(key, callback) {
    beginHookListMap.add(key, callback);
  }
  function setBeginHook(key, callback) {
    clearBeginHooks(key);
    addBeginHook(key, callback);
  }
  function clearEndHooks(key) {
    endHookListMap.clear(key);
  }
  function addEndHook(key, callback) {
    endHookListMap.add(key, callback);
  }
  function setEndHook(key, callback) {
    clearEndHooks(key);
    addEndHook(key, callback);
  }
  function destroy() {
    beginHookListMap.clearAll();
    endHookListMap.clearAll();
    hookListMap.clearAll();
  }
}

export {
  isDeepEqual,
  cloneDeep,
  range,
  pick,
  merge,
  zip,
  createHookFlow,
  checkTargetIsHTMLElement
};
//# sourceMappingURL=chunk-EOV7BLLI.js.map
