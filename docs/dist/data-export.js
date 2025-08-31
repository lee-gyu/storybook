import { ExcelExportingModule as c } from "./data-modules.js";
import { v as k } from "./chunks/v4-CKZ6klMF.js";
const n = [];
function l(e) {
  return e.format === "excel";
}
const d = /* @__PURE__ */ (() => {
  let e = !1;
  return async () => {
    if (!e)
      for (e = !0; n.length; ) {
        const t = n.shift();
        try {
          l(t) && new c(t.args).export(t.data).then((r) => {
            postMessage({
              taskId: t.taskId,
              objectURL: URL.createObjectURL(r),
              hasError: !1
            });
          }).catch((r) => {
            console.error("data-worker error", r), postMessage({
              taskId: t.taskId,
              hasError: !0,
              error: r,
              objectURL: ""
            });
          });
        } catch (r) {
          console.error("data-worker error", r), postMessage({
            taskId: t.taskId,
            hasError: !0,
            error: r,
            objectURL: ""
          });
        } finally {
          e = !1;
        }
      }
  };
})();
typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && (self.onmessage = (e) => {
  const {
    command: t,
    taskItem: r
  } = e.data;
  if (t === "register-task-item")
    n.push(r), d();
  else
    throw console.error(`unknown command ${t}. Please check the docs`, r), new Error("unknown command");
});
const i = import.meta.url, s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ (() => {
  let e = null;
  function t(r) {
    const o = s.get(r);
    if (!o)
      throw new Error(`'${r}' taskLog is not defined`);
    return o;
  }
  return () => (e || (e = new Worker(
    new URL(i),
    {
      name: "ir-data-exporting-worker",
      type: "module"
    }
  )), e.onmessage = (r) => {
    const o = r.data;
    if (!o.taskId)
      throw console.error(o), new Error("taskId is not defined.");
    const a = t(o.taskId);
    o.hasError ? a.reject(o.error ?? new Error("unknown error")) : a.resolve(o.objectURL), s.delete(o.taskId);
  }, e.onerror = (r) => {
    for (const [o, a] of s)
      a.reject(r.error ?? new Error("Worker internal error occurred."));
    s.clear(), e = null;
  }, e);
})();
function f(e) {
  return new Promise((t, r) => {
    const o = u();
    s.set(e.taskId, {
      taskId: e.taskId,
      createdDateTick: Date.now(),
      resolve: t,
      reject: r
    }), o.postMessage({
      command: "register-task-item",
      taskItem: e
    });
  });
}
function w(e) {
  return f(
    {
      taskId: k(),
      data: e.data,
      format: e.format,
      args: e.args
    }
  );
}
export {
  w as requestExportingData
};
//# sourceMappingURL=data-export.js.map
