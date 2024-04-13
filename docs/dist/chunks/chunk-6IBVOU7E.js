import {
  v4_default
} from "./chunk-BEP2YSTU.js";
import {
  computePosition,
  flip,
  getLayerElement,
  getVirtualEl,
  offset,
  shift
} from "./chunk-YY6MAG5N.js";
import {
  __commonJS,
  __toESM
} from "./chunk-F6QKJDR3.js";

// ../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/default.js
var require_default = __commonJS({
  "../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/default.js"(exports) {
    "use strict";
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
    "use strict";
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
    "use strict";
    var _ = require_util();
    function parseStyle(css, onAttr) {
      css = _.trimRight(css);
      if (css[css.length - 1] !== ";")
        css += ";";
      var cssLength = css.length;
      var isParenthesisOpen = false;
      var lastPos = 0;
      var i = 0;
      var retCSS = "";
      function addNewAttr() {
        if (!isParenthesisOpen) {
          var source = _.trim(css.slice(lastPos, i));
          var j2 = source.indexOf(":");
          if (j2 !== -1) {
            var name = _.trim(source.slice(0, j2));
            var value = _.trim(source.slice(j2 + 1));
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
      return _.trim(retCSS);
    }
    module.exports = parseStyle;
  }
});

// ../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/css.js
var require_css = __commonJS({
  "../../node_modules/.pnpm/cssfilter@0.0.10/node_modules/cssfilter/lib/css.js"(exports, module) {
    "use strict";
    var DEFAULT = require_default();
    var parseStyle = require_parser();
    var _ = require_util();
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
    "use strict";
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
    "use strict";
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
    "use strict";
    var FilterCSS = require_lib().FilterCSS;
    var getDefaultCSSWhiteList = require_lib().getDefaultWhiteList;
    var _ = require_util2();
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
        value = _.trim(value);
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
      value = escapeAttrValue(value);
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
      return _.trim(str2);
    }
    function friendlyAttrValue(str) {
      str = unescapeQuote(str);
      str = escapeHtmlEntities(str);
      str = escapeDangerHtml5Entities(str);
      str = clearNonPrintableCharacter(str);
      return str;
    }
    function escapeAttrValue(str) {
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
        return _.indexOf(tags, tag) !== -1;
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
          _.forEach(removeList, function(pos) {
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
    exports.escapeAttrValue = escapeAttrValue;
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
    "use strict";
    var _ = require_util2();
    function getTagName(html) {
      var i = _.spaceIndex(html);
      var tagName;
      if (i === -1) {
        tagName = html.slice(1, -1);
      } else {
        tagName = html.slice(1, i + 1);
      }
      tagName = _.trim(tagName).toLowerCase();
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
        name = _.trim(name);
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
              v = _.trim(html.slice(lastMarkPos + 1, j));
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
              v = _.trim(html.slice(lastPos, i));
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
              v = _.trim(html.slice(lastPos, i));
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
          addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
        }
      }
      return _.trim(retAttrs.join(" "));
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
    "use strict";
    var FilterCSS = require_lib().FilterCSS;
    var DEFAULT = require_default2();
    var parser = require_parser2();
    var parseTag = parser.parseTag;
    var parseAttr = parser.parseAttr;
    var _ = require_util2();
    function isNull(obj) {
      return obj === void 0 || obj === null;
    }
    function getAttrs(html) {
      var i = _.spaceIndex(html);
      if (i === -1) {
        return {
          html: "",
          closing: html[html.length - 2] === "/"
        };
      }
      html = _.trim(html.slice(i + 1, -1));
      var isClosing = html[html.length - 1] === "/";
      if (isClosing)
        html = _.trim(html.slice(0, -1));
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
              var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
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
    "use strict";
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

// src/utils/dom.ts
function appendElement(parent, tagName, ...classes) {
  const element = createElement(tagName, ...classes);
  parent.appendChild(element);
  return element;
}
function createElement(tagName, ...classes) {
  const element = document.createElement(tagName);
  classes.forEach((x) => element.classList.add(x));
  return element;
}
function hasClass(element, cls, until) {
  let tmpElement = element;
  while (tmpElement && !tmpElement.classList.contains(cls)) {
    if (tmpElement === until)
      return null;
    tmpElement = tmpElement.parentElement;
  }
  return tmpElement;
}
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element)
    return element;
  else
    throw new Error(`There is no '${selector}'`);
}
function closest(selector, endSelector, startElement) {
  let curElement = startElement;
  while (curElement) {
    if (curElement.matches(selector))
      return curElement;
    if (curElement.matches(endSelector))
      break;
    curElement = curElement.parentElement;
  }
  return null;
}
function removeAllChildren(element) {
  while (element.lastChild)
    element.lastChild.remove();
}
function addStyleXClass(element, ...props) {
  props.forEach((cls) => (cls == null ? void 0 : cls.className) && element.classList.add(...cls.className.split(" ")));
}
function removeStyleXClass(element, ...props) {
  props.forEach((cls) => (cls == null ? void 0 : cls.className) && element.classList.remove(...cls.className.split(" ")));
}
function setStyleXToken(element, token, value) {
  element.style.setProperty(token, value);
}
function removeStyleXToken(element, token) {
  element.style.removeProperty(token);
}
function setDataSetFlag(element, status, key) {
  if (status)
    element.dataset[key] = "true";
  else
    delete element.dataset[key];
}

// src/utils/uuid.ts
var uuid = () => v4_default();

// src/components/loading/loading.classNames.ts
var block = "loading";
var loading_classNames_default = {
  loading: {
    "&": block,
    primary: `${block}--primary`,
    secondary: `${block}--secondary`,
    tertiary: `${block}--tertiary`
  },
  loadingItems: {
    "&": `${block}__items`
  },
  loadingDotItem: {
    "&": `${block}__dot-item`
  }
};

// src/utils/loading.ts
var LOADING_CIRCLE_COUNT = 4;
var createLoading = () => {
  const loading = document.createElement("div");
  const items = document.createElement("div");
  loading.className = loading_classNames_default.loading["&"];
  items.className = loading_classNames_default.loadingItems["&"];
  for (let i = 0; i < LOADING_CIRCLE_COUNT; i++)
    items.appendChild(createElement("i", loading_classNames_default.loadingDotItem["&"]));
  loading.appendChild(items);
  return loading;
};
var ANIMATION_DURATION_MS = 150;
var getLoadingAutoUpdateHandler = /* @__PURE__ */ (() => {
  let context2 = null;
  function createContext() {
    const loadingList = [];
    let isAttachedEvent = false;
    let animationFrameHandler = -1;
    function scrollEventHandler(ev) {
      cancelAnimationFrame(animationFrameHandler);
      animationFrameHandler = requestAnimationFrame(() => {
        loadingList.forEach((loading) => loading.updatePos());
      });
    }
    return {
      addLoadingElement(loading) {
        const id = loadingList.findIndex((item) => item === loading);
        if (id === -1)
          loadingList.push(loading);
        if (!isAttachedEvent) {
          window.addEventListener("scroll", scrollEventHandler, { capture: true });
          isAttachedEvent = true;
        }
      },
      removeLoadingElement(loading) {
        const id = loadingList.findIndex((item) => item === loading);
        if (id !== -1)
          loadingList.splice(id, 1);
        if (loadingList.length === 0) {
          window.removeEventListener("scroll", scrollEventHandler, { capture: true });
          isAttachedEvent = false;
        }
      }
    };
  }
  return () => {
    if (!context2)
      return context2 = createContext();
    return context2;
  };
})();
var IRLoading = class {
  constructor(args) {
    this._loadingElement = null;
    this._timeoutHandler = -1;
    this._refElement = args.refElement;
    this._onClick = args.onClick;
    this._startDelay = args.startDelay;
  }
  getLoadingElement() {
    if (!this._loadingElement) {
      this._loadingElement = createLoading();
      this._loadingElement.onclick = this._onClick;
    }
    return this._loadingElement;
  }
  updatePos() {
    const rect = this._refElement.getBoundingClientRect();
    const loadingElement = this.getLoadingElement();
    loadingElement.style.top = `${rect.y}px`;
    loadingElement.style.left = `${rect.x}px`;
    loadingElement.style.height = `${rect.height}px`;
    loadingElement.style.width = `${rect.width}px`;
  }
  visibleAction() {
    this._refElement.after(this.getLoadingElement());
    requestAnimationFrame(() => {
      const loadingElement = this.getLoadingElement();
      loadingElement.classList.add("is-visible");
    });
  }
  show() {
    this.updatePos();
    getLoadingAutoUpdateHandler().addLoadingElement(this);
    clearTimeout(this._timeoutHandler);
    this._timeoutHandler = window.setTimeout(() => this.visibleAction(), this._startDelay);
  }
  remove() {
    this.getLoadingElement().remove();
    getLoadingAutoUpdateHandler().removeLoadingElement(this);
  }
  hide() {
    this.getLoadingElement().classList.remove("is-visible");
    clearTimeout(this._timeoutHandler);
    this._timeoutHandler = window.setTimeout(() => this.remove(), ANIMATION_DURATION_MS);
  }
};
var createLoadingHandler = ({
  contextElement,
  onClick = () => void 0,
  startDelay = 0
}) => {
  return new IRLoading({
    refElement: contextElement,
    startDelay,
    onClick
  });
};

// src/utils/icon.ts
function createIconElement(icon, className) {
  const iconElement = document.createElement("i");
  iconElement.className = `ir-icon ${icon}`;
  className && iconElement.classList.add(className);
  return iconElement;
}
var createCustomIcon = (...iconList) => {
  const buffer = [];
  iconList.forEach(({ svg, name, masked = false }) => {
    const base64 = btoa(svg);
    const className = `.ir-icon--${name}`;
    const varName = `--ir-icon--${name}`;
    buffer.push(`
.ir-icon {
    ${varName}: url("data:image/svg+xml;base64,${base64}")
}`);
    if (masked) {
      buffer.push(`
${className} {
    -webkit-mask-image: var(${varName});
    mask-image: var(${varName});
    background-image: none;
    background-color: none;
}`);
    } else {
      buffer.push(`
${className} {
    background: var(${varName}) 0 / cover;
    -webkit-mask-image: none;
    mask-image: none;
    --ir-icon-foreground-color: transparent;
}`);
    }
  });
  const styleElement = document.createElement("style");
  styleElement.innerHTML = buffer.join("\n");
  document.head.appendChild(styleElement);
};
var getIRIconPng = (icon, color) => {
  return "";
};

// ../ir-style-css/dist/base/index.js
var tooltip = "ir_tooltip";
var select = "select";
var selectDropdown = "ir_select_dropdown";
var selectDropdownButton = "ir_select_dropdown_button";
var selectDropdownIcon = "ir_select_dropdown_icon";
var selectDropdownItem = "ir_select_dropdown_item";
var selectDropdownItemSelected = "ir_select_dropdown_item_selected";
var selectDropdownList = "ir_select_dropdown_list";
var selectInput = "ir_select_input";
var selectInputIcon = "ir_select_input_icon";
var selectInputNative = "ir_select_input_native";
var radio = "radio";
var radioInput = "radio__input";
var radioText = "radio__text";
var radioWrapper = "radio__wrapper";
var progress = "progress";
var progressVariants = { borderColor: "var(--ir_progress_border_color)", textColor: "var(--ir_progress_text_color)", lineHeight: "var(--ir_progress_line_height)", fontWeight: "var(--ir_progress_font_weight)", height: "var(--ir_progress_height)", borderRadius: "var(--ir_progress_border_radius)", progressText: "var(--ir_progress_text)", progressPercent: "var(--ir_progress_percent)" };
var input = "input";
var inputNative = "input__native";
var inputPrefix = "input__prefix";
var inputSuffix = "input__suffix";
var button = "button";
var buttonIconPrefix = "button__icon-prefix";
var buttonPrimary = "button--primary";
var buttonSecondary = "button--secondary";
var buttonTertiary = "button--tertiary";
var buttonTransparent = "button--transparent";
var checkbox = "checkbox";
var checkboxInput = "checkbox__input";
var checkboxText = "checkbox__text";
var checkboxWrapper = "checkbox__wrapper";
var datePicker = "ir_date_picker";
var datePickerContent = "ir_date_picker_content";
var datePickerContentCell = "ir_date_picker_content_cell";
var datePickerContentCellSelected = "ir_date_picker_content_cell_selected";
var datePickerContentHeaderCell = "ir_date_picker_content_header_cell";
var datePickerContentTable = "ir_date_picker_content_table";
var datePickerFooter = "ir_date_picker_footer";
var datePickerHeader = "ir_date_picker_header";
var datePickerHeaderTitle = "ir_date_picker_header_title";
var cellContent = "ir_grid_cell_content";
var cellContentEllipsis = "ir_grid_cell_content_ellipsis";
var cellError = "ir_grid_cell_error";
var cellMemo = "ir_grid_cell_memo";
var emptyRow = "ir_grid_empty_row";
var grid = "ir_grid";
var gridBodyCell = "ir_grid_body_cell";
var gridCell = "ir_grid_cell";
var gridHeaderCell = "ir_grid_header_cell";
var gridSelection = "ir_grid_selection";
var gridSelectionAllFreezedArea = "ir_grid_selection_all_freezed_area";
var gridSelectionBorderLine = "ir_grid_selection_border_line";
var gridSelectionFreezedColArea = "ir_grid_selection_freezed_col_area";
var gridSelectionFreezedRowArea = "ir_grid_selection_freezed_row_area";
var gridSelectionNonFreezedArea = "ir_grid_selection_non_freezed_area";
var gridStickyCell = "ir_grid_sticky_cell";
var gridStickyHeaderRow = "ir_grid_sticky_header_row";
var gridStickyRow = "ir_grid_sticky_row";
var gridSubSelection = "ir_grid_sub_selection";
var gridTable = "ir_grid_table";
var gridWrapper = "ir_grid_wrapper";
var textarea = "ir_grid_textarea";
var gridCellButton = "ir_grid_cell_button";
var gridCellButtonIcon = "ir_grid_cell_icon";
var gridCellButtonIconDivider = "ir_grid_cell_button_icon_divider";
var gridCellButtonOutline = "ir_grid_cell_button_outline";
var gridCellButtonWrapper = "ir_grid_cell_button_wrapper";
var gridSelect = "ir_grid_select";
var gridCellCheckbox = "ir_grid_cell_checkbox";
var gridCellCheckboxText = "ir_grid_cell_checkbox_text";
var gridCellCheckboxWrapper = "ir_grid_cell_checkbox_wrapper";
var gridDatePicker = "ir_grid_date_picker";
var gridProgress = "ir_grid_progress";
var gridRadio = "ir_grid_radio";
var gridMemo = "ir_grid_memo";
var gridMemoError = "ir_grid_memo_error";
var gridMemoNormal = "ir_grid_memo_normal";
var gridColResizerGuide = "ir_grid_col_resizer_guide";
var gridColResizing = "ir_grid_col_resizing";
var gridHeaderCellColResizing = "ir_grid_header_cell_col_resizing";
var gridHeaderCellRowResizing = "ir_grid_header_cell_row_resizing";
var gridRowResizerGuide = "ir_grid_row_resizer_guide";
var gridRowResizing = "ir_grid_row_resizing";
var gridColMoveGuide = "ir_grid_col_move_guide";
var gridRowMoveGuide = "ir_grid_row_move_guide";
var gridVariants = { border: "var(--grid_border)", background: "var(--grid_bg)", headerBackground: "var(--grid_header_bg)", scrollBgColor: "var(--grid_scroll_bg)", scrollBorderColor: "var(--grid_scroll_border_color)", defaultFontSize: "var(--grid_default_font_size)", defaultLineHeight: "var(--grid_default_line_height)", defaultTextColor: "var(--grid_default_text_color)", cellHeight: "var(--grid_cell_height)", emptyRowHeight: "var(--grid_empty_row_height)", disabledBgColor: "var(--grid_disabled_bg_color)", headerActiveBgColor: "var(--grid_header_active_bg_color)", headerActiveFontWeight: "var(--grid_header_active_font_weight)", contentSelectedBgColor: "var(--grid_content_selected_bg_color)", activeBgColor: "var(--grid_active_bg_color)", activeBorderColor: "var(--grid_active_border_color)", errorBorderColor: "var(--grid_error_border_color)", diffBorderColor: "var(--grid_diff_border_color)", diffTextColor: "var(--grid_diff_text_color)", sameBorderColor: "var(--grid_same_border_color)", sameTextColor: "var(--grid_same_text_color)", dragBorderColor: "var(--grid_drag_border_color)", dragHeaderBgColor: "var(--grid_drag_header_bg_color)", moveHeaderBgColor: "var(--grid_move_header_bg_color)", moveHeaderLineSize: "var(--grid_move_header_line_size)", cellMemoColor: "var(--grid_cell_memo_color)", cellErrorColor: "var(--grid_cell_error_color)", zLevel9: "var(--grid_z_level_9)", zLevel8: "var(--grid_z_level_8)", zLevel7: "var(--grid_z_level_7)", zLevel6: "var(--grid_z_level_6)", zLevel5: "var(--grid_z_level_5)", zLevel4: "var(--grid_z_level_4)", zLevel3: "var(--grid_z_level_3)", zLevel2: "var(--grid_z_level_2)", zLevel1: "var(--grid_z_level_1)", zLevel0: "var(--grid_z_level_0)", selectionAllFreezedZId: "var(--grid_all_freezed_zId)", selectionFreezedRowZId: "var(--grid_freezed_row_zId)", selectionFreezedColumnZId: "var(--grid_freezed_column_zId)", selectionFreezedBodyZId: "var(--grid_freezed_body_zId)", cellTopPadding: "var(--grid_cell_top_padding)", cellBottomPadding: "var(--grid_cell_bottom_padding)", cellLeftPadding: "var(--grid_cell_left_padding)", cellRightPadding: "var(--grid_cell_right_padding)", stickyCellZId: "var(--grid_sticky_cell_zId)" };
var borderScroll = "ir_border_scroll_container";

// src/utils/tooltip.ts
var createTooltipElements = () => {
  const tooltipElement = document.createElement("div");
  tooltipElement.className = tooltip;
  return {
    tooltipElement,
    updateText(text) {
      tooltipElement.textContent = text;
    }
  };
};
var getTooltipElements = /* @__PURE__ */ (() => {
  let tooltipElements = null;
  return () => {
    if (!tooltipElements)
      tooltipElements = createTooltipElements();
    return tooltipElements;
  };
})();
var DEFAULT_TOOLTIP_OFFSET = 8;
var lastHandler = null;
var createTooltip = (options) => {
  var _a, _b;
  if (options.refElement === void 0)
    throw new Error("refElement is required");
  const {
    refElement,
    offset: offset2 = DEFAULT_TOOLTIP_OFFSET,
    placement = "bottom",
    refMode = "element"
  } = options;
  let label = (_a = options.label) != null ? _a : "";
  let runtimeRefElement = options.refElement;
  (_b = refElement.__IR_TOOLTIP_INSTANCE__) == null ? void 0 : _b.destroy();
  refElement.addEventListener("mousemove", mouseMoveHandler);
  refElement.addEventListener("mouseleave", hideTooltip);
  const handler = {
    show,
    hide,
    update,
    updateText,
    destroy,
    get text() {
      return label;
    },
    get refMode() {
      return refMode;
    },
    get placement() {
      return placement;
    },
    get offset() {
      return offset2;
    },
    get refElement() {
      return refElement;
    }
  };
  refElement.__IR_TOOLTIP_INSTANCE__ = handler;
  return handler;
  function show() {
    showTooltip();
    return handler;
  }
  function hide() {
    hideTooltip();
    return handler;
  }
  function update() {
    updateTooltipOffset2();
    return handler;
  }
  function updateText(newText) {
    const { updateText: updateText2 } = getTooltipElements();
    label = newText;
    updateText2(newText);
  }
  function destroy() {
    hideTooltip();
    refElement.removeEventListener("mousemove", mouseMoveHandler);
    refElement.removeEventListener("mouseleave", hideTooltip);
  }
  function updateTooltipOffset2() {
    const { tooltipElement } = getTooltipElements();
    computePosition(runtimeRefElement, tooltipElement, {
      // Tooltip 배치 위치
      placement,
      strategy: "fixed",
      // 위치 좌표 수정 및 사용할 수 있는 유용한 데이터 제공
      middleware: [
        // refElement와 tooltipElement의 간격
        offset(offset2),
        // 상하 스크롤 화면 overflow 방지
        flip(),
        // 좌우 스크롤 화면 overflow 방지
        shift({ padding: 5 })
      ]
    }).then(({ x, y }) => {
      tooltipElement.style.left = `${x}px`;
      tooltipElement.style.top = `${y}px`;
    });
  }
  function showTooltip() {
    if (label === "") {
      console.warn("tooltip text is empty!");
      return;
    }
    const { tooltipElement } = getTooltipElements();
    updateTooltipOffset2();
    updateText(label);
    getLayerElement("popover").appendChild(tooltipElement);
  }
  function hideTooltip() {
    getTooltipElements().tooltipElement.remove();
    lastHandler = null;
  }
  function mouseMoveHandler(ev) {
    if (ev.__EXECUTED_TOOLTIP__)
      return;
    if (!(ev.target instanceof HTMLElement))
      return;
    if (refMode === "element" && lastHandler === handler)
      return;
    lastHandler = handler;
    ev.__EXECUTED_TOOLTIP__ = true;
    if (refMode === "pointer")
      runtimeRefElement = getVirtualEl(ev.clientX, ev.clientY);
    showTooltip();
  }
};
var createTooltipBySelector = (options) => {
  const {
    selector,
    offset: offset2 = 8
  } = options;
  const tooltipList = Array.from(document.querySelectorAll(selector)).filter((element) => element.dataset["title"]).map((element) => {
    const { title, placement = "bottom", ref = "element" } = element.dataset;
    return createTooltip({
      refElement: element,
      label: title,
      offset: offset2,
      /**
       * Placement 타입에 맞지 않는 문자열이 오는 경우, 적절하지 않은 위치로 표현되니 주의
       */
      placement,
      refMode: ref
    });
  });
  return {
    destroy: () => {
      tooltipList.forEach((tooltip2) => tooltip2.destroy());
    },
    updateTextAll() {
      tooltipList.forEach((tooltip2) => {
        var _a;
        const newText = (_a = tooltip2.refElement.dataset["title"]) != null ? _a : "";
        if (tooltip2.text !== newText)
          tooltip2.updateText(newText);
      });
    },
    updateTextOne(element, text) {
      var _a;
      const findItem = tooltipList.find((tooltip2) => element === tooltip2.refElement);
      if (!findItem) {
        console.warn("Tooltip element not found");
        return;
      }
      if (text) {
        element.dataset["title"] = text;
        findItem.updateText(text);
      } else {
        findItem.updateText((_a = element.dataset["title"]) != null ? _a : "");
      }
    }
  };
};

// src/utils/math.ts
function getMinMaxBetween(value, min, max) {
  if (value < min)
    return min;
  else if (value > max)
    return max;
  else
    return value;
}
function parseInt2(value, defaultValue = 0, radix = 10) {
  const parsed = Number.parseInt(value != null ? value : "", radix);
  return Number.isNaN(parsed) ? defaultValue : parsed;
}

// src/utils/tooltip-container.ts
function updateTooltipOffset(refElement, floatingElement, placement, offsetOption) {
  computePosition(refElement, floatingElement, {
    placement,
    strategy: "fixed",
    middleware: [
      offset(offsetOption),
      flip(),
      shift({ padding: 5 })
    ]
  }).then(({ x, y, placement: placement2 }) => {
    floatingElement.style.left = `${x}px`;
    floatingElement.style.top = `${y}px`;
    floatingElement.dataset["placement"] = placement2;
  });
}
function createTooltipContainer(options) {
  const {
    containerElement,
    placement: commonPlacement = "bottom",
    offset: commonOffset = 8,
    interval: commonInterval = 0
  } = options;
  let context2 = null;
  const { tooltipElement, updateText } = getTooltipElements();
  function getTooltipAttribute(element) {
    var _a, _b, _c;
    return {
      text: (_a = element.dataset["irTooltipText"]) != null ? _a : "",
      refMode: (_b = element.dataset["irTooltipRefMode"]) != null ? _b : "element",
      placement: (_c = element.dataset["irTooltipPlacement"]) != null ? _c : commonPlacement,
      offset: parseInt2(element.dataset["irTooltipOffset"], commonOffset),
      interval: parseInt2(element.dataset["irTooltipInterval"], commonInterval)
    };
  }
  function createContext(refElement) {
    const {
      text,
      refMode,
      interval,
      placement,
      offset: offset2
    } = getTooltipAttribute(refElement);
    let referenceEl = null;
    const updateLocation = () => {
      if (!referenceEl)
        throw new Error("Reference element is not set");
      updateTooltipOffset(referenceEl, tooltipElement, placement, offset2);
    };
    const showTooltip = () => {
      updateText(text);
      getLayerElement("popover").appendChild(tooltipElement);
      updateLocation();
    };
    const hideTooltip = () => {
      tooltipElement.remove();
    };
    const timeout = window.setTimeout(() => showTooltip(), interval);
    return {
      refElement,
      setReferenceEl(refEl) {
        referenceEl = refEl;
      },
      updateLocation,
      get isPointerMode() {
        return refMode === "pointer";
      },
      cleanup() {
        clearTimeout(timeout);
        context2 = null;
        hideTooltip();
      }
    };
  }
  const mouseMoveHandler = (ev) => {
    const refElement = closest("[data-ir-tooltip]", ".ir-tooltip-container", ev.target);
    if (!refElement || !(refElement instanceof HTMLElement)) {
      context2 == null ? void 0 : context2.cleanup();
      return;
    }
    if ((context2 == null ? void 0 : context2.refElement) === refElement) {
      if (context2.isPointerMode) {
        context2.setReferenceEl(getVirtualEl(ev.clientX, ev.clientY));
        context2.updateLocation();
      }
      return;
    }
    context2 == null ? void 0 : context2.cleanup();
    context2 = createContext(refElement);
    context2.setReferenceEl(context2.isPointerMode ? getVirtualEl(ev.clientX, ev.clientY) : refElement);
  };
  const mouseLeaveHandler = () => {
    context2 == null ? void 0 : context2.cleanup();
  };
  containerElement.classList.add("ir-tooltip-container");
  containerElement.addEventListener("mousemove", mouseMoveHandler);
  containerElement.addEventListener("mouseleave", mouseLeaveHandler);
  return {
    destroy() {
      context2 == null ? void 0 : context2.cleanup();
      containerElement.removeEventListener("mousemove", mouseMoveHandler);
      containerElement.removeEventListener("mouseleave", mouseLeaveHandler);
    },
    cleanup() {
      context2 == null ? void 0 : context2.cleanup();
    }
  };
}

// ../../node_modules/.pnpm/split.js@1.6.5/node_modules/split.js/dist/split.es.js
var global = typeof window !== "undefined" ? window : null;
var ssr = global === null;
var document2 = !ssr ? global.document : void 0;
var addEventListener = "addEventListener";
var removeEventListener = "removeEventListener";
var getBoundingClientRect = "getBoundingClientRect";
var gutterStartDragging = "_a";
var aGutterSize = "_b";
var bGutterSize = "_c";
var HORIZONTAL = "horizontal";
var NOOP = function() {
  return false;
};
var calc = ssr ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(prefix) {
  var el = document2.createElement("div");
  el.style.cssText = "width:" + prefix + "calc(9px)";
  return !!el.style.length;
}).shift() + "calc";
var isString = function(v) {
  return typeof v === "string" || v instanceof String;
};
var elementOrSelector = function(el) {
  if (isString(el)) {
    var ele = document2.querySelector(el);
    if (!ele) {
      throw new Error("Selector " + el + " did not match a DOM element");
    }
    return ele;
  }
  return el;
};
var getOption = function(options, propName, def) {
  var value = options[propName];
  if (value !== void 0) {
    return value;
  }
  return def;
};
var getGutterSize = function(gutterSize, isFirst, isLast, gutterAlign) {
  if (isFirst) {
    if (gutterAlign === "end") {
      return 0;
    }
    if (gutterAlign === "center") {
      return gutterSize / 2;
    }
  } else if (isLast) {
    if (gutterAlign === "start") {
      return 0;
    }
    if (gutterAlign === "center") {
      return gutterSize / 2;
    }
  }
  return gutterSize;
};
var defaultGutterFn = function(i, gutterDirection) {
  var gut = document2.createElement("div");
  gut.className = "gutter gutter-" + gutterDirection;
  return gut;
};
var defaultElementStyleFn = function(dim, size, gutSize) {
  var style = {};
  if (!isString(size)) {
    style[dim] = calc + "(" + size + "% - " + gutSize + "px)";
  } else {
    style[dim] = size;
  }
  return style;
};
var defaultGutterStyleFn = function(dim, gutSize) {
  var obj;
  return obj = {}, obj[dim] = gutSize + "px", obj;
};
var Split = function(idsOption, options) {
  if (options === void 0)
    options = {};
  if (ssr) {
    return {};
  }
  var ids = idsOption;
  var dimension;
  var clientAxis;
  var position;
  var positionEnd;
  var clientSize;
  var elements;
  if (Array.from) {
    ids = Array.from(ids);
  }
  var firstElement = elementOrSelector(ids[0]);
  var parent = firstElement.parentNode;
  var parentStyle = getComputedStyle ? getComputedStyle(parent) : null;
  var parentFlexDirection = parentStyle ? parentStyle.flexDirection : null;
  var sizes = getOption(options, "sizes") || ids.map(function() {
    return 100 / ids.length;
  });
  var minSize = getOption(options, "minSize", 100);
  var minSizes = Array.isArray(minSize) ? minSize : ids.map(function() {
    return minSize;
  });
  var maxSize = getOption(options, "maxSize", Infinity);
  var maxSizes = Array.isArray(maxSize) ? maxSize : ids.map(function() {
    return maxSize;
  });
  var expandToMin = getOption(options, "expandToMin", false);
  var gutterSize = getOption(options, "gutterSize", 10);
  var gutterAlign = getOption(options, "gutterAlign", "center");
  var snapOffset = getOption(options, "snapOffset", 30);
  var snapOffsets = Array.isArray(snapOffset) ? snapOffset : ids.map(function() {
    return snapOffset;
  });
  var dragInterval = getOption(options, "dragInterval", 1);
  var direction = getOption(options, "direction", HORIZONTAL);
  var cursor = getOption(
    options,
    "cursor",
    direction === HORIZONTAL ? "col-resize" : "row-resize"
  );
  var gutter = getOption(options, "gutter", defaultGutterFn);
  var elementStyle = getOption(
    options,
    "elementStyle",
    defaultElementStyleFn
  );
  var gutterStyle = getOption(options, "gutterStyle", defaultGutterStyleFn);
  if (direction === HORIZONTAL) {
    dimension = "width";
    clientAxis = "clientX";
    position = "left";
    positionEnd = "right";
    clientSize = "clientWidth";
  } else if (direction === "vertical") {
    dimension = "height";
    clientAxis = "clientY";
    position = "top";
    positionEnd = "bottom";
    clientSize = "clientHeight";
  }
  function setElementSize(el, size, gutSize, i) {
    var style = elementStyle(dimension, size, gutSize, i);
    Object.keys(style).forEach(function(prop) {
      el.style[prop] = style[prop];
    });
  }
  function setGutterSize(gutterElement, gutSize, i) {
    var style = gutterStyle(dimension, gutSize, i);
    Object.keys(style).forEach(function(prop) {
      gutterElement.style[prop] = style[prop];
    });
  }
  function getSizes() {
    return elements.map(function(element) {
      return element.size;
    });
  }
  function getMousePosition(e) {
    if ("touches" in e) {
      return e.touches[0][clientAxis];
    }
    return e[clientAxis];
  }
  function adjust(offset2) {
    var a = elements[this.a];
    var b = elements[this.b];
    var percentage = a.size + b.size;
    a.size = offset2 / this.size * percentage;
    b.size = percentage - offset2 / this.size * percentage;
    setElementSize(a.element, a.size, this[aGutterSize], a.i);
    setElementSize(b.element, b.size, this[bGutterSize], b.i);
  }
  function drag(e) {
    var offset2;
    var a = elements[this.a];
    var b = elements[this.b];
    if (!this.dragging) {
      return;
    }
    offset2 = getMousePosition(e) - this.start + (this[aGutterSize] - this.dragOffset);
    if (dragInterval > 1) {
      offset2 = Math.round(offset2 / dragInterval) * dragInterval;
    }
    if (offset2 <= a.minSize + a.snapOffset + this[aGutterSize]) {
      offset2 = a.minSize + this[aGutterSize];
    } else if (offset2 >= this.size - (b.minSize + b.snapOffset + this[bGutterSize])) {
      offset2 = this.size - (b.minSize + this[bGutterSize]);
    }
    if (offset2 >= a.maxSize - a.snapOffset + this[aGutterSize]) {
      offset2 = a.maxSize + this[aGutterSize];
    } else if (offset2 <= this.size - (b.maxSize - b.snapOffset + this[bGutterSize])) {
      offset2 = this.size - (b.maxSize + this[bGutterSize]);
    }
    adjust.call(this, offset2);
    getOption(options, "onDrag", NOOP)(getSizes());
  }
  function calculateSizes() {
    var a = elements[this.a].element;
    var b = elements[this.b].element;
    var aBounds = a[getBoundingClientRect]();
    var bBounds = b[getBoundingClientRect]();
    this.size = aBounds[dimension] + bBounds[dimension] + this[aGutterSize] + this[bGutterSize];
    this.start = aBounds[position];
    this.end = aBounds[positionEnd];
  }
  function innerSize(element) {
    if (!getComputedStyle) {
      return null;
    }
    var computedStyle = getComputedStyle(element);
    if (!computedStyle) {
      return null;
    }
    var size = element[clientSize];
    if (size === 0) {
      return null;
    }
    if (direction === HORIZONTAL) {
      size -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    } else {
      size -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    }
    return size;
  }
  function trimToMin(sizesToTrim) {
    var parentSize = innerSize(parent);
    if (parentSize === null) {
      return sizesToTrim;
    }
    if (minSizes.reduce(function(a, b) {
      return a + b;
    }, 0) > parentSize) {
      return sizesToTrim;
    }
    var excessPixels = 0;
    var toSpare = [];
    var pixelSizes = sizesToTrim.map(function(size, i) {
      var pixelSize = parentSize * size / 100;
      var elementGutterSize = getGutterSize(
        gutterSize,
        i === 0,
        i === sizesToTrim.length - 1,
        gutterAlign
      );
      var elementMinSize = minSizes[i] + elementGutterSize;
      if (pixelSize < elementMinSize) {
        excessPixels += elementMinSize - pixelSize;
        toSpare.push(0);
        return elementMinSize;
      }
      toSpare.push(pixelSize - elementMinSize);
      return pixelSize;
    });
    if (excessPixels === 0) {
      return sizesToTrim;
    }
    return pixelSizes.map(function(pixelSize, i) {
      var newPixelSize = pixelSize;
      if (excessPixels > 0 && toSpare[i] - excessPixels > 0) {
        var takenPixels = Math.min(
          excessPixels,
          toSpare[i] - excessPixels
        );
        excessPixels -= takenPixels;
        newPixelSize = pixelSize - takenPixels;
      }
      return newPixelSize / parentSize * 100;
    });
  }
  function stopDragging() {
    var self2 = this;
    var a = elements[self2.a].element;
    var b = elements[self2.b].element;
    if (self2.dragging) {
      getOption(options, "onDragEnd", NOOP)(getSizes());
    }
    self2.dragging = false;
    global[removeEventListener]("mouseup", self2.stop);
    global[removeEventListener]("touchend", self2.stop);
    global[removeEventListener]("touchcancel", self2.stop);
    global[removeEventListener]("mousemove", self2.move);
    global[removeEventListener]("touchmove", self2.move);
    self2.stop = null;
    self2.move = null;
    a[removeEventListener]("selectstart", NOOP);
    a[removeEventListener]("dragstart", NOOP);
    b[removeEventListener]("selectstart", NOOP);
    b[removeEventListener]("dragstart", NOOP);
    a.style.userSelect = "";
    a.style.webkitUserSelect = "";
    a.style.MozUserSelect = "";
    a.style.pointerEvents = "";
    b.style.userSelect = "";
    b.style.webkitUserSelect = "";
    b.style.MozUserSelect = "";
    b.style.pointerEvents = "";
    self2.gutter.style.cursor = "";
    self2.parent.style.cursor = "";
    document2.body.style.cursor = "";
  }
  function startDragging(e) {
    if ("button" in e && e.button !== 0) {
      return;
    }
    var self2 = this;
    var a = elements[self2.a].element;
    var b = elements[self2.b].element;
    if (!self2.dragging) {
      getOption(options, "onDragStart", NOOP)(getSizes());
    }
    e.preventDefault();
    self2.dragging = true;
    self2.move = drag.bind(self2);
    self2.stop = stopDragging.bind(self2);
    global[addEventListener]("mouseup", self2.stop);
    global[addEventListener]("touchend", self2.stop);
    global[addEventListener]("touchcancel", self2.stop);
    global[addEventListener]("mousemove", self2.move);
    global[addEventListener]("touchmove", self2.move);
    a[addEventListener]("selectstart", NOOP);
    a[addEventListener]("dragstart", NOOP);
    b[addEventListener]("selectstart", NOOP);
    b[addEventListener]("dragstart", NOOP);
    a.style.userSelect = "none";
    a.style.webkitUserSelect = "none";
    a.style.MozUserSelect = "none";
    a.style.pointerEvents = "none";
    b.style.userSelect = "none";
    b.style.webkitUserSelect = "none";
    b.style.MozUserSelect = "none";
    b.style.pointerEvents = "none";
    self2.gutter.style.cursor = cursor;
    self2.parent.style.cursor = cursor;
    document2.body.style.cursor = cursor;
    calculateSizes.call(self2);
    self2.dragOffset = getMousePosition(e) - self2.end;
  }
  sizes = trimToMin(sizes);
  var pairs = [];
  elements = ids.map(function(id, i) {
    var element = {
      element: elementOrSelector(id),
      size: sizes[i],
      minSize: minSizes[i],
      maxSize: maxSizes[i],
      snapOffset: snapOffsets[i],
      i
    };
    var pair;
    if (i > 0) {
      pair = {
        a: i - 1,
        b: i,
        dragging: false,
        direction,
        parent
      };
      pair[aGutterSize] = getGutterSize(
        gutterSize,
        i - 1 === 0,
        false,
        gutterAlign
      );
      pair[bGutterSize] = getGutterSize(
        gutterSize,
        false,
        i === ids.length - 1,
        gutterAlign
      );
      if (parentFlexDirection === "row-reverse" || parentFlexDirection === "column-reverse") {
        var temp = pair.a;
        pair.a = pair.b;
        pair.b = temp;
      }
    }
    if (i > 0) {
      var gutterElement = gutter(i, direction, element.element);
      setGutterSize(gutterElement, gutterSize, i);
      pair[gutterStartDragging] = startDragging.bind(pair);
      gutterElement[addEventListener](
        "mousedown",
        pair[gutterStartDragging]
      );
      gutterElement[addEventListener](
        "touchstart",
        pair[gutterStartDragging]
      );
      parent.insertBefore(gutterElement, element.element);
      pair.gutter = gutterElement;
    }
    setElementSize(
      element.element,
      element.size,
      getGutterSize(
        gutterSize,
        i === 0,
        i === ids.length - 1,
        gutterAlign
      ),
      i
    );
    if (i > 0) {
      pairs.push(pair);
    }
    return element;
  });
  function adjustToMin(element) {
    var isLast = element.i === pairs.length;
    var pair = isLast ? pairs[element.i - 1] : pairs[element.i];
    calculateSizes.call(pair);
    var size = isLast ? pair.size - element.minSize - pair[bGutterSize] : element.minSize + pair[aGutterSize];
    adjust.call(pair, size);
  }
  elements.forEach(function(element) {
    var computedSize = element.element[getBoundingClientRect]()[dimension];
    if (computedSize < element.minSize) {
      if (expandToMin) {
        adjustToMin(element);
      } else {
        element.minSize = computedSize;
      }
    }
  });
  function setSizes(newSizes) {
    var trimmed = trimToMin(newSizes);
    trimmed.forEach(function(newSize, i) {
      if (i > 0) {
        var pair = pairs[i - 1];
        var a = elements[pair.a];
        var b = elements[pair.b];
        a.size = trimmed[i - 1];
        b.size = newSize;
        setElementSize(a.element, a.size, pair[aGutterSize], a.i);
        setElementSize(b.element, b.size, pair[bGutterSize], b.i);
      }
    });
  }
  function destroy(preserveStyles, preserveGutter) {
    pairs.forEach(function(pair) {
      if (preserveGutter !== true) {
        pair.parent.removeChild(pair.gutter);
      } else {
        pair.gutter[removeEventListener](
          "mousedown",
          pair[gutterStartDragging]
        );
        pair.gutter[removeEventListener](
          "touchstart",
          pair[gutterStartDragging]
        );
      }
      if (preserveStyles !== true) {
        var style = elementStyle(
          dimension,
          pair.a.size,
          pair[aGutterSize]
        );
        Object.keys(style).forEach(function(prop) {
          elements[pair.a].element.style[prop] = "";
          elements[pair.b].element.style[prop] = "";
        });
      }
    });
  }
  return {
    setSizes,
    getSizes,
    collapse: function collapse(i) {
      adjustToMin(elements[i]);
    },
    destroy,
    parent,
    pairs
  };
};
var split_es_default = Split;

// src/utils/split-container.ts
var DEFAULT_OPTIONS = {
  gutterCls: "thick",
  direction: "horizontal",
  borderColor: "border",
  snapOffset: 10,
  dragInterval: 5
};
var SPLIT_CONST = {
  gutterSize: {
    thin: 1,
    thick: 6
  }
};
function createSplitContainer(elements, options) {
  const initOptions = Object.assign({}, DEFAULT_OPTIONS, options);
  const { gutterCls, direction, borderColor } = initOptions;
  const splitHandler = split_es_default(elements, {
    ...initOptions,
    gutterSize: SPLIT_CONST.gutterSize[gutterCls],
    gutter: gutter()
  });
  return {
    ...splitHandler
  };
  function gutter() {
    const gutterElCls = [
      "gutter",
      `gutter--${direction}`,
      `gutter--${gutterCls}`,
      `gutter--${borderColor}`
    ].join(" ");
    return () => {
      const gutter2 = document.createElement("div");
      gutter2.className = gutterElCls;
      return gutter2;
    };
  }
}

// src/utils/blob.ts
function blobToStr(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(blob);
  });
}

// src/utils/xss.ts
var import_xss = __toESM(require_lib2(), 1);
var xss_default = import_xss.default;

// src/utils/outside.ts
function createClickOutsideHandler({ eventElements, initFunc, clickOutsideFunc }) {
  const globalClickHandler = (ev) => {
    let tmp = ev.target;
    while (tmp !== null) {
      if (eventElements.indexOf(tmp) !== -1)
        return;
      tmp = tmp.parentElement;
    }
    if (clickOutsideFunc)
      clickOutsideFunc();
    handler.destroy();
  };
  const handler = {
    create: () => {
      if (initFunc)
        initFunc();
      window.addEventListener("scroll", globalClickHandler, true);
      window.addEventListener("mousedown", globalClickHandler);
    },
    destroy: () => {
      window.removeEventListener("scroll", globalClickHandler, true);
      window.removeEventListener("mousedown", globalClickHandler);
    }
  };
  return handler;
}

// src/utils/palette.ts
var Palette = {
  BIZ_NO_AUTH: "var(--purple)"
};

// src/utils/classNames/z-index.classNames.ts
var z_index_classNames_default = {
  zIndex: {
    floating: "z-index--floating",
    dialog: "z-index--dialog",
    popover: "z-index--popover",
    toast: "z-index--toast",
    message: "z-index--message"
  }
};

// src/utils/size.ts
var WHITESPACE_WIDTH = 3.4;
var NUMERIC_RATIO = 0.65;
var CacheTextSizeCalculator = class {
  constructor() {
    this.isInit = false;
    this.context = null;
    this.cacheMap = /* @__PURE__ */ new Map();
    this.curFontSize = "";
    this.curFontFamily = "";
    this._offscreenCanvas = null;
  }
  init() {
    if (this.isInit)
      return;
    this.isInit = true;
    this._offscreenCanvas = new OffscreenCanvas(0, 0);
    this.context = this._offscreenCanvas.getContext("2d");
  }
  getContext() {
    this.init();
    if (!this.context)
      throw new Error("Can't create canvas context");
    return this.context;
  }
  setFontStyle(fontSize, fontFamily) {
    if (this.curFontSize !== fontSize || this.curFontFamily !== fontFamily) {
      this.getContext().font = `${fontSize} ${fontFamily}`;
      this.curFontSize = fontSize;
      this.curFontFamily = fontFamily;
    }
  }
  getCacheKey(text) {
    return `${this.curFontSize}_${this.curFontFamily}_${text}`;
  }
  _calculate(text) {
    const filteredWhiteSpaceText = text.replace(/ /g, "");
    const whiteSpaceCount = text.length - filteredWhiteSpaceText.length;
    const numberReplacedText = filteredWhiteSpaceText.replace(/\d/g, "");
    const numberCount = filteredWhiteSpaceText.length - numberReplacedText.length;
    const numberSize = parseInt(this.curFontSize, 10) * NUMERIC_RATIO;
    if (Number.isNaN(numberSize))
      console.error(`ir-style text calculation occurred a NaN. fontSize: ${this.curFontSize}, fontFamily: ${this.curFontFamily}`);
    return Math.ceil(this.getContext().measureText(numberReplacedText).width + whiteSpaceCount * WHITESPACE_WIDTH + numberCount * numberSize);
  }
  calculateWidth(text) {
    const cacheKey = this.getCacheKey(text);
    let cachedSize = this.cacheMap.get(cacheKey);
    if (cachedSize === void 0) {
      cachedSize = this._calculate(text);
      this.cacheMap.set(cacheKey, cachedSize);
    }
    return cachedSize;
  }
};
var calculatorInstance = null;
function getTextWidthContext(fontSize, fontFamily) {
  if (!calculatorInstance)
    calculatorInstance = new CacheTextSizeCalculator();
  calculatorInstance.setFontStyle(fontSize, fontFamily);
  return calculatorInstance;
}

// src/utils/permission/clipboard.ts
var getCopyTextarea = /* @__PURE__ */ (() => {
  let copyTextarea = null;
  return () => {
    if (copyTextarea)
      return copyTextarea;
    copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.style.top = "0";
    copyTextarea.style.left = "0";
    copyTextarea.style.zIndex = "-1";
    copyTextarea.style.outline = "0 none";
    copyTextarea.style.overflow = "hidden";
    copyTextarea.setAttribute("tabindex", "-1");
    copyTextarea.setAttribute("autocomplete", "off");
    copyTextarea.setAttribute("wrap", "hard");
    return copyTextarea;
  };
})();
var ClipboardManager = {
  async check(permission) {
    const state = await navigator.permissions.query({ name: permission });
    return state.state;
  },
  getText() {
    return navigator.clipboard.readText();
  },
  read() {
    return navigator.clipboard.read();
  },
  setText(text) {
    const textarea2 = getCopyTextarea();
    document.body.appendChild(textarea2);
    textarea2.focus();
    textarea2.value = text || "\0";
    textarea2.select();
    document.execCommand("copy");
    textarea2.remove();
  }
};

// src/utils/collection.ts
function* get2DGenerator(height, width) {
  for (let y = 0; y < height; ++y)
    for (let x = 0; x < width; ++x)
      yield { y, x };
}
function forEachBySize(size, func) {
  for (let i = 0; i < size; ++i)
    func(i);
}
function forEachFilterBySize(size, filter, func) {
  for (let i = 0; i < size; ++i)
    filter(i) && func(i);
}

// ../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
  setTimeout: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", void 0, void 0);
}();
function errorNotification(error) {
  return createNotification("E", void 0, error);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a = context, errorThrown = _a.errorThrown, error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
  return x;
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input2) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input2);
  };
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
  function Observable3(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable3.prototype.lift = function(operator) {
    var observable2 = new Observable3();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable3.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable3.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable3.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable3.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable3.prototype[observable] = function() {
    return this;
  };
  Observable3.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable3.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable3.create = function(subscribe) {
    return new Observable3(subscribe);
  };
  return Observable3;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
var BehaviorSubject = function(_super) {
  __extends(BehaviorSubject2, _super);
  function BehaviorSubject2(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject2.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject2.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject2.prototype.getValue = function() {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject2.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject2;
}(Subject);

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

// ../../node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/pairwise.js
function pairwise() {
  return operate(function(source, subscriber) {
    var prev;
    var hasPrev = false;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var p = prev;
      prev = value;
      hasPrev && subscriber.next([p, value]);
      hasPrev = true;
    }));
  });
}

// src/utils/rx-state.ts
var ReactiveState = class {
  constructor(initialState, pipeInit) {
    this._subscriptionList = [];
    this._state = new BehaviorSubject(initialState);
    this._pipe = pipeInit ? pipeInit(this._state) : this._state;
    this._value = initialState;
    this._pipe.pipe(pairwise()).subscribe(([prev, next]) => {
      this._value = next;
      this._subscriptionList.forEach((subscriber) => {
        try {
          subscriber(prev, next);
        } catch (err) {
          console.error("ReactiveState Subscription Error", this.constructor.name, err);
        }
      });
    });
  }
  addSubscription(subscriber) {
    this._subscriptionList.push(subscriber);
  }
  removeSubscription(subscriber) {
    const index = this._subscriptionList.indexOf(subscriber);
    if (index >= 0)
      this._subscriptionList.splice(index, 1);
    else
      console.warn("ReactiveState.removeSubscription: subscriber not found");
  }
  next(value) {
    this._state.next(value);
  }
  get value() {
    return this._value;
  }
};

export {
  appendElement,
  createElement,
  hasClass,
  getElement,
  closest,
  removeAllChildren,
  addStyleXClass,
  removeStyleXClass,
  setStyleXToken,
  removeStyleXToken,
  setDataSetFlag,
  uuid,
  tooltip,
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
  radio,
  radioInput,
  radioText,
  radioWrapper,
  progress,
  progressVariants,
  input,
  inputNative,
  inputPrefix,
  inputSuffix,
  button,
  buttonIconPrefix,
  buttonPrimary,
  buttonSecondary,
  buttonTertiary,
  buttonTransparent,
  checkbox,
  checkboxInput,
  checkboxText,
  checkboxWrapper,
  datePicker,
  datePickerContent,
  datePickerContentCell,
  datePickerContentCellSelected,
  datePickerContentHeaderCell,
  datePickerContentTable,
  datePickerFooter,
  datePickerHeader,
  datePickerHeaderTitle,
  cellContent,
  cellContentEllipsis,
  cellError,
  cellMemo,
  emptyRow,
  grid,
  gridBodyCell,
  gridCell,
  gridHeaderCell,
  gridSelection,
  gridSelectionAllFreezedArea,
  gridSelectionBorderLine,
  gridSelectionFreezedColArea,
  gridSelectionFreezedRowArea,
  gridSelectionNonFreezedArea,
  gridStickyCell,
  gridStickyHeaderRow,
  gridStickyRow,
  gridSubSelection,
  gridTable,
  gridWrapper,
  textarea,
  gridCellButton,
  gridCellButtonIcon,
  gridCellButtonIconDivider,
  gridCellButtonOutline,
  gridCellButtonWrapper,
  gridSelect,
  gridCellCheckbox,
  gridCellCheckboxText,
  gridCellCheckboxWrapper,
  gridDatePicker,
  gridProgress,
  gridRadio,
  gridMemo,
  gridMemoError,
  gridMemoNormal,
  gridColResizerGuide,
  gridColResizing,
  gridHeaderCellColResizing,
  gridHeaderCellRowResizing,
  gridRowResizerGuide,
  gridRowResizing,
  gridColMoveGuide,
  gridRowMoveGuide,
  gridVariants,
  borderScroll,
  createLoadingHandler,
  createIconElement,
  createCustomIcon,
  getIRIconPng,
  getTooltipElements,
  createTooltip,
  createTooltipBySelector,
  getMinMaxBetween,
  parseInt2 as parseInt,
  createTooltipContainer,
  createSplitContainer,
  blobToStr,
  require_lib2 as require_lib,
  xss_default,
  createClickOutsideHandler,
  Palette,
  z_index_classNames_default,
  getTextWidthContext,
  ClipboardManager,
  get2DGenerator,
  forEachBySize,
  forEachFilterBySize,
  map,
  ReactiveState
};
//# sourceMappingURL=chunk-6IBVOU7E.js.map
