import {
  i18n_default,
  require_dayjs_min
} from "./chunk-Q2C44MJO.js";
import {
  IRComponent
} from "./chunk-CXSYGCFU.js";
import {
  createClickOutsideHandler,
  createIconElement,
  createTooltip,
  datePicker,
  datePickerContent,
  datePickerContentCell,
  datePickerContentCellSelected,
  datePickerContentHeaderCell,
  datePickerContentTable,
  datePickerFooter,
  datePickerHeader,
  datePickerHeaderTitle,
  select,
  selectDropdown,
  selectDropdownButton,
  selectDropdownIcon,
  selectDropdownItem,
  selectDropdownItemSelected,
  selectDropdownList,
  selectInput,
  selectInputIcon,
  selectInputNative,
  z_index_classNames_default
} from "./chunk-6IBVOU7E.js";
import {
  createESCHideController,
  getLayerElement,
  offsetBottomAutoUpdate
} from "./chunk-YY6MAG5N.js";
import {
  __toESM
} from "./chunk-F6QKJDR3.js";

// src/js-components/select/select.ts
var clsSelect = {
  select,
  selectDropdown,
  selectDropdownList,
  selectDropdownButton,
  selectDropdownItem,
  selectDropdownIcon,
  selectInput,
  selectInputNative,
  selectInputIcon,
  selectDropdownItemSelected
};
var createDropdownDiv = () => {
  const divDropdown = document.createElement("div");
  const ulItems = document.createElement("ul");
  divDropdown.classList.add(clsSelect.selectDropdown, z_index_classNames_default.zIndex.popover);
  ulItems.className = clsSelect.selectDropdownList;
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
  button.title = text;
  button.className = clsSelect.selectDropdownButton;
  item.className = clsSelect.selectDropdownItem;
  item.setAttribute("ir-select-value", value);
  icon.classList.add(clsSelect.selectDropdownIcon, "ir-icon", "ir-icon--check");
  button.appendChild(icon);
  button.append(span);
  item.append(button);
  return { item, button, icon, span };
};
var IRSelect = class extends IRComponent {
  constructor(args) {
    var _a;
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
    this.divSelect.classList.add(clsSelect.select);
    this.select.classList.forEach((cls) => this.divSelect.classList.add(cls));
    this.divInput.className = clsSelect.selectInput;
    this.inputValue.className = clsSelect.selectInputNative;
    icon.classList.add(clsSelect.selectInputIcon, "ir-icon", "ir-icon--chevron-down");
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
      this.disabled = (_a = args.disabled) != null ? _a : false;
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
      getLayerElement("popover").appendChild(this.divDropDown);
    this.escController.create();
    this.outsideHandler.create();
    setTimeout(() => {
      this.divSelect.classList.add("is-expanded");
      this.divDropDown.classList.add("is-expanded");
      this.floatingCleanup();
      this.floatingCleanup = offsetBottomAutoUpdate(this.divSelect, this.divDropDown);
    }, 0);
  }
  hide() {
    this.floatingCleanup();
    this.escController.destroy();
    this.outsideHandler.destroy();
    this.divSelect.classList.remove("is-expanded");
    this.divDropDown.classList.remove("is-expanded");
    this.divDropDown.addEventListener("transitionend", (ev) => {
      if (ev.currentTarget !== ev.target)
        return;
      this.divDropDown.remove();
    }, { once: true });
  }
  toggle() {
    if (this.divSelect.classList.contains("is-expanded"))
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
    return [...this.ulItems.querySelectorAll(`[ir-select-value]`)].map((e) => e).some((e) => e.getAttribute("ir-select-value") === value);
  }
  clearSelectedStatus() {
    this.items.forEach(({ element }) => element.classList.remove(clsSelect.selectDropdownItemSelected));
  }
  selectItem(value, emitEvent = true) {
    this.clearSelectedStatus();
    const selectedItem = this.getSelectedItemOrNull(value);
    selectedItem && this.changeValue(selectedItem, emitEvent);
  }
  getSelectedItemOrNull(value) {
    for (const item of this.items) {
      if (item.value === value)
        return item;
    }
    return null;
  }
  changeValue({ text, value, option, element }, emitEvent = true) {
    this.lastClickedOption = option;
    element.classList.add(clsSelect.selectDropdownItemSelected);
    this.inputValue.value = text;
    this.select.value = value;
    this._value = value;
    if (emitEvent)
      this.onChange(this.select, option);
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

// src/js-components/datePicker/datePicker.handler.ts
var import_dayjs = __toESM(require_dayjs_min(), 1);

// src/js-components/datePicker/datePicker.elements.ts
var clsDatePicker = {
  datePicker,
  datePickerHeader,
  datePickerHeaderTitle,
  datePickerContent,
  datePickerFooter,
  datePickerContentCell,
  datePickerContentHeaderCell,
  datePickerContentTable
};
function createDatePickerElements() {
  const datePicker2 = document.createElement("div");
  const header = document.createElement("div");
  const headerPrevYear = document.createElement("button");
  const headerPrev = document.createElement("button");
  const headerTitle = document.createElement("strong");
  const headerNext = document.createElement("button");
  const headerNextYear = document.createElement("button");
  const prevButtonGroup = document.createElement("div");
  const nextButtonGroup = document.createElement("div");
  headerPrevYear.appendChild(createIconElement("ir-icon--chevron-double-left"));
  headerPrev.appendChild(createIconElement("ir-icon--chevron-left"));
  headerNext.appendChild(createIconElement("ir-icon--chevron-right"));
  headerNextYear.appendChild(createIconElement("ir-icon--chevron-double-right"));
  const content = document.createElement("div");
  const contentTable = document.createElement("table");
  const contentTableThead = document.createElement("thead");
  const contentTableTbody = document.createElement("tbody");
  const footer = document.createElement("div");
  datePicker2.classList.add(clsDatePicker.datePicker);
  header.classList.add(clsDatePicker.datePickerHeader);
  headerTitle.classList.add(clsDatePicker.datePickerHeaderTitle);
  content.classList.add(clsDatePicker.datePickerContent);
  footer.classList.add(clsDatePicker.datePickerFooter);
  prevButtonGroup.appendChild(headerPrevYear);
  prevButtonGroup.appendChild(headerPrev);
  nextButtonGroup.appendChild(headerNext);
  nextButtonGroup.appendChild(headerNextYear);
  header.appendChild(prevButtonGroup);
  header.appendChild(headerTitle);
  header.appendChild(nextButtonGroup);
  const WeekdayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const weekdayRow = document.createElement("tr");
  const weekdayCells = {};
  WeekdayList.forEach((w) => {
    const cell = document.createElement("th");
    cell.className = `${clsDatePicker.datePickerContentCell} ${clsDatePicker.datePickerContentHeaderCell}`;
    cell.setAttribute("scope", "col");
    weekdayCells[w] = cell;
    weekdayRow.appendChild(cell);
  });
  contentTableThead.appendChild(weekdayRow);
  contentTable.className = clsDatePicker.datePickerContentTable;
  contentTable.appendChild(contentTableThead);
  contentTable.appendChild(contentTableTbody);
  content.appendChild(contentTable);
  const todayDiv = document.createElement("div");
  const todayButton = document.createElement("button");
  todayButton.classList.add("button");
  todayButton.type = "button";
  todayDiv.appendChild(todayButton);
  footer.appendChild(todayDiv);
  datePicker2.appendChild(header);
  datePicker2.appendChild(content);
  datePicker2.appendChild(footer);
  return {
    datePicker: datePicker2,
    headerTitle,
    contentTableTbody,
    headerPrev,
    headerNext,
    todayButton,
    headerNextYear,
    headerPrevYear,
    updateI18n
  };
  function updateI18n() {
    todayButton.innerHTML = "";
    todayButton.appendChild(createIconElement("ir-icon--check", "button__icon-prefix"));
    todayButton.append(i18n_default.datePicker.btnToday);
    WeekdayList.forEach((w) => weekdayCells[w].innerText = i18n_default.common[w]);
  }
}
var getDialogElements = /* @__PURE__ */ (() => {
  let elements = null;
  return function getCachedDatePickerElements() {
    if (!elements)
      elements = createDatePickerElements();
    return elements;
  };
})();

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
  let disabledTodayTooltip = null;
  setTimeZero(minDate);
  setTimeZero(maxDate);
  const elements = getDialogElements();
  const clickOutsideHandler = createClickOutsideHandler({
    eventElements: [elements.datePicker],
    clickOutsideFunc: () => handler.hide()
  });
  const handler = {
    get visible() {
      return visible;
    },
    update(calendarDate, selectedDate) {
      const today = setTimeZero(/* @__PURE__ */ new Date());
      const tmp = setTimeZero(new Date(calendarDate));
      const curMon = tmp.getMonth();
      elements.headerPrev.onclick = () => {
        calendarDate.setDate(PREV_MONTH_DAYS);
        this.update(calendarDate, selectedDate);
      };
      elements.headerNext.onclick = () => {
        calendarDate.setDate(NEXT_MONTH_DAYS);
        this.update(calendarDate, selectedDate);
      };
      elements.headerPrevYear.onclick = () => {
        calendarDate.setFullYear(calendarDate.getFullYear() - 1);
        this.update(calendarDate, selectedDate);
      };
      elements.headerNextYear.onclick = () => {
        calendarDate.setFullYear(calendarDate.getFullYear() + 1);
        this.update(calendarDate, selectedDate);
      };
      elements.todayButton.onclick = () => {
        onClick.call(null, today);
        this.update(today, today);
      };
      const isTodayInRange = today < minDate || today > maxDate;
      elements.todayButton.disabled = isTodayInRange;
      const todayDiv = elements.todayButton.parentElement;
      if (isTodayInRange && todayDiv && disabledTodayTooltip == null)
        disabledTodayTooltip = createTooltip({
          refElement: todayDiv,
          label: i18n_default.datePicker.disabledTodayTooltip,
          placement: "bottom"
        });
      elements.updateI18n();
      elements.headerTitle.innerText = (0, import_dayjs.default)(tmp).format(i18n_default.datePicker.titleFormat);
      tmp.setDate(1);
      tmp.setDate(-(tmp.getDay() - 1));
      elements.contentTableTbody.innerHTML = "";
      for (let i = 0; i < WEEK_COUNT; i++) {
        const row = document.createElement("tr");
        for (let i2 = 0; i2 < WEEKDAYS_COUNT; i2++) {
          const cell = document.createElement("td");
          const tmpDate = new Date(tmp);
          cell.className = datePickerContentCell;
          cell.innerText = `${tmp.getDate()}`;
          cell.onclick = () => onClick(tmpDate);
          if (tmpDate < minDate || tmpDate > maxDate)
            cell.classList.add("is-disabled");
          else if (tmp.getMonth() !== curMon)
            cell.classList.add("is-diff-month");
          else if (tmp.getTime() === (selectedDate == null ? void 0 : selectedDate.getTime()))
            cell.classList.add(datePickerContentCellSelected);
          row.appendChild(cell);
          tmp.setDate(tmp.getDate() + 1);
        }
        elements.contentTableTbody.appendChild(row);
      }
    },
    show() {
      visible = true;
      if (!elements.datePicker.isConnected)
        getLayerElement("popover").appendChild(elements.datePicker);
      elements.datePicker.style.removeProperty("display");
      elements.datePicker.setAttribute("data-for", uuid);
      clickOutsideHandler.create();
      escController.create();
      setTimeout(() => {
        elements.datePicker.classList.add("is-visible");
        floatingCleanup();
        floatingCleanup = offsetBottomAutoUpdate(refElement, elements.datePicker);
      }, 0);
    },
    hide() {
      clickOutsideHandler.destroy();
      escController.destroy();
      if (disabledTodayTooltip) {
        disabledTodayTooltip.destroy();
        disabledTodayTooltip = null;
      }
      const hideHandler = (ev) => {
        if (ev.currentTarget !== ev.target)
          return;
        visible = false;
        elements.datePicker.removeEventListener("transitionend", hideHandler);
        if (uuid === elements.datePicker.getAttribute("data-for")) {
          floatingCleanup();
          elements.datePicker.remove();
        }
      };
      elements.datePicker.addEventListener("transitionend", hideHandler);
      elements.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  };
  const escController = createESCHideController(handler);
  return handler;
};

export {
  createDropdownDiv,
  createDropdownItem,
  IRSelect,
  createDatePickerHandler,
  IRCommandBlock,
  IRCommandManager
};
//# sourceMappingURL=chunk-QCVP6SVD.js.map
