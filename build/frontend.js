/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend.scss":
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

  __webpack_require__.r(__webpack_exports__);
  // extracted by mini-css-extract-plugin
  
  
  /***/ }),
  
  /***/ "react":
  /*!************************!*\
    !*** external "React" ***!
    \************************/
  /***/ (function(module) {
  
  module.exports = window["React"];
  
  /***/ }),
  
  /***/ "react-dom":
  /*!***************************!*\
    !*** external "ReactDOM" ***!
    \***************************/
  /***/ (function(module) {
  
  module.exports = window["ReactDOM"];
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	!function() {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = function(module) {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				function() { return module['default']; } :
  /******/ 				function() { return module; };
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	}();
  /******/ 	
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	!function() {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = function(exports, definition) {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	}();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	!function() {
  /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
  /******/ 	}();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	!function() {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = function(exports) {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	}();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function() {
  /*!*************************!*\
    !*** ./src/frontend.js ***!
    \*************************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
  /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend.scss */ "./src/frontend.scss");
  
  
  
  
  const divsToUpdate = document.querySelectorAll(".paying-attention-update-me");
  divsToUpdate.forEach(function (div) {
    const data = JSON.parse(div.querySelector("pre").innerHTML);
    react_dom__WEBPACK_IMPORTED_MODULE_1___default().render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Quiz, {
      ...data
    }), div);
    div.classList.remove("paying-attention-update-me");
  });
  function Quiz(props) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "paying-attention-frontend"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, props.question), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, props.answers.map(function (answer) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, answer);
    }), ";"));
  }
  }();
  /******/ })()
  ;
  //# sourceMappingURL=frontend.js.map