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

/***/ "./js/calc.js":
/*!********************!*\
  !*** ./js/calc.js ***!
  \********************/
/***/ (() => {

eval("function calculate()\r\n{\r\n    var array = (document.getElementById(\"time\").value).split(';');\r\n    const time = array[0];\r\n    const sum = parseInt(document.getElementById(\"sum\").value);\r\n    const percent = array[1];\r\n    var sumpercent = Math.round(sum+(sum*percent*time*30.417/365)/100);\r\n    var total = \"Вклад\"+\" на срок \"+time+\" месяцев на сумму \"+sum+\" руб.\\n\"+\"В конце срока вы получите \"+sumpercent+\" руб.\";\r\n    document.getElementById(\"result\").value=total\r\n}\r\n\r\nfunction switch_type()\r\n{\r\n    var selecters = document.querySelectorAll(\"#time\")[0].children;\r\n    var type = document.getElementById(\"type\").value;\r\n    var time =document.getElementById(\"time\");\r\n    time.disabled=false;\r\n    if(type == 'long')\r\n    {\r\n        selecters[1].style.display='none';\r\n        selecters[2].value=\"6;20\";\r\n        selecters[3].style.display='none';\r\n        selecters[4].value=\"12;22\";\r\n        selecters[5].value=\"18;15\";\r\n        selecters[6].value=\"24;10\";\r\n    }\r\n    else if (type == 'fast')\r\n    {\r\n        selecters[1].style.display='initial';\r\n        selecters[2].value=\"6;22\";\r\n        selecters[3].style.display='initial';\r\n        selecters[4].value=\"12;24\";\r\n        selecters[5].value=\"18;18\";\r\n        selecters[6].value=\"24;15\";\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/calc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/calc.js"]();
/******/ 	
/******/ })()
;