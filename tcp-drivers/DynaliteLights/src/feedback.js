// Incoming Data is ASCII: true
// Know Terminator (Hex): 0A0D
// Custom Parsing: false

function AllFeedback(data) {
    // Expression: (.*)
    // Name:
    // FBID:
    // Test Data:
    CTRLAPI.Debug.WriteLine("Found Feedback");

    return data;
}

function ChannelLevel(data) {
    // Expression: (Stop Fade Channel .*)
    // Name:
    // FBID:
    // Test Data:
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

function FoundPresetChange(data) {
    // Expression: (Preset .*)
    // Name:
    // FBID:
    // Test Data:

    THIS_DEVICE.RequestChannelLevel();
    var StopFadeMessage = data;
    var n = StopFadeMessage.indexOf("Area");
    // StopFadeMessage[n + 5]

    return data;
}

function FoundRampingAction(data) {
    // Expression: Channel Level (.*)
    // Name:
    // FBID:
    // Test Data:

    THIS_DEVICE.RequestChannelLevel();
    var StopFadeMessage = data;
    var n = StopFadeMessage.indexOf("Channel");

    return "StopFadeMessage[n + 7]";
}

function ResponseChannelLevel(data) {
    // Reply with Current Level Ch 1, Area 15, TargLev 50%, CurrLev 50%, Join ffhex

    // Expression: Reply with Current Level (.*)
    // Name:
    // FBID:
    // Test Data:

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

    var inFeedbackID = "DYNALITE_BAV_A" + areaNum + "_C" + channelNum + "_LVL";
    // Example "DYNALITE_BAV_A15_C1_LVL"
    var inData = levelNum;

    //THIS_DEVICE.SetGlobalFeedbackData(inFeedbackID, inData);//
    //CTRLAPI.Debug.WriteLine("Set Feedback");

    return levelNum;
}
