import {
  IRCommandBlock,
  IRCommandManager,
  IRConfirm,
  IRDatePicker,
  IRPageControl,
  IRSelect,
  IRTimePicker,
  IRTree,
  IRVirtualDOM,
  createDropdownDiv,
  createDropdownItem,
  hasDisplayedConfirm,
  renderCheckboxTreeNode,
  renderDefaultTreeNode,
  setTreeDragDropReorder
} from "./chunks/chunk-TI6PMWG5.js";
import {
  i18n_default
} from "./chunks/chunk-35W6Z2PF.js";
import "./chunks/chunk-LW2VMBBJ.js";
import {
  ClipboardManager,
  EnvConstantsSchema,
  Logger,
  Palette,
  ReactiveState,
  appendElement,
  blobToStr,
  checkTargetIsHTMLElement,
  closest,
  createBuilderClient,
  createClickOutsideHandler,
  createCustomIcon,
  createElement,
  createEntryScriptLoader,
  createIFrameModule,
  createIconElement,
  createImageFromSrcUrl,
  createLoadingHandler,
  createObjectURLFromSvg,
  createSessionChannel,
  createSplitContainer,
  createTooltip,
  createTooltipBySelector,
  createTooltipContainer,
  createUUID,
  createUUIDBasedOnParam,
  downloadDataURL,
  get2DGenerator,
  getBase64FromSvg,
  getCacheDataStorage,
  getCommonChannel,
  getDefaultValue,
  getElement,
  getEntryParam,
  getIRIconPng,
  getImageBlobFromImage,
  getMinMaxBetween,
  getPageIdInURL,
  getPageParam,
  getSessionChannel,
  getSessionIdInURL,
  getTextWidthContext,
  getTooltipElements,
  hasClass,
  hasEntryParam,
  hasSessionIdInURL,
  initEnvConstants,
  initNewSessionId,
  initSessionChannel,
  makeNewUrl,
  openNewWindow,
  parseInt,
  postClear,
  postRemoveItem,
  postSetItem,
  printImageFromDataURL,
  refreshIRM010,
  removeEntryParam,
  saveEntryParam,
  uuid,
  xss_default,
  z_index_classNames_default
} from "./chunks/chunk-TPDWUAOZ.js";
import "./chunks/chunk-IQO4KW2H.js";
import "./chunks/chunk-L3QRNZQF.js";
import {
  clearGlobalKeyListener,
  createESCHideController,
  createFloatingHandler,
  createPopover,
  getLayerElement,
  getThemeStore,
  getVirtualEl,
  offsetBottomAutoUpdate,
  registerGlobalKeyListener,
  unregisterGlobalKeyListener
} from "./chunks/chunk-UB2SBWNL.js";
import "./chunks/chunk-7NF5VX7D.js";
import "./chunks/chunk-F6QKJDR3.js";

// src/dialogs/dialog-base.ts
var DialogGenerator = class {
  constructor() {
    this._dialogElement = createElement("div", "dialog");
    this._dialogElement.setAttribute("tabindex", "-1");
    this._wrapperElement = appendElement(this._dialogElement, "div", "dialog__wrapper");
    this._headerElement = appendElement(this._wrapperElement, "div", "dialog__header");
    this._bodyElement = appendElement(this._wrapperElement, "div", "dialog__content");
    this._footerElement = appendElement(this._wrapperElement, "div", "dialog__footer");
  }
  setDialogWidth(width) {
    this._wrapperElement.style.width = `${width}px`;
    return this;
  }
  addStrongHeaderTitle(text) {
    const titleEl = appendElement(this._headerElement, "strong", "dialog__header-title");
    titleEl.innerText = text;
    return this;
  }
  createHeaderCloseButton(onClick) {
    const actionsEl = appendElement(this._headerElement, "div", "dialog__header-actions");
    const btnClose = appendElement(actionsEl, "button", "dialog__button-close");
    appendElement(btnClose, "i", "ir-icon", "ir-icon--close");
    btnClose.onclick = onClick;
    return this;
  }
  setFooterClass(...cls) {
    this._footerElement.classList.add(...cls);
    return this;
  }
  setContentElement(...elements) {
    while (this._bodyElement.lastChild)
      this._bodyElement.lastChild.remove();
    this._bodyElement.append(...elements);
    return this;
  }
  addFooterButton(text, onClick, ...cls) {
    const btn = appendElement(this._footerElement, "button", "button", ...cls);
    btn.innerText = text;
    btn.onclick = onClick;
    return this;
  }
  get element() {
    return this._dialogElement;
  }
};

