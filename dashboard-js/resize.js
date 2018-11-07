// MENG 2018: Sameerul
// This JS file resizes the element which is in dropzone upon doubleclicking 
// Doublt Tap triggers this method set its element to its original Width and heigh
interact(".resize-drag")
	.on('doubletap', function (event) {
        var draggableElement = event.relatedTarget;

		var id = event.target.id;
        var yPos =  $ (document.getElementById(id)).offset().top - $('#inner-dropzone').offset().top;
        // Get x position of the element from the dropzone
        var xPos =  $ (document.getElementById(id)).offset().left - $('#inner-dropzone').offset().left; 
    	// alert(event.target.id);
                if (id =='clock2'){
                    // this function loads the element passing yPos and xPos (Variable which loads and places the element correctly inside the dropzone)
                    loadClock(yPos,xPos,draggableElement);      
                }      
                if (id== "welcomeText2"){
                    loadWelcomeText(yPos,xPos,draggableElement);        
                }
                if (id== "digitalClock2"){
                    loadDigitalClock(yPos,xPos,draggableElement);       
                }
                if (id== "notification2"){
                    loadNotification(yPos,xPos,draggableElement);       
                }
                if (id== "timelineButton2"){
                    loadTimelineButton(yPos,xPos,draggableElement);
                }
                if (id== "conditionButton2"){
                    loadConditionButton(yPos,xPos,draggableElement);
                }
                if (id== "locationButton2"){
                    loadLocationButton(yPos,xPos,draggableElement);
                }
                if (id== "teamButton2"){
                    loadTeamButton(yPos,xPos,draggableElement);
                }
	});