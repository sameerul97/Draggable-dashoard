// MENG 2018: Sameerul
// This JS file contains all function which updates the widget upon placing it in Dropzone. 
// For each widget once the widget is dragged into dropzone call one of this function
function loadClock(yPos,xPos,draggableElement) {
	// Remove the element from the DOM first
	$( "#clock" ).remove();
	$( "#clock2" ).remove();
	// Specifiy the element with appropriate ID (MUST)
	var htmlClock = '<canvas id="clock2" style="background-color:#CCCCCC; border:1px solid white;\
					position:absolute;margin-top:'+yPos+'px;margin-left:'+xPos+'px; "width="250" height="250" \
					class="resize-drag"></canvas>';
	// Append it to Dropzone (Passing the margin top 'Y' and margin left 'X' value will position the element correctly)
	$( ".dropzone" ).append( htmlClock );
	// Call the clock function to load the Clock (calling the function in clock.js)
	clock();
}

function loadWelcomeText(yPos,xPos,draggableElement){
    var date = new Date();
    var message;
    if(date.getHours() < 12 && date.getHours() >= 5)
    	message =  "Good Morning";
    else if(date.getHours() >= 12 && date.getHours() < 17)
    	message = "Good Afternoon";
    else if(date.getHours() >= 17 && date.getHours() < 20)
    	message = "Good Evening";
    else
    	message = "Good Night"
	$( "#welcomeText" ).remove();
	$( "#welcomeText2" ).remove();

	// var welcomeText = ' <div id="welcomeText2" style="background-color:#CCCCCC;position:absolute; border:1px solid white;text-align:center;margin-top:'+yPos+'px;margin-left:'+xPos+'px;width:350px;height150px;"  class="resize-drag">\
	// 					    <div style=""> \
	// 							<h1 id="customText">'+message+' John</h1>\
	// 					    </div>\
	// 					</div>';


	var welcomeText = '<h1 id="welcomeText2" style="background-color:#CCCCCC;position:absolute;border:1px solid white; ;text-align:center;margin-top:'+yPos+'px;margin-left:'+xPos+'px;width:350px;height150px;"  class="resize-drag">'+message+' John</h1>';
	$( ".dropzone" ).append( welcomeText );

	// $(draggableElement).replaceWith(welcomeText);

}

function loadTimelineWidget (yPos,xPos,draggableElement){
	$( "#timelineWidget" ).remove();
	$( "#timelineWidget2" ).remove();
	var htmlTimline = '<div id="timelineWidget2" style="position:absolute;text-align:center;margin-top:'+yPos +'px;margin-left:'+xPos+'px;width:350px;"  class="resize-drag">\
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
						  <ol class="carousel-indicators">\
						    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
						    <li data-target="#carousel-example-generic" data-slide-to="1"></li>\
						  </ol>\
						  <div class="carousel-inner" role="listbox">\
						    <div class="item active">\
						      <img src="https://images.unsplash.com/photo-1506631698645-c39e6d283592?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9359458f9d34c66234412e3b4eaba5c7&auto=format&fit=crop&w=1500&q=80" alt="...">\
						      <div class="carousel-caption" style="color: white">\
						        <h3>This is test timeline object</h3>\
				    			<p>3.4.2017</p>\
				    			<p>Miss Jane Doe</p>\
						      </div>\
						    </div>\
						    <div class="item">\
						      <img src="https://images.unsplash.com/photo-1506631698645-c39e6d283592?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9359458f9d34c66234412e3b4eaba5c7&auto=format&fit=crop&w=1500&q=80" alt="...">\
						      <div class="carousel-caption" style="color: white">\
						        <h3>This is test timeline object</h3>\
				    			<p>3.4.2017</p>\
				    			<p>Miss Jane Doe</p>\
						      </div>\
						    </div>\
						  </div>\
						  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
						    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
						    <span class="sr-only">Previous</span>\
						  </a>\
						  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
						    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
						    <span class="sr-only">Next</span>\
						  </a>\
						</div>\
						</div>';
	$( ".dropzone" ).append( htmlTimline );
}

