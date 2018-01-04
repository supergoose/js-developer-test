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
//# sourceMappingURL=content.js.map
