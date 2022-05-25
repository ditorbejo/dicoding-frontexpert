(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CONFIG = {
  KEY: 'YOUR_API_KEY',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/large/',
  BASE_IMAGE_URL_SM: 'https://restaurant-api.dicoding.dev/images/small/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-recommended-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
  WEB_SOCKET_SERVER: 'wss://javascript.info/article/websocket/chat/ws'
};
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var RestaurantDbSource = /*#__PURE__*/function () {
  function RestaurantDbSource() {
    _classCallCheck(this, RestaurantDbSource);
  }

  _createClass(RestaurantDbSource, null, [{
    key: "listRestaurants",
    value: function () {
      var _listRestaurants = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LIST_RESTAURANT);

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response.json());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function listRestaurants() {
        return _listRestaurants.apply(this, arguments);
      }

      return listRestaurants;
    }()
  }, {
    key: "detailRestaurant",
    value: function () {
      var _detailRestaurant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DETAIL(id));

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", response.json());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function detailRestaurant(_x) {
        return _detailRestaurant.apply(this, arguments);
      }

      return detailRestaurant;
    }()
  }, {
    key: "searchRestaurant",
    value: function () {
      var _searchRestaurant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].LIST_RESTAURANT);

              case 2:
                response = _context3.sent;
                responseJson = response.json();
                return _context3.abrupt("return", responseJson);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function searchRestaurant() {
        return _searchRestaurant.apply(this, arguments);
      }

      return searchRestaurant;
    }()
  }]);

  return RestaurantDbSource;
}();

/* harmony default export */ __webpack_exports__["a"] = (RestaurantDbSource);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var API_ENDPOINT = {
  LIST_RESTAURANT: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_URL, "list"),
  DETAIL: function DETAIL(id) {
    return "".concat(_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_URL, "detail/").concat(id);
  },
  POST_REVIEW: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_URL, "review"),
  SEARCH_RESTAURANT: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_URL, "search?q=")
};
/* harmony default export */ __webpack_exports__["a"] = (API_ENDPOINT);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (UrlParser);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var DATABASE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_NAME,
    DATABASE_VERSION = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_VERSION,
    OBJECT_STORE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].OBJECT_STORE_NAME;
var dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_0__[/* openDB */ "a"])(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavoriteRestaurantIdb = {
  getRestaurant: function getRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return dbPromise;

            case 4:
              return _context.abrupt("return", _context.sent.get(OBJECT_STORE_NAME, id));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllRestaurants: function getAllRestaurants() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putRestaurant: function putRestaurant(restaurant) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (restaurant.hasOwnProperty('id')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return dbPromise;

            case 4:
              return _context3.abrupt("return", _context3.sent.put(OBJECT_STORE_NAME, restaurant));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  deleteRestaurant: function deleteRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent["delete"](OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FavoriteRestaurantIdb);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "4708daf73a75ef8b401790dccf0d8e73.jpg");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "bd6b63650298f334a08b66446d66c536.jpg");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var button = _ref.button,
        drawer = _ref.drawer;
    button.addEventListener('click', function (event) {
      _this._toggleDrawer(event, drawer);
    });
    drawer.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
  _closeDrawer: function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (DrawerInitiator);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _views_pages_list_restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _views_pages_like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);



var routes = {
  '/': _views_pages_list_restaurant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  // default page
  '/list': _views_pages_list_restaurant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  '/favorite': _views_pages_like__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "85b8a21463a3feabf263dc827fc00732.jpg");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "414391c73b4b139cd260f10e881a0bb8.jpg");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "2acf1b82611f67410f7f43e456940e5a.jpg");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "a453ffcce8f0723edb9c5919ab0c1d98.jpg");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "ae100740754e9ff8755b58049351fae0.jpg");

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var LikeButtonPresenter = {
  init: function init(_ref) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, favoriteRestaurants, restaurant;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, favoriteRestaurants = _ref.favoriteRestaurants, restaurant = _ref.restaurant;
              _this._likeButtonContainer = likeButtonContainer;
              _this._restaurant = restaurant;
              _this._favoriteRestaurants = favoriteRestaurants;
              _context.next = 6;
              return _this._renderButton();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._restaurant.id;
              _context2.next = 3;
              return _this2._isRestaurantExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderLiked();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLike();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _isRestaurantExist: function _isRestaurantExist(id) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var restaurant;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3._favoriteRestaurants.getRestaurant(id);

            case 2:
              restaurant = _context3.sent;
              return _context3.abrupt("return", !!restaurant);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLike: function _renderLike() {
    var _this4 = this;

    this._likeButtonContainer.innerHTML = Object(_views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createLikeButtonElement */ "b"])();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4._favoriteRestaurants.putRestaurant(_this4._restaurant);

            case 2:
              _this4._renderButton();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  },
  _renderLiked: function _renderLiked() {
    var _this5 = this;

    this._likeButtonContainer.innerHTML = Object(_views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createUnlikeButtonElement */ "e"])();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5._favoriteRestaurants.deleteRestaurant(_this5._restaurant.id);

            case 2:
              _this5._renderButton();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (LikeButtonPresenter);

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(24);

