import {
  i18n_default,
  require_moment
} from "./chunk-YUYUP727js.js";
import {
  BEMClass,
  IRComponent,
  __commonJS,
  __spreadValues,
  __toESM,
  appendElement,
  createClickOutsideHandler,
  createESCHideController,
  hasClass,
  offsetBottomAutoUpdate,
  registerGlobalKeyListener,
  require_lodash,
  unregisterGlobalKeyListener,
  z_index_classNames_default
} from "./chunk-LTWBM3BUjs.js";

// ../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/default.js
var require_default = __commonJS({
  "../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/default.js"(exports) {
    function getDefaultWhiteList() {
      var whiteList = {};
      whiteList["align-content"] = false;
      whiteList["align-items"] = false;
      whiteList["align-self"] = false;
      whiteList["alignment-adjust"] = false;
      whiteList["alignment-baseline"] = false;
      whiteList["all"] = false;
      whiteList["anchor-point"] = false;
      whiteList["animation"] = false;
      whiteList["animation-delay"] = false;
      whiteList["animation-direction"] = false;
      whiteList["animation-duration"] = false;
      whiteList["animation-fill-mode"] = false;
      whiteList["animation-iteration-count"] = false;
      whiteList["animation-name"] = false;
      whiteList["animation-play-state"] = false;
      whiteList["animation-timing-function"] = false;
      whiteList["azimuth"] = false;
      whiteList["backface-visibility"] = false;
      whiteList["background"] = true;
      whiteList["background-attachment"] = true;
      whiteList["background-clip"] = true;
      whiteList["background-color"] = true;
      whiteList["background-image"] = true;
      whiteList["background-origin"] = true;
      whiteList["background-position"] = true;
      whiteList["background-repeat"] = true;
      whiteList["background-size"] = true;
      whiteList["baseline-shift"] = false;
      whiteList["binding"] = false;
      whiteList["bleed"] = false;
      whiteList["bookmark-label"] = false;
      whiteList["bookmark-level"] = false;
      whiteList["bookmark-state"] = false;
      whiteList["border"] = true;
      whiteList["border-bottom"] = true;
      whiteList["border-bottom-color"] = true;
      whiteList["border-bottom-left-radius"] = true;
      whiteList["border-bottom-right-radius"] = true;
      whiteList["border-bottom-style"] = true;
      whiteList["border-bottom-width"] = true;
      whiteList["border-collapse"] = true;
      whiteList["border-color"] = true;
      whiteList["border-image"] = true;
      whiteList["border-image-outset"] = true;
      whiteList["border-image-repeat"] = true;
      whiteList["border-image-slice"] = true;
      whiteList["border-image-source"] = true;
      whiteList["border-image-width"] = true;
      whiteList["border-left"] = true;
      whiteList["border-left-color"] = true;
      whiteList["border-left-style"] = true;
      whiteList["border-left-width"] = true;
      whiteList["border-radius"] = true;
      whiteList["border-right"] = true;
      whiteList["border-right-color"] = true;
      whiteList["border-right-style"] = true;
      whiteList["border-right-width"] = true;
      whiteList["border-spacing"] = true;
      whiteList["border-style"] = true;
      whiteList["border-top"] = true;
      whiteList["border-top-color"] = true;
      whiteList["border-top-left-radius"] = true;
      whiteList["border-top-right-radius"] = true;
      whiteList["border-top-style"] = true;
      whiteList["border-top-width"] = true;
      whiteList["border-width"] = true;
      whiteList["bottom"] = false;
      whiteList["box-decoration-break"] = true;
      whiteList["box-shadow"] = true;
      whiteList["box-sizing"] = true;
      whiteList["box-snap"] = true;
      whiteList["box-suppress"] = true;
      whiteList["break-after"] = true;
      whiteList["break-before"] = true;
      whiteList["break-inside"] = true;
      whiteList["caption-side"] = false;
      whiteList["chains"] = false;
      whiteList["clear"] = true;
      whiteList["clip"] = false;
      whiteList["clip-path"] = false;
      whiteList["clip-rule"] = false;
      whiteList["color"] = true;
      whiteList["color-interpolation-filters"] = true;
      whiteList["column-count"] = false;
      whiteList["column-fill"] = false;
      whiteList["column-gap"] = false;
      whiteList["column-rule"] = false;
      whiteList["column-rule-color"] = false;
      whiteList["column-rule-style"] = false;
      whiteList["column-rule-width"] = false;
      whiteList["column-span"] = false;
      whiteList["column-width"] = false;
      whiteList["columns"] = false;
      whiteList["contain"] = false;
      whiteList["content"] = false;
      whiteList["counter-increment"] = false;
      whiteList["counter-reset"] = false;
      whiteList["counter-set"] = false;
      whiteList["crop"] = false;
      whiteList["cue"] = false;
      whiteList["cue-after"] = false;
      whiteList["cue-before"] = false;
      whiteList["cursor"] = false;
      whiteList["direction"] = false;
      whiteList["display"] = true;
      whiteList["display-inside"] = true;
      whiteList["display-list"] = true;
      whiteList["display-outside"] = true;
      whiteList["dominant-baseline"] = false;
      whiteList["elevation"] = false;
      whiteList["empty-cells"] = false;
      whiteList["filter"] = false;
      whiteList["flex"] = false;
      whiteList["flex-basis"] = false;
      whiteList["flex-direction"] = false;
      whiteList["flex-flow"] = false;
      whiteList["flex-grow"] = false;
      whiteList["flex-shrink"] = false;
      whiteList["flex-wrap"] = false;
      whiteList["float"] = false;
      whiteList["float-offset"] = false;
      whiteList["flood-color"] = false;
      whiteList["flood-opacity"] = false;
      whiteList["flow-from"] = false;
      whiteList["flow-into"] = false;
      whiteList["font"] = true;
      whiteList["font-family"] = true;
      whiteList["font-feature-settings"] = true;
      whiteList["font-kerning"] = true;
      whiteList["font-language-override"] = true;
      whiteList["font-size"] = true;
      whiteList["font-size-adjust"] = true;
      whiteList["font-stretch"] = true;
      whiteList["font-style"] = true;
      whiteList["font-synthesis"] = true;
      whiteList["font-variant"] = true;
      whiteList["font-variant-alternates"] = true;
      whiteList["font-variant-caps"] = true;
      whiteList["font-variant-east-asian"] = true;
      whiteList["font-variant-ligatures"] = true;
      whiteList["font-variant-numeric"] = true;
      whiteList["font-variant-position"] = true;
      whiteList["font-weight"] = true;
      whiteList["grid"] = false;
      whiteList["grid-area"] = false;
      whiteList["grid-auto-columns"] = false;
      whiteList["grid-auto-flow"] = false;
      whiteList["grid-auto-rows"] = false;
      whiteList["grid-column"] = false;
      whiteList["grid-column-end"] = false;
      whiteList["grid-column-start"] = false;
      whiteList["grid-row"] = false;
      whiteList["grid-row-end"] = false;
      whiteList["grid-row-start"] = false;
      whiteList["grid-template"] = false;
      whiteList["grid-template-areas"] = false;
      whiteList["grid-template-columns"] = false;
      whiteList["grid-template-rows"] = false;
      whiteList["hanging-punctuation"] = false;
      whiteList["height"] = true;
      whiteList["hyphens"] = false;
      whiteList["icon"] = false;
      whiteList["image-orientation"] = false;
      whiteList["image-resolution"] = false;
      whiteList["ime-mode"] = false;
      whiteList["initial-letters"] = false;
      whiteList["inline-box-align"] = false;
      whiteList["justify-content"] = false;
      whiteList["justify-items"] = false;
      whiteList["justify-self"] = false;
      whiteList["left"] = false;
      whiteList["letter-spacing"] = true;
      whiteList["lighting-color"] = true;
      whiteList["line-box-contain"] = false;
      whiteList["line-break"] = false;
      whiteList["line-grid"] = false;
      whiteList["line-height"] = false;
      whiteList["line-snap"] = false;
      whiteList["line-stacking"] = false;
      whiteList["line-stacking-ruby"] = false;
      whiteList["line-stacking-shift"] = false;
      whiteList["line-stacking-strategy"] = false;
      whiteList["list-style"] = true;
      whiteList["list-style-image"] = true;
      whiteList["list-style-position"] = true;
      whiteList["list-style-type"] = true;
      whiteList["margin"] = true;
      whiteList["margin-bottom"] = true;
      whiteList["margin-left"] = true;
      whiteList["margin-right"] = true;
      whiteList["margin-top"] = true;
      whiteList["marker-offset"] = false;
      whiteList["marker-side"] = false;
      whiteList["marks"] = false;
      whiteList["mask"] = false;
      whiteList["mask-box"] = false;
      whiteList["mask-box-outset"] = false;
      whiteList["mask-box-repeat"] = false;
      whiteList["mask-box-slice"] = false;
      whiteList["mask-box-source"] = false;
      whiteList["mask-box-width"] = false;
      whiteList["mask-clip"] = false;
      whiteList["mask-image"] = false;
      whiteList["mask-origin"] = false;
      whiteList["mask-position"] = false;
      whiteList["mask-repeat"] = false;
      whiteList["mask-size"] = false;
      whiteList["mask-source-type"] = false;
      whiteList["mask-type"] = false;
      whiteList["max-height"] = true;
      whiteList["max-lines"] = false;
      whiteList["max-width"] = true;
      whiteList["min-height"] = true;
      whiteList["min-width"] = true;
      whiteList["move-to"] = false;
      whiteList["nav-down"] = false;
      whiteList["nav-index"] = false;
      whiteList["nav-left"] = false;
      whiteList["nav-right"] = false;
      whiteList["nav-up"] = false;
      whiteList["object-fit"] = false;
      whiteList["object-position"] = false;
      whiteList["opacity"] = false;
      whiteList["order"] = false;
      whiteList["orphans"] = false;
      whiteList["outline"] = false;
      whiteList["outline-color"] = false;
      whiteList["outline-offset"] = false;
      whiteList["outline-style"] = false;
      whiteList["outline-width"] = false;
      whiteList["overflow"] = false;
      whiteList["overflow-wrap"] = false;
      whiteList["overflow-x"] = false;
      whiteList["overflow-y"] = false;
      whiteList["padding"] = true;
      whiteList["padding-bottom"] = true;
      whiteList["padding-left"] = true;
      whiteList["padding-right"] = true;
      whiteList["padding-top"] = true;
      whiteList["page"] = false;
      whiteList["page-break-after"] = false;
      whiteList["page-break-before"] = false;
      whiteList["page-break-inside"] = false;
      whiteList["page-policy"] = false;
      whiteList["pause"] = false;
      whiteList["pause-after"] = false;
      whiteList["pause-before"] = false;
      whiteList["perspective"] = false;
      whiteList["perspective-origin"] = false;
      whiteList["pitch"] = false;
      whiteList["pitch-range"] = false;
      whiteList["play-during"] = false;
      whiteList["position"] = false;
      whiteList["presentation-level"] = false;
      whiteList["quotes"] = false;
      whiteList["region-fragment"] = false;
      whiteList["resize"] = false;
      whiteList["rest"] = false;
      whiteList["rest-after"] = false;
      whiteList["rest-before"] = false;
      whiteList["richness"] = false;
      whiteList["right"] = false;
      whiteList["rotation"] = false;
      whiteList["rotation-point"] = false;
      whiteList["ruby-align"] = false;
      whiteList["ruby-merge"] = false;
      whiteList["ruby-position"] = false;
      whiteList["shape-image-threshold"] = false;
      whiteList["shape-outside"] = false;
      whiteList["shape-margin"] = false;
      whiteList["size"] = false;
      whiteList["speak"] = false;
      whiteList["speak-as"] = false;
      whiteList["speak-header"] = false;
      whiteList["speak-numeral"] = false;
      whiteList["speak-punctuation"] = false;
      whiteList["speech-rate"] = false;
      whiteList["stress"] = false;
      whiteList["string-set"] = false;
      whiteList["tab-size"] = false;
      whiteList["table-layout"] = false;
      whiteList["text-align"] = true;
      whiteList["text-align-last"] = true;
      whiteList["text-combine-upright"] = true;
      whiteList["text-decoration"] = true;
      whiteList["text-decoration-color"] = true;
      whiteList["text-decoration-line"] = true;
      whiteList["text-decoration-skip"] = true;
      whiteList["text-decoration-style"] = true;
      whiteList["text-emphasis"] = true;
      whiteList["text-emphasis-color"] = true;
      whiteList["text-emphasis-position"] = true;
      whiteList["text-emphasis-style"] = true;
      whiteList["text-height"] = true;
      whiteList["text-indent"] = true;
      whiteList["text-justify"] = true;
      whiteList["text-orientation"] = true;
      whiteList["text-overflow"] = true;
      whiteList["text-shadow"] = true;
      whiteList["text-space-collapse"] = true;
      whiteList["text-transform"] = true;
      whiteList["text-underline-position"] = true;
      whiteList["text-wrap"] = true;
      whiteList["top"] = false;
      whiteList["transform"] = false;
      whiteList["transform-origin"] = false;
      whiteList["transform-style"] = false;
      whiteList["transition"] = false;
      whiteList["transition-delay"] = false;
      whiteList["transition-duration"] = false;
      whiteList["transition-property"] = false;
      whiteList["transition-timing-function"] = false;
      whiteList["unicode-bidi"] = false;
      whiteList["vertical-align"] = false;
      whiteList["visibility"] = false;
      whiteList["voice-balance"] = false;
      whiteList["voice-duration"] = false;
      whiteList["voice-family"] = false;
      whiteList["voice-pitch"] = false;
      whiteList["voice-range"] = false;
      whiteList["voice-rate"] = false;
      whiteList["voice-stress"] = false;
      whiteList["voice-volume"] = false;
      whiteList["volume"] = false;
      whiteList["white-space"] = false;
      whiteList["widows"] = false;
      whiteList["width"] = true;
      whiteList["will-change"] = false;
      whiteList["word-break"] = true;
      whiteList["word-spacing"] = true;
      whiteList["word-wrap"] = true;
      whiteList["wrap-flow"] = false;
      whiteList["wrap-through"] = false;
      whiteList["writing-mode"] = false;
      whiteList["z-index"] = false;
      return whiteList;
    }
    function onAttr(name, value, options) {
    }
    function onIgnoreAttr(name, value, options) {
    }
    var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
    function safeAttrValue(name, value) {
      if (REGEXP_URL_JAVASCRIPT.test(value))
        return "";
      return value;
    }
    exports.whiteList = getDefaultWhiteList();
    exports.getDefaultWhiteList = getDefaultWhiteList;
    exports.onAttr = onAttr;
    exports.onIgnoreAttr = onIgnoreAttr;
    exports.safeAttrValue = safeAttrValue;
  }
});

