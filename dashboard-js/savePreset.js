// MENG 2018: Sameerul
// This JS function is called to save a layout as preset.
// Preset table is filled in first then read request made to preset table and get the last inserted record
// and get its ID. By getting tht ID preset_join_widget table can be populated for every widget
function savePreset(argument) {

    // var presetName = $("#presetName").val();
    // var presetPreview = "TEXT";
    // console.log(presetName);

    // jh_set_good_callback(
    //     function () {
    //         console.log('good submit');
    //         submitAlert(id);
    //     }
    // );

    // // Override the bad case
    // jh_set_error_callback(
    //     function () {
    //         console.log('bad submit');
    //     }
    // );

    // var presetName = "Preset1";
    // Insert into preset table
    // user-preset-insert

    // jh_request(
    //     '\'data\':(' +
    //     '\'cmd\':\'user-preset-insert\',' +
    //     '\'params\':[' +
    //     '\'' + presetName + '\',' +
    //     '\'' + presetPreview + '\'' +
    //     ']' +
    //     ')'
    // );
    // // console.log(jsonObj);
    // // Get preset list from preset table
    // // user-preset-list
    // jh_request(
    //     '\'data\':(' +
    //     '\'cmd\':\'user-preset-list\',' +
    //     '\'params\':[' +
    //     '\'NULL\',' +
    //     '\'NULL\',' +
    //     '\'NULL\'' +
    //     ']' +
    //     ')'
    // );
    // console.log(jsonObj.result);
    var presetIdsHolder = [];
    var presets = jsonObj.result;
    console.log(presets[0])
    for (preset in presets) {
        var tempId = parseInt(presets[preset][0]);
        presetIdsHolder.push(tempId);
        // console.log(presetIdsHolder[preset][0][0]);
    }
    // console.log(presetIdsHolder)

    // FInd the largest ID  (lastly inserted value)
    // console.log(Math.max(...presetIdsHolder));
    presetID = Math.max(...presetIdsHolder);
    console.log(widgetsSelected);
    var dataForDB = [];
    // Iterate through every widget
    for (var i = 0; i < widgetsName.length; i++) {
        // Temp Array to store required fields
        var tempArr = [];
        // get current widget in a variable
        var currentWidget = widgetsName[i];

        // Gets the widgetID of the selected widget
        var ID = widgetsName.indexOf(widgetsName[i]);
        tempArr.push(ID);
        tempArr.push(presetID);

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
            tempArr.push(rect.height / dropzoneHeight);
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
    //user-presetjoinwidget-insert
    // Fields: widgetID, presetID, posX, posY, width, height, active
    for (row in dataForDB) {
        console.log(dataForDB[row])
        jh_request(
            '\'data\':(' +
            '\'cmd\':\'user-presetjoinwidget-insert\',' +
            '\'params\':[' +
            '\'' + dataForDB[row][0] + '\',' +
            '\'' + dataForDB[row][1] + '\',' +
            '\'' + dataForDB[row][2] + '\',' +
            '\'' + dataForDB[row][3] + '\',' +
            '\'' + dataForDB[row][4] + '\',' +
            '\'' + dataForDB[row][5] + '\',' +
            '\'' + dataForDB[row][6] + '\'' +
            ']' +
            ')'
        );
    }
    $(function () {
        $('#myModal2').modal('toggle');
    });
    $(function () {
        $('#myModal').modal('toggle');
    });
    $(function () {
        $('#myModal3').modal('toggle');
    });
    // console.log(jsonObj);

}