function setHomeColour(argument) {
    var e = document.getElementById("colourBase");
    var setColour = e.options[e.selectedIndex].value;
    $("#colourBase").css('background-color',setColour);
    $("#colourBase").attr('value',setColour);
    $("#homeNavButton").css('background-color', setColour );
}

function setConditionColour(argument) {
    var e = document.getElementById("colourCondition");
    var setColour = e.options[e.selectedIndex].value;
    $("#colourCondition").css('background-color',setColour);
    $("#colourCondition").attr('value',setColour);
    $("#conditionNavButton").css('background-color',setColour );
}

function setTeamColour(argument) {
    var e = document.getElementById("colourTeam");
    var setColour = e.options[e.selectedIndex].value;
    $("#colourTeam").css('background-color',setColour);
    $("#teamNavButton").css('background-color',setColour );
    $("#colourTeam").attr('value',setColour);

}

function setLocationColour(argument) {
    var e = document.getElementById("colourLocation");
    var setColour = e.options[e.selectedIndex].value;
    $("#colourLocation").css('background-color',setColour);
    $("#colourLocation").attr('value',setColour);

    $("#locationNavButton").css('background-color',setColour);
}

function setTimelineColour(argument) {
    var e = document.getElementById("colourTimeline");
    var setColour = e.options[e.selectedIndex].value;
    $("#colourTimeline").css('background-color',setColour);
    $("#timelineNavButton").css('background-color',setColour);
    $("#colourTimeline").attr('value',setColour);

}