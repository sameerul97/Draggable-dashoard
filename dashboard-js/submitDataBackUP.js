// MENG 2018: Sameerul
// This JS file will get gather all the data which needs to be sent to DB
function submitData() {
	// Get selected button ids which is in array store it in database
	// console.log(buttonIds);

	// Queryname    : user-patientjoinwidget-update call this query to upload the dashboard data 
	// Fields in DB : widgetID, nhsID, posX, posY, width, height, active
	// nhsID is Patient NHS ID
	// dataForDB variable will contain [widgetID, nhsID, posX, posY, width, height, active] for each element
	// At the end of for loop dataForDB will have 12 array inside LIKE 
	// dataForDB = [ 
	// 				[widgetID, nhsID, posX, posY, width, height, active],
	// 				[widgetID, nhsID, posX, posY, width, height, active]
	// 			   ]
	var dataForDB = [];

	// Iterate through every widget
	for (i = 0; i < widgetsName.length; i++) {
		// Temp Array to store required fields 
		var tempArr = [];
		// get current widget in a variable
		var currentWidget = widgetsName[i];

		// Gets the widgetID of the selected widget
		var ID = widgetsName.indexOf(widgetsName[i]);
		tempArr.push(ID);

		// ######## TODO: Stephanos Do your magic and Get Patient ID HERE and push tht instead of 111111111
		tempArr.push("1111111111");

		// Checking if the current widget is selected or not by the clincian
		if (isInArray(currentWidget, widgetsSelected)) {
			// if selected THEN
			//Gets the X and Y Cordinates 
			var dropzoneElement = document.getElementById('inner-dropzone');
			// LOG statements DELETE THIS LATER
			// console.log("Width of Dropzone: ",$(dropzoneElement).width());
			// console.log("Height of Dropzone: ",$(dropzoneElement).height());
			console.log($(document.getElementById(currentWidget + '2')).offset().left - $('#inner-dropzone').offset().left);
			console.log($(document.getElementById(currentWidget + '2')).offset().top - $('#inner-dropzone').offset().top);

			var dropzoneWidth = $(dropzoneElement).width();
			var dropzoneHeight = $(dropzoneElement).height();
			var elementXValue = $(document.getElementById(currentWidget + '2')).offset().left - $('#inner-dropzone').offset().left;
			var elementYValue = $(document.getElementById(currentWidget + '2')).offset().top - $('#inner-dropzone').offset().top;
			var X = elementXValue / dropzoneWidth;
			var Y = elementYValue / dropzoneHeight;
			tempArr.push(X);
			tempArr.push(Y);
			// Get the Width the Height for each element
			var element = document.getElementById(currentWidget + '2');
			var rect = element.getBoundingClientRect();
			// console.log(rect.width)
			// console.log(rect.height)
			tempArr.push(rect.width / dropzoneWidth);
			tempArr.push(rect.height / dropzoneHeight)
			// Setting active to 1 since the element is selected by Clincian
			tempArr.push(1)
			// Push temp array into main dataForDB variable which will be sent to DB
		}
		else {
			tempArr.push(0);
			tempArr.push(0);
			tempArr.push(0);
			tempArr.push(0);
			tempArr.push(0);
		}
		dataForDB.push(tempArr);

	} // For Loop END
	console.log(dataForDB);

	for (data in dataForDB) {
		console.log(dataForDB[data])
	}
	// call this query: user-psettings-update to update the patient Settings
	// Fields Req     : nhsID, navCondition, navTimeline, navTeam, navUnit, colourCondition,
	// colourTimeline, colourTeam, colourUnit, colourBase, fontSize, accHemi, accBar, accScroll, 
	// dispCondition, dispTimeline, dispTeam, dispUnit, dispLogout, dispHome
	// var buttonBoolean = [0,0,0,0,0,0]

	var nhsID;
	var navCondition = "My Condition";
	var navTimeline = "My Timeline";
	var navTeam = "My Team";
	var navUnit = "My Location";
	// Check which buttons are are active and not
	var dispCondition = dispTimeline = dispTeam = dispUnit = dispLogout = dispHome = 0;
	for (i = 0; i < 6; i++) {
		if (buttonIds[i] == "condition") {
			dispCondition = 1;
		}
		if (buttonIds[i] == "timeline") {
			dispTimeline = 1;
		}
		if (buttonIds[i] == "team") {
			dispTeam = 1;
		}
		if (buttonIds[i] == "location") {
			dispUnit = 1;
		}
		if (buttonIds[i] == "logout") {
			dispLogout = 1;
		}
		if (buttonIds[i] == "home") {
			dispHome = 1;
		}
	} //for Loop END

	// console.log(dispCondition,dispTimeline,dispTeam,dispUnit,dispLogout,dispHome)
	var colourCondition = $("#colourCondition").val();
	var colourTimeline = $("#colourTimeline").val();
	var colourTeam = $("#colourTeam").val();
	var colourUnit = $("#colourUnit").val();
	var colourBase = $("#colourBase").val();
	var fontSize = $("#fontDropDown").val();
	var accBar = $("#accessibilityBar").val();
	var accScroll = $("#scrollBar").val();

	var dataForPSetting = [nhsID, navCondition, navTimeline, navTeam, navUnit,
		colourCondition, colourTimeline, colourTeam, colourUnit,
		colourBase, fontSize, accBar, accScroll,
		dispCondition, dispTimeline, dispTeam, dispUnit, dispLogout, dispHome];
	console.log(dataForPSetting)

	//Stephanos Data request





} // SubmitData function END
