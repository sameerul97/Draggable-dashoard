// MENG 2018: Sameerul
// This JS file will get gather all the data which needs to be sent to DB
function submitData (id) {
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
    var nhsID = id;

    // Iterate through every widget
    for (var i = 0; i < widgetsName.length; i++) {
        // Temp Array to store required fields
        var tempArr = [];
        // get current widget in a variable
        var currentWidget = widgetsName[i];

        // Gets the widgetID of the selected widget
        var ID = widgetsName.indexOf(widgetsName[i]);
        tempArr.push(ID);

// ######## TODO: Stephanos Do your magic and Get Patient ID HERE and push tht instead of 111111111
        tempArr.push(nhsID);

        // Checking if the current widget is selected or not by the clincian
        if (isInArray(currentWidget,widgetsSelected)){
            // if selected THEN
            //Gets the X and Y Cordinates
            var dropzoneElement = document.getElementById('inner-dropzone');
            // LOG statements DELETE THIS LATER
            // console.log("Width of Dropzone: ",$(dropzoneElement).width());
            // console.log("Height of Dropzone: ",$(dropzoneElement).height());
            console.log($(document.getElementById(currentWidget+'2')).offset().left - $('#inner-dropzone').offset().left);
            console.log($(document.getElementById(currentWidget+'2')).offset().top  - $('#inner-dropzone').offset().top);

            var dropzoneWidth   = $(dropzoneElement).width();
            //var dropzoneHeight  = $(dropzoneElement).height();
            var elementXValue   = $(document.getElementById(currentWidget+'2')).offset().left - $('#inner-dropzone').offset().left;
            var elementYValue   = $(document.getElementById(currentWidget+'2')).offset().top  - $('#inner-dropzone').offset().top;
            var X 				= elementXValue / dropzoneWidth;
            var Y 				= elementYValue / dropzoneWidth;
            //var Y 				= elementYValue / dropzoneHeight;
            tempArr.push(X);
            tempArr.push(Y);
            // Get the Width the Height for each element
            var element = document.getElementById(currentWidget+'2');
            var rect = element.getBoundingClientRect();
            // console.log(rect.width)
            // console.log(rect.height)
            tempArr.push(rect.width  / dropzoneWidth);
            //tempArr.push(rect.height / dropzoneHeight);
            tempArr.push(rect.height / dropzoneWidth);
            // Setting active to 1 since the element is selected by Clincian
            tempArr.push(1)
            // Push temp array into main dataForDB variable which will be sent to DB
        }
        else{
            tempArr.push(0);
            tempArr.push(0);
            tempArr.push(0);
            tempArr.push(0);
            tempArr.push(0);
        }
        dataForDB.push(tempArr);

    } // For Loop END
    console.log(dataForDB);


    // call this query: user-psettings-update to update the patient Settings
    // Fields Req     : nhsID, navCondition, navTimeline, navTeam, navUnit, colourCondition,
    // colourTimeline, colourTeam, colourUnit, colourBase, fontSize, accHemi, accBar, accScroll,
    // dispCondition, dispTimeline, dispTeam, dispUnit, dispLogout, dispHome
    // var buttonBoolean = [0,0,0,0,0,0]

    var navCondition  = "My Condition";
    var navTimeline   = "My Timeline";
    var navTeam       = "My Team";
    var navUnit       = "My Location";
    // Check which buttons are are active and not
    var dispCondition = dispTimeline = dispTeam = dispUnit = dispLogout = dispHome = 0;

    for (i=0 ; i < 6; i++) {
        if (buttonIds[i] === "conditionNavButton"){
            dispCondition = 1;
        }
        if (buttonIds[i] === "timelineNavButton"){
            dispTimeline = 1;
        }
        if (buttonIds[i] === "teamNavButton"){
            dispTeam = 1;
        }
        if (buttonIds[i] === "locationNavButton"){
            dispUnit = 1;
        }
        if (buttonIds[i] === "logoutNavButton"){
            dispLogout = 1;
        }
        if (buttonIds[i] === "homeNavButton"){
            dispHome = 1;
        }
    } //for Loop END

    // console.log(dispCondition,dispTimeline,dispTeam,dispUnit,dispLogout,dispHome)
    var colourCondition  = $("#colourCondition").val();
    colourCondition = colourCondition.substring(1); // Substring so #000000 becomes 000000
    colourCondition = base64_encode(colourCondition); // encode before storing the raw value since SQLite ignores character when returning from DB

    var colourTimeline   = $("#colourTimeline").val();
    colourTimeline = colourTimeline.substring(1);
    colourTimeline = base64_encode(colourTimeline);

    var colourTeam       = $("#colourTeam").val();
    colourTeam = colourTeam.substring(1);
    colourTeam = base64_encode(colourTeam);

    var colourUnit       = $("#colourLocation").val();
    colourUnit = colourUnit.substring(1);
    colourUnit = base64_encode(colourUnit);

    var colourBase       = $("#colourBase").val();
    colourBase = colourBase.substring(1);
    colourBase = base64_encode(colourBase);


    var fontSize;
    var stringFontValue  = $("#fontDropDown").val();
    for (font in fontsizes){
        if (stringFontValue === fontsizes[font]) fontSize = font;
    }

    var accBar           = 0;  /*$("#accessibilityBar").val();*/
    var accScroll        = 0;  /*$("#scrollBar").val();*/

    var dataForPSetting = [nhsID,navCondition, navTimeline, navTeam, navUnit,
        colourCondition,colourTimeline, colourTeam, colourUnit,
        colourBase, fontSize,  accBar, accScroll,
        dispCondition, dispTimeline, dispTeam, dispUnit, dispLogout, dispHome];
    console.log(dataForPSetting);

        //Stephanos data add
        // Override the good case
        jh_set_good_callback(
            function(){
                console.log('good submit');
                submitAlert(id);
            }
        );

            // Override the bad case
        jh_set_error_callback(
            function(){
                console.log('bad submit');
            }
        );

        //Stephanos Data request
        //Make request for update Settings
        jh_request(
            '\'data\':(' +
            '\'cmd\':\'user-psettings-update\',' +
            '\'params\':[' +
            '\'' + nhsID + '\',' +
            '\'' + navCondition + '\',' +
            '\'' + navTimeline + '\',' +
            '\'' + navTeam + '\',' +
            '\'' + navUnit + '\',' +
            '\'' + colourCondition + '\',' +
            '\'' + colourTimeline + '\',' +
            '\'' + colourTeam + '\',' +
            '\'' + colourUnit + '\',' +
            '\'' + colourBase + '\',' +
            '\'' + fontSize + '\',' +
            '\'' + '0' + '\',' +
            '\'' + dispCondition + '\',' +
            '\'' + dispTimeline + '\',' +
            '\'' + dispTeam + '\',' +
            '\'' + dispUnit + '\',' +
            '\'' + dispLogout + '\',' +
            '\'' + dispHome + '\'' +
            ']' +
            ')'
        );

        //Make request for update widgets
        for(var x = 0; x < dataForDB.length; x++) {
            console.log(dataForDB[x]);
            jh_request(
                '\'data\':(' +
                '\'cmd\':\'user-patientjoinwidget-update\',' +
                '\'params\':[' +
                '\'' + dataForDB[x][0] + '\',' +
                '\'' + dataForDB[x][1] + '\',' +
                '\'' + dataForDB[x][2] + '\',' +
                '\'' + dataForDB[x][3] + '\',' +
                '\'' + dataForDB[x][4] + '\',' +
                '\'' + dataForDB[x][5] + '\',' +
                '\'' + dataForDB[x][6] + '\'' +
                ']' +
                ')'
            );
        }
            //Check response
            jh_checkResponseStatus();

} // SubmitData function END

function submitAlert(id) {
    //Only in the modalInfoView is the delete button visible
    var message = "Custom dashboard submitted successfully to: " + id;
    confirm(message) ? jh_init_backHome() : console.log("close");
}


function jh_init_backHome() {
    window.location.href = '/clinician/index.html'
}