// ../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/util.js
var require_util = __commonJS({
  "../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/util.js"(exports, module) {
    module.exports = {
      indexOf: function(arr, item) {
        var i, j;
        if (Array.prototype.indexOf) {
          return arr.indexOf(item);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          if (arr[i] === item) {
            return i;
          }
        }
        return -1;
      },
      forEach: function(arr, fn, scope) {
        var i, j;
        if (Array.prototype.forEach) {
          return arr.forEach(fn, scope);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          fn.call(scope, arr[i], i, arr);
        }
      },
      trim: function(str) {
        if (String.prototype.trim) {
          return str.trim();
        }
        return str.replace(/(^\s*)|(\s*$)/g, "");
      },
      trimRight: function(str) {
        if (String.prototype.trimRight) {
          return str.trimRight();
        }
        return str.replace(/(\s*$)/g, "");
      }
    };
  }
});

// ../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/parser.js
var require_parser = __commonJS({
  "../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/parser.js"(exports, module) {
    var _4 = require_util();
    function parseStyle(css, onAttr) {
      css = _4.trimRight(css);
      if (css[css.length - 1] !== ";")
        css += ";";
      var cssLength = css.length;
      var isParenthesisOpen = false;
      var lastPos = 0;
      var i = 0;
      var retCSS = "";
      function addNewAttr() {
        if (!isParenthesisOpen) {
          var source = _4.trim(css.slice(lastPos, i));
          var j2 = source.indexOf(":");
          if (j2 !== -1) {
            var name = _4.trim(source.slice(0, j2));
            var value = _4.trim(source.slice(j2 + 1));
            if (name) {
              var ret = onAttr(lastPos, retCSS.length, name, value, source);
              if (ret)
                retCSS += ret + "; ";
            }
          }
        }
        lastPos = i + 1;
      }
      for (; i < cssLength; i++) {
        var c = css[i];
        if (c === "/" && css[i + 1] === "*") {
          var j = css.indexOf("*/", i + 2);
          if (j === -1)
            break;
          i = j + 1;
          lastPos = i + 1;
          isParenthesisOpen = false;
        } else if (c === "(") {
          isParenthesisOpen = true;
        } else if (c === ")") {
          isParenthesisOpen = false;
        } else if (c === ";") {
          if (isParenthesisOpen) {
          } else {
            addNewAttr();
          }
        } else if (c === "\n") {
          addNewAttr();
        }
      }
      return _4.trim(retCSS);
    }
    module.exports = parseStyle;
  }
});

