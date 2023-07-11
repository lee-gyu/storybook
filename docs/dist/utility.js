import {
  ClipboardManager,
  Logger,
  Palette,
  ReactiveState,
  addMessageEventListener,
  appendElement,
  blobToStr,
  checkTargetIsHTMLElement,
  createClickOutsideHandler,
  createCustomIcon,
  createIconElement,
  createImageFromSrcUrl,
  createLoadingHandler,
  createObjectURLFromSvg,
  createPopover,
  createSessionChannel,
  createSplitContainer,
  createTooltip,
  createTooltipBySelector,
  downloadDataURL,
  get2DGenerator,
  getBase64FromSvg,
  getElement,
  getImageBlobFromImage,
  getMinMaxBetween,
  getPageParam,
  getTextWidthContext,
  hasClass,
  offsetBottomAutoUpdate,
  openNewSessionTab,
  openNewSessionTabByForm,
  openNewWindow,
  postClear,
  postMessageOnCommonChannel,
  postRemoveItem,
  postSetItem,
  printImageFromDataURL,
  refreshSessionBroadcastChannel,
  setPageParam,
  uuid,
  xss_default,
  z_index_classNames_default
} from "./chunks/chunk-ANWI2HK3.js";
import "./chunks/chunk-N2GALXSL.js";
import {
  clearGlobalKeyListener,
  createESCHideController,
  registerGlobalKeyListener,
  unregisterGlobalKeyListener
} from "./chunks/chunk-56RD7WBD.js";

// src/utils/iter/make-iterator.ts
function* range(start, end) {
  let cursor = start;
  while (cursor < end)
    yield cursor++;
}
function* rangeMap(start, end, map) {
  for (const num of range(start, end))
    yield map(num);
}
export {
  ClipboardManager,
  Logger,
  Palette,
  ReactiveState,
  addMessageEventListener,
  appendElement,
  blobToStr,
  checkTargetIsHTMLElement,
  clearGlobalKeyListener,
  z_index_classNames_default as clsZId,
  createClickOutsideHandler,
  createCustomIcon,
  createESCHideController,
  createIconElement,
  createImageFromSrcUrl,
  createLoadingHandler,
  createObjectURLFromSvg,
  createPopover,
  createSessionChannel,
  createSplitContainer,
  createTooltip,
  createTooltipBySelector,
  downloadDataURL,
  get2DGenerator,
  getBase64FromSvg,
  getElement,
  getImageBlobFromImage,
  getMinMaxBetween,
  getPageParam,
  getTextWidthContext,
  hasClass,
  offsetBottomAutoUpdate,
  openNewSessionTab,
  openNewSessionTabByForm,
  openNewWindow,
  postClear,
  postMessageOnCommonChannel,
  postRemoveItem,
  postSetItem,
  printImageFromDataURL,
  range,
  rangeMap,
  refreshSessionBroadcastChannel,
  registerGlobalKeyListener,
  setPageParam,
  unregisterGlobalKeyListener,
  uuid,
  xss_default as xss
};
//# sourceMappingURL=utility.js.map
