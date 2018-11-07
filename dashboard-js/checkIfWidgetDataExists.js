// MENG 2018: Sameerul
// on loading the dashboard for the clicked Patient check patient_widget_join table to check if
// any widget ID is 1 if there is then load up the dashboard with correct WIdgets.
function checkIfPatientAssignedWithDashboard(id) /**/ {
    // console.log(id);
    var nhsID = id;

    //     jh_set_good_callback(
    //         function(){
    //             console.log('good submit');
    //             submitAlert(id);
    //         }
    //     );

    // // Override the bad case
    //     jh_set_error_callback(
    //         function(){
    //             console.log('bad submit');
    //         }
    //     );
    // // user-patientjoinwidget-list
    //     jh_request(
    //         '\'data\':(' +
    //         '\'cmd\':\'user-patientjoinwidget-list\',' +
    //         '\'params\':[' +
    //         '\'' + nhsID + '\',' +
    //         ']' +
    //         ')'
    //     );

    var presetData = jsonObj.result;
    var activeWidgets = [];

    for (i in presetData) {
        if (presetData[i][5] == 1) {
            widgetsSelected.push(widgetsName[presetData[i][0]])
            activeWidgets.push(presetData[i])
        }
    }
    for (i in activeWidgets) {
        // console.log(activeWidgets[i])
        var index = activeWidgets[i][0];
        // console.log(index)
        $('#' + widgetsName[index] + '').remove();
    }
    var element = document.getElementById("inner-dropzone");

    for (i in activeWidgets) {
        // console.log(activeWidgets[i])
        // calling functions which are in loadPresetWidgets.js
        loadMainBody(element, activeWidgets[i])
        resize();
    }
    //user-patient-settings
    // jh_request(
    //     '\'data\':(' +
    //     '\'cmd\':\'user-patient-settings\',' +
    //     '\'params\':[' +
    //     '\'' + nhsID + '\',' +
    //     ']' +
    //     ')'
    // );
    // index [13 to 18] dispCondition, dispTimeline, dispTeam, dispUnit, dispLogout, dispHome
    // Set up the paitent NavBar by fetching patient settings tables info
    // Fields from DB:  navCondition, navTimeline, navTeam, navUnit,
    // colour Index [4 to 8] colourCondition, colourTimeline, colourTeam, colourUnit, colourBase,
    // fontSize, accHemi, accBar, accScroll, dispCondition, dispTimeline,
    // dispTeam, dispUnit, dispLogout, dispHome

    var patientData = jsonObj.result[0];
    var decodedColourValue = base64_decode(patientData[8]);

    $("#colourBase").css('background-color', '#' + decodedColourValue);
    $("#homeNavButton").css('background-color', '#' + decodedColourValue);
    $("#colourBase").prepend('<option value=#' + decodedColourValue + ' selected=selected style="border-radius:2px;background-color:#' + decodedColourValue + ';"></option>');



    // Check if the Button is selected by the clinician then set up then the button colour from the settings
    if (parseInt(patientData[13]) === 1) {
        console.log(patientData[13])  /*condition*/
        // If the condition is 1 then toggle tht button in NAV BAR
        $("#conditionCheckBox").attr('checked', 'checked');
        // Decode the colour code to retreieve the raw colour code
        var decodedColourValue = base64_decode(patientData[4]);
        $("#colourCondition").css('background-color', '#' + decodedColourValue);
        $("#conditionNavButton").css('background-color', '#' + decodedColourValue);
        $("#conditionButton2").css('background-color', '#' + decodedColourValue);
        $("#colourCondition").prepend('<option value=#' + decodedColourValue + ' selected=selected style="border-radius:2px;background-color:#' + decodedColourValue + ';"></option>');
        // Pussh the button ID to the toggled button
        buttonIds.push("conditionNavButton");
    }
    if (parseInt(patientData[14]) === 1) {
        $("#timelineCheckBox").attr('checked', 'checked');
        var decodedColourValue = base64_decode(patientData[5]);
        $("#colourTimeline").css('background-color', '#' + decodedColourValue);
        $("#timelineNavButton").css('background-color', '#' + decodedColourValue);
        $("#colourTimeline").prepend('<option value=#' + decodedColourValue + ' selected=selected style="border-radius:2px;background-color:#' + decodedColourValue + ';"></option>');
        buttonIds.push("timelineNavButton");
    }
    if (parseInt(patientData[15]) === 1) {
        $("#teamCheckBox").attr('checked', 'checked');
        var decodedColourValue = base64_decode(patientData[6]);
        $("#colourTeam").css('background-color', '#' + decodedColourValue);
        $("#teamNavButton").css('background-color', '#' + decodedColourValue);
        $("#colourTeam").prepend('<option value=#' + decodedColourValue + ' selected=selected style="border-radius:2px;background-color:#' + decodedColourValue + ';"></option>');
        buttonIds.push("teamNavButton");
    }
    if (parseInt(patientData[16]) === 1) {
        $("#locationCheckBox").attr('checked', 'checked');
        var decodedColourValue = base64_decode(patientData[7]);
        $("#colourLocation").css('background-color', '#' + decodedColourValue);
        $("#locationNavButton").css('background-color', '#' + decodedColourValue);
        $("#colourLocation").prepend('<option value=#' + decodedColourValue + ' selected=selected style="border-radius:2px;background-color:#' + decodedColourValue + ';"></option>');
        buttonIds.push("locationNavButton");
    }

    // console.log(patientData[17]) /*logout*/
    // console.log(patientData[18]) /*home*/
    // console.log(patientData[9]) /*Font Size*/
    var fontSizeInDB = patientData[9];
    var font = fontsizes[fontSizeInDB];
    $('#fontDropDown').val(font);

    // check if NAVbar bg is white if its is then change the text colour to opposite
    // Function converting RGB into HEx CODE
    function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete (parts[0]);
        var hexCode;
        for (var i = 1; i <= 3; ++i) {
            parts[i] = parseInt(parts[i]).toString(16);
            if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        return hexCode = '#' + parts.join('');
    }
    // This script makes sure Navbar bg and text colour is adjusted onloading
    var tempColourIDs = ["colourBase", "colourCondition", "colourTimeline", "colourTeam", "colourLocation"]
    for (i in tempColourIDs)
        if (tempColourIDs[i] === "colourBase") {
            var bgColor = $("#colourBase").css('backgroundColor');
            var color = hexc(bgColor);
            if (color === "#ffffff") {
                document.getElementById("homeNavButton").style.color = "black";
            }
            // if bg is black color
            if (color === "#000000") {
                document.getElementById("homeNavButton").style.color = "white";
            }
        }
    if (tempColourIDs[i] === "colourCondition") {
        var bgColor = $("#colourCondition").css('backgroundColor');
        var color = hexc(bgColor);
        if (color === "#ffffff") {
            document.getElementById("conditionNavButton").style.color = "black";
        }
        if (color === "#000000") {
            document.getElementById("conditionNavButton").style.color = "white";
        }
    }
    if (tempColourIDs[i] === "colourTimeline") {
        var bgColor = $("#colourTimeline").css('backgroundColor');
        var color = hexc(bgColor);
        if (color === "#ffffff") document.getElementById("timelineNavButton").style.color = "black";
        if (color === "#000000") document.getElementById("timelineNavButton").style.color = "white";
    }
    if (tempColourIDs[i] === "colourTeam") {
        var bgColor = $("#colourTeam").css('backgroundColor');
        var color = hexc(bgColor);
        if (color === "#ffffff") document.getElementById("teamNavButton").style.color = "black";
        if (color === "#000000") document.getElementById("teamNavButton").style.color = "white";
    }
    if (tempColourIDs[i] === "colourLocation") {
        var bgColor = $("#colourLocation").css('backgroundColor');
        var color = hexc(bgColor);
        if (color === "#ffffff") document.getElementById("locationNavButton").style.color = "black";
        if (color === "#000000") document.getElementById("locationNavButton").style.color = "white";
    }

}
