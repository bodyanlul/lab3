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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (() => {

eval("async function getVac() {\r\n    let job = document.getElementById(\"in\").value;\r\n    console.log(job);\r\n    let url = `https://api.hh.ru/vacancies?currency=RUR&only_with_salary=true&text=${job}`;\r\n    let response = await fetch(url).then(res => res.json()).then(ans => {\r\n        console.log(ans);\r\n        let vac =\"\";\r\n        for(let i = 0; i<ans.items.length;i++)\r\n        {\r\n        let salary = \"\"\r\n        if(ans.items[i].salary.from!=null && ans.items[i].salary.to!=null)\r\n        {\r\n            salary = \"\"+ans.items[i].salary.from+\"-\"+ans.items[i].salary.to+\" \"+ans.items[i].salary.currency;\r\n        }\r\n        else if (ans.items[i].salary.from ==null)\r\n        {\r\n            salary = \"Не указана\";\r\n        }\r\n        else if(ans.items[i].salary.to==null)\r\n        {\r\n            salary = \"\"+ans.items[i].salary.from+\" \"+ans.items[i].salary.currency;\r\n        }\r\n        vac += \"Название: \"+ans.items[i].name +'\\n'+\"Город: \"+ans.items[i].area.name+'\\n'+\"Зарплата: \"+salary+'\\n'+\"Ссылка: \"+ans.items[i].alternate_url+'\\n'+\"__________________________________\"+'\\n';\r\n        }\r\n        console.log(vac);\r\n        document.getElementById(\"task\").innerText=vac;\r\n    })\r\n    \r\n}\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/index.js"]();
/******/ 	
/******/ })()
;