// ../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/css.js
var require_css = __commonJS({
  "../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/css.js"(exports, module) {
    var DEFAULT = require_default();
    var parseStyle = require_parser();
    var _4 = require_util();
    function isNull(obj) {
      return obj === void 0 || obj === null;
    }
    function shallowCopyObject(obj) {
      var ret = {};
      for (var i in obj) {
        ret[i] = obj[i];
      }
      return ret;
    }
    function FilterCSS(options) {
      options = shallowCopyObject(options || {});
      options.whiteList = options.whiteList || DEFAULT.whiteList;
      options.onAttr = options.onAttr || DEFAULT.onAttr;
      options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
      options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
      this.options = options;
    }
    FilterCSS.prototype.process = function(css) {
      css = css || "";
      css = css.toString();
      if (!css)
        return "";
      var me = this;
      var options = me.options;
      var whiteList = options.whiteList;
      var onAttr = options.onAttr;
      var onIgnoreAttr = options.onIgnoreAttr;
      var safeAttrValue = options.safeAttrValue;
      var retCSS = parseStyle(css, function(sourcePosition, position, name, value, source) {
        var check = whiteList[name];
        var isWhite = false;
        if (check === true)
          isWhite = check;
        else if (typeof check === "function")
          isWhite = check(value);
        else if (check instanceof RegExp)
          isWhite = check.test(value);
        if (isWhite !== true)
          isWhite = false;
        value = safeAttrValue(name, value);
        if (!value)
          return;
        var opts = {
          position,
          sourcePosition,
          source,
          isWhite
        };
        if (isWhite) {
          var ret = onAttr(name, value, opts);
          if (isNull(ret)) {
            return name + ":" + value;
          } else {
            return ret;
          }
        } else {
          var ret = onIgnoreAttr(name, value, opts);
          if (!isNull(ret)) {
            return ret;
          }
        }
      });
      return retCSS;
    };
    module.exports = FilterCSS;
  }
});

// ../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/index.js"(exports, module) {
    var DEFAULT = require_default();
    var FilterCSS = require_css();
    function filterCSS(html, options) {
      var xss2 = new FilterCSS(options);
      return xss2.process(html);
    }
    exports = module.exports = filterCSS;
    exports.FilterCSS = FilterCSS;
    for (i in DEFAULT)
      exports[i] = DEFAULT[i];
    var i;
    if (typeof window !== "undefined") {
      window.filterCSS = module.exports;
    }
  }
});

// ../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/util.js
var require_util2 = __commonJS({
  "../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/util.js"(exports, module) {
    module.exports = {
      indexOf: function(arr, item) {
        var i, j;
        if (Array.prototype.indexOf) {
          return arr.indexOf(item);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          if (arr[i] === item) {
            return i;
          }
        }
        return -1;
      },
      forEach: function(arr, fn, scope) {
        var i, j;
        if (Array.prototype.forEach) {
          return arr.forEach(fn, scope);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          fn.call(scope, arr[i], i, arr);
        }
      },
      trim: function(str) {
        if (String.prototype.trim) {
          return str.trim();
        }
        return str.replace(/(^\s*)|(\s*$)/g, "");
      },
      spaceIndex: function(str) {
        var reg = /\s|\n|\t/;
        var match = reg.exec(str);
        return match ? match.index : -1;
      }
    };
  }
});

