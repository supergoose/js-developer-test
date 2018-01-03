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

import {ContentInstance} from '/app/js/lib/content.js';

jQuery(
		function( $ ) {
			/**
			 * A new instance of the content parser using the content JSON file
			 */
			var resContent = new ContentInstance( 'app/data/content.json' );
			
			var sections = [
							'header', 
							'tasks', 
							'about-me', 
							'content', 
							'documentation'];

			/**
			 * Register a Handlebars helper for the difficulty stars
			 */
			Handlebars.registerHelper( 'difficulty',
					function( intStars ) {
						var strHTMLStarsOut = '';

						for( var intStar = 0; intStar < intStars; intStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star"></i>';
						}

						for( var intBlankStar = intStars; intBlankStar < 5; intBlankStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star-o"></i>';
						}

						return strHTMLStarsOut;
					}
			);

			/**
			 * When the content file is ready, actually populate the content
			 */
			resContent.onReady(
					function() {
						for(var i in sections)
						{
							console.log("Populate HTML");
							resContent.populateHTML(sections[i]);
						}
					}
			);
		}
);

/**
 * Runs when the user clicks one of the "About Me" section tabs
 */
var onTabClick = function(evt, tagToShow)
{
	
	var aboutElementsArr = document.getElementsByClassName("about-content");
	for(var i in aboutElementsArr)
	{
		aboutElementsArr[i].className = "about-content";
	}
	
	var elem = document.getElementsByTagName(tagToShow)[0];
	elem.className += " active";
	
	var tabContainer = document.getElementsByClassName("tabs")[0];
	var tabsArray = tabContainer.getElementsByTagName("li");
	for(var i in tabsArray)
	{
		tabsArray[i].className = "";
	}
	evt.target.parentNode.className += " current";
	
}