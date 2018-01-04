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
export default

class ContentInstance{
	
	/**
	 * Runs to create an instance of the class. Begins process of retrieving JSON.
	 **/
	constructor(strDataLocation)
	{
		this.thing = "Andy";
		this.objContent = {};
		this.arrOnReady = new Array();
		this.blReady = false;
		this.strDataLocation = strDataLocation;
		
		$.getJSON(this.strDataLocation, this.receivedJSON.bind(this));
	}
	
	/**
	 * Called when we have loaded our content json.
	 **/
	receivedJSON( objResponse )
	{
		this.objContent = objResponse;
		this.blReady = true;

		$.each( this.arrOnReady, function( intIndex, funDoOnReady ) 
		{
			funDoOnReady.call();
		});
	}
	
	/**
	 * Called to either execute a function when page has loaded, or to push a function to a stack to be executed when the page finishes loading.
	 **/
	onReady(funDoOnReady)
	{
		console.log("On Ready");
		if(this.blReady)
		{
			funDoOnReady.call();
		}else{
			this.arrOnReady.push(funDoOnReady);
		}
	}
	
	/**
	 * Call with a string ID to ascertain data from JSON.
	 **/
	requestContent(intItem)
	{
		return this.objContent[intItem];
	}
	
	/**
	 * Call when page is ready to be populated. Inserts content into HTML.
	 **/
	populateHTML(sectionId)
	{
		try{
			var strSource = $( '#'+sectionId+'-template' ).html(),
					resTemplate = Handlebars.compile( strSource ),
					strHTML = resTemplate( this.requestContent( sectionId ) );
					
			$( '#'+sectionId ).html( strHTML );
			
			console.log("Applying: " + strHTML);
			
		}catch(err){
			console.warn("Error populating '" + sectionId + "': " + err);
		}
	}
	
}