// ../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/default.js
var require_default2 = __commonJS({
  "../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/default.js"(exports) {
    var FilterCSS = require_lib().FilterCSS;
    var getDefaultCSSWhiteList = require_lib().getDefaultWhiteList;
    var _4 = require_util2();
    function getDefaultWhiteList() {
      return {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "preload",
          "src"
        ],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        ins: ["datetime"],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ["width", "border", "align", "valign"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: [],
        video: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "playsinline",
          "poster",
          "preload",
          "src",
          "height",
          "width"
        ]
      };
    }
    var defaultCSSFilter = new FilterCSS();
    function onTag(tag, html, options) {
    }
    function onIgnoreTag(tag, html, options) {
    }
    function onTagAttr(tag, name, value) {
    }
    function onIgnoreTagAttr(tag, name, value) {
    }
    function escapeHtml(html) {
      return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
    }
    function safeAttrValue(tag, name, value, cssFilter) {
      value = friendlyAttrValue(value);
      if (name === "href" || name === "src") {
        value = _4.trim(value);
        if (value === "#")
          return "#";
        if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
          return "";
        }
      } else if (name === "background") {
        REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
          return "";
        }
      } else if (name === "style") {
        REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
          return "";
        }
        REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
          REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
            return "";
          }
        }
        if (cssFilter !== false) {
          cssFilter = cssFilter || defaultCSSFilter;
          value = cssFilter.process(value);
        }
      }
      value = escapeAttrValue2(value);
      return value;
    }
    var REGEXP_LT = /</g;
    var REGEXP_GT = />/g;
    var REGEXP_QUOTE = /"/g;
    var REGEXP_QUOTE_2 = /&quot;/g;
    var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
    var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
    var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
    var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
    var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
    var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
    function escapeQuote(str) {
      return str.replace(REGEXP_QUOTE, "&quot;");
    }
    function unescapeQuote(str) {
      return str.replace(REGEXP_QUOTE_2, '"');
    }
    function escapeHtmlEntities(str) {
      return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str2, code) {
        return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
      });
    }
    function escapeDangerHtml5Entities(str) {
      return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
    }
    function clearNonPrintableCharacter(str) {
      var str2 = "";
      for (var i = 0, len = str.length; i < len; i++) {
        str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
      }
      return _4.trim(str2);
    }
    function friendlyAttrValue(str) {
      str = unescapeQuote(str);
      str = escapeHtmlEntities(str);
      str = escapeDangerHtml5Entities(str);
      str = clearNonPrintableCharacter(str);
      return str;
    }
    function escapeAttrValue2(str) {
      str = escapeQuote(str);
      str = escapeHtml(str);
      return str;
    }
    function onIgnoreTagStripAll() {
      return "";
    }
    function StripTagBody(tags, next) {
      if (typeof next !== "function") {
        next = function() {
        };
      }
      var isRemoveAllTag = !Array.isArray(tags);
      function isRemoveTag(tag) {
        if (isRemoveAllTag)
          return true;
        return _4.indexOf(tags, tag) !== -1;
      }
      var removeList = [];
      var posStart = false;
      return {
        onIgnoreTag: function(tag, html, options) {
          if (isRemoveTag(tag)) {
            if (options.isClosing) {
              var ret = "[/removed]";
              var end = options.position + ret.length;
              removeList.push([
                posStart !== false ? posStart : options.position,
                end
              ]);
              posStart = false;
              return ret;
            } else {
              if (!posStart) {
                posStart = options.position;
              }
              return "[removed]";
            }
          } else {
            return next(tag, html, options);
          }
        },
        remove: function(html) {
          var rethtml = "";
          var lastPos = 0;
          _4.forEach(removeList, function(pos) {
            rethtml += html.slice(lastPos, pos[0]);
            lastPos = pos[1];
          });
          rethtml += html.slice(lastPos);
          return rethtml;
        }
      };
    }
    function stripCommentTag(html) {
      var retHtml = "";
      var lastPos = 0;
      while (lastPos < html.length) {
        var i = html.indexOf("<!--", lastPos);
        if (i === -1) {
          retHtml += html.slice(lastPos);
          break;
        }
        retHtml += html.slice(lastPos, i);
        var j = html.indexOf("-->", i);
        if (j === -1) {
          break;
        }
        lastPos = j + 3;
      }
      return retHtml;
    }
    function stripBlankChar(html) {
      var chars = html.split("");
      chars = chars.filter(function(char) {
        var c = char.charCodeAt(0);
        if (c === 127)
          return false;
        if (c <= 31) {
          if (c === 10 || c === 13)
            return true;
          return false;
        }
        return true;
      });
      return chars.join("");
    }
    exports.whiteList = getDefaultWhiteList();
    exports.getDefaultWhiteList = getDefaultWhiteList;
    exports.onTag = onTag;
    exports.onIgnoreTag = onIgnoreTag;
    exports.onTagAttr = onTagAttr;
    exports.onIgnoreTagAttr = onIgnoreTagAttr;
    exports.safeAttrValue = safeAttrValue;
    exports.escapeHtml = escapeHtml;
    exports.escapeQuote = escapeQuote;
    exports.unescapeQuote = unescapeQuote;
    exports.escapeHtmlEntities = escapeHtmlEntities;
    exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
    exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
    exports.friendlyAttrValue = friendlyAttrValue;
    exports.escapeAttrValue = escapeAttrValue2;
    exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
    exports.StripTagBody = StripTagBody;
    exports.stripCommentTag = stripCommentTag;
    exports.stripBlankChar = stripBlankChar;
    exports.cssFilter = defaultCSSFilter;
    exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
  }
});

// ../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/parser.js
var require_parser2 = __commonJS({
  "../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/parser.js"(exports) {
    var _4 = require_util2();
    function getTagName(html) {
      var i = _4.spaceIndex(html);
      var tagName;
      if (i === -1) {
        tagName = html.slice(1, -1);
      } else {
        tagName = html.slice(1, i + 1);
      }
      tagName = _4.trim(tagName).toLowerCase();
      if (tagName.slice(0, 1) === "/")
        tagName = tagName.slice(1);
      if (tagName.slice(-1) === "/")
        tagName = tagName.slice(0, -1);
      return tagName;
    }
    function isClosing(html) {
      return html.slice(0, 2) === "</";
    }
    function parseTag(html, onTag, escapeHtml) {
      "use strict";
      var rethtml = "";
      var lastPos = 0;
      var tagStart = false;
      var quoteStart = false;
      var currentPos = 0;
      var len = html.length;
      var currentTagName = "";
      var currentHtml = "";
      chariterator:
        for (currentPos = 0; currentPos < len; currentPos++) {
          var c = html.charAt(currentPos);
          if (tagStart === false) {
            if (c === "<") {
              tagStart = currentPos;
              continue;
            }
          } else {
            if (quoteStart === false) {
              if (c === "<") {
                rethtml += escapeHtml(html.slice(lastPos, currentPos));
                tagStart = currentPos;
                lastPos = currentPos;
                continue;
              }
              if (c === ">" || currentPos === len - 1) {
                rethtml += escapeHtml(html.slice(lastPos, tagStart));
                currentHtml = html.slice(tagStart, currentPos + 1);
                currentTagName = getTagName(currentHtml);
                rethtml += onTag(
                  tagStart,
                  rethtml.length,
                  currentTagName,
                  currentHtml,
                  isClosing(currentHtml)
                );
                lastPos = currentPos + 1;
                tagStart = false;
                continue;
              }
              if (c === '"' || c === "'") {
                var i = 1;
                var ic = html.charAt(currentPos - i);
                while (ic.trim() === "" || ic === "=") {
                  if (ic === "=") {
                    quoteStart = c;
                    continue chariterator;
                  }
                  ic = html.charAt(currentPos - ++i);
                }
              }
            } else {
              if (c === quoteStart) {
                quoteStart = false;
                continue;
              }
            }
          }
        }
      if (lastPos < len) {
        rethtml += escapeHtml(html.substr(lastPos));
      }
      return rethtml;
    }
    var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;
    function parseAttr(html, onAttr) {
      "use strict";
      var lastPos = 0;
      var lastMarkPos = 0;
      var retAttrs = [];
      var tmpName = false;
      var len = html.length;
      function addAttr(name, value) {
        name = _4.trim(name);
        name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
        if (name.length < 1)
          return;
        var ret = onAttr(name, value || "");
        if (ret)
          retAttrs.push(ret);
      }
      for (var i = 0; i < len; i++) {
        var c = html.charAt(i);
        var v, j;
        if (tmpName === false && c === "=") {
          tmpName = html.slice(lastPos, i);
          lastPos = i + 1;
          lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
          continue;
        }
        if (tmpName !== false) {
          if (i === lastMarkPos) {
            j = html.indexOf(c, i + 1);
            if (j === -1) {
              break;
            } else {
              v = _4.trim(html.slice(lastMarkPos + 1, j));
              addAttr(tmpName, v);
              tmpName = false;
              i = j;
              lastPos = i + 1;
              continue;
            }
          }
        }
        if (/\s|\n|\t/.test(c)) {
          html = html.replace(/\s|\n|\t/g, " ");
          if (tmpName === false) {
            j = findNextEqual(html, i);
            if (j === -1) {
              v = _4.trim(html.slice(lastPos, i));
              addAttr(v);
              tmpName = false;
              lastPos = i + 1;
              continue;
            } else {
              i = j - 1;
              continue;
            }
          } else {
            j = findBeforeEqual(html, i - 1);
            if (j === -1) {
              v = _4.trim(html.slice(lastPos, i));
              v = stripQuoteWrap(v);
              addAttr(tmpName, v);
              tmpName = false;
              lastPos = i + 1;
              continue;
            } else {
              continue;
            }
          }
        }
      }
      if (lastPos < html.length) {
        if (tmpName === false) {
          addAttr(html.slice(lastPos));
        } else {
          addAttr(tmpName, stripQuoteWrap(_4.trim(html.slice(lastPos))));
        }
      }
      return _4.trim(retAttrs.join(" "));
    }
    function findNextEqual(str, i) {
      for (; i < str.length; i++) {
        var c = str[i];
        if (c === " ")
          continue;
        if (c === "=")
          return i;
        return -1;
      }
    }
    function findNextQuotationMark(str, i) {
      for (; i < str.length; i++) {
        var c = str[i];
        if (c === " ")
          continue;
        if (c === "'" || c === '"')
          return i;
        return -1;
      }
    }
    function findBeforeEqual(str, i) {
      for (; i > 0; i--) {
        var c = str[i];
        if (c === " ")
          continue;
        if (c === "=")
          return i;
        return -1;
      }
    }
    function isQuoteWrapString(text) {
      if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
        return true;
      } else {
        return false;
      }
    }
    function stripQuoteWrap(text) {
      if (isQuoteWrapString(text)) {
        return text.substr(1, text.length - 2);
      } else {
        return text;
      }
    }
    exports.parseTag = parseTag;
    exports.parseAttr = parseAttr;
  }
});

