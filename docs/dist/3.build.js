webpackJsonp([3],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

eval("var disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(260)\n}\nvar Component = __webpack_require__(8)(\n  /* script */\n  __webpack_require__(214),\n  /* template */\n  __webpack_require__(249),\n  /* styles */\n  injectStyle,\n  /* scopeId */\n  null,\n  /* moduleIdentifier (server only) */\n  null\n)\nComponent.options.__file = \"F:\\\\projects\\\\vue-croppa\\\\docs\\\\src\\\\pages\\\\quick-start.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] quick-start.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-64ead2f4\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-64ead2f4\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\nmodule.exports = Component.exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXVpY2stc3RhcnQudnVlP2I1ZDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQThMO0FBQzlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiMjA3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NGVhZDJmNFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXN0eWx1cy1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9xdWljay1zdGFydC52dWVcIilcbn1cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3F1aWNrLXN0YXJ0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjRlYWQyZjRcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcXVpY2stc3RhcnQudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgaW5qZWN0U3R5bGUsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRjpcXFxccHJvamVjdHNcXFxcdnVlLWNyb3BwYVxcXFxkb2NzXFxcXHNyY1xcXFxwYWdlc1xcXFxxdWljay1zdGFydC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHF1aWNrLXN0YXJ0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NGVhZDJmNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY0ZWFkMmY0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGFnZXMvcXVpY2stc3RhcnQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      myCroppa: {}\n    };\n  },\n\n\n  computed: {\n    installStyle: function installStyle() {\n      return '<link href=\"https://unpkg.com/vue-croppa/dist/vue-croppa.min.css\" rel=\"stylesheet\" type=\"text/css\">';\n    },\n    installTags: function installTags() {\n      return '<script src=\"https://unpkg.com/vue-croppa/dist/vue-croppa.min.js\"></script>       ';\n    },\n    vueRegistryBuild: function vueRegistryBuild() {\n      return 'import Vue from \\'vue\\'\\n import Croppa from \\'vue-croppa\\'\\n\\n Vue.use(Croppa)       ';\n    },\n    vueRegistryTag: function vueRegistryTag() {\n      return '<script>\\n   Vue.use(Croppa)\\n </script>       ';\n    },\n    simplestUsageTemplate: function simplestUsageTemplate() {\n      return '<croppa v-model=\"myCroppa\"></croppa>';\n    },\n    simplestUsageScript: function simplestUsageScript() {\n      return 'new Vue({\\n   // ... other vm options omitted\\n   data: {\\n     myCroppa: {}\\n   },\\n\\n   methods: {\\n     uploadCroppedImage() {\\n       this.myCroppa.generateBlob((blob) => {\\n         // write code to upload the cropped image file (a file is a blob)\\n       }, \\'image/jpeg\\', 0.8) // 80% compressed jpeg file\\n     }\\n   }\\n })       ';\n    }\n  }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcXVpY2stc3RhcnQudnVlPzEwNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEVBOzs7d0JBRUE7O2dCQUdBO0FBRkE7QUFJQTs7OzswQ0FFQTthQUNBO0FBRUE7d0NBQ0E7QUFHQTtBQUVBO2tEQUNBO0FBS0E7QUFFQTs4Q0FDQTtBQUtBO0FBRUE7NERBQ0E7QUFFQTtBQUVBO3dEQUNBO0FBZ0JBO0FBR0E7QUFuREE7O0FBUEEiLCJmaWxlIjoiMjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgaWQ9XCJxdWljay1zdGFydFwiPlxyXG4gICAgPHYtbGF5b3V0IHJvd1xyXG4gICAgICAgICAgICAgIHdyYXA+XHJcbiAgICAgIDx2LWZsZXg+XHJcbiAgICAgICAgPHA+MS4gSW5zdGFsbCB3aXRoIG5wbSBvciBpbmNsdWRlIGl0IGRpcmVjdGx5LjwvcD5cclxuICAgICAgICA8di1sYXlvdXQgcm93XHJcbiAgICAgICAgICAgICAgICAgIHdyYXA+XHJcbiAgICAgICAgICA8di1mbGV4IG1kNT5cclxuICAgICAgICAgICAgPHByZSB2LWhpZ2hsaWdodGpzPVwiJ25wbSBpbnN0YWxsIC0tc2F2ZSB2dWUtY3JvcHBhJ1wiPjxjb2RlIGNsYXNzPVwiYmFzaFwiPjwvY29kZT48L3ByZT5cclxuICAgICAgICAgIDwvdi1mbGV4PlxyXG4gICAgICAgICAgPHYtZmxleCBtZDFcclxuICAgICAgICAgICAgICAgICAgeHMxMlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoNT5vcjwvaDU+XHJcbiAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICAgIDx2LWZsZXggbWQ2XHJcbiAgICAgICAgICAgICAgICAgIHhzMTI+XHJcbiAgICAgICAgICAgIDxwcmUgdi1oaWdobGlnaHRqcz1cImluc3RhbGxUYWdzXCI+PGNvZGUgY2xhc3M9XCJodG1sXCI+PC9jb2RlPjwvcHJlPlxyXG4gICAgICAgICAgPC92LWZsZXg+XHJcbiAgICAgICAgPC92LWxheW91dD5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPHA+Mi4gSWYgeW91ciBidWlsZCB0b29sIHN1cHBvcnRzIGNzcyBtb2R1bGUsIGltcG9ydCBpdCBhcyBsZWZ0IGJlbG93LiBPciBzaW1wbHkgaW5jbHVkZSB0aGUgZmlsZSBpbiB5b3VyIEhUTUwuPC9wPlxyXG4gICAgICAgIDx2LWxheW91dCByb3dcclxuICAgICAgICAgICAgICAgICAgd3JhcD5cclxuICAgICAgICAgIDx2LWZsZXggbWQ1PlxyXG4gICAgICAgICAgICA8cHJlIHYtaGlnaGxpZ2h0anM9XCInaW1wb3J0IFxcJ3Z1ZS1jcm9wcGEvZGlzdC92dWUtY3JvcHBhLmNzc1xcJydcIj48Y29kZSBjbGFzcz1cImphdmFzY3JpcHRcIj48L2NvZGU+PC9wcmU+XHJcbiAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICAgIDx2LWZsZXggbWQxXHJcbiAgICAgICAgICAgICAgICAgIHhzMTJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDU+b3I8L2g1PlxyXG4gICAgICAgICAgPC92LWZsZXg+XHJcbiAgICAgICAgICA8di1mbGV4IG1kNlxyXG4gICAgICAgICAgICAgICAgICB4czEyPlxyXG4gICAgICAgICAgICA8cHJlIHYtaGlnaGxpZ2h0anM9XCJpbnN0YWxsU3R5bGVcIj48Y29kZSBjbGFzcz1cImh0bWxcIj48L2NvZGU+PC9wcmU+XHJcbiAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICA8L3YtbGF5b3V0PlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICA8cD4zLiBSZWdpc3RlciBpdCBhcyBhIHZ1ZSBwbHVnaW4uXHJcbiAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvcmVnaXN0cmF0aW9uXCI+TW9yZSB3YXlzIHRvIHJlZ2lzdGVyIGl0Ljwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDx2LWxheW91dCByb3dcclxuICAgICAgICAgICAgICAgICAgd3JhcD5cclxuICAgICAgICAgIDx2LWZsZXggbWQ1PlxyXG4gICAgICAgICAgICA8cHJlIHYtaGlnaGxpZ2h0anM9XCJ2dWVSZWdpc3RyeUJ1aWxkXCI+PGNvZGUgY2xhc3M9XCJqYXZhc2NyaXB0XCI+PC9jb2RlPjwvcHJlPlxyXG4gICAgICAgICAgPC92LWZsZXg+XHJcbiAgICAgICAgICA8di1mbGV4IG1kMVxyXG4gICAgICAgICAgICAgICAgICB4czEyXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGg1Pm9yPC9oNT5cclxuICAgICAgICAgIDwvdi1mbGV4PlxyXG4gICAgICAgICAgPHYtZmxleCBtZDZcclxuICAgICAgICAgICAgICAgICAgeHMxMj5cclxuICAgICAgICAgICAgPHByZSB2LWhpZ2hsaWdodGpzPVwidnVlUmVnaXN0cnlUYWdcIj48Y29kZSBjbGFzcz1cImh0bWxcIj48L2NvZGU+PC9wcmU+XHJcbiAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICA8L3YtbGF5b3V0PlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICA8cD40LiBOb3cgeW91IGhhdmUgaXQuIFRoZSBzaW1wbGVzdCB1c2FnZTogPC9wPlxyXG4gICAgICAgIDx2LWxheW91dCByb3dcclxuICAgICAgICAgICAgICAgICAgd3JhcD5cclxuICAgICAgICAgIDx2LWZsZXggbWQxMj5cclxuICAgICAgICAgICAgPHByZSB2LWhpZ2hsaWdodGpzPVwic2ltcGxlc3RVc2FnZVRlbXBsYXRlXCI+PGNvZGUgY2xhc3M9XCJodG1sXCI+PC9jb2RlPjwvcHJlPlxyXG4gICAgICAgICAgPC92LWZsZXg+XHJcbiAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICA8di1mbGV4IG1kMTI+XHJcbiAgICAgICAgICAgIDxwcmUgdi1oaWdobGlnaHRqcz1cInNpbXBsZXN0VXNhZ2VTY3JpcHRcIj48Y29kZSBjbGFzcz1cImphdmFzY3JpcHRcIj48L2NvZGU+PC9wcmU+XHJcbiAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICA8L3YtbGF5b3V0PlxyXG4gICAgICA8L3YtZmxleD5cclxuICAgIDwvdi1sYXlvdXQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG15Q3JvcHBhOiB7fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIGluc3RhbGxTdHlsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuICc8bGluayBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdnVlLWNyb3BwYS9kaXN0L3Z1ZS1jcm9wcGEubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIj4nXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBpbnN0YWxsVGFncyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcXFxyXG4gPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS92dWUtY3JvcHBhL2Rpc3QvdnVlLWNyb3BwYS5taW4uanNcIj48XFwvc2NyaXB0PlxcXHJcbiAgICAgICAgYFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgdnVlUmVnaXN0cnlCdWlsZCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuICBpbXBvcnQgQ3JvcHBhIGZyb20gJ3Z1ZS1jcm9wcGEnXHJcblxyXG4gIFZ1ZS51c2UoQ3JvcHBhKVxcXHJcbiAgICAgICAgYFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgdnVlUmVnaXN0cnlUYWcgKCkge1xyXG4gICAgICAgIHJldHVybiBgXFxcclxuIDxzY3JpcHQ+XHJcbiAgICBWdWUudXNlKENyb3BwYSlcclxuICA8XFwvc2NyaXB0PlxcXHJcbiAgICAgICAgYFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2ltcGxlc3RVc2FnZVRlbXBsYXRlICgpIHtcclxuICAgICAgICByZXR1cm4gYFxcXHJcbiA8Y3JvcHBhIHYtbW9kZWw9XCJteUNyb3BwYVwiPjwvY3JvcHBhPmBcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNpbXBsZXN0VXNhZ2VTY3JpcHQgKCkge1xyXG4gICAgICAgIHJldHVybiBgXFxcclxuIG5ldyBWdWUoe1xyXG4gICAgLy8gLi4uIG90aGVyIHZtIG9wdGlvbnMgb21pdHRlZFxyXG4gICAgZGF0YToge1xyXG4gICAgICBteUNyb3BwYToge31cclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB1cGxvYWRDcm9wcGVkSW1hZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5teUNyb3BwYS5nZW5lcmF0ZUJsb2IoKGJsb2IpID0+IHtcclxuICAgICAgICAgIC8vIHdyaXRlIGNvZGUgdG8gdXBsb2FkIHRoZSBjcm9wcGVkIGltYWdlIGZpbGUgKGEgZmlsZSBpcyBhIGJsb2IpXHJcbiAgICAgICAgfSwgJ2ltYWdlL2pwZWcnLCAwLjgpIC8vIDgwJSBjb21wcmVzc2VkIGpwZWcgZmlsZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcXFxyXG4gICAgICAgIGBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZSBsYW5nPVwic3R5bHVzXCI+XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBxdWljay1zdGFydC52dWU/MGVjYTFhNmMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(1)();\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\", {\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\",\"file\":\"quick-start.vue\",\"sourceRoot\":\"webpack://\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXVpY2stc3RhcnQudnVlPzBmN2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBa0MscUdBQXFHOztBQUV2SSIsImZpbGUiOiIyMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwicXVpY2stc3RhcnQudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjRlYWQyZjRcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi9zdHlsdXMtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3BhZ2VzL3F1aWNrLXN0YXJ0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    attrs: {\n      \"id\": \"quick-start\"\n    }\n  }, [_c('v-layout', {\n    attrs: {\n      \"row\": \"\",\n      \"wrap\": \"\"\n    }\n  }, [_c('v-flex', [_c('p', [_vm._v(\"1. Install with npm or include it directly.\")]), _vm._v(\" \"), _c('v-layout', {\n    attrs: {\n      \"row\": \"\",\n      \"wrap\": \"\"\n    }\n  }, [_c('v-flex', {\n    attrs: {\n      \"md5\": \"\"\n    }\n  }, [_c('pre', {\n    directives: [{\n      name: \"highlightjs\",\n      rawName: \"v-highlightjs\",\n      value: ('npm install --save vue-croppa'),\n      expression: \"'npm install --save vue-croppa'\"\n    }]\n  }, [_c('code', {\n    staticClass: \"bash\"\n  })])]), _vm._v(\" \"), _c('v-flex', {\n    staticClass: \"text-md-center\",\n    attrs: {\n      \"md1\": \"\",\n      \"xs12\": \"\"\n    }\n  }, [_c('h5', [_vm._v(\"or\")])]), _vm._v(\" \"), _c('v-flex', {\n    attrs: {\n      \"md6\": \"\",\n      \"xs12\": \"\"\n    }\n  }, [_c('pre', {\n    directives: [{\n      name: \"highlightjs\",\n      rawName: \"v-highlightjs\",\n      value: (_vm.installTags),\n      expression: \"installTags\"\n    }]\n  }, [_c('code', {\n    staticClass: \"html\"\n  })])])], 1), _vm._v(\" \"), _c('br'), _vm._v(\" \"), _c('p', [_vm._v(\"2. If your build tool supports css module, import it as left below. Or simply include the file in your HTML.\")]), _vm._v(\" \"), _c('v-layout', {\n    attrs: {\n      \"row\": \"\",\n      \"wrap\": \"\"\n    }\n  }, [_c('v-flex', {\n    attrs: {\n      \"md5\": \"\"\n    }\n  }, [_c('pre', {\n    directives: [{\n      name: \"highlightjs\",\n      rawName: \"v-highlightjs\",\n      value: ('import \\'vue-croppa/dist/vue-croppa.css\\''),\n      expression: \"'import \\\\'vue-croppa/dist/vue-croppa.css\\\\''\"\n    }]\n  }, [_c('code', {\n    staticClass: \"javascript\"\n  })])]), _vm._v(\" \"), _c('v-flex', {\n    staticClass: \"text-md-center\",\n    attrs: {\n      \"md1\": \"\",\n      \"xs12\": \"\"\n    }\n  }, [_c('h5', [_vm._v(\"or\")])]), _vm._v(\" \"), _c('v-flex', {\n    attrs: {\n      \"md6\": \"\",\n      \"xs12\": \"\"\n    }\n  }, [_c('pre', {\n    directives: [{\n      name: \"highlightjs\",\n      rawName: \"v-highlightjs\",\n      value: (_vm.installStyle),\n      expression: \"installStyle\"\n    }]\n  }, [_c('code', {\n    staticClass: \"html\"\n  })])])], 1), _vm._v(\" \"), _c('br'), _vm._v(\" \"), _c('p', [_vm._v(\"3. Register it as a vue plugin.\\n        \"), _c('router-link', {\n    attrs: {\n      \"to\": \"/registration\"\n    }\n  }, [_vm._v(\"More ways to register it.\")])], 1), _vm._v(\" \"), _c('v-layout', {\n    attrs: {\n      \"row\": \"\",\n      \"wrap\": \"\"\n    }\n  }, [_c('v-flex', {\n    attrs: {\n      \"md5\": \"\"\n    }\n  }, [_c('pre', {\n    directives: [{\n      name: \"highlightjs\",\n      rawName: \"v-highlightjs\",\n      value: (_vm.vueRegistryBuild),\n      expression: \"vueRegistryBuild\"\n    }]\n  }, [_c('code', {\n    staticClass: \"javascript\"\n  })])]), _vm._v(\" \"), _c('v-flex', {\n    staticClass: \"text-md-center\",\n    attrs: {\n      \"md1\": \"\",\n      \"xs12\": \"\"\n    }\n  }, [_c('h5', [_vm._v(\"or\")])]), _vm._v(\" \"), _c('v-flex', {\n    attrs: {\n      \"md6\": \"\",\n      \"xs12\": \"\"\n    }\n  }, [_c('pre', {\n    directives: [{\n      name: \"highlightjs\",\n      rawName: \"v-highlightjs\",\n      value: (_vm.vueRegistryTag),\n      expression: \"vueRegistryTag\"\n    }]\n  }, [_c('code', {\n    staticClass: \"html\"\n  })])])], 1), _vm._v(\" \"), _c('br'), _vm._v(\" \"), _c('p', [_vm._v(\"4. Now you have it. The simplest usage: \")]), _vm._v(\" \"), _c('v-layout', {\n    attrs: {\n      \"row\": \"\",\n      \"wrap\": \"\"\n    }\n  }, [_c('v-flex', {\n    attrs: {\n      \"md12\": \"\"\n    }\n  }, [_c('pre', {\n    directives: [{\n      name: \"highlightjs\",\n      rawName: \"v-highlightjs\",\n      value: (_vm.simplestUsageTemplate),\n      expression: \"simplestUsageTemplate\"\n    }]\n  }, [_c('code', {\n    staticClass: \"html\"\n  })])]), _vm._v(\" \"), _c('br'), _vm._v(\" \"), _c('br'), _vm._v(\" \"), _c('v-flex', {\n    attrs: {\n      \"md12\": \"\"\n    }\n  }, [_c('pre', {\n    directives: [{\n      name: \"highlightjs\",\n      rawName: \"v-highlightjs\",\n      value: (_vm.simplestUsageScript),\n      expression: \"simplestUsageScript\"\n    }]\n  }, [_c('code', {\n    staticClass: \"javascript\"\n  })])])], 1)], 1)], 1)], 1)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-64ead2f4\", module.exports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXVpY2stc3RhcnQudnVlPzc2ZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJxdWljay1zdGFydFwiXG4gICAgfVxuICB9LCBbX2MoJ3YtbGF5b3V0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJvd1wiOiBcIlwiLFxuICAgICAgXCJ3cmFwXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygndi1mbGV4JywgW19jKCdwJywgW192bS5fdihcIjEuIEluc3RhbGwgd2l0aCBucG0gb3IgaW5jbHVkZSBpdCBkaXJlY3RseS5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3YtbGF5b3V0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJvd1wiOiBcIlwiLFxuICAgICAgXCJ3cmFwXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygndi1mbGV4Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kNVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ3ByZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJoaWdobGlnaHRqc1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWhpZ2hsaWdodGpzXCIsXG4gICAgICB2YWx1ZTogKCducG0gaW5zdGFsbCAtLXNhdmUgdnVlLWNyb3BwYScpLFxuICAgICAgZXhwcmVzc2lvbjogXCInbnBtIGluc3RhbGwgLS1zYXZlIHZ1ZS1jcm9wcGEnXCJcbiAgICB9XVxuICB9LCBbX2MoJ2NvZGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmFzaFwiXG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3YtZmxleCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LW1kLWNlbnRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kMVwiOiBcIlwiLFxuICAgICAgXCJ4czEyXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwib3JcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1mbGV4Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kNlwiOiBcIlwiLFxuICAgICAgXCJ4czEyXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygncHJlJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcImhpZ2hsaWdodGpzXCIsXG4gICAgICByYXdOYW1lOiBcInYtaGlnaGxpZ2h0anNcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmluc3RhbGxUYWdzKSxcbiAgICAgIGV4cHJlc3Npb246IFwiaW5zdGFsbFRhZ3NcIlxuICAgIH1dXG4gIH0sIFtfYygnY29kZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJodG1sXCJcbiAgfSldKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCIyLiBJZiB5b3VyIGJ1aWxkIHRvb2wgc3VwcG9ydHMgY3NzIG1vZHVsZSwgaW1wb3J0IGl0IGFzIGxlZnQgYmVsb3cuIE9yIHNpbXBseSBpbmNsdWRlIHRoZSBmaWxlIGluIHlvdXIgSFRNTC5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3YtbGF5b3V0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJvd1wiOiBcIlwiLFxuICAgICAgXCJ3cmFwXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygndi1mbGV4Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kNVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ3ByZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJoaWdobGlnaHRqc1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWhpZ2hsaWdodGpzXCIsXG4gICAgICB2YWx1ZTogKCdpbXBvcnQgXFwndnVlLWNyb3BwYS9kaXN0L3Z1ZS1jcm9wcGEuY3NzXFwnJyksXG4gICAgICBleHByZXNzaW9uOiBcIidpbXBvcnQgXFxcXCd2dWUtY3JvcHBhL2Rpc3QvdnVlLWNyb3BwYS5jc3NcXFxcJydcIlxuICAgIH1dXG4gIH0sIFtfYygnY29kZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJqYXZhc2NyaXB0XCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1mbGV4Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbWQtY2VudGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQxXCI6IFwiXCIsXG4gICAgICBcInhzMTJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoXCJvclwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd2LWZsZXgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQ2XCI6IFwiXCIsXG4gICAgICBcInhzMTJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdwcmUnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwiaGlnaGxpZ2h0anNcIixcbiAgICAgIHJhd05hbWU6IFwidi1oaWdobGlnaHRqc1wiLFxuICAgICAgdmFsdWU6IChfdm0uaW5zdGFsbFN0eWxlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiaW5zdGFsbFN0eWxlXCJcbiAgICB9XVxuICB9LCBbX2MoJ2NvZGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaHRtbFwiXG4gIH0pXSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiMy4gUmVnaXN0ZXIgaXQgYXMgYSB2dWUgcGx1Z2luLlxcbiAgICAgICAgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvcmVnaXN0cmF0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJNb3JlIHdheXMgdG8gcmVnaXN0ZXIgaXQuXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3YtbGF5b3V0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJvd1wiOiBcIlwiLFxuICAgICAgXCJ3cmFwXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygndi1mbGV4Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kNVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ3ByZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJoaWdobGlnaHRqc1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWhpZ2hsaWdodGpzXCIsXG4gICAgICB2YWx1ZTogKF92bS52dWVSZWdpc3RyeUJ1aWxkKSxcbiAgICAgIGV4cHJlc3Npb246IFwidnVlUmVnaXN0cnlCdWlsZFwiXG4gICAgfV1cbiAgfSwgW19jKCdjb2RlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImphdmFzY3JpcHRcIlxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCd2LWZsZXgnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1tZC1jZW50ZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZDFcIjogXCJcIixcbiAgICAgIFwieHMxMlwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIm9yXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3YtZmxleCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZDZcIjogXCJcIixcbiAgICAgIFwieHMxMlwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ3ByZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJoaWdobGlnaHRqc1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWhpZ2hsaWdodGpzXCIsXG4gICAgICB2YWx1ZTogKF92bS52dWVSZWdpc3RyeVRhZyksXG4gICAgICBleHByZXNzaW9uOiBcInZ1ZVJlZ2lzdHJ5VGFnXCJcbiAgICB9XVxuICB9LCBbX2MoJ2NvZGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaHRtbFwiXG4gIH0pXSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiNC4gTm93IHlvdSBoYXZlIGl0LiBUaGUgc2ltcGxlc3QgdXNhZ2U6IFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1sYXlvdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm93XCI6IFwiXCIsXG4gICAgICBcIndyYXBcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCd2LWZsZXgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQxMlwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ3ByZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJoaWdobGlnaHRqc1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWhpZ2hsaWdodGpzXCIsXG4gICAgICB2YWx1ZTogKF92bS5zaW1wbGVzdFVzYWdlVGVtcGxhdGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzaW1wbGVzdFVzYWdlVGVtcGxhdGVcIlxuICAgIH1dXG4gIH0sIFtfYygnY29kZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJodG1sXCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCd2LWZsZXgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQxMlwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ3ByZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJoaWdobGlnaHRqc1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWhpZ2hsaWdodGpzXCIsXG4gICAgICB2YWx1ZTogKF92bS5zaW1wbGVzdFVzYWdlU2NyaXB0KSxcbiAgICAgIGV4cHJlc3Npb246IFwic2ltcGxlc3RVc2FnZVNjcmlwdFwiXG4gICAgfV1cbiAgfSwgW19jKCdjb2RlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImphdmFzY3JpcHRcIlxuICB9KV0pXSldLCAxKV0sIDEpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02NGVhZDJmNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTY0ZWFkMmY0XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvcGFnZXMvcXVpY2stc3RhcnQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(228);\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar update = __webpack_require__(9)(\"21bc9652\", content, false);\n// Hot Module Replacement\nif(false) {\n // When the styles change, update the <style> tags\n if(!content.locals) {\n   module.hot.accept(\"!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"vue\\\":true,\\\"id\\\":\\\"data-v-64ead2f4\\\",\\\"scoped\\\":false,\\\"hasInlineConfig\\\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./quick-start.vue\", function() {\n     var newContent = require(\"!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"vue\\\":true,\\\"id\\\":\\\"data-v-64ead2f4\\\",\\\"scoped\\\":false,\\\"hasInlineConfig\\\":false}!../../node_modules/stylus-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./quick-start.vue\");\n     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n     update(newContent);\n   });\n }\n // When the module is disposed, remove the <style> tags\n module.hot.dispose(function() { update(); });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXVpY2stc3RhcnQudnVlPzFiYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQSxxQ0FBd047QUFDeE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9JQUFvSSxtRkFBbUY7QUFDdk4sNklBQTZJLG1GQUFtRjtBQUNoTztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDIiwiZmlsZSI6IjI2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NGVhZDJmNFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcXVpY2stc3RhcnQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyMWJjOTY1MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NGVhZDJmNFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcXVpY2stc3RhcnQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY0ZWFkMmY0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9xdWljay1zdGFydC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjRlYWQyZjRcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi9zdHlsdXMtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3BhZ2VzL3F1aWNrLXN0YXJ0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

});