// src/dialogs/i18n/en.ts
var en_default = {
  "#login-info-dialog.title": "Login Information",
  "#login-info-dialog.confirm-button": "Confirm",
  "AUTH.PASSWORD.NOTICE": "Deadline of Password Change",
  "AUTH.ACCESSIP": "Last Login IP",
  "AUTH.LASTESTLOGINTIME": "Last Login Date",
  "AUTH.SECURITY.NOTICE": "Security Issue"
};

// src/dialogs/i18n/ja.ts
var ja_default = {
  "#login-info-dialog.title": "\u30ED\u30B0\u30A4\u30F3\u60C5\u5831",
  "#login-info-dialog.confirm-button": "\u78BA\u8A8D",
  "AUTH.PASSWORD.NOTICE": "\u30D1\u30B9\u30EF\u30FC\u30C9\u5909\u66F4\u671F\u9650",
  "AUTH.ACCESSIP": "\u6700\u7D42\u30ED\u30B0\u30A4\u30F3IP",
  "AUTH.LASTESTLOGINTIME": "\u6700\u7D42\u30ED\u30B0\u30A4\u30F3\u65E5\u6642",
  "AUTH.SECURITY.NOTICE": "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u60C5\u5831"
};

// src/dialogs/i18n/ko.ts
var ko_default = {
  "#login-info-dialog.title": "\uB85C\uADF8\uC778 \uC815\uBCF4",
  "#login-info-dialog.confirm-button": "\uD655\uC778",
  "AUTH.PASSWORD.NOTICE": "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD \uAE30\uD55C",
  "AUTH.ACCESSIP": "\uCD5C\uC885 \uB85C\uADF8\uC778 IP",
  "AUTH.LASTESTLOGINTIME": "\uCD5C\uC885 \uB85C\uADF8\uC778 \uC77C\uC2DC",
  "AUTH.SECURITY.NOTICE": "\uBCF4\uC548 \uC0AC\uD56D"
};

// src/dialogs/i18n/zh.ts
var zh_default = {
  "#login-info-dialog.title": "\u767B\u5F55\u4FE1\u606F",
  // TODO
  "#login-info-dialog.confirm-button": "?",
  "AUTH.PASSWORD.NOTICE": "\u5BC6\u7801\u53D8\u66F4\u671F\u9650",
  "AUTH.ACCESSIP": "\u6700\u7EC8\u767B\u5F55IP",
  "AUTH.LASTESTLOGINTIME": "\u6700\u7EC8\u767B\u5F55\u65F6\u95F4",
  "AUTH.SECURITY.NOTICE": "\u4FDD\u5B89\u4E8B\u9879"
};

// src/dialogs/i18n/index.tsx
var I18N_MSG = { ko: ko_default, en: en_default, ja: ja_default, zh: zh_default };
function isKey(key, obj) {
  return key in obj;
}
function getLangContext(lang) {
  var _a;
  const msg = (_a = I18N_MSG[lang]) != null ? _a : ko_default;
  return {
    getMsg(key, ...args) {
      if (isKey(key, msg))
        return msg[key];
      return key;
    }
  };
}

