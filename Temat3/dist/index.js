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

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.Board = void 0;\r\nvar cell_1 = __webpack_require__(/*! ./cell */ \"./src/cell.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board(size, playerSymbol) {\r\n        var _this = this;\r\n        this.cells = new Array(size);\r\n        this.currentSymbol = playerSymbol;\r\n        this.winner = document.getElementById(\"winner\");\r\n        this.flag = false;\r\n        var table = document.getElementById(\"game\");\r\n        var i = 0;\r\n        for (var r = 0; r < size; r++) {\r\n            var row = table.insertRow(r);\r\n            var _loop_1 = function (c) {\r\n                var cell = row.insertCell(c);\r\n                cell.className = 'cell';\r\n                var newCell = new cell_1.Cell(cell);\r\n                this_1.cells[i] = newCell;\r\n                cell.addEventListener(\"click\", function () {\r\n                    return _this.makeMove(newCell);\r\n                }, false);\r\n                i++;\r\n            };\r\n            var this_1 = this;\r\n            for (var c = 0; c < size; c++) {\r\n                _loop_1(c);\r\n            }\r\n        }\r\n    }\r\n    Board.prototype.makeMove = function (cell) {\r\n        if (cell.setCellValue(this.currentSymbol) && this.flag == false) {\r\n            switch (this.currentSymbol) {\r\n                case -1:\r\n                    this.currentSymbol = 1;\r\n                    break;\r\n                case 1:\r\n                    this.currentSymbol = -1;\r\n                    break;\r\n                default:\r\n                    this.currentSymbol = 0;\r\n                    break;\r\n            }\r\n            this.checkForWin();\r\n        }\r\n    };\r\n    ;\r\n    Board.prototype.checkForWin = function () {\r\n        for (var i = 0; i <= this.cells.length; i++) {\r\n        }\r\n        if (this.cells[0].cellValue == this.cells[1].cellValue && this.cells[0].cellValue === this.cells[2].cellValue && this.cells[0].cellValue != 0) {\r\n            this.winner.textContent = \"Zwycięża: \" + this.cells[0].getCellSymbol();\r\n            this.flag = true;\r\n        }\r\n        if (this.cells[3].cellValue == this.cells[4].cellValue && this.cells[3].cellValue === this.cells[5].cellValue && this.cells[3].cellValue != 0) {\r\n            this.winner.textContent = \"Zwycięża: \" + this.cells[3].getCellSymbol();\r\n            this.flag = true;\r\n        }\r\n        if (this.cells[6].cellValue == this.cells[7].cellValue && this.cells[6].cellValue === this.cells[8].cellValue && this.cells[6].cellValue != 0) {\r\n            this.winner.textContent = \"Zwycięża: \" + this.cells[6].getCellSymbol();\r\n            this.flag = true;\r\n        }\r\n        if (this.cells[0].cellValue == this.cells[4].cellValue && this.cells[0].cellValue === this.cells[8].cellValue && this.cells[0].cellValue != 0) {\r\n            this.winner.textContent = \"Zwycięża: \" + this.cells[0].getCellSymbol();\r\n            this.flag = true;\r\n        }\r\n        if (this.cells[2].cellValue == this.cells[4].cellValue && this.cells[2].cellValue === this.cells[6].cellValue && this.cells[2].cellValue != 0) {\r\n            this.winner.textContent = \"Zwycięża: \" + this.cells[2].getCellSymbol();\r\n            this.flag = true;\r\n        }\r\n        if (this.cells[0].cellValue == this.cells[3].cellValue && this.cells[0].cellValue === this.cells[6].cellValue && this.cells[0].cellValue != 0) {\r\n            this.winner.textContent = \"Zwycięża: \" + this.cells[0].getCellSymbol();\r\n            this.flag = true;\r\n        }\r\n        if (this.cells[1].cellValue == this.cells[4].cellValue && this.cells[1].cellValue === this.cells[7].cellValue && this.cells[1].cellValue != 0) {\r\n            this.winner.textContent = \"Zwycięża: \" + this.cells[1].getCellSymbol();\r\n            this.flag = true;\r\n        }\r\n        if (this.cells[2].cellValue == this.cells[5].cellValue && this.cells[2].cellValue === this.cells[8].cellValue && this.cells[2].cellValue != 0) {\r\n            this.winner.textContent = \"Zwycięża: \" + this.cells[2].getCellSymbol();\r\n            this.flag = true;\r\n        }\r\n    };\r\n    return Board;\r\n}());\r\nexports.Board = Board;\r\n/*\r\n0,1,2\r\n3,4,5\r\n6,7,8\r\n0,4,8\r\n2,4,6\r\n0,3,6,\r\n1,4,7,\r\n2,5,8\r\n*/ \r\n\n\n//# sourceURL=webpack:///./src/board.ts?");

/***/ }),

/***/ "./src/cell.ts":
/*!*********************!*\
  !*** ./src/cell.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Cell = void 0;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(cell) {\r\n        this.htmlElement = cell;\r\n        this.cellValue = 0;\r\n    }\r\n    Cell.prototype.getCellSymbol = function () {\r\n        switch (this.cellValue) {\r\n            case -1: return \"O\";\r\n            case 1: return \"X\";\r\n        }\r\n    };\r\n    Cell.prototype.setCellValue = function (value) {\r\n        // TODO: napisz samemu metodę, która ustawia w\r\n        // tabeli kółko i krzyżyk. Możesz przyjąć, że kółko\r\n        // to wartość -1, krzyżyk to wartość 1, a 0 (zero)\r\n        // oznacza pole nieustawione.\r\n        if (this.cellValue == 0) {\r\n            this.cellValue = value;\r\n            switch (value) {\r\n                case 1:\r\n                    this.htmlElement.textContent = \"X\";\r\n                    break;\r\n                case -1:\r\n                    this.htmlElement.textContent = \"O\";\r\n                    break;\r\n                default:\r\n                    this.htmlElement.textContent = \"ERR\";\r\n                    break;\r\n            }\r\n            return true;\r\n        }\r\n        return false;\r\n    };\r\n    ;\r\n    return Cell;\r\n}());\r\nexports.Cell = Cell;\r\n\n\n//# sourceURL=webpack:///./src/cell.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar board_1 = __webpack_require__(/*! ./board */ \"./src/board.ts\");\r\nvar Game = new board_1.Board(5, -1);\r\nconsole.log(Game);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;