function loadConditionWidget (yPos,xPos,draggableElement){
	$( "#conditionWidget" ).remove();
	$( "#conditionWidget2" ).remove();
	var conditionWidget = '<div id="conditionWidget2" style="position:absolute;text-align:center;margin-top:'+yPos +'px;margin-left:'+xPos+'px;width:350px;"  class="resize-drag">\
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
						  <ol class="carousel-indicators">\
						    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
						    <li data-target="#carousel-example-generic" data-slide-to="1"></li>\
						  </ol>\
						  <div class="carousel-inner" role="listbox">\
						    <div class="item active">\
						      <img src="https://images.unsplash.com/photo-1506631698645-c39e6d283592?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9359458f9d34c66234412e3b4eaba5c7&auto=format&fit=crop&w=1500&q=80" alt="...">\
						      <div class="carousel-caption" style="color: white">\
						        <h3>This is test Condition object</h3>\
				    			<p>3.4.2017</p>\
				    			<p>Miss Jane Doe</p>\
						      </div>\
						    </div>\
						    <div class="item">\
						      <img src="https://images.unsplash.com/photo-1506631698645-c39e6d283592?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9359458f9d34c66234412e3b4eaba5c7&auto=format&fit=crop&w=1500&q=80" alt="...">\
						      <div class="carousel-caption" style="color: white">\
						        <h3>This is test Condition object</h3>\
				    			<p>3.4.2017</p>\
				    			<p>Miss Jane Doe</p>\
						      </div>\
						    </div>\
						  </div>\
						  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
						    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
						    <span class="sr-only">Previous</span>\
						  </a>\
						  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
						    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
						    <span class="sr-only">Next</span>\
						  </a>\
						</div>\
						</div>';
	$( ".dropzone" ).append( conditionWidget);
}

function loadLocationWidget (yPos,xPos,draggableElement){
	$( "#locationWidget" ).remove();
	$( "#locationWidget2" ).remove();
	var locationWidget = '<div id="locationWidget2" style="position:absolute;text-align:center;margin-top:'+yPos +'px;margin-left:'+xPos+'px;width:350px;"  class="resize-drag">\
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
						  <ol class="carousel-indicators">\
						    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
						    <li data-target="#carousel-example-generic" data-slide-to="1"></li>\
						  </ol>\
						  <div class="carousel-inner" role="listbox">\
						    <div class="item active">\
						      <img src="https://images.unsplash.com/photo-1506631698645-c39e6d283592?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9359458f9d34c66234412e3b4eaba5c7&auto=format&fit=crop&w=1500&q=80" alt="...">\
						      <div class="carousel-caption" style="color: white">\
						        <h3>This is test Location object</h3>\
				    			<p>3.4.2017</p>\
				    			<p>Miss Jane Doe</p>\
						      </div>\
						    </div>\
						    <div class="item">\
						      <img src="https://images.unsplash.com/photo-1506631698645-c39e6d283592?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9359458f9d34c66234412e3b4eaba5c7&auto=format&fit=crop&w=1500&q=80" alt="...">\
						      <div class="carousel-caption" style="color: white">\
						        <h3>This is test Location object</h3>\
				    			<p>3.4.2017</p>\
				    			<p>Miss Jane Doe</p>\
						      </div>\
						    </div>\
						  </div>\
						  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
						    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
						    <span class="sr-only">Previous</span>\
						  </a>\
						  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
						    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
						    <span class="sr-only">Next</span>\
						  </a>\
						</div>\
						</div>';
	$( ".dropzone" ).append( locationWidget);
}

function loadTeamWidget (yPos,xPos,draggableElement){
	$( "#teamWidget" ).remove();
	$( "#teamWidget2" ).remove();
	var teamWidget = '<div id="teamWidget2" style="position:absolute;text-align:center;margin-top:'+yPos +'px;margin-left:'+xPos+'px;width:350px;"  class="resize-drag">\
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
						  <ol class="carousel-indicators">\
						    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
						    <li data-target="#carousel-example-generic" data-slide-to="1"></li>\
						  </ol>\
						  <div class="carousel-inner" role="listbox">\
						    <div class="item active">\
						      <img src="https://images.unsplash.com/photo-1506631698645-c39e6d283592?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9359458f9d34c66234412e3b4eaba5c7&auto=format&fit=crop&w=1500&q=80" alt="...">\
						      <div class="carousel-caption" style="color: white">\
						        <h3>This is test Team object</h3>\
				    			<p>3.4.2017</p>\
				    			<p>Miss Jane Doe</p>\
						      </div>\
						    </div>\
						    <div class="item">\
						      <img src="https://images.unsplash.com/photo-1506631698645-c39e6d283592?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9359458f9d34c66234412e3b4eaba5c7&auto=format&fit=crop&w=1500&q=80" alt="...">\
						      <div class="carousel-caption" style="color: white">\
						        <h3>This is test Team object</h3>\
				    			<p>3.4.2017</p>\
				    			<p>Miss Jane Doe</p>\
						      </div>\
						    </div>\
						  </div>\
						  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
						    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
						    <span class="sr-only">Previous</span>\
						  </a>\
						  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
						    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
						    <span class="sr-only">Next</span>\
						  </a>\
						</div>\
						</div>';
	$( ".dropzone" ).append( teamWidget);
}