// src/dialogs/login-info-dialog.ts
var LOGIN_INFO_DIALOG_WIDTH = 550;
var loginInfo = {
  "AUTH.ACCESSIP": 1,
  "AUTH.LASTESTLOGINTIME": 2,
  "AUTH.PASSWORD.NOTICE": 3,
  "AUTH.SECURITY.NOTICE": 4
};
function hasLoginInfo(data) {
  return data.props.some(([key]) => loginInfo[key] !== void 0);
}
function getLoginInfo(data) {
  return data.props.filter(([key]) => loginInfo[key] !== void 0).sort(([key1], [key2]) => loginInfo[key1] - loginInfo[key2]);
}
function appendContentFragment(contentEl, content) {
  var _a, _b;
  const fragment = document.createDocumentFragment();
  const parser = new DOMParser();
  const encodedContent = content.replace(/&/g, "&amp;");
  const dom = parser.parseFromString(`<root>${encodedContent}</root>`, "application/xml");
  let cur = (_a = dom.firstChild) == null ? void 0 : _a.firstChild;
  while (cur) {
    if (cur.nodeType === 1 && cur instanceof Element) {
      if (cur.tagName.toLowerCase() === "font") {
        const font = document.createElement("span");
        font.textContent = cur.textContent;
        font.style.cssText = (_b = cur.getAttribute("style")) != null ? _b : "";
        const color = cur.getAttribute("color");
        const bgColor = cur.getAttribute("bgcolor");
        if (color)
          font.style.color = color.replace("cl", "");
        if (bgColor)
          font.style.backgroundColor = bgColor.replace("cl", "");
        fragment.append(font);
      } else if (cur.tagName.toLowerCase() === "br") {
        fragment.append(document.createElement("br"));
      } else {
        console.warn(`loginInfoDialog-parser::not allowed tag ${cur.tagName}`);
      }
    } else if (cur.textContent) {
      fragment.append(cur.textContent);
    }
    cur = cur.nextSibling;
  }
  contentEl.append(fragment);
}
function createLoginInfoDialog(args) {
  const {
    irm010Data,
    lang = "ko",
    onClose
  } = args;
  if (!hasLoginInfo(irm010Data))
    throw new Error("no login info data! check irm010 response");
  const dialog = new DialogGenerator();
  const { getMsg } = getLangContext(lang);
  const closeHandler = () => {
    popover.hide();
  };
  const keyHandler = (e) => {
    if (e.key === "Enter")
      closeHandler();
  };
  const popover = createPopover({
    element: dialog.element,
    type: "dialog",
    parentElement: getLayerElement("dialog"),
    onESC() {
      onClose == null ? void 0 : onClose();
      window.removeEventListener("keyup", keyHandler);
    }
  });
  const ulElement = (() => {
    const ul = createElement("ul", "row", "gap-y--xs");
    const loginNotifyInfo = getLoginInfo(irm010Data);
    loginNotifyInfo.forEach(([key, value]) => {
      const li = appendElement(ul, "li", "row", "col", "col--12");
      appendElement(li, "div", "col", "col--4").innerText = getMsg(key);
      if (key === "AUTH.SECURITY.NOTICE")
        appendContentFragment(
          appendElement(li, "div", "col", "col--8"),
          value
        );
      else
        appendElement(li, "div", "col", "col--8").innerText = value;
    });
    return ul;
  })();
  dialog.setDialogWidth(LOGIN_INFO_DIALOG_WIDTH).addStrongHeaderTitle(getMsg("#login-info-dialog.title")).createHeaderCloseButton(closeHandler).setContentElement(ulElement).setFooterClass("justify-content--end").addFooterButton(getMsg("#login-info-dialog.confirm-button"), closeHandler, "button--primary");
  return {
    popoverHandler: popover,
    show() {
      dialog.element.focus();
      popover.show();
      window.addEventListener("keyup", keyHandler);
    },
    hide() {
      popover.hide();
    }
  };
}
export {
  ClipboardManager,
  EnvConstantsSchema,
  IRCommandBlock,
  IRCommandManager,
  IRConfirm,
  IRDatePicker,
  IRPageControl,
  IRSelect,
  IRTimePicker,
  IRTree,
  IRVirtualDOM,
  Logger,
  Palette,
  ReactiveState,
  appendElement,
  blobToStr,
  checkTargetIsHTMLElement,
  clearGlobalKeyListener,
  closest,
  z_index_classNames_default as clsZId,
  createBuilderClient,
  createClickOutsideHandler,
  createCustomIcon,
  createDropdownDiv,
  createDropdownItem,
  createESCHideController,
  createElement,
  createEntryScriptLoader,
  createFloatingHandler,
  createIFrameModule,
  createIconElement,
  createImageFromSrcUrl,
  createLoadingHandler,
  createLoginInfoDialog,
  createObjectURLFromSvg,
  createPopover,
  createSessionChannel,
  createSplitContainer,
  createTooltip,
  createTooltipBySelector,
  createTooltipContainer,
  createUUID,
  createUUIDBasedOnParam,
  downloadDataURL,
  get2DGenerator,
  getBase64FromSvg,
  getCacheDataStorage,
  getCommonChannel,
  getDefaultValue,
  getElement,
  getEntryParam,
  getIRIconPng,
  getImageBlobFromImage,
  getLayerElement,
  getMinMaxBetween,
  getPageIdInURL,
  getPageParam,
  getSessionChannel,
  getSessionIdInURL,
  getTextWidthContext,
  getThemeStore,
  getTooltipElements,
  getVirtualEl,
  hasClass,
  hasDisplayedConfirm,
  hasEntryParam,
  hasLoginInfo,
  hasSessionIdInURL,
  i18n_default as i18n,
  initEnvConstants,
  initNewSessionId,
  initSessionChannel,
  makeNewUrl,
  offsetBottomAutoUpdate,
  openNewWindow,
  parseInt,
  postClear,
  postRemoveItem,
  postSetItem,
  printImageFromDataURL,
  refreshIRM010,
  registerGlobalKeyListener,
  removeEntryParam,
  renderCheckboxTreeNode,
  renderDefaultTreeNode,
  saveEntryParam,
  setTreeDragDropReorder,
  unregisterGlobalKeyListener,
  uuid,
  xss_default as xss
};
//# sourceMappingURL=index.js.map
