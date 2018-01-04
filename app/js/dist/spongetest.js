(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 =====================================================

   _____                                _    _ _  __
  / ____|                              | |  | | |/ /
 | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /
  \___ \| '_ \ / _ \| '_ \ / _` |/ _ \ | |  | |  <
  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \
 |_____/| .__/ \___/|_| |_|\__, |\___|  \____/|_|\_\
        | |                 __/ |
        |_|                |___/

 =====================================================
 SPONGE UK DEVELOPER TEST
 JSON parser and event handler
 =====================================================
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentInstance = function () {
	function ContentInstance(strDataLocation) {
		_classCallCheck(this, ContentInstance);

		this.thing = "Andy";
		this.objContent = {};
		this.arrOnReady = new Array();
		this.blReady = false;
		this.strDataLocation = strDataLocation;

		$.getJSON(this.strDataLocation, this.receivedJSON.bind(this));
	}

	_createClass(ContentInstance, [{
		key: "receivedJSON",
		value: function receivedJSON(objResponse) {
			this.objContent = objResponse;
			this.blReady = true;

			$.each(this.arrOnReady, function (intIndex, funDoOnReady) {
				funDoOnReady.call();
			});
		}
	}, {
		key: "onReady",
		value: function onReady(funDoOnReady) {
			console.log("On Ready");
			if (this.blReady) {
				funDoOnReady.call();
			} else {
				this.arrOnReady.push(funDoOnReady);
			}
		}
	}, {
		key: "requestContent",
		value: function requestContent(intItem) {
			return this.objContent[intItem];
		}
	}, {
		key: "populateHTML",
		value: function populateHTML(sectionId) {
			try {
				var strSource = $('#' + sectionId + '-template').html(),
				    resTemplate = Handlebars.compile(strSource),
				    strHTML = resTemplate(this.requestContent(sectionId));

				$('#' + sectionId).html(strHTML);

				console.log("Applying: " + strHTML);
			} catch (err) {
				console.warn("Error populating '" + sectionId + "': " + err);
			}
		}
	}]);

	return ContentInstance;
}();

exports.default = ContentInstance;


},{}],2:[function(require,module,exports){
'use strict';

var _content = require('./lib/content.js');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jQuery(function ($) {
	/**
  * A new instance of the content parser using the content JSON file
  */
	var resContent = new _content2.default('app/data/content.json');

	var sections = ['header', 'tasks', 'about-me', 'content', 'documentation'];

	/**
  * Register a Handlebars helper for the difficulty stars
  */
	Handlebars.registerHelper('difficulty', function (intStars) {
		var strHTMLStarsOut = '';

		for (var intStar = 0; intStar < intStars; intStar++) {
			strHTMLStarsOut += '<i class="fa fa-star"></i>';
		}

		for (var intBlankStar = intStars; intBlankStar < 5; intBlankStar++) {
			strHTMLStarsOut += '<i class="fa fa-star-o"></i>';
		}

		return strHTMLStarsOut;
	});

	/**
  * When the content file is ready, actually populate the content
  */
	resContent.onReady(function () {
		for (var i in sections) {
			console.log("Populate HTML");
			resContent.populateHTML(sections[i]);
		}
	});
});

/**
 * Runs when the user clicks one of the "About Me" section tabs
 */
/*
 =====================================================

   _____                                _    _ _  __
  / ____|                              | |  | | |/ /
 | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /
  \___ \| '_ \ / _ \| '_ \ / _` |/ _ \ | |  | |  <
  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \
 |_____/| .__/ \___/|_| |_|\__, |\___|  \____/|_|\_\
        | |                 __/ |
        |_|                |___/

=====================================================
 SPONGE UK DEVELOPER TEST
 Page-specific JS
=====================================================
*/

var onTabClick = function onTabClick(evt, tagToShow) {

	var aboutElementsArr = document.getElementsByClassName("about-content");
	for (var i in aboutElementsArr) {
		aboutElementsArr[i].className = "about-content";
	}

	var elem = document.getElementsByTagName(tagToShow)[0];
	elem.className += " active";

	var tabContainer = document.getElementsByClassName("tabs")[0];
	var tabsArray = tabContainer.getElementsByTagName("li");
	for (var i in tabsArray) {
		tabsArray[i].className = "";
	}
	evt.target.parentNode.className += " current";
};


},{"./lib/content.js":1}]},{},[2]);
