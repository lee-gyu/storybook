import {
  v4_default
} from "./chunks/chunk-IQO4KW2H.js";
import "./chunks/chunk-YVPLOK3S.js";
import "./chunks/chunk-NP7LZUD4.js";

// src/data-export.ts
var taskMap = /* @__PURE__ */ new Map();
var getWorker = (() => {
  let worker = null;
  function getTaskLog(taskId) {
    const taskLog = taskMap.get(taskId);
    if (!taskLog)
      throw new Error(`'${taskId}' taskLog is not defined`);
    return taskLog;
  }
  return () => {
    if (!worker)
      worker = new Worker(
        new URL(import.meta.url + "/../data-export/data-worker.js"),
        {
          name: "ir-data-exporting-worker",
          type: "module"
        }
      );
    worker.onmessage = (e) => {
      const taskResult = e.data;
      if (!taskResult.taskId) {
        console.error(taskResult);
        throw new Error(`taskId is not defined.`);
      }
      const taskLog = getTaskLog(taskResult.taskId);
      taskLog.resolve(taskResult.objectURL);
      taskMap.delete(taskResult.taskId);
    };
    worker.onerror = (err) => {
    };
    return worker;
  };
})();
function registerTaskLog(taskItem) {
  return new Promise((resolve, reject) => {
    const worker = getWorker();
    taskMap.set(taskItem.taskId, {
      taskId: taskItem.taskId,
      createdDateTick: Date.now(),
      resolve,
      reject
    });
    worker.postMessage({
      command: "register-task-item",
      taskItem
    });
  });
}
function requestExportingData(options) {
  return registerTaskLog(
    {
      taskId: v4_default(),
      data: options.data,
      format: options.format,
      args: options.args
    }
  );
}
export {
  requestExportingData
};
//# sourceMappingURL=data-export.js.map