// ../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/xss.js
var require_xss = __commonJS({
  "../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/xss.js"(exports, module) {
    var FilterCSS = require_lib().FilterCSS;
    var DEFAULT = require_default2();
    var parser = require_parser2();
    var parseTag = parser.parseTag;
    var parseAttr = parser.parseAttr;
    var _4 = require_util2();
    function isNull(obj) {
      return obj === void 0 || obj === null;
    }
    function getAttrs(html) {
      var i = _4.spaceIndex(html);
      if (i === -1) {
        return {
          html: "",
          closing: html[html.length - 2] === "/"
        };
      }
      html = _4.trim(html.slice(i + 1, -1));
      var isClosing = html[html.length - 1] === "/";
      if (isClosing)
        html = _4.trim(html.slice(0, -1));
      return {
        html,
        closing: isClosing
      };
    }
    function shallowCopyObject(obj) {
      var ret = {};
      for (var i in obj) {
        ret[i] = obj[i];
      }
      return ret;
    }
    function keysToLowerCase(obj) {
      var ret = {};
      for (var i in obj) {
        if (Array.isArray(obj[i])) {
          ret[i.toLowerCase()] = obj[i].map(function(item) {
            return item.toLowerCase();
          });
        } else {
          ret[i.toLowerCase()] = obj[i];
        }
      }
      return ret;
    }
    function FilterXSS(options) {
      options = shallowCopyObject(options || {});
      if (options.stripIgnoreTag) {
        if (options.onIgnoreTag) {
          console.error(
            'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
          );
        }
        options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
      }
      if (options.whiteList || options.allowList) {
        options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
      } else {
        options.whiteList = DEFAULT.whiteList;
      }
      options.onTag = options.onTag || DEFAULT.onTag;
      options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
      options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
      options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
      options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
      options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
      this.options = options;
      if (options.css === false) {
        this.cssFilter = false;
      } else {
        options.css = options.css || {};
        this.cssFilter = new FilterCSS(options.css);
      }
    }
    FilterXSS.prototype.process = function(html) {
      html = html || "";
      html = html.toString();
      if (!html)
        return "";
      var me = this;
      var options = me.options;
      var whiteList = options.whiteList;
      var onTag = options.onTag;
      var onIgnoreTag = options.onIgnoreTag;
      var onTagAttr = options.onTagAttr;
      var onIgnoreTagAttr = options.onIgnoreTagAttr;
      var safeAttrValue = options.safeAttrValue;
      var escapeHtml = options.escapeHtml;
      var cssFilter = me.cssFilter;
      if (options.stripBlankChar) {
        html = DEFAULT.stripBlankChar(html);
      }
      if (!options.allowCommentTag) {
        html = DEFAULT.stripCommentTag(html);
      }
      var stripIgnoreTagBody = false;
      if (options.stripIgnoreTagBody) {
        stripIgnoreTagBody = DEFAULT.StripTagBody(
          options.stripIgnoreTagBody,
          onIgnoreTag
        );
        onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
      }
      var retHtml = parseTag(
        html,
        function(sourcePosition, position, tag, html2, isClosing) {
          var info = {
            sourcePosition,
            position,
            isClosing,
            isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag)
          };
          var ret = onTag(tag, html2, info);
          if (!isNull(ret))
            return ret;
          if (info.isWhite) {
            if (info.isClosing) {
              return "</" + tag + ">";
            }
            var attrs = getAttrs(html2);
            var whiteAttrList = whiteList[tag];
            var attrsHtml = parseAttr(attrs.html, function(name, value) {
              var isWhiteAttr = _4.indexOf(whiteAttrList, name) !== -1;
              var ret2 = onTagAttr(tag, name, value, isWhiteAttr);
              if (!isNull(ret2))
                return ret2;
              if (isWhiteAttr) {
                value = safeAttrValue(tag, name, value, cssFilter);
                if (value) {
                  return name + '="' + value + '"';
                } else {
                  return name;
                }
              } else {
                ret2 = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
                if (!isNull(ret2))
                  return ret2;
                return;
              }
            });
            html2 = "<" + tag;
            if (attrsHtml)
              html2 += " " + attrsHtml;
            if (attrs.closing)
              html2 += " /";
            html2 += ">";
            return html2;
          } else {
            ret = onIgnoreTag(tag, html2, info);
            if (!isNull(ret))
              return ret;
            return escapeHtml(html2);
          }
        },
        escapeHtml
      );
      if (stripIgnoreTagBody) {
        retHtml = stripIgnoreTagBody.remove(retHtml);
      }
      return retHtml;
    };
    module.exports = FilterXSS;
  }
});

// ../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/index.js
var require_lib2 = __commonJS({
  "../../node_modules/.pnpm/xss@1.0.14/node_modules/xss/lib/index.js"(exports, module) {
    var DEFAULT = require_default2();
    var parser = require_parser2();
    var FilterXSS = require_xss();
    function filterXSS(html, options) {
      var xss2 = new FilterXSS(options);
      return xss2.process(html);
    }
    exports = module.exports = filterXSS;
    exports.filterXSS = filterXSS;
    exports.FilterXSS = FilterXSS;
    (function() {
      for (var i in DEFAULT) {
        exports[i] = DEFAULT[i];
      }
      for (var j in parser) {
        exports[j] = parser[j];
      }
    })();
    if (typeof window !== "undefined") {
      window.filterXSS = module.exports;
    }
    function isWorkerEnv() {
      return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
    }
    if (isWorkerEnv()) {
      self.filterXSS = module.exports;
    }
  }
});