function loadDigitalClock (yPos,xPos,draggableElement){
	$( "#digitalClock" ).remove();
	$( "#digitalClock2" ).remove();
	var digitalClock = ' <div id="digitalClock2" style="position:absolute;text-align:center;border:1px solid white;margin-top:'+yPos+'px;margin-left:'+xPos+'px;width:350px;"  class="resize-drag">\
								<div class="timeDateClock">\
									<h2 id="date"/>\
									<h3 id="time"/>\
								</div>\
						</div>';
	$( ".dropzone" ).append( digitalClock );
	// $ (draggableElement).replaceWith(digitalClock);
	drawDigital();
}

function loadNotification (yPos,xPos,draggableElement){
	$( "#notification" ).remove();
	$( "#notification2" ).remove();
	var notification = '<div id="notification2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+yPos+'px;margin-left:'+xPos+'px;width:280px;"  class="resize-drag">\
		                    <button class="btn btn-default btn-lg btn-link" style="font-size:36px;">\
						    	<span class="glyphicon glyphicon-bell" style="">Notification</span>\
						    </button>\
						    <span class="badge" style="position:relative;top:-8px;left:-228px;">3</span>\
						</div>';
	$( ".dropzone" ).append( notification );

}

function loadTimelineButton(yPos,xPos,draggableElement) {
	// body...
	$( "#timelineButton" ).remove();
	$( "#timelineButton2" ).remove();

	var timeLineButton = '<button id="timelineButton2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+yPos +'px;margin-left:'+xPos+'px;width:440px;height:60px;" type="button" class="resize-drag btn btn-primary" \
							data-toggle="tooltip" data-placement="left" title="Hold middle of the button to drag">Timeline\
							</button>'; 
	$( ".dropzone" ).append( timeLineButton );

	// toolT();

}

function loadConditionButton(yPos,xPos,draggableElement) {
	$( "#conditionButton" ).remove();
	$( "#conditionButton2" ).remove();
	var conditionButton = '<button id="conditionButton2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+yPos +'px;margin-left:'+xPos+'px;width:440px;height:60px;" type="button" class="resize-drag btn btn-primary" \
							data-toggle="tooltip" data-placement="left" title="Hold middle of the button to drag">Condition\
							</button>'; 
	$( ".dropzone" ).append( conditionButton );
	// toolT();
}

function loadLocationButton(yPos,xPos,draggableElement) {
	$( "#locationButton" ).remove();
	$( "#locationButton2" ).remove();
	var locationButton = '<button id="locationButton2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+yPos +'px;margin-left:'+xPos+'px;width:440px;height:60px;" type="button" class="resize-drag btn btn-primary" \
							data-toggle="tooltip" data-placement="left" title="Hold middle of the button to drag">Location\
							</button>'; 
	$( ".dropzone" ).append( locationButton );
	// toolT();
}

function loadTeamButton(yPos,xPos,draggableElement) {
	$( "#teamButton" ).remove();
	$( "#teamButton2" ).remove();
	var teamButton = '<button id="teamButton2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+yPos +'px;margin-left:'+xPos+'px;width:440px;height:60px;" type="button" class="resize-drag btn btn-primary" \
							data-toggle="tooltip" data-placement="left" title="Hold middle of the button to drag">Team\
							</button>'; 
	$( ".dropzone" ).append( teamButton );
	// toolT();
}


// Function to update the selected widgets array[]. This function pushes the ID from the array once 
// widget is dragged into DropZone 
function updateSelectedWidgetsArray(draggableElement){
	// console.log(isInArray(draggableElement.getAttribute('id'), widgetsSelected));
	if (!isInArray(draggableElement.getAttribute('id'), widgetsSelected)){
    	widgetsSelected.push(draggableElement.getAttribute('id'));
    	// console.log(widgetsSelected);
    	// console.log(draggableElement);
    }
}

