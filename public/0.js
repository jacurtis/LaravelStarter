(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    placement: {
      type: String,
      "default": 'bottom-end'
    },
    boundary: {
      type: String,
      "default": 'scrollParent'
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  watch: {
    show: function show(_show) {
      var _this = this;

      if (_show) {
        this.$nextTick(function () {
          _this.popper = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](_this.$el, _this.$refs.dropdown, {
            placement: _this.placement,
            modifiers: {
              preventOverflow: {
                boundariesElement: _this.boundary
              }
            }
          });
        });
      } else if (this.popper) {
        setTimeout(function () {
          return _this.popper.destroy();
        }, 100);
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        _this2.close();
      }
    });
  },
  methods: {
    close: function close() {
      this.show = false;
    },
    toggle: function toggle() {
      this.show = !this.show;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/FlashMessages.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/FlashMessages.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show: true
    };
  },
  watch: {
    '$page.flash': {
      handler: function handler() {
        this.show = true;
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Icon.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Icon.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Logo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Logo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/AppLayout */ "./resources/js/Shared/AppLayout.vue");
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _Shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  metaInfo: {
    title: 'Dashboard'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/AppLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/AppLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Dropdown */ "./resources/js/Components/Dropdown.vue");
/* harmony import */ var _Components_FlashMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/FlashMessages */ "./resources/js/Components/FlashMessages.vue");
/* harmony import */ var _Components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Icon */ "./resources/js/Components/Icon.vue");
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Logo */ "./resources/js/Components/Logo.vue");
/* harmony import */ var _Shared_MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/MainMenu */ "./resources/js/Shared/MainMenu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Dropdown: _Components_Dropdown__WEBPACK_IMPORTED_MODULE_0__["default"],
    FlashMessages: _Components_FlashMessages__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icon: _Components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"],
    Logo: _Components_Logo__WEBPACK_IMPORTED_MODULE_3__["default"],
    MainMenu: _Shared_MainMenu__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      showUserMenu: false,
      accounts: null
    };
  },
  methods: {
    url: function url() {
      return location.pathname.substr(1);
    },
    hideDropdownMenus: function hideDropdownMenus() {
      this.showUserMenu = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Icon */ "./resources/js/Components/Icon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Icon: _Components_Icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    url: String
  },
  methods: {
    isUrl: function isUrl() {
      var _this = this;

      for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
        urls[_key] = arguments[_key];
      }

      if (urls[0] === '') {
        return this.url === '';
      }

      return urls.filter(function (url) {
        return _this.url.startsWith(url);
      }).length;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    { attrs: { type: "button" }, on: { click: _vm.toggle } },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.show
        ? _c("portal", { attrs: { to: "dropdown" } }, [
            _c("div", [
              _c("div", {
                staticStyle: {
                  position: "fixed",
                  top: "0",
                  right: "0",
                  left: "0",
                  bottom: "0",
                  "z-index": "99998",
                  background: "black",
                  opacity: ".2"
                },
                on: { click: _vm.toggle }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  ref: "dropdown",
                  staticStyle: { position: "absolute", "z-index": "99999" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [_vm._t("dropdown")],
                2
              )
            ])
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/FlashMessages.vue?vue&type=template&id=49ef8721&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/FlashMessages.vue?vue&type=template&id=49ef8721& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    Object.keys(_vm.$page.flash.success).length > 0 && _vm.show
      ? _c(
          "div",
          {
            staticClass:
              "mb-8 flex items-center justify-between bg-green rounded max-w-lg"
          },
          [
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "svg",
                {
                  staticClass: "ml-4 mr-2 flex-no-shrink w-4 h-4 fill-white",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20"
                  }
                },
                [
                  _c("polygon", {
                    attrs: { points: "0 11 2 9 7 14 18 3 20 5 7 18" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "py-4 text-white text-sm font-medium" },
                [_vm._v(_vm._s(_vm.$page.flash.success))]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "group mr-2 p-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.show = false
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass:
                      "block w-2 h-2 fill-green-dark group-hover:fill-green-darker",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "235.908",
                      height: "235.908",
                      viewBox: "278.046 126.846 235.908 235.908"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"
                      }
                    })
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.$page.errors).length > 0 && _vm.show
      ? _c(
          "div",
          {
            staticClass:
              "mb-8 flex items-center justify-between bg-red-light rounded max-w-lg"
          },
          [
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "svg",
                {
                  staticClass: "ml-4 mr-2 flex-no-shrink w-4 h-4 fill-white",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "py-4 text-white text-sm font-medium" },
                [
                  Object.keys(_vm.$page.errors).length === 1
                    ? _c("span", [_vm._v("There is one form error.")])
                    : _c("span", [
                        _vm._v(
                          "There are " +
                            _vm._s(Object.keys(_vm.$page.errors).length) +
                            " form errors."
                        )
                      ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "group mr-2 p-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.show = false
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass:
                      "block w-2 h-2 fill-red-dark group-hover:fill-red-darker",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "235.908",
                      height: "235.908",
                      viewBox: "278.046 126.846 235.908 235.908"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"
                      }
                    })
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Icon.vue?vue&type=template&id=7b50d278&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Icon.vue?vue&type=template&id=7b50d278& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.name === "apple"
    ? _c(
        "svg",
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100",
            height: "100",
            viewBox: "0 0 100 100"
          }
        },
        [
          _c("g", { attrs: { "fill-rule": "nonzero" } }, [
            _c("path", {
              attrs: {
                d:
                  "M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"
              }
            })
          ])
        ]
      )
    : _vm.name === "book"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"
            }
          })
        ]
      )
    : _vm.name === "cheveron-down"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            }
          })
        ]
      )
    : _vm.name === "cheveron-right"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("polygon", {
            attrs: {
              points:
                "12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"
            }
          })
        ]
      )
    : _vm.name === "dashboard"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"
            }
          })
        ]
      )
    : _vm.name === "location"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            }
          })
        ]
      )
    : _vm.name === "office"
    ? _c(
        "svg",
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100",
            height: "100",
            viewBox: "0 0 100 100"
          }
        },
        [
          _c("path", {
            attrs: {
              "fill-rule": "evenodd",
              d:
                "M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"
            }
          })
        ]
      )
    : _vm.name === "printer"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"
            }
          })
        ]
      )
    : _vm.name === "shopping-cart"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            }
          })
        ]
      )
    : _vm.name === "store-front"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"
            }
          })
        ]
      )
    : _vm.name === "trash"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"
            }
          })
        ]
      )
    : _vm.name === "users"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"
            }
          })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.name === "dark"
    ? _c(
        "svg",
        {
          attrs: {
            version: "1.1",
            baseProfile: "basic",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 1384 421",
            "xml:space": "preserve"
          }
        },
        [
          _c("g", { attrs: { id: "Background", display: "none" } }, [
            _c("rect", {
              attrs: {
                display: "inline",
                fill: "#2E4756",
                width: "1384",
                height: "421"
              }
            })
          ]),
          _vm._v(" "),
          _c("g", { attrs: { id: "Light", display: "none" } }, [
            _c(
              "g",
              { attrs: { id: "Light_Colored_Lion_Logo", display: "inline" } },
              [
                _c("path", {
                  attrs: {
                    fill: "#E9E9EA",
                    d:
                      "M355.8,157.7c-18-17.4-48.1-24.9-48.1-24.9c-6.1-10.7-13-19.5-13-19.5c-13.3-10.5-26.9-13.1-26.9-13.1\n          l-1.6,26.6c21.5-1.5,30.6,4.4,30.6,4.4c-17-2.4-33.7,4.8-33.7,4.8l-8,15.7c-20.5,49.2-71.3,54-71.3,54c13.3,1.6,17.1,9.5,17.1,9.5\n          l-6.9,20.9l-3.5-0.7c0,0-16.4,15,3.7,13.4c10.8-0.8,17.9,0.4,22.2,1.7c26,9.2,17,32.6,17,32.6s9.4,9.3,29.4,7\n          c24.1-4.8,25.2-26,25.2-26c-1.9,0-3.5,0-3.5,0c7.9-10.8,5.1-27.5,5.1-27.5c-4,13.4-17.1,21.7-17.1,21.7s-27.1-12.7-11.2-47.4\n          c17.5-30.7,55.2-22.3,55.2-22.3c2.8,15.1-5.4,25.7-5.4,25.7c18.4-7.6,18.4-22.4,18.4-22.4l4.9,1.7c14-12,13.4-26.3,13.4-26.3\n          L355.8,157.7z"
                  }
                }),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#FFFFFF",
                      d:
                        "M346.8,174.6c1.2-4.4,1.1-7.4,1.1-7.4L346.8,174.6z M307.7,132.7c-6.1-10.7-13-19.5-13-19.5\n              c-13.3-10.5-26.9-13.1-26.9-13.1l-1.6,26.6c21.5-1.5,30.6,4.4,30.6,4.4c-17-2.4-33.7,4.8-33.7,4.8l-8,15.7\n              c-2.6,6.2-5.7,11.7-9.1,16.6c55-33.9,94.9-13.2,94.9-13.2l6.9,12.1l7.9-9.5C337.9,140.2,307.7,132.7,307.7,132.7z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#F68E28",
                    d:
                      "M271.6,109.1c0,0-0.3,32.3-139.7,39.6C-7.6,156,27,306.2,27,306.2S7.6,206.1,152.5,205.6\n          C278,199.4,271.6,109.1,271.6,109.1z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter",
                            filterUnits: "userSpaceOnUse",
                            x: "25.3",
                            y: "109.1",
                            width: "246.3",
                            height: "197.1"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "25.3",
                          y: "109.1",
                          width: "246.3",
                          height: "197.1",
                          id: "SVGID_1_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: { filter: "url(#Adobe_OpacityMaskFilter)" }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_1_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "25.3",
                                    y: "109.1",
                                    width: "246.3",
                                    height: "197.1"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "25.3",
                                  y: "109.1",
                                  width: "246.3",
                                  height: "197.1",
                                  id: "SVGID_1_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_1_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_2_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "276.094",
                                  y1: "165.353",
                                  x2: "114.4743",
                                  y2: "219.2264"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_1_)",
                                fill: "url(#SVGID_2_)",
                                d:
                                  "M271.6,109.1C271.6,109.1,271.6,109.1,271.6,109.1\n                      c-0.1,1.4-3.4,69.7-118.4,71.6C37,182.6,20,270.3,26.6,304.2c0.3,1.3,0.4,2,0.4,2S7.6,206.1,152.5,205.6\n                      C278,199.4,271.6,109.1,271.6,109.1z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_3_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "276.094",
                          y1: "165.353",
                          x2: "114.4743",
                          y2: "219.2264"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#F9A558" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#F9A558" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_3_)",
                        d:
                          "M271.6,109.1C271.6,109.1,271.6,109.1,271.6,109.1c-0.1,1.4-3.4,69.7-118.4,71.6\n              C37,182.6,20,270.3,26.6,304.2c0.3,1.3,0.4,2,0.4,2S7.6,206.1,152.5,205.6C278,199.4,271.6,109.1,271.6,109.1z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#ED4296",
                    d:
                      "M271.6,105c0,0-30.4,26.1-123.6,5.1C44.1,99.3,8.9,177.3,13,225.8c0,0,15.2-95.7,143.6-62.1\n          C275.9,170.5,271.6,105,271.6,105z"
                  }
                }),
                _vm._v(" "),
                _c("defs", [
                  _c(
                    "filter",
                    {
                      attrs: {
                        id: "Adobe_OpacityMaskFilter_2_",
                        filterUnits: "userSpaceOnUse",
                        x: "12.9",
                        y: "105.8",
                        width: "258.6",
                        height: "119.2"
                      }
                    },
                    [
                      _c("feFlood", {
                        staticStyle: {
                          "flood-color": "white",
                          "flood-opacity": "1"
                        },
                        attrs: { result: "back" }
                      }),
                      _vm._v(" "),
                      _c("feBlend", {
                        attrs: {
                          in: "SourceGraphic",
                          in2: "back",
                          mode: "normal"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "mask",
                  {
                    attrs: {
                      maskUnits: "userSpaceOnUse",
                      x: "12.9",
                      y: "105.8",
                      width: "258.6",
                      height: "119.2",
                      id: "SVGID_4_"
                    }
                  },
                  [
                    _c(
                      "g",
                      { attrs: { filter: "url(#Adobe_OpacityMaskFilter_2_)" } },
                      [
                        _c("defs", [
                          _c(
                            "filter",
                            {
                              attrs: {
                                id: "Adobe_OpacityMaskFilter_3_",
                                filterUnits: "userSpaceOnUse",
                                x: "12.9",
                                y: "105.8",
                                width: "258.6",
                                height: "119.2"
                              }
                            },
                            [
                              _c("feFlood", {
                                staticStyle: {
                                  "flood-color": "white",
                                  "flood-opacity": "1"
                                },
                                attrs: { result: "back" }
                              }),
                              _vm._v(" "),
                              _c("feBlend", {
                                attrs: {
                                  in: "SourceGraphic",
                                  in2: "back",
                                  mode: "normal"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "mask",
                          {
                            attrs: {
                              maskUnits: "userSpaceOnUse",
                              x: "12.9",
                              y: "105.8",
                              width: "258.6",
                              height: "119.2",
                              id: "SVGID_4_"
                            }
                          },
                          [
                            _c("g", {
                              attrs: {
                                filter: "url(#Adobe_OpacityMaskFilter_3_)"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "linearGradient",
                          {
                            attrs: {
                              id: "SVGID_5_",
                              gradientUnits: "userSpaceOnUse",
                              x1: "12.8848",
                              y1: "165.3875",
                              x2: "271.5048",
                              y2: "165.3875"
                            }
                          },
                          [
                            _c("stop", {
                              staticStyle: { "stop-color": "#FFFFFF" },
                              attrs: { offset: "0" }
                            }),
                            _vm._v(" "),
                            _c("stop", {
                              staticStyle: { "stop-color": "#000000" },
                              attrs: { offset: "1" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            mask: "url(#SVGID_4_)",
                            fill: "url(#SVGID_5_)",
                            d:
                              "M156.4,162.9c108.3,6.2,114.8-47.2,115.1-57.1\n                  c-8.8,22.2-37.8,41.4-117.2,26.7C25,108.5,12.9,225,12.9,225S28.1,129.3,156.4,162.9z"
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "linearGradient",
                  {
                    attrs: {
                      id: "SVGID_6_",
                      gradientUnits: "userSpaceOnUse",
                      x1: "12.8848",
                      y1: "165.3875",
                      x2: "271.5048",
                      y2: "165.3875"
                    }
                  },
                  [
                    _c("stop", {
                      staticStyle: { "stop-color": "#EB62A3" },
                      attrs: { offset: "0" }
                    }),
                    _vm._v(" "),
                    _c("stop", {
                      staticStyle: { "stop-color": "#ED4296" },
                      attrs: { offset: "1" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "url(#SVGID_6_)",
                    d:
                      "M156.4,162.9c108.3,6.2,114.8-47.2,115.1-57.1c-8.8,22.2-37.8,41.4-117.2,26.7\n          C25,108.5,12.9,225,12.9,225S28.1,129.3,156.4,162.9z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#ED1C57",
                    d:
                      "M51.4,117.3c0,0,44.1-47.5,116.3-4.4c72.3,43.1,103.9-3.8,103.9-3.8s-16.5-63.4-121.2-58.3\n          C67.5,61.5,51.4,117.3,51.4,117.3z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#FFC834",
                    d:
                      "M25.7,237.1c0,0-11.1,84.6,36.4,141c0,0-23.1-26.9-10.8-79.2c16.8-51.7,70-58.9,99-56.7\n          c29,2.2,79.7-0.3,104.8-38.3c0,0-25.8,18.4-115.3-2.9c-89.5-21.2-105.3,6.7-105.3,6.7S27.3,224.1,25.7,237.1z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#36C5F3",
                    d:
                      "M219.4,259.1c0,0-60.1-66.1-137.6-3.6C21.9,323.6,93.5,393,116,394.3c0,0-26-42.5-0.9-98.6\n          C148.7,233.9,219.4,259.1,219.4,259.1z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#2CBAD2",
                    d:
                      "M171.5,272.9c0,0-39,67.8,27.3,102.7c67.8,27.6,108.1-36.8,108.1-36.8s-47.9,26.3-91.9-1.9\n          C170.8,308.7,171.5,272.9,171.5,272.9z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "linearGradient",
                  {
                    attrs: {
                      id: "SVGID_7_",
                      gradientUnits: "userSpaceOnUse",
                      x1: "150.395",
                      y1: "62.8493",
                      x2: "271.593",
                      y2: "62.8493"
                    }
                  },
                  [
                    _c("stop", {
                      staticStyle: { "stop-color": "#C14598" },
                      attrs: { offset: "0" }
                    }),
                    _vm._v(" "),
                    _c("stop", {
                      staticStyle: { "stop-color": "#634C9E" },
                      attrs: { offset: "1" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "url(#SVGID_7_)",
                    d:
                      "M153.4,10.3c0,0-21.5,55.4,50.4,70.9c71.9,15.5,66.6,34.2,66.6,34.2s13.9-43.4-52-65.3\n          C152.5,28.3,153.4,10.3,153.4,10.3z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  [
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_8_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "132.5471",
                          y1: "27.0817",
                          x2: "263.7497",
                          y2: "102.5073"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#C14598" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#58439A" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_8_)",
                        d:
                          "M155.6,50.6c6.5,12.5,20.3,24.6,48.3,30.6c51.5,11.1,63.4,23.9,66,30.2c0.9-1,1.4-1.7,1.7-2.1\n              c0-0.2,0-0.4,0.1-0.6C270,103.4,251.1,47.9,155.6,50.6z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "g",
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_4_",
                            filterUnits: "userSpaceOnUse",
                            x: "51.4",
                            y: "78.1",
                            width: "217.2",
                            height: "53"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "51.4",
                          y: "78.1",
                          width: "217.2",
                          height: "53",
                          id: "SVGID_9_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_4_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_5_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "51.4",
                                    y: "78.1",
                                    width: "217.2",
                                    height: "53"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "51.4",
                                  y: "78.1",
                                  width: "217.2",
                                  height: "53",
                                  id: "SVGID_9_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_5_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_10_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "51.3807",
                                  y1: "104.5617",
                                  x2: "268.5945",
                                  y2: "104.5617"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_9_)",
                                fill: "url(#SVGID_10_)",
                                d:
                                  "M167.7,112.8c59.5,35.5,91.5,9.9,100.9-0.2\n                      c-45.9,10.8-93.9-24.4-93.9-24.4c-86.6-34.2-123.3,29-123.3,29S95.4,69.7,167.7,112.8z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_11_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "51.3807",
                          y1: "104.5617",
                          x2: "268.5945",
                          y2: "104.5617"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#EE3E5D" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#ED235F" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_11_)",
                        d:
                          "M167.7,112.8c59.5,35.5,91.5,9.9,100.9-0.2c-45.9,10.8-93.9-24.4-93.9-24.4\n              c-86.6-34.2-123.3,29-123.3,29S95.4,69.7,167.7,112.8z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#E01860",
                      d:
                        "M270.6,105.8c-5.7,3.9-33.5,19.5-100,8.6c67.8,38.9,98.9-2.3,101-5.2c0-0.2,0-0.3,0-0.4\n              C271.5,108.3,271.1,107.2,270.6,105.8z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#FBB216",
                    d:
                      "M159.3,205.2c-6.1-1.2-12.6-2.6-19.4-4.2C53,180.4,35.5,206,34.6,207.6c-0.1,0.2-0.2,0.3-0.2,0.5\n          c-0.6,1.4-2.6,6.2-4.5,12.1c-1.8,5.6-3.1,11.3-4.1,17c0,0.3-2.9,22.3,0.6,51.3c2.1-28.8,20.1-82.4,126.1-82.8\n          C154.8,205.5,157.1,205.3,159.3,205.2z"
                  }
                }),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#EA3A94",
                      d:
                        "M131.8,148.7c-18.1,0.9-33.2,4.3-45.9,9.4c18.6-3,41.7-2,70.6,5.6c98.2,5.6,112.7-37.8,114.7-53.3\n              C269.4,116.5,254.5,142.3,131.8,148.7z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#49C7EF",
                      d:
                        "M92.4,277.8c-32.6,60.2,4.5,100.4,23.1,115.6c-3.4-6.1-23.5-46.2-0.5-97.7\n              c33.6-61.8,104.3-36.6,104.3-36.6S151.6,215.1,92.4,277.8z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#4582C3",
                    d:
                      "M170.8,244.7c0,0-37.1,33.3-18.4,94.8c19,52,71.6,54.8,71.6,54.8s-68.8,24.4-106.8-30.7\n          C84.3,311.6,125.5,246.9,170.8,244.7z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  { attrs: { opacity: "0.7" } },
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_6_",
                            filterUnits: "userSpaceOnUse",
                            x: "105.4",
                            y: "244.7",
                            width: "118.7",
                            height: "154.9"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "105.4",
                          y: "244.7",
                          width: "118.7",
                          height: "154.9",
                          id: "SVGID_12_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_6_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_7_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "105.4",
                                    y: "244.7",
                                    width: "118.7",
                                    height: "154.9"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "105.4",
                                  y: "244.7",
                                  width: "118.7",
                                  height: "154.9",
                                  id: "SVGID_12_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_7_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_13_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "134.5093",
                                  y1: "430.5077",
                                  x2: "187.7457",
                                  y2: "291.0793"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_12_)",
                                fill: "url(#SVGID_13_)",
                                d:
                                  "M125.4,333.7c-3.8-70.4,45.5-89,45.5-89\n                      c-45.3,2.2-86.5,66.9-53.5,118.8c38,55.1,106.8,30.7,106.8,30.7C221.1,394.6,136,403.5,125.4,333.7z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_14_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "134.5093",
                          y1: "430.5077",
                          x2: "187.7457",
                          y2: "291.0793"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#2057A6" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#387CBF" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_14_)",
                        d:
                          "M125.4,333.7c-3.8-70.4,45.5-89,45.5-89c-45.3,2.2-86.5,66.9-53.5,118.8\n              c38,55.1,106.8,30.7,106.8,30.7C221.1,394.6,136,403.5,125.4,333.7z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "g",
                  { attrs: { opacity: "0.5" } },
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_8_",
                            filterUnits: "userSpaceOnUse",
                            x: "169",
                            y: "273.1",
                            width: "137.5",
                            height: "91.4"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "169",
                          y: "273.1",
                          width: "137.5",
                          height: "91.4",
                          id: "SVGID_15_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_8_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_9_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "169",
                                    y: "273.1",
                                    width: "137.5",
                                    height: "91.4"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "169",
                                  y: "273.1",
                                  width: "137.5",
                                  height: "91.4",
                                  id: "SVGID_15_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_9_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_16_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "305.3901",
                                  y1: "303.3961",
                                  x2: "142.285",
                                  y2: "329.5946"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_15_)",
                                fill: "url(#SVGID_16_)",
                                d:
                                  "M210.3,358c44.4,18.4,82.6-7.7,95.9-18.6c0.2-0.3,0.3-0.5,0.3-0.5\n                      s-47.8,26.3-91.9-1.9c-44.1-28.2-43.4-64-43.4-64S155.2,335.2,210.3,358z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_17_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "305.3901",
                          y1: "303.3961",
                          x2: "142.285",
                          y2: "329.5946"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#70CCE2" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#94D7EA" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_17_)",
                        d:
                          "M210.3,358c44.4,18.4,82.6-7.7,95.9-18.6c0.2-0.3,0.3-0.5,0.3-0.5s-47.8,26.3-91.9-1.9\n              c-44.1-28.2-43.4-64-43.4-64S155.2,335.2,210.3,358z"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("g", { attrs: { id: "Name_1_", display: "inline" } }, [
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M397.3,318.1V110.8h97.1c39.4,0,59.1,16.1,59.1,48.3c0,23.6-12.8,40.4-38.6,50.6\n          c27.4,5.1,41.2,20.8,41.2,47.1c0,40.9-21.6,61.3-64.8,61.3H397.3z M489.7,284.8c17,0,25.5-8.7,25.5-26.1\n          c0-21.5-12.7-32.3-38.1-32.3h-11.6v-24.8c31.9-5.3,47.8-18.6,47.8-40c0-11.6-7.2-17.4-21.5-17.4h-56.2v140.6H489.7z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M600.1,317.8v-207h94.2c42.3,0,63.5,18.5,63.5,55.5c0,25-16.5,45.8-49.4,62.2l65.7,89.6h-48.4l-63.1-90.3\n          v-17.5c36.7-6.3,55.1-20.5,55.1-42.8c0-15.3-8.6-22.9-25.8-22.9h-52.6v173.2H600.1z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M819.2,318.1h-39.4l88-207.3h41.3l89.9,207.3h-41.3L934,261.6h-68.9l13.2-33.3h41.7l-32.6-77.8\n          L819.2,318.1z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M1170.3,110.8l-90.9,207.3h-41.3l-87-207.3h45.7l64.2,158.7l64.1-158.7H1170.3z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M1332,110.8v33h-103.8v52.2h98.9v34.4h-99.3v54.4H1334v33.3h-143.9V110.8H1332z"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("g", { attrs: { id: "Dark" } }, [
            _c(
              "g",
              { attrs: { id: "Lion_Icon" } },
              [
                _c("path", {
                  attrs: {
                    fill: "#3B586A",
                    d:
                      "M355,157.9c-18-17.4-48.1-24.9-48.1-24.9c-6.1-10.7-13-19.5-13-19.5c-13.3-10.5-26.9-13.1-26.9-13.1\n          l-1.6,26.7c21.5-1.5,30.6,4.4,30.6,4.4c-17-2.4-33.7,4.8-33.7,4.8l-8,15.7c-20.5,49.2-71.3,54-71.3,54c13.3,1.6,17.1,9.5,17.1,9.5\n          l-6.9,21l-3.5-0.7c0,0-16.4,15,3.7,13.4c10.8-0.8,17.9,0.4,22.2,1.7c26,9.2,17,32.6,17,32.6s9.4,9.3,29.4,7\n          c24.1-4.8,25.3-26,25.3-26c-1.9,0-3.5,0-3.5,0c7.9-10.8,5.1-27.5,5.1-27.5c-4,13.4-17.1,21.7-17.1,21.7s-27.2-12.7-11.2-47.4\n          c17.5-30.7,55.3-22.3,55.3-22.3c2.8,15.1-5.4,25.7-5.4,25.7c18.4-7.6,18.4-22.4,18.4-22.4l4.9,1.7c14-12,13.4-26.3,13.4-26.3\n          L355,157.9z"
                  }
                }),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#2E4756",
                      d:
                        "M346,174.8c1.2-4.4,1.1-7.4,1.1-7.4L346,174.8z M306.9,133c-6.1-10.7-13-19.6-13-19.6\n              c-13.3-10.5-26.9-13.1-26.9-13.1l-1.6,26.6c21.5-1.5,30.6,4.4,30.6,4.4c-17-2.4-33.7,4.8-33.7,4.8l-8,15.7\n              c-2.6,6.2-5.7,11.7-9.1,16.6c55-33.9,94.9-13.2,94.9-13.2l6.9,12.1l7.9-9.5C337,140.4,306.9,133,306.9,133z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#F68E28",
                    d:
                      "M270.7,109.3c0,0-0.3,32.3-139.8,39.6C-8.5,156.2,26,306.4,26,306.4S6.7,206.3,151.6,205.8\n          C277.1,199.6,270.7,109.3,270.7,109.3z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_10_",
                            filterUnits: "userSpaceOnUse",
                            x: "24.4",
                            y: "109.3",
                            width: "246.4",
                            height: "197.2"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "24.4",
                          y: "109.3",
                          width: "246.4",
                          height: "197.2",
                          id: "SVGID_18_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_10_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_11_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "24.4",
                                    y: "109.3",
                                    width: "246.4",
                                    height: "197.2"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "24.4",
                                  y: "109.3",
                                  width: "246.4",
                                  height: "197.2",
                                  id: "SVGID_18_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_11_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_19_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "275.2177",
                                  y1: "165.5657",
                                  x2: "113.555",
                                  y2: "219.4534"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_18_)",
                                fill: "url(#SVGID_19_)",
                                d:
                                  "M270.7,109.3C270.7,109.3,270.7,109.3,270.7,109.3\n                      c-0.1,1.4-3.4,69.7-118.5,71.6C36.1,182.8,19.1,270.5,25.6,304.4c0.3,1.3,0.4,2,0.4,2S6.7,206.3,151.6,205.8\n                      C277.1,199.6,270.7,109.3,270.7,109.3z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_20_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "275.2177",
                          y1: "165.5657",
                          x2: "113.555",
                          y2: "219.4534"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#F9A558" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#F9A558" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_20_)",
                        d:
                          "M270.7,109.3C270.7,109.3,270.7,109.3,270.7,109.3c-0.1,1.4-3.4,69.7-118.5,71.6\n              C36.1,182.8,19.1,270.5,25.6,304.4c0.3,1.3,0.4,2,0.4,2S6.7,206.3,151.6,205.8C277.1,199.6,270.7,109.3,270.7,109.3z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#ED4296",
                    d:
                      "M270.8,105.2c0,0-30.4,26.1-123.6,5.1C43.2,99.5,8,177.5,12.1,226c0,0,15.2-95.7,143.6-62.1\n          C275,170.7,270.8,105.2,270.8,105.2z"
                  }
                }),
                _vm._v(" "),
                _c("defs", [
                  _c(
                    "filter",
                    {
                      attrs: {
                        id: "Adobe_OpacityMaskFilter_12_",
                        filterUnits: "userSpaceOnUse",
                        x: "11.9",
                        y: "106",
                        width: "258.7",
                        height: "119.3"
                      }
                    },
                    [
                      _c("feFlood", {
                        staticStyle: {
                          "flood-color": "white",
                          "flood-opacity": "1"
                        },
                        attrs: { result: "back" }
                      }),
                      _vm._v(" "),
                      _c("feBlend", {
                        attrs: {
                          in: "SourceGraphic",
                          in2: "back",
                          mode: "normal"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "mask",
                  {
                    attrs: {
                      maskUnits: "userSpaceOnUse",
                      x: "11.9",
                      y: "106",
                      width: "258.7",
                      height: "119.3",
                      id: "SVGID_21_"
                    }
                  },
                  [
                    _c(
                      "g",
                      {
                        attrs: { filter: "url(#Adobe_OpacityMaskFilter_12_)" }
                      },
                      [
                        _c("defs", [
                          _c(
                            "filter",
                            {
                              attrs: {
                                id: "Adobe_OpacityMaskFilter_13_",
                                filterUnits: "userSpaceOnUse",
                                x: "11.9",
                                y: "106",
                                width: "258.7",
                                height: "119.3"
                              }
                            },
                            [
                              _c("feFlood", {
                                staticStyle: {
                                  "flood-color": "white",
                                  "flood-opacity": "1"
                                },
                                attrs: { result: "back" }
                              }),
                              _vm._v(" "),
                              _c("feBlend", {
                                attrs: {
                                  in: "SourceGraphic",
                                  in2: "back",
                                  mode: "normal"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "mask",
                          {
                            attrs: {
                              maskUnits: "userSpaceOnUse",
                              x: "11.9",
                              y: "106",
                              width: "258.7",
                              height: "119.3",
                              id: "SVGID_21_"
                            }
                          },
                          [
                            _c("g", {
                              attrs: {
                                filter: "url(#Adobe_OpacityMaskFilter_13_)"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "linearGradient",
                          {
                            attrs: {
                              id: "SVGID_22_",
                              gradientUnits: "userSpaceOnUse",
                              x1: "11.9387",
                              y1: "165.5996",
                              x2: "270.6269",
                              y2: "165.5996"
                            }
                          },
                          [
                            _c("stop", {
                              staticStyle: { "stop-color": "#FFFFFF" },
                              attrs: { offset: "0" }
                            }),
                            _vm._v(" "),
                            _c("stop", {
                              staticStyle: { "stop-color": "#000000" },
                              attrs: { offset: "1" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            mask: "url(#SVGID_21_)",
                            fill: "url(#SVGID_22_)",
                            d:
                              "M155.5,163.1c108.3,6.2,114.8-47.2,115.1-57.1\n                  c-8.8,22.2-37.8,41.4-117.3,26.7C24,108.7,11.9,225.2,11.9,225.2S27.2,129.5,155.5,163.1z"
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "linearGradient",
                  {
                    attrs: {
                      id: "SVGID_23_",
                      gradientUnits: "userSpaceOnUse",
                      x1: "11.9387",
                      y1: "165.5996",
                      x2: "270.6269",
                      y2: "165.5996"
                    }
                  },
                  [
                    _c("stop", {
                      staticStyle: { "stop-color": "#EB62A3" },
                      attrs: { offset: "0" }
                    }),
                    _vm._v(" "),
                    _c("stop", {
                      staticStyle: { "stop-color": "#ED4296" },
                      attrs: { offset: "1" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "url(#SVGID_23_)",
                    d:
                      "M155.5,163.1c108.3,6.2,114.8-47.2,115.1-57.1c-8.8,22.2-37.8,41.4-117.3,26.7\n          C24,108.7,11.9,225.2,11.9,225.2S27.2,129.5,155.5,163.1z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#ED1C57",
                    d:
                      "M50.4,117.5c0,0,44.1-47.6,116.3-4.4c72.3,43.1,103.9-3.8,103.9-3.8s-16.5-63.4-121.2-58.3\n          C66.6,61.7,50.4,117.5,50.4,117.5z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#FFC834",
                    d:
                      "M24.8,237.3c0,0-11.1,84.6,36.4,141.1c0,0-23.1-26.9-10.8-79.2c16.8-51.7,70-59,99-56.7\n          c29,2.2,79.7-0.3,104.8-38.3c0,0-25.8,18.4-115.3-2.9c-89.5-21.2-105.4,6.7-105.4,6.7S26.4,224.3,24.8,237.3z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#36C5F3",
                    d:
                      "M218.5,259.4c0,0-60.1-66.1-137.6-3.6C21,323.9,92.6,393.3,115.1,394.6c0,0-26-42.5-0.9-98.6\n          C147.8,234.2,218.5,259.4,218.5,259.4z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#2CBAD2",
                    d:
                      "M170.6,273.1c0,0-39,67.8,27.3,102.7c67.8,27.6,108.1-36.8,108.1-36.8s-47.9,26.3-91.9-1.9\n          C169.9,309,170.6,273.1,170.6,273.1z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "linearGradient",
                  {
                    attrs: {
                      id: "SVGID_24_",
                      gradientUnits: "userSpaceOnUse",
                      x1: "149.4875",
                      y1: "63.0336",
                      x2: "270.7151",
                      y2: "63.0336"
                    }
                  },
                  [
                    _c("stop", {
                      staticStyle: { "stop-color": "#C14598" },
                      attrs: { offset: "0" }
                    }),
                    _vm._v(" "),
                    _c("stop", {
                      staticStyle: { "stop-color": "#634C9E" },
                      attrs: { offset: "1" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "url(#SVGID_24_)",
                    d:
                      "M152.5,10.5c0,0-21.6,55.4,50.4,70.9c72,15.5,66.6,34.2,66.6,34.2s13.9-43.4-52-65.3\n          C151.6,28.4,152.5,10.5,152.5,10.5z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  [
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_25_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "131.6369",
                          y1: "27.2578",
                          x2: "262.8711",
                          y2: "102.7016"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#C14598" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#58439A" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_25_)",
                        d:
                          "M154.7,50.7c6.5,12.5,20.3,24.6,48.3,30.6c51.5,11.1,63.4,23.9,66,30.2c0.9-1,1.4-1.7,1.7-2.1\n              c0-0.2,0-0.4,0.1-0.6C269.1,103.6,250.2,48.1,154.7,50.7z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "g",
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_14_",
                            filterUnits: "userSpaceOnUse",
                            x: "50.4",
                            y: "78.3",
                            width: "217.3",
                            height: "53"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "50.4",
                          y: "78.3",
                          width: "217.3",
                          height: "53",
                          id: "SVGID_26_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_14_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_15_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "50.4",
                                    y: "78.3",
                                    width: "217.3",
                                    height: "53"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "50.4",
                                  y: "78.3",
                                  width: "217.3",
                                  height: "53",
                                  id: "SVGID_26_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_15_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_27_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "50.4451",
                                  y1: "104.7571",
                                  x2: "267.7158",
                                  y2: "104.7571"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_26_)",
                                fill: "url(#SVGID_27_)",
                                d:
                                  "M166.8,113c59.5,35.5,91.5,9.9,100.9-0.2c-46,10.8-93.9-24.4-93.9-24.4\n                      c-86.6-34.2-123.4,29-123.4,29S94.5,69.9,166.8,113z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_28_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "50.4451",
                          y1: "104.7571",
                          x2: "267.7158",
                          y2: "104.7571"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#EE3E5D" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#ED235F" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_28_)",
                        d:
                          "M166.8,113c59.5,35.5,91.5,9.9,100.9-0.2c-46,10.8-93.9-24.4-93.9-24.4\n              c-86.6-34.2-123.4,29-123.4,29S94.5,69.9,166.8,113z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#E01860",
                      d:
                        "M269.7,106c-5.7,3.9-33.5,19.5-100.1,8.6c67.8,38.9,98.9-2.3,101.1-5.2c0-0.2,0-0.3,0-0.4\n              C270.6,108.5,270.3,107.4,269.7,106z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#FBB216",
                    d:
                      "M158.4,205.4c-6.1-1.2-12.6-2.6-19.4-4.2c-86.9-20.6-104.4,5.1-105.3,6.6c-0.1,0.2-0.2,0.3-0.2,0.5\n          c-0.6,1.4-2.6,6.2-4.5,12.1c-1.8,5.6-3.1,11.3-4.1,17c0,0.3-2.9,22.4,0.6,51.3c2.1-28.8,20.2-82.5,126.2-82.8\n          C153.9,205.7,156.1,205.6,158.4,205.4z"
                  }
                }),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#EA3A94",
                      d:
                        "M130.9,148.9c-18.1,0.9-33.2,4.3-45.9,9.4c18.6-3,41.7-2,70.6,5.6c98.3,5.6,112.7-37.8,114.8-53.3\n              C268.5,116.7,253.6,142.5,130.9,148.9z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#49C7EF",
                      d:
                        "M91.5,278.1c-32.6,60.2,4.5,100.4,23.1,115.6c-3.4-6.1-23.5-46.2-0.5-97.8\n              c33.6-61.8,104.3-36.6,104.3-36.6S150.7,215.3,91.5,278.1z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#4582C3",
                    d:
                      "M169.9,244.9c0,0-37.1,33.3-18.4,94.8c19,52,71.6,54.8,71.6,54.8s-68.8,24.4-106.8-30.7\n          C83.4,311.8,124.6,247.2,169.9,244.9z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  { attrs: { opacity: "0.7" } },
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_16_",
                            filterUnits: "userSpaceOnUse",
                            x: "104.5",
                            y: "244.9",
                            width: "118.7",
                            height: "155"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "104.5",
                          y: "244.9",
                          width: "118.7",
                          height: "155",
                          id: "SVGID_29_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_16_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_17_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "104.5",
                                    y: "244.9",
                                    width: "118.7",
                                    height: "155"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "104.5",
                                  y: "244.9",
                                  width: "118.7",
                                  height: "155",
                                  id: "SVGID_29_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_17_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_30_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "133.596",
                                  y1: "430.7914",
                                  x2: "186.8465",
                                  y2: "291.3261"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_29_)",
                                fill: "url(#SVGID_30_)",
                                d:
                                  "M124.5,334c-3.8-70.4,45.5-89.1,45.5-89.1\n                      c-45.3,2.2-86.5,66.9-53.6,118.9c38,55.2,106.8,30.7,106.8,30.7C220.2,394.9,135.1,403.7,124.5,334z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_31_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "133.596",
                          y1: "430.7914",
                          x2: "186.8465",
                          y2: "291.3261"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#2057A6" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#387CBF" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_31_)",
                        d:
                          "M124.5,334c-3.8-70.4,45.5-89.1,45.5-89.1c-45.3,2.2-86.5,66.9-53.6,118.9\n              c38,55.2,106.8,30.7,106.8,30.7C220.2,394.9,135.1,403.7,124.5,334z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "g",
                  { attrs: { opacity: "0.5" } },
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_18_",
                            filterUnits: "userSpaceOnUse",
                            x: "168.1",
                            y: "273.3",
                            width: "137.5",
                            height: "91.4"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "168.1",
                          y: "273.3",
                          width: "137.5",
                          height: "91.4",
                          id: "SVGID_32_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_18_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_19_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "168.1",
                                    y: "273.3",
                                    width: "137.5",
                                    height: "91.4"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "168.1",
                                  y: "273.3",
                                  width: "137.5",
                                  height: "91.4",
                                  id: "SVGID_32_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_19_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_33_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "304.522",
                                  y1: "303.6465",
                                  x2: "141.3773",
                                  y2: "329.8513"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_32_)",
                                fill: "url(#SVGID_33_)",
                                d:
                                  "M209.4,358.3c44.4,18.4,82.7-7.7,95.9-18.6c0.2-0.3,0.3-0.5,0.3-0.5\n                      s-47.9,26.3-91.9-1.9c-44.1-28.2-43.4-64-43.4-64S154.3,335.5,209.4,358.3z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_34_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "304.522",
                          y1: "303.6465",
                          x2: "141.3773",
                          y2: "329.8513"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#70CCE2" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#94D7EA" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_34_)",
                        d:
                          "M209.4,358.3c44.4,18.4,82.7-7.7,95.9-18.6c0.2-0.3,0.3-0.5,0.3-0.5s-47.9,26.3-91.9-1.9\n              c-44.1-28.2-43.4-64-43.4-64S154.3,335.5,209.4,358.3z"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("g", { attrs: { id: "Name_2_" } }, [
              _c("path", {
                attrs: {
                  fill: "#2E4756",
                  d:
                    "M397.3,318.1V110.8h97.1c39.4,0,59.1,16.1,59.1,48.3c0,23.6-12.8,40.4-38.6,50.6\n          c27.4,5.1,41.2,20.8,41.2,47.1c0,40.9-21.6,61.3-64.8,61.3H397.3z M489.7,284.8c17,0,25.5-8.7,25.5-26.1\n          c0-21.5-12.7-32.3-38.1-32.3h-11.6v-24.8c31.9-5.3,47.8-18.6,47.8-40c0-11.6-7.2-17.4-21.5-17.4h-56.2v140.6H489.7z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#2E4756",
                  d:
                    "M600.1,317.8v-207h94.2c42.3,0,63.5,18.5,63.5,55.5c0,25-16.5,45.8-49.4,62.2l65.7,89.6h-48.4l-63.1-90.3\n          v-17.5c36.7-6.3,55.1-20.5,55.1-42.8c0-15.3-8.6-22.9-25.8-22.9h-52.6v173.2H600.1z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#2E4756",
                  d:
                    "M819.2,318.1h-39.4l88-207.3h41.3l89.9,207.3h-41.3L934,261.6h-68.9l13.2-33.3h41.7l-32.6-77.8\n          L819.2,318.1z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#2E4756",
                  d:
                    "M1170.3,110.8l-90.9,207.3h-41.3l-87-207.3h45.7l64.2,158.7l64.1-158.7H1170.3z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#2E4756",
                  d:
                    "M1332,110.8v33h-103.8v52.2h98.9v34.4h-99.3v54.4H1334v33.3h-143.9V110.8H1332z"
                }
              })
            ]),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g")
          ])
        ]
      )
    : _c(
        "svg",
        {
          attrs: {
            version: "1.1",
            baseProfile: "basic",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 1384 421",
            "xml:space": "preserve"
          }
        },
        [
          _c("g", { attrs: { id: "Layer_2" } }, [
            _c("rect", {
              attrs: {
                display: "none",
                fill: "#2E4756",
                width: "1384",
                height: "421"
              }
            })
          ]),
          _vm._v(" "),
          _c("g", { attrs: { id: "Layer_1" } }, [
            _c(
              "g",
              { attrs: { id: "Light_Colored_Lion_Logo" } },
              [
                _c("path", {
                  attrs: {
                    fill: "#E9E9EA",
                    d:
                      "M355.8,157.7c-18-17.4-48.1-24.9-48.1-24.9c-6.1-10.7-13-19.5-13-19.5c-13.3-10.5-26.9-13.1-26.9-13.1\n          l-1.6,26.6c21.5-1.5,30.6,4.4,30.6,4.4c-17-2.4-33.7,4.8-33.7,4.8l-8,15.7c-20.5,49.2-71.3,54-71.3,54c13.3,1.6,17.1,9.5,17.1,9.5\n          l-6.9,20.9l-3.5-0.7c0,0-16.4,15,3.7,13.4c10.8-0.8,17.9,0.4,22.2,1.7c26,9.2,17,32.6,17,32.6s9.4,9.3,29.4,7\n          c24.1-4.8,25.2-26,25.2-26c-1.9,0-3.5,0-3.5,0c7.9-10.8,5.1-27.5,5.1-27.5c-4,13.4-17.1,21.7-17.1,21.7s-27.1-12.7-11.2-47.4\n          c17.5-30.7,55.2-22.3,55.2-22.3c2.8,15.1-5.4,25.7-5.4,25.7c18.4-7.6,18.4-22.4,18.4-22.4l4.9,1.7c14-12,13.4-26.3,13.4-26.3\n          L355.8,157.7z"
                  }
                }),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#FFFFFF",
                      d:
                        "M346.8,174.6c1.2-4.4,1.1-7.4,1.1-7.4L346.8,174.6z M307.7,132.7c-6.1-10.7-13-19.5-13-19.5\n              c-13.3-10.5-26.9-13.1-26.9-13.1l-1.6,26.6c21.5-1.5,30.6,4.4,30.6,4.4c-17-2.4-33.7,4.8-33.7,4.8l-8,15.7\n              c-2.6,6.2-5.7,11.7-9.1,16.6c55-33.9,94.9-13.2,94.9-13.2l6.9,12.1l7.9-9.5C337.9,140.2,307.7,132.7,307.7,132.7z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#F68E28",
                    d:
                      "M271.6,109.1c0,0-0.3,32.3-139.7,39.6C-7.6,156,27,306.2,27,306.2S7.6,206.1,152.5,205.6\n          C278,199.4,271.6,109.1,271.6,109.1z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter",
                            filterUnits: "userSpaceOnUse",
                            x: "25.3",
                            y: "109.1",
                            width: "246.3",
                            height: "197.1"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "25.3",
                          y: "109.1",
                          width: "246.3",
                          height: "197.1",
                          id: "SVGID_1_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: { filter: "url(#Adobe_OpacityMaskFilter)" }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_1_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "25.3",
                                    y: "109.1",
                                    width: "246.3",
                                    height: "197.1"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "25.3",
                                  y: "109.1",
                                  width: "246.3",
                                  height: "197.1",
                                  id: "SVGID_1_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_1_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_2_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "276.094",
                                  y1: "165.353",
                                  x2: "114.4743",
                                  y2: "219.2264"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_1_)",
                                fill: "url(#SVGID_2_)",
                                d:
                                  "M271.6,109.1C271.6,109.1,271.6,109.1,271.6,109.1\n                      c-0.1,1.4-3.4,69.7-118.4,71.6C37,182.6,20,270.3,26.6,304.2c0.3,1.3,0.4,2,0.4,2S7.6,206.1,152.5,205.6\n                      C278,199.4,271.6,109.1,271.6,109.1z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_3_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "276.094",
                          y1: "165.353",
                          x2: "114.4743",
                          y2: "219.2264"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#F9A558" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#F9A558" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_3_)",
                        d:
                          "M271.6,109.1C271.6,109.1,271.6,109.1,271.6,109.1c-0.1,1.4-3.4,69.7-118.4,71.6\n              C37,182.6,20,270.3,26.6,304.2c0.3,1.3,0.4,2,0.4,2S7.6,206.1,152.5,205.6C278,199.4,271.6,109.1,271.6,109.1z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#ED4296",
                    d:
                      "M271.6,105c0,0-30.4,26.1-123.6,5.1C44.1,99.3,8.9,177.3,13,225.8c0,0,15.2-95.7,143.6-62.1\n          C275.9,170.5,271.6,105,271.6,105z"
                  }
                }),
                _vm._v(" "),
                _c("defs", [
                  _c(
                    "filter",
                    {
                      attrs: {
                        id: "Adobe_OpacityMaskFilter_2_",
                        filterUnits: "userSpaceOnUse",
                        x: "12.9",
                        y: "105.8",
                        width: "258.6",
                        height: "119.2"
                      }
                    },
                    [
                      _c("feFlood", {
                        staticStyle: {
                          "flood-color": "white",
                          "flood-opacity": "1"
                        },
                        attrs: { result: "back" }
                      }),
                      _vm._v(" "),
                      _c("feBlend", {
                        attrs: {
                          in: "SourceGraphic",
                          in2: "back",
                          mode: "normal"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "mask",
                  {
                    attrs: {
                      maskUnits: "userSpaceOnUse",
                      x: "12.9",
                      y: "105.8",
                      width: "258.6",
                      height: "119.2",
                      id: "SVGID_4_"
                    }
                  },
                  [
                    _c(
                      "g",
                      { attrs: { filter: "url(#Adobe_OpacityMaskFilter_2_)" } },
                      [
                        _c("defs", [
                          _c(
                            "filter",
                            {
                              attrs: {
                                id: "Adobe_OpacityMaskFilter_3_",
                                filterUnits: "userSpaceOnUse",
                                x: "12.9",
                                y: "105.8",
                                width: "258.6",
                                height: "119.2"
                              }
                            },
                            [
                              _c("feFlood", {
                                staticStyle: {
                                  "flood-color": "white",
                                  "flood-opacity": "1"
                                },
                                attrs: { result: "back" }
                              }),
                              _vm._v(" "),
                              _c("feBlend", {
                                attrs: {
                                  in: "SourceGraphic",
                                  in2: "back",
                                  mode: "normal"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "mask",
                          {
                            attrs: {
                              maskUnits: "userSpaceOnUse",
                              x: "12.9",
                              y: "105.8",
                              width: "258.6",
                              height: "119.2",
                              id: "SVGID_4_"
                            }
                          },
                          [
                            _c("g", {
                              attrs: {
                                filter: "url(#Adobe_OpacityMaskFilter_3_)"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "linearGradient",
                          {
                            attrs: {
                              id: "SVGID_5_",
                              gradientUnits: "userSpaceOnUse",
                              x1: "12.8848",
                              y1: "165.3875",
                              x2: "271.5048",
                              y2: "165.3875"
                            }
                          },
                          [
                            _c("stop", {
                              staticStyle: { "stop-color": "#FFFFFF" },
                              attrs: { offset: "0" }
                            }),
                            _vm._v(" "),
                            _c("stop", {
                              staticStyle: { "stop-color": "#000000" },
                              attrs: { offset: "1" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            mask: "url(#SVGID_4_)",
                            fill: "url(#SVGID_5_)",
                            d:
                              "M156.4,162.9c108.3,6.2,114.8-47.2,115.1-57.1\n                  c-8.8,22.2-37.8,41.4-117.2,26.7C25,108.5,12.9,225,12.9,225S28.1,129.3,156.4,162.9z"
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "linearGradient",
                  {
                    attrs: {
                      id: "SVGID_6_",
                      gradientUnits: "userSpaceOnUse",
                      x1: "12.8848",
                      y1: "165.3875",
                      x2: "271.5048",
                      y2: "165.3875"
                    }
                  },
                  [
                    _c("stop", {
                      staticStyle: { "stop-color": "#EB62A3" },
                      attrs: { offset: "0" }
                    }),
                    _vm._v(" "),
                    _c("stop", {
                      staticStyle: { "stop-color": "#ED4296" },
                      attrs: { offset: "1" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "url(#SVGID_6_)",
                    d:
                      "M156.4,162.9c108.3,6.2,114.8-47.2,115.1-57.1c-8.8,22.2-37.8,41.4-117.2,26.7\n          C25,108.5,12.9,225,12.9,225S28.1,129.3,156.4,162.9z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#ED1C57",
                    d:
                      "M51.4,117.3c0,0,44.1-47.5,116.3-4.4c72.3,43.1,103.9-3.8,103.9-3.8s-16.5-63.4-121.2-58.3\n          C67.5,61.5,51.4,117.3,51.4,117.3z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#FFC834",
                    d:
                      "M25.7,237.1c0,0-11.1,84.6,36.4,141c0,0-23.1-26.9-10.8-79.2c16.8-51.7,70-58.9,99-56.7\n          c29,2.2,79.7-0.3,104.8-38.3c0,0-25.8,18.4-115.3-2.9c-89.5-21.2-105.3,6.7-105.3,6.7S27.3,224.1,25.7,237.1z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#36C5F3",
                    d:
                      "M219.4,259.1c0,0-60.1-66.1-137.6-3.6C21.9,323.6,93.5,393,116,394.3c0,0-26-42.5-0.9-98.6\n          C148.7,233.9,219.4,259.1,219.4,259.1z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#2CBAD2",
                    d:
                      "M171.5,272.9c0,0-39,67.8,27.3,102.7c67.8,27.6,108.1-36.8,108.1-36.8s-47.9,26.3-91.9-1.9\n          C170.8,308.7,171.5,272.9,171.5,272.9z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "linearGradient",
                  {
                    attrs: {
                      id: "SVGID_7_",
                      gradientUnits: "userSpaceOnUse",
                      x1: "150.395",
                      y1: "62.8493",
                      x2: "271.593",
                      y2: "62.8493"
                    }
                  },
                  [
                    _c("stop", {
                      staticStyle: { "stop-color": "#C14598" },
                      attrs: { offset: "0" }
                    }),
                    _vm._v(" "),
                    _c("stop", {
                      staticStyle: { "stop-color": "#634C9E" },
                      attrs: { offset: "1" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "url(#SVGID_7_)",
                    d:
                      "M153.4,10.3c0,0-21.5,55.4,50.4,70.9c71.9,15.5,66.6,34.2,66.6,34.2s13.9-43.4-52-65.3\n          C152.5,28.3,153.4,10.3,153.4,10.3z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  [
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_8_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "132.5471",
                          y1: "27.0817",
                          x2: "263.7497",
                          y2: "102.5073"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#C14598" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#58439A" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_8_)",
                        d:
                          "M155.6,50.6c6.5,12.5,20.3,24.6,48.3,30.6c51.5,11.1,63.4,23.9,66,30.2c0.9-1,1.4-1.7,1.7-2.1\n              c0-0.2,0-0.4,0.1-0.6C270,103.4,251.1,47.9,155.6,50.6z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "g",
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_4_",
                            filterUnits: "userSpaceOnUse",
                            x: "51.4",
                            y: "78.1",
                            width: "217.2",
                            height: "53"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "51.4",
                          y: "78.1",
                          width: "217.2",
                          height: "53",
                          id: "SVGID_9_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_4_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_5_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "51.4",
                                    y: "78.1",
                                    width: "217.2",
                                    height: "53"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "51.4",
                                  y: "78.1",
                                  width: "217.2",
                                  height: "53",
                                  id: "SVGID_9_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_5_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_10_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "51.3807",
                                  y1: "104.5617",
                                  x2: "268.5945",
                                  y2: "104.5617"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_9_)",
                                fill: "url(#SVGID_10_)",
                                d:
                                  "M167.7,112.8c59.5,35.5,91.5,9.9,100.9-0.2\n                      c-45.9,10.8-93.9-24.4-93.9-24.4c-86.6-34.2-123.3,29-123.3,29S95.4,69.7,167.7,112.8z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_11_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "51.3807",
                          y1: "104.5617",
                          x2: "268.5945",
                          y2: "104.5617"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#EE3E5D" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#ED235F" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_11_)",
                        d:
                          "M167.7,112.8c59.5,35.5,91.5,9.9,100.9-0.2c-45.9,10.8-93.9-24.4-93.9-24.4\n              c-86.6-34.2-123.3,29-123.3,29S95.4,69.7,167.7,112.8z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#E01860",
                      d:
                        "M270.6,105.8c-5.7,3.9-33.5,19.5-100,8.6c67.8,38.9,98.9-2.3,101-5.2c0-0.2,0-0.3,0-0.4\n              C271.5,108.3,271.1,107.2,270.6,105.8z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#FBB216",
                    d:
                      "M159.3,205.2c-6.1-1.2-12.6-2.6-19.4-4.2C53,180.4,35.5,206,34.6,207.6c-0.1,0.2-0.2,0.3-0.2,0.5\n          c-0.6,1.4-2.6,6.2-4.5,12.1c-1.8,5.6-3.1,11.3-4.1,17c0,0.3-2.9,22.3,0.6,51.3c2.1-28.8,20.1-82.4,126.1-82.8\n          C154.8,205.5,157.1,205.3,159.3,205.2z"
                  }
                }),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#EA3A94",
                      d:
                        "M131.8,148.7c-18.1,0.9-33.2,4.3-45.9,9.4c18.6-3,41.7-2,70.6,5.6c98.2,5.6,112.7-37.8,114.7-53.3\n              C269.4,116.5,254.5,142.3,131.8,148.7z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("g", [
                  _c("path", {
                    attrs: {
                      fill: "#49C7EF",
                      d:
                        "M92.4,277.8c-32.6,60.2,4.5,100.4,23.1,115.6c-3.4-6.1-23.5-46.2-0.5-97.7\n              c33.6-61.8,104.3-36.6,104.3-36.6S151.6,215.1,92.4,277.8z"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#4582C3",
                    d:
                      "M170.8,244.7c0,0-37.1,33.3-18.4,94.8c19,52,71.6,54.8,71.6,54.8s-68.8,24.4-106.8-30.7\n          C84.3,311.6,125.5,246.9,170.8,244.7z"
                  }
                }),
                _vm._v(" "),
                _c(
                  "g",
                  { attrs: { opacity: "0.7" } },
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_6_",
                            filterUnits: "userSpaceOnUse",
                            x: "105.4",
                            y: "244.7",
                            width: "118.7",
                            height: "154.9"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "105.4",
                          y: "244.7",
                          width: "118.7",
                          height: "154.9",
                          id: "SVGID_12_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_6_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_7_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "105.4",
                                    y: "244.7",
                                    width: "118.7",
                                    height: "154.9"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "105.4",
                                  y: "244.7",
                                  width: "118.7",
                                  height: "154.9",
                                  id: "SVGID_12_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_7_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_13_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "134.5093",
                                  y1: "430.5077",
                                  x2: "187.7457",
                                  y2: "291.0793"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_12_)",
                                fill: "url(#SVGID_13_)",
                                d:
                                  "M125.4,333.7c-3.8-70.4,45.5-89,45.5-89\n                      c-45.3,2.2-86.5,66.9-53.5,118.8c38,55.1,106.8,30.7,106.8,30.7C221.1,394.6,136,403.5,125.4,333.7z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_14_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "134.5093",
                          y1: "430.5077",
                          x2: "187.7457",
                          y2: "291.0793"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#2057A6" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#387CBF" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_14_)",
                        d:
                          "M125.4,333.7c-3.8-70.4,45.5-89,45.5-89c-45.3,2.2-86.5,66.9-53.5,118.8\n              c38,55.1,106.8,30.7,106.8,30.7C221.1,394.6,136,403.5,125.4,333.7z"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "g",
                  { attrs: { opacity: "0.5" } },
                  [
                    _c("defs", [
                      _c(
                        "filter",
                        {
                          attrs: {
                            id: "Adobe_OpacityMaskFilter_8_",
                            filterUnits: "userSpaceOnUse",
                            x: "169",
                            y: "273.1",
                            width: "137.5",
                            height: "91.4"
                          }
                        },
                        [
                          _c("feFlood", {
                            staticStyle: {
                              "flood-color": "white",
                              "flood-opacity": "1"
                            },
                            attrs: { result: "back" }
                          }),
                          _vm._v(" "),
                          _c("feBlend", {
                            attrs: {
                              in: "SourceGraphic",
                              in2: "back",
                              mode: "normal"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "mask",
                      {
                        attrs: {
                          maskUnits: "userSpaceOnUse",
                          x: "169",
                          y: "273.1",
                          width: "137.5",
                          height: "91.4",
                          id: "SVGID_15_"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              filter: "url(#Adobe_OpacityMaskFilter_8_)"
                            }
                          },
                          [
                            _c("defs", [
                              _c(
                                "filter",
                                {
                                  attrs: {
                                    id: "Adobe_OpacityMaskFilter_9_",
                                    filterUnits: "userSpaceOnUse",
                                    x: "169",
                                    y: "273.1",
                                    width: "137.5",
                                    height: "91.4"
                                  }
                                },
                                [
                                  _c("feFlood", {
                                    staticStyle: {
                                      "flood-color": "white",
                                      "flood-opacity": "1"
                                    },
                                    attrs: { result: "back" }
                                  }),
                                  _vm._v(" "),
                                  _c("feBlend", {
                                    attrs: {
                                      in: "SourceGraphic",
                                      in2: "back",
                                      mode: "normal"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "mask",
                              {
                                attrs: {
                                  maskUnits: "userSpaceOnUse",
                                  x: "169",
                                  y: "273.1",
                                  width: "137.5",
                                  height: "91.4",
                                  id: "SVGID_15_"
                                }
                              },
                              [
                                _c("g", {
                                  attrs: {
                                    filter: "url(#Adobe_OpacityMaskFilter_9_)"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "linearGradient",
                              {
                                attrs: {
                                  id: "SVGID_16_",
                                  gradientUnits: "userSpaceOnUse",
                                  x1: "305.3901",
                                  y1: "303.3961",
                                  x2: "142.285",
                                  y2: "329.5946"
                                }
                              },
                              [
                                _c("stop", {
                                  staticStyle: { "stop-color": "#FFFFFF" },
                                  attrs: { offset: "0" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  staticStyle: { "stop-color": "#000000" },
                                  attrs: { offset: "1" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                mask: "url(#SVGID_15_)",
                                fill: "url(#SVGID_16_)",
                                d:
                                  "M210.3,358c44.4,18.4,82.6-7.7,95.9-18.6c0.2-0.3,0.3-0.5,0.3-0.5\n                      s-47.8,26.3-91.9-1.9c-44.1-28.2-43.4-64-43.4-64S155.2,335.2,210.3,358z"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "linearGradient",
                      {
                        attrs: {
                          id: "SVGID_17_",
                          gradientUnits: "userSpaceOnUse",
                          x1: "305.3901",
                          y1: "303.3961",
                          x2: "142.285",
                          y2: "329.5946"
                        }
                      },
                      [
                        _c("stop", {
                          staticStyle: { "stop-color": "#70CCE2" },
                          attrs: { offset: "0" }
                        }),
                        _vm._v(" "),
                        _c("stop", {
                          staticStyle: { "stop-color": "#94D7EA" },
                          attrs: { offset: "1" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        fill: "url(#SVGID_17_)",
                        d:
                          "M210.3,358c44.4,18.4,82.6-7.7,95.9-18.6c0.2-0.3,0.3-0.5,0.3-0.5s-47.8,26.3-91.9-1.9\n              c-44.1-28.2-43.4-64-43.4-64S155.2,335.2,210.3,358z"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("g", { attrs: { id: "Name_1_" } }, [
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M397.3,318.1V110.8h97.1c39.4,0,59.1,16.1,59.1,48.3c0,23.6-12.8,40.4-38.6,50.6\n          c27.4,5.1,41.2,20.8,41.2,47.1c0,40.9-21.6,61.3-64.8,61.3H397.3z M489.7,284.8c17,0,25.5-8.7,25.5-26.1\n          c0-21.5-12.7-32.3-38.1-32.3h-11.6v-24.8c31.9-5.3,47.8-18.6,47.8-40c0-11.6-7.2-17.4-21.5-17.4h-56.2v140.6H489.7z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M600.1,317.8v-207h94.2c42.3,0,63.5,18.5,63.5,55.5c0,25-16.5,45.8-49.4,62.2l65.7,89.6h-48.4l-63.1-90.3\n          v-17.5c36.7-6.3,55.1-20.5,55.1-42.8c0-15.3-8.6-22.9-25.8-22.9h-52.6v173.2H600.1z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M819.2,318.1h-39.4l88-207.3h41.3l89.9,207.3h-41.3L934,261.6h-68.9l13.2-33.3h41.7l-32.6-77.8\n          L819.2,318.1z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M1170.3,110.8l-90.9,207.3h-41.3l-87-207.3h45.7l64.2,158.7l64.1-158.7H1170.3z"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  fill: "#FFFFFF",
                  d:
                    "M1332,110.8v33h-103.8v52.2h98.9v34.4h-99.3v54.4H1334v33.3h-143.9V110.8H1332z"
                }
              })
            ]),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g"),
            _vm._v(" "),
            _c("g")
          ])
        ]
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("h1", [_vm._v("Hello")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/AppLayout.vue?vue&type=template&id=c876a902&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/AppLayout.vue?vue&type=template&id=c876a902& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("portal-target", { attrs: { name: "dropdown", slim: "" } }),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-col" }, [
        _c(
          "div",
          {
            staticClass: "h-screen flex flex-col",
            on: { click: _vm.hideDropdownMenus }
          },
          [
            _c("div", { staticClass: "md:flex" }, [
              _c(
                "div",
                {
                  staticClass:
                    "bg-brave-graphite md:flex-no-shrink md:w-56 py-4 flex items-center justify-between md:justify-center"
                },
                [
                  _c(
                    "inertia-link",
                    { staticClass: "mt-1", attrs: { href: "/" } },
                    [
                      _c("logo", {
                        staticClass: "fill-white",
                        attrs: { width: "120", height: "28" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "dropdown",
                    {
                      staticClass: "md:hidden",
                      attrs: { placement: "bottom-end" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "fill-white w-6 h-6",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "mt-2 px-8 py-8 shadow-lg bg-indigo-darker rounded",
                          attrs: { slot: "dropdown" },
                          slot: "dropdown"
                        },
                        [_c("main-menu", { attrs: { url: _vm.url() } })],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "bg-white border-b w-full p-4 md:py-0 md:px-12 text-sm md:text-base flex justify-between items-center"
                },
                [
                  _c("div", { staticClass: "mt-1 mr-4" }, [
                    _vm._v(_vm._s(_vm.$page.auth.user.id))
                  ]),
                  _vm._v(" "),
                  _c(
                    "dropdown",
                    { staticClass: "mt-1", attrs: { placement: "bottom-end" } },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex items-center cursor-pointer select-none group"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "text-grey-darkest group-hover:text-indigo-dark focus:text-indigo-dark mr-1 whitespace-no-wrap"
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$page.auth.user.first_name))
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "hidden md:inline" }, [
                                _vm._v(_vm._s(_vm.$page.auth.user.last_name))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("icon", {
                            staticClass:
                              "w-5 h-5 group-hover:fill-indigo-dark fill-grey-darkest focus:fill-indigo-dark",
                            attrs: { name: "cheveron-down" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "mt-2 py-2 shadow-lg bg-white rounded text-sm",
                          attrs: { slot: "dropdown" },
                          slot: "dropdown"
                        },
                        [
                          _c(
                            "inertia-link",
                            {
                              staticClass:
                                "block px-6 py-2 hover:bg-indigo hover:text-white",
                              attrs: { href: _vm.route("users") }
                            },
                            [_vm._v("My Profile")]
                          ),
                          _vm._v(" "),
                          _c(
                            "inertia-link",
                            {
                              staticClass:
                                "block px-6 py-2 hover:bg-indigo hover:text-white",
                              attrs: { href: _vm.route("users") }
                            },
                            [_vm._v("Manage Users")]
                          ),
                          _vm._v(" "),
                          _c(
                            "inertia-link",
                            {
                              staticClass:
                                "block px-6 py-2 hover:bg-indigo hover:text-white",
                              attrs: {
                                href: _vm.route("logout"),
                                method: "post"
                              }
                            },
                            [_vm._v("Logout")]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex flex-grow overflow-hidden" },
              [
                _c("main-menu", {
                  staticClass:
                    "bg-brave-boulder flex-no-shrink py-5 w-56 hidden md:block overflow-y-auto",
                  attrs: { url: _vm.url() }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-full overflow-hidden px-4 py-8 md:p-12 overflow-y-auto",
                    attrs: { "scroll-region": "" }
                  },
                  [_c("flash-messages"), _vm._v(" "), _vm._t("default")],
                  2
                )
              ],
              1
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "mb-4" },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3 pl-6",
            attrs: { href: _vm.route("home") }
          },
          [
            _c("icon", {
              staticClass: "w-4 h-4 mr-2",
              class: _vm.isUrl("home")
                ? "fill-white"
                : "fill-current text-teal-light group-hover:text-white",
              attrs: { name: "dashboard" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                class: _vm.isUrl("home")
                  ? "text-white"
                  : "text-teal-light group-hover:text-white"
              },
              [_vm._v("Dashboard")]
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-4" },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3 pl-6",
            attrs: { href: _vm.route("accounts") }
          },
          [
            _c("icon", {
              staticClass: "w-4 h-4 mr-2",
              class: _vm.isUrl("organizations")
                ? "fill-white"
                : "fill-current text-teal-light group-hover:text-white",
              attrs: { name: "office" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                class: _vm.isUrl("organizations")
                  ? "text-white"
                  : "text-teal-light group-hover:text-white"
              },
              [_vm._v("Accounts")]
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-4" },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3 pl-6",
            attrs: { href: _vm.route("users") }
          },
          [
            _c("icon", {
              staticClass: "w-4 h-4 mr-2",
              class: _vm.isUrl("users")
                ? "fill-white"
                : "fill-current text-teal-light group-hover:text-white",
              attrs: { name: "users" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                class: _vm.isUrl("users")
                  ? "text-white"
                  : "text-teal-light group-hover:text-white"
              },
              [_vm._v("Users")]
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-4" },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3 pl-6",
            attrs: { href: _vm.route("reports") }
          },
          [
            _c("icon", {
              staticClass: "w-4 h-4 mr-2",
              class: _vm.isUrl("reports")
                ? "fill-white"
                : "fill-current text-teal-light group-hover:text-white",
              attrs: { name: "printer" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                class: _vm.isUrl("reports")
                  ? "text-white"
                  : "text-teal-light group-hover:text-white"
              },
              [_vm._v("Reports")]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/Dropdown.vue":
/*!**********************************************!*\
  !*** ./resources/js/Components/Dropdown.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=4210c0dc& */ "./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Components/Dropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=template&id=4210c0dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/FlashMessages.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/FlashMessages.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlashMessages_vue_vue_type_template_id_49ef8721___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessages.vue?vue&type=template&id=49ef8721& */ "./resources/js/Components/FlashMessages.vue?vue&type=template&id=49ef8721&");
/* harmony import */ var _FlashMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessages.vue?vue&type=script&lang=js& */ "./resources/js/Components/FlashMessages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlashMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashMessages_vue_vue_type_template_id_49ef8721___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlashMessages_vue_vue_type_template_id_49ef8721___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/FlashMessages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/FlashMessages.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/FlashMessages.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/FlashMessages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/FlashMessages.vue?vue&type=template&id=49ef8721&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/FlashMessages.vue?vue&type=template&id=49ef8721& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessages_vue_vue_type_template_id_49ef8721___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessages.vue?vue&type=template&id=49ef8721& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/FlashMessages.vue?vue&type=template&id=49ef8721&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessages_vue_vue_type_template_id_49ef8721___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessages_vue_vue_type_template_id_49ef8721___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Icon.vue":
/*!******************************************!*\
  !*** ./resources/js/Components/Icon.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon_vue_vue_type_template_id_7b50d278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon.vue?vue&type=template&id=7b50d278& */ "./resources/js/Components/Icon.vue?vue&type=template&id=7b50d278&");
/* harmony import */ var _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.vue?vue&type=script&lang=js& */ "./resources/js/Components/Icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icon_vue_vue_type_template_id_7b50d278___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icon_vue_vue_type_template_id_7b50d278___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Icon.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Icon.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Icon.vue?vue&type=template&id=7b50d278&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Icon.vue?vue&type=template&id=7b50d278& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_7b50d278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=template&id=7b50d278& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Icon.vue?vue&type=template&id=7b50d278&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_7b50d278___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_7b50d278___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Logo.vue":
/*!******************************************!*\
  !*** ./resources/js/Components/Logo.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=672d36f6& */ "./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./resources/js/Components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Logo.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Logo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=672d36f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b& */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=097ba13b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/AppLayout.vue":
/*!*******************************************!*\
  !*** ./resources/js/Shared/AppLayout.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLayout_vue_vue_type_template_id_c876a902___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=c876a902& */ "./resources/js/Shared/AppLayout.vue?vue&type=template&id=c876a902&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_c876a902___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLayout_vue_vue_type_template_id_c876a902___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/AppLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/AppLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/AppLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/AppLayout.vue?vue&type=template&id=c876a902&":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/AppLayout.vue?vue&type=template&id=c876a902& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_c876a902___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=template&id=c876a902& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/AppLayout.vue?vue&type=template&id=c876a902&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_c876a902___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_c876a902___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/MainMenu.vue":
/*!******************************************!*\
  !*** ./resources/js/Shared/MainMenu.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=template&id=fb328fd8& */ "./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8&");
/* harmony import */ var _MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=script&lang=js& */ "./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/MainMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MainMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MainMenu.vue?vue&type=template&id=fb328fd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);