// src/js-components/tab/index.ts
var IRPageControl = class {
  constructor() {
  }
};

// src/js-components/tree/tree.classNames.ts
var block = "tree";
var tree_classNames_default = {
  tree: BEMClass({ block }),
  treeList: BEMClass({ block, element: "list" }),
  treeLabel: BEMClass({ block, element: "label" }),
  treeLabelText: BEMClass({ block, element: "label-text" }),
  treeItem: BEMClass({ block, element: "item", modifier: ["parent"], state: ["is-expanded", "is-selected"] }),
  treeItemContent: BEMClass({ block, element: "item-content" }),
  treeIconFolder: BEMClass({ block, element: "icon-folder" }),
  treeIconExpand: BEMClass({ block, element: "icon-expand" })
};

// src/components/checkbox/checkbox.classNames.ts
var block2 = "checkbox";
var checkbox_classNames_default = {
  checkbox: BEMClass({ block: block2 }),
  checkboxInput: BEMClass({ block: block2, element: "input" }),
  checkboxWrapper: BEMClass({ block: block2, element: "wrapper" }),
  text: BEMClass({ block: block2, element: "text" })
};

// src/js-components/tree/renderer.ts
var renderDefaultTreeNode = (_node) => {
  const content2 = document.createElement("div");
  const iconFolder = document.createElement("i");
  const span = document.createElement("span");
  content2.className = tree_classNames_default.treeLabel.blockElementName;
  span.className = tree_classNames_default.treeLabelText.blockElementName;
  return {
    get template() {
      return content2;
    },
    update: (node) => {
      if (node.iconClass) {
        if (!iconFolder.isConnected)
          content2.insertAdjacentElement("afterbegin", iconFolder);
        iconFolder.className = `${tree_classNames_default.treeIconFolder.blockElementName} ir-icon ${node.iconClass}`;
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
    label.classList.add(checkbox_classNames_default.checkboxWrapper.blockElementName);
    checkbox.classList.add(checkbox_classNames_default.checkboxInput.blockElementName);
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
    this.liTreeItem.classList.add(tree_classNames_default.treeItem.blockElementName);
    this.divTreeItemContent = appendElement(this.liTreeItem, "div", tree_classNames_default.treeItemContent.blockElementName);
    this.ulTreeList = document.createElement("ul");
    this.ulTreeList.classList.add(tree_classNames_default.treeList.blockElementName);
    this.iconExpand = appendElement(this.divTreeItemContent, "i", tree_classNames_default.treeIconExpand.blockElementName, "ir-icon", statusIcon);
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
  onDragStart(_ev) {
  }
  onDrop(_ev) {
  }
  onDragEnd(_ev) {
  }
  onDragOver(_ev) {
    return false;
  }
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
    contextElement.classList.add(tree_classNames_default.tree.blockElementName);
    this.rootElement = appendElement(contextElement, "ul", tree_classNames_default.treeList.blockElementName);
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
    const label = hasClass(ev.target, tree_classNames_default.treeLabel.blockElementName, this.contextElement);
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
  select: BEMClass({ block: selectBlock, modifier: ["transparent"], state: ["is-expanded"] }),
  selectItem: BEMClass({ block: selectBlock, element: "item" }),
  selectInput: BEMClass({ block: selectBlock, element: "input" }),
  selectInputNative: BEMClass({ block: selectBlock, element: "input-native" }),
  selectInputIcon: BEMClass({ block: selectBlock, element: "input-icon" }),
  selectDropdown: BEMClass({ block: selectDropdownBlock }),
  selectDropdownList: BEMClass({ block: selectDropdownBlock, element: "list" }),
  selectDropdownButton: BEMClass({ block: selectDropdownBlock, element: "button", state: ["is-selected"] }),
  selectDropdownItem: BEMClass({ block: selectDropdownBlock, element: "item" }),
  selectDropdownIcon: BEMClass({ block: selectDropdownBlock, element: "icon" })
};

// src/js-components/select/select.ts
var createDropdownDiv = () => {
  const divDropdown = document.createElement("div");
  const ulItems = document.createElement("ul");
  divDropdown.classList.add(select_classNames_default.selectDropdown.blockElementName, z_index_classNames_default.zIndex.popover);
  ulItems.className = select_classNames_default.selectDropdownList.blockElementName;
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
  button.className = select_classNames_default.selectDropdownButton.blockElementName;
  item.className = select_classNames_default.selectDropdownItem.blockElementName;
  item.setAttribute("ir-select-value", value);
  icon.classList.add(select_classNames_default.selectDropdownIcon.blockElementName, "ir-icon", "ir-icon--check");
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
    this.divSelect.classList.add(select_classNames_default.select.blockElementName);
    this.select.classList.forEach((cls) => this.divSelect.classList.add(cls));
    this.divInput.className = select_classNames_default.selectInput.blockElementName;
    this.inputValue.className = select_classNames_default.selectInputNative.blockElementName;
    icon.classList.add(select_classNames_default.selectInputIcon.blockElementName, "ir-icon", "ir-icon--chevron-down");
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
var import_moment2 = __toESM(require_moment());

// src/js-components/datePicker/datePicker.handler.ts
var import_lodash2 = __toESM(require_lodash());
var import_moment = __toESM(require_moment());

// src/js-components/datePicker/datePicker.classNames.ts
var block3 = "datepicker";
var datePicker_classNames_default = {
  datePicker: BEMClass({ block: block3, state: ["is-visible"] }),
  datePickerHeader: BEMClass({ block: block3, element: "header" }),
  datePickerHeaderTitle: BEMClass({ block: block3, element: "header-title" }),
  datePickerHeaderButton: BEMClass({ block: block3, element: "header-button", modifier: ["prev", "next"] }),
  datePickerContent: BEMClass({ block: block3, element: "content" }),
  datePickerFooter: BEMClass({ block: block3, element: "footer" }),
  datePickerCell: BEMClass({ block: block3, element: "cell", state: ["is-selected", "is-disabled"] })
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
headerPrevYear.innerHTML = `<i class="ir-icon ir-icon--chevron-double-left"></i>`;
headerPrev.innerHTML = `<i class="ir-icon ir-icon--chevron-left"></i>`;
headerNext.innerHTML = `<i class="ir-icon ir-icon--chevron-right"></i>`;
headerNextYear.innerHTML = `<i class="ir-icon ir-icon--chevron-double-right"></i>`;
var content = document.createElement("div");
var contentTable = document.createElement("table");
var contentTableThead = document.createElement("thead");
var contentTableTbody = document.createElement("tbody");
var footer = document.createElement("div");
datePicker.classList.add(datePicker_classNames_default.datePicker.blockElementName, z_index_classNames_default.zIndex.popover);
header.classList.add(datePicker_classNames_default.datePickerHeader.blockElementName);
headerTitle.classList.add(datePicker_classNames_default.datePickerHeaderTitle.blockElementName);
headerPrevYear.classList.add("icon-button", datePicker_classNames_default.datePickerHeaderButton.blockElementName);
headerPrev.classList.add("icon-button", datePicker_classNames_default.datePickerHeaderButton.blockElementName);
headerNext.classList.add("icon-button", datePicker_classNames_default.datePickerHeaderButton.blockElementName);
headerNextYear.classList.add("icon-button", datePicker_classNames_default.datePickerHeaderButton.blockElementName);
content.classList.add(datePicker_classNames_default.datePickerContent.blockElementName);
footer.classList.add(datePicker_classNames_default.datePickerFooter.blockElementName);
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
  todayButton.innerHTML = ` <i class="button__icon-prefix ir-icon ir-icon--check"></i>${i18n_default.datePicker.btnToday}`;
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
        const today = new Date();
        onClick.call(null, today);
        this.update(today, today);
      };
      datePicker_elements_default.updateI18n();
      datePicker_elements_default.headerTitle.innerText = (0, import_moment.default)(tmp).format(i18n_default.datePicker.titleFormat);
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
  input: BEMClass({ block: block4 }),
  inputNative: BEMClass({ block: block4, element: "native" }),
  inputSuffix: BEMClass({ block: block4, element: "suffix" }),
  inputPrefix: BEMClass({ block: block4, element: "prefix" })
};

// src/js-components/datePicker/datePicker.ts
var convertToMomentFromStrOrDate = (defaultDate, format) => {
  if (defaultDate instanceof Date)
    return (0, import_moment2.default)(defaultDate).startOf("D");
  else if (typeof defaultDate === "string")
    return (0, import_moment2.default)(defaultDate, format);
  return import_moment2.default.invalid();
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
    minDate = new Date(0),
    maxDate = new Date("9999-12-31")
  }) {
    super({ contextElement: div });
    this.selectedDate = null;
    this.calendarDate = new Date();
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
    this.button.innerHTML = '<i class="ir-icon ir-icon--calendar"></i>';
    this.div.innerHTML = "";
    this.div.classList.add(input_classNames_default.input.blockElementName);
    this.input.setAttribute("type", "text");
    this.input.setAttribute("placeHolder", this.format);
    this.input.className = input_classNames_default.inputNative.blockElementName;
    this.button.className = input_classNames_default.inputSuffix.blockElementName;
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
      divInputPrefix.classList.add(checkbox_classNames_default.checkbox.blockElementName, input_classNames_default.inputPrefix.blockElementName);
      checkboxLabel.className = checkbox_classNames_default.checkboxWrapper.blockElementName;
      inputCheckbox.className = checkbox_classNames_default.checkboxInput.blockElementName;
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
      this.input.value = (0, import_moment2.default)(this.selectedDate).format(format);
    this.button.addEventListener("click", () => {
      if (this.isVisible === false)
        this.show();
    });
    this.input.addEventListener("blur", () => {
      const dt = (0, import_moment2.default)(this.input.value, this.format, true);
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
  set disabled(bool) {
    if (bool) {
      this.input.setAttribute("disabled", "");
      this.button.setAttribute("disabled", "");
    } else {
      this.input.removeAttribute("disabled");
      this.button.removeAttribute("disabled");
    }
  }
  setDate(date) {
    if (date) {
      this.selectedDate = new Date(date);
      this.calendarDate = new Date(date);
      this.input.value = (0, import_moment2.default)(date).format(this.format);
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
  onSelect(_date) {
  }
  onChange(_value) {
  }
  updateCalendar() {
    this.handler.update(this.calendarDate, this.selectedDate);
  }
};

// src/js-components/confirm/confirm.ts
var import_xss = __toESM(require_lib2());

// src/js-components/confirm/confirm.classNames.ts
var block5 = "confirm";
var confirm_classNames_default = {
  confirm: BEMClass({ block: block5 }),
  confirmIcon: BEMClass({ block: block5, element: "icon" }),
  confirmContent: BEMClass({ block: block5, element: "content" }),
  confirmActions: BEMClass({ block: block5, element: "actions" }),
  confirmButtonClose: BEMClass({ block: block5, element: "button-close" })
};

// src/components/button/button.classNames.ts
var block6 = "button";
var button_classNames_default = {
  button: BEMClass({ block: block6, modifier: ["primary", "secondary", "tertiary", "transparent"] }),
  buttonIcon: BEMClass({ block: block6, element: "icon-prefix" })
};

// src/components/dialog/dialog.classNames.ts
var block7 = "dialog";
var dialog_classNames_default = {
  dialog: BEMClass({ block: block7, modifier: ["transparent"], state: ["is-visible"] }),
  dialogWrapper: BEMClass({ block: block7, element: "wrapper" }),
  dialogHeader: BEMClass({ block: block7, element: "header" }),
  dialogHeaderTitle: BEMClass({ block: block7, element: "header-title" }),
  dialogHeaderActions: BEMClass({ block: block7, element: "header-actions" }),
  dialogContent: BEMClass({ block: block7, element: "content" }),
  dialogFooter: BEMClass({ block: block7, element: "footer" }),
  dialogFooterLeft: BEMClass({ block: block7, element: "footer-left" }),
  dialogFooterRight: BEMClass({ block: block7, element: "footer-right" }),
  dialogButtonClose: BEMClass({ block: block7, element: "button-close" })
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
dialog.classList.add(dialog_classNames_default.dialog.blockElementName, z_index_classNames_default.zIndex.message);
dialogWrapper.className = dialog_classNames_default.dialogWrapper.blockElementName;
dialogContent.className = dialog_classNames_default.dialogContent.blockElementName;
confirm.className = confirm_classNames_default.confirm.blockElementName;
confirmContent.className = confirm_classNames_default.confirmContent.blockElementName;
confirmActions.className = confirm_classNames_default.confirmActions.blockElementName;
Object.values(buttonMap).forEach((e) => e.classList.add(button_classNames_default.button.blockElementName));
buttonMap.yes.classList.add(button_classNames_default.button.primary);
buttonMap.ok.classList.add(button_classNames_default.button.primary);
buttonMap.retry.classList.add(button_classNames_default.button.secondary);
buttonMap.ignore.classList.add(button_classNames_default.button.tertiary);
closeIcon.classList.add("ir-icon", "ir-icon--close");
closeButton.className = confirm_classNames_default.confirmButtonClose.blockElementName;
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
document.body.append(dialog);
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
      return `${name}=${(0, import_xss.escapeAttrValue)(value)}`;
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
    this.messageHTML = (0, import_xss.default)(messageHTML, XSS_FILTER_OPTION);
    this.msgMap = __spreadValues({}, msgMap);
    this.enterButton = enterButton;
    this.escButton = escButton;
    this.escController = createESCHideController(this);
    if (onClick)
      this.onClick = onClick;
  }
  show() {
    var _a;
    if (confirmContext.count > 0)
      return;
    confirmContext.count++;
    this.visible = true;
    this.activeElement = document.activeElement;
    elements.confirmContent.innerHTML = this.messageHTML;
    elements.confirmIcon.className = `${confirm_classNames_default.confirmIcon} ir-icon ${confirmTypeClass[this.iconType] || ""}`;
    elements.closeButton.onclick = () => this.hide();
    for (const key of ConfirmButtonTypeList) {
      elements.buttonMap[key].remove();
      elements.buttonMap[key].innerText = (_a = this.msgMap[key]) != null ? _a : i18n_default.confirm[key];
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

// src/js-components/timePicker/timePicker.handler.ts
var import_moment3 = __toESM(require_moment());

// src/js-components/timePicker/timePicker.classNames.ts
var block8 = "time-picker";
var timePicker_classNames_default = {
  timePicker: BEMClass({ block: block8, state: ["is-visible"] }),
  timePickerPanelWrapper: BEMClass({ block: block8, element: "panel-wrapper" }),
  timePickerButtonPanel: BEMClass({ block: block8, element: "button-panel" }),
  timePickerPanel: BEMClass({ block: block8, element: "panel" }),
  timePickerPanelItem: BEMClass({ block: block8, element: "panel-item" }),
  timePickerDivider: BEMClass({ block: block8, element: "panel-divider" })
};

// src/js-components/timePicker/timePicker.elements.ts
var import_lodash3 = __toESM(require_lodash());

// src/js-components/timePicker/utils.ts
function isValidPattern(value) {
  if (/^\d{1,2}:\d{1,2}$/.test(value)) {
    const { hour, minute } = parseTime(value);
    if (hour < 0 || hour >= 24)
      return false;
    else if (minute < 0 || minute >= 60)
      return false;
    else
      return true;
  } else {
    return false;
  }
}
function parseTime(value) {
  const [hour, minute] = value.split(":");
  return {
    hour: parseInt(hour),
    minute: parseInt(minute)
  };
}
function formatTime(hour, minute) {
  return [
    hour.toString().padStart(2, "0"),
    minute.toString().padStart(2, "0")
  ].join(":");
}

// src/js-components/timePicker/timePicker.elements.ts
var timePicker = document.createElement("div");
var panelWrapper = document.createElement("div");
var buttonPanel = document.createElement("div");
var panelType = ["period", "hour", "minute"];
var panelList = [document.createElement("div"), document.createElement("div"), document.createElement("div")];
var [periodPanel, hourPanel, minutePanel] = panelList;
timePicker.classList.add(timePicker_classNames_default.timePicker.blockElementName, z_index_classNames_default.zIndex.popover);
import_lodash3.default.range(panelType.length).forEach((id) => {
  panelList[id].setAttribute("data-type", panelType[id]);
  panelList[id].className = timePicker_classNames_default.timePickerPanel.blockElementName;
  panelWrapper.appendChild(panelList[id]);
});
panelWrapper.className = timePicker_classNames_default.timePickerPanelWrapper.blockElementName;
buttonPanel.className = timePicker_classNames_default.timePickerButtonPanel.blockElementName;
var nowButton = document.createElement("button");
nowButton.classList.add("button");
nowButton.type = "button";
buttonPanel.appendChild(nowButton);
timePicker.appendChild(panelWrapper);
timePicker.appendChild(buttonPanel);
function createPanelItem(text) {
  const panelItem = document.createElement("div");
  panelItem.className = timePicker_classNames_default.timePickerPanelItem.blockElementName;
  if (text)
    panelItem.innerText = text;
  return panelItem;
}
import_lodash3.default.range(2).forEach(() => panelList[0].appendChild(createPanelItem("")));
import_lodash3.default.range(12).forEach((hour) => panelList[1].appendChild(createPanelItem(`${hour}`)));
import_lodash3.default.range(60).forEach((minute) => panelList[2].appendChild(createPanelItem(`${minute}`)));
function updateI18n2() {
  nowButton.innerHTML = ` <i class="button__icon-prefix ir-icon ir-icon--check"></i>${i18n_default.timePicker.btnNow}`;
  panelList[0].children[0].innerHTML = i18n_default.timePicker.am;
  panelList[0].children[1].innerHTML = i18n_default.timePicker.pm;
}
function removeSelected() {
  timePicker.querySelectorAll(".is-selected").forEach((e) => e.classList.remove("is-selected"));
}
function getTimeElements(hour, minute) {
  const isAM2 = hour < 12;
  const adjustedHour = isAM2 ? hour : hour - 12;
  const periodId = isAM2 ? 0 : 1;
  return {
    periodElement: periodPanel.children[periodId],
    hourElement: hourPanel.children[adjustedHour],
    minuteElement: minutePanel.children[minute]
  };
}
function scrollIntoView(hour, minute) {
  const { hourElement, minuteElement } = getTimeElements(hour, minute);
  hourPanel.scrollTop = hourElement.offsetTop - hourPanel.clientHeight / 2;
  minutePanel.scrollTop = minuteElement.offsetTop - minutePanel.clientHeight / 2;
}
function selectTime(hour, minute) {
  const { periodElement, hourElement, minuteElement } = getTimeElements(hour, minute);
  removeSelected();
  periodElement.classList.add("is-selected");
  hourElement.classList.add("is-selected");
  minuteElement.classList.add("is-selected");
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
function* periodGenerator() {
  yield [0, periodPanel.children[0]];
  yield [1, periodPanel.children[1]];
}
function getCurrentTime() {
  var _a, _b, _c, _d;
  const hour = parseInt((_b = (_a = hourPanel.querySelector(".is-selected")) == null ? void 0 : _a.innerHTML) != null ? _b : "0");
  const minute = parseInt((_d = (_c = minutePanel.querySelector(".is-selected")) == null ? void 0 : _c.innerHTML) != null ? _d : "0");
  return formatTime(hour + (isAM() ? 0 : 12), minute);
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
var timePicker_elements_default = {
  timePicker,
  nowButton
};

// src/js-components/timePicker/timePicker.handler.ts
function createIRTimePickerHandler({ uuid, refElement, onChange }) {
  let visible = false;
  let floatingCleanup = () => void 0;
  const handler = {
    setTime(value) {
      const { hour, minute } = parseTime(value);
      selectTime(hour, minute);
      scrollIntoView(hour, minute);
    },
    show: () => {
      if (visible)
        return;
      updateI18n2();
      visible = true;
      escController.create();
      outsideHandler.create();
      timePicker_elements_default.nowButton.onclick = (ev) => {
        const value = (0, import_moment3.default)().format("HH:mm");
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
      if (!timePicker_elements_default.timePicker.isConnected)
        document.body.appendChild(timePicker_elements_default.timePicker);
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
    this.contextElement.className = input_classNames_default.input.blockElementName;
    this.input = document.createElement("input");
    this.input.placeholder = "hh:mm";
    this.input.className = input_classNames_default.inputNative.blockElementName;
    this.button = document.createElement("button");
    this.button.innerHTML = `<i class="ir-icon ir-icon--watch"></i>`;
    this.button.className = input_classNames_default.inputSuffix.blockElementName;
    this.latestValue = args.value || "";
    this.button.onclick = () => this.toggle();
    this.timePickerHandler = createIRTimePickerHandler({
      uuid: this.uuid,
      refElement: this.contextElement,
      onChange: (_4, value) => {
        this.value = value;
        this.onChange(value);
      }
    });
    if (args.checkbox) {
      const divInputPrefix = document.createElement("div");
      const checkboxLabel = document.createElement("label");
      const inputCheckbox = document.createElement("input");
      inputCheckbox.setAttribute("type", "checkbox");
      divInputPrefix.classList.add(checkbox_classNames_default.checkbox.blockElementName, input_classNames_default.inputPrefix.blockElementName);
      checkboxLabel.className = checkbox_classNames_default.checkboxWrapper.blockElementName;
      inputCheckbox.className = checkbox_classNames_default.checkboxInput.blockElementName;
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
      this.value = args.value;
    this.input.onblur = () => {
      if (!isValidPattern(this.input.value))
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
    this.timePickerHandler.setTime(this.value || "00:00");
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
  doRecording(label = "", recordBlock) {
    if (this.isRecording)
      throw new Error("Already doing record!");
    try {
      this._currentRecordingBlock = new IRCommandBlock(label);
      recordBlock();
      this.pushCommandBlock(this._currentRecordingBlock);
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
//# sourceMappingURL=chunk-GRGE6SNNjs.js.map
