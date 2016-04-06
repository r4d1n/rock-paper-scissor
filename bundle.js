/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Player = __webpack_require__(2);

	var _Adversary = __webpack_require__(3);

	var _Scoreboard = __webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6); // styles bundled with webpack

	// classes imported from modules


	// objects instantiated from classes
	var human = new _Player.Player();
	var pc = new _Adversary.Adversary();
	var scoreboard = new _Scoreboard.Scoreboard(human, pc);

	// DOM elements array-like
	var buttons = document.querySelectorAll('#button-container > button');

	function bindEvents() {
	  // a little contrived but it's cool that it can be done this way
	  var btnArr = Array.from(buttons, function (btn) {
	    return btn.addEventListener('click', function (e) {
	      scoreboard.hideResult();
	      scoreboard.matchup(e.target.dataset.pick, pc.play()); // human answer, pc answer
	    });
	  });
	}

	document.addEventListener('DOMContentLoaded', bindEvents);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Player = exports.Player = function () {
	  function Player() {
	    _classCallCheck(this, Player);

	    this.__score = 0;
	  }

	  _createClass(Player, [{
	    key: "score",
	    set: function set(s) {
	      this.__score = s;
	    },
	    get: function get() {
	      return this.__score;
	    }
	  }]);

	  return Player;
	}();

	// console.log('Player class type =', typeof Player)
	// console.log('Player instance type =', typeof new Player())
	// console.log(typeof Player.prototype)

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Adversary = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Player2 = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var choices = ['rock', 'paper', 'scissor'];

	var Adversary = exports.Adversary = function (_Player) {
	  _inherits(Adversary, _Player);

	  function Adversary() {
	    _classCallCheck(this, Adversary);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Adversary).apply(this, arguments));
	  }

	  _createClass(Adversary, [{
	    key: 'play',
	    value: function play() {
	      var i = Math.floor(Math.random() * 3);
	      return choices[i];
	    }
	  }]);

	  return Adversary;
	}(_Player2.Player);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Scoreboard = exports.Scoreboard = function () {
	  function Scoreboard(p1, p2) {
	    _classCallCheck(this, Scoreboard);

	    this.__round = 1;
	    this.__player1 = p1; // human
	    this.__player2 = p2; // pc
	    this.__p1Indicator = document.querySelector('.p1.indicator > h3 > span.score');
	    this.__p2Indicator = document.querySelector('.p2.indicator > h3 > span.score');
	    // this.__roundIndicator = document.querySelector('.round.indicator > span.counter')

	    // Map winning key to value it defeats
	    this.winMap = new Map();
	    this.winMap.set('rock', 'scissor');
	    this.winMap.set('paper', 'rock');
	    this.winMap.set('scissor', 'paper');

	    // console.log(this.winMap.size)
	    // console.log(this.winMap.has('scissor'))
	    //
	    // for (let entry of this.winMap) {
	    //   console.log(entry)
	    // }
	  }

	  _createClass(Scoreboard, [{
	    key: 'matchup',
	    value: function matchup(humanAnswer, machineAnswer) {
	      var _this = this;

	      console.log(humanAnswer, machineAnswer);

	      if (this.winMap.get(humanAnswer) === machineAnswer) {
	        this.p1Score++;
	        this.toastResult('win', humanAnswer, machineAnswer);
	      }

	      if (this.winMap.get(machineAnswer) === humanAnswer) {
	        this.p2Score++;
	        this.toastResult('lose', humanAnswer, machineAnswer);
	      }

	      if (humanAnswer === machineAnswer) {
	        // this is a tie
	        this.toastResult('draw', humanAnswer, machineAnswer);
	      }

	      if (this.p1Score + this.p2Score > 2) {
	        (function () {
	          _this.updateUI();
	          var result = _this.p1Score > _this.p2Score ? 'Are Victorious' : 'Have Been Defeated';
	          setTimeout(function () {
	            alert('You ' + result + '!');
	            _this.resetGame();
	          }, 250);
	        })();
	      } else {
	        this.nextRound();
	        this.updateUI();
	      }
	    }
	  }, {
	    key: 'toastResult',
	    value: function toastResult(result, choice1, choice2) {
	      // result can be win, lose, or draw
	      var feedback = document.querySelector('.feedback');

	      if (feedback && result === 'win') {
	        feedback.querySelector('h3').innerHTML = '<span class=\'human\'>' + choice1 + '</span> <br/> beats <br/> <span class=\'machine\'>' + choice2 + '</span>';
	        feedback.classList.toggle('visible');
	      }

	      if (feedback && result === 'lose') {
	        feedback.querySelector('h3').innerHTML = '<span class=\'machine\'>' + choice1 + '</span> <br/> beats <br/> <span class=\'human\'>' + choice2 + '</span>';
	        feedback.classList.toggle('visible');
	      }

	      if (feedback && result === 'draw') {
	        feedback.querySelector('h3').innerHTML = '<span class=\'human\'>' + choice1 + '</span> <br/> draws <br/> <span class=\'machine\'>' + choice2 + '</span>';
	        feedback.classList.toggle('visible');
	      }
	    }
	  }, {
	    key: 'hideResult',
	    value: function hideResult() {
	      var feedbackDivs = document.querySelectorAll('.feedback');
	      // console.log('feedback divs', feedbackDivs.toString()) // not a real array
	      Array.from(feedbackDivs, function (el) {
	        if ([].concat(_toConsumableArray(el.classList)).includes('visible')) {
	          // same thing, also not a real array
	          el.classList.remove('visible');
	        }
	      });
	    }
	  }, {
	    key: 'nextRound',
	    value: function nextRound() {
	      this.round = this.round + 1;
	    }
	  }, {
	    key: 'updateUI',
	    value: function updateUI() {
	      this.__p1Indicator.innerText = this.__player1.score;
	      this.__p2Indicator.innerText = this.__player2.score;
	      // this.__roundIndicator.innerText = this.round
	    }
	  }, {
	    key: 'resetGame',
	    value: function resetGame() {
	      this.hideResult();
	      this.p1Score = 0;
	      this.p2Score = 0;
	      this.round = 1;
	      this.updateUI();
	    }

	    // getters and setters

	  }, {
	    key: 'round',
	    get: function get() {
	      return this.__round;
	    },
	    set: function set(int) {
	      this.__round = int;
	    }
	  }, {
	    key: 'p1Score',
	    get: function get() {
	      return this.__player1.score;
	    },
	    set: function set(int) {
	      this.__player1.score = int;
	    }
	  }, {
	    key: 'p2Score',
	    get: function get() {
	      return this.__player2.score;
	    },
	    set: function set(int) {
	      this.__player2.score = int;
	    }
	  }]);

	  return Scoreboard;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	module.exports = function () {
	  // Array Methods and related operators

	  // spread lets us work with arrays and array-likes more conveniently
	  var strings = ['foo', 'bar', 'baz'];
	  var ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	  var both = [].concat(strings, ints);

	  // console.log(...strings)
	  //
	  // console.log(both)
	  // console.log(Array.isArray(both))

	  // destructuring is low hanging fruit but can be confusing at times
	  // {
	  //   let [a,b] = ints
	  //   let [,,,,,,x,y] = ints
	  //   let [m,n] = both
	  //
	  //   console.log('a and b', a,b)
	  //
	  //   console.log('x and y', x,y)
	  //   console.log('m and n', m,n)
	  // }

	  // {
	  //   // sets are nice
	  //   const set = new Set()
	  //   set.add(2)
	  //   set.add(1)
	  //   set.add(8)
	  //   set.add(7)
	  //   set.add(8)
	  //   set.add(8)
	  //   set.add(8)
	  //   set.add(8)
	  //
	  //   // map() vs Array.from() with array like objects or iterables
	  //   const squared1 = Array.prototype.map.call(set, n => n * n).sort((a, b) => a - b)
	  //
	  //   const squared2 = Array.from(set, n => n * n).sort((a, b) => a - b) // parens needed with two arguments
	  //
	  //   // for of loop works on arrays and other iterables
	  //   for (let m of set) {
	  //     console.log('original', m)
	  //   }
	  //
	  //   for (let n of squared2) {
	  //     console.log('squared', n)
	  //   }
	  // }

	  // .findIndex() and .find()
	  var foundAt = [1, 2, 3, 4].findIndex(function (item) {
	    return item > 2;
	  }); // 2
	  var foundItem = [1, 2, 3, 4].find(function (item) {
	    return item > 2;
	  }); // 3

	  // .of()
	  // console.log("Array.of", Array.of(2, 3)) // [2,3]
	  //
	  // console.log(new Array(2), Array.of(2))

	  {

	    // [].fill(item, start, end)
	    var whales = new Array(5);
	    console.log('pre fill', whales);

	    whales.fill("whale");

	    console.log('post fill', whales);

	    // iterating over entries, keys, values

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = whales.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _step$value = _slicedToArray(_step.value, 2);

	        var index = _step$value[0];
	        var element = _step$value[1];

	        console.log('index', index, 'element', element);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = whales.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var key = _step2.value;

	        console.log('key', key);
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	      for (var _iterator3 = whales.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var val = _step3.value;

	        console.log('val', val);
	      }
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }
	  }
	}();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbody {\n  font-family: 'helvetica', sans-serif;\n  color: #000; }\n\ndiv.rps {\n  width: 100%;\n  height: 100%; }\n  div.rps h1 {\n    width: 75%;\n    text-align: center;\n    font-size: 2.5em;\n    color: #000;\n    text-transform: uppercase;\n    margin: 20px auto; }\n  div.rps h2 {\n    width: 75%;\n    text-align: center;\n    font-size: 1.5em;\n    color: #000;\n    margin: 20px auto; }\n\ndiv.score {\n  box-sizing: border-box;\n  position: relative;\n  width: 75%;\n  height: 125px;\n  margin: 0 auto;\n  padding: 10px 0px;\n  font-weight: bold; }\n  div.score .indicator {\n    position: absolute;\n    padding-bottom: 15px; }\n    div.score .indicator h3 {\n      font-size: 1.5em; }\n    div.score .indicator.p1 {\n      left: 0px;\n      top: 0px;\n      color: #96ceb4; }\n      div.score .indicator.p1 h3 {\n        text-align: left; }\n    div.score .indicator.p2 {\n      right: 0px;\n      top: 0px;\n      color: #ff6f69; }\n\ndiv.feedback {\n  width: 40%;\n  height: 100%;\n  position: relative;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0; }\n  div.feedback.visible {\n    opacity: 1;\n    transition: opacity .5s; }\n  div.feedback h3 {\n    font-size: 2em;\n    text-transform: uppercase;\n    text-align: left; }\n  div.feedback span.human {\n    color: #96ceb4; }\n  div.feedback span.machine {\n    color: #ff6f69; }\n  div.feedback span.draw {\n    color: #ffcc5c; }\n\ndiv#button-container {\n  margin: 20px auto;\n  width: 75%; }\n  div#button-container button {\n    color: inherit;\n    height: 75px;\n    width: 100%;\n    margin: 15px 0;\n    font-weight: bold;\n    font-size: 2em;\n    border-radius: 5px;\n    border: 5px solid #000;\n    background-color: #fff;\n    text-align: center; }\n    div#button-container button:hover {\n      color: #ffcc5c;\n      border-color: #ffcc5c; }\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);