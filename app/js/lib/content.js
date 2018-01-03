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

export {ContentInstance}
'use strict';


class ContentInstance{
	
	constructor(strDataLocation)
	{
		this.thing = "Andy";
		this.objContent = {};
		this.arrOnReady = new Array();
		this.blReady = false;
		this.strDataLocation = strDataLocation;
		
		$.getJSON(this.strDataLocation, this.receivedJSON.bind(this));
	}
	
	receivedJSON( objResponse )
	{
		this.objContent = objResponse;
		this.blReady = true;

		$.each( this.arrOnReady, function( intIndex, funDoOnReady ) 
		{
			funDoOnReady.call();
		});
	}
	
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
	
	requestContent(intItem)
	{
		return this.objContent[intItem];
	}
	
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