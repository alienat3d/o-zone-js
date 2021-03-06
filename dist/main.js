/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../\u0000#glo-academy/o-zone-js/src/index.js":
/*!**************************************************!*\
  !*** ../../ #glo-academy/o-zone-js/src/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"../../\\u0000#glo-academy/o-zone-js/src/modules/cart.js\");\n/* harmony import */ var _modules_second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/second */ \"../../\\u0000#glo-academy/o-zone-js/src/modules/second.js\");\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_second__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://o-zone-js/../../%00#glo-academy/o-zone-js/src/index.js?");

/***/ }),

/***/ "../../\u0000#glo-academy/o-zone-js/src/modules/cart.js":
/*!*********************************************************!*\
  !*** ../../ #glo-academy/o-zone-js/src/modules/cart.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"../../\\u0000#glo-academy/o-zone-js/src/modules/getData.js\");\n\r\n\r\nconst cart = () => {\r\n  const cartBtn = document.getElementById('cart');\r\n  const cartModal = document.querySelector('.cart');\r\n  const cartCloseBtn = cartModal.querySelector('.cart-close');\r\n\r\n  const openCart = () => {\r\n    cartModal.style.display = 'flex';\r\n  };\r\n\r\n  const closeCart = () => {\r\n    cartModal.style.display = '';\r\n  };\r\n\r\n  cartBtn.addEventListener('click', openCart);\r\n  cartCloseBtn.addEventListener('click', closeCart);\r\n\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('getData2');\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://o-zone-js/../../%00#glo-academy/o-zone-js/src/modules/cart.js?");

/***/ }),

/***/ "../../\u0000#glo-academy/o-zone-js/src/modules/deleteData.js":
/*!***************************************************************!*\
  !*** ../../ #glo-academy/o-zone-js/src/modules/deleteData.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteData = () => {\r\n  return (\r\n    fetch('http://localhost:3000/goods/24', {\r\n      method: 'DELETE',\r\n    })\r\n      // Ответ нужно обработать. res - сокращение от response.\r\n      .then((res) => res.json())\r\n  );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteData);\r\n\n\n//# sourceURL=webpack://o-zone-js/../../%00#glo-academy/o-zone-js/src/modules/deleteData.js?");

/***/ }),

/***/ "../../\u0000#glo-academy/o-zone-js/src/modules/getData.js":
/*!************************************************************!*\
  !*** ../../ #glo-academy/o-zone-js/src/modules/getData.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n  // Метод fetch создан специально для работы с серверными запросами. Этот метод принимает 1 обязательный аргумент, это URL по которому находятся данные, которые нам необходимо получить. В ответ сервер формирует некий объект и пересылает его нам. Но происходит это не сразу, а время получения зависит от многих факторов: от скорости интернета, о объёма данных, о сложности обработки данных сервером.\r\n  // Метод fetch также является асинхронной операцией. Это значит, что её выполнение займёт какое-то время, которое мы точно не можем знать. Для этого есть спец. метод then, который отрабатывает сразу по получении данных с сервера.\r\n  return (\r\n    fetch(\r\n      'https://o-zone-js-66b71-default-rtdb.europe-west1.firebasedatabase.app/goods.json'\r\n    )\r\n      // И чтобы мы могли работать с инфой в тот момент, когда она точно нами получина, существует метод then. Данный метод получает аргументом callback, а этот callback имеет параметр response (т. е. ответ от сервера). Callback - функция, которую мы передаём как аргумент в другую функцию. В данном случае в метод then мы передаём callback. Когда метод then получит ответ от сервера, то он запустит функцию-callback и передаст её значение, т. е. ответ от сервера в аргумент response.\r\n      .then((response) => {\r\n        // Но изначально ответ получается не в том виде, что нужно и поэтому применеям к нему метод JSON и возращаем его уже переведённым в json-структуру.\r\n        return response.json();\r\n      })\r\n  );\r\n  // Таким образом мы написали функцию, которая может быть вызвана из любого модуля, например из second.js и вернёт определённый ответ сервера, расположенный по конкретному адресу.\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://o-zone-js/../../%00#glo-academy/o-zone-js/src/modules/getData.js?");

/***/ }),

/***/ "../../\u0000#glo-academy/o-zone-js/src/modules/second.js":
/*!***********************************************************!*\
  !*** ../../ #glo-academy/o-zone-js/src/modules/second.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"../../\\u0000#glo-academy/o-zone-js/src/modules/getData.js\");\n/* harmony import */ var _deleteData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteData */ \"../../\\u0000#glo-academy/o-zone-js/src/modules/deleteData.js\");\n\r\n\r\n// import postData from './postData';\r\n\r\nconst second = () => {\r\n  const cartBtn = document.getElementById('cart');\r\n\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    console.log(data);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\r\n\n\n//# sourceURL=webpack://o-zone-js/../../%00#glo-academy/o-zone-js/src/modules/second.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../../\u0000#glo-academy/o-zone-js/src/index.js");
/******/ 	
/******/ })()
;