/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Retrieve the necessary elements from the DOM\nvar editor = document.getElementById('editor');\nvar saveBtn = document.getElementById('saveBtn');\nvar loadBtn = document.getElementById('loadBtn');\n\n// Event listener for the save button\nsaveBtn.addEventListener('click', function () {\n  var content = editor.value;\n  saveContent(content);\n});\n\n// Event listener for the load button\nloadBtn.addEventListener('click', function () {\n  loadContent();\n});\n\n// Save content to localStorage\nvar saveContent = function saveContent(content) {\n  localStorage.setItem('textEditorContent', content);\n  alert('Content saved successfully!');\n};\n\n// Load content from localStorage\nvar loadContent = function loadContent() {\n  var content = localStorage.getItem('textEditorContent');\n  if (content) {\n    editor.value = content;\n    alert('Content loaded successfully!');\n  } else {\n    alert('No saved content found.');\n  }\n};\n\n//# sourceURL=webpack://module-19/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;