// EXTERNAL MODULE: ./src/styles/main.css
var main = __webpack_require__(25);

// EXTERNAL MODULE: ./src/styles/main.scss
var styles_main = __webpack_require__(26);

// CONCATENATED MODULE: ./src/scripts/utils/notification-helper.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var NotificationHelper = {
  sendNotification: function sendNotification(_ref) {
    var title = _ref.title,
        options = _ref.options;

    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');

      this._requestPermission();

      return;
    }

    this._showNotification({
      title: title,
      options: options
    });
  },
  _checkAvailability: function _checkAvailability() {
    return !!('Notification' in window);
  },
  _checkPermission: function _checkPermission() {
    return Notification.permission === 'granted';
  },
  _requestPermission: function _requestPermission() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var status;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Notification.requestPermission();

            case 2:
              status = _context.sent;

              if (status === 'denied') {
                console.log('Notification Denied');
              }

              if (status === 'default') {
                console.log('Permission closed');
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _showNotification: function _showNotification(_ref2) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var title, options, serviceWorkerRegistration;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              title = _ref2.title, options = _ref2.options;
              _context2.next = 3;
              return navigator.serviceWorker.ready;

            case 3:
              serviceWorkerRegistration = _context2.sent;
              serviceWorkerRegistration.showNotification(title, options);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var notification_helper = (NotificationHelper);
// EXTERNAL MODULE: ./src/scripts/globals/config.js
var config = __webpack_require__(0);

// CONCATENATED MODULE: ./src/scripts/utils/web-socket-initiator.js


var WebSocketInitiator = {
  init: function init(url) {
    var webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },
  _onMessageHandler: function _onMessageHandler(message) {
    var restaurant = JSON.parse(message.data);
    notification_helper.sendNotification({
      name: "".concat(restaurant.name, " is on Kenyang Apps!"),
      options: {
        body: restaurant.description,
        image: "".concat(config["a" /* default */].BASE_IMAGE_URL + restaurant.pictureId)
      }
    });
  }
};
/* harmony default export */ var web_socket_initiator = (WebSocketInitiator);
// EXTERNAL MODULE: ./src/scripts/views/app.js
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/serviceworker-webpack-plugin/lib/runtime.js
var lib_runtime = __webpack_require__(22);
var lib_runtime_default = /*#__PURE__*/__webpack_require__.n(lib_runtime);

// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function sw_register_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var swRegister = /*#__PURE__*/function () {
  var _ref = sw_register_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('serviceWorker' in navigator)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return lib_runtime_default.a.register();

          case 3:
            return _context.abrupt("return");

          case 4:
            console.log('Service worker not supported in this browser');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var sw_register = (swRegister);
// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(27);

// CONCATENATED MODULE: ./src/scripts/index.js
/* eslint-disable no-use-before-define */

/* for async await transpile */









var scripts_app = new app["a" /* default */]({
  button: document.querySelector('.hamburger-button'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent')
});
window.addEventListener('hashchange', function () {
  scripts_app.renderPage();
});
window.addEventListener('load', function () {
  scripts_app.renderPage();
  sw_register();
  web_socket_initiator.init(config["a" /* default */].WEB_SOCKET_SERVER);
});
var skipContent = document.querySelector('.skip-link');
var detailContent = document.getElementById('maincontent');

skipContent.onclick = function (e) {
  e.preventDefault();
  console.log(detailContent);
  detailContent.focus();
};

/***/ })
]]);