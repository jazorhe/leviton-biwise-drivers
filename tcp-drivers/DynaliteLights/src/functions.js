function keepAlive() {
    return "\r\n";
}

function RequestChannelLevel(ChannelNum, AreaNum) {
    var Command = "RCL " + ChannelNum  + " " + AreaNum + "\r\n";

    return Command;
}

function SetAreaPreset(PresetNum, AreaNum) {
    var Command = "P " + PresetNum + " " + AreaNum + "\r\n";

    return Command;
}

function setGlobalFeedback(inFeedbackID, inData) {
    THIS_DEVICE.SetGlobalFeedbackData(inFeedbackID, inData);
    return "";
}
