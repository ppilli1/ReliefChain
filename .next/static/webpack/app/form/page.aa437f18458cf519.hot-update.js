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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lol: function() { return /* binding */ lol; }\n/* harmony export */ });\nconst { ethers } = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/index.js\");\n// Replace with your contract's address\nconst contractAddress = \"0xe3C476D9dECf2F4bEc916E6E68390061f7F3BdB4\";\n// Full ABI based on the provided Solidity code\nconst contractABI = [\n    {\n        \"inputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"constructor\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"getContractBalance\",\n        \"outputs\": [\n            {\n                \"internalType\": \"uint256\",\n                \"name\": \"\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"address\",\n                \"name\": \"_walletAddress\",\n                \"type\": \"address\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_householdComposition\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_emergencyNeeds\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_grossIncome\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_primaryResidence\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"_destroyed\",\n                \"type\": \"bool\"\n            }\n        ],\n        \"name\": \"createVictim\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"victims\",\n        \"outputs\": [\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"householdComposition\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"emergencyNeeds\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"grossIncome\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"primaryResidence\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"destroyed\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"uint256\",\n                \"name\": \"amountEligible\",\n                \"type\": \"uint256\"\n            },\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"hasReceivedFunds\",\n                \"type\": \"bool\"\n            },\n            {\n                \"internalType\": \"address\",\n                \"name\": \"walletAddress\",\n                \"type\": \"address\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"stateMutability\": \"payable\",\n        \"type\": \"receive\"\n    }\n];\nasync function setup() {\n    // Connect to Ethereum provider and create signer (e.g., MetaMask, Infura)\n    const provider = new ethers.providers.JsonRpcProvider(\"https://sepolia.infura.io/v3/f90dfff9870543eabc3232e62b85469b\");\n    const wallet = new ethers.Wallet(\"d9f5c7c05a93908ee90c59fb55027ade4d6ebe8d6b816d6535e80d8e384d4218\", provider); // Be careful with private keys!\n    const contract = new ethers.Contract(contractAddress, contractABI, wallet);\n    return {\n        contract,\n        wallet,\n        provider\n    };\n}\n// Function to create a victim with specified boolean inputs\nasync function createVictim(walletAddress, householdComposition, emergencyNeeds, grossIncome, primaryResidence, destroyed) {\n    const { contract } = await setup();\n    // Call the createVictim function with specified inputs\n    const tx = await contract.createVictim(walletAddress, householdComposition, emergencyNeeds, grossIncome, primaryResidence, destroyed);\n    const receipt = await tx.wait(); // Wait for transaction to be mined\n    console.log(\"Transaction confirmed!\");\n    console.log(\"Transaction ID (Hash):\", receipt.transactionHash);\n}\n// Example usage\nasync function lol(p1, p2, p3, p4, p5, p6) {\n    try {\n        // Create a victim with example data\n        await createVictim(p1, p2, p3, p4, false, false // destroyed\n        );\n    } catch (error) {\n        console.error(\"Error:\", error);\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zZWN0aW9ucy90ci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFDQSxNQUFNLEVBQUMsR0FBR0MsbUJBQU9BLENBQUMsMEVBQVE7QUFFakMsdUNBQXVDO0FBQ3ZDLE1BQU1DLGtCQUFrQjtBQUV4QiwrQ0FBK0M7QUFDL0MsTUFBTUMsY0FBYztJQUNoQjtRQUNJLFVBQVUsRUFBRTtRQUNaLG1CQUFtQjtRQUNuQixRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVUsRUFBRTtRQUNaLFFBQVE7UUFDUixXQUFXO1lBQ1A7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtTQUNIO1FBQ0QsbUJBQW1CO1FBQ25CLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtZQUNOO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7WUFDQTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtZQUNaO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7WUFDQTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtZQUNaO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtTQUNIO1FBQ0QsUUFBUTtRQUNSLFdBQVcsRUFBRTtRQUNiLG1CQUFtQjtRQUNuQixRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVUsRUFBRTtRQUNaLFFBQVE7UUFDUixXQUFXO1lBQ1A7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7WUFDQTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtZQUNaO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7WUFDQTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtZQUNaO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7U0FDSDtRQUNELG1CQUFtQjtRQUNuQixRQUFRO0lBQ1o7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixRQUFRO0lBQ1o7Q0FDSDtBQUVELGVBQWVDO0lBQ1gsMEVBQTBFO0lBQzFFLE1BQU1DLFdBQVcsSUFBSUwsT0FBT00sU0FBUyxDQUFDQyxlQUFlLENBQUM7SUFDdEQsTUFBTUMsU0FBUyxJQUFJUixPQUFPUyxNQUFNLENBQUMsb0VBQW9FSixXQUFXLGdDQUFnQztJQUNoSixNQUFNSyxXQUFXLElBQUlWLE9BQU9XLFFBQVEsQ0FBQ1QsaUJBQWlCQyxhQUFhSztJQUVuRSxPQUFPO1FBQUVFO1FBQVVGO1FBQVFIO0lBQVM7QUFDeEM7QUFFQSw0REFBNEQ7QUFDNUQsZUFBZU8sYUFBYUMsYUFBYSxFQUFFQyxvQkFBb0IsRUFBRUMsY0FBYyxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixFQUFFQyxTQUFTO0lBQ3JILE1BQU0sRUFBRVIsUUFBUSxFQUFFLEdBQUcsTUFBTU47SUFFM0IsdURBQXVEO0lBQ3ZELE1BQU1lLEtBQUssTUFBTVQsU0FBU0UsWUFBWSxDQUNsQ0MsZUFDQUMsc0JBQ0FDLGdCQUNBQyxhQUNBQyxrQkFDQUM7SUFFSixNQUFNRSxVQUFVLE1BQU1ELEdBQUdFLElBQUksSUFBSSxtQ0FBbUM7SUFDcEVDLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUMsMEJBQTBCSCxRQUFRSSxlQUFlO0FBQ2pFO0FBRUEsZ0JBQWdCO0FBQ1QsZUFBZUMsSUFBSUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUU7SUFDNUMsSUFBSTtRQUNBLG9DQUFvQztRQUNwQyxNQUFNbkIsYUFDRmMsSUFDQUMsSUFDQUMsSUFDQUMsSUFDQSxPQUNBLE1BQU8sWUFBWTs7SUFFM0IsRUFBRSxPQUFPRyxPQUFPO1FBQ1pWLFFBQVFVLEtBQUssQ0FBQyxVQUFVQTtJQUM1QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zZWN0aW9ucy90ci5qcz8yMWM2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtldGhlcnN9ID0gcmVxdWlyZShcImV0aGVyc1wiKTtcclxuXHJcbi8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvbnRyYWN0J3MgYWRkcmVzc1xyXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4ZTNDNDc2RDlkRUNmMkY0YkVjOTE2RTZFNjgzOTAwNjFmN0YzQmRCNFwiO1xyXG5cclxuLy8gRnVsbCBBQkkgYmFzZWQgb24gdGhlIHByb3ZpZGVkIFNvbGlkaXR5IGNvZGVcclxuY29uc3QgY29udHJhY3RBQkkgPSBbXHJcbsKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgXCJpbnB1dHNcIjogW10sXHJcbsKgwqDCoMKgwqDCoMKgwqBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImNvbnN0cnVjdG9yXCJcclxuwqDCoMKgwqB9LFxyXG7CoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoFwiaW5wdXRzXCI6IFtdLFxyXG7CoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiZ2V0Q29udHJhY3RCYWxhbmNlXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqBcIm91dHB1dHNcIjogW1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwidWludDI1NlwiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH1cclxuwqDCoMKgwqDCoMKgwqDCoF0sXHJcbsKgwqDCoMKgwqDCoMKgwqBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuwqDCoMKgwqB9LFxyXG7CoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoFwiaW5wdXRzXCI6IFtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIl93YWxsZXRBZGRyZXNzXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH0sXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcImludGVybmFsVHlwZVwiOiBcImJvb2xcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJfaG91c2Vob2xkQ29tcG9zaXRpb25cIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJib29sXCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfSxcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIl9lbWVyZ2VuY3lOZWVkc1wiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImJvb2xcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiX2dyb3NzSW5jb21lXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH0sXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcImludGVybmFsVHlwZVwiOiBcImJvb2xcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJfcHJpbWFyeVJlc2lkZW5jZVwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImJvb2xcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiX2Rlc3Ryb3llZFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImJvb2xcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9XHJcbsKgwqDCoMKgwqDCoMKgwqBdLFxyXG7CoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiY3JlYXRlVmljdGltXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqBcIm91dHB1dHNcIjogW10sXHJcbsKgwqDCoMKgwqDCoMKgwqBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuwqDCoMKgwqB9LFxyXG7CoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoFwiaW5wdXRzXCI6IFtdLFxyXG7CoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwidmljdGltc1wiLFxyXG7CoMKgwqDCoMKgwqDCoMKgXCJvdXRwdXRzXCI6IFtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcImhvdXNlaG9sZENvbXBvc2l0aW9uXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH0sXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcImludGVybmFsVHlwZVwiOiBcImJvb2xcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcIm5hbWVcIjogXCJlbWVyZ2VuY3lOZWVkc1wiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImJvb2xcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJib29sXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiZ3Jvc3NJbmNvbWVcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJib29sXCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfSxcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcInByaW1hcnlSZXNpZGVuY2VcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJib29sXCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfSxcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcImRlc3Ryb3llZFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwidHlwZVwiOiBcImJvb2xcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IFwiYW1vdW50RWxpZ2libGVcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfSxcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYm9vbFwiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcImhhc1JlY2VpdmVkRnVuZHNcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJib29sXCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfSxcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIndhbGxldEFkZHJlc3NcIixcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfVxyXG7CoMKgwqDCoMKgwqDCoMKgXSxcclxuwqDCoMKgwqDCoMKgwqDCoFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG7CoMKgwqDCoMKgwqDCoMKgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG7CoMKgwqDCoH0sXHJcbsKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJwYXlhYmxlXCIsXHJcbsKgwqDCoMKgwqDCoMKgwqBcInR5cGVcIjogXCJyZWNlaXZlXCJcclxuwqDCoMKgwqB9XHJcbl07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcclxuwqDCoMKgwqAvLyBDb25uZWN0IHRvIEV0aGVyZXVtIHByb3ZpZGVyIGFuZCBjcmVhdGUgc2lnbmVyIChlLmcuLCBNZXRhTWFzaywgSW5mdXJhKVxyXG7CoMKgwqDCoGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKFwiaHR0cHM6Ly9zZXBvbGlhLmluZnVyYS5pby92My9mOTBkZmZmOTg3MDU0M2VhYmMzMjMyZTYyYjg1NDY5YlwiKTtcclxuwqDCoMKgwqBjb25zdCB3YWxsZXQgPSBuZXcgZXRoZXJzLldhbGxldChcImQ5ZjVjN2MwNWE5MzkwOGVlOTBjNTlmYjU1MDI3YWRlNGQ2ZWJlOGQ2YjgxNmQ2NTM1ZTgwZDhlMzg0ZDQyMThcIiwgcHJvdmlkZXIpOyAvLyBCZSBjYXJlZnVsIHdpdGggcHJpdmF0ZSBrZXlzIVxyXG7CoMKgwqDCoGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCB3YWxsZXQpO1xyXG5cclxuwqDCoMKgwqByZXR1cm4geyBjb250cmFjdCwgd2FsbGV0LCBwcm92aWRlciB9O1xyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYSB2aWN0aW0gd2l0aCBzcGVjaWZpZWQgYm9vbGVhbiBpbnB1dHNcclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVmljdGltKHdhbGxldEFkZHJlc3MsIGhvdXNlaG9sZENvbXBvc2l0aW9uLCBlbWVyZ2VuY3lOZWVkcywgZ3Jvc3NJbmNvbWUsIHByaW1hcnlSZXNpZGVuY2UsIGRlc3Ryb3llZCkge1xyXG7CoMKgwqDCoGNvbnN0IHsgY29udHJhY3QgfSA9IGF3YWl0IHNldHVwKCk7XHJcblxyXG7CoMKgwqDCoC8vIENhbGwgdGhlIGNyZWF0ZVZpY3RpbSBmdW5jdGlvbiB3aXRoIHNwZWNpZmllZCBpbnB1dHNcclxuwqDCoMKgwqBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZVZpY3RpbShcclxuwqDCoMKgwqDCoMKgwqDCoHdhbGxldEFkZHJlc3MsXHJcbsKgwqDCoMKgwqDCoMKgwqBob3VzZWhvbGRDb21wb3NpdGlvbixcclxuwqDCoMKgwqDCoMKgwqDCoGVtZXJnZW5jeU5lZWRzLFxyXG7CoMKgwqDCoMKgwqDCoMKgZ3Jvc3NJbmNvbWUsXHJcbsKgwqDCoMKgwqDCoMKgwqBwcmltYXJ5UmVzaWRlbmNlLFxyXG7CoMKgwqDCoMKgwqDCoMKgZGVzdHJveWVkXHJcbsKgwqDCoMKgKTtcclxuwqDCoMKgwqBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpOyAvLyBXYWl0IGZvciB0cmFuc2FjdGlvbiB0byBiZSBtaW5lZFxyXG7CoMKgwqDCoGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gY29uZmlybWVkIVwiKTtcclxuwqDCoMKgwqBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIElEIChIYXNoKTpcIiwgcmVjZWlwdC50cmFuc2FjdGlvbkhhc2gpO1xyXG59XHJcblxyXG4vLyBFeGFtcGxlIHVzYWdlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2wocDEsIHAyLCBwMywgcDQsIHA1LCBwNikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDcmVhdGUgYSB2aWN0aW0gd2l0aCBleGFtcGxlIGRhdGFcclxuICAgICAgICBhd2FpdCBjcmVhdGVWaWN0aW0oXHJcbiAgICAgICAgICAgIHAxLCAvLyBSZXBsYWNlIHdpdGggYW4gYWN0dWFsIHdhbGxldCBhZGRyZXNzICBcIjB4OTQxNjcxNGNCOTkwZjBmMUNFMzc4M0Q3MzU1MUU1MjkzRkI5MDZEQ1wiXHJcbiAgICAgICAgICAgIHAyLCAgLy8gaG91c2Vob2xkQ29tcG9zaXRpb25cclxuICAgICAgICAgICAgcDMsIC8vIGVtZXJnZW5jeU5lZWRzXHJcbiAgICAgICAgICAgIHA0LCAgLy8gZ3Jvc3NJbmNvbWVcclxuICAgICAgICAgICAgZmFsc2UsIC8vIHByaW1hcnlSZXNpZGVuY2VcclxuICAgICAgICAgICAgZmFsc2UgIC8vIGRlc3Ryb3llZFxyXG4gICAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImV0aGVycyIsInJlcXVpcmUiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFCSSIsInNldHVwIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJKc29uUnBjUHJvdmlkZXIiLCJ3YWxsZXQiLCJXYWxsZXQiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiY3JlYXRlVmljdGltIiwid2FsbGV0QWRkcmVzcyIsImhvdXNlaG9sZENvbXBvc2l0aW9uIiwiZW1lcmdlbmN5TmVlZHMiLCJncm9zc0luY29tZSIsInByaW1hcnlSZXNpZGVuY2UiLCJkZXN0cm95ZWQiLCJ0eCIsInJlY2VpcHQiLCJ3YWl0IiwiY29uc29sZSIsImxvZyIsInRyYW5zYWN0aW9uSGFzaCIsImxvbCIsInAxIiwicDIiLCJwMyIsInA0IiwicDUiLCJwNiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/sections/tr.js\n"));

/***/ })

});