"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/form/page",{

/***/ "(app-pages-browser)/./app/sections/tr.js":
/*!****************************!*\
  !*** ./app/sections/tr.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lol: function() { return /* binding */ lol; }\n/* harmony export */ });\nconst { ethers } = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/index.js\");\n// Replace with your contract's address\nconst contractAddress = \"0xe3C476D9dECf2F4bEc916E6E68390061f7F3BdB4\";\n// Full ABI based on the provided Solidity code\nconst contractABI = [\n    {\n        \"inputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"constructor\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"getContractBalance\",\n        \"outputs\": [\n            {\n                \"internalType\": \"uint256\",\n                \"name\": \"\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"address\",\n                \"name\": \"_walletAddress\",\n                \"type\": \"address\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_householdComposition\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_emergencyNeeds\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_grossIncome\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_primaryResidence\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_destroyed\",\n                \"type\": \"bool\"\n            }\n        ],\n        \"name\": \"createVictim\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"victims\",\n        \"outputs\": [\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"householdComposition\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"emergencyNeeds\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"grossIncome\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"primaryResidence\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"destroyed\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"uint256\",\n                \"name\": \"amountEligible\",\n                \"type\": \"uint256\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"hasReceivedFunds\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"address\",\n                \"name\": \"walletAddress\",\n                \"type\": \"address\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"stateMutability\": \"payable\",\n        \"type\": \"receive\"\n    }\n];\nasync function setup() {\n    // Connect to Ethereum provider and create signer (e.g., MetaMask, Infura)\n    const provider = new ethers.providers.JsonRpcProvider(\"https://sepolia.infura.io/v3/f90dfff9870543eabc3232e62b85469b\");\n    const wallet = new ethers.Wallet(\"d9f5c7c05a93908ee90c59fb55027ade4d6ebe8d6b816d6535e80d8e384d4218\", provider); // Be careful with private keys!\n    const contract = new ethers.Contract(contractAddress, contractABI, wallet);\n    return {\n        contract,\n        wallet,\n        provider\n    };\n}\n// Function to create a victim with specified boolean inputs\nasync function createVictim(walletAddress, householdComposition, emergencyNeeds, grossIncome, primaryResidence, destroyed) {\n    const { contract } = await setup();\n    // Call the createVictim function with specified inputs\n    const tx = await contract.createVictim(walletAddress, householdComposition, emergencyNeeds, grossIncome, primaryResidence, destroyed);\n    const receipt = await tx.wait(); // Wait for transaction to be mined\n    console.log(\"Transaction confirmed!\");\n    console.log(\"Transaction ID (Hash):\", receipt.transactionHash);\n}\n// Example usage\nasync function lol(p1, p2, p3, p4, p5, p6) {\n    try {\n        // Create a victim with example data\n        await createVictim(p1, p2, p3, true, false, false // destroyed\n        );\n    } catch (error) {\n        console.error(\"Error:\", error);\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zZWN0aW9ucy90ci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFDQSxNQUFNLEVBQUMsR0FBR0MsbUJBQU9BLENBQUMsMEVBQVE7QUFFakMsdUNBQXVDO0FBQ3ZDLE1BQU1DLGtCQUFrQjtBQUV4QiwrQ0FBK0M7QUFDL0MsTUFBTUMsY0FBYztJQUNoQjtRQUNJLFVBQVUsRUFBRTtRQUNaLG1CQUFtQjtRQUNuQixRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVUsRUFBRTtRQUNaLFFBQVE7UUFDUixXQUFXO1lBQ1A7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtTQUNIO1FBQ0QsbUJBQW1CO1FBQ25CLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtZQUNOO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7WUFDQTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtZQUNaO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7WUFDQTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtZQUNaO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtTQUNIO1FBQ0QsUUFBUTtRQUNSLFdBQVcsRUFBRTtRQUNiLG1CQUFtQjtRQUNuQixRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVUsRUFBRTtRQUNaLFFBQVE7UUFDUixXQUFXO1lBQ1A7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7WUFDQTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtZQUNaO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7WUFDQTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtZQUNaO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7U0FDSDtRQUNELG1CQUFtQjtRQUNuQixRQUFRO0lBQ1o7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixRQUFRO0lBQ1o7Q0FDSDtBQUVELGVBQWVDO0lBQ1gsMEVBQTBFO0lBQzFFLE1BQU1DLFdBQVcsSUFBSUwsT0FBT00sU0FBUyxDQUFDQyxlQUFlLENBQUM7SUFDdEQsTUFBTUMsU0FBUyxJQUFJUixPQUFPUyxNQUFNLENBQUMsb0VBQW9FSixXQUFXLGdDQUFnQztJQUNoSixNQUFNSyxXQUFXLElBQUlWLE9BQU9XLFFBQVEsQ0FBQ1QsaUJBQWlCQyxhQUFhSztJQUVuRSxPQUFPO1FBQUVFO1FBQVVGO1FBQVFIO0lBQVM7QUFDeEM7QUFFQSw0REFBNEQ7QUFDNUQsZUFBZU8sYUFBYUMsYUFBYSxFQUFFQyxvQkFBb0IsRUFBRUMsY0FBYyxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixFQUFFQyxTQUFTO0lBQ3JILE1BQU0sRUFBRVIsUUFBUSxFQUFFLEdBQUcsTUFBTU47SUFFM0IsdURBQXVEO0lBQ3ZELE1BQU1lLEtBQUssTUFBTVQsU0FBU0UsWUFBWSxDQUNsQ0MsZUFDQUMsc0JBQ0FDLGdCQUNBQyxhQUNBQyxrQkFDQUM7SUFFSixNQUFNRSxVQUFVLE1BQU1ELEdBQUdFLElBQUksSUFBSSxtQ0FBbUM7SUFDcEVDLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUMsMEJBQTBCSCxRQUFRSSxlQUFlO0FBQ2pFO0FBRUEsZ0JBQWdCO0FBQ1QsZUFBZUMsSUFBSUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUU7SUFDNUMsSUFBSTtRQUNBLG9DQUFvQztRQUNwQyxNQUFNbkIsYUFDRmMsSUFDQUMsSUFDQUMsSUFDQSxNQUNBLE9BQ0EsTUFBTyxZQUFZOztJQUUzQixFQUFFLE9BQU9JLE9BQU87UUFDWlYsUUFBUVUsS0FBSyxDQUFDLFVBQVVBO0lBQzVCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NlY3Rpb25zL3RyLmpzPzIxYzYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2V0aGVyc30gPSByZXF1aXJlKFwiZXRoZXJzXCIpO1xyXG5cclxuLy8gUmVwbGFjZSB3aXRoIHlvdXIgY29udHJhY3QncyBhZGRyZXNzXHJcbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhlM0M0NzZEOWRFQ2YyRjRiRWM5MTZFNkU2ODM5MDA2MWY3RjNCZEI0XCI7XHJcblxyXG4vLyBGdWxsIEFCSSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgU29saWRpdHkgY29kZVxyXG5jb25zdCBjb250cmFjdEFCSSA9IFtcclxuwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqBcImlucHV0c1wiOiBbXSxcclxuwqDCoMKgwqDCoMKgwqDCoFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiY29uc3RydWN0b3JcIlxyXG7CoMKgwqDCoH0sXHJcbsKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgXCJpbnB1dHNcIjogW10sXHJcbsKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJnZXRDb250cmFjdEJhbGFuY2VcIixcclxuwqDCoMKgwqDCoMKgwqDCoFwib3V0cHV0c1wiOiBbXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfVxyXG7CoMKgwqDCoMKgwqDCoMKgXSxcclxuwqDCoMKgwqDCoMKgwqDCoFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG7CoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG7CoMKgwqDCoH0sXHJcbsKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgXCJpbnB1dHNcIjogW1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiX3dhbGxldEFkZHJlc3NcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfSxcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIl9ob3VzZWhvbGRDb21wb3NpdGlvblwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImJvb2xcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiX2VtZXJnZW5jeU5lZWRzXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH0sXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcImludGVybmFsVHlwZVwiOiBcImJvb2xcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJfZ3Jvc3NJbmNvbWVcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJib29sXCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfSxcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIl9wcmltYXJ5UmVzaWRlbmNlXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH0sXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcImludGVybmFsVHlwZVwiOiBcImJvb2xcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJfZGVzdHJveWVkXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH1cclxuwqDCoMKgwqDCoMKgwqDCoF0sXHJcbsKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJjcmVhdGVWaWN0aW1cIixcclxuwqDCoMKgwqDCoMKgwqDCoFwib3V0cHV0c1wiOiBbXSxcclxuwqDCoMKgwqDCoMKgwqDCoFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG7CoMKgwqDCoH0sXHJcbsKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgXCJpbnB1dHNcIjogW10sXHJcbsKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJ2aWN0aW1zXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqBcIm91dHB1dHNcIjogW1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiaG91c2Vob2xkQ29tcG9zaXRpb25cIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJib29sXCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfSxcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcImVtZXJnZW5jeU5lZWRzXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH0sXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcImludGVybmFsVHlwZVwiOiBcImJvb2xcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJncm9zc0luY29tZVwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImJvb2xcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwicHJpbWFyeVJlc2lkZW5jZVwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImJvb2xcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiZGVzdHJveWVkXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH0sXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJhbW91bnRFbGlnaWJsZVwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiaGFzUmVjZWl2ZWRGdW5kc1wiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImJvb2xcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwid2FsbGV0QWRkcmVzc1wiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9XHJcbsKgwqDCoMKgwqDCoMKgwqBdLFxyXG7CoMKgwqDCoMKgwqDCoMKgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXHJcbsKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbsKgwqDCoMKgfSxcclxuwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInBheWFibGVcIixcclxuwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcInJlY2VpdmVcIlxyXG7CoMKgwqDCoH1cclxuXTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldHVwKCkge1xyXG7CoMKgwqDCoC8vIENvbm5lY3QgdG8gRXRoZXJldW0gcHJvdmlkZXIgYW5kIGNyZWF0ZSBzaWduZXIgKGUuZy4sIE1ldGFNYXNrLCBJbmZ1cmEpXHJcbsKgwqDCoMKgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoXCJodHRwczovL3NlcG9saWEuaW5mdXJhLmlvL3YzL2Y5MGRmZmY5ODcwNTQzZWFiYzMyMzJlNjJiODU0NjliXCIpO1xyXG7CoMKgwqDCoGNvbnN0IHdhbGxldCA9IG5ldyBldGhlcnMuV2FsbGV0KFwiZDlmNWM3YzA1YTkzOTA4ZWU5MGM1OWZiNTUwMjdhZGU0ZDZlYmU4ZDZiODE2ZDY1MzVlODBkOGUzODRkNDIxOFwiLCBwcm92aWRlcik7IC8vIEJlIGNhcmVmdWwgd2l0aCBwcml2YXRlIGtleXMhXHJcbsKgwqDCoMKgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgY29udHJhY3RBQkksIHdhbGxldCk7XHJcblxyXG7CoMKgwqDCoHJldHVybiB7IGNvbnRyYWN0LCB3YWxsZXQsIHByb3ZpZGVyIH07XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHZpY3RpbSB3aXRoIHNwZWNpZmllZCBib29sZWFuIGlucHV0c1xyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVWaWN0aW0od2FsbGV0QWRkcmVzcywgaG91c2Vob2xkQ29tcG9zaXRpb24sIGVtZXJnZW5jeU5lZWRzLCBncm9zc0luY29tZSwgcHJpbWFyeVJlc2lkZW5jZSwgZGVzdHJveWVkKSB7XHJcbsKgwqDCoMKgY29uc3QgeyBjb250cmFjdCB9ID0gYXdhaXQgc2V0dXAoKTtcclxuXHJcbsKgwqDCoMKgLy8gQ2FsbCB0aGUgY3JlYXRlVmljdGltIGZ1bmN0aW9uIHdpdGggc3BlY2lmaWVkIGlucHV0c1xyXG7CoMKgwqDCoGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlVmljdGltKFxyXG7CoMKgwqDCoMKgwqDCoMKgd2FsbGV0QWRkcmVzcyxcclxuwqDCoMKgwqDCoMKgwqDCoGhvdXNlaG9sZENvbXBvc2l0aW9uLFxyXG7CoMKgwqDCoMKgwqDCoMKgZW1lcmdlbmN5TmVlZHMsXHJcbsKgwqDCoMKgwqDCoMKgwqBncm9zc0luY29tZSxcclxuwqDCoMKgwqDCoMKgwqDCoHByaW1hcnlSZXNpZGVuY2UsXHJcbsKgwqDCoMKgwqDCoMKgwqBkZXN0cm95ZWRcclxuwqDCoMKgwqApO1xyXG7CoMKgwqDCoGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7IC8vIFdhaXQgZm9yIHRyYW5zYWN0aW9uIHRvIGJlIG1pbmVkXHJcbsKgwqDCoMKgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBjb25maXJtZWQhXCIpO1xyXG7CoMKgwqDCoGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gSUQgKEhhc2gpOlwiLCByZWNlaXB0LnRyYW5zYWN0aW9uSGFzaCk7XHJcbn1cclxuXHJcbi8vIEV4YW1wbGUgdXNhZ2VcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvbChwMSwgcDIsIHAzLCBwNCwgcDUsIHA2KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIHZpY3RpbSB3aXRoIGV4YW1wbGUgZGF0YVxyXG4gICAgICAgIGF3YWl0IGNyZWF0ZVZpY3RpbShcclxuICAgICAgICAgICAgcDEsIC8vIFJlcGxhY2Ugd2l0aCBhbiBhY3R1YWwgd2FsbGV0IGFkZHJlc3MgIFwiMHg5NDE2NzE0Y0I5OTBmMGYxQ0UzNzgzRDczNTUxRTUyOTNGQjkwNkRDXCJcclxuICAgICAgICAgICAgcDIsICAvLyBob3VzZWhvbGRDb21wb3NpdGlvblxyXG4gICAgICAgICAgICBwMywgLy8gZW1lcmdlbmN5TmVlZHNcclxuICAgICAgICAgICAgdHJ1ZSwgIC8vIGdyb3NzSW5jb21lXHJcbiAgICAgICAgICAgIGZhbHNlLCAvLyBwcmltYXJ5UmVzaWRlbmNlXHJcbiAgICAgICAgICAgIGZhbHNlICAvLyBkZXN0cm95ZWRcclxuICAgICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJldGhlcnMiLCJyZXF1aXJlIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJzZXR1cCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwid2FsbGV0IiwiV2FsbGV0IiwiY29udHJhY3QiLCJDb250cmFjdCIsImNyZWF0ZVZpY3RpbSIsIndhbGxldEFkZHJlc3MiLCJob3VzZWhvbGRDb21wb3NpdGlvbiIsImVtZXJnZW5jeU5lZWRzIiwiZ3Jvc3NJbmNvbWUiLCJwcmltYXJ5UmVzaWRlbmNlIiwiZGVzdHJveWVkIiwidHgiLCJyZWNlaXB0Iiwid2FpdCIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2FjdGlvbkhhc2giLCJsb2wiLCJwMSIsInAyIiwicDMiLCJwNCIsInA1IiwicDYiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/sections/tr.js\n"));

/***/ })

});