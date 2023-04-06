/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Contants/index.js":
/*!*******************************!*\
  !*** ./src/Contants/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CONSTANTS = {
  REQ: {
    LOGIN: ""
  },
  MESSAGE_EVENT: {
    OPEN_EXTENTION: "open_extention"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONSTANTS);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/Background/background.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Contants */ "./src/Contants/index.js");

console.log("Im background js");

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === CONSTANTS.MESSAGE_EVENT.OPEN_EXTENTION) {
//     chrome.windows.getCurrent((currentWindow) => {
//       const windowWidth = 400;
//       const windowHeight = 400;
//       const windowLeft = currentWindow.left + currentWindow.width - windowWidth;
//       const windowTop = currentWindow.top;

//       chrome.windows.create({
//         url: chrome.runtime.getURL("popup.html"),
//         type: "popup",
//         width: windowWidth,
//         height: windowHeight,
//         left: windowLeft,
//         top: windowTop,
//       });
//     });
//   }
// });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRztFQUNoQkMsR0FBRyxFQUFFO0lBQ0hDLEtBQUssRUFBRTtFQUNULENBQUM7RUFDREMsYUFBYSxFQUFFO0lBQ2JDLGNBQWMsRUFBRTtFQUNsQjtBQUNGLENBQUM7QUFFRCxpRUFBZUosU0FBUzs7Ozs7O1VDVHhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7QUFFcENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWVfZXh0ZW50aW9uX3JlYWN0X3dlYnBhY2tfYm9saWVycGxhdGUvLi9zcmMvQ29udGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lX2V4dGVudGlvbl9yZWFjdF93ZWJwYWNrX2JvbGllcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZV9leHRlbnRpb25fcmVhY3Rfd2VicGFja19ib2xpZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lX2V4dGVudGlvbl9yZWFjdF93ZWJwYWNrX2JvbGllcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lX2V4dGVudGlvbl9yZWFjdF93ZWJwYWNrX2JvbGllcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lX2V4dGVudGlvbl9yZWFjdF93ZWJwYWNrX2JvbGllcnBsYXRlLy4vc3JjL0JhY2tncm91bmQvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05TVEFOVFMgPSB7XG4gIFJFUToge1xuICAgIExPR0lOOiBcIlwiLFxuICB9LFxuICBNRVNTQUdFX0VWRU5UOiB7XG4gICAgT1BFTl9FWFRFTlRJT046IFwib3Blbl9leHRlbnRpb25cIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENPTlNUQU5UUztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi4vQ29udGFudHNcIjtcblxuY29uc29sZS5sb2coXCJJbSBiYWNrZ3JvdW5kIGpzXCIpO1xuXG4vLyBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4vLyAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gQ09OU1RBTlRTLk1FU1NBR0VfRVZFTlQuT1BFTl9FWFRFTlRJT04pIHtcbi8vICAgICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KChjdXJyZW50V2luZG93KSA9PiB7XG4vLyAgICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IDQwMDtcbi8vICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IDQwMDtcbi8vICAgICAgIGNvbnN0IHdpbmRvd0xlZnQgPSBjdXJyZW50V2luZG93LmxlZnQgKyBjdXJyZW50V2luZG93LndpZHRoIC0gd2luZG93V2lkdGg7XG4vLyAgICAgICBjb25zdCB3aW5kb3dUb3AgPSBjdXJyZW50V2luZG93LnRvcDtcblxuLy8gICAgICAgY2hyb21lLndpbmRvd3MuY3JlYXRlKHtcbi8vICAgICAgICAgdXJsOiBjaHJvbWUucnVudGltZS5nZXRVUkwoXCJwb3B1cC5odG1sXCIpLFxuLy8gICAgICAgICB0eXBlOiBcInBvcHVwXCIsXG4vLyAgICAgICAgIHdpZHRoOiB3aW5kb3dXaWR0aCxcbi8vICAgICAgICAgaGVpZ2h0OiB3aW5kb3dIZWlnaHQsXG4vLyAgICAgICAgIGxlZnQ6IHdpbmRvd0xlZnQsXG4vLyAgICAgICAgIHRvcDogd2luZG93VG9wLFxuLy8gICAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vIH0pO1xuIl0sIm5hbWVzIjpbIkNPTlNUQU5UUyIsIlJFUSIsIkxPR0lOIiwiTUVTU0FHRV9FVkVOVCIsIk9QRU5fRVhURU5USU9OIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=