function RequestChannelLevel(ChannelNum, AreaNum) {
    var Command = "RCL " + ChannelNum,  + " " + AreaNum + "\r\n";

    return Command;
}
