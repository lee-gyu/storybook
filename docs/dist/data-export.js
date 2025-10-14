import s from "./data-export/data-worker.js";
import { v as k } from "./chunks/v4-BysszJq8.js";
const o = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ (() => {
  let r = null;
  function a(t) {
    const e = o.get(t);
    if (!e)
      throw new Error(`'${t}' taskLog is not defined`);
    return e;
  }
  return () => (r || (r = new Worker(
    new URL(s),
    {
      name: "ir-data-exporting-worker",
      type: "module"
    }
  )), r.onmessage = (t) => {
    const e = t.data;
    if (!e.taskId)
      throw console.error(e), new Error("taskId is not defined.");
    const n = a(e.taskId);
    e.hasError ? n.reject(e.error ?? new Error("unknown error")) : n.resolve(e.objectURL), o.delete(e.taskId);
  }, r.onerror = (t) => {
    for (const [e, n] of o)
      n.reject(t.error ?? new Error("Worker internal error occurred."));
    o.clear(), r = null;
  }, r);
})();
function d(r) {
  return new Promise((a, t) => {
    const e = c();
    o.set(r.taskId, {
      taskId: r.taskId,
      createdDateTick: Date.now(),
      resolve: a,
      reject: t
    }), e.postMessage({
      command: "register-task-item",
      taskItem: r
    });
  });
}
function w(r) {
  return d(
    {
      taskId: k(),
      data: r.data,
      format: r.format,
      args: r.args
    }
  );
}
export {
  w as requestExportingData
};
//# sourceMappingURL=data-export.js.map
