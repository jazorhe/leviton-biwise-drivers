function FoundRampingAction(data) {
    THIS_DEVICE.RequestChannelLevel();
    var StopFadeMessage = data;
    var n = StopFadeMessage.indexOf("Channel");
    StopFadeMessage[n + 7];

    return "StopFadeMessage[n + 7]";
}

// Expression: Channel Level (.*)
// Name:
// FBID:
// Test Data:
