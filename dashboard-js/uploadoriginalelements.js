// MENG 2018: Sameerul
// This JS file contains all function which updates the widgetpanel upon dragging an element away  from Dropzone. 
// Functions to upload the original html content for each widget once the widget is dragged out of dropzone
function uploadOriginalClock(width,draggableElement) {
	// Delete the element from DOM
	$( "#clock2" ).remove();
	// adds a small animation effect to keep UI smooth
	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
		// Append the dragged element to the widgetPanel (Append adds the element the Div as a child.)
		$( ".widgetPanel" ).append( '<div id="clock" class="draggable drag-drop panel panel-default" style="background-color: lightblue;">\
											<div class="panel-heading">\
												<h3 \class="panel-title">Clock</h3>\
											</div>\
											<div class="panel-body">\
												<p>Analogue Clock</p>\
											</div>\
										</div>');
	});	
}

function uploadOriginalTimelineWidget (width,draggableElement){
	$( "#timelineWidget2" ).remove();
	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	    $( ".widgetPanel" ).append('<div id="timelineWidget" class="draggable drag-drop myCondition panel panel-default">\
											<div class="panel-heading">\
												<h3 class="panel-title">Timeline Widget</h3>\
											</div>\
											<div class="panel-body">\
												<p>Timeline Data should be loaded</p>\
											</div>\
										</div>	');
	});			    	
}

function uploadOriginalConditionWidget (width,draggableElement){
	$( "#conditionWidget2" ).remove();
	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	    $( ".widgetPanel" ).append('<div id="conditionWidget" class="draggable drag-drop myCondition panel panel-default">\
											<div class="panel-heading">\
												<h3 class="panel-title">Condtion Widget</h3>\
											</div>\
											<div class="panel-body">\
												<p>Condition Data should be loaded</p>\
											</div>\
										</div>	');
	});			    	
}

function uploadOriginalLocationWidget (width,draggableElement){
	$( "#locationWidget2" ).remove();
	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	    $( ".widgetPanel" ).append('<div id="locationWidget" class="draggable drag-drop myCondition panel panel-default">\
											<div class="panel-heading">\
												<h3 class="panel-title">Location Widget</h3>\
											</div>\
											<div class="panel-body">\
												<p>Location Data should be loaded</p>\
											</div>\
										</div>	');
	});			    	
}

function uploadOriginalTeamWidget (width,draggableElement){
	$( "#teamWidget2" ).remove();
	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	    $( ".widgetPanel" ).append('<div id="teamWidget" class="draggable drag-drop myCondition panel panel-default">\
											<div class="panel-heading">\
												<h3 class="panel-title">Team Widget</h3>\
											</div>\
											<div class="panel-body">\
												<p>Team Data should be loaded</p>\
											</div>\
										</div>	');
	});			    	
}

function uploadOriginalWelcomeText(width,draggableElement){
	$( "#welcomeText2" ).remove();

	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	     $( ".widgetPanel" ).append('<div id="welcomeText" class="draggable drag-drop myCondition panel panel-default">\
											<div class="panel-heading">\
												<h3 class="panel-title">Welcome Text</h3>\
											</div>\
											<div class="panel-body">\
												<p>Good Morning ...</p>\
											</div>\
										</div>	');
	});			    	
}

function uploadOriginalDigitalClock(width,draggableElement){
	$( "#digitalClock2" ).remove();

	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	     $( ".widgetPanel" ).append('<div id="digitalClock" class="draggable drag-drop myCondition panel panel-default">\
											<div class="panel-heading">\
												<h3 class="panel-title">Digital Clock</h3>\
											</div>\
											<div class="panel-body">\
												<p>Digital Clock</p>\
											</div>\
										</div>	');
	});			    	
}

function uploadOriginalNotification(width,draggableElement){
	$( "#notification2" ).remove();

	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	    $( ".widgetPanel" ).append('<div id="notification" class="draggable drag-drop myCondition panel panel-default">\
											<div class="panel-heading">\
												<h3 class="panel-title">Notification</h3>\
											</div>\
											<div class="panel-body">\
												<h3 href="#">Notification <span class="badge">2</span></h3>\
											</div>\
										</div>');
	});			    	
}

function uploadOriginalTimelineButton(width,draggableElement){
	$( "#timelineButton2" ).remove();
	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	    $( ".widgetPanel" ).append('<div id="timelineButton" class="draggable drag-drop  panel panel-default">\
										<div class="panel-heading">\
											<h3 class="panel-title">Timeline Button</h3>\
										</div>\
										<div class="panel-body">\
											<p href="#">Refirect to timeline page</p>\
											<button type="button" class="btn btn-primary">Timeline</button>\
										</div>\
									</div>	');
	});			    	
}

function uploadOriginalConditionButton(width,draggableElement){
	$( "#conditionButton" ).remove();
	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	    $( ".widgetPanel" ).append('<div id="conditionButton" class="draggable drag-drop  panel panel-default">\
										<div class="panel-heading">\
											<h3 class="panel-title">Condition Button</h3>\
										</div>\
										<div class="panel-body">\
											<p href="#">Refirect to Condition page</p>\
											<button type="button" class="btn btn-primary">Condition</button>\
										</div>\
									</div>	');
	});			    	
}

function uploadOriginalLocationButton(width,draggableElement){
	$( "#locationButton2" ).remove();
	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	    $( ".widgetPanel" ).append('<div id="locationButton" class="draggable drag-drop  panel panel-default">\
										<div class="panel-heading">\
											<h3 class="panel-title">Location Button</h3>\
										</div>\
										<div class="panel-body">\
											<p href="#">Refirect to Location page</p>\
											<button type="button" class="btn btn-primary">Location</button>\
										</div>\
									</div>	');
	});			    	
}

function uploadOriginalTeamButton(width,draggableElement){
	$( "#teamButton2" ).remove();
	$(draggableElement).fadeOut(150, function(){
		// $(draggableElement).animate({width: + width-10, height: 120}, 150 );
	    $( ".widgetPanel" ).append('<div id="teamButton" class="draggable drag-drop  panel panel-default">\
										<div class="panel-heading">\
											<h3 class="panel-title">Team Button</h3>\
										</div>\
										<div class="panel-body">\
											<p href="#">Refirect to Team page</p>\
											<button type="button" class="btn btn-primary">Team</button>\
										</div>\
									</div>	');
	});			    	
}

// Function to update the selected widgets array. This function deletes the ID from the array once 
// widget is dragged back to widget panel from DropZone
function updateSelectedWidgetArray(draggableElement){
	if (isInArray(draggableElement.getAttribute('id').slice(0,-1), widgetsSelected)){
		var widgetTemp = widgetsSelected.indexOf(draggableElement.getAttribute('id').slice(0,-1));
    	/*Delete the item from array if unchecked*/
    	console.log(widgetTemp)
		widgetsSelected.splice(widgetTemp, 1);
		console.log(widgetsSelected);

    }
}