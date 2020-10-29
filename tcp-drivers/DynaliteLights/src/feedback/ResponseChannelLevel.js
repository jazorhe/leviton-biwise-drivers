function ResponseChannelLevel() {
    // Reply with Current Level Ch 1, Area 15, TargLev 50%, CurrLev 50%, Join ffhex
    var ChannelLevelMessage = data.toString();

    var channelStart = ChannelLevelMessage.indexOf("Ch");
    var channelEnd = ChannelLevelMessage.indexOf(", ");
    var channelNum = ChannelLevelMessage.substring(channelStart + 3, channelEnd);

    ChannelLevelMessage = ChannelLevelMessage.substring(channelEnd + 2, ChannelLevelMessage.length);

    var areaStart = ChannelLevelMessage.indexOf("Area");
    var areaEnd = ChannelLevelMessage.indexOf(", ");
    var areaNum = ChannelLevelMessage.substring(areaStart + 5, areaEnd);

    ChannelLevelMessage = ChannelLevelMessage.substring(areaEnd + 2, ChannelLevelMessage.length);

    var levelStart = ChannelLevelMessage.indexOf("CurrLev");
    var levelEnd = ChannelLevelMessage.indexOf("%, J");
    var levelNum = ChannelLevelMessage.substring(levelStart + 8, levelEnd);

    var inFeedbackID = "DYNALITE_BAV_A" + areaNum + "_C" + channelNum + "_LVL"
    // Example "DYNALITE_BAV_A15_C1_LVL"
    var inData = levelNum

    //THIS_DEVICE.SetGlobalFeedbackData(inFeedbackID, inData);//
    //CTRLAPI.Debug.WriteLine("Set Feedback");

    return levelNum
}

// Expression: Reply with Current Level (.*)
// Name:
// FBID:
// Test Data:
