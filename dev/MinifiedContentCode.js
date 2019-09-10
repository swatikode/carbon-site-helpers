function renderNoDataView(id) {
    var axisData = _src_main_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["default"].deepClone(Object(_data__WEBPACK_IMPORTED_MODULE_2__["getDemoData"])("#".concat(id), "NO_DATA_VIEW"));
    var lineDefault = _src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__["default"].api.graph(axisData);
    lineDefault.loadContent(_src_main_js_carbon__WEBPACK_IMPORTED_MODULE_0__["default"].api.line(Object(_data__WEBPACK_IMPORTED_MODULE_2__["getDemoData"])("#".concat(id), "NO_DATA_VIEW").data[0]));
    return lineDefault;
}