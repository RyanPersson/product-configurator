/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/css/tutorial-configurator.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader!./src/css/tutorial-configurator.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#logo-head {\\n    height:7.5%;\\n    border-radius: 2px;\\n    margin: 0.5% 0.5% 0.25% 0.5%;\\n}\\n\\n#component-browser {\\n  position: relative;\\n  width: 70%;\\n  height: 25.5%;\\n  float: left;\\n  margin: 0.25% 0.25% 0.25% 0.5%;\\n}\\n\\n#model-info {\\n  position: relative;\\n  top: 11%;\\n  left: 4%;\\n  width: 90%;\\n}\\n\\n#inspector-info {\\n  height: 100%;\\n}\\n\\n#build-buttons {\\n  width: 28.5%;\\n  height: 9%;\\n  margin: 0.25% 0.5% 0.25% 0.25%;\\n  float: right;\\n}\\n\\n#button-strip {\\n  margin: 4% 14% 3.5% 14%;\\n}\\n\\n#button-strip .btn {\\n  font-size: small;\\n}\\n\\n#canvas {\\n  width: 70%;\\n  height: 65%;\\n  position: relative;\\n  float: left;\\n  margin: 0.25% 0.25% 0.5% 0.5%;\\n}\\n\\n\\n#component-preview {\\n  width: 28.5%;\\n  height: 40%;\\n  margin: 0.25% 0.5% 0.25% 0.25%;\\n  float: right;\\n  position: relative;\\n}\\n\\n#component-pills {\\n  margin: 3.5% 1% 1% 1%;\\n  height: 76%;\\n  font-size: small;\\n}\\n\\n.nav-tabs {\\n  border-width: 0px;\\n}\\n\\n#pills-tabContent {\\n  padding: 0.5% 1% 1% 1%;\\n  height: 75%;\\n  background-color:#272727;\\n  border: 1px solid #545454;\\n  border-radius: 2px;\\n}\\n\\n#pills-tabContent img {\\n  max-width: 130px;\\n}\\n\\n.nav-tabs .nav-link.active, .nav-pills .show>.nav-link {\\n  background-color: #272727;\\n  color: #d4d4d4;\\n  border: 1px solid #545454;\\n  border-bottom: 1px solid #272727;\\n}\\n\\n#configuration-details {\\n  width: 28.5%;\\n  height: 40.5%;\\n  float: right;\\n  margin: 0.25% 0.5% 0.5% 0.25%;\\n\\n}\\n\\n.info-text-cat {\\n  font-family: quicksand;\\n  font-size: small;\\n  font-weight: bolder;\\n  margin: 5px 5px 5px 10px;\\n  line-height: 0.25;\\n}\\n\\n.inspector-values {\\n  font-size: smaller;\\n  margin-left: 0.7rem;\\n}\\n\\n.model-thumb {\\n  /* border: 1px solid black; */\\n  margin: 0.5% 0% 0.5% 0%;\\n  padding: 1% 1.5% 1% 1.5%;\\n  border-radius: 2px;\\n  text-align: center;\\n  float: left;\\n  z-index: 10;\\n  height: 11.5vh;\\n  width: 20vh;\\n  border-right: 1px dashed #d4d4d4;\\n}\\n\\na[disabled], a[disabled]:hover {\\n  pointer-events: none;\\n  color: #e1e1e1;\\n}\\n\\n.model-thumb img {\\n  position: relative;\\n  float: left;\\n  width:  100%;\\n  height: 100%;\\n  background-position: 50% 50%;\\n  background-repeat:   no-repeat;\\n  background-size:     cover;\\n}\\n\\n#model-info-keys {\\n  float: left;\\n  padding-left: 10px;\\n  vertical-align: middle;\\n  padding-top: 5px;\\n  font-size: smaller;\\n\\n}\\n\\nbody, html {\\n  height: 99%;\\n  background-color: #444444;\\n  color: #d4d4d4;\\n    font-family: 'Permanent Marker', cursive;\\n  }\\n\\n.comp-container {\\n    border: 2px solid black;\\n    border-radius: 52x;\\n    background-color: #212121;\\n}\\n\\n.comp-label {\\n  position: absolute;\\n  padding: 0.25em 0.5em 0.25em 0.5em;\\n  font-family: 'Permanent Marker', cursive;\\n  font-weight: bold;\\n  font-size: medium;\\n}\\n\\n#ts3dlogo {\\n  height: 100%;\\n  width: 50%;\\n  /* left: 0%; */\\n  position: relative;\\n  float: left;\\n}\\n\\n#ts3dlogo img {\\n  max-width:50%;\\n  max-height:60%;\\n  top: 22%;\\n  left: 2%;\\n  position: relative;\\n}\\n\\n#hclogo {\\n  height: 100%;\\n  width: 50%;\\n  float: left;\\n  position: relative\\n}\\n\\n#hclogo img{\\n  max-width: 60%;\\n  max-height: 65%;\\n  top: 20%;\\n  display: flex;\\n  float: right;\\n  right: 2%;\\n  position: relative;\\n}\\n\\n/* width */\\n::-webkit-scrollbar {\\n  width: 0%;\\n  height: 0%;\\n}\\n\\n/* Handle */\\n::-webkit-scrollbar-thumb {\\n  background: #888; \\n  border-radius: 5px;\\n}\\n\\n/* Handle on hover */\\n::-webkit-scrollbar-thumb:hover {\\n  background: #555; \\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/css/tutorial-configurator.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n\t// get current location\n\tvar location = typeof window !== \"undefined\" && window.location;\n\n\tif (!location) {\n\t\tthrow new Error(\"fixUrls requires window.location\");\n\t}\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t\treturn css;\n\t}\n\n\tvar baseUrl = location.protocol + \"//\" + location.host;\n\tvar currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n This regular expression is just a way to recursively match brackets within\n a string.\n \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n    (  = Start a capturing group\n      (?:  = Start a non-capturing group\n          [^)(]  = Match anything that isn't a parentheses\n          |  = OR\n          \\(  = Match a start parentheses\n              (?:  = Start another non-capturing groups\n                  [^)(]+  = Match anything that isn't a parentheses\n                  |  = OR\n                  \\(  = Match a start parentheses\n                      [^)(]*  = Match anything that isn't a parentheses\n                  \\)  = Match a end parentheses\n              )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n  \\)  = Match a close parens\n \t /gi  = Get all matches, not the first.  Be case insensitive.\n  */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t}).replace(/^'(.*)'$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t});\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t\treturn fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t\t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/tutorial-configurator.css":
/*!*******************************************!*\
  !*** ./src/css/tutorial-configurator.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./tutorial-configurator.css */ \"./node_modules/css-loader/index.js!./src/css/tutorial-configurator.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/tutorial-configurator.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_tutorial_configurator_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/tutorial-configurator.css */ \"./src/css/tutorial-configurator.css\");\n/* harmony import */ var _css_tutorial_configurator_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_tutorial_configurator_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nlet directoryPath = '.';\n\n// Application logic will begin once DOM content is loaded\nwindow.onload = () => {\n    const app = new main();\n};\nclass main {\n    constructor() {\n        this._buildSelections = new Map();\n        // Instantiate the viewers\n        this._viewer = new Communicator.WebViewer({\n            containerId: \"viewer\",\n            empty: true\n        });\n        this._compViewer = new Communicator.WebViewer({\n            containerId: \"comp-viewer\",\n            empty: true\n        });\n        this._viewer.start();\n        this._compViewer.start();\n        this._compViewer.setCallbacks({\n            modelStructureReady: () => {\n                // Background color for viewers\n                this._compViewer.view.setBackgroundColor(new Communicator.Color(33, 33, 33), new Communicator.Color(175, 175, 175));\n                this._compViewer.view.setBackfacesVisible(true);\n            }\n        });\n        this._viewer.setCallbacks({\n            modelStructureReady: () => {\n                // Background color for viewers\n                this._viewer.view.setBackgroundColor(new Communicator.Color(33, 33, 33), new Communicator.Color(175, 175, 175));\n                // Additional viewer options\n                this._viewer.view.setBackfacesVisible(true);\n                this._viewer.view.getAxisTriad().enable();\n                this._viewer.view.getNavCube().enable();\n                this._viewer.view.getNavCube().setAnchor(Communicator.OverlayAnchor.LowerRightCorner);\n                this._viewer.model.setEnableAutomaticUnitScaling(false);\n            },\n            selectionArray: selectionEvents => {\n                if (selectionEvents.length == 0) {\n                    return;\n                }\n                let handleOp = this._viewer.operatorManager.getOperator(Communicator.OperatorId.Handle);\n                handleOp.addHandles([selectionEvents[0].getSelection().getNodeId()]);\n                handleOp.showHandles();\n            }\n        }); // End Callbacks\n        // Gather attach point data and store in Map\n        this._frameAttachPoints = new Map();\n        fetch(directoryPath + '/data/attachPoints.json').then(resp => {\n            if (resp.ok) {\n                resp.json().then(data => {\n                    let nodeData = data.NodeData;\n                    let numEntries = nodeData.length;\n                    for (let i = 0; i < numEntries; ++i) {\n                        this._frameAttachPoints.set(nodeData[i].modelName, nodeData[i]);\n                    }\n                    ;\n                });\n            } else {\n                alert(\"Attach point data for this model was not found.\");\n            }\n        });\n        this.setEventListeners();\n    } // End app Constructor\n    // Function to load models\n    loadModelPreview(modelName, transform = undefined) {\n        this._compViewer.model.clear().then(() => {\n            const nodeName = \"Model-\" + modelName;\n            const modelNodeId = this._compViewer.model.createNode(null, nodeName);\n            this._compViewer.model.loadSubtreeFromScsFile(modelNodeId, directoryPath + \"/data/scs/\" + modelName + \".scs\").then(() => {\n                this._compViewer.view.fitWorld();\n            });\n        });\n    }\n    setEventListeners() {\n        let pills = document.getElementById(\"pills-tab\");\n        let pillsRefs = pills.getElementsByTagName(\"a\");\n        let pillsContent = document.getElementById(\"pills-tabContent\");\n        let contentPanes = pillsContent.getElementsByTagName(\"div\");\n        let modelThumbnails = pillsContent.getElementsByTagName(\"a\");\n        for (let ref of pillsRefs) {\n            ref.onclick = e => {\n                for (let ref of pillsRefs) {\n                    ref.classList.remove(\"active\", \"show\");\n                }\n                for (let pane of contentPanes) {\n                    pane.classList.remove(\"active\");\n                }\n                let elem = e.currentTarget;\n                elem.classList.add(\"active\");\n                let tag = elem.getAttribute(\"content-id\");\n                document.getElementById(tag).classList.add(\"show\", \"active\");\n            };\n        }\n        for (let thumbnail of modelThumbnails) {\n            let thumbnailElement = thumbnail;\n            thumbnailElement.onclick = e => {\n                e.preventDefault();\n                let elem = e.currentTarget;\n                let modelToLoad = elem.getAttribute(\"model\");\n                if (modelToLoad === null) {\n                    alert(\"This component is currently unavailable. Please select another component.\");\n                } else {\n                    let component = elem.parentElement.id;\n                    // Load the model into the scene when clicked\n                    this.loadModelPreview(modelToLoad);\n                    this._componentType = component;\n                    this._selectedComponent = modelToLoad;\n                    this._selectedComponentName = elem.getAttribute(\"name\");\n                }\n            };\n        }\n        document.getElementById(\"add-to-build-btn\").onclick = () => {\n            if (!this._componentType || !this._selectedComponent || !this._selectedComponentName) {\n                alert(\"No component has been selected to add to build. Please select a component to add.\");\n                return;\n            }\n            let model = this._viewer.model;\n            this._buildSelections.set(this._componentType, this._selectedComponent);\n            let frameBase = this._buildSelections.get(\"frame\");\n            if (frameBase === undefined) {\n                alert(\"Please select a frame before adding other components to your build.\");\n                return;\n            }\n            const nodeName = \"Model-\" + this._componentType;\n            let componentSubtrees = model.getNodeChildren(model.getAbsoluteRootNode());\n            // Build the transform matrix for the part to place it in the right spot when added\n            let rawMatData = this._frameAttachPoints.get(frameBase)[this._componentType];\n            let transformMatrix = this._componentType === \"frame\" ? null : Communicator.Matrix.createFromArray(Object.values(rawMatData));\n            // First time frame is selected\n            if (componentSubtrees.length === 0 && this._componentType === \"frame\") {\n                const modelNodeId = model.createNode(null, nodeName);\n                model.loadSubtreeFromScsFile(modelNodeId, directoryPath + `/data/scs/${this._selectedComponent}.scs`);\n            }\n            // For all other components, identify if the same type component has already been added.\n            // If so, delete the existing node, and load the new node into the same nodeId and name.\n            // Otherwise, create a new node off the absolute root\n            else {\n                    let nodeExists = false;\n                    for (let nodeId of componentSubtrees) {\n                        if (model.getNodeName(nodeId) === nodeName) {\n                            nodeExists = true;\n                            model.deleteNode(nodeId).then(() => {\n                                let promiseArray = [];\n                                const modelNodeId = model.createNode(null, nodeName, nodeId, transformMatrix);\n                                promiseArray.push(model.loadSubtreeFromScsFile(modelNodeId, directoryPath + `/data/scs/${this._selectedComponent}.scs`));\n                                if (this._componentType === \"frame\") {\n                                    promiseArray.push(model.setNodesVisibility([model.getAbsoluteRootNode()], false));\n                                    let componentSubtrees = model.getNodeChildren(model.getAbsoluteRootNode());\n                                    // Frame selection change - update the component attach points\n                                    for (let nodeId of componentSubtrees) {\n                                        let nodeName = model.getNodeName(nodeId);\n                                        let nodeType = nodeName.slice(6);\n                                        if (nodeType === \"frame\") continue;\n                                        let rawMatData = this._frameAttachPoints.get(frameBase)[nodeType];\n                                        let transformMatrix = Communicator.Matrix.createFromArray(Object.values(rawMatData));\n                                        promiseArray.push(model.setNodeMatrix(nodeId, transformMatrix));\n                                    }\n                                    Promise.all(promiseArray).then(() => {\n                                        this._viewer.view.setBoundingCalculationIgnoresInvisible(false);\n                                        this._viewer.view.fitWorld(0).then(() => model.setNodesVisibility([model.getAbsoluteRootNode()], true));\n                                    });\n                                }\n                                return;\n                            });\n                        }\n                    }\n                    if (!nodeExists) {\n                        const modelNodeId = model.createNode(null, nodeName, null, transformMatrix);\n                        this._viewer.model.loadSubtreeFromScsFile(modelNodeId, directoryPath + `/data/scs/${this._selectedComponent}.scs`);\n                    }\n                }\n            document.getElementById(`breakdown-${this._componentType}`).innerHTML = this._selectedComponentName;\n        };\n        document.getElementById(\"reset-build-btn\").onclick = () => {\n            let opt = confirm(\"Are you sure would you like to reset your build? (This will clear all current selections!)\");\n            if (opt) {\n                this._viewer.model.clear();\n                document.getElementById(\"breakdown-frame\").innerHTML = \"Not Selected\";\n                document.getElementById(\"breakdown-fork\").innerHTML = \"Not Selected\";\n                document.getElementById(\"breakdown-frontwheel\").innerHTML = \"Not Selected\";\n                document.getElementById(\"breakdown-rearwheel\").innerHTML = \"Not Selected\";\n                document.getElementById(\"breakdown-seat\").innerHTML = \"Not Selected\";\n                document.getElementById(\"breakdown-crankset\").innerHTML = \"Not Selected\";\n                document.getElementById(\"breakdown-handlebar\").innerHTML = \"Not Selected\";\n            }\n            this._buildSelections.clear();\n        };\n        window.onresize = () => {\n            this._viewer.resizeCanvas();\n            this._compViewer.resizeCanvas();\n        };\n    } // End setting event handlers \n} // End app class\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });