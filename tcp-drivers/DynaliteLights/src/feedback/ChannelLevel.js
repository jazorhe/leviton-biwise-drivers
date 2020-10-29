function ChannelLevel() {
    var ChannelLevelMessage = data.toString();

    var channelStart = ChannelLevelMessage.indexOf("Channel");
    var channelEnd = ChannelLevelMessage.indexOf(", ");
    var channelNum = ChannelLevelMessage.substring(channelStart + 8, channelEnd);

    ChannelLevelMessage = ChannelLevelMessage.substring(channelEnd + 2, ChannelLevelMessage.length);

    var levelStart = ChannelLevelMessage.indexOf("Level");
    var levelEnd = ChannelLevelMessage.indexOf("%, ");
    var levelNum = ChannelLevelMessage.substring(levelStart + 6, levelEnd);

    ChannelLevelMessage = ChannelLevelMessage.substring(levelEnd + 2, ChannelLevelMessage.length);

    var areaStart = ChannelLevelMessage.indexOf("Area");
    var areaEnd = ChannelLevelMessage.indexOf(", ");
    var areaNum = ChannelLevelMessage.substring(areaStart + 5, areaEnd);

    var inFeedbackID = "DYNALITE_BAV_A" + areaNum + "_C" + channelNum + "_LVL";
    // Example "DYNALITE_BAV_A15_C1_LVL"
    var inData = levelNum;

    //THIS_DEVICE.SetGlobalFeedbackData(inFeedbackID, inData);
    //CTRLAPI.Debug.WriteLine("Set Feedback");

    return levelNum;

}

// Expression: (Stop Fade Channel .*)
// Name:
// FBID:
// Test Data:
