// MENG 2018: Sameerul
// This JS file contains all function which should be ONLY  called to load the preset widgets and placing it in Dropzone.
// Functions In here should be called Once on loading.

function loadMainBody(mainBodyId,widgetData) {
    // WidgetData Holds = [widgetID, posX, posY, width, height, active]
    // console.log(viewHolderHeight)
    var holderID  = mainBodyId;
    // console.log(widgetData[0]);
    widgetID = widgetData;
    widgetFunctions = [ initialLoadWelcomeText,initialLoadClock,initialLoadDigitalClock,initialLoadTimelineWidget,initialLoadConditionWidget,
                        initialLoadLocationWidget, initialLoadTeamWidget, initialLoadNotification, initialLoadTimelineButton,
                        initialLoadConditionButton, initialLoadLocationButton,initialLoadTeamButton];

    widgetFunctions[widgetData[0]](widgetData[1],widgetData[2],widgetData[3],widgetData[4]);
    // console.log("")

}

function initialLoadClock(xPos,yPos,width,height) {
    // Remove the element from the DOM first
    // $( "#clock" ).remove();
    // $( "#clock2" ).remove();
    console.log(yPos)
    console.log(xPos)
    console.log(width)
    console.log(height)
    // Specifiy the element with appropriate ID (MUST)
    var htmlClock = '<canvas id="clock2" class="resize-drag" style="position:absolute; border:1px solid white;\
                            margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;" width='+ width * $("#inner-dropzone").width() + ' height= '+ height * $("#inner-dropzone").width() + ' \
					></canvas>';
    $("#inner-dropzone").append(htmlClock);
    clock();
    resize()
}

function initialLoadWelcomeText(xPos,yPos,width,height){
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


    // var welcomeText = ' <div id="welcomeText2" style="background-color:#CCCCCC;position:absolute; border:1px solid white;text-align:center;margin-top:'+yPos+'px;margin-left:'+xPos+'px;width:350px;height150px;"  class="resize-drag">\
    // 					    <div style=""> \
    // 							<h1 id="customText">'+message+' John</h1>\
    // 					    </div>\
    // 					</div>';


    // var welcomeText = '<h1 id="welcomeText2" style="background-color:#CCCCCC;position:absolute;border:1px solid white; ;text-align:center;margin-top:'+yPos+'px;margin-left:'+xPos+'px;width:350px;height150px;"  class="resize-drag">'+message+' John</h1>';
    // var welcomeText = ' <div id="welcomeText2" style="position:absolute;border:1px solid white;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").height()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").height()+'px;"  class="resize-drag">\
		// 					<h1>'+message+' John</h1>\
		// 				</div>';
    var welcomeText = '<h1 id="welcomeText2" style="background-color:#CCCCCC;position:absolute;border:1px solid white; ;text-align:center;margin-top:'+yPos*$("#inner-dropzone").width()+'px;margin-left:'+xPos*$("#inner-dropzone").width()+'px;width:'+width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;"  class="resize-drag">'+message+' John</h1>';

    $( "#inner-dropzone").append( welcomeText );
    // $(draggableElement).replaceWith(welcomeText);

}

function initialLoadTimelineWidget (xPos,yPos,width,height){

    var htmlTimline = '<div id="timelineWidget2" style="position:absolute;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;"  class="resize-drag">\
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

function initialLoadConditionWidget (xPos,yPos,width,height){

    var conditionWidget = '<div id="conditionWidget2" style="position:absolute;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;"  class="resize-drag">\
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

function initialLoadLocationWidget (xPos,yPos,width,height){

    var locationWidget = '<div id="locationWidget2" style="position:absolute;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;"  class="resize-drag">\
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

function initialLoadTeamWidget (xPos,yPos,width,height){

    var teamWidget = '<div id="teamWidget2" style="position:absolute;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;"  class="resize-drag">\
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

function initialLoadDigitalClock (xPos,yPos,width,height){

    var digitalClock = ' <div id="digitalClock2" style="position:absolute;text-align:center;border:1px solid white;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;"  class="resize-drag">\
								<div class="timeDateClock">\
									<h2 id="date"/>\
									<h3 id="time"/>\
								</div>\
						</div>';
    $( ".dropzone" ).append( digitalClock );
    // $ (draggableElement).replaceWith(digitalClock);
    drawDigital();
}

function initialLoadNotification (xPos,yPos,width,height){

    var notification = '<div id="notification2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;"  class="resize-drag">\
		                    <button class="btn btn-default btn-lg btn-link" style="font-size:36px;">\
						    	<span class="glyphicon glyphicon-bell" style="">Notification</span>\
						    </button>\
						    <span class="badge" style="position:relative;top:-8px;left:-228px;">3</span>\
						</div>';
    $( ".dropzone" ).append( notification );

}

function initialLoadTimelineButton(xPos,yPos,width,height) {
    // body...


    var timeLineButton = '<button id="timelineButton2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;" type="button" class="resize-drag btn btn-primary" \
							data-toggle="tooltip" data-placement="left" title="Hold middle of the button to drag">Timeline\
							</button>';
    $( ".dropzone" ).append( timeLineButton );

    // toolT();

}

function initialLoadConditionButton(xPos,yPos,width,height) {

    var conditionButton = '<button id="conditionButton2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;" type="button" class="resize-drag btn btn-primary" \
							data-toggle="tooltip" data-placement="left" title="Hold middle of the button to drag">Condition\
							</button>';
    $( ".dropzone" ).append( conditionButton );
    // toolT();
}

function initialLoadLocationButton(xPos,yPos,width,height) {

    var locationButton = '<button id="locationButton2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;" type="button" class="resize-drag btn btn-primary" \
							data-toggle="tooltip" data-placement="left" title="Hold middle of the button to drag">Location\
							</button>';
    $( ".dropzone" ).append( locationButton );
    // toolT();
}

function initialLoadTeamButton(xPos,yPos,width,height) {

    var teamButton = '<button id="teamButton2" style="border:1px solid white;position:absolute;text-align:center;margin-top:'+ yPos*$("#inner-dropzone").width()+'px;margin-left:'+ xPos*$("#inner-dropzone").width()+'px;width:'+ width*$("#inner-dropzone").width()+'px;height:'+height*$("#inner-dropzone").width()+'px;" type="button" class="resize-drag btn btn-